"use server"
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { PostSchema } from "@/lib/schemas"

export async function createPost(newPost: unknown) {
  // Server side validation
  const result = PostSchema.safeParse(newPost)

  if (!result.success) {
    const errorMessages = result
    return errorMessages
  }

  await prisma.post.create({
    data: {
      title: result.data.title,
      content: result.data.content,
      slug: result.data.title.replace(/\s+/g, "-").toLowerCase(),
    },
  })

  revalidatePath("/posts")
}
