import type { ComponentProps } from "react"

export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode
} & ComponentProps<"button">) {
  return (
    <button
      className="px-4 py-2 bg-red-400 rounded-md text-slate-800 font-bold"
      {...props}
    >
      {children}
    </button>
  )
}
