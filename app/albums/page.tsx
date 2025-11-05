//import { prisma } from "@/lib/prisma";

import { Album } from "../generated/prisma/client";
import { prisma } from "../page";
import RenderImage from "./RenderImage";

//import { PrismaClient } from "@prisma/client";

//export const prisma = new PrismaClient;


export default async function AlbumsPage() {

    async function getImage(albumId: number): Promise<string> {
        const albumImg = await prisma.album.findFirst({ where: { id: albumId }, select: { cover: true } })
        //console.log("Dans la function getImage(), albumImg : ", albumImg)
        if (!albumImg) throw new Error("Image introuvable")
        const image = `/images/${albumImg.cover}`;
        return image;
    }


    const albums = await prisma.album.findMany();
    return (
        <div>
            <h1 className="text-2xl mb-4">Albums</h1>
            <ul className="">
                {albums.length > 0 && albums.map(a => (
                    <li key={a.id} className="m-2 mb-3">
                        <a href={`/albums/${a.id}`} className="hover:underline text-blue-700 mb-2">{a.title} — {a.artist}</a>
                        {a.id && <RenderImage key={a.id} urlImg={"/images/"+a.cover} />}
                    </li>
                ))}
            </ul>
        </div>
    );
}
