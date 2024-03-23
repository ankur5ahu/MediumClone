import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";
import { createPostInput, updatePostInput } from "@ankur5ahu/common-app";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const header = c.req.header("authorization") || "";
  const res = await verify(header, c.env.JWT_SECRET);

  if (!res) {
    c.status(403);
    return c.json({ error: "unauthorized" });
  }

  c.set("userId", res.id);
  await next();

});


blogRouter.post("/", async (c) => {
  const userId = c.get('userId');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createPostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId

    }
  });

  return c.json({ id: blog.id });

});

blogRouter.put("/", async (c) => {
  const userId = c.get('userId');
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updatePostInput.safeParse(body);
  if (!success) {
    c.status(400);
    return c.json({ error: "invalid input" });
  }

  const blog = await prisma.post.update({
    where: {
      id: body.id,
      authorId: userId
    },
    data: {
      title: body.title,
      content: body.content,
    }
  });

  return c.json({ id: blog.id });
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const blog = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      author: {
        select: {
          name: true,
        }
      }

    }
  });

  return c.json({ blog });
});


blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.post.findFirst({
      where: {
        id
      },
      select:{
        id: true,
        title: true,
        content: true,
        author: {
          select:{
            name: true
          }
        }
      }

    });

    return c.json({ blog });
  }
  catch (e) {
    c.status(404);
    return c.json({ msg: "Error fetching the blog" });
  }

});


