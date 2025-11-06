import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const albums = await prisma.album.findMany();
	console.log("albums : ",JSON.stringify(albums));
	return NextResponse.json(albums);
}

