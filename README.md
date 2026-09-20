# CV. Suci Surya Wijaya — Modern Corporate & Precision

Company Profile profesional dengan konsep visual **Modern Corporate & Precision** — Navy, Electric Blue, Blueprint Grid.

> "Precise in Every Detail."

## Struktur Project

```
cv-suci-surya-wijaya/
├── website-perusahaan/  # Frontend (Next.js)
│   ├── app/
│   │   ├── page.tsx (Landing)
│   │   ├── tentang-kami/
│   │   ├── layanan/
│   │   ├── proyek/ & proyek/[slug]
│   │   ├── kontak/
│   │   └── admin/ (dashboard, services, projects, messages, company)
│   ├── components/layout (Navbar, Footer)
│   ├── components/ui (Button, SectionTitle, BlueprintGrid)
│   ├── components/home (Hero, Stats, About, VisionMission, ServicesGrid, ProjectsGrid, WhyChooseUs, Process, CTA, ContactForm)
│   ├── lib (api, utils, mockData)
│   ├── services (companyService, serviceService, projectService, messageService, authService)
│   └── types
└── backend/             # Backend (NestJS)
    ├── src/
    │   ├── auth (JWT login, me)
    │   ├── company (GET / PUT)
    │   ├── services (CRUD)
    │   ├── projects (CRUD + upload)
    │   ├── messages (POST public, GET admin)
    │   ├── uploads
    │   └── common/guards
    ├── prisma/schema.prisma (MySQL)
    └── .env
```

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | Next.js 16 App Router, TypeScript, Tailwind CSS 4, Lucide React, Axios, React Hook Form, Zod |
| Backend | NestJS 12, Prisma, MySQL, JWT, bcrypt, class-validator, Helmet |
| DB | MySQL (fallback in-memory demo jika DB belum tersedia) |

## Requirement

- Node.js 18+
- MySQL 8+ (opsional untuk demo — backend berjalan dengan in-memory mock)
- npm

## Installation

### 1. Frontend

```bash
cd website-perusahaan
npm install
cp .env.example .env   # atur NEXT_PUBLIC_API_URL
npm run dev            # http://localhost:3000
npm run build
```

Env frontend (`website-perusahaan/.env`):
```
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL=[GOOGLE_MAPS_EMBED_URL]
```

### 2. Backend

```bash
cd backend
npm install --legacy-peer-deps
cp .env.example .env
# Jika MySQL tersedia:
npx prisma generate
npx prisma migrate dev --name init
# seed opsional: buat user admin via auth.service demo (admin@sucisuryawijaya.co.id / admin123)
npm run start:dev       # http://localhost:3001/api
npm run build
```

Env backend (`backend/.env`):
```
PORT=3001
DATABASE_URL="mysql://root:password@localhost:3306/cv_suci_surya_wijaya"
JWT_SECRET="change-this-secret-key-min-32-chars"
JWT_EXPIRES_IN="1d"
FRONTEND_URL="http://localhost:3000"
```

## Database + Prisma

Model: `User`, `CompanyProfile`, `Service`, `Project`, `ContactMessage`.

```bash
npx prisma generate
npx prisma migrate dev
npx prisma studio
```

Jika MySQL belum tersedia, backend tetap berjalan dengan data mock in-memory (cocok untuk demo & frontend build).

## API Endpoints

```
GET    /api/company
PUT    /api/company              (JWT)

GET    /api/services
GET    /api/services/:slug
POST   /api/services             (JWT)
PATCH  /api/services/:id         (JWT)
DELETE /api/services/:id         (JWT)

GET    /api/projects
GET    /api/projects/:slug
POST   /api/projects             (JWT, multipart image)
PATCH  /api/projects/:id         (JWT)
DELETE /api/projects/:id         (JWT)

POST   /api/messages             (public)
GET    /api/messages             (JWT)
PATCH  /api/messages/:id/status  (JWT)

POST   /api/auth/login
GET    /api/auth/me              (JWT)

POST   /api/uploads              (JWT)
```

Semua endpoint validasi `class-validator` + sanitization, error handling JSON, CORS, Helmet.

## Authentication

- Login: `POST /api/auth/login { email, password }` → `{ accessToken }`
- Token disimpan `localStorage` frontend, dikirim `Authorization: Bearer <token>`
- Password hash `bcrypt`, demo credentials: `admin@sucisuryawijaya.co.id / admin123`

## Frontend API Integration

Abstraksi di `website-perusahaan/lib/api.ts` + `website-perusahaan/services/*`. Tidak ada fetch langsung di component — semua via service layer.

## Admin Dashboard

Route `/admin` (guard via localStorage token). Jika belum login redirect ke `/admin/login`.

Sidebar: Dashboard, Company Profile, Services, Projects, Messages, Settings.

Fitur: stats, CRUD layanan/proyek, ubah status pesan (UNREAD/READ/REPLIED), edit company profile.

## Desain

- Palette: `#0A192F` Navy, `#007BFF` Electric, `#00B4D8` Cyan, `#F4F5F7` Light
- Typography: Inter + Plus Jakarta Sans, uppercase tech-label `01 / ABOUT COMPANY`
- Border radius 2-4px, sharp corners, thin borders, blueprint grid low opacity
- Hero 60/40, Stats navy, grid layout, horizontal process desktop / vertical mobile
- Responsive: mobile hamburger, single column, touch-friendly

## SEO

Next.js Metadata API, OpenGraph, Twitter Card, sitemap.ts, robots.ts, semantic HTML, alt image.

## Build Production

```bash
# frontend
cd website-perusahaan && npm run build && npm start

# backend
cd backend && npm run build && npm run start:prod
```

## Kredensial Demo

- Admin login: `admin@sucisuryawijaya.co.id` / `admin123`
- Data placeholder `[Alamat Perusahaan]` dll tidak diklaim sebagai fakta.

## Catatan

- File upload disimpan di `backend/uploads` (validasi type/size, max 5MB, jpg/png/webp)
- Blueprint grid via CSS `blueprint-grid` / `blueprint-grid-dark`
- Error handling UI: loading, empty, network error konsisten tema corporate
