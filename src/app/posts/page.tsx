import prisma from "@/lib/prisma"
import PostPreview from "@/components/PostPreview"
import Form from "@/components/Form"

export default async function PostsPage() {
  const posts = await prisma.post.findMany()

  return (
    <main className="mt-16 grid justify-items-center max-w-md w-full">
      <h1 className="text-2xl font-bold text-center">All Posts (0)</h1>
      <hr className="border-none w-full h-[0.125rem] bg-gray-400 mt-6" />
      <ul className=" py-4 grid gap-4 self-start w-full mb-16">
        {posts.map((item) => (
          <li key={item.id}>
            <PostPreview id={item.slug} title={item.title} />
          </li>
        ))}
      </ul>

      <Form />
    </main>
  )
}
