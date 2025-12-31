import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { 
    prisma: PrismaClient
}

const adapter = new PrismaMariaDb({
  host: "178.162.233.217",
  port: 3306,
  connectionLimit: 20
})

const prisma = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

