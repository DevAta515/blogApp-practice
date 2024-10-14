import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'
import { userRoute } from './routes/userRoute'
import { blogRoute } from './routes/blogRoute'
import { cors } from "hono/cors"
const app = new Hono();

app.use("/*", cors())
app.route("/api/v1/user", userRoute);
app.route("/api/v1/blog", blogRoute);


export default app
// DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNzQxZWRlNGMtZDYyNC00MzRkLWFlMjYtZTQ2N2ZmZWFlMjlhIiwidGVuYW50X2lkIjoiYzhmZGI5NzYxMTViZmM3ODM1YjYyZTVlMTBkZmEzNWY2NDJmNWRjOGE4YjAwMDNkNjgyYzJlYzVjYmQxMDU2ZCIsImludGVybmFsX3NlY3JldCI6ImJmODY3YWEyLTMyNjQtNGVmNC1hOWM0LTM5Mjc1NzY2YTUzNiJ9.wEGXL-rbTjU7A_I4mOvWYxRRjxsnMWZyqbaMKf5UNgM"
// DIRECT_URL="<YOUR_DATABASE_CONNECTION_STRING>"