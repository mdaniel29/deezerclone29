# Projet

## 🎵 Exercice : Mini Deezer Clone avec Next.js

### 🎯 Objectif pédagogique

Réaliser une mini-application de streaming musical (sans son), permettant :

* d'afficher une liste d'albums et de morceaux,
* de naviguer entre les pages,
* de charger les données depuis une base via Prisma,
* d'utiliser à la fois **SSR**, **CSR**, et une **route API**,
* de pratiquer la **navigation groupée** de Next.js (layout imbriqué).


---

### 🕒 Durée : 2 heures

### 🧰 Technologies

* **Next.js 14+ (App Router)**
* **Prisma**
* **React**
* **TailwindCSS** (facultatif pour le style)
* **API Routes**
* **Rendu SSR et CSR combiné**


---

## 🚀 Partie 1 — Mise en place (30 min)


1. **Initialisation du projet**

   ```javascript
   npx create-next-app deezer-clone 
   cd deezer-clone 
   npm install @prisma/client 
   npx prisma init --datasource-provider mysql
   ```
2. **Modèle Prisma**\nDans `prisma/schema.prisma` :

   ```javascript
   model Album {
     id      Int      @id @default(autoincrement())
     title   String
     artist  String
     cover   String
     tracks  Track[]
   }
   
   model Track {
     id      Int      @id @default(autoincrement())
     title   String
     duration Int
     albumId Int
     album   Album   @relation(fields: [albumId], references: [id])
   }
   
   ```

   Puis :

   `npx prisma migrate dev --name `
3. `init npx prisma db seed `

   *(ou insérer quelques données manuellement plus tard dans l'interface Prisma Studio)*
4. **Installer Prisma Client**

   `npm install @prisma/client `


---

## 🎧 Partie 2 — Pages et Navigation (30 min)

### Objectif :

Créer une **navigation groupée** :

* `/albums` : liste des albums
* `/albums/[id]` : détails d'un album (liste des morceaux)
* Un layout commun (`/albums/layout.tsx`) contenant une barre de navigation (groupée sur toutes les pages d'albums).

#### Étapes :


1. Créer le dossier `app/albums/`.
2. Dans `layout.tsx`, définir une navigation commune :

   ```javascript
   export default function AlbumsLayout({ children }: { children: React.ReactNode }) {
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
   
   ```
3. Dans `page.tsx` → SSR :

   ```javascript
   import { prisma } from "@/lib/prisma";
   
   export default async function AlbumsPage() {
     const albums = await prisma.album.findMany();
     return (
       <div>
         <h1 className="text-2xl mb-4">Albums</h1>
         <ul>
           {albums.map(a => (
             <li key={a.id}>
               <a href={`/albums/${a.id}`} className="hover:underline">{a.title} — {a.artist}</a>
             </li>
           ))}
         </ul>
       </div>
     );
   }
   
   ```


---

## 🎵 Partie 3 — Détails d'un album + API Route (30 min)

### Objectif :

Afficher les morceaux d'un album depuis une **route API** (CSR), tout en gardant la page principale en SSR.

#### Étapes :


1. Créer une **route API** :\n`app/api/albums/[id]/tracks/route.ts`

   ```javascript
   import { prisma } from "@/lib/prisma";
   import { NextResponse } from "next/server";
   
   export async function GET(req: Request, { params }: { params: { id: string } }) {
     const tracks = await prisma.track.findMany({
       where: { albumId: Number(params.id) },
     });
     return NextResponse.json(tracks);
   }
   
   ```
2. Dans `app/albums/[id]/page.tsx` :

   ```javascript
   import { prisma } from "@/lib/prisma";
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
   
   ```

✅ **Résultat attendu :**

* Page `/albums` : liste des albums (SSR)
* Page `/albums/[id]` : détails de l'album (SSR ou CSR)
* Layout partagé entre les pages (navigation groupée)
* Données servies via Prisma + API Route


---

## 🧩 Bonus (facultatif, si temps restant – 15 min)

* Ajouter un champ de recherche (CSR) pour filtrer les albums.
* Ajouter un composant de "lecture" simulée (afficher "En lecture…" quand on clique sur un morceau).
* Styliser avec Tailwind.


---