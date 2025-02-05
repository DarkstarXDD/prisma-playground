import prisma from "@/lib/prisma"
import { format } from "date-fns"
import Button from "@/components/Button"
// import { revalidatePath } from "next/cache"

async function deletePost(id: string) {
  "use server"

  await prisma.post.delete({
    where: { id },
  })

  // revalidatePath("/posts")
}

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

  let deletePostWithId = () => {}

  // You can't directly pass arguments to server actions. You have to bind them
  if (post) {
    deletePostWithId = deletePost.bind(null, post?.id)
  }

  return (
    <main className="grid gap-4 justify-items-center">
      <h1 className="text-3xl">{post?.title}</h1>
      <p>{formattedCreatedDate}</p>
      <p>{post?.content}</p>

      <form action={deletePostWithId}>
        <Button>Delete Post</Button>
      </form>
    </main>
  )
}
