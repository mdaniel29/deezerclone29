import { PrismaClient } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
//import pg from "pg"

const globalForPrisma = global as unknown as { prisma: PrismaClient }
//const connectionString = process.env.DATABASE_URL
const connectionString = process.env.DATABASE_URL_SUPA
//const pool = new pg.Pool({ connectionString })
//const adapter = new PrismaPg(pool)
const adapter = new PrismaPg({
	connectionString, // chaine de connexion (direct connect 5432, NOT pool)
})

const prisma = globalForPrisma.prisma || new PrismaClient(
    {
        adapter,
        errorFormat: "pretty",
    }
)

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

export default prisma

