# AI Context Index

This file maps important areas of the project so AI agents and engineers can find relevant context quickly.

## 1. Code Areas

- `app/`
  - Purpose: Next.js App Router directory containing main page and global styles
  - Key files:
    - `page.tsx` - Main landing page composing Hero, Features, Pricing, and CTA components
    - `layout.tsx` - Root layout with metadata and global configuration
    - `globals.css` - Global styles and Tailwind CSS imports

- `components/`
  - Purpose: React components for the landing page
  - Files:
    - `Hero.tsx` - Hero section component
    - `Features.tsx` - Features section component
    - `Pricing.tsx` - Pricing section component
    - `CTA.tsx` - Call-to-action section component
    - `Navigation.tsx` - Navigation component

- `public/`
  - Purpose: Static assets (images, icons, etc.)

## 2. Documentation

- `README.md` - Standard Next.js project README with getting started instructions
- `AI_RULES_AND_BEST_PRACTICES.md` - AI agent operating system and guidelines (v1.2)

## 3. Configuration Files

- `package.json` - Next.js 16.0.7 with React 19, TypeScript, Tailwind CSS 4, ESLint
- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS

## 4. State and Configuration

- `TODO.md` - Task tracking for engineers and AI agents
- `SESSION_NOTES.md` - Chronological log of work sessions
- `/archive/` - Archived versions of state files (when rotated)

## 5. Active Tasks and Experiments

- See `TODO.md` for current and upcoming tasks

## 6. Security and Compliance

- Security requirements:
  - This is a public-facing landing page with no authentication, payment processing, or user data handling at this time
  - No sensitive data or secrets should be hardcoded in the repository
  - Environment variables should be used for any API keys or external service credentials
- Data classification: Public website (informational only)
- No current restrictions on external tools or network calls for development purposes

## 7. Technology Stack

- **Framework**: Next.js 16.0.7 (App Router)
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 (with PostCSS)
- **Linting**: ESLint with Next.js config
- **React Compiler**: Babel plugin enabled (1.0.0)

## 8. Development Workflow

- **Dev Server**: `npm run dev` (runs on http://localhost:3000)
- **Build**: `npm run build`
- **Start Production**: `npm start`
- **Lint**: `npm run lint`
