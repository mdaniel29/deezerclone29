//import { prisma } from "@/lib/prisma";

import { prisma } from "@/app/page";
import { useEffect, useState } from "react";

export default async function AlbumPage({ params }: { params: { id: string } }) {
  const album = await prisma.album.findUnique({ where: { id: Number(params.id) } });
  return (
    <div>
      <h1 className="text-2xl font-bold">{album?.title}</h1>
      <p className="text-gray-500">{album?.artist}</p>
      <TracksList albumId={album?.id!} />
    </div>
  );
}

function TracksList({ albumId }: { albumId: number }) {
  const [tracks, setTracks] = useState<any[]>([]);

  useEffect(() => {
    fetch(`/api/albums/${albumId}/tracks`)
      .then(res => res.json())
      .then(setTracks);
  }, [albumId]);

  return (
    <ul className="mt-4">
      {tracks.map(t => (
        <li key={t.id}>{t.title} ({t.duration}s)</li>
      ))}
    </ul>
  );
}
