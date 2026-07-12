# `PROJECT_STATE.md`

# My Gujarat Property — Current Project State, Continuity, Verification, Provider, Skill, Risk, and Next-Action Record

This file is the compact operational memory for **My Gujarat Property**.

Claude must read this file at the beginning of every session and update it after every meaningful implementation or verification phase.

This file must always represent the latest verified state of the project.

It must not become a historical archive, duplicated specification, or large narrative document.

Detailed product rules belong in the relevant files inside `docs/`.

Feature-level implementation tracking belongs in `FEATURE_REGISTRY.md`.

This file answers:

* What is currently being worked on?
* What has been verified?
* What remains incomplete?
* Which providers and skills are available?
* Which migrations were added?
* Which bugs or blockers are active?
* Is the development server running?
* What must Claude run next?
* What rollback point exists?
* What must the next Claude session know immediately?

---

## 1. File Authority

This file is subordinate to:

1. The user’s latest explicit instruction
2. `docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`
3. `CLAUDE.md`
4. Relevant detailed documentation
5. Current phase prompt

This file records current state.

It does not independently redefine product scope.

If this file conflicts with a newer approved specification:

* update this file immediately
* preserve the latest approved decision
* record the correction under `Recent State Changes`
* do not continue implementation using stale state

---

## 2. Update Rules

Claude must update this file after:

* every implementation phase
* every verification phase
* every database migration
* every provider configuration change
* every GitHub skill installation or removal
* every production deployment
* every rollback
* every critical bug discovery
* every critical bug fix
* every security or RLS change
* every major design-system change
* every route or architecture restructure
* every hosting, domain, or environment change
* every load-test or recovery-test result
* every change to the current next prompt

Keep this file token-light.

Do not paste:

* complete source code
* complete SQL migrations
* long test logs
* full API responses
* provider secrets
* environment values
* complete bug histories
* complete feature specifications

Reference the exact file, migration, route, or registry entry instead.

---

## 3. Allowed Project Status Values

Use only these project status values:

| Status           | Meaning                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| `NOT_STARTED`    | Work has not started                                                                              |
| `IN_PROGRESS`    | Work is actively being implemented                                                                |
| `DONE`           | Implementation exists but complete verification is pending                                        |
| `PASS`           | Required implementation and verification succeeded                                                |
| `PARTIAL`        | Some required work or verification remains incomplete                                             |
| `FAIL`           | Verification failed                                                                               |
| `BLOCKED`        | A dependency, conflict, or missing decision prevents safe progress                                |
| `SETUP_REQUIRED` | External configuration, account, provider, credential, infrastructure, or user action is required |
| `ROLLED_BACK`    | The related change was reverted                                                                   |

Do not use vague project statuses such as:

* almost done
* nearly complete
* should work
* probably ready
* mostly finished
* production ready maybe

---

## 4. Current Project Snapshot

| Field                                | Current value                                                        |
| ------------------------------------ | -------------------------------------------------------------------- |
| Project                              | My Gujarat Property                                                  |
| Product type                         | Gujarat-focused real-estate marketplace and SaaS management platform |
| Current workstream                   | Phase execution under the new authority system                        |
| Current documentation phase          | All 13 documentation files complete                                  |
| Current status                       | Phase 1 `PASS` — implementation and verification complete            |
| Last completed documentation file    | `prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`   |
| Current implementation phase         | Phase 1 — Architecture Foundation (`PASS`)                           |
| Current verification phase           | Phase 1 verification `PASS` (2026-07-12); Phases -1 and 0 `PASS`     |
| Repository audit under new authority | `PASS` — see Section 6 for findings                                  |
| Production readiness                 | `NOT_STARTED`                                                        |
| Deployment status                    | `NOT_STARTED` — no application code exists                           |
| Development server status            | Running — http://localhost:3000 (npm run dev)                        |
| Last state update                    | 2026-07-12                                                           |
| State owner                          | Claude Code, supervised by the project owner                         |

---

## 5. Final Product Authority Snapshot

The project must be implemented according to the following approved foundation.

### Public roles

* Owner
* Broker
* Builder/Developer

### Internal roles

* Super Admin
* Admin
* permission-scoped staff roles

### Primary product principles

* original Apple-inspired mobile-first UI
* mobile UX is the primary design authority
* deeply connected and clickable product workflows
* Supabase-first backend architecture
* server-backed business data
* strong RLS and authorization
* Direct Inquiry as the public property and project contact flow
* unified Leads workspace
* project units managed inside the related project
* city-based search and SEO
* Gujarat textual address hierarchy
* detailed Admin and Super Admin drill-down
* reason-required and audited sensitive mutations
* honest provider state
* no fake production success
* full implementation followed by separate manual verification
* development server kept running after verification when safe and supported

---

## 6. Current Technical Baseline

### Phase -1 Repository Audit Result (2026-07-12)

The Phase -1 repository and baseline audit was executed against `C:\mygjprop`.

**Primary finding: the repository contains only the 13-file documentation set. No application code exists.**

Complete file inventory (13 files; no hidden files; no directories beyond `docs/` and `prompts/`):

```text
CLAUDE.md
PROJECT_STATE.md
FEATURE_REGISTRY.md
docs/01…09 (all nine detailed documents present)
prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md
```

### Audited technical baseline

| Audit item                                                                 | Finding                                                                                             |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Repository root                                                             | `C:\mygjprop` (Windows 10, win32)                                                                    |
| Git repository                                                              | **Absent at audit start** — initialized during Phase -1 as the safe baseline checkpoint              |
| Git branch / latest commit / uncommitted work                               | None existed before Phase -1; baseline commit recorded in Section 31                                 |
| Package manager / lockfile / `package.json`                                | **Absent** — no Node project exists                                                                  |
| Node.js requirement / framework / Next.js App Router                        | **Absent** — no framework code exists                                                                |
| TypeScript config / Tailwind config / ShadCN / Zustand / Framer Motion      | **Absent**                                                                                           |
| Supabase client, server client, middleware                                  | **Absent**                                                                                           |
| Route groups, public/auth/Owner/Broker/Builder/Admin/API routes             | **Absent** — zero routes exist                                                                       |
| Server actions / service modules                                            | **Absent**                                                                                           |
| Database migrations / tables / RLS policies / indexes / storage buckets     | **Absent** — no `supabase/` directory, no SQL files                                                  |
| Auth configuration                                                          | **Absent**                                                                                           |
| `.env`, `.env.example`, environment files                                   | **Absent** — no secrets present anywhere in the repository (verified)                                |
| Provider adapters / payment / email / media code                            | **Absent**                                                                                           |
| Background jobs / schedulers                                                | **Absent**                                                                                           |
| Tests / lint config / build config / CI-CD workflows / deployment config    | **Absent**                                                                                           |
| Monitoring / analytics code                                                 | **Absent**                                                                                           |
| Documentation files                                                         | All 13 authority files present and current (dated 2026-07-12)                                        |
| Generated files / duplicate components / duplicate services / dead routes   | None — nothing exists to duplicate                                                                   |
| Broken imports / build errors / type errors / lint errors / test failures   | Not applicable — no code, no toolchain, no runnable commands                                         |
| Security-sensitive code                                                     | None present; no secret exposure found                                                               |

### Route inventory (Phase -1)

No routes exist. There is no application, no `app/` or `pages/` directory, and no development server. The route inventory is intentionally empty; routes must be created starting from the first implementation phase, following the route authority in `docs/05`–`docs/08`. No routes were invented.

### Database inventory (Phase -1)

No migrations, tables, functions, triggers, views, enums, indexes, RLS policies, or storage configuration exist. There is no schema drift risk yet because there is no schema. Ownership columns, soft-delete fields, audit structures, billing structures, and provider structures are all `NOT_STARTED` and must be created per `docs/02`.

### Build baseline (Phase -1)

No `package.json` or any tooling exists, so dependency installation, lint, typecheck, tests, and production build are all **not applicable**. No commands were invented or run. No build-blocking configuration defect exists to fix.

### Documentation-vs-reality drift (resolved in this audit)

Earlier revisions of this file and `FEATURE_REGISTRY.md` marked many modules `NOT_STARTED`, implying an existing legacy codebase. **No such code exists in this repository.** All unevidenced `NOT_STARTED` implementation claims were normalized to `NOT_STARTED` during Phase -1. If a legacy My Gujarat Property codebase exists elsewhere, the user must supply its location; until then, this repository is a greenfield documentation-only baseline.

### Phase -1 Defect and Risk Register

| Severity | Risk / defect | Category | Resolution path |
| -------- | ------------- | -------- | --------------- |
| Critical | Documentation claimed `PARTIAL` implementations that do not exist in this repository | Documentation drift | Normalized to `NOT_STARTED` in this audit; Phase -1 verification must confirm |
| Critical | Repository was not under version control before this audit — no rollback safety existed | Git safety | Git initialized and baseline commit created during Phase -1 |
| High | Whether a legacy application codebase exists elsewhere is unknown | Unknown — requires user decision | User must confirm greenfield build or provide legacy repository location before the first implementation phase |
| High | No application scaffold, toolchain, or build system exists — every build/lint/test/RLS gate is currently unexecutable | Build blocker | Created in the first implementation phase per `docs/02` and the phase prompts |
| High | No Supabase project, schema, or RLS exists | Schema blocker | Requires Supabase project creation and first migrations per `docs/02` |
| High | No provider accounts or credentials (SMS OTP, email, payment, media, hosting, domain, monitoring) | Provider blocker (`SETUP_REQUIRED`) | User supplies credentials during the relevant phases |
| Medium | GitHub skills (Section 13) are not yet inspected or installed | Tooling | Phase 0 |
| Medium | No `.env.example` or environment-variable documentation exists yet | Configuration | Create with the first application scaffold |
| Low | `docs/` files are large (~65–93 KB each); sessions must follow the token-light rule and read only phase-relevant documents | Process | Already mandated by `CLAUDE.md` Section 6 |

