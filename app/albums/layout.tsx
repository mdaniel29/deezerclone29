import "../globals.css"
import { ReactNode } from "react";


export default function AlbumsLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (

        <div className="flex">
            <nav className="w-1/4 p-4 border-r">
                <h2 className="text-xl font-bold mb-2">🎵 Deezer Clone</h2>
                <a href="/albums">Albums</a>
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