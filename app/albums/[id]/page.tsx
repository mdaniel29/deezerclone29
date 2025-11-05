
import { prisma } from "@/app/page";
import TracksList from "./TracksList"

export default async function AlbumPage({ params }: { params: { id: string } }) {
    const {id} = await params;
  const album = await prisma.album.findUnique({
    where: { id: Number(id) },
  });

  if (!album) return <div>Album introuvable</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{album.title}</h1>
      <p className="text-gray-500">{album.artist}</p>
      <TracksList albumId={album.id} />
    </div>
  );
}