There are no UX blockers or deployment blockers yet because no UI or deployment exists; both categories become active from the first implementation phase.

---

## 7. Current Documentation Set

All 13 documentation files exist on disk and were confirmed during the Phase -1 audit (2026-07-12):

| File                                                                 | Status                              |
| -------------------------------------------------------------------- | ----------------------------------- |
| `CLAUDE.md`                                                          | `PASS` for documentation generation |
| `PROJECT_STATE.md`                                                   | Present — updated by Phase -1 audit |
| `FEATURE_REGISTRY.md`                                                | Present — updated by Phase -1 audit |
| `docs/01…09` (all nine detailed documents)                           | Present                             |
| `prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`   | Present                             |

---

## 8. Current Implementation State

The new implementation authority has not yet been executed against the repository.

Therefore, no module may be considered verified under the new system until:

1. the repository is inspected
2. the related phase is implemented
3. the matching verification prompt is run
4. the live browser flow is checked
5. required documentation is updated
6. the result is recorded here and in `FEATURE_REGISTRY.md`

### Module summary

| Module                       | Implementation status | Verification status | Notes                                                                         |
| ---------------------------- | --------------------- | ------------------- | ----------------------------------------------------------------------------- |
| Project foundation           | `NOT_STARTED`         | `NOT_STARTED`       | Existing repository must be audited                                           |
| Final role architecture      | `NOT_STARTED`         | `NOT_STARTED`       | Must be enforced across UI, database, RLS, services, routing, and billing     |
| Authentication               | `NOT_STARTED`         | `NOT_STARTED`       | Existing auth must be aligned with final mobile-number and 4-digit OTP flow   |
| Registration                 | `NOT_STARTED`         | `NOT_STARTED`       | Final three-role registration must be implemented and verified                |
| Session management           | `NOT_STARTED`         | `NOT_STARTED`       | Redirect, refresh, expiry, and stale-route behavior require audit             |
| Apple-inspired design system | `NOT_STARTED`         | `NOT_STARTED`       | New original UI authority                                                     |
| Responsive application shell | `NOT_STARTED`         | `NOT_STARTED`       | Mobile-first route-specific shells required                                   |
| Homepage                     | `NOT_STARTED`         | `NOT_STARTED`       | Must be rebuilt or refactored under final UX authority                        |
| Homepage city selector       | `NOT_STARTED`         | `NOT_STARTED`       | Must appear only in homepage context                                          |
| Search                       | `NOT_STARTED`         | `NOT_STARTED`       | Meaningful-query flow and state preservation required                         |
| Gujarat location hierarchy   | `NOT_STARTED`         | `NOT_STARTED`       | Backend hierarchy and search integration require verification                 |
| City SEO pages               | `NOT_STARTED`         | `NOT_STARTED`       | Final templates, routes, canonical logic, and indexing controls required      |
| Property posting             | `NOT_STARTED`         | `NOT_STARTED`       | Full lifecycle, validation, moderation, and responsive UX required            |
| Property management          | `NOT_STARTED`         | `NOT_STARTED`       | Edit, Pause, Resume, Delete, Restore, and lead drill-down required            |
| Project posting              | `NOT_STARTED`         | `NOT_STARTED`       | Builder project lifecycle must be audited and completed                       |
| Project units                | `NOT_STARTED`         | `NOT_STARTED`       | Units must be managed inside project context                                  |
| Direct Inquiry               | `NOT_STARTED`         | `NOT_STARTED`       | Final public contact workflow                                                 |
| Unified Leads workspace      | `NOT_STARTED`         | `NOT_STARTED`       | Inquiry, lead, messages, notes, follow-ups, and timeline must be consolidated |
| In-app notifications         | `NOT_STARTED`         | `NOT_STARTED`       | Must be real, contextual, and server-backed                                   |
| Email notifications          | `SETUP_REQUIRED`      | `NOT_STARTED`       | Provider required                                                             |
| SMS OTP                      | `SETUP_REQUIRED`      | `NOT_STARTED`       | Real provider required                                                        |
| Owner dashboard              | `NOT_STARTED`         | `NOT_STARTED`       | Simplification and deep drill-down required                                   |
| Broker dashboard             | `NOT_STARTED`         | `NOT_STARTED`       | Simplification and deep drill-down required                                   |
| Builder dashboard            | `NOT_STARTED`         | `NOT_STARTED`       | Project, unit, lead, and promotion workflows required                         |
| Role-based bottom navigation | `NOT_STARTED`         | `NOT_STARTED`       | Exact role maps and responsive behavior require implementation                |
| Builder homepage carousel    | `NOT_STARTED`         | `NOT_STARTED`       | Real moderation, lifecycle, and display logic required                        |
| Admin user management        | `NOT_STARTED`         | `NOT_STARTED`       | Full linked-entity drill-down required                                        |
| Admin property management    | `NOT_STARTED`         | `NOT_STARTED`       | Contextual editing, moderation, recovery, and audit required                  |
| Admin project management     | `NOT_STARTED`         | `NOT_STARTED`       | Project and unit drill-down required                                          |
| Admin lead management        | `NOT_STARTED`         | `NOT_STARTED`       | Detailed inquiry, message, and activity visibility required                   |
| Moderation recovery          | `NOT_STARTED`         | `NOT_STARTED`       | Reopen, approve-after-rejection, restore, and history required                |
| Billing and subscriptions    | `NOT_STARTED`         | `NOT_STARTED`       | Real provider-backed lifecycle requires audit                                 |
| Payments                     | `SETUP_REQUIRED`      | `NOT_STARTED`       | Provider credentials and webhooks required                                    |
| Media upload and storage     | `SETUP_REQUIRED`      | `NOT_STARTED`       | Final storage and CDN provider required                                       |
| Reports and support          | `NOT_STARTED`         | `NOT_STARTED`       | End-to-end destination and admin workflow required                            |
| Bugs and issue management    | `NOT_STARTED`         | `NOT_STARTED`       | Admin visibility and linked-entity handling required                          |
| Audit logging                | `NOT_STARTED`         | `NOT_STARTED`       | Sensitive action coverage must be verified globally                           |
| Security controls            | `NOT_STARTED`         | `NOT_STARTED`       | Complete threat, auth, RLS, rate-limit, and privacy audit required            |
| Performance and scale        | `NOT_STARTED`         | `NOT_STARTED`       | Measurable architecture and testing required                                  |
| Deployment                   | `SETUP_REQUIRED`      | `NOT_STARTED`       | Hosting, domain, DNS, and production environment required                     |
| Production sign-off          | `NOT_STARTED`         | `NOT_STARTED`       | Requires all relevant phases and verification                                 |

---

## 9. Current UX and Interaction State

The existing application must not be treated as verified UX.

The new UX authority requires complete system-level inspection and implementation.

### Known high-priority UX work

| Area                 | Status        | Required outcome                                                                |
| -------------------- | ------------- | ------------------------------------------------------------------------------- |
| Mobile design        | `NOT_STARTED` | Original Apple-inspired mobile-first product experience                         |
| Tablet design        | `NOT_STARTED` | Intentional tablet information architecture and navigation                      |
| Desktop design       | `NOT_STARTED` | Responsive expansion of the mobile-first system                                 |
| Header system        | `NOT_STARTED` | Route-specific public, search, detail, auth, dashboard, task, and admin headers |
| Bottom navigation    | `NOT_STARTED` | Role-based mobile and tablet destinations                                       |
| Back behavior        | `NOT_STARTED` | Previous meaningful context preserved                                           |
| Close behavior       | `NOT_STARTED` | Temporary context dismissed safely                                              |
| Cancel behavior      | `NOT_STARTED` | Unsaved changes handled correctly                                               |
| Browser Back         | `NOT_STARTED` | Predictable, no stale auth or lost context                                      |
| Search state         | `NOT_STARTED` | Query, filters, sort, tab, pagination, and return context preserved             |
| List-detail-return   | `NOT_STARTED` | Deep navigation without state loss                                              |
| Loading states       | `NOT_STARTED` | Skeleton and progress behavior across all data screens                          |
| Empty states         | `NOT_STARTED` | First-use, filtered, and no-result states differentiated                        |
| Error states         | `NOT_STARTED` | Recovery action and user-safe explanation                                       |
| Notifications        | `NOT_STARTED` | Real destination and close/leave behavior                                       |
| Forms                | `NOT_STARTED` | Validation, keyboard, save, cancel, failure, and recovery                       |
| Text clipping        | `NOT_STARTED` | No clipped, cut, misaligned, or broken text                                     |
| Fixed and sticky UI  | `NOT_STARTED` | No content coverage or keyboard obstruction                                     |
| Accessibility        | `NOT_STARTED` | Keyboard, focus, labels, semantics, reduced motion, touch targets               |
| Deep clickable graph | `NOT_STARTED` | Every meaningful relationship has a real destination                            |
| Dead-end removal     | `NOT_STARTED` | Every screen has a logical entry, exit, success, and recovery path              |

