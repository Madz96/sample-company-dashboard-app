# Northstar Hub — Project Log

**Project**: Next.js Company Dashboard Skeleton  
**Start Date**: ~30 hours before April 1, 2026  
**Last Updated**: April 1, 2026  
**Authors**: Madhawa Subasinghe / Madz96  
**Status**: Core implementation complete — placeholder routes removed, dashboard home polished

---

## Executive Summary

Northstar Hub is a Next.js internal dashboard skeleton. A protected application shell with a polished design system, collapsible sidebar, and credentials-based authentication was built and refined across four commits. The most recent work stripped out placeholder section routes to leave the project clean for feature teams to build on top of rather than tear down.

---

## Git Commit Timeline

| Commit | Message | Timing | Author |
|--------|---------|--------|--------|
| `9444ccd` | Initial commit from Create Next App | ~30 hrs ago | Madhawa Subasinghe |
| `5a68de7` | Initial project with dashboard components | ~30 hrs ago | Madhawa Subasinghe |
| `6bb089d` | auth exception handler | ~3 hrs ago | Madhawa Subasinghe |
| `f9a9c8a` | Remove placeholder content | ~79 mins ago | Madz96 |

---

## Completed Work

### Commit 1 — `9444ccd`: Initial commit from Create Next App (~30 hrs ago)

Project scaffolded from `create-next-app`:

- Next.js 16 with App Router
- TypeScript configured
- Tailwind CSS v4 integrated
- ESLint configured with modern flat config (`eslint.config.mjs`)
- `postcss.config.mjs` configured
- Base `tsconfig.json` and `next.config.ts` in place

