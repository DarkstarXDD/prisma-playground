"use client"

import { testServerAction } from "@/actions/actions"

export default function TestButton({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <button
      className="px-4 py-2 bg-red-400 rounded-md text-slate-800 font-bold"
      onClick={testServerAction}
    >
      {children}
    </button>
  )
}