---

## 10. Current Role-State Summary

### Owner

| Capability                   | Status        |
| ---------------------------- | ------------- |
| Registration and login       | `NOT_STARTED`     |
| Owner profile                | `NOT_STARTED`     |
| Owner dashboard              | `NOT_STARTED`     |
| Property creation            | `NOT_STARTED`     |
| Property management          | `NOT_STARTED`     |
| Property-specific leads      | `NOT_STARTED` |
| Unified Leads workspace      | `NOT_STARTED`     |
| Direct Inquiry participation | `NOT_STARTED` |
| Billing and subscription     | `NOT_STARTED`     |
| Notifications                | `NOT_STARTED`     |
| Mobile bottom navigation     | `NOT_STARTED`     |
| End-to-end live verification | `NOT_STARTED` |

### Broker

| Capability                   | Status        |
| ---------------------------- | ------------- |
| Registration and login       | `NOT_STARTED`     |
| Broker profile               | `NOT_STARTED`     |
| Broker dashboard             | `NOT_STARTED`     |
| Listing creation             | `NOT_STARTED`     |
| Listing management           | `NOT_STARTED`     |
| Listing-specific leads       | `NOT_STARTED` |
| Unified Leads workspace      | `NOT_STARTED`     |
| Permitted requirements       | `NOT_STARTED`     |
| Billing and subscription     | `NOT_STARTED`     |
| Notifications                | `NOT_STARTED`     |
| Mobile bottom navigation     | `NOT_STARTED`     |
| End-to-end live verification | `NOT_STARTED` |

### Builder/Developer

| Capability                      | Status        |
| ------------------------------- | ------------- |
| Registration and login          | `NOT_STARTED`     |
| Builder profile                 | `NOT_STARTED`     |
| Builder dashboard               | `NOT_STARTED`     |
| Project creation                | `NOT_STARTED`     |
| Project management              | `NOT_STARTED`     |
| Unit management inside projects | `NOT_STARTED`     |
| Project-specific leads          | `NOT_STARTED` |
| Unit-specific context           | `NOT_STARTED` |
| Homepage promotion carousel     | `NOT_STARTED` |
| Billing and subscription        | `NOT_STARTED`     |
| Notifications                   | `NOT_STARTED`     |
| Mobile bottom navigation        | `NOT_STARTED`     |
| End-to-end live verification    | `NOT_STARTED` |

---

## 11. Current Admin and Super Admin State

The final Admin and Super Admin experience must be a deeply connected management system.

### Required global management graph

```text
Users
→ User
→ Profile
→ Account and role state
→ Properties
→ Projects
→ Units
→ Direct inquiries
→ Leads
→ Messages and activity
→ Reports
→ Support and bugs
→ Billing
→ Subscriptions
→ Payments
→ Invoices
→ Notifications
→ Verification
→ Sessions and devices
→ Security events
→ Moderation history
→ Audit trail
→ Recovery history
```

### Current status

| Admin area                    | Status        | Required work                                        |
| ----------------------------- | ------------- | ---------------------------------------------------- |
| User list                     | `NOT_STARTED`     | Complete filtering, search, stable responsive layout |
| User detail                   | `NOT_STARTED`     | Full related-entity drill-down                       |
| User editing                  | `NOT_STARTED`     | Contextual, permission-scoped, audited editing       |
| Role and status actions       | `NOT_STARTED`     | Reason, confirmation, authorization, history         |
| Property moderation           | `NOT_STARTED`     | Full review and recovery lifecycle                   |
| Project moderation            | `NOT_STARTED`     | Project and unit inspection                          |
| Lead visibility               | `NOT_STARTED`     | Inquiry, messages, activity, and linked entities     |
| Report handling               | `NOT_STARTED`     | Real destination, status, assignment, and resolution |
| Bugs and support              | `NOT_STARTED` | Connected issue-management workflow                  |
| Billing management            | `NOT_STARTED`     | Real subscription, payment, invoice, correction flow |
| Provider management           | `NOT_STARTED`     | Safe configuration presence and health               |
| Audit logs                    | `NOT_STARTED`     | Global sensitive-action coverage                     |
| Recovery tools                | `NOT_STARTED` | Reopen, restore, unsuspend, re-approve, and reversal |
| Admin mobile UX               | `NOT_STARTED` | Responsive cards, drawers, sheets, and task flows    |
| Admin accessibility           | `NOT_STARTED` | Keyboard, focus, semantics, labels                   |
| End-to-end admin verification | `NOT_STARTED` | Real live-browser testing required                   |

---

## 12. Provider State

Provider values must reflect actual configuration and testing.

Raw secrets must never be written here.

### Provider status matrix

| Provider area          | Intended use                                 | Current status   | Verification                      | Required next action                                         |
| ---------------------- | -------------------------------------------- | ---------------- | --------------------------------- | ------------------------------------------------------------ |
| Supabase Auth          | Mobile authentication foundation             | `CONFIGURED_NOT_TESTED` | `NOT_STARTED`                  | Credentials received 2026-07-12 (stored in .env.local only); test auth flow in the relevant phase |
| Supabase PostgreSQL    | Primary database                             | `CONFIGURED_NOT_TESTED` | `NOT_STARTED`                  | Project URL + keys received 2026-07-12 (.env.local); connect and create first migrations in the schema phase |
| Supabase RLS           | Data isolation                               | `NOT_STARTED`        | `NOT_STARTED` under new authority | Run guest, wrong-user, wrong-role, and admin tests           |
| Supabase server client | Trusted server access                        | `CONFIGURED_NOT_TESTED` | `NOT_STARTED`                  | Service-role key received (server-only, .env.local); wire in app foundation phase |
| SMS OTP                | OTP delivery only                            | `SETUP_REQUIRED` | `NOT_STARTED`                     | Select provider, configure, test, and retest production      |
| Email                  | External notifications and operational email | `SETUP_REQUIRED` | `NOT_STARTED`                     | Select provider and configure templates, retries, and status |
| Payment (Razorpay)     | Subscription and approved payment flows      | `TEST_MODE_ONLY` | `NOT_STARTED`                     | Test-mode keys + webhook secret received 2026-07-12 (.env.local); webhook needs public URL; integrate in billing phase |
| Media storage          | Images and approved documents                | `SETUP_REQUIRED` | `NOT_STARTED`                     | Select storage provider and configure access policy          |
| CDN                    | Optimized media and public asset delivery    | `SETUP_REQUIRED` | `NOT_STARTED`                     | Configure cache and invalidation                             |
| Error monitoring       | Production diagnostics                       | `SETUP_REQUIRED` | `NOT_STARTED`                     | Configure provider and redaction                             |
| Analytics              | Approved product analytics                   | `SETUP_REQUIRED` | `NOT_STARTED`                     | Define approved events and privacy rules                     |
| Cron/background jobs   | Expiry, reminders, processing                | `SETUP_REQUIRED` | `NOT_STARTED`                     | Select execution environment and idempotent jobs             |
| Backup and recovery    | Database and operational continuity          | `SETUP_REQUIRED` | `NOT_STARTED`                     | Configure backup, restore, and verification                  |
| Hosting                | Production application runtime               | `SETUP_REQUIRED` | `NOT_STARTED`                     | User to provide final hosting access                         |
| Domain and DNS         | Production domain                            | `SETUP_REQUIRED` | `NOT_STARTED`                     | User to provide domain and DNS access                        |
| SSL                    | Secure production transport                  | `SETUP_REQUIRED` | `NOT_STARTED`                     | Verify after domain deployment                               |

### Provider rules

* Configuration presence is not the same as verified operation.
* Test mode is not production readiness.
* A provider must not be marked `ACTIVE` until a real test succeeds.
* A provider must not be marked `LIVE_READY` until production credentials and production tests succeed.
* A missing provider must display an honest setup or blocked state.
* Provider failures must not silently lose user data.
* Sensitive provider settings require Super Admin permission and audit logging.
* Secret values must never be displayed in the admin UI.

---

## 13. GitHub Skills State

### Phase 0 result (2026-07-12) — all nine candidate repositories inspected live

Environment at inspection time: Windows 10, Node v22.19.0, npm 11.6.2, **Python absent**, **uv absent**.

**Installed (project-local, `.claude/skills/`, by manual copy of the official skill directories after full file-level and security inspection — no install scripts executed):**

| Skill | Status | Installed location | Commit | License | Security | Smoke test |
| ----- | ------ | ------------------ | ------ | ------- | -------- | ---------- |
| UI/UX Pro Max | `INSTALLATION_APPROVED` — installed | `.claude/skills/ui-ux-pro-max/` | `3da52ff` | MIT | PASS — local CSV design database, no network/telemetry; optional Python search scripts degrade gracefully (Python absent; CSVs remain directly readable) | PASS |
| LottieFiles Motion Design | `INSTALLATION_APPROVED` — installed | `.claude/skills/motion-design/` | `f9a8a04` | MIT | PASS — pure Markdown, no scripts | PASS |
| Responsive Craft | `INSTALLATION_APPROVED` — installed | `.claude/skills/responsive-craft/` | `4863701` | MIT (README declaration; repo has no LICENSE file — noted) | PASS — Node scripts are localhost-only preview/snapshot tools, invoked only on demand | PASS |
| Storymap (user-story-mapping) | `INSTALLATION_APPROVED` — installed | `.claude/skills/user-story-mapping/` | `35cf8a1` | MIT | PASS — Markdown skill; optional Python exporters unavailable until Python is installed | PASS |