**Key files created**: `package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `postcss.config.mjs`, `next-env.d.ts`

---

### Commit 2 — `5a68de7`: Initial project with dashboard components (~30 hrs ago)

The bulk of the product was built in this commit.

#### Design System (`app/globals.css`)

A full token-based CSS design system was established:

- **Custom CSS variables**: `--background`, `--foreground`, `--surface`, `--surface-strong`, `--muted`, `--border`, `--border-strong`, `--accent`, `--accent-strong`, `--accent-soft`, `--success`, `--warning`, `--danger`, and their Tailwind-mapped counterparts via `@theme inline`
- **Light and dark mode**: Full `prefers-color-scheme: dark` variant with adjusted palette
- **Gradient backgrounds**: Layered `radial-gradient` + `linear-gradient` for both modes
- **Utility classes**:
  - `.glass-panel` — surface background + `backdrop-filter: blur(18px)` + box shadow
  - `.hero-glow` — accent radial glow for the landing page
  - `.sidebar-marquee-track` — 8s linear marquee, paused by default, plays on `group:hover` / `group:focus-visible`; disabled with `prefers-reduced-motion`
- **Typography** via `next/font/google`:
  - `Manrope` — primary sans-serif (`--font-manrope`)
  - `IBM Plex Mono` — monospace (`--font-ibm-plex-mono`, weights 400 + 500)

#### Root Layout (`app/layout.tsx`)

- Applies font CSS variables to `<html>`, sets `scroll-smooth`, `antialiased`, `h-full`
- Title template: `"%s | Northstar Hub"` with default `"Northstar Hub"`

#### Authentication (`auth.ts`, `proxy.ts`, `app/api/auth/[...nextauth]/route.ts`)

- NextAuth v5 beta with `Credentials` provider
- Demo user credentials from environment variables with hardcoded fallbacks:
  - Email: `admin@company.com` · Password: `ChangeMe123!` · Name: `Operations Admin`
- JWT session strategy
- `AUTH_SECRET` dev fallback string; throws in production if missing
- `authorized` callback: signed-in users on `/sign-in` → redirect to `/dashboard`; `/dashboard` prefix requires auth
- Route protection via `proxy.ts` middleware

#### Sign-In (`app/sign-in/page.tsx`, `actions.ts`, `components/auth/sign-in-form.tsx`)

- Custom sign-in page with email + password form
- Server action in `actions.ts` calls NextAuth `signIn`

#### Dashboard Layout (`app/(dashboard)/layout.tsx`)

- Server component; reads session, redirects to `/sign-in` if unauthenticated
- Responsive flex layout: column on mobile, row on `lg`; max-width `1600px`
- Mounts `<DashboardSidebar />` + `<DashboardHeader />`

#### Sidebar (`components/dashboard/sidebar.tsx`)

- **Collapsible** via `useState` — `lg:w-[4.5rem]` ↔ `lg:w-[17.5rem]`
- **CSS-only width transition**: `transition-[width]` avoids triggering transitions on unrelated properties
- **Sticky desktop**: `lg:sticky lg:top-4`, `lg:h-[calc(100vh-2rem)]`; `overflow-hidden` clips content mid-animation
- **Brand header collapse** uses two techniques:
  - Opacity fade (`transition-opacity duration-150`) for the logo text
  - `grid-rows-[0fr]` → `grid-rows-[1fr]` for smooth height collapse of the description — no JS-measured heights
- **Nav items**: active state from `pathname === href` or prefix match (excluding `/dashboard` from prefix)
- **Collapsed mode**: link background becomes transparent; hover/active styles move to the icon `<span>` only
- **Marquee descriptions**: `sidebar-marquee-track` plays on hover; text duplicated with `aria-hidden` for seamless loop
- **Toggle button**: `PanelLeftOpen` / `PanelLeftClose` icons; same collapsed/expanded pattern as nav items
- **`whitespace-nowrap`** on all labels prevents wrapping mid-transition

#### Header (`components/dashboard/header.tsx`)

- Personalized welcome: `"Welcome back, {session.user.name}"`
- `ShieldCheck` + "Authenticated session" status badge with user email (hidden on mobile)
- `Sparkles` eyebrow label: "Dashboard skeleton"
- Mounts `<SignOutButton />`

#### Other Components

- **`section-intro.tsx`**: Page header with `eyebrow`, `title`, `description`, optional `aside`; `text-4xl tracking-[-0.04em]`
- **`placeholder-panel.tsx`**: `glass-panel` card with `title`, `description`, and `items: string[]` list
- **`sign-out-button.tsx`**: Client component calling NextAuth `signOut`

#### Navigation Config (`lib/navigation.ts`)

- `DashboardNavItem` type: `{ href, title, description, icon: LucideIcon }`
- `dashboardNavItems` array consumed by `DashboardSidebar`

#### Dashboard Home (`app/(dashboard)/dashboard/page.tsx`)

- `SectionIntro` eyebrow "Overview", title "A shell for cross-company work"
- Aside card: "Recommended next step" callout for backend integration
- Three static stat cards:
  - Announcements queued: `03` (accent / `Newspaper`)
  - Requests awaiting review: `11` (warning / `Clock3`)
  - Systems healthy: `98%` (success / `CheckCircle2`)

#### Environment & Docs

- `.env.example` with `AUTH_SECRET`, `DEMO_USER_*` variables
- `README.md` with setup instructions, routes, credentials, next steps
- VS Code task: `"Next.js dev server"` → `npm run dev` (background)
- **Verified**: `npm run lint` ✅ · `npm run build` ✅

---

### Commit 3 — `6bb089d`: auth exception handler (~3 hrs ago)

- Hardened auth configuration in `auth.ts`
- Improved exception handling in the authorization flow
- Auth secret handling clarified: dev uses named fallback string, production throws if `AUTH_SECRET` is absent

---

### Commit 4 — `f9a9c8a`: Remove placeholder content (~79 mins ago)

The five placeholder section routes — `/announcements`, `/tools`, `/metrics`, `/requests`, `/directory` — were **deleted**. The `(dashboard)` route group now contains only `dashboard/` and `layout.tsx`.

`dashboardNavItems` in `lib/navigation.ts` was trimmed to a **single entry**:

```
Home → /dashboard
"The command surface for daily updates, active work, and quick actions."
```

Feature teams now inherit a clean working shell with one home route rather than stubs they'd have to tear down.

---

## Current Application State

### Active Routes

| Route | Visibility | Notes |
|-------|-----------|-------|
| `/` | Public | Landing page |
| `/sign-in` | Public | Redirects to `/dashboard` if already signed in |
| `/dashboard` | Protected | Dashboard home with stat cards |

### Project Structure

```
sample-app/
├── app/
│   ├── layout.tsx                         # Root layout — fonts, metadata
│   ├── page.tsx                           # Landing page (/)
│   ├── globals.css                        # Design system, dark mode, glass-panel, marquee
│   ├── (dashboard)/
│   │   ├── layout.tsx                     # Auth guard + DashboardSidebar + DashboardHeader
│   │   └── dashboard/
│   │       └── page.tsx                   # Dashboard home — stat cards, SectionIntro
│   ├── api/auth/[...nextauth]/
│   │   └── route.ts                       # NextAuth API handler
│   └── sign-in/
│       ├── page.tsx                       # Sign-in page
│       └── actions.ts                     # NextAuth signIn server action
├── components/
│   ├── auth/
│   │   └── sign-in-form.tsx               # Email/password form
│   └── dashboard/
│       ├── header.tsx                     # Top bar — welcome, session badge, sign-out
│       ├── sidebar.tsx                    # Collapsible sidebar — marquee, CSS transitions
│       ├── section-intro.tsx              # Page header — eyebrow, title, description, aside
│       ├── placeholder-panel.tsx          # Content card — title, description, item list
│       └── sign-out-button.tsx            # NextAuth signOut client button
├── lib/
│   └── navigation.ts                      # DashboardNavItem type + dashboardNavItems (1 item: Home)
├── public/
├── auth.ts                                # NextAuth config — credentials, JWT, auth callbacks
├── proxy.ts                               # Middleware — route protection
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
├── postcss.config.mjs
└── package.json
```

### Technology Stack

| Component | Technology | Notes |
|-----------|-----------|-------|
| Framework | Next.js 16 (App Router) | Server + client components |
| Language | TypeScript | Strict mode |
| Styling | Tailwind CSS v4 | Custom token design system |
| Auth | NextAuth v5 beta | Credentials provider, JWT sessions |
| Icons | Lucide React | Used across all dashboard components |
| Fonts | Manrope + IBM Plex Mono | Loaded via `next/font/google` |
| Package Manager | npm | |

### Environment Variables

| Variable | Default | Required in Production |
|----------|---------|------------------------|
| `AUTH_SECRET` | Dev fallback string | Yes — throws if missing |
| `DEMO_USER_EMAIL` | `admin@company.com` | No |
| `DEMO_USER_PASSWORD` | `ChangeMe123!` | No |
| `DEMO_USER_NAME` | `Operations Admin` | No |

### Verification Status

| Check | Command | Status |
|-------|---------|--------|
| Linting | `npm run lint` | ✅ Passes |
| Build | `npm run build` | ✅ Passes |
| Dev server | `npm run dev` | ✅ VS Code task running |

---

## Known Limitations & Technical Debt

- **Demo credentials**: Hardcoded fallbacks in `auth.ts` — must be replaced before any shared deployment
- **Single nav item**: Only `/dashboard` is in the nav; remaining sections need to be built and re-added to `dashboardNavItems`
- **No RBAC**: All authenticated users access all routes equally
- **No error boundaries**: No `error.tsx` or `not-found.tsx` pages defined yet
- **No loading states**: No `loading.tsx` skeletons configured in the route group

---

## Next Steps (Recommended)

1. **Build real sections** — Add routes for announcements, tools, metrics, requests, directory as proper implementations; register each in `dashboardNavItems`
2. **Replace demo auth** — Swap the `Credentials` provider in `auth.ts` for your SSO provider; the session shape, layout, and route protection all stay the same
3. **Connect live data** — Replace the static stat values on the dashboard home with real API calls
4. **Add error + loading UI** — Create `error.tsx` and `loading.tsx` in `app/(dashboard)/` and section routes
5. **RBAC** — Add role claims to the JWT token and check them in the `authorized` callback or per-page

---

## Documentation

| File | Purpose |
|------|---------|
| `README.md` | User-facing setup guide |
| `.env.example` | Environment template |
| `.github/copilot-instructions.md` | Setup checklist |
| `PROJECT_LOG.md` | This file |

---

**Last Updated**: April 1, 2026
