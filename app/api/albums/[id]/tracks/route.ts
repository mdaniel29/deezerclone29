
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: Promise<{id : string}>}) {
  const {id} = await params
  try {
    const tracks = await prisma.track.findMany({
      //where: { albumId: Number(params.id) },
      where: { albumId: Number(id) },
    });
    return NextResponse.json(tracks);
  }
  catch (err) {
    console.log("Erreur albums/[id]/tracks/route.ts, err : ", err)
    //return null;
    return NextResponse.redirect('http://127.0.0.1:3000/albums'); // TODO: mettre du process.env
  }
}