**Installed in the Phase 0 follow-up (2026-07-12, explicit user instruction "install remaining"):**

| Skill | Status | Installed location | Revision | License | Notes and constraints |
| ----- | ------ | ------------------ | -------- | ------- | --------------------- |
| BMAD Method | `INSTALLATION_APPROVED` — installed | `_bmad/` + 46 `bmad-*` skills in `.claude/skills/` | v6.10.0 (official `npx bmad-method install`, non-interactive, module `bmm`, tool `claude-code`) | MIT | **Authority guard:** BMAD planning/PRD/architecture workflows must not create parallel authority documents; the 13-file authority remains supreme. Some workflows use `uv run` (uv now installed). |
| GitHub Spec Kit | `INSTALLATION_APPROVED` — installed | `.specify/` + 10 `speckit-*` skills in `.claude/skills/` | v0.12.11 (`specify-cli` via `uv tool install`; `specify init --here --integration claude`) | MIT | **Authority guard:** do not run `speckit-constitution` to generate a competing constitution without explicit user approval; generated specs defer to `docs/01`. |
| Interaction Design Skills | `LICENSE_REVIEW_REQUIRED` — installed at user instruction | `.claude/skills/interaction-design/` | `57a3eaa` | **None** — repository has no license file or statement | Private in-project prompt use only; do not redistribute; remove or replace if the author's terms emerge. User accepted the risk by instructing installation. |
| UI/UX Agent Skill System | `INSTALLATION_APPROVED` — curated subset installed | `.claude/skills/`: `ux-audit-skill`, `ux-journey-architect`, `webapp-ui-skill`, `admin-ui-builder`, `design-critic-skill` (Apache-2.0 LICENSE + NOTICE in each) | `ddaedd7` | Apache-2.0 | Installer inspected: benign local file-copier, no network or telemetry — prior `SECURITY_REVIEW_REQUIRED` resolved by inspection. 63 of 68 bundled skills NOT installed: off-scope (SEO, domains, server provisioning, Figma, paid traffic) or duplicate (its bundled `ui-ux-pro-max` copy would collide with the installed one). |
| Shadcn Admin Skill | `PARTIALLY_COMPATIBLE` — installed at user instruction | `.claude/skills/shadcn-admin/` | `9cffa46` | MIT | Prompts in Chinese; scaffolding scripts target the Vite/TanStack `shadcn-admin` template. Use only its shadcn/TanStack Table reference patterns; never run `create_feature.py`/`add_sidebar_item.py` against the Next.js App Router codebase. |

**Supporting tooling installed (user-local, outside the repository):** `uv 0.11.28` at `C:\Users\RAJAN\.local\bin\uv.exe` (official standalone GitHub release binary — remote install script was not executed) and `specify-cli 0.12.11` (`uv tool install`). uv-managed CPython downloads emitted a version-link warning; `specify` is functional. System-wide Python remains absent.

### Skill responsibility map (Phases 1–18)

* Planning / journey / slicing phases → `user-story-mapping`, `bmad-*` planning agents (constrained by authority guard), `speckit-specify`/`speckit-plan`/`speckit-tasks` for feature specs and acceptance criteria
* Design system, UI quality phases → `ui-ux-pro-max` (primary), `design-critic-skill`, `webapp-ui-skill`
* Interaction behavior, navigation matrices → `interaction-design`, `ux-journey-architect`
* UX audits → `ux-audit-skill` (complete SaaS UX audit phases)
* Responsive implementation and width verification → `responsive-craft`
* Motion and interaction feedback → `motion-design`
* Admin UI phases → `admin-ui-builder`, `shadcn-admin` (reference patterns only), `ui-ux-pro-max`
* Overlap resolution: `ui-ux-pro-max` remains the primary UX-intelligence source; other UX skills advise within their niche; on conflict the 13-file authority, then `ui-ux-pro-max`, wins. No skill overrides roles, Direct Inquiry model, security, or RLS rules.

### Rollback

Repository-side installs are plain directories: `git rm -r .claude/skills/<name>`, `git rm -r _bmad .specify`, or revert the Phase 0 commits (`3a8c03d` and the follow-up commit). Outside the repository: `uv tool uninstall specify-cli`, delete `C:\Users\RAJAN\.local\bin\uv.exe` and `%APPDATA%\uv`. Pre-install checkpoints: `fa2d7ef` (first batch), `3a8c03d` (follow-up batch).

### Skill installation state values

Use:

* `NOT_STARTED`
* `IN_PROGRESS`
* `PASS`
* `NOT_STARTED`
* `FAIL`
* `BLOCKED`
* `SETUP_REQUIRED`
* `ROLLED_BACK`

### Required Phase 0 result

After the skills phase, update each row with:

* installation method
* installed location
* version or commit
* compatibility result
* license result
* security review result
* smoke-test result
* active or rejected use
* conflict notes
* rollback steps

A skill that cannot be safely installed may remain `BLOCKED` without blocking unrelated implementation.

---

## 14. Database and Migration State

The exact current migration set must be discovered during repository audit.

### Current migration summary

| Field                              | Current value     |
| ---------------------------------- | ----------------- |
| Migration directory                | Must be confirmed |
| Latest migration                   | Must be confirmed |
| Migration count                    | Must be confirmed |
| Unapplied migrations               | Must be confirmed |
| Schema drift                       | Must be checked   |
| RLS coverage                       | Must be checked   |
| Missing indexes                    | Must be checked   |
| Destructive migrations             | Must be checked   |
| Rollback readiness                 | Must be checked   |
| Backup before production migration | Required          |

### Migration requirements

Every new migration entry added to this file must include:

| Field              | Required value    |
| ------------------ | ----------------- |
| Migration filename | Exact filename    |
| Phase              | Related phase     |
| Purpose            | Short description |
| Tables affected    | Exact table names |
| RLS affected       | Yes or No         |
| Indexes affected   | Yes or No         |
| Destructive        | Yes or No         |
| Applied locally    | Yes or No         |
| Applied staging    | Yes or No         |
| Applied production | Yes or No         |
| Verification       | Status            |
| Rollback note      | Exact reference   |

### Current phase migrations

No migration has yet been created under the new phase system.

---

## 15. Security and RLS State

Security is not verified until tested under the new authority.

| Security area          | Current status   | Required verification                    |
| ---------------------- | ---------------- | ---------------------------------------- |
| Guest access           | `NOT_STARTED`    | Public-safe data only                    |
| Wrong-user access      | `NOT_STARTED`    | Private records denied                   |
| Wrong-role access      | `NOT_STARTED`    | Role-specific records denied             |
| Direct URL access      | `NOT_STARTED`    | Unauthorized routes blocked              |
| Direct API access      | `NOT_STARTED`    | Server authorization enforced            |
| Admin permissions      | `NOT_STARTED`    | Permission-scoped access                 |
| Super Admin actions    | `NOT_STARTED`    | Sensitive mutation audit                 |
| RLS coverage           | `NOT_STARTED`    | Every private table                      |
| Service-role isolation | `NOT_STARTED`    | Server-only usage                        |
| Secret exposure        | `NOT_STARTED`    | Client, logs, docs, and UI               |
| OTP abuse controls     | `NOT_STARTED`    | Limits, cooldown, lockout                |
| Inquiry spam controls  | `NOT_STARTED`    | Rate limit and duplicate control         |
| Upload security        | `NOT_STARTED`    | Type, content, size, and access policy   |
| Payment security       | `SETUP_REQUIRED` | Webhook verification and idempotency     |
| Audit immutability     | `NOT_STARTED`    | Unauthorized edits denied                |
| Session security       | `NOT_STARTED`    | Cookies, expiry, logout, and stale state |
| Security headers       | `NOT_STARTED`    | Production-safe configuration            |
| Privacy and consent    | `NOT_STARTED`    | Required notice and data handling        |
| Backup security        | `SETUP_REQUIRED` | Encryption and access control            |
| Incident response      | `NOT_STARTED`    | Detection, escalation, recovery          |

---

## 16. Performance and Scale State

The product is expected to support very high traffic.

No scale claim has yet been verified.

