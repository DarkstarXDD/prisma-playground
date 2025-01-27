// import { createPost } from "@/actions/actions"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

// This is how you can write the server action if writing it in the same file as the component
async function createPost(formData: FormData) {
  "use server"
  await prisma.post.create({
    data: {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      slug: (formData.get("title") as string)
        .replace(/\s+/g, "-")
        .toLowerCase(),
    },
  })

  revalidatePath("/posts")
}

export default async function Form() {
  return (
    <form action={createPost} className="grid gap-6 max-w-sm w-full">
      <div className="grid gap-2">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="text-black outline-blue-500 px-4 py-2"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="content">Post Content</label>
        <textarea
          name="content"
          id="content"
          className="text-black outline-blue-500 px-4 py-2"
        />

        <button className="bg-slate-400 text-slate-800 px-4 py-2">
          Create Post
        </button>
      </div>
    </form>
  )
}
