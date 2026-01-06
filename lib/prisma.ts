import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
	
const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined}

export async function getPrisma() {
  if (globalForPrisma.prisma) {
    return globalForPrisma.prisma;
  }

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST!,
  port: parseInt(process.env.DATABASE_PORT || "3306"),
  user: process.env.DATABASE_USER!,
  password: process.env.DATABASE_PASSWORD!,
  database: process.env.DATABASE_NAME!,
})
const prisma = new PrismaClient({adapter});
//const prisma = globalForPrisma.prisma || new PrismaClient({adapter})
//const prisma = globalForPrisma.prisma ?? new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
return prisma;
}

// 06/01/26 : IMPORTANT : ne pas exporter prisma directement.
//export default prisma