| Area                  | Current status   | Required work                                   |
| --------------------- | ---------------- | ----------------------------------------------- |
| Public page caching   | `NOT_STARTED`    | Define SSR, ISR, CDN, and invalidation strategy |
| API caching           | `NOT_STARTED`    | Safe query and response caching                 |
| Database indexes      | `NOT_STARTED`    | Audit and benchmark                             |
| Pagination            | `NOT_STARTED`        | Ensure all large collections are paginated      |
| Cursor loading        | `NOT_STARTED`    | Use where large activity streams require it     |
| Image optimization    | `NOT_STARTED`        | Final provider and formats required             |
| Queue architecture    | `NOT_STARTED`    | Email, processing, expiry, and background jobs  |
| Rate limiting         | `NOT_STARTED`    | Auth, inquiry, admin, upload, and API           |
| Connection management | `NOT_STARTED`    | Supabase and hosting compatibility              |
| Query performance     | `NOT_STARTED`    | Explain plans and slow-query review             |
| Core Web Vitals       | `NOT_STARTED`    | Measure mobile-first                            |
| Observability         | `SETUP_REQUIRED` | Monitoring provider                             |
| Autoscaling           | `SETUP_REQUIRED` | Hosting-dependent                               |
| Graceful degradation  | `NOT_STARTED`    | Provider and traffic failure behavior           |
| Load testing          | `NOT_STARTED`    | Staged concurrency tests                        |
| Recovery time         | `NOT_STARTED`    | Define and verify                               |
| Availability target   | `NOT_STARTED`    | Define measurable service objectives            |
| Disaster recovery     | `SETUP_REQUIRED` | Backup and restore test                         |

A target of extremely high concurrency must be treated as an architecture and testing target, not a guarantee.

---

## 17. Current Known Product Risks

These risks must be validated during the repository and UX audit.

### Critical-risk category

| Risk                                  | Severity | Status           | Required action                                              |
| ------------------------------------- | -------- | ---------------- | ------------------------------------------------------------ |
| Unauthorized data access              | Critical | `NOT_STARTED`    | Complete RLS and service authorization audit                 |
| Private-data leakage                  | Critical | `NOT_STARTED`    | Inspect public payloads, metadata, logs, and UI              |
| Stale authentication route behavior   | High     | `NOT_STARTED`    | Verify authenticated users cannot see unnecessary login flow |
| Broken auth redirect context          | High     | `NOT_STARTED`    | Preserve protected action and return state                   |
| Shallow Admin entity visibility       | High     | `NOT_STARTED`    | Build complete linked-data drill-down                        |
| Sensitive action without audit        | Critical | `NOT_STARTED`    | Add reason, permission, before/after state, and audit        |
| Dead-end interaction                  | High     | `NOT_STARTED`    | Audit all screens and actions                                |
| Fake interactive UI                   | High     | `NOT_STARTED`    | Connect or remove every affordance                           |
| Mobile navigation gaps                | High     | `NOT_STARTED`    | Build role-based navigation and contextual headers           |
| Text clipping and overflow            | High     | `NOT_STARTED`    | Test every required width                                    |
| Fixed-position content overlap        | High     | `NOT_STARTED`    | Audit safe areas, keyboard, and viewport behavior            |
| Local-device business-state authority | Critical | `NOT_STARTED`    | Move authority to server services and database               |
| Missing provider shown as working     | Critical | `NOT_STARTED`    | Enforce honest provider states                               |
| Incomplete moderation recovery        | High     | `NOT_STARTED`    | Add reopen, restore, re-review, and re-approve               |
| Unverified production capacity        | High     | `NOT_STARTED`    | Perform real performance and load tests                      |
| Incomplete backup and restore         | Critical | `SETUP_REQUIRED` | Configure and test                                           |
| Unverified production rollback        | Critical | `NOT_STARTED`    | Create and test rollback plan                                |

---

## 18. Current Known UX Defect Categories

The global UX audit must search for these categories across the entire repository.

* identical header used in unrelated contexts
* city selection shown outside homepage context
* missing Back behavior
* missing Close behavior
* missing Cancel behavior
* dead-end screens
* browser Back losing useful state
* stale login route after authentication
* unclear success destination
* unclear failure recovery
* forms without unsaved-change handling
* buttons with no real action
* cards that look clickable but are not
* dashboard metrics without drill-down
* list rows without meaningful destination
* detail pages disconnected from parent lists
* filters lost after opening detail
* search query lost after navigation
* pagination reset unnecessarily
* scroll position lost unnecessarily
* notification clicks opening generic or empty screens
* small popups overloaded with complex tasks
* full pages used for lightweight actions
* missing loading skeletons
* layout-changing skeletons
* generic empty states
* generic error states
* missing retry
* mobile keyboard covering primary action
* sticky bars covering content
* bottom navigation covering forms
* horizontal overflow
* clipped text
* misaligned forms
* broken table layouts
* tiny touch targets
* missing focus states
* inaccessible icon buttons
* motion without reduced-motion support
* inconsistent terminology
* raw technical error messages
* incomplete Admin sub-details
* editing actions without persistence
* user actions without Admin destination
* report actions without moderation workflow
* recovery actions without history

---

## 19. Current Auth Flow State

### Final required login journey

```text
Open Login
→ Enter mobile number
→ Validate
→ Determine account state
→ Send 4-digit OTP
→ Verify OTP
→ Create secure session
→ Return to intended destination
```

### Final required registration journey

```text
Open Register
→ Select Owner, Broker, or Builder/Developer
→ Enter full name
→ Enter email
→ Enter mobile number
→ Validate
→ Send 4-digit OTP
→ Verify OTP
→ Create profile and role record
→ Create session
→ Continue to intended destination or default entry
```

### Current verification state

| Auth behavior                       | Status           |
| ----------------------------------- | ---------------- |
| Direct login route background       | `NOT_STARTED`    |
| Protected-action background context | `NOT_STARTED`    |
| Unregistered number handling        | `NOT_STARTED`    |
| Register transition                 | `NOT_STARTED`    |
| Role selection                      | `NOT_STARTED`        |
| Full-name validation                | `NOT_STARTED`    |
| Email validation                    | `NOT_STARTED`        |
| Mobile validation                   | `NOT_STARTED`        |
| 4-digit OTP                         | `NOT_STARTED`    |
| OTP autofill                        | `NOT_STARTED`    |
| OTP resend rules                    | `NOT_STARTED`    |
| OTP attempt limits                  | `NOT_STARTED`    |
| Keyboard and Enter                  | `NOT_STARTED`    |
| Back and Close                      | `NOT_STARTED`    |
| Loading skeleton                    | `NOT_STARTED`    |
| Error recovery                      | `NOT_STARTED`    |
| Logged-in user visiting auth URL    | `NOT_STARTED`    |
| Session expiry                      | `NOT_STARTED`    |
| Logout invalidation                 | `NOT_STARTED`    |
| Live provider test                  | `SETUP_REQUIRED` |

---

## 20. Current Property, Project, and Lead State

### Property lifecycle

Required:

```text
Draft
→ Submit
→ Pending moderation
→ Approved or Rejected or Changes Required
→ Published
→ Paused or Resumed
→ Edited and re-reviewed where required
→ Soft Deleted
→ Restored where permitted
```

### Project lifecycle

Required:

```text
Draft
→ Project details
→ Units and inventory
→ Media and compliance data
→ Submit
→ Pending moderation
→ Approved or Rejected or Changes Required
→ Published
→ Updated
→ Paused or Resumed
→ Soft Deleted
→ Restored where permitted
```

### Lead lifecycle

Required:

```text
Direct Inquiry
→ Lead created
→ New
→ Opened
→ In Progress
→ Follow-up
→ Qualified or Closed
→ Complete activity history
```

Exact lead statuses must be finalized in the related detailed document and implemented consistently.

### Current state

| Flow                         | Status        |
| ---------------------------- | ------------- |
| Property creation            | `NOT_STARTED`     |
| Property editing             | `NOT_STARTED`     |
| Property pause/resume        | `NOT_STARTED`     |
| Property delete/restore      | `NOT_STARTED` |
| Property moderation recovery | `NOT_STARTED` |
| Project creation             | `NOT_STARTED`     |
| Project editing              | `NOT_STARTED`     |
| Project units                | `NOT_STARTED`     |
| Project pause/resume         | `NOT_STARTED`     |
| Project delete/restore       | `NOT_STARTED` |
| Direct Inquiry               | `NOT_STARTED` |
| Property-wise leads          | `NOT_STARTED` |
| Project-wise leads           | `NOT_STARTED` |
| Unit context in leads        | `NOT_STARTED` |
| Lead messages                | `NOT_STARTED`     |
| Lead notes                   | `NOT_STARTED`     |
| Lead follow-ups              | `NOT_STARTED`     |
| Activity timeline            | `NOT_STARTED`     |
| Complete deep drill-down     | `NOT_STARTED` |

---

## 21. Current Builder Promotion State

The homepage builder promotion experience must use real approved data and a controlled lifecycle.

### Required capability

* eligible Builder/Developer content
* homepage carousel presentation
* responsive mobile-first cards or banners
* clear relation to the promoted project or approved listing
* real destination
* Admin moderation
* start and end lifecycle
* pause and resume
* rejection and correction
* recovery
* billing integration where required
* real impression and click tracking only when implemented
* no fake promotion metrics
* fallback when no eligible promotion exists

### Current status

| Area                 | Status           |
| -------------------- | ---------------- |
| Promotion data model | `NOT_STARTED`    |
| Builder submission   | `NOT_STARTED`    |
| Admin review         | `NOT_STARTED`    |
| Homepage display     | `NOT_STARTED`    |
| Responsive carousel  | `NOT_STARTED`    |
| Click destination    | `NOT_STARTED`    |
| Scheduling           | `NOT_STARTED`    |
| Billing linkage      | `SETUP_REQUIRED` |
| Metrics              | `NOT_STARTED`    |
| Recovery             | `NOT_STARTED`    |
| Verification         | `NOT_STARTED`    |

---

## 22. Current Notification State

