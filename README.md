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


## Détails implémentation du code : non présent ici. ## 


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

## NOTES

- création fichier global.d.ts à la racine (sinon pb css / TailWind)
- Dans tsconfig.json :
```typescript
 "paths": {
    "@/*": ["./*"],
    "@lib/*": ["./lib/*"]
}
```
- créa fichier pour PrismaClient global : ./lib/prisma.ts
- import de prisma dans les fichiers :
```typescript
import prisma from "@lib/prisma"
```
**28/12/25 : MAJ paramètres connectivité BDD**
**29/12/25 : npm update, ncu -u, prisma generate**
**24/01/26 : ajout @utils/supabase/server.ts - npm i @supabase/ssr**
**24/01/26 : ajout @utils/supabase/middleware.ts**
**27/01/26 : Migration MariaDB => Supabase via SSL, à partir du VPS HostArmada avec pgloader**
**28/01/26 : modif variables d'environnement pour Vercel / Supabase : trackink pool** 
**28/01/26 : rebasculé en Direct Connection (not transaction spooler)**