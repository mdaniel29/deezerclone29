
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

import { getPrisma } from "@/lib/getprisma";
//import prisma from "@/lib/prisma";
const prisma = await getPrisma();

import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	const albums = await prisma.album.findMany();
	console.log("albums : ",JSON.stringify(albums));
	return NextResponse.json(albums);
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const album = await prisma.album.create({
    data: {
      title: data.title,
      artist: data.artist,
      cover: data.cover,
    },
  });
  return NextResponse.json({ album }, { status: 201 });
}