### Final channels

| Channel | Scope                                    |
| ------- | ---------------------------------------- |
| In-app  | Real server-backed product notifications |
| Email   | External user notifications              |
| SMS     | OTP delivery only                        |

### Current status

| Notification area        | Status           |
| ------------------------ | ---------------- |
| Notification data model  | `NOT_STARTED`        |
| Unread count             | `NOT_STARTED`        |
| Preview popup or popover | `NOT_STARTED`    |
| Notification center      | `NOT_STARTED`        |
| Entity destination       | `NOT_STARTED`    |
| Read state               | `NOT_STARTED`        |
| Archive/delete           | `NOT_STARTED`    |
| Email templates          | `SETUP_REQUIRED` |
| Email provider           | `SETUP_REQUIRED` |
| Retry and failure state  | `NOT_STARTED`    |
| Admin visibility         | `NOT_STARTED`    |
| Live verification        | `NOT_STARTED`    |

---

## 23. Environment and Secret State

No secret values may be written in this file.

| Environment area          | Status                   |
| ------------------------- | ------------------------ |
| `.env.example`            | Must be audited          |
| Local environment         | Must be audited          |
| Development secrets       | Must be audited securely |
| Test environment          | Must be defined          |
| Staging environment       | `SETUP_REQUIRED`         |
| Production environment    | `SETUP_REQUIRED`         |
| Client-exposed variables  | Must be audited          |
| Server-only variables     | Must be audited          |
| Secret rotation process   | `NOT_STARTED`            |
| Secret access permissions | `NOT_STARTED`            |
| Log redaction             | `NOT_STARTED`            |

The repository audit must verify that secrets are absent from:

* Git history
* committed files
* client bundles
* documentation
* screenshots
* logs
* error messages
* public API payloads

---

## 24. Current Development Server State

| Field                           | Current value                                                        |
| ------------------------------- | -------------------------------------------------------------------- |
| Server running                  | Yes — started during Phase 1 verification work                        |
| URL                             | http://localhost:3000                                                 |
| Port                            | 3000                                                                  |
| Command                         | npm run dev (config: .claude/launch.json mygjprop-dev)                |
| Last live-browser verification  | Not applicable in Phase -1 (no UI exists)                             |
| Keep running after verification | Yes, when safe and supported (applies from first implementation phase)|
| Known server blocker            | No application scaffold exists yet                                    |

After each verification, update:

```text
Server running:
URL:
Port:
Process or command:
Last verified routes:
Reason if stopped:
```

---

## 25. Current Automated Check State

| Check                 | Status           | Last result                      |
| --------------------- | ---------------- | -------------------------------- |
| Install dependencies  | `PASS`           | 371 packages, npm 11 (2026-07-12) |
| Lint                  | `PASS`           | eslint 9 flat config, clean (2026-07-12) |
| Typecheck             | `PASS`           | tsc --noEmit strict, clean (2026-07-12) |
| Unit tests            | `PASS`           | vitest: 26/26 architecture tests (2026-07-12) |
| Integration tests     | `NOT_STARTED`    | No result under new phase system |
| End-to-end tests      | `NOT_STARTED`    | No result under new phase system |
| Production build      | `PASS`           | next build static, clean (2026-07-12) |
| Migration validation  | `NOT_STARTED`    | No result under new phase system |
| RLS tests             | `NOT_STARTED`    | No result under new phase system |
| Accessibility checks  | `NOT_STARTED`    | No result under new phase system |
| Responsive checks     | `NOT_STARTED`    | No result under new phase system |
| Console checks        | `NOT_STARTED`    | No result under new phase system |
| Network checks        | `NOT_STARTED`    | No result under new phase system |
| Performance checks    | `NOT_STARTED`    | No result under new phase system |
| Security checks       | `NOT_STARTED`    | No result under new phase system |
| Load tests            | `NOT_STARTED`    | No result under new phase system |
| Backup restore test   | `SETUP_REQUIRED` | Infrastructure required          |
| Production smoke test | `SETUP_REQUIRED` | Deployment required              |

---

## 26. Required Responsive Verification Matrix

Every relevant verification phase must record results for:

|  Width | Device category      | Status        |
| -----: | -------------------- | ------------- |
|  320px | Small mobile         | `NOT_STARTED` |
|  360px | Common mobile        | `NOT_STARTED` |
|  390px | Modern mobile        | `NOT_STARTED` |
|  430px | Large mobile         | `NOT_STARTED` |
|  768px | Tablet               | `NOT_STARTED` |
| 1024px | Tablet/small desktop | `NOT_STARTED` |
| 1366px | Desktop              | `NOT_STARTED` |
| 1440px | Large desktop        | `NOT_STARTED` |
|   Wide | Wide display         | `NOT_STARTED` |

For each changed screen, verify:

* no horizontal overflow
* no clipped text
* no covered content
* no broken sheet or modal
* no hidden action
* no keyboard obstruction
* correct safe-area spacing
* correct navigation
* correct touch targets
* correct alignment
* correct loading skeleton
* correct error recovery

---

## 27. Current Bug Summary

Only active, high-impact bugs belong in this compact file.

Detailed feature issues belong in `FEATURE_REGISTRY.md`.

### Active bug categories

| Bug ID               | Severity | Area              | Status        | Summary                                                                                   |
| -------------------- | -------- | ----------------- | ------------- | ----------------------------------------------------------------------------------------- |
| `STATE-UX-001`       | High     | Global navigation | `NOT_STARTED` | Route-specific header and navigation behavior require complete audit                      |
| `STATE-UX-002`       | High     | Mobile UX         | `NOT_STARTED` | Existing mobile interaction system is not verified against final authority                |
| `STATE-UX-003`       | High     | Deep drill-down   | `NOT_STARTED` | Related data is not yet confirmed as fully clickable                                      |
| `STATE-UX-004`       | High     | Alignment         | `NOT_STARTED` | Text clipping, wrapping, spacing, and fixed-position behavior require global verification |
| `STATE-AUTH-001`     | High     | Auth routing      | `NOT_STARTED` | Authenticated-user access to login routes must be corrected and tested                    |
| `STATE-AUTH-002`     | High     | Auth context      | `NOT_STARTED` | Protected-action return flow requires implementation and verification                     |
| `STATE-ADMIN-001`    | High     | User management   | `NOT_STARTED` | User detail requires complete linked-data drill-down                                      |
| `STATE-ADMIN-002`    | High     | Recovery          | `NOT_STARTED` | Rejected or deleted entity recovery requires complete workflow                            |
| `STATE-DATA-001`     | Critical | Data authority    | `NOT_STARTED` | All business data must be verified as server-backed                                       |
| `STATE-SEC-001`      | Critical | RLS               | `NOT_STARTED` | Complete RLS and wrong-user audit required                                                |
| `STATE-PROVIDER-001` | High     | Provider honesty  | `NOT_STARTED` | Missing providers must show correct setup state                                           |
| `STATE-SCALE-001`    | High     | Scale             | `NOT_STARTED` | High-concurrency claims require measured testing                                          |

When a bug is fixed:

* update its status
* record the related phase
* record the verification result
* remove it from this compact active list after the fix is stable
* retain detailed traceability in `FEATURE_REGISTRY.md` where relevant

---

## 28. Current Blockers

### Documentation blockers

None for generating the current 13-file documentation set.

### Implementation blockers

| Blocker                                    | Status           | Resolution                                              |
| ------------------------------------------ | ---------------- | ------------------------------------------------------- |
| New master documents not yet complete      | `DONE`           | All 13 files confirmed present 2026-07-12               |
| Repository not audited under new authority | `PASS`           | Phase -1 audit completed and verified 2026-07-12        |
| No application code exists                 | `NOT_STARTED`    | Greenfield build begins with the first implementation phase; if a legacy codebase exists elsewhere, the user must provide its location |
| External skills not audited                | `PASS`           | Phase 0 implemented and verified 2026-07-12             |
| Python 3.10+ and uv not installed          | `DONE`           | uv 0.11.28 installed user-locally 2026-07-12; specify-cli functional; system Python still absent (uv-managed CPython link warning noted) |
| Final provider credentials unavailable     | `SETUP_REQUIRED` | User will provide during provider and production phases |
| Hosting access unavailable                 | `SETUP_REQUIRED` | User will provide                                       |
| Domain and DNS access unavailable          | `SETUP_REQUIRED` | User will provide                                       |
| Production monitoring unavailable          | `SETUP_REQUIRED` | Configure during operations phase                       |
| Real load-test infrastructure unavailable  | `SETUP_REQUIRED` | Configure before production sign-off                    |

---

## 29. Decisions Locked

The following decisions are authoritative unless the user explicitly changes them:

* public roles are Owner, Broker, and Builder/Developer
* internal roles are permission-controlled
* mobile UX is the primary authority
* the UI is original and Apple-inspired
* every device size receives intentional UX
* city selection is a homepage-only public control
* Direct Inquiry is the public property and project contact action
* business records are server-backed
* Supabase is the first backend foundation
* SMS is used for OTP only
* email is used for external notifications
* in-app notifications must be real and contextual
* leads and related activity use a unified Leads workspace
* project units remain inside the related project
* dashboards must be simplified
* dashboards and Admin must support deep clickable drill-down
* every displayed actionable-looking element must work
* sensitive Admin actions require permission, reason, confirmation, and audit
* moderation and deletion require recovery where appropriate
* missing providers must show honest state
* skills must be inspected before installation
* every implementation phase requires a matching verification phase
* live-browser verification is required for UI PASS
* the development server remains running after verification when safe
* production readiness requires real provider, deployment, security, and load verification

