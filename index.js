const { PrismaClient } = require('@prisma/client')

async function main() {
  const prisma = new PrismaClient()

  console.log('DELETE')
  await prisma.$executeRaw('DELETE FROM foo')
  
  console.log('INSERT')
  await prisma.foo.createMany({ data: new Array(40000).fill({}) })

  console.log("SELECT")
  await prisma.foo.findMany({
    include: { bars:true }
  })
}

main()
