"use client"

import { addData } from "@/action/action"

export default function Button() {
  return (
    <button
      className="border border-white px-4 py-2 hover:cursor-pointer"
      onClick={addData}
    >
      Submit
    </button>
  )
}
