import SearchBar from "../components/Search";
import "../globals.css"
import { ReactNode } from "react";


export default function AlbumsLayout({ children }: Readonly<{ children: ReactNode }>) {

function handleSearch(term: string) {
    const fetchTitle = async () => {
        const f = await fetch("/api/albums");
        if (!f) throw new Error("Pas de recup des albums")
            const resp = await f.json();
        console.log("resp : ", resp)
    } 
}

    return (

        <div className="flex">
            <nav className="w-1/4 p-4 border-r">
                <h2 className="text-xl font-bold mb-2">🎵 Deezer Clone</h2>
                <a href="/albums">Albums</a>
                {/* <SearchBar onSearch={handleSearch} /> */} TODO: Debug
            </nav>
            <main className="flex-1 p-4">{children}</main>
        </div>
    );
}












//     <html lang="fr">
//       <body>
//         console.log("Dossier albums, layout.tsx")
//         <div className="bg-green-100">
//         <p className="text-orange-600">Composant RootLayout (children : fond vert pâle)</p>
//         <Navbar /> 
//         {children}
//         </div>
//       </body>
//     </html>
//   );
// }