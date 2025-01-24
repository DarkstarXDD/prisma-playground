import Link from "next/link"

export default function PostPreview({ title }: { title: string }) {
  return (
    <div className="px-6 py-4 border-2 border-slate-500">
      <h2>
        <Link href="#" className="underline">
          {title}
        </Link>
      </h2>
    </div>
  )
}
