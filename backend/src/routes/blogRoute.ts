import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";

export const blogRoute = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    },
}>();
blogRoute.use("/*", async (c, next) => {
    try {
        const header = c.req.header("authorization") || "";
        const token = header.split(" ")[1];
        const response = await verify(token, c.env.JWT_SECRET);
        console.log(response)
        console.log(token)
        console.log("header", header)
        if (response && header.split(" ")[0] === "Bearer") {
            c.set("userId", String(response.id));
            console.log("Reached here");
            await next();
        } else {
            c.status(403);
            return c.json({
                success: false,
                error: response.error,
            });
        }
    } catch (error) {
        console.log(error);
    }

});

blogRoute.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: c.get("userId"),
        }
    })
    return c.json({
        success: true,
        message: "Blog added",
        blogId: blog.id,
    })
})
blogRoute.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const blog = await prisma.post.update({
        where: {
            id: body.id,
        },
        data: {
            title: body.title,
            content: body.content,
        }
    })
    return c.json({
        success: true,
        message: "Blog Updated"
    })
})
blogRoute.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    console.log("here")
    const all = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true,
                }
            }
        }
    })
    return c.json({
        success: true,
        blogs: all
    })
})

blogRoute.get('/:id', async (c) => { // use '/:id' to define the route parameter
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const id = c.req.param('id');  // Correctly access the 'id' param
        console.log(id);

        const blog = await prisma.post.findFirst({
            where: {
                id: id,  // Ensure 'id' matches the expected type in your database (string/int)
            },
            select: {
                content: true,
                title: true,
                author: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        console.log(blog);

        return c.json({
            success: true,
            post: blog,
        });
    } catch (error) {
        c.status(411);
        return c.json({
            success: false,
            error: error,
        });
    }
});

