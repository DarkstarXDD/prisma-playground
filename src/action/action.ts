"use server"

import prisma from "@/lib/prisma"

export async function addData() {
  const user = await prisma.user.create({
    data: {
      email: "alice@prisma.io",
    },
  })
  console.log(user)
}

export async function addData() {
  const user = await prisma.user.createMany({
    data: [
      { name: "Bob", email: "bob@prisma.io" },
      { name: "Yewande", email: "yewande@prisma.io" },
      { name: "Angelique", email: "angelique@prisma.io" },
    ],
  })
  console.log(user) // Returns an INT which is the count of added items
}

export async function addData() {
  const user = await prisma.user.createManyAndReturn({
    data: [
      { name: "Alice", email: "alice@prisma.io" },
      { name: "Bob", email: "bob@prisma.io" },
    ],
  })
  console.log(user)
}
