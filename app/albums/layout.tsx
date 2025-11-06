"use client"
import SearchBar from "../components/Search";
import "../globals.css"
import { ReactNode } from "react";


export default function AlbumsLayout({ children }: Readonly<{ children: ReactNode }>) {

    async function handleSearch(term: string) {
        try {
            const f = await fetch(`/api/albums?search=${term}`);
            if (!f) throw new Error("Pas de recup des albums")
            const resp = await f.json();
            console.log("resp : ", resp)
        } catch (error) {
            console.error("Erreur : ", error);
        }
    }


    return (

        <div className="flex">
            <nav className="w-1/4 p-4 border-r">
                <h2 className="text-xl font-bold mb-2">🎵 Deezer Clone</h2>
                <a href="/albums">Albums</a>
                <SearchBar onSearch={handleSearch} />
            </nav>
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}
