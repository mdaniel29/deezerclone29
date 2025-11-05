import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/page";

//const prisma = new PrismaClient();

export async function GET() {
	const albums = await prisma.album.findMany();
	console.log("albums : ",JSON.stringify(albums));
	return NextResponse.json(albums);
}

