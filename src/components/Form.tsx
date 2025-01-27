import { createPost } from "@/actions/actions"

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
