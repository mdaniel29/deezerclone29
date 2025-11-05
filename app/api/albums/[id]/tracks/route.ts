//import { prisma } from "@/lib/prisma";
//import { prisma } from "@/app/albums/page";

import { prisma } from "@/app/page";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const {id} = await params
  const tracks = await prisma.track.findMany({
    //where: { albumId: Number(params.id) },
    where: { albumId: Number(id) },
  });
  return NextResponse.json(tracks);
}