---

## 30. Decisions Requiring Final Definition in Detailed Documents

These items must be finalized by the relevant upcoming detailed documentation before implementation.

They are not permission to guess during coding.

| Decision area                                     | Final document                                                      |
| ------------------------------------------------- | ------------------------------------------------------------------- |
| Complete role permission matrix                   | `docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`                     |
| Exact database entity model                       | `docs/02_ARCHITECTURE_DATABASE_RLS_SECURITY_AND_SCALE.md`           |
| Exact OTP lifecycle and limits                    | `docs/03_AUTH_ONBOARDING_ROLES_PROFILE_AND_SESSIONS.md`             |
| Exact visual tokens and responsive shell          | `docs/04_APPLE_INSPIRED_MOBILE_FIRST_UI_UX_AND_INTERACTION.md`      |
| Exact search filters and SEO route patterns       | `docs/05_PUBLIC_HOME_SEARCH_LOCATION_SEO_AND_MARKETPLACE.md`        |
| Exact property, project, unit, and lead statuses  | `docs/06_PROPERTY_PROJECT_UNITS_DIRECT_INQUIRY_AND_LEADS.md`        |
| Exact role bottom-navigation maps                 | `docs/07_ROLE_DASHBOARDS_NAVIGATION_AND_DEEP_DRILLDOWN.md`          |
| Exact Admin permissions and recovery actions      | `docs/08_ADMIN_SUPER_ADMIN_MODERATION_BILLING_BUGS_AND_RECOVERY.md` |
| Exact provider, QA, deployment, and skill process | `docs/09_SKILLS_PROVIDERS_QA_DEPLOYMENT_AND_OPERATIONS.md`          |
| Exact implementation sequence                     | `prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`  |

Implementation must not begin until the required authority document for that phase exists.

---

## 31. Rollback State

| Field                       | Current value                                                                 |
| --------------------------- | ----------------------------------------------------------------------------- |
| Current rollback checkpoint | Git initialized 2026-07-12 during Phase -1; baseline commit `eb89ea3` on `master`; dated checkpoint branch `baseline-2026-07-12` created at Phase -1 verification PASS |
| Last known stable commit    | `eb89ea3` (root commit); latest verified commit `9a21c9f`                     |
| Remote repository           | `https://github.com/Rajann7/mygjprop` (origin); `master` and `baseline-2026-07-12` pushed 2026-07-12 |
| Uncommitted changes         | None existed before Phase -1 (repository was not under version control)        |
| Database backup point       | Not applicable — no database exists yet                                        |
| Environment backup          | Not applicable — no environment files exist yet                                |
| Provider rollback plan      | Not yet created                            |
| Deployment rollback plan    | Not yet created                            |
| Last rollback               | None under new phase system                |

Before every high-risk phase:

1. identify the current Git commit
2. confirm working-tree state
3. create or verify a safe branch or checkpoint
4. record migration state
5. record provider state
6. define rollback commands
7. avoid destructive operations without backup
8. update this section

---

## 32. Recent State Changes

### 2026-07-12 — Phase 1 Manual Verification PASS

```text
Date: 2026-07-12
Verification phase: Phase 1 — Architecture Foundation
Result: PASS (after fixing 2 defects found during verification)
Automated checks: lint PASS (after excluding generated next-env.d.ts),
typecheck PASS, tests PASS 30/30 (4 new verification tests added),
production build PASS
Defects found and fixed: (1) malformed Supabase/monitoring URLs were
accepted as configured — env validator now URL-validates *_URL/*_DSN
variables; (2) percent-encoded redirect vectors (%5C, %0d%0a, %2F%2F,
malformed encodings) bypassed isSafeIntendedRoute — decode-check added.
Roles verified: owner/broker/builder valid; invalid and internal roles
rejected by the public validator; display names; area access; role-to-host
and role-home mapping (tests)
Host routing verified: public/broker/builder/internal host detection,
wrong-role host → null, dev single-origin fallback, canonical public URL,
invalid/external/encoded redirect rejection, loop prevention (tests)
Route inventory verified: 28-route typed map recorded in
FEATURE_REGISTRY.md; only "/" implemented; live 404 confirmed for planned
route (/owner/properties) — no placeholder features; public canonical
routes exist only on the public host
Environment verified: dev config, missing optional provider →
SETUP_REQUIRED, missing production-required → ConfigurationError,
malformed URLs rejected, malformed Supabase config → SETUP_REQUIRED;
client bundle scanned — no secret values or service_role material in
.next/static
Service boundaries verified: src/app imports no services or env module;
all 22 service interfaces compile under strict TypeScript
Live browser: homepage renders at http://localhost:3000, zero console
errors; 404 behavior verified by direct URL
No feature incorrectly marked PASS (registry ROLE rows remain PARTIAL —
enforcement arrives with RLS and middleware phases)
Server status: Running — http://localhost:3000
Next prompt: Phase 2 Implementation Prompt (database schema)
```

### 2026-07-12 — Phase 1 Architecture Foundation DONE

```text
Date: 2026-07-12
Phase: Phase 1 — Architecture Foundation
Status: DONE (implementation); Phase 1 verification NOT_STARTED
Summary: First application code created. Next.js 15 App Router + TypeScript
strict + Tailwind v4 + Vitest toolchain scaffolded. Implemented: centralized
role model (public roles exactly owner/broker/builder; internal roles
separate; validators, area access, display names) in src/lib/roles.ts;
env-configured four-host architecture with open-redirect prevention and
loop guards in src/lib/hosts.ts; final typed route map (28 routes across
public/auth/owner/broker/builder/internal) in src/lib/routes.ts; typed env
validation with SETUP_REQUIRED provider resolution and safe production
failure in src/lib/env.ts; server-authoritative feature flags (cannot gate
security) in src/lib/flags.ts; ServiceResult/DomainError contracts with
correlation IDs and internal-detail-stripping serialization in
src/lib/result.ts; 11 domain state unions + transition maps in
src/types/domain.ts; 21 typed service boundary modules (+base) in
src/services/ returning honest not-implemented failures. Minimal honest
root layout + homepage. .env.example expanded (no secrets).
Checks run: install PASS (371 pkgs), lint PASS, typecheck PASS, tests PASS
(26/26), production build PASS
Live browser work: dev server http://localhost:3000; homepage verified at
320px and 1366px — renders, no console errors, no horizontal overflow
Bugs found: one test-only type narrowing error, fixed during the phase
Blockers: none new; legacy-codebase question now moot (greenfield confirmed
by construction)
Rollback checkpoint: commit before this phase (see git log); revert the
Phase 1 commit to roll back
Server status: Running — http://localhost:3000, port 3000
Next prompt: Phase 1 Verification Prompt
```

### 2026-07-12 — Provider credentials received (Supabase + Razorpay test mode)

```text
Date: 2026-07-12
Event: User supplied Supabase project credentials (URL, anon key,
publishable key, service-role key, DB password, access token) and Razorpay
TEST-MODE credentials (key id, secret, webhook secret).
Storage: All values written to .env.local ONLY, which is gitignored and
never committed. .env.example (names/placeholders only) and .gitignore
committed to the repository. No secret value appears in any committed file.
Provider status: Supabase → CONFIGURED_NOT_TESTED; Razorpay →
TEST_MODE_ONLY. No provider marked ACTIVE — no connection test has run yet
(no application code exists).
Security note: these values were shared in chat; the service-role key,
DB password, and access token should be rotated before production.
Razorpay webhook delivery requires a public URL (localhost cannot receive).
Branch: 2026-07-12 created and pushed with the non-secret changes.
Next prompt: Phase 1 Implementation Prompt (unchanged)
```

### 2026-07-12 — Phase 0 Manual Verification PASS

```text
Date: 2026-07-12
Verification phase: Phase 0 Manual Verification
Result: PASS
Automated checks: lint/typecheck/tests/build remain not applicable — the
repository still has no application toolchain (verified: no package.json or
node_modules at root); git clean at 584c5c6
Skill verification: all 9 candidate repos re-verified — identities, revisions
(ui-ux-pro-max 3da52ff, motion-design f9a8a04, responsive-craft 4863701,
user-story-mapping 35cf8a1, interaction-design 57a3eaa, uiux-agent subset
ddaedd7, shadcn-admin 9cffa46, BMAD v6.10.0 per _bmad manifest, Spec Kit
v0.12.11 per specify CLI), licenses, security reviews, and install states
match PROJECT_STATE.md Section 13; all 67 skills registered and invocable
in the Claude Code harness (functional smoke evidence); frontmatter valid
Repository integrity: CLAUDE.md, docs/, prompts/ byte-identical to baseline
eb89ea3 — no roles altered, no conflicting authority created (.specify
constitution is an unfilled template; BMAD wrote no planning docs); secret
scan of _bmad, .specify, .claude/skills clean; no global config beyond the
documented user-local uv/specify tooling; 63 excluded uiux-agent skills
confirmed absent
Smoke tests: repeated for each installed skill family against documented
product flows — outputs followed project authority, copied nothing, changed
no scope, and are reversible
Defects: none requiring removal; known caveats stand (interaction-design
unlicensed — user-accepted; shadcn-admin reference-only; responsive-craft
MIT via README only)
Documentation updated: PROJECT_STATE.md Sections 4, 28, 32, 33, 35;
FEATURE_REGISTRY.md SKILL-001…015 verification PASS
Server status: Not running — no application exists
Next prompt: Phase 1 Implementation Prompt
```

