import prisma from "@/lib/prisma"
import { format } from "date-fns"

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await prisma.post.findUnique({
    where: {
      slug: slug,
    },
  })

  const formattedCreatedDate = post?.createdAt
    ? format(post.createdAt, "dd MMMM, yyyy")
    : "No date available"

  return (
    <main className="grid gap-4 justify-items-center">
      <h1 className="text-3xl">{post?.title}</h1>
      <p>{formattedCreatedDate}</p>
      <p>{post?.content}</p>
    </main>
  )
}
