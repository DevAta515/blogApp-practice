import z from "zod";

export const signupSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional(),
})
export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),

})
export const blogSchema = z.object({
    title: z.string(),
    content: z.string(),

})
export const updateSchema = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string(),

})


export type SigninSchema = z.infer<typeof signinSchema>
export type SignupSchema = z.infer<typeof signupSchema>
export type BlogSchema = z.infer<typeof blogSchema>
export type UpdateSchema = z.infer<typeof updateSchema>