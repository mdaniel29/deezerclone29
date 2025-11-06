
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  const {id} = await params
  const tracks = await prisma.track.findMany({
    //where: { albumId: Number(params.id) },
    where: { albumId: Number(id) },
  });
  return NextResponse.json(tracks);
}
