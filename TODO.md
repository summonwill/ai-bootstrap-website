# Project TODO

This file tracks tasks for engineers and AI agents.

## Conventions

- Use checkboxes: `- [ ]` for open, `- [x]` for done.
- Include a short description and optional owner or priority.

## Backlog

### Phase 0 - Architecture & Specs (LAUNCH_ROADMAP Week 1)
- [ ] Freeze CLI command specification (abs check, abs determinism, abs init, abs notes, abs report)
- [ ] Design governance check rules v1 (diff threshold, file rewrite detection, high-risk paths)
- [ ] Define JSON log schema for audit trail and analytics
- [ ] Create starter kit requirements document
- [ ] Finalize branding and messaging (logo, colors, badge assets)

### Phase 1 - CLI Core (LAUNCH_ROADMAP Weeks 1-3)
- [ ] Implement `abs check` command (governance enforcement)
- [ ] Implement `abs determinism` command (stability testing)
- [ ] Build logger system (JSONL format, rotation, queryable)
- [ ] Create configuration file format (.aibootstrap.json)
- [ ] Write CLI unit tests

### Phase 2 - GitHub Action (LAUNCH_ROADMAP Weeks 4-5)
- [ ] Build GitHub Action (wraps CLI)
- [ ] Add PR comment functionality
- [ ] Implement artifact upload for logs
- [ ] Publish to GitHub Marketplace
- [ ] Create action documentation with examples

### Phase 3 - Starter Kit (LAUNCH_ROADMAP Weeks 6-7)
- [ ] Create Next.js governed starter kit
- [ ] Add example governed workflow (sample PR)
- [ ] Write governance guide documentation
- [ ] Test setup time (target: < 5 minutes)

### Phase 4 - Make It Sellable (LAUNCH_ROADMAP Week 8)
- [ ] Integrate Stripe billing (Pro tier $19/mo)
- [ ] Build documentation site (MDX-based)
- [ ] Polish landing page for launch
- [ ] Set up Discord server with channels
- [ ] Create launch announcement materials

### Website Maintenance
- [ ] Create /legal/* pages (Terms, Privacy, Disclaimer)
- [ ] Add real benchmark data once test suite exists
- [ ] Create sample SESSION_NOTES.md downloads
- [ ] Review accessibility (a11y) compliance
- [ ] Add E2E tests with Playwright or Cypress (if needed)
- [ ] Optimize images and assets in `public/`

## In Progress

(No active tasks)

## Done

- [x] Initial Next.js project setup with TypeScript and Tailwind CSS
- [x] Create basic landing page structure (Hero, Features, Pricing, CTA components)
- [x] Add AI_RULES_AND_BEST_PRACTICES.md (v1.2)
- [x] Bootstrap AI agent system (generate state files)
- [x] Configure Next.js for static export (Cloudflare Pages compatibility)
- [x] Successfully deploy to Cloudflare Pages (aibootstrapsystems.com)
- [x] Update LAUNCH_ROADMAP.md with engineering feedback (CLI-first, progressive pricing)
- [x] Align website roadmap with LAUNCH_ROADMAP.md (Q1-Q4 2026)
- [x] Update pricing to founding member rate ($19/mo → $24/mo → $29/mo)
- [x] Add Team tier value prop (20 Pro accounts included)
- [x] Create start.bat (auto-launch dev server + browser)
- [x] Create stop.bat (terminate server + release port 3000)
- [x] Update SESSION_NOTES.md with Session 6 documentation
