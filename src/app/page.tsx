import Button from "@/components/Button"
import prisma from "@/lib/prisma"

export default async function Home() {
  const user = await prisma.user.findUnique({
    where: {
      email: "bob@prisma.io",
    },
  })

  const user = await prisma.user.findMany()

  const users = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "prisma.io",
      },
    },
  })

  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          name: {
            startsWith: "E",
          },
        },

        {
          AND: {
            role: {
              equals: "ADMIN",
            },
            profileViews: {
              gt: 0,
            },
          },
        },
      ],
    },
  })

  const users = await prisma.user.findMany({
    where: {
      email: {
        endsWith: "prisma.io",
      },
      posts: {
        some: {
          published: false,
        },
      },
    },
  })

  const user = await prisma.user.findUnique({
    where: {
      email: "yewande@prisma.io",
    },

    select: {
      name: true,
      email: true,
    },
  })

  const user = await prisma.user.findUnique({
    where: {
      email: "yewande@prisma.io",
    },

    select: {
      email: true,
      posts: {
        select: {
          likes: true,
        },
      },
    },
  })

  const users = await prisma.user.findMany({
    where: {
      role: "ADMIN",
    },

    include: {
      posts: true,
    },
  })

  console.log(users)

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center">
      <Button />
    </main>
  )
}
