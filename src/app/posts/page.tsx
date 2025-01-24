import prisma from "@/lib/prisma"
import PostPreview from "@/components/PostPreview"

export default async function PostsPage() {
  const posts = await prisma.post.findMany()

  return (
    <main className="mt-16 ">
      <h1 className="text-2xl font-bold text-center">All Posts (0)</h1>
      <hr className="border-none w-full h-[0.125rem] bg-gray-400 mt-6" />
      <ul className=" py-4 grid gap-4 self-start">
        {posts.map((item) => (
          <li key={item.id}>
            <PostPreview title={item.title} />
          </li>
        ))}
      </ul>
    </main>
  )
}
