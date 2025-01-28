"use client"

import { createPost } from "@/actions/actions"
import { PostSchema } from "@/lib/schemas"

async function clientAction(formData: FormData) {
  const newPost = {
    title: formData.get("title"),
    content: formData.get("content"),
  }

  // Client side validation
  const result = PostSchema.safeParse(newPost)

  if (!result.success) {
    console.log(result.error.flatten())
    // return
  }

  const response = await createPost(result.data)

  // Throw / Show any errors if server side validation has failed
  if (response) {
    console.log(response.error.flatten())
  }
}

export default function Form() {
  return (
    <form action={clientAction} className="grid gap-6 max-w-sm w-full">
      <div className="grid gap-2">
        <label htmlFor="title">Post Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="text-black outline-blue-500 px-4 py-2"
        />
        <p id="title-error" className="text-red-400"></p>
      </div>

      <div className="grid gap-2">
        <label htmlFor="content">Post Content</label>
        <textarea
          name="content"
          id="content"
          className="text-black outline-blue-500 px-4 py-2"
        />
        <p id="title-error" className="text-red-400"></p>
      </div>
      <button className="bg-slate-400 text-slate-800 px-4 py-2">
        Create Post
      </button>
    </form>
  )
}
