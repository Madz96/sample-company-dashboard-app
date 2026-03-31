# Northstar Hub

Northstar Hub is a Next.js dashboard skeleton for internal company use. The project starts with a protected application shell, placeholder sections for common employee-facing workflows, and a credentials-based authentication setup that can be replaced later with company SSO.

## Included

- Next.js App Router with TypeScript and Tailwind CSS
- Shared dashboard shell with sidebar navigation and top header
- Protected routes for dashboard, announcements, tools, metrics, requests, and directory
- NextAuth credentials provider for local development and auth flow validation
- Environment template for auth configuration

## Routes

- `/` public overview and entry point
- `/sign-in` authentication screen
- `/dashboard` authenticated dashboard home
- `/announcements` authenticated announcements placeholder
- `/tools` authenticated quick tools placeholder
- `/metrics` authenticated KPI placeholder
- `/requests` authenticated requests placeholder
- `/directory` authenticated team directory placeholder

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template and adjust values as needed:

```bash
copy .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` and sign in with the configured demo credentials.

## Default demo credentials

These values are used when the matching environment variables are not set:

- Email: `admin@company.com`
- Password: `ChangeMe123!`
- Name: `Operations Admin`

Replace these immediately for shared environments.

## Authentication notes

- Route protection is applied through `proxy.ts`.
- Auth configuration lives in `auth.ts`.
- The current credentials provider is a development-ready placeholder.
- When company identity details are available, replace the credentials provider with the correct SSO provider and keep the existing route/layout structure.

## Suggested next steps

1. Replace demo auth with your actual identity provider.
2. Connect each section to a real data source or internal service.
3. Add role-based access rules if different employee groups need different dashboard capabilities.
