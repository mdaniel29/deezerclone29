//import { prisma } from "@/lib/prisma";

import { prisma } from "../page";

//import { PrismaClient } from "@prisma/client";

//export const prisma = new PrismaClient;


export default async function AlbumsPage() {
  const albums = await prisma.album.findMany();
  return (
    <div>
      <h1 className="text-2xl mb-4">Albums</h1>
      <ul>
        {albums.length>0 && albums.map(a => (
          <li key={a.id}>
            <a href={`/albums/${a.id}`} className="hover:underline">{a.title} — {a.artist}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
