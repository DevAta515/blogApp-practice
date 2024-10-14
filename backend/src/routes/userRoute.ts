import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signupSchema, signinSchema } from "@dev_ata_515/blogapp-common";
export const userRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
}>();


userRoute.post("/signup", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signupSchema.safeParse(body);
    if (!success) {
        c.status(403)
        return c.json({
            msg: "Input not correct"
        })
    }
    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
            name: body.name,
        },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({
        success: true,
        jwt: token,
    });
});
userRoute.post("/signin", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password,
        },
    });
    if (!user) {
        c.status(403);
        return c.json({
            success: false,
            msg: "User not found",
        });
    }
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt });
});
