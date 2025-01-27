import Link from "next/link"

export default function Home() {
  return (
    <main className=" mt-16 mx-8 grid">
      <Link href={"/posts"} className="text-2xl underline">
        View all posts
      </Link>
    </main>
  )
}