### 2026-07-12 — Phase 0 follow-up: remaining five skills installed at user instruction

```text
Date: 2026-07-12
Phase: Phase 0 follow-up (user instruction: "install remaining")
Status: DONE; Phase 0 verification NOT_STARTED
Summary: BMAD Method v6.10.0 installed via official npx installer
(_bmad/ + 46 bmad-* skills); Spec Kit v0.12.11 installed via uv-based
specify-cli (.specify/ + 10 speckit-* skills, Claude integration);
interaction-design @57a3eaa installed with LICENSE_REVIEW_REQUIRED risk
accepted by user; curated 5-skill subset of ui-ux-agent-skill-system
@ddaedd7 installed (installer inspected: benign local copier — security
concern resolved; 63 off-scope/duplicate skills excluded); shadcn-admin
@9cffa46 installed with compatibility constraints. Supporting tooling:
uv 0.11.28 (official release binary) and specify-cli, user-local.
Authority guards recorded: BMAD and speckit must not generate parallel
authority documents. .claude/skills now holds 67 skills.
Checks run: SKILL.md frontmatter validated; secret scan of _bmad config
and .specify memory clean; lint/typecheck/tests/build still not
applicable (no app toolchain)
Blockers: legacy-codebase question still open
Rollback checkpoint: 3a8c03d (pre-follow-up); see Section 13 rollback
Server status: Not running — no application exists
Next prompt: Phase 0 Manual Verification Prompt
```

### 2026-07-12 — Phase 0 GitHub Skills Inspection and Installation DONE

```text
Date: 2026-07-12
Phase: Phase 0 — GitHub Skills Inspection and Installation
Status: DONE (implementation); Phase 0 verification NOT_STARTED
Summary: All nine candidate repositories inspected live (existence, license,
activity, install method, scripts, security, telemetry, overlap, Windows and
stack compatibility). Four skills approved and installed project-locally in
.claude/skills/ by manual copy of official skill directories with licenses
(ui-ux-pro-max @3da52ff, motion-design @f9a8a04, responsive-craft @4863701,
user-story-mapping @35cf8a1). Five candidates not installed: BMAD Method and
Spec Kit (SETUP_REQUIRED: Python/uv absent; parallel-authority conflict),
Interaction Design Skills (LICENSE_REVIEW_REQUIRED: no license), UI/UX Agent
Skill System (SECURITY_REVIEW_REQUIRED + duplicate capability), Shadcn Admin
Skill (PARTIALLY_COMPATIBLE: targets Vite/TanStack template). Smoke tests
performed on all four installed skills. Skill responsibility map recorded in
Section 13. No product scope changed; no application code written.
Skills used: None (this phase installs them)
Files changed: .claude/skills/** (4 skills + licenses), PROJECT_STATE.md,
FEATURE_REGISTRY.md
Migrations: None
RLS changes: None
Providers changed: None
Checks run: lint/typecheck/tests/build not applicable — no project toolchain
exists yet; skill files are Markdown/CSV/local scripts, frontmatter validated
Live browser work: Not applicable — no application exists
Bugs found: None
Blockers: Python 3.10+/uv absent (only matters for BMAD/Spec Kit and optional
helper scripts); legacy-codebase question still open
Rollback checkpoint: fa2d7ef (pre-install); remove .claude/skills/<name> or
revert the Phase 0 commit
Server status: Not running — no application exists
Next prompt: Phase 0 Manual Verification Prompt
```

### 2026-07-12 — Phase -1 Manual Verification PASS

```text
Date: 2026-07-12
Verification phase: Phase -1 Manual Verification
Result: PASS
Automated checks: git status (clean), branch (master), checkpoint (eb89ea3
reachable, follow-up b493f5f); lint/typecheck/tests/build confirmed not
applicable — no package.json, lockfile, or toolchain exists to run them
Routes tested: None exist — route inventory verified empty against filesystem
Widths tested: Not applicable — no UI exists
Journeys tested: Not applicable — no application exists
Permissions tested: Not applicable — no auth or routes exist
RLS tested: Not applicable — no supabase/ directory or schema exists
Accessibility: Not applicable
Console and network: Not applicable — no server exists
Bugs fixed: None required — audit matched the repository exactly
Remaining blockers: No application code; legacy-codebase question open;
Phase 0 skills audit not run; provider credentials outstanding
Documentation updated: PROJECT_STATE.md Sections 4, 28, 32, 33, 35;
FEATURE_REGISTRY.md Section 35
Server status: Not running — no application exists (recorded reason)
Next prompt: Phase 0 Implementation Prompt
```

### 2026-07-12 — Phase -1 Repository and Baseline Audit Completed

```text
Date: 2026-07-12
Phase: Phase -1 — Repository and Baseline Audit
Status: DONE (implementation); Phase -1 verification NOT_STARTED
Summary: Full repository audit executed. Repository contains only the 13-file
documentation set; no application code, routes, migrations, tooling, providers,
or environment files exist. All unevidenced PARTIAL statuses in PROJECT_STATE.md
and FEATURE_REGISTRY.md were normalized to NOT_STARTED. Route and database
inventories recorded as empty in Section 6. Risk register recorded in Section 6.
Skills used: None (Phase 0 not yet run)
Files changed: PROJECT_STATE.md, FEATURE_REGISTRY.md
Migrations: None (no database exists)
RLS changes: None
Providers changed: None
Checks run: None applicable — no package.json or toolchain exists
Live browser work: Not applicable — no application exists
Bugs found: Documentation drift (PARTIAL claims without code) — fixed in this audit
Blockers: No application code exists; legacy-codebase question requires user decision
Rollback checkpoint: Git initialized; Phase -1 baseline commit on master
Server status: Not running — no application exists
Next prompt: Phase -1 Manual Verification Prompt
```

### 2026-07-12 — New Documentation System Started

* Established the final 13-file documentation structure.
* Completed `CLAUDE.md`.
* Started `PROJECT_STATE.md`.
* Set the new project authority to an original Apple-inspired mobile-first system.
* Established final public roles.
* Established Direct Inquiry and unified Leads principles.
* Established deep clickable Admin and dashboard requirements.
* Established Supabase-first and server-backed data authority.
* Established honest provider-state handling.
* Established GitHub skills audit and installation requirements.
* Established phase implementation followed by separate verification.
* Established live-browser and persistent development-server verification rules.

---

## 33. Next Required Action

### Current next action

Run the **Phase 2 Implementation Prompt** (database schema) from:

```text
prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md
```

Open user question (must be answered before the first application-code phase): does a legacy My Gujarat Property application codebase exist elsewhere, or is this a greenfield build? (See Section 6 risk register.)

Remaining execution sequence:

```text
Phase 2 Implementation (database schema)
→ Phase 2 Verification
→ Continue phase by phase
```

Do not skip verification prompts.

Do not run later phases when the current phase has an unresolved critical failure.

---

## 34. Required End-of-Phase Update Template

After each implementation phase, replace the relevant current-state sections and append a short entry to `Recent State Changes`.

Use:

```text
Date:
Phase:
Status:
Summary:
Skills used:
Files changed:
Migrations:
RLS changes:
Providers changed:
Checks run:
Live browser work:
Bugs found:
Blockers:
Rollback checkpoint:
Server status:
Next prompt:
```

After each verification phase, use:

```text
Date:
Verification phase:
Result:
Automated checks:
Routes tested:
Widths tested:
Journeys tested:
Permissions tested:
RLS tested:
Accessibility:
Console and network:
Bugs fixed:
Remaining blockers:
Documentation updated:
Server status:
Next prompt:
```

---

## 35. Session Handoff Summary

A new Claude session must understand the following immediately:

1. All 13 documentation authority files are complete and present.
2. The Phase -1 repository audit is `PASS` (implemented and verified 2026-07-12): the repository contains documentation only — **no application code exists**. See Section 6.
3. Phase 1 is PASS (Next.js foundation verified: roles, hosts, routes, services, env, flags, errors; 30 passing tests); Phase 2 (database schema) is next.
4. No implementation phase is verified under the new authority yet.
5. Whether a legacy codebase exists elsewhere is an open user decision; treat this repository as greenfield until answered.
6. The final product uses Owner, Broker, and Builder/Developer public roles.
7. The product must use an original Apple-inspired mobile-first UX.
8. Every workflow must be deeply connected and clickable.
9. Admin must expose full linked entity details and contextual editing.
10. Direct Inquiry and the unified Leads workspace are core product flows.
11. Supabase is the first backend foundation.
12. Business data must be server-backed.
13. Provider integrations remain honest until configured and tested.
14. GitHub skills must be inspected, installed, verified, and invoked through the phase prompts.
15. Every implementation prompt must be followed by its verification prompt.
16. Live-browser verification is required.
17. The development server should remain running after verification when safe.
18. The next required prompt is the Phase 2 Implementation Prompt in `prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`.

---


