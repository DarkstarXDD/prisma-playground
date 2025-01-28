import { z } from "zod"

export const PostSchema = z.object({
  id: z.string().optional(),
  title: z.string().nonempty({ message: "Title cannot be empty" }),
  slug: z.string().optional(),
  content: z.string().nonempty({ message: "Content cannot be empty" }),
  published: z.boolean().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
})
