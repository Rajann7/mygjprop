# `prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`

# My Gujarat Property — Complete Phase-by-Phase Claude Implementation and Separate Manual Verification Prompt System

This file is the final execution authority for building, auditing, verifying, securing, deploying, and operating **My Gujarat Property**.

It contains:

* one implementation prompt for every phase
* one separate manual verification prompt for every phase
* exact phase order
* mandatory implementation rules
* GitHub skill integration
* repository audit
* architecture
* database migrations
* RLS
* authentication
* Apple-inspired mobile-first design
* homepage and marketplace
* Gujarat location hierarchy
* search and SEO
* Property workflows
* Project and Unit workflows
* Direct Inquiry
* unified Leads
* Owner dashboard
* Broker dashboard
* Builder dashboard
* Builder promotions
* Admin and Super Admin
* moderation
* reports
* support
* bugs
* audit
* recovery
* billing
* payments
* providers
* security
* privacy
* performance
* scalability
* complete SaaS UX audit
* deployment
* backup
* rollback
* production launch
* post-launch verification

Only one phase implementation prompt should be executed at a time.

After the implementation prompt finishes, execute the matching manual verification prompt separately.

Do not begin the next implementation phase until the current phase verification result is `PASS`.

---

# 1. Final Authority Files

Before every implementation or verification phase, Claude must read these files in this order:

1. `/CLAUDE.md`
2. `/PROJECT_STATE.md`
3. `/FEATURE_REGISTRY.md`
4. `/docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`
5. `/docs/02_TECHNICAL_ARCHITECTURE_DATABASE_SECURITY_AND_SCALE.md`
6. `/docs/03_AUTH_ONBOARDING_ROLES_PROFILE_AND_SESSIONS.md`
7. `/docs/04_APPLE_INSPIRED_MOBILE_FIRST_UI_UX_AND_INTERACTION.md`
8. `/docs/05_PUBLIC_HOME_SEARCH_LOCATION_SEO_AND_MARKETPLACE.md`
9. `/docs/06_PROPERTY_PROJECT_UNITS_DIRECT_INQUIRY_AND_LEADS.md`
10. `/docs/07_ROLE_DASHBOARDS_NAVIGATION_AND_DEEP_DRILLDOWN.md`
11. `/docs/08_ADMIN_SUPER_ADMIN_MODERATION_BILLING_BUGS_AND_RECOVERY.md`
12. `/docs/09_SKILLS_PROVIDERS_QA_DEPLOYMENT_AND_OPERATIONS.md`
13. `/prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`

The current approved authority files override assumptions, generated defaults, skill recommendations, and generic framework conventions.

---

# 2. Final Product Lock

The complete implementation must consistently use these final product rules.

## 2.1 Public roles

Exactly three public roles exist:

* Owner
* Broker
* Builder/Developer

Internal access is separate:

* Super Admin
* Admin
* permission-scoped Staff

Public registration must never expose internal roles.

## 2.2 Final public contact action

The primary public contact action is:

```text
Direct Inquiry
```

Direct Inquiry must:

* preserve the Property, Project, Unit, or Requirement context
* authenticate the user where required
* return the user to the same context
* require explicit final submission
* record contact-sharing consent
* create or associate a real Lead
* create real messages, activity, and notifications
* never show false success

## 2.3 Final design direction

The design must be:

* original
* Apple-inspired
* mobile-first
* calm
* precise
* accessible
* responsive
* deeply clickable
* production-grade

It must not visually copy another product.

## 2.4 Final mobile and tablet navigation

Role applications require mobile and tablet bottom navigation.

### Owner

* Dashboard
* Properties
* Leads
* Post
* Profile

### Broker

* Dashboard
* Listings
* Leads
* Requirements
* Profile

### Builder/Developer

* Dashboard
* Projects
* Leads
* Promotions
* Profile

Project Units remain inside Project context.

## 2.5 Final host model

Use environment-configured hosts:

* public marketplace and Owner experience on the main public host
* Broker application on the Broker host
* Builder application on the Builder host
* internal application on the internal account/Admin host

Do not hard-code production domains inside components.

## 2.6 Final location hierarchy

Use backend-managed textual location data:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

The homepage city selector appears only in the homepage context.

## 2.7 Final provider scope

Approved provider categories include:

* Supabase database
* Supabase authentication
* SMS OTP
* transactional email
* payment
* media storage
* image processing
* CDN
* background jobs
* scheduler
* analytics
* error monitoring
* uptime monitoring
* backup

Every provider must display an honest status.

---

# 3. Mandatory Execution Contract

Apply this contract to every phase.

## 3.1 Work inside the actual repository

Before editing:

1. identify the repository root
2. inspect `git status`
3. identify the current branch
4. inspect package manager and lockfile
5. inspect framework versions
6. inspect existing routes
7. inspect existing database migrations
8. inspect environment-variable structure
9. inspect current tests
10. inspect current build state
11. identify uncommitted user work
12. create or record a safe checkpoint before high-risk changes

Do not overwrite unrelated user work.

## 3.2 Implement, do not only advise

Every implementation prompt requires actual repository changes.

Do not return only:

* recommendations
* pseudo-code
* architecture notes
* sample components
* partial snippets
* a future task list

Implement the complete phase scope unless a real external dependency blocks part of it.

## 3.3 No silent scope reduction

Do not skip a required workflow because it is complex.

Do not replace a full workflow with:

* a static card
* a fake button
* an alert
* a console log
* mock data
* a non-persisted client state
* an empty route
* an unfinished modal

## 3.4 No fake operational state

Do not show fake:

* sent status
* paid status
* uploaded status
* verified status
* provider status
* notification
* Lead
* message
* dashboard metric
* promotion performance
* payment
* invoice
* report
* audit event
* activity

Development fixtures must be isolated from production data and visibly controlled.

## 3.5 Server authority

The server and database remain authoritative for:

* role
* permissions
* ownership
* account status
* moderation
* publication
* plan usage
* payment
* provider status
* Direct Inquiry
* Lead
* messages
* notifications
* billing
* recovery
* audit

Client state may improve UX but must not become the authority.

## 3.6 Security by default

Every protected feature requires:

* authentication
* role validation
* permission validation
* ownership validation
* server-side input validation
* RLS
* rate limiting where relevant
* idempotency where relevant
* audit where sensitive
* private-data minimization
* secure error handling

## 3.7 Database changes

All schema changes must use migrations under:

```text
supabase/migrations/
```

Every migration must include:

* clear name
* dependency review
* constraints
* indexes
* RLS
* rollback or forward-fix classification
* verification
* generated type refresh where applicable

Do not manually change production schema without a migration.

## 3.8 Complete UX states

Every implemented workflow must include applicable:

* loading
* skeleton
* empty
* filtered empty
* success
* validation error
* server error
* network error
* permission denied
* restricted account
* suspended account
* provider Setup Required
* provider failed
* retry
* recovery
* disabled-with-reason

## 3.9 Complete navigation behavior

Every screen must define and implement:

* entry point
* primary action
* secondary action
* Back
* Close
* Cancel
* browser Back
* refresh
* direct URL
* list-detail-return
* success destination
* failure destination
* mobile behavior
* tablet behavior
* desktop behavior

## 3.10 Responsive widths

Every applicable phase must support:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide display

## 3.11 Accessibility

Every phase must implement:

* semantic HTML
* visible focus
* keyboard navigation
* labels
* descriptions
* error associations
* accessible dialogs
* accessible sheets
* accessible tables
* contrast
* zoom
* reduced motion
* touch targets
* non-color status meaning

## 3.12 Performance

Use:

* server-side filtering
* pagination
* selected columns
* indexed queries
* cache only where safe
* lazy loading
* dynamic import
* optimized images
* bounded background jobs
* no N+1 data loading

## 3.13 Documentation updates

At the end of every implementation and verification prompt, update:

* `/PROJECT_STATE.md`
* `/FEATURE_REGISTRY.md`

Record:

* status
* exact routes
* exact files
* migrations
* tests
* providers
* skills
* bugs
* blockers
* evidence
* next phase

## 3.14 Do not continue automatically

An implementation prompt must stop after implementation handoff.

A verification prompt must stop after verification result.

Do not start the next phase automatically.

---

# 4. GitHub Skill Usage Contract

Only invoke a skill after Phase 0 records it as:

* installed
* compatible
* smoke-test passed
* approved for the phase

Approved candidates:

* BMAD Method
* UI/UX Agent Skill System
* Interaction Design Skills
* GitHub Spec Kit
* UI/UX Pro Max Skill
* LottieFiles Motion Design Skill
* Responsive Craft
* Storymap Skill
* Shadcn Admin Skill

When a prompt names a skill, use it only if Phase 0 approved it.

Project authority always overrides skill output.

---

# 5. Implementation Completion Report

Every implementation prompt must end with:

```text
PHASE IMPLEMENTATION REPORT

Phase:
Status:
Checkpoint:
Skills Used:
Repository Changes:
Routes Added or Changed:
Components Added or Changed:
Services Added or Changed:
Database Migrations:
RLS Policies:
Indexes:
Environment Variables:
Provider States:
Automated Commands:
Command Results:
Security Controls:
Responsive Work:
Accessibility Work:
Known Blockers:
Known Limitations:
PROJECT_STATE Updated:
FEATURE_REGISTRY Updated:
Manual Verification Prompt Ready:
Development Server Status:
Next Required Action:
```

Valid implementation statuses:

* `IMPLEMENTED_UNVERIFIED`
* `PARTIALLY_IMPLEMENTED`
* `BLOCKED`
* `SETUP_REQUIRED`

Implementation prompts must not mark a phase `PASS`.

---

# 6. Manual Verification Completion Report

Every verification prompt must end with:

```text
PHASE VERIFICATION REPORT

Phase:
Implementation Reviewed:
Verification Status:
Checkpoint:
Skills Used:
Development Server URL:
Development Server Port:
Roles Tested:
Routes Tested:
Direct URLs Tested:
Responsive Widths:
Keyboard:
Focus:
Accessibility:
Loading States:
Empty States:
Error States:
Success States:
Permission States:
Provider States:
Console:
Network:
RLS:
Security:
Performance:
Bugs Found:
Fixes Applied:
Retest Result:
Known Limitations:
Rollback State:
PROJECT_STATE Updated:
FEATURE_REGISTRY Updated:
Development Server Left Running:
Final Result:
Next Phase:
```

Valid verification statuses:

* `PASS`
* `PASS_WITH_LIMITATIONS`
* `FAIL`
* `BLOCKED`
* `SETUP_REQUIRED`

Critical or High defects block `PASS`.

---

# 7. Full Phase Order

| Phase | Implementation                                                                                         |
| ----: | ------------------------------------------------------------------------------------------------------ |
|    -1 | Repository, documentation, dependency, route, schema, and baseline audit                               |
|     0 | GitHub skills inspection, installation, compatibility, and smoke testing                               |
|     1 | Final product architecture, role model, route model, host model, and technical foundation              |
|     2 | Supabase schema, migrations, indexes, RLS, audit, outbox, and data foundation                          |
|     3 | Authentication, registration, OTP, onboarding, profiles, sessions, and role access                     |
|     4 | Apple-inspired mobile-first design system, shells, navigation, and interaction foundation              |
|     5 | Public homepage, public headers, city context, search entry, public cards, and notifications           |
|     6 | Gujarat location data, full search, filters, city SEO, CMS, legal, and public profiles                 |
|     7 | Property creation, media, moderation, publication, management, deletion, and restoration               |
|     8 | Builder Projects, Project compliance, Units, inventory, pricing, moderation, and recovery              |
|     9 | Requirements, Direct Inquiry, unified Leads, messages, notes, follow-ups, activity, and reports        |
|    10 | Owner application, dashboard, navigation, Properties, Leads, Requirements, billing, and profile        |
|    11 | Broker application, dashboard, Listings, Leads, Requirements, billing, and business profile            |
|    12 | Builder application, dashboard, Projects, Units, Leads, promotions, billing, and profile               |
|    13 | Internal application shell, staff permissions, User graph, entity graph, and deep Admin management     |
|    14 | Moderation, reports, support, bugs, audit, security events, soft delete, and recovery operations       |
|    15 | Plans, subscriptions, usage, payments, invoices, providers, jobs, notifications, and reconciliation    |
|    16 | Security, privacy, accessibility, performance, scalability, resilience, and load validation            |
|    17 | Complete SaaS UX audit, responsive audit, navigation audit, deep-click audit, and global repair        |
|    18 | Production APIs, staging, domains, SSL, migrations, backup, deployment, rollback, launch, and sign-off |

---

# PHASE -1 — REPOSITORY AND BASELINE AUDIT

## PHASE -1 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

You are working inside the actual My Gujarat Property repository.

Read all 13 authority files in the required order before taking any action.

Apply the Mandatory Execution Contract from this prompt file.

Your task is to perform a complete repository and documentation baseline audit. This is not a product-feature implementation phase. Do not begin later feature work.

### Primary objective

Create an exact, evidence-based understanding of the repository before any architecture, schema, UX, or provider changes.

### Required audit

Inspect and record:

1. repository root
2. current Git branch
3. current Git status
4. uncommitted user changes
5. latest commit
6. package manager
7. lockfile
8. Node.js requirements
9. framework version
10. Next.js App Router structure
11. TypeScript configuration
12. Tailwind configuration
13. ShadCN or component primitive structure
14. Zustand usage
15. Framer Motion usage
16. Supabase client structure
17. Supabase server client structure
18. middleware
19. route groups
20. public routes
21. authentication routes
22. Owner routes
23. Broker routes
24. Builder routes
25. internal Admin routes
26. API routes
27. server actions
28. service modules
29. database migrations
30. existing tables
31. existing RLS policies
32. existing indexes
33. storage buckets
34. auth configuration
35. environment-variable files
36. `.env.example`
37. provider adapters
38. payment code
39. email code
40. media code
41. background jobs
42. schedulers
43. tests
44. lint configuration
45. build configuration
46. CI/CD workflows
47. deployment configuration
48. monitoring code
49. analytics code
50. documentation files
51. generated files
52. duplicate components
53. duplicate services
54. dead routes
55. broken imports
56. build errors
57. type errors
58. lint errors
59. test failures
60. security-sensitive code

### Route inventory

Create a repository route inventory in the most appropriate existing authority section.

For every discovered route, record:

* route
* host or route group
* public or private
* allowed role
* purpose
* implementation state
* data source
* shell
* navigation
* direct URL behavior
* known issue

Do not invent routes that do not exist.

### Database inventory

Record:

* migration files in order
* discovered tables
* discovered functions
* discovered triggers
* discovered views
* discovered enums
* discovered indexes
* discovered RLS policies
* storage configuration
* missing migration references
* schema drift risks
* ownership columns
* soft-delete fields
* audit structures
* billing structures
* provider structures

Do not modify the database schema in this phase.

### Build baseline

Run the repository’s actual applicable commands for:

* dependency installation only when required and safe
* lint
* typecheck
* tests
* production build

Do not invent commands. Inspect `package.json` and current tooling first.

Record exact failures.

Only fix a build-blocking configuration defect when:

* the fix is minimal
* it does not implement later product scope
* it does not alter architecture
* it preserves user work
* the fix is documented

### Documentation normalization

Update:

* `/PROJECT_STATE.md`
* `/FEATURE_REGISTRY.md`

Record every feature as one of:

* `NOT_STARTED`
* `PARTIAL`
* `IMPLEMENTED_UNVERIFIED`
* `BLOCKED`
* `SETUP_REQUIRED`

Do not mark anything `PASS`.

### Required defect and risk register

Record:

* Critical risks
* High risks
* Medium risks
* Low risks
* build blockers
* security blockers
* schema blockers
* provider blockers
* UX blockers
* deployment blockers
* unknowns requiring Phase 1 or Phase 2 resolution

### Git safety

Do not delete or reset uncommitted user work.

Create or record a safe baseline checkpoint when the repository state permits.

### End condition

Stop after the audit and documentation updates.

Do not start Phase 0.

Return the complete Phase Implementation Report.

---

## PHASE -1 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase -1 implementation report.

Your task is to verify that the baseline audit is accurate and complete.

### Verification requirements

1. Re-run `git status`.
2. Confirm the recorded branch.
3. Confirm the recorded checkpoint.
4. Compare the route inventory with the actual filesystem.
5. Compare the migration inventory with `supabase/migrations`.
6. Compare the dependency inventory with `package.json` and the lockfile.
7. Confirm every environment variable category found in code.
8. Confirm every provider adapter recorded.
9. Confirm every test command recorded.
10. Re-run lint.
11. Re-run typecheck.
12. Re-run tests.
13. Re-run production build.
14. Confirm failures match the audit.
15. Confirm no feature was falsely marked `PASS`.
16. Confirm no user work was deleted.
17. Confirm no later-phase feature was implemented.
18. Confirm `PROJECT_STATE.md` was updated.
19. Confirm `FEATURE_REGISTRY.md` was updated.
20. Confirm the next action is Phase 0 only.

### Filesystem verification

Manually inspect representative files from:

* public routes
* authentication
* each public role
* internal Admin
* services
* Supabase
* tests
* configuration
* providers
* documentation

### Result rules

Mark `PASS` only when the audit reflects the actual repository.

Fix documentation inaccuracies immediately.

Do not implement Phase 0.

Return the complete Phase Verification Report.

---

# PHASE 0 — GITHUB SKILLS INSPECTION AND INSTALLATION

## PHASE 0 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase -1 repository audit.

Apply the Mandatory Execution Contract.

Your task is to inspect, approve, install, configure, and smoke-test the approved GitHub skill candidates without changing product scope.

### Skill candidates

Inspect these exact repositories using their current official instructions:

1. `https://github.com/bmad-code-org/BMAD-METHOD`
2. `https://github.com/sergekostenchuk/ui-ux-agent-skill-system`
3. `https://github.com/rastian/interaction-design-skills`
4. `https://github.com/github/spec-kit`
5. `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`
6. `https://github.com/LottieFiles/motion-design-skill`
7. `https://github.com/kylezantos/responsive-craft`
8. `https://github.com/MartinForReal/storymap-skill`
9. `https://github.com/muxiaomu001/shadcn-admin-skill`

### For every skill, inspect

* repository purpose
* current installation instructions
* license
* commercial-use compatibility
* maintenance activity
* supported Claude workflow
* supported operating system
* required runtime
* package requirements
* install scripts
* generated files
* modified files
* external downloads
* telemetry
* credential access
* filesystem scope
* security risk
* prompt conflict
* overlap with other skills
* Next.js compatibility
* TypeScript compatibility
* Tailwind compatibility
* ShadCN compatibility
* Windows compatibility
* rollback method

### Status assignment

Assign one exact status to every skill:

* `COMPATIBLE`
* `PARTIALLY_COMPATIBLE`
* `INCOMPATIBLE`
* `LICENSE_REVIEW_REQUIRED`
* `SECURITY_REVIEW_REQUIRED`
* `INSTALLATION_APPROVED`

Do not install a skill before approval.

### Installation rules

For every approved skill:

1. create or record a Git checkpoint
2. use current official installation instructions
3. inspect every changed file
4. inspect dependency changes
5. inspect scripts
6. remove unrelated generated files
7. run lint
8. run typecheck
9. run tests
10. run build
11. perform a controlled smoke test
12. document rollback

Do not expose secrets.

Do not execute unreviewed commands with elevated privileges.

### Smoke tests

Use small isolated tasks.

Examples:

* BMAD Method: create a short internal phase decomposition without writing parallel authority files
* UI/UX Agent Skill System: audit one existing form
* Interaction Design Skills: define Back, Close, and Cancel for one existing flow
* GitHub Spec Kit: produce acceptance criteria for one small existing component
* UI/UX Pro Max: inspect hierarchy of one existing card
* Motion Design Skill: create one reduced-motion-safe transition proposal
* Responsive Craft: inspect one route at required widths
* Storymap Skill: map one short user journey
* Shadcn Admin Skill: inspect one Admin list pattern

Do not apply smoke-test output broadly.

### Skill responsibility map

Record which approved skills may be used in Phases 1–18.

Resolve overlapping responsibilities.

### Required updates

Update:

* `/PROJECT_STATE.md`
* `/FEATURE_REGISTRY.md`

Record:

* exact skill status
* install state
* revision or release
* license result
* security result
* compatibility result
* changed files
* smoke-test result
* approved phases
* disabled skills
* rollback instructions

### End condition

Stop after skill inspection, approved installation, smoke testing, and documentation.

Do not start Phase 1.

Return the complete Phase Implementation Report.

---

## PHASE 0 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read the Phase 0 implementation report and all authority files.

Verify every skill independently.

### Verification requirements

For each of the nine skills:

1. confirm repository identity
2. confirm current revision or release
3. confirm license record
4. confirm compatibility record
5. confirm security review
6. confirm installation state
7. inspect changed files
8. inspect dependency changes
9. inspect scripts
10. confirm smoke-test evidence
11. confirm rollback method
12. confirm assigned phase responsibilities
13. confirm incompatible or blocked skills are not active

### Repository verification

Run:

* lint
* typecheck
* tests
* build

Confirm the skills did not:

* alter final product roles
* create conflicting documentation authority
* introduce public secrets
* create duplicate application architecture
* break current repository behavior
* add unexplained global configuration
* install unsafe packages
* modify unrelated user work

### Smoke-test verification

Repeat each installed skill’s controlled smoke test.

Confirm output:

* follows project authority
* does not copy another product
* does not alter scope
* remains useful
* remains reversible

Fix installation or configuration defects.

Remove a skill if it fails security or compatibility verification.

Update `PROJECT_STATE.md` and `FEATURE_REGISTRY.md`.

Do not start Phase 1.

Return the complete Phase Verification Report.

---

# PHASE 1 — FINAL PRODUCT AND TECHNICAL FOUNDATION

## PHASE 1 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files, the verified repository audit, and verified skill registry.

Invoke only compatible, installed, smoke-tested skills approved for architecture and story mapping.

Recommended approved skills for this phase:

* BMAD Method
* Storymap Skill
* GitHub Spec Kit

Apply the Mandatory Execution Contract.

### Primary objective

Create the final product architecture foundation before schema and feature implementation.

### Implement the final role model

Define and enforce:

* Owner
* Broker
* Builder/Developer
* Super Admin
* Admin
* permission-scoped Staff

Create centralized TypeScript role constants, validators, route access rules, and display names.

Public registration role values must be exactly:

```text
owner
broker
builder
```

Internal roles must remain separate.

### Implement host architecture

Create centralized environment-configured host resolution for:

* public marketplace
* Broker application
* Builder application
* internal application

Implement safe helpers for:

* current host detection
* role-to-host mapping
* canonical public host
* intended-route validation
* cross-host redirect
* local-development host behavior
* staging host behavior
* production host behavior

Prevent:

* open redirects
* role-host loops
* wrong-role rendering
* duplicated canonical public content across role hosts

### Create final route map

Implement or normalize route groups for:

* public homepage
* public search
* Property detail
* Project detail
* public profiles
* pricing
* help
* Blog
* legal
* authentication
* Owner application
* Broker application
* Builder application
* internal application

Record exact routes.

### Create service boundaries

Create or normalize service modules for:

* authentication
* profiles
* roles
* account status
* locations
* public search
* Properties
* Projects
* Units
* Requirements
* Direct Inquiry
* Leads
* messages
* notifications
* moderation
* reports
* support
* bugs
* billing
* providers
* audit
* recovery

Do not implement full business logic belonging to later phases.

Create typed interfaces and dependency boundaries.

### Create shared domain types

Define final domain types for:

* role
* account state
* moderation state
* publication state
* lifecycle state
* provider state
* verification state
* payment state
* subscription state
* report state
* recovery state

Prevent uncontrolled string use.

### Create environment validation

Implement typed environment validation for:

* public application URL
* Broker application URL
* Builder application URL
* internal application URL
* Supabase
* OTP provider
* email provider
* payment provider
* media provider
* analytics
* monitoring
* scheduler
* backup references

Optional providers must resolve to `SETUP_REQUIRED` without crashing unrelated features.

Production-required variables must fail safely when absent.

Update `.env.example` without secrets.

### Create feature-flag foundation

Implement typed server-authoritative feature flags.

Feature flags must not bypass:

* role checks
* permissions
* RLS
* billing
* security

### Create shared status and error contracts

Implement:

* typed service result
* typed domain errors
* safe user-facing errors
* request/correlation ID
* provider Setup Required state
* permission-denied state
* account-restricted state
* validation errors

Do not expose raw technical errors to users.

### Create architecture tests

Add tests for:

* role validation
* role-to-host mapping
* safe redirect validation
* environment validation
* provider-state mapping
* feature-flag evaluation
* status transition validation
* error serialization

### Required updates

Update:

* `/PROJECT_STATE.md`
* `/FEATURE_REGISTRY.md`

Record exact routes, types, modules, environment variables, tests, and architecture decisions.

### End condition

Stop after completing the final technical foundation.

Do not create the Phase 2 database schema.

Return the complete Phase Implementation Report.

---

## PHASE 1 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 1 implementation report.

Verify the final architecture foundation.

### Verify final roles

Test:

* valid Owner
* valid Broker
* valid Builder
* invalid public role
* internal role not accepted by public role validator
* role display names
* role route mapping
* role host mapping

### Verify host routing

Test local-development host behavior and configured host helpers.

Test:

* public host
* Broker host
* Builder host
* internal host
* wrong-role host
* invalid redirect
* external redirect attempt
* encoded redirect attempt
* redirect loop prevention
* canonical public URL generation

### Verify route inventory

Open or inspect every route group.

Confirm:

* public routes remain public
* protected routes identify their required role
* internal routes require internal access
* public canonical pages do not duplicate across role hosts
* placeholder routes do not appear as complete features

### Verify environment validation

Test:

* complete development configuration
* missing optional provider
* missing production-required variable
* malformed URL
* malformed Supabase configuration
* provider Setup Required state
* no secret included in public client bundle

### Verify service boundaries

Confirm no UI component directly owns provider or protected business authority.

Confirm service interfaces compile.

### Automated verification

Run:

* lint
* typecheck
* tests
* build

Fix defects and retest.

### Documentation verification

Confirm:

* exact route map in `FEATURE_REGISTRY.md`
* architecture status in `PROJECT_STATE.md`
* no feature incorrectly marked `PASS`
* next phase is Phase 2

Return the complete Phase Verification Report.

---

# PHASE 2 — DATABASE, MIGRATIONS, RLS, AUDIT, AND DATA FOUNDATION

## PHASE 2 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 1 architecture.

Use approved specification and architecture skills where useful.

Apply the Mandatory Execution Contract.

### Primary objective

Create the complete Supabase PostgreSQL data foundation through ordered migrations.

Do not rely on manual database edits.

### Pre-migration work

Inspect:

* all existing migrations
* current schema
* schema dependencies
* current RLS
* current data types
* current ownership fields
* current auth-user relations
* schema drift risks
* existing development data

Create a safe migration sequence that preserves valid data.

### Implement final enums or constrained status values

Define authoritative values for:

* public role
* account status
* onboarding status
* profile completion
* verification status
* moderation status
* publication status
* lifecycle status
* Property purpose
* Lead status
* Lead priority
* message status
* Follow-Up status
* subscription status
* payment status
* provider status
* report status
* support-ticket status
* bug status
* recovery status
* promotion status

Use enums or validated text according to the architecture.

### Implement identity and profile tables

Create or normalize:

* profiles
* public role assignments
* Owner profiles
* Broker profiles
* Builder profiles
* account-status history
* role-change requests
* consent records
* profile-verification cases
* profile-verification documents
* mobile-change requests
* email-change requests
* account-recovery cases
* session metadata

### Implement location tables

Create:

* states
* districts
* talukas
* cities
* localities
* location aliases
* missing-location requests
* location-slug history

Enforce valid parent-child relationships.

### Implement marketplace tables

Create or normalize:

* Properties
* Property details
* Property amenities
* Property media
* Property drafts
* Property status history
* saved Properties
* Projects
* Project details
* Project amenities
* Project media
* Project documents
* Project drafts
* Project status history
* Project Units
* Unit media
* Unit inventory events
* Unit price history
* saved Projects
* Requirements
* Requirement drafts
* Requirement responses
* Requirement status history
* saved searches

### Implement Direct Inquiry and Lead tables

Create:

* Direct Inquiries
* Leads
* Lead participants
* Lead messages
* Lead message reads
* Lead notes
* Lead Follow-Ups
* Lead activity events
* Lead status history
* Lead reports

Enforce one valid source relationship.

### Implement notifications and events

Create:

* in-app notifications
* notification read states where needed
* outbox events
* background-job runs
* scheduler-run records
* provider-delivery events

### Implement internal platform tables

Create:

* Staff profiles
* Staff roles
* permissions
* Staff role permissions
* Staff user roles
* Staff permission overrides
* moderation cases
* moderation actions
* reports
* report actions
* support tickets
* support messages
* support internal notes
* bugs
* bug events
* bug entity links
* audit logs
* security events
* recovery actions
* export jobs

### Implement billing tables

Create:

* plans
* plan versions
* plan features
* subscriptions
* subscription events
* usage counters
* payment orders
* payments
* payment events
* payment-reconciliation cases
* refunds
* invoices
* invoice items
* credit notes

Use integer minor units for money.

### Implement promotion tables

Create:

* promotions
* promotion creatives
* promotion schedules
* promotion impressions
* promotion clicks
* promotion status history

### Implement provider and platform configuration tables

Create safe non-secret records for:

* provider configurations
* provider health checks
* feature flags
* system settings
* maintenance events
* redirects
* SEO page configuration
* CMS pages
* CMS page versions
* Blog articles
* legal documents

Do not store raw provider secrets.

### Constraints

Add constraints for:

* valid ownership
* one active public role
* Unit requires Project
* valid location hierarchy
* non-negative money
* non-negative inventory
* available inventory not above total
* valid Lead source
* valid Direct Inquiry source
* unique idempotency keys
* unique saved-item relationships
* valid current status
* soft-delete consistency

### Indexes

Add indexes for:

* public marketplace eligibility
* city and locality search
* user-owned Properties
* Builder Projects
* Project Units
* Leads by owner and status
* Leads by last activity
* unread messages
* Follow-Ups due
* moderation queues
* reports
* billing references
* payment provider IDs
* invoices
* provider events
* audit filters
* soft-deleted records
* SEO slugs

### RLS

Enable and implement RLS for all protected tables.

Testable policies must cover:

* Guest
* correct owner
* wrong owner
* Owner
* Broker
* Builder
* Staff without permission
* Staff with permission
* Admin
* Super Admin
* trusted server

Do not use unsafe recursive RLS.

Use indexed ownership and scope checks.

### Public-safe views

Create public-safe views or services for:

* public Properties
* public Projects
* public Units
* public profiles
* public promotions
* public locations
* public CMS
* public Blog

Exclude private fields.

### Audit foundation

Audit logs must be append-only through trusted server pathways.

Create helpers or functions for:

* status history
* sensitive action audit
* recovery relation
* correlation ID

### Seed foundation

Add deterministic development seed data only when isolated.

Include:

* Gujarat location foundation
* controlled role test accounts through documented development process
* taxonomies
* statuses
* permissions
* basic plans

Do not seed fake production records.

### Generated types

Regenerate Supabase/TypeScript database types according to the repository process.

### Automated checks

Run:

* migration validation
* lint
* typecheck
* unit tests
* integration tests
* build

### Required updates

Update `PROJECT_STATE.md` and `FEATURE_REGISTRY.md` with:

* migration filenames
* tables
* constraints
* indexes
* RLS policies
* public views
* test results
* forward-fix or rollback classification

### End condition

Stop after database foundation implementation.

Do not implement authentication UI.

Return the complete Phase Implementation Report.

---

## PHASE 2 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read the Phase 2 implementation report and all authority files.

Verify the complete database foundation against an isolated development or staging Supabase environment.

### Migration verification

1. start from a clean database
2. apply every migration in order
3. verify no manual step is required
4. verify migrations are deterministic
5. verify generated types
6. verify constraints
7. verify indexes
8. verify views
9. verify functions
10. verify triggers
11. verify RLS is enabled

### Relationship verification

Test:

* Profile requires auth identity
* one active public role
* Property ownership
* Project ownership
* Unit requires Project
* Requirement ownership
* Direct Inquiry source
* Lead source
* message requires Lead
* Follow-Up requires Lead
* promotion requires eligible Builder destination
* payment relations
* invoice relations
* recovery relations

### Constraint verification

Attempt invalid:

* role
* location hierarchy
* negative price
* negative inventory
* available inventory above total
* duplicate saved Property
* duplicate saved Project
* duplicate idempotency key
* invalid Lead source
* invalid Direct Inquiry source
* Unit without Project
* payment amount inconsistency where constrained

### RLS identity matrix

Run actual data operations as:

* Guest
* Owner
* another Owner
* Broker
* another Broker
* Builder
* another Builder
* Staff without permission
* Staff with view permission
* Staff with action permission
* Admin
* Super Admin
* trusted server

Test select, insert, update, and delete where relevant.

### Public-safe data verification

Confirm public views do not expose:

* mobile
* email
* private address
* Lead data
* messages
* notes
* invoices
* security events
* moderation notes
* provider secrets

### Query-plan verification

Inspect representative query plans for:

* public city Property search
* public Project search
* owner Property list
* Builder Project list
* Lead list
* unread messages
* Follow-Ups due
* moderation queue
* payment lookup
* audit filtering

Fix missing indexes or unsafe queries.

### Automated checks

Run:

* migration validation
* lint
* typecheck
* tests
* build

Update state and registry.

Do not start Phase 3.

Return the complete Phase Verification Report.

---

# PHASE 3 — AUTHENTICATION, OTP, ONBOARDING, PROFILES, AND SESSIONS

## PHASE 3 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 2 data foundation.

Use approved interaction and UX skills where useful.

Apply the Mandatory Execution Contract.

### Primary objective

Implement complete mobile-number authentication, four-digit OTP, public registration, onboarding, profile management, role access, internal authentication, sessions, and recovery foundations.

### Public login

Implement:

* direct `/login`
* contextual login
* homepage visible behind authentication on the direct route
* accessible desktop modal
* mobile full-screen authentication
* tablet-adapted authentication
* Close
* Back
* browser Back
* safe intended destination
* registered-number flow
* unregistered-number registration path
* restricted-account state
* suspended-account state

### Mobile validation

Implement:

* Indian mobile-number normalization
* E.164 storage
* client validation
* server validation
* enumeration-resistant server behavior
* masked display
* numeric keyboard
* paste support
* accessible labels

### OTP

Implement:

* four-digit OTP
* send
* resend
* cooldown
* expiry
* attempt limits
* brute-force protection
* IP/user/session limits
* autofill attributes
* paste
* manual typing
* provider Setup Required
* test-mode state outside production
* production development-mode block
* safe error mapping
* no OTP logging
* no OTP browser storage
* no OTP URL parameter

### Registration

Implement role-first registration with exactly:

* Owner
* Broker
* Builder/Developer

Collect:

* full name
* email
* mobile
* role
* required consent

Implement:

* validation
* duplicate handling
* OTP verification
* transactional account creation
* common profile
* public role assignment
* role-specific profile
* consent record
* onboarding state
* secure session
* intended-action return

### Onboarding

Implement role-specific onboarding:

#### Owner

* basic profile
* city
* optional avatar
* preferences
* return to intended task or Owner dashboard

#### Broker

* business display name
* business description
* service cities
* logo or profile image
* required business details
* notification preferences

#### Builder

* Builder business name
* legal name where required
* logo
* description
* registered office
* operating cities
* compliance information
* secure verification-document upload state
* plan/trial eligibility

### Profile management

Implement:

* private profile
* public profile separation
* role-specific business profile
* profile completion
* edit
* validation
* unsaved changes
* public-content moderation trigger
* email verification state
* mobile-change workflow
* email-change workflow
* role-change request
* notification preferences
* privacy and consent
* security settings

### Sessions

Implement:

* secure cookie sessions
* session refresh
* session expiry
* intended-route preservation
* logout
* logout all devices
* safe session metadata
* session revocation
* multi-tab logout behavior
* wrong-role route handling
* correct host redirect
* authenticated user visiting auth routes

### Account state

Implement:

* active
* pending
* restricted
* suspended
* closed

Enforce states on routes and services.

### Internal authentication

Implement:

* internal invite or approved account activation
* internal account status
* permission loading
* stricter session handling
* internal logout
* internal session revocation
* no public registration path

### Security

Implement:

* rate limiting
* security events
* safe account-recovery entry
* assisted-recovery case creation
* duplicate-account review path
* session fixation prevention
* safe redirect validation
* CSRF protection according to architecture

### Notifications

Create real in-app events for:

* account created
* mobile changed
* email changed
* role-change submitted
* account restricted
* account restored
* session revoked
* verification update

Email delivery remains provider-state-aware.

### Tests

Add:

* mobile validation
* email validation
* full-name validation
* role validation
* OTP format
* OTP rate limits
* OTP expiry
* OTP attempts
* registration transaction
* session refresh
* logout
* account status
* role route
* host redirect
* profile privacy
* RLS
* internal permission loading

Run:

* lint
* typecheck
* tests
* build

### Required updates

Update `PROJECT_STATE.md` and `FEATURE_REGISTRY.md`.

### End condition

Stop after implementation.

Do not redesign the full application shell yet.

Return the complete Phase Implementation Report.

---

## PHASE 3 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 3 implementation report.

Use the live browser.

Manually click, type, paste, navigate, refresh, and use browser Back. Do not substitute API-only tests for user-facing verification.

### Start or reuse server

* detect running server
* confirm actual URL and port
* start the correct server when absent
* keep it running after verification when safe

### Public login verification

Test:

* direct `/login`
* homepage background
* desktop modal
* mobile full-screen authentication
* Close
* Escape
* Back
* browser Back
* refresh
* registered Owner
* registered Broker
* registered Builder
* unregistered number
* invalid number
* restricted account
* suspended account
* provider Setup Required
* slow network
* duplicate Continue tap

### OTP verification

Manually test:

* four-digit entry
* incomplete code
* correct code
* incorrect code
* expired code
* resend cooldown
* resend
* attempt limit
* paste
* autofill-compatible field
* Change Number
* browser refresh
* provider failure
* no OTP in URL
* no OTP in console
* no OTP in network response beyond required secure provider behavior
* production-mode development bypass prevention

### Registration verification

Register controlled test accounts for:

* Owner
* Broker
* Builder

Test:

* no role
* invalid role manipulation
* invalid full name
* invalid email
* duplicate email
* invalid mobile
* duplicate mobile
* missing consent
* OTP failure
* successful transaction
* no duplicate records on retry
* role-specific profile
* intended-action return

### Onboarding verification

Complete each role onboarding.

Test:

* save and resume
* Back
* unsaved changes
* required fields
* optional fields
* public/private separation
* mobile keyboard
* provider Setup Required for secure documents when unavailable

### Session verification

Test:

* refresh persistence
* session expiry
* logout
* browser Back after logout
* direct protected route after logout
* logout all devices
* multi-tab logout
* revoked session
* role change refresh
* wrong host
* wrong role
* authenticated user visiting `/login`

### Responsive verification

Test:

* 320
* 360
* 390
* 430
* 768
* 1024
* 1366
* 1440
* wide

Check:

* clipping
* keyboard obstruction
* focus
* modal/sheet behavior
* action visibility
* safe area
* text wrapping

### Security and RLS

Test direct URL and API access as wrong users and roles.

Check console and network throughout.

Fix every defect.

Rerun all affected flows.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 4 — DESIGN SYSTEM, SHELLS, NAVIGATION, AND INTERACTION FOUNDATION

## PHASE 4 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 3 authentication implementation.

Invoke approved UX, interaction, responsive, visual, and motion skills.

Recommended approved skills:

* UI/UX Agent Skill System
* Interaction Design Skills
* UI/UX Pro Max Skill
* Responsive Craft
* LottieFiles Motion Design Skill

Apply the Mandatory Execution Contract.

### Primary objective

Implement the original Apple-inspired mobile-first design system and shared interaction foundation used by all later screens.

### Design tokens

Implement reusable tokens for:

* brand colors
* neutral colors
* surfaces
* text
* borders
* focus
* success
* warning
* error
* information
* statuses
* typography
* spacing
* radii
* shadows
* sizes
* motion
* z-index
* safe-area offsets
* layout widths

Do not scatter arbitrary values across components.

### Typography

Implement responsive type styles for:

* display
* page title
* section title
* card title
* body
* supporting text
* label
* caption
* metric
* price
* status

Support:

* long Gujarat locations
* long user names
* long Project names
* Indian currency
* browser zoom
* Unicode

### Shared accessible primitives

Create or normalize:

* Button
* Icon Button
* Link
* Input
* Textarea
* Select
* Combobox
* Radio Cards
* Checkbox
* Status Chip
* Alert
* Banner
* Toast
* Tooltip
* Menu
* Popover
* Modal
* Drawer
* Bottom Sheet
* Tabs
* Section Navigation
* Card
* List Row
* Table
* Pagination
* Skeleton
* Empty State
* Error State
* Setup Required State
* Confirmation
* Difference Viewer
* File Upload
* Image Gallery

### Application shells

Implement shared shells for:

* public homepage
* public search
* public detail
* authentication
* Owner
* Broker
* Builder
* focused task
* internal Admin
* error and recovery

### Headers

Implement:

* homepage header
* search header
* public detail header
* role dashboard header
* module-list header
* entity-detail header
* focused-task header
* Admin mobile header
* Admin desktop header

The homepage city selector must not appear in authenticated role headers.

### Navigation foundation

Implement:

* role-aware mobile bottom-navigation component
* tablet behavior
* desktop sidebar or rail
* active-route detection
* real badges
* safe-area spacing
* page-bottom padding
* focused-task hide/adapt behavior
* keyboard navigation
* accessible current-page state

Use final role mappings.

### Interaction containers

Implement intentional selection rules and reusable behavior for:

* page
* modal
* drawer
* bottom sheet
* popover
* inline expansion

Implement:

* outside-click closing
* Escape
* focus trap
* focus restoration
* scroll locking
* browser Back integration where route-based
* unsaved-change guard

### Global navigation behavior

Implement helpers for:

* Back
* Close
* Cancel
* browser Back
* list-detail-return
* scroll restoration
* filter-state preservation
* route-state serialization
* safe deep links

### Responsive layout

Implement:

* page gutters
* narrow/medium/wide/full width containers
* responsive grids
* mobile cards
* tablet transitions
* desktop data density
* max-width control
* no horizontal overflow

### Fixed and sticky foundation

Implement safe shared behavior for:

* headers
* bottom navigation
* action bars
* message composer
* filter bar
* table header

Account for:

* safe area
* keyboard
* content padding
* z-index
* nested scroll

### Motion

Implement subtle, purposeful motion.

Support:

* reduced motion
* no layout shift
* no focus movement
* no delayed actions

### Accessibility foundation

Implement:

* skip link
* focus-visible styles
* semantic landmarks
* route-heading focus
* live-region utility
* accessible error summary
* accessible dialog/sheet behavior
* accessible table primitives

### Storybook or component-preview strategy

Use the repository’s compatible component-preview or isolated test method.

Cover all primitive states.

Do not add a heavy tool unless justified and approved.

### Tests

Add:

* component-state tests
* keyboard tests
* dialog focus tests
* bottom-navigation active-state tests
* safe-area/layout tests
* reduced-motion tests
* route-state helper tests

Run:

* lint
* typecheck
* tests
* build

### Required updates

Update state and registry with exact components, tokens, layouts, routes, and tests.

### End condition

Stop after the shared design and interaction foundation.

Do not build the full homepage content yet.

Return the complete Phase Implementation Report.

---

## PHASE 4 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 4 implementation report.

Use the live application and component-preview route where available.

### Verify every shared primitive

Test all states for:

* Button
* Icon Button
* Input
* Textarea
* Select
* Combobox
* Radio Cards
* Checkbox
* Status Chip
* Alert
* Banner
* Toast
* Tooltip
* Menu
* Popover
* Modal
* Drawer
* Bottom Sheet
* Tabs
* Section Navigation
* Card
* List Row
* Table
* Pagination
* Skeleton
* Empty State
* Error State
* Setup Required
* Confirmation
* Difference Viewer
* Upload
* Gallery

### Interaction testing

Manually test:

* Tab
* Shift+Tab
* Enter
* Space
* Escape
* outside click
* focus trap
* focus restoration
* scroll lock
* Back
* Close
* Cancel
* browser Back
* unsaved-change guard

### Navigation testing

Verify role bottom navigation for:

* Owner
* Broker
* Builder

Test:

* item order
* labels
* active state
* real badge
* safe area
* final-row padding
* focused-task adaptation
* tablet behavior
* desktop transition
* logout removal

### Shell testing

Open representative routes for:

* public homepage shell
* public search shell
* public detail shell
* authentication shell
* Owner shell
* Broker shell
* Builder shell
* focused task shell
* Admin shell
* error shell

### Responsive testing

At every required width, inspect:

* text wrapping
* page gutters
* cards
* tables
* modal
* drawer
* bottom sheet
* navigation
* sticky/fixed UI
* keyboard behavior
* no overflow
* no clipping

### Accessibility

Verify:

* skip link
* heading order
* visible focus
* accessible names
* dialog announcement
* errors
* contrast
* zoom
* reduced motion
* touch targets

Check console and network.

Fix shared causes rather than local patches.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 5 — PUBLIC HOMEPAGE, SEARCH ENTRY, PUBLIC CARDS, AND NOTIFICATIONS

## PHASE 5 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 4 design foundation.

Use approved UX and responsive skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the public homepage, public shell, homepage-only city context, search entry experience, public discovery cards, notification preview, and public footer.

Full location hierarchy, full search filtering, SEO generation, and CMS management are completed in Phase 6.

### Homepage header

Implement:

* brand
* homepage-only city selector trigger
* search entry
* Login or Account
* notification action for authenticated users
* Post action
* Pricing
* responsive menu
* mobile and desktop behavior

Do not repeat the homepage city selector in non-homepage headers.

### Homepage city context

Implement the city-selector UI using database-backed city records available from Phase 2.

Support:

* selected city
* `Select City`
* popular cities
* recent safe selections
* search input
* no-results state
* loading
* error
* retry
* mobile full-screen or sheet
* desktop accessible dialog or popover
* keyboard
* persistence
* explicit priority rules

Do not infer device location.

### Search entry

Implement a search activation experience that:

* does not navigate on focus alone
* opens suggestions
* supports typing
* supports clear
* supports keyboard
* groups suggestions
* requires meaningful selection or query before opening results
* preserves selected city
* uses a typed search-query contract
* handles loading, no results, and error

Full relevance and filtering are completed in Phase 6.

### Homepage sections

Implement real-data sections for:

* Builder promotion slot foundation
* selected-city Properties
* selected-city Projects
* newly approved Properties
* newly approved Projects
* category discovery
* popular cities
* trust and safety
* posting CTA
* pricing CTA
* helpful content foundation

Every section must:

* use public-safe data
* have real destination
* have real empty behavior
* hide cleanly when appropriate
* avoid fake counts
* avoid fake metrics

### Public cards

Implement production-ready:

* Property card
* Project card
* city card
* category card
* promotion card foundation
* public profile summary card

Support:

* image fallback
* stable aspect ratio
* price
* title
* location
* facts
* status
* Save
* Direct Inquiry
* primary detail destination
* nested-action isolation
* accessibility
* skeleton

### Saved-state foundation

Implement server-backed Save and Unsave for:

* Properties
* Projects

Guest action must preserve intent and open contextual authentication.

### Public notifications

Implement:

* real unread count
* desktop preview popover
* mobile full-screen sheet
* View All
* mark read
* exact destination
* unavailable-destination recovery
* outside click
* Escape
* focus management

### Homepage Builder promotion delivery foundation

Render only eligible real promotion records.

Support:

* selected-city priority
* configured fallback
* no-promotion hidden state
* active schedule
* valid destination
* approved creative
* responsive carousel foundation
* reduced motion
* keyboard
* swipe

Full Builder management and billing are completed later.

### Public footer

Implement:

* marketplace links
* city links
* category links
* pricing
* help
* Blog
* legal
* grievance
* support
* configured social links only

Do not create keyword spam.

### Performance

Use:

* Server Components
* public-safe caching
* section-level loading
* optimized images
* no Admin code in public bundle
* bounded queries
* partial-failure handling

### Tests

Add tests for:

* city-context priority
* search-entry validation
* card destinations
* save idempotency
* notification destination
* promotion eligibility foundation
* public-safe response
* homepage section empty behavior

Run all required commands.

### Updates

Update state and registry.

### End condition

Stop after Phase 5.

Do not implement the full Phase 6 search engine or SEO system.

Return the complete Phase Implementation Report.

---

## PHASE 5 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read the Phase 5 implementation report and all authority files.

Use the live browser and manually operate the homepage.

### Homepage verification

Test as:

* Guest
* authenticated Owner
* authenticated Broker
* authenticated Builder

Verify:

* header
* brand
* city selector
* search entry
* account action
* notification action
* Post
* Pricing
* responsive menu
* footer

### City selector

Test:

* no selected city
* select city
* change city
* recent city
* popular city
* long city name
* search
* no results
* server error
* retry
* keyboard
* Escape
* outside click
* mobile sheet
* desktop dialog
* persistence after refresh

Confirm the selector does not appear in non-homepage headers.

### Search entry

Test:

* focus without typing
* meaningful text
* city suggestion
* locality suggestion where available
* Project suggestion
* category suggestion
* keyboard arrows
* Enter
* Escape
* clear
* loading
* no results
* invalid query
* selected-city preservation

Confirm focus alone does not open an empty results page.

### Homepage sections

Verify real data and destinations for:

* promotions
* Properties
* Projects
* categories
* popular cities
* trust
* posting
* pricing
* help

Test section empty and partial-failure states.

### Cards

Test:

* card primary click
* Save
* Unsave
* Guest save auth return
* Direct Inquiry auth entry
* nested action isolation
* long title
* long location
* missing image
* loading skeleton

### Notifications

Test:

* unread count
* preview
* mobile sheet
* exact destination
* mark read
* View All
* unavailable destination
* outside click
* Escape
* keyboard
* refresh persistence

### Promotion carousel

Test:

* city match
* fallback
* no promotion
* active schedule
* expired promotion exclusion
* invalid destination exclusion
* swipe
* keyboard
* reduced motion
* image failure

### Required widths

Test all required widths.

Check:

* no clipping
* no overlap
* no hidden CTA
* no bottom-navigation conflict
* no fixed-header issue
* no layout shift

Check console, network, privacy, and public payloads.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 6 — LOCATIONS, FULL SEARCH, SEO, CMS, LEGAL, AND PUBLIC PROFILES

## PHASE 6 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 5 public experience.

Use approved story-mapping, UX, responsive, and specification skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the complete Gujarat location system, public marketplace search, filters, sorting, city SEO, public profiles, saved searches, CMS, Blog, legal content, metadata, structured data, sitemaps, and redirects.

### Gujarat location data

Implement and load verified textual hierarchy:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

Implement:

* active states
* aliases
* English and Gujarati-ready names
* normalized names
* slugs
* parent validation
* search indexes
* popular cities
* featured cities
* missing-location requests
* Admin-review-ready records
* slug history
* redirects

### Cascading selectors

Implement reusable selectors for:

* Property posting
* Project posting
* Requirement posting
* public filters
* public profiles
* promotion targeting
* Admin filters

Do not reuse the homepage city selector unchanged for structured forms.

### Missing-location request

Implement:

* no-result action
* proposed location type
* parent location
* proposed name
* alternate spelling
* note
* submission
* notification
* Admin queue foundation
* duplicate detection

### Search service

Implement server-backed:

* Property search
* Project search
* combined suggestions
* query normalization
* aliases
* selected-city relevance
* pagination
* stable sorting
* public eligibility
* public-safe response
* rate limiting
* stale-request cancellation
* no client-side full-data filtering

### Search suggestions

Group:

* Cities
* Localities
* Villages
* Property Types
* Projects
* Builders
* Brokers where public search is approved
* Recent Searches
* Popular Searches

### Property filters

Implement approved applicable filters:

* city
* locality
* village
* purpose
* category
* Property type
* price range
* area range
* area unit
* bedrooms
* bathrooms
* furnishing
* availability
* Property age
* parking
* amenities
* verification state
* posted-by role where approved
* date posted

### Project filters

Implement:

* city
* locality
* Project type
* price range
* configuration
* construction status
* possession
* Builder
* amenities
* compliance/verification state
* Unit availability

### Filter behavior

Implement:

* dependent filters
* incompatible-filter clearing
* mobile draft state
* Reset
* Apply
* selected chips
* Clear All
* URL state
* browser Back
* refresh
* shareable routes

### Sorting

Implement real server-backed sorting.

### Pagination

Use the architecture-approved pagination strategy.

Preserve:

* filters
* sort
* page/cursor
* scroll
* selected entity
* return state

### Search result pages

Implement mobile, tablet, and desktop layouts.

Include:

* search header
* query
* selected location
* filters
* sort
* real results
* loading
* no results
* invalid query
* server error
* retry
* broaden-search option according to configured rules

### Public profiles

Implement public-safe:

* Owner profile
* Broker profile
* Builder profile

Include role-appropriate approved fields and active public entities.

Never expose private contact.

### Saved searches

Implement:

* Save Search
* rename
* rerun
* delete
* server persistence
* validated filters
* saved list
* Guest authentication return

Do not claim automatic alerts unless configured and verified.

### SEO routes

Implement useful canonical pages for:

* city Properties
* city Projects
* sale
* rent
* approved Property types
* commercial
* industrial
* public profiles
* Property detail
* Project detail
* Blog
* CMS

Do not generate arbitrary thin filter combinations.

### Metadata

Implement:

* title
* description
* canonical
* robots
* Open Graph
* breadcrumbs
* structured data
* public image
* indexability decision

### Structured data

Use only valid structured data.

Validate every generated payload.

### Sitemaps

Implement segmented sitemaps for:

* pages
* Properties
* Projects
* public profiles
* locations
* Blog
* CMS

Include only eligible public records.

### Robots

Noindex or exclude:

* auth
* dashboards
* Admin
* private profiles
* Leads
* messages
* billing
* drafts
* pending content
* rejected content
* arbitrary filter combinations
* user-specific pages

### Redirects

Implement:

* slug history
* merged location redirects
* changed CMS routes
* public profile slug changes
* canonical normalization
* loop prevention

### CMS and Blog

Implement:

* draft
* review
* preview
* version
* schedule
* publish
* archive
* restore
* sanitized content
* metadata
* audit foundation
* public rendering

### Legal

Create production-ready route and content-management support for:

* Terms
* Privacy
* Cookie and Consent Policy
* Listing Policy
* Promotion Policy
* Payment Policy
* Refund and Cancellation Policy
* Marketplace Disclaimer
* Verification Disclaimer
* Builder/Project Compliance Notice
* Grievance and Support

Use versioning and effective dates.

### Cookie and consent

Implement:

* essential
* preferences
* analytics
* marketing only when enabled

Provide preference management.

### Performance and security

Implement:

* server rendering/ISR where appropriate
* cache invalidation
* public-safe views
* search rate limits
* HTML sanitization
* no private data in metadata
* no private data in cache

### Tests

Add comprehensive tests for:

* location hierarchy
* alias search
* search filters
* sorting
* pagination
* URL state
* public eligibility
* canonical
* robots
* sitemap eligibility
* metadata
* structured data
* redirects
* public profile privacy
* saved searches
* CMS publication
* legal versioning

Run all required commands.

Update state and registry.

Stop after Phase 6.

Return the complete Phase Implementation Report.

---

## PHASE 6 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 6 implementation report.

Use the live browser.

### Location verification

Manually test:

* State
* District
* Taluka
* City
* Village/Locality
* long names
* aliases
* Gujarati-ready text
* invalid hierarchy
* inactive location
* no result
* missing-location request
* duplicate request
* refresh
* keyboard
* mobile selector
* tablet selector
* desktop selector

### Search verification

Test meaningful searches for:

* city
* locality
* village
* Property type
* Property
* Project
* Builder
* approved Broker search
* popular search
* recent search

Test Property and Project modes.

### Filter verification

Manually apply every applicable filter.

Test:

* dependent filter
* incompatible filter clearing
* Reset
* Apply
* Clear All
* selected chips
* URL state
* browser Back
* refresh
* shared URL
* invalid URL value
* no results
* broaden search
* server failure
* slow network

### Sorting and pagination

Test all sort options.

Test:

* first page
* later page/cursor
* detail open
* browser Back
* scroll restoration
* no duplicate results
* stable sorting

### Public profiles

Verify:

* Owner
* Broker
* Builder
* active entities
* empty profile
* unavailable profile
* no private mobile
* no private email
* metadata
* responsive behavior

### Saved searches

Test:

* Guest save
* auth return
* save
* duplicate save
* rename
* rerun
* delete
* invalid stored filter
* cross-device persistence where environment supports it

### SEO

Open and inspect:

* city Property page
* city Project page
* sale page
* rent page
* Property-type page
* public profile
* Property detail
* Project detail
* Blog
* CMS

Verify:

* H1
* metadata
* canonical
* robots
* Open Graph
* structured data
* breadcrumbs
* internal links
* useful content
* no private data

### Sitemap and robots

Inspect generated sitemap outputs.

Confirm:

* eligible content included
* draft excluded
* pending excluded
* rejected excluded
* deleted excluded
* private routes excluded
* slug redirects work
* no redirect loops

### CMS and legal

Test:

* draft not public
* preview authorized
* published
* scheduled
* archived
* restored
* sanitized content
* legal version
* cookie preferences
* footer links

### Responsive and accessibility

Test every required width, keyboard, focus, screen-reader semantics, filters, tables/cards, and text wrapping.

Check console and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 7 — PROPERTY CREATION, MODERATION, PUBLICATION, AND MANAGEMENT

## PHASE 7 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 6 marketplace foundation.

Use approved interaction, responsive, and UX skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the complete Owner and Broker Property lifecycle.

### Eligibility

Before Property creation, enforce:

* authentication
* Owner or Broker role
* account state
* profile completion
* verification requirement
* plan limits
* active restriction
* provider state for media

### Property creation flow

Implement mobile-first steps:

1. purpose and category
2. basic details
3. specifications
4. Gujarat location
5. pricing
6. amenities
7. media
8. description
9. ownership declaration and policy consent
10. review
11. Save Draft or Submit

Fields must adapt to category and purpose.

### Drafts

Implement:

* server-backed draft
* stable ID
* resume
* step restoration
* last saved
* explicit Save Draft
* safe auto-save
* stale-response protection
* retry
* abandonment handling
* deletion
* unsaved-change guard

### Property data

Implement validated fields for:

* title
* purpose
* category
* type
* availability
* possession
* age
* bedrooms
* bathrooms
* balconies
* floor
* total floors
* area
* area unit
* furnishing
* parking
* facing
* ownership type
* category-specific data
* amenities
* description

### Pricing

Implement:

* integer minor units
* sale price
* rent
* lease
* deposit
* maintenance
* price per area
* negotiable state
* approved Price on Request state where allowed
* server validation
* Indian display formatting

### Location and address

Use the final location hierarchy.

Separate:

* structured public location
* address line
* building/society
* landmark
* postal code
* private address detail
* public-safe display

### Media

Implement:

* upload authorization
* image validation
* processing state
* responsive variants
* ordering
* cover selection
* remove
* retry
* failure
* moderation
* provider Setup Required

Do not show success before server confirmation.

### Preview

Implement private preview using saved draft data.

Show:

* card
* detail approximation
* missing required fields
* public-safe profile
* disclaimer

### Submission

Implement transactional:

* validation
* ownership check
* eligibility
* plan limit
* consent
* moderation-case creation
* status history
* activity
* notification
* cache invalidation

### Property management

Implement:

* Property list
* search
* filters
* sort
* detail
* overview
* public preview
* moderation
* Leads entry
* activity
* edit
* pause
* resume
* soft delete
* restore request/action
* status history

### Sensitive edits

Trigger re-review for configured public changes.

### Public detail

Implement the complete public Property detail:

* gallery
* price
* title
* location
* facts
* description
* specifications
* amenities
* poster public profile
* Direct Inquiry
* Save
* Share
* Report
* related Properties
* unavailable state
* metadata consistency

### Moderation user states

Implement:

* pending review
* in review
* Changes Required
* approved
* rejected
* reopened
* published
* paused
* deleted
* restored

### Notifications

Create real events for every meaningful lifecycle transition.

### Security

Implement:

* ownership checks
* RLS
* server validation
* upload authorization
* rate limits
* duplicate detection
* public/private data separation
* audit for sensitive Admin pathways

### Tests

Add comprehensive unit, integration, and E2E tests for the entire Property lifecycle.

Run all required commands.

Update state and registry.

Stop after Phase 7.

Return the complete Phase Implementation Report.

---

## PHASE 7 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read the Phase 7 implementation report and all authority files.

Use the live browser.

### Role verification

Test Property creation as:

* Owner
* Broker
* Builder
* Guest
* restricted account
* suspended account
* plan-limit account
* incomplete-profile account

Only Owner and Broker may create.

### Full Property creation

Manually type and complete Property flows for multiple categories and purposes.

Test:

* Sale
* Rent
* Lease
* residential category
* commercial category
* land category
* industrial category

Test category-dependent fields.

### Draft behavior

Test:

* create
* auto-save
* Save Draft
* network failure
* retry
* close
* browser Back
* refresh
* resume
* stale-tab conflict
* discard
* delete draft

### Validation

Test:

* missing title
* invalid price
* negative values
* invalid area
* invalid floor
* invalid location hierarchy
* missing declaration
* missing media
* long description
* unsafe text
* duplicate submission

### Media

Test:

* valid image
* invalid extension
* mismatched MIME
* failed upload
* retry
* reorder
* cover
* remove
* processing
* provider Setup Required
* unauthorized upload
* image fallback

### Submission and moderation state

Verify:

* submit
* pending review
* in review
* Changes Required
* correction
* resubmit
* rejected
* reopened
* approved
* published

### Property management

Test:

* list
* search
* filters
* sort
* detail
* edit
* re-review
* pause
* resume
* soft delete
* restore
* status history
* notification destinations
* Property-specific Leads entry

### Public detail

Verify:

* card consistency
* gallery
* price
* title
* location
* facts
* description
* amenities
* public profile
* Save
* Direct Inquiry entry
* Share
* Report
* related Properties
* unavailable state
* metadata
* no private data

### Direct URL and RLS

Test wrong user and wrong role access to:

* draft
* edit
* management detail
* deleted Property
* restore
* media

### Responsive

Test all required widths and mobile keyboard.

Check Back, Close, Cancel, browser Back, refresh, console, and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 8 — BUILDER PROJECTS, UNITS, INVENTORY, AND COMPLIANCE

## PHASE 8 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 7 Property workflow.

Use approved UX, interaction, responsive, and specification skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the complete Builder Project and Project Unit lifecycle.

### Eligibility

Enforce:

* authenticated Builder
* account state
* Builder profile completion
* verification
* compliance requirements
* plan limits
* media provider state

### Project creation flow

Implement:

1. Project identity
2. Project type and construction status
3. Gujarat location
4. Builder and compliance information
5. amenities and specifications
6. media and documents
7. Units and inventory
8. pricing and possession
9. review
10. Save Draft or Submit

### Project drafts

Implement:

* server-backed draft
* save
* auto-save
* resume
* step restoration
* related Unit drafts
* media state
* compliance state
* delete
* unsaved-change guard

### Project data

Implement validated:

* Project name
* Project type
* description
* launch date
* construction status
* possession date
* land area
* phases
* towers/wings
* floors
* amenities
* public tags

### Compliance

Implement structured:

* applicability
* registration number
* registration status
* approval references
* document upload
* expiry
* verification state
* private storage
* moderation

Do not mark compliance verified from user input alone.

### Project media

Implement:

* cover image
* gallery
* floor plans
* master plan
* brochure
* approved video field where supported
* public/private classification
* processing
* moderation
* provider states

### Units

Implement Unit creation only inside a Project.

Fields:

* configuration
* type
* label
* tower/wing
* floor
* bedrooms
* bathrooms
* area
* unit
* price
* inventory
* possession
* description
* floor plan
* status

### Inventory

Implement:

* total
* available
* reserved
* sold
* blocked
* unavailable
* validation
* inventory-event history
* concurrency-safe updates
* no negative values
* no available above total

### Pricing

Implement:

* integer minor units
* base price
* range
* price per area
* effective date
* price history
* moderation-impact rules
* cache invalidation

### Project preview and submission

Implement private preview and transactional submission.

Create:

* moderation case
* status history
* activity
* notifications

### Project management

Implement:

* list
* search
* filters
* sort
* detail
* Units
* Leads entry
* media
* compliance
* moderation
* activity
* edit
* pause
* resume
* soft delete
* restore
* promotion eligibility relation

### Unit management

Implement:

* Unit list
* Unit detail
* edit
* price update
* inventory update
* pause
* resume
* soft delete
* restore
* Unit Leads entry
* price history
* inventory history

### Public Project detail

Implement:

* gallery
* Builder
* location
* price range
* configuration
* construction status
* possession
* Direct Inquiry
* Units
* amenities
* compliance summary
* brochure
* related Projects
* Save
* Share
* Report
* unavailable state

### Public Unit context

Units must remain inside Project detail.

### Security

Implement ownership, RLS, server authorization, private-document access, signed URLs, rate limits, and audit hooks.

### Tests

Add complete Project and Unit tests, including inventory-concurrency tests.

Run all required commands.

Update state and registry.

Stop after Phase 8.

Return the complete Phase Implementation Report.

---

## PHASE 8 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 8 implementation report.

Use the live browser.

### Eligibility

Test Project creation as:

* Builder
* Owner
* Broker
* Guest
* restricted Builder
* suspended Builder
* incomplete Builder profile
* unverified Builder
* plan-limit Builder

### Full Project flow

Manually type and complete:

* residential Project
* commercial Project
* industrial Project

Test:

* identity
* location
* compliance
* media
* Units
* pricing
* possession
* preview
* draft
* resume
* submit

### Compliance

Test:

* required field
* invalid number
* duplicate number
* missing document
* private document
* expired compliance
* pending verification
* Changes Required
* approved verification

### Unit management

Create multiple Units.

Test:

* valid Unit
* duplicate Unit
* invalid area
* invalid price
* negative inventory
* available above total
* concurrent inventory update
* price change
* price history
* inventory history
* pause
* resume
* delete
* restore

### Moderation

Test:

* pending review
* in review
* Changes Required
* correction
* resubmit
* reject
* reopen
* approve
* publish

### Project management

Test:

* list
* filters
* detail
* Units
* Leads entry
* media
* compliance
* activity
* edit
* re-review
* pause
* resume
* soft delete
* restore

### Public Project

Verify:

* card
* detail
* Builder link
* Units
* Unit selection
* price range
* construction status
* possession
* compliance summary
* brochure
* Save
* Direct Inquiry entry
* Share
* Report
* related Projects
* unavailable state
* metadata
* privacy

### Direct URL and RLS

Test wrong user and wrong role access to:

* Project draft
* Project edit
* Unit edit
* inventory
* price history
* private compliance document
* restore

### Responsive

Test all required widths, keyboard, focus, tables/cards, long names, gallery, sticky actions, and bottom navigation.

Check console and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 9 — REQUIREMENTS, DIRECT INQUIRY, UNIFIED LEADS, MESSAGES, AND ACTIVITY

## PHASE 9 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 8 Project and Unit implementation.

Use approved interaction, story-mapping, UX, and responsive skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement Requirements, Direct Inquiry, transactional Lead creation, unified Leads, messages, notes, Follow-Ups, activity, notification delivery, and report entry.

### Requirements

Implement for permitted Owner and Broker workflows:

* create
* draft
* structured Gujarat location
* purpose
* category
* type
* budget
* area
* configuration
* possession
* urgency
* description
* expiry
* consent
* moderation
* publish
* pause
* close
* renew
* soft delete
* restore
* response
* resulting Lead

### Requirement feed and response

Implement eligible Broker Requirement discovery.

Response must allow:

* selecting relevant owned Property or approved context
* message
* submission
* real response record
* Lead creation or association
* activity
* notification

### Direct Inquiry

Implement from:

* Property card
* Property detail
* Project card
* Project detail
* selected Unit
* saved item
* eligible public-profile context
* related content

### Contextual authentication

Guest flow:

```text
Direct Inquiry
→ Contextual Authentication
→ Login or Register
→ Return to Same Entity
→ Reopen Inquiry
→ User Reviews
→ User Explicitly Submits
```

Never auto-submit.

### Inquiry form

Show:

* target entity
* authenticated identity
* verified mobile
* registered email
* editable message
* contact-sharing consent
* Send Inquiry

Keep the form short.

### Inquiry transaction

Transactionally:

1. authenticate sender
2. validate account state
3. validate source
4. validate public eligibility
5. resolve recipient
6. validate message
7. validate consent
8. rate limit
9. validate idempotency
10. create inquiry
11. create or associate Lead
12. create initial message/event
13. create activity
14. create notification outbox
15. return safe success

### Duplicate handling

When a recent open Lead exists:

* explain existing inquiry
* allow opening existing Lead
* allow intentional follow-up message
* prevent accidental duplicate Lead

### Unified Leads

Implement one Leads workspace per role.

Support:

* list
* search
* filters
* sort
* pagination
* status
* priority
* unread
* source type
* Property
* Project
* Unit
* Requirement
* Follow-Up due
* date range
* list-detail-return

### Lead detail

Implement:

* contact
* source
* status
* priority
* next Follow-Up
* message thread
* private notes
* activity timeline
* report
* related entity links

### Messages

Implement:

* server persistence
* sending
* sent
* failed
* retry
* read state
* unread count
* sanitization
* rate limiting
* cursor pagination
* optional attachment Setup Required
* soft delete where policy permits

### Notes

Implement:

* Lead-owner private notes
* internal Staff notes
* visibility
* edit history
* permission enforcement

### Follow-Ups

Implement:

* schedule
* due
* overdue
* complete
* cancel
* next Follow-Up
* activity
* scheduled reminder outbox
* provider-aware email
* in-app reminder

### Activity

Implement real append-only events.

### Notifications

Implement exact destinations for:

* new inquiry
* new message
* Follow-Up due
* Lead status
* Requirement response
* report update

### Reports

Implement report entry for:

* Lead
* message
* Property
* Project
* Unit
* Requirement
* public profile
* promotion

Create real Admin queue records.

### Lead statuses

Implement:

* New
* Open
* In Progress
* Follow-Up
* Qualified
* Closed
* Archived
* reopen where allowed

### Security

Implement:

* participant RLS
* owner scope
* wrong-ID protection
* rate limits
* spam controls
* private contact protection
* message privacy
* note privacy
* export foundation
* security events

### Responsive UX

Mobile:

* Lead cards
* full-screen Lead detail
* keyboard-aware composer
* segmented sections

Tablet:

* split view where useful

Desktop:

* persistent list/detail

### Tests

Add complete tests for:

* Requirement lifecycle
* Direct Inquiry
* idempotency
* duplicate detection
* Lead access
* messages
* read states
* notes
* Follow-Ups
* activity
* notifications
* reports
* RLS

Run all required commands.

Update state and registry.

Stop after Phase 9.

Return the complete Phase Implementation Report.

---

## PHASE 9 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 9 implementation report.

Use the live browser.

### Requirement verification

Test:

* Owner Requirement creation
* Broker Requirement creation
* Guest
* Builder
* draft
* location
* budget
* moderation
* active
* response
* Lead creation
* pause
* close
* expiry
* renew
* delete
* restore

### Direct Inquiry verification

Test from:

* Property card
* Property detail
* Project card
* Project detail
* Unit
* saved Property
* saved Project
* related content

Test:

* Guest contextual login
* Guest contextual registration
* return to exact entity
* no auto-submit
* explicit submit
* consent
* edited message
* missing consent
* invalid message
* duplicate tap
* slow network
* existing open Lead
* rate limit
* source unavailable
* recipient unavailable
* success
* failure
* refresh

### Lead verification by role

Test:

* Owner Leads
* Broker Leads
* Builder Leads

Verify:

* correct scope
* wrong-user exclusion
* search
* filters
* sort
* pagination
* Property filter
* Project filter
* Unit filter
* Requirement filter
* unread
* Follow-Up due
* list-detail-return

### Lead detail

Verify:

* contact
* source entity
* status
* priority
* message
* note
* Follow-Up
* activity
* report
* source links
* Back
* browser Back
* refresh

### Messages

Test:

* send
* receive
* read
* unread count
* failure
* retry
* duplicate retry protection
* long message
* unsafe content
* pagination
* mobile keyboard
* composer overlap

### Notes

Test:

* private owner note
* internal note access restriction
* edit
* delete where supported
* wrong participant
* wrong Staff permission

### Follow-Ups

Test:

* future
* due
* overdue
* complete
* cancel
* next Follow-Up
* in-app reminder
* email provider Setup Required or delivery state

### Notifications and reports

Verify exact destinations and Admin queue creation.

### RLS and security

Test guessed Lead IDs, message IDs, note IDs, and Requirement IDs.

### Responsive

Test all required widths.

Check console and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 10 — OWNER APPLICATION AND DASHBOARD

## PHASE 10 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 9 Leads implementation.

Use approved UX, interaction, and responsive skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the complete Owner application with a simplified, real-data dashboard and deep navigation.

### Owner shell

Implement:

* main public host Owner application behavior
* Owner route protection
* dashboard header
* mobile and tablet bottom navigation
* desktop navigation
* notification access
* profile access
* billing access
* correct active state
* focused-task adaptation

### Owner bottom navigation

Exact order:

1. Dashboard
2. Properties
3. Leads
4. Post
5. Profile

### Owner dashboard

Implement real sections in this priority:

1. critical account or billing alert
2. page heading
3. Post Property
4. key metrics
5. Follow-Ups due
6. Property status
7. recent Leads
8. moderation updates
9. recent activity
10. usage and billing
11. support or safety guidance

### Owner metrics

Implement exact real definitions for:

* Active Properties
* Properties Under Review
* Changes Required alert
* New Leads
* Follow-Ups Due
* Plan Usage

Every metric must open a real filtered destination.

### Owner Properties

Integrate:

* list
* search
* filters
* sort
* creation
* detail
* public preview
* moderation
* Leads
* activity
* edit
* pause
* resume
* delete
* restore

### Owner Leads

Integrate the Phase 9 unified Leads workspace.

### Owner Requirements

Implement role-appropriate:

* list
* create
* draft
* moderation
* responses
* Leads
* lifecycle

### Owner Post action

Implement accessible action selection for:

* Post Property
* Post Requirement

When only one action is available, route directly.

### Owner profile

Implement:

* personal profile
* public profile
* verification
* notifications
* billing and usage
* security
* sessions
* privacy
* support
* legal
* logout

### Owner billing entry

Show real:

* current plan
* usage
* renewal/trial
* billing issue
* invoices
* exact destination

### Empty states

Implement meaningful first-use Owner states without displaying a page full of zero-value decorative metrics.

### Deep graph

Implement and verify routes for:

```text
Owner Dashboard
→ Properties
→ Property
→ Property Leads
→ Lead
→ Messages
→ Activity
```

```text
Owner Dashboard
→ Requirements
→ Requirement
→ Response
→ Lead
```

```text
Owner Dashboard
→ Billing
→ Subscription
→ Payment
→ Invoice
```

### Query architecture

Create optimized Owner dashboard service.

Avoid N+1 queries.

Implement safe user-scoped caching and invalidation.

### Tests

Add Owner dashboard, navigation, metric, route, query, permission, and responsive tests.

Run all required commands.

Update state and registry.

Stop after Phase 10.

Return the complete Phase Implementation Report.

---

## PHASE 10 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 10 implementation report.

Use the live browser as controlled Owner accounts.

### Test Owner states

* first-time Owner
* Owner with draft Property
* Owner with active Property
* Owner with Property under review
* Owner with Changes Required
* Owner with rejected Property
* Owner with new Leads
* Owner with Follow-Ups
* Owner with no Leads
* Owner at plan limit
* Owner with billing issue
* restricted Owner
* suspended Owner

### Dashboard

Verify:

* alert priority
* Post Property
* metrics
* metric accuracy
* metric destination
* Follow-Ups
* Property status
* recent Leads
* moderation
* activity
* usage
* billing

Create controlled database changes and confirm metrics update.

### Navigation

Test exact bottom-navigation order and destinations.

Test:

* mobile
* tablet
* desktop
* active state
* badge
* deep route
* focused task
* safe area
* keyboard
* logout

### Deep drill-down

Manually follow:

```text
Dashboard
→ Active Properties
→ Property
→ Leads
→ Lead
→ Messages
→ Source Property
→ Back
```

and:

```text
Dashboard
→ Requirements
→ Requirement
→ Response
→ Lead
```

and:

```text
Billing Alert
→ Subscription
→ Payment
→ Invoice
```

### State preservation

Apply filters, sort, pagination, and scroll.

Open detail and return.

Test browser Back and refresh.

### Responsive

Test all required widths.

Check:

* text wrapping
* no overlap
* bottom navigation
* keyboard
* tables/cards
* sticky actions

### Security

Test wrong Owner IDs and wrong-role routes.

Check console and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 11 — BROKER APPLICATION AND DASHBOARD

## PHASE 11 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 10 Owner application.

Use approved UX, interaction, and responsive skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the complete Broker application on the configured Broker host.

### Broker shell

Implement:

* Broker host validation
* wrong-role redirect
* safe intended-route preservation
* Broker dashboard header
* mobile and tablet bottom navigation
* desktop navigation
* notifications
* profile
* billing
* focused-task behavior

### Broker bottom navigation

Exact order:

1. Dashboard
2. Listings
3. Leads
4. Requirements
5. Profile

### Broker dashboard

Priority:

1. account/billing alert
2. Post Property
3. key metrics
4. Follow-Ups due
5. recent Listings
6. recent Leads
7. Requirement activity
8. moderation updates
9. recent activity
10. usage and billing

### Broker metrics

Implement exact real definitions for:

* Active Listings
* Listings Under Review
* Changes Required alert
* New Leads
* Follow-Ups Due
* Active Requirements
* Plan Usage

Every metric must open a filtered destination.

### Listings

Integrate complete Property management under Broker scope.

Use `Listings` in Broker UI while preserving the same Property domain model.

### Leads

Integrate unified Leads.

Preserve:

* listing source
* Requirement source
* messages
* notes
* Follow-Ups
* activity

### Requirements

Implement:

* Available Requirements
* My Requirements
* Responses

Support:

* search
* filters
* city
* status
* expiry
* response
* selecting relevant owned Property
* Lead creation
* source drill-down

### Broker primary actions

Provide:

* Post Property
* Post Requirement

### Broker business profile

Implement:

* personal profile
* business profile
* public profile
* logo
* description
* service cities
* verification
* notifications
* billing
* security
* sessions
* privacy
* support
* legal
* logout

### Deep graph

Implement:

```text
Broker Dashboard
→ Listings
→ Property
→ Property Leads
→ Lead
→ Messages
→ Notes
→ Follow-Ups
→ Activity
```

```text
Broker Dashboard
→ Requirements
→ Requirement
→ Response
→ Lead
→ Related Property
```

```text
Broker Dashboard
→ Billing
→ Subscription
→ Payment
→ Invoice
```

### Query architecture

Create optimized Broker dashboard and Requirement-feed services.

Use pagination, indexes, and user scope.

### Empty and blocked states

Implement:

* first-use Broker
* no Listings
* no Leads
* no Requirements
* no eligible responses
* plan limit
* restricted
* provider Setup Required
* billing issue

### Tests

Add host, dashboard, metric, Listings, Requirements, Lead, permission, query, and navigation tests.

Run all required commands.

Update state and registry.

Stop after Phase 11.

Return the complete Phase Implementation Report.

---

## PHASE 11 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 11 implementation report.

Use the live browser as controlled Broker accounts.

### Host behavior

Test:

* Broker host
* main public host
* Builder host
* internal host
* safe redirect
* wrong-role redirect
* intended route
* refresh
* logout

### Broker states

Test:

* first-time Broker
* Broker with active Listings
* pending Listings
* Changes Required
* rejected Listing
* new Leads
* Follow-Ups
* active Requirements
* expiring Requirement
* no Requirements
* plan limit
* billing issue
* restricted
* suspended

### Dashboard metrics

Verify real counts and filtered destinations.

Mutate underlying records and verify invalidation.

### Listings

Test complete Broker Property management and Property-specific Leads.

### Requirements

Test:

* Available
* My Requirements
* Responses
* filters
* city
* open Requirement
* respond
* select owned Property
* send message
* create Lead
* open Lead
* return to Requirement
* expiry
* renewal

### Navigation

Test exact bottom-navigation order, desktop navigation, active states, badges, and focused-task behavior.

### Deep graph

Follow every required Broker graph.

### State preservation

Test filters, sort, page, scroll, browser Back, refresh, and direct URLs.

### Responsive and accessibility

Test all required widths, keyboard, focus, text wrapping, mobile sheets, tablet navigation, and desktop navigation.

### Security

Test wrong Broker, wrong owner, wrong Requirement response, wrong Lead, and wrong host.

Check console and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 12 — BUILDER APPLICATION, DASHBOARD, UNITS, AND PROMOTIONS

## PHASE 12 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 11 Broker application.

Use approved UX, responsive, interaction, and motion skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement the complete Builder application on the configured Builder host, including dashboard, Projects, Units, Leads, promotions, billing, and profile.

### Builder shell

Implement:

* Builder host validation
* wrong-role redirect
* intended-route preservation
* Builder dashboard header
* mobile and tablet bottom navigation
* desktop navigation
* notifications
* profile
* billing
* focused-task behavior

### Builder bottom navigation

Exact order:

1. Dashboard
2. Projects
3. Leads
4. Promotions
5. Profile

Units remain inside Projects.

### Builder dashboard

Priority:

1. critical account/compliance/provider/billing alert
2. Create Project
3. key metrics
4. Follow-Ups due
5. Project status
6. inventory attention
7. recent Leads
8. promotion status
9. moderation updates
10. activity
11. usage and billing

### Builder metrics

Implement exact definitions for:

* Active Projects
* Projects Under Review
* Changes Required alert
* Available Units
* New Leads
* Active Promotions
* Follow-Ups Due
* Plan Usage

Show only the most important metrics prominently.

Every metric must open a real destination.

### Projects and Units

Integrate Phase 8 management.

Maintain:

```text
Projects
→ Project
→ Units
→ Unit
```

### Inventory attention

Show real actionable items:

* zero availability
* missing price
* paused Unit
* missing Unit data
* inventory conflict
* recent inventory change

Every item opens the exact Project and Unit.

### Leads

Integrate Project and Unit source filters.

### Builder promotions

Implement complete Builder-side promotion workflow:

* eligibility
* destination selection
* target city
* creative
* title
* short description
* schedule
* preview
* plan allowance or separate billing state
* draft
* submit
* pending review
* Changes Required
* approved
* scheduled
* active
* pause
* resume
* expired
* archive
* resubmit
* history
* real performance when implemented

Do not activate without:

* eligible destination
* moderation
* billing where required
* valid schedule

### Promotion carousel relation

Ensure active promotions flow into the homepage delivery service.

### Builder profile

Implement:

* account profile
* Builder business profile
* public profile
* logo
* cover
* description
* registered office
* service cities
* verification
* compliance
* notifications
* billing
* security
* sessions
* privacy
* support
* legal
* logout

### Deep graph

Implement:

```text
Builder Dashboard
→ Projects
→ Project
→ Units
→ Unit
→ Unit Leads
→ Lead
→ Messages
```

```text
Builder Dashboard
→ Projects
→ Project
→ Project Leads
→ Lead
→ Unit
```

```text
Builder Dashboard
→ Promotions
→ Promotion
→ Project
→ Billing
→ Performance
```

### Query architecture

Create optimized Builder dashboard and promotion services.

### Tests

Add dashboard, promotion, host, navigation, inventory, Lead, query, billing-state, and permission tests.

Run all required commands.

Update state and registry.

Stop after Phase 12.

Return the complete Phase Implementation Report.

---

## PHASE 12 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 12 implementation report.

Use the live browser as controlled Builder accounts.

### Host behavior

Test Builder host, wrong role, intended routes, refresh, and logout.

### Builder states

Test:

* first-time Builder
* active Projects
* pending Project
* Changes Required
* rejected Project
* available Units
* zero-availability Unit
* missing-price Unit
* new Leads
* Follow-Ups
* no promotion
* promotion draft
* promotion billing required
* promotion pending review
* promotion active
* promotion expired
* plan limit
* billing issue
* restricted
* suspended

### Dashboard metrics

Verify each real count and destination.

Mutate source data and confirm updates.

### Projects and Units

Test all navigation and parent Project context.

### Leads

Test Project and Unit filters, source links, message flow, and return state.

### Promotions

Manually complete:

* select eligible Project
* select city
* upload creative
* enter title and description
* schedule
* preview
* save draft
* submit
* billing state
* moderation state
* Changes Required
* resubmit
* approved
* active
* pause
* resume
* expire
* archive

Verify homepage delivery:

* city match
* fallback
* no promotion
* valid destination
* reduced motion
* swipe
* keyboard
* real click and impression events

### Navigation

Verify exact bottom-navigation order, desktop navigation, badge behavior, and focused tasks.

### Deep graph

Follow every required Builder graph.

### Responsive

Test all required widths, long Project names, Unit cards/tables, promotion forms, keyboard, safe area, and sticky controls.

### Security

Test wrong Builder access to Projects, Units, promotions, Leads, and billing.

Check console and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 13 — INTERNAL APPLICATION, STAFF PERMISSIONS, AND DEEP ADMIN GRAPH

## PHASE 13 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 12 Builder application.

Use approved Admin, UX, interaction, responsive, and specification skills.

Recommended:

* Shadcn Admin Skill
* UI/UX Pro Max Skill
* UI/UX Agent Skill System
* Interaction Design Skills
* Responsive Craft
* GitHub Spec Kit

Apply the Mandatory Execution Contract.

### Primary objective

Implement the internal application shell, Staff permission model, Admin dashboard, global search, deeply connected User graph, and deeply connected marketplace-entity management.

Operational moderation, reports, support, bugs, and recovery actions are completed in Phase 14.

### Internal shell

Implement on the internal host:

* internal authentication guard
* Staff account status
* permission-aware navigation
* responsive mobile navigation
* tablet navigation
* desktop grouped sidebar
* global search
* internal notifications
* system alerts
* profile menu
* environment indicator outside production
* no public indexing

### Staff and permissions

Implement:

* Staff list
* Staff detail
* Staff roles
* permissions
* role-permission assignment
* user-specific grant
* user-specific denial
* active state
* expiry where supported
* permission history
* field-level data shaping
* route-level enforcement
* service-level enforcement

Do not load sensitive fields and hide them only in the UI.

### Internal dashboard

Implement real operational metrics for:

* active users
* restricted users
* suspended users
* Properties pending review
* Projects pending review
* open reports
* open support
* Critical bugs
* failed payments
* reconciliation issues
* provider failures
* failed jobs
* recovery cases

Only show metrics allowed by Staff permissions.

Every metric opens a filtered destination.

### Internal global search

Implement permission-filtered search across:

* users
* Properties
* Projects
* Units
* Requirements
* Leads
* payments
* invoices
* reports
* support
* bugs
* audit references where permitted

### User list

Implement:

* search
* role
* account status
* verification
* subscription
* city
* registration date
* last activity
* report state
* pagination
* sorting
* mobile cards
* desktop table

### User detail graph

Implement permission-aware sections:

1. Overview
2. Profile
3. Role and Account
4. Verification
5. Properties
6. Projects
7. Units
8. Requirements
9. Direct Inquiries
10. Leads
11. Messages and Activity
12. Reports
13. Support
14. Bugs
15. Billing
16. Subscriptions
17. Payments
18. Invoices
19. Notifications
20. Sessions and Devices
21. Security Events
22. Moderation History
23. Audit
24. Recovery History

Load summary first and related sections lazily.

### Entity management

Implement read and permitted safe management foundations for:

* Properties
* Projects
* Units
* Requirements
* Leads
* promotions

Each detail must link to:

* owner/user
* source
* child entities
* Leads
* reports
* billing relation
* moderation relation
* audit relation
* recovery relation

### Contextual editing foundation

Implement:

* inline edit for small safe fields
* modal for short focused changes
* drawer for contextual review
* dedicated page for complex changes
* difference viewer
* reason field
* impact preview
* confirmation levels

Sensitive actions are completed in Phase 14.

### Internal responsive UX

Mobile:

* prioritized navigation
* structured cards
* full-screen details
* filter sheets

Tablet:

* compact rail or bottom navigation
* split view

Desktop:

* grouped sidebar
* tables
* drawers
* deep details

### Performance

Use:

* server filtering
* pagination
* selected fields
* lazy sections
* indexed queries
* safe internal caching
* no full graph loaded at once

### Security

Implement:

* internal route protection
* permission checks
* field masking
* direct URL protection
* no public-role access
* no raw provider secret
* no raw session token
* audit hooks

### Tests

Add:

* permission resolution
* explicit denial
* route permission
* field masking
* dashboard metrics
* global search filtering
* User graph
* entity graph
* wrong-permission access
* mobile navigation
* internal-host isolation

Run all required commands.

Update state and registry.

Stop after Phase 13.

Return the complete Phase Implementation Report.

---

## PHASE 13 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 13 implementation report.

Use the live browser with controlled internal accounts.

### Internal roles

Test:

* Super Admin
* broad Admin
* view-only Staff
* moderation Staff
* billing Staff
* support Staff
* Staff without module access
* suspended Staff
* public Owner
* public Broker
* public Builder
* Guest

### Internal host

Verify:

* internal login
* public-role denial
* no public indexing
* wrong host
* session expiry
* logout
* direct URL
* no unauthorized content flash

### Navigation

Test:

* mobile
* tablet
* desktop
* permission-aware modules
* active state
* keyboard
* long Staff name
* no duplicate navigation

### Permissions

Verify:

* role grant
* user grant
* user denial
* view-only
* edit
* sensitive action unavailable
* field masking
* direct API
* direct route
* permission refresh after change

### Dashboard

Verify real metrics and destinations.

Ensure each Staff account sees only permitted metrics.

### Global search

Search every approved entity type.

Confirm hidden modules and fields do not appear.

### User graph

Open a controlled user and navigate every permitted section.

Verify:

* counts
* pagination
* lazy loading
* exact links
* Back
* browser Back
* refresh
* mobile behavior
* private-data masking

### Entity graph

Follow:

```text
User
→ Property
→ Leads
→ Lead
→ Messages
→ User
```

```text
User
→ Project
→ Units
→ Unit
→ Leads
```

```text
User
→ Billing
→ Subscription
→ Payment
→ Invoice
```

### Contextual editing foundation

Test inline, modal, drawer, dedicated-page patterns.

Verify reason and difference viewer where implemented.

### Responsive

Test all required widths and table/card adaptation.

Check keyboard, focus, text wrapping, sticky headers, console, and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 14 — MODERATION, REPORTS, SUPPORT, BUGS, AUDIT, AND RECOVERY

## PHASE 14 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 13 internal application.

Use approved Admin, interaction, specification, and UX skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement complete internal operational workflows for moderation, reports, support, bugs, security events, audit, soft deletion, restoration, and mistake recovery.

### Moderation

Implement for:

* Properties
* Projects
* Units where configured
* Requirements
* promotions
* public profiles
* verification
* locations
* CMS
* SEO

Support:

* queue
* assignment
* reassignment
* priority
* age
* reviewer
* public preview
* changed fields
* before/after
* media
* compliance
* reports
* billing context
* approve
* Changes Required
* reject
* reopen
* escalate
* history
* audit
* notification

### Decision safety

Every sensitive moderation decision must enforce:

* exact permission
* current state
* reason
* confirmation
* before/after
* transaction
* audit
* notification
* cache invalidation
* recovery path

### Reports

Implement:

* queue
* severity
* category
* entity
* reporter
* reported user
* evidence
* related reports
* moderation relation
* security relation
* assignment
* dismiss
* request clarification
* warn
* request changes
* pause entity
* restrict account
* suspend account
* escalate
* resolve
* reopen
* audit
* notification

### Support

Implement:

* ticket list
* categories
* priority
* assignment
* user-visible replies
* internal notes
* related entity
* status
* escalation
* resolve
* close
* reopen
* notification
* provider-aware attachment state
* audit

### Bugs

Implement production-grade bug management:

* create
* triage
* severity
* priority
* module
* route
* role
* reproduction
* expected
* actual
* related user/entity
* owner
* status
* root cause
* fix summary
* changed files
* tests
* verification
* release relation
* close
* reopen

### Security events

Implement:

* queue
* category
* severity
* actor/subject
* session
* affected entity
* related report
* related audit
* monitor
* revoke session
* restrict
* suspend
* require verification
* escalate
* resolve
* reopen

### Audit

Implement append-only audit viewer with:

* actor
* action
* entity
* date
* module
* reason
* before/after
* request ID
* related moderation
* related recovery
* permission-based redaction
* pagination
* export foundation

### Recovery

Implement:

* recovery center
* recoverable entity list
* original action
* current state
* dependency review
* restored-state preview
* reason
* approve/reject
* apply
* failure
* audit
* notification

Support recovery for:

* rejected entity reopening
* paused entity correction
* suspended user restoration
* soft-deleted Property
* soft-deleted Project
* soft-deleted Unit
* soft-deleted Requirement
* Lead archive restoration
* promotion restoration
* CMS restoration
* location restoration
* mistaken role change where safely reversible
* billing consistency recovery foundation

### Soft deletion

Ensure normal deletion remains recoverable.

Do not use permanent deletion as a standard quick action.

### Permanent deletion

Implement only as a highly restricted operation with:

* highest permission
* step-up authentication
* dependency review
* legal-retention review
* backup review
* typed confirmation
* audit
* post-action verification

### Bulk actions

Implement:

* selection
* eligible/ineligible preview
* reason
* confirmation
* per-record validation
* partial-failure result
* audit

### Exports

Implement private, permissioned, expiring, audited export jobs with safe field selection and retention.

### Jobs and notifications

Connect operational workflows to:

* in-app notifications
* email outbox
* job status
* retries
* failure states

### Tests

Add complete tests for every sensitive workflow, permission, audit, recovery, and partial failure.

Run all required commands.

Update state and registry.

Stop after Phase 14.

Return the complete Phase Implementation Report.

---

## PHASE 14 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 14 implementation report.

Use the live browser with controlled internal accounts and controlled test entities.

### Moderation

Test:

* unassigned
* assign
* reassign
* start review
* approve
* Changes Required
* submitter correction
* resubmit
* reject
* reopen
* escalate
* stale decision
* duplicate decision
* before/after
* mobile comparison
* audit
* notification
* public visibility

Test across:

* Property
* Project
* Requirement
* promotion
* public profile
* location request
* CMS

### Reports

Test:

* submit from public/role context
* Admin queue
* detail
* entity link
* user link
* evidence
* related report
* dismiss
* warn
* request changes
* pause
* restrict
* suspend
* escalate
* resolve
* reopen
* notification
* audit

### Support

Test:

* create ticket
* assign
* reply
* internal note
* waiting state
* resolve
* close
* reopen
* linked entity
* linked bug
* attachment Setup Required or real provider
* wrong permission

### Bugs

Test:

* create
* triage
* severity
* assign
* In Progress
* Fixed
* Verification
* Closed
* Reopened
* related route
* related entity
* changed files
* test evidence
* release relation

### Security events

Test session revocation, restriction, suspension, and recovery with correct permissions.

### Audit

Verify every sensitive action creates an immutable audit record.

Check:

* actor
* permission
* reason
* before
* after
* target
* request ID
* timestamp

### Recovery

Test:

* rejected Property reopen
* deleted Property restore
* deleted Project restore
* deleted Unit restore
* suspended user restore
* archived Lead restore
* promotion restore
* failed recovery
* dependency conflict
* original history preservation
* no automatic unsafe republication

### Bulk actions

Test mixed eligible and ineligible records.

Verify per-record result.

### Export

Test:

* permission
* filter scope
* field masking
* asynchronous processing
* expiring link
* unauthorized download
* audit
* retention

### Responsive and security

Test all required widths, keyboard, focus, tables/cards, reason dialogs, dedicated pages, direct URLs, wrong permissions, console, and network.

Fix and retest.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 15 — BILLING, PAYMENTS, PROVIDERS, JOBS, AND RECONCILIATION

## PHASE 15 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 14 operational workflows.

Use approved architecture and specification skills.

Apply the Mandatory Execution Contract.

### Primary objective

Implement production-grade plans, subscriptions, usage, checkout, payment verification, invoices, refunds, provider adapters, background jobs, schedulers, reconciliation, and provider Admin controls.

### Plans

Implement:

* role-specific plans
* plan versions
* price
* currency
* interval
* trial
* Property limits
* Project limits
* Unit limits
* promotion allowance
* storage allowance
* feature access
* active/public state
* display order
* effective date
* grandfathering support

### Pricing page integration

Use real active plans.

Show:

* role
* price
* interval
* included features
* limits
* taxes
* trial where real
* CTA
* legal links

### Subscriptions

Implement:

* trialing
* active
* past due
* paused
* cancelled
* expired
* incomplete
* current period
* renewal
* cancellation
* history
* events
* plan change
* usage integration

### Usage

Implement server-authoritative usage for:

* Properties
* Projects
* Units
* promotions
* storage
* exports
* approved limited features

Prefer recalculation from records over manual counters.

### Payment orders

Implement server-created orders for:

* plan purchase
* renewal where supported
* promotion payment

The server must load authoritative price.

### Checkout

Implement provider abstraction and Setup Required/test/live states.

Client checkout completion is not authoritative.

### Webhook

Implement:

* HTTPS route
* raw-body verification where required
* signature verification
* event-ID idempotency
* replay prevention
* order validation
* amount validation
* currency validation
* environment validation
* transactional payment update
* subscription/promotion activation
* invoice event
* audit
* monitoring

### Reconciliation

Implement queue for:

* captured but inactive subscription
* pending internal state
* duplicate webhook
* amount mismatch
* signature failure
* invoice missing
* refund mismatch
* provider timeout

### Refunds

Implement provider-confirmed refund workflow with:

* permission
* eligibility
* amount
* reason
* plan/promotion impact
* provider request
* verified result
* audit
* notification

### Invoices

Implement:

* invoice number
* billing profile
* line items
* tax
* total
* currency
* issue date
* payment relation
* private document
* idempotent issuance
* credit-note/correction support
* legal retention

### Provider adapters

Implement abstractions and Admin-safe status for:

* Supabase
* SMS OTP
* email
* payment
* media storage
* image processing
* CDN
* background jobs
* scheduler
* analytics
* error monitoring
* uptime monitoring
* backup

### Provider registry

For each provider, implement:

* safe configuration
* secret reference
* environment
* current state
* test mode
* live mode
* last success
* last failure
* health
* quota
* cost warning
* run test
* rollback reference
* owner
* safe diagnostics

Never return raw secrets.

### OTP provider completion

Complete real adapter integration where credentials exist.

Maintain development mode only outside production.

### Email provider completion

Implement:

* sender
* domain state
* templates
* outbox
* retries
* failure
* delivery status
* production links

### Media provider completion

Implement:

* public media
* private documents
* signed URLs
* transformations
* CDN
* deletion
* retention
* quota

### Background jobs

Implement job framework for:

* email
* notification retries
* image processing
* promotion activation
* promotion expiry
* Requirement expiry
* Follow-Up reminders
* reconciliation
* invoice delivery
* exports
* stale-draft cleanup
* retention cleanup

### Scheduler

Implement:

* authenticated invocation
* lock
* bounded batches
* run record
* retry
* missed-run detection
* Admin health

### Provider Admin

Implement:

* status list
* safe diagnostics
* run test
* environment
* reason-required configuration changes
* step-up auth
* audit
* rollback
* production development-mode prevention

### Payment Admin

Implement complete:

* plan management
* subscription management
* usage
* payment
* event history
* reconciliation
* refund
* invoice
* promotion billing
* audit

### Tests

Add provider adapter, webhook, payment, invoice, refund, reconciliation, job, scheduler, and Setup Required tests.

Run all required commands.

Update state and registry with exact provider status.

Stop after Phase 15.

Return the complete Phase Implementation Report.

---

## PHASE 15 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 15 implementation report.

Use the live browser, provider sandboxes, and controlled environments.

Do not mark a provider `LIVE_READY` from configuration alone.

### Plans and pricing

Test:

* Owner plan
* Broker plan
* Builder plan
* active plan
* inactive plan
* trial
* limit
* taxes
* pricing CTA
* plan version
* affected-subscriber preview

### Subscription

Test:

* trialing
* active
* past due
* paused
* cancelled
* expired
* incomplete
* plan change
* usage limit
* manual grant with permission and audit

### Checkout

Test:

* authoritative price
* successful sandbox checkout
* failed checkout
* cancelled checkout
* client-success manipulation
* wrong amount
* wrong currency
* wrong order
* delayed webhook
* duplicate webhook
* invalid signature
* replay

### Reconciliation

Create controlled inconsistencies and verify:

* queue
* evidence
* resolution
* audit
* subscription consistency
* invoice consistency

### Refunds

Test:

* eligible refund
* ineligible refund
* partial refund where supported
* provider failure
* duplicate request
* permission
* step-up auth
* audit
* notification

### Invoices

Test:

* issue
* duplicate prevention
* private access
* wrong-user access
* correction
* credit note
* document
* download
* audit

### Providers

For each provider category, verify:

* Setup Required
* Configured Not Tested
* Test Mode
* Active
* Live Ready only where actually tested
* Failed
* Degraded
* Disabled

Run safe tests for configured providers.

Confirm no raw secret appears in:

* page
* HTML
* network
* console
* logs
* database-readable Admin response

### OTP

Test real development/staging delivery.

Test production readiness only with approved production access.

### Email

Test real delivery, templates, links, failure, retry, and mobile rendering.

### Media

Test public upload, private upload, signed URL, expiry, processing, deletion, and unauthorized access.

### Jobs and scheduler

Test:

* run
* lock
* overlapping invocation
* retry
* failed job
* dead-letter
* missed schedule
* Admin status
* manual retry
* idempotency

### Responsive and security

Test internal provider/billing screens at all required widths.

Check console, network, webhooks, audit, and RLS.

Fix and retest.

Update state and registry with honest provider statuses.

Return the complete Phase Verification Report.

---

# PHASE 16 — SECURITY, PRIVACY, ACCESSIBILITY, PERFORMANCE, SCALE, AND RESILIENCE

## PHASE 16 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the verified Phase 15 providers and billing implementation.

Use approved architecture, specification, responsive, and UX audit skills.

Apply the Mandatory Execution Contract.

### Primary objective

Perform and implement the complete security, privacy, accessibility, performance, scalability, observability, and resilience hardening of the entire platform.

This phase must change code and infrastructure configuration where defects exist. Do not return only an audit report.

### Authentication security

Harden:

* mobile-number enumeration resistance
* OTP brute-force prevention
* OTP replay prevention
* resend abuse
* rate limits
* session fixation
* session expiry
* logout
* logout all devices
* cookie settings
* cross-subdomain behavior
* role change
* suspended account
* internal session timeout
* step-up authentication

### Authorization

Audit and fix:

* route guards
* service authorization
* RLS
* direct-object access
* wrong-role access
* wrong-user access
* field-level access
* Staff permission
* service-role usage
* cache isolation
* public-safe views

### Input and output security

Audit and fix:

* XSS
* injection
* CSRF
* open redirect
* unsafe URL
* HTML sanitization
* malformed JSON
* long values
* Unicode edge cases
* control characters
* invalid enum
* money validation
* date validation
* location hierarchy
* output encoding

### Upload security

Harden:

* content-type validation
* MIME verification
* malicious files
* private/public separation
* signed URLs
* filename safety
* metadata stripping
* callback replay
* deletion
* retention
* quota
* scan integration where configured

### Payment security

Audit:

* server price
* webhook signature
* replay
* amount
* currency
* environment
* order ownership
* duplicate events
* refunds
* invoice access
* secret exposure

### Secrets

Implement or verify:

* server-only secrets
* `.env.example`
* secret scanning
* no secret in Git
* no secret in client bundle
* no secret in logs
* rotation runbooks

### Security headers

Implement appropriate:

* Content Security Policy
* HSTS where approved
* X-Content-Type-Options
* Referrer Policy
* Permissions Policy
* frame protection
* secure cookies
* CORS
* cache headers

### Privacy

Implement:

* public/private data classification
* consent
* cookie preference
* data export request
* correction request
* closure request
* deletion request
* legal retention
* anonymization where appropriate
* analytics minimization
* log redaction
* private cache prevention

### Accessibility audit and fixes

Audit all major routes for:

* semantics
* heading order
* keyboard
* focus
* labels
* errors
* dialogs
* tables
* contrast
* zoom
* reduced motion
* touch targets
* dynamic announcements

Implement fixes.

### Performance

Measure and optimize:

* homepage
* search
* Property detail
* Project detail
* auth
* Owner dashboard
* Broker dashboard
* Builder dashboard
* Leads
* Admin dashboard
* User detail
* moderation
* payment webhook
* jobs

Optimize:

* queries
* indexes
* selected columns
* N+1 issues
* payloads
* bundles
* images
* caching
* lazy loading
* background work
* connection use

### Bundle analysis

Remove:

* unused dependencies
* duplicate packages
* Admin code from public bundles
* unnecessary client components
* heavy libraries where alternatives exist

### Scalability

Implement scalable patterns:

* stateless application
* connection pooling
* distributed rate limits
* idempotency
* outbox
* jobs
* queues
* bounded pagination
* provider throttling
* cache invalidation
* graceful degradation

Do not claim a concurrency level without load-test evidence.

### Load-test preparation

Create safe load-test scenarios and scripts for:

* homepage
* search
* Property detail
* Project detail
* dashboard
* Lead list
* Direct Inquiry
* message send
* Admin list
* payment webhook
* jobs

Do not run destructive production load tests.

### Reliability

Implement graceful degradation for:

* database timeout
* OTP failure
* email failure
* payment failure
* media failure
* queue delay
* scheduler failure
* cache failure
* monitoring failure

### Observability

Implement:

* request IDs
* structured logs
* redaction
* error monitoring
* performance traces
* provider health
* job health
* database health
* uptime checks
* alert severity
* ownership
* runbook references

### Dependency security

Run and fix:

* dependency audit
* secret scan
* dead-code review
* package cleanup
* critical vulnerability mitigation

### Tests

Add comprehensive security, privacy, accessibility, performance, failure, and resilience tests.

Run all required commands.

Update state and registry.

Stop after Phase 16.

Return the complete Phase Implementation Report.

---

## PHASE 16 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 16 implementation report.

Use controlled local/staging environments.

### Security testing

Manually and programmatically test:

* OTP enumeration
* OTP brute force
* OTP replay
* resend abuse
* session fixation
* session expiry
* logout
* revoked session
* wrong host
* wrong role
* wrong user
* guessed IDs
* modified payloads
* direct APIs
* Staff permission
* field masking
* service-role leakage
* public-view leakage
* cache leakage

### Input testing

Test:

* scripts
* HTML
* SQL-like strings
* malformed JSON
* very long strings
* Unicode edge cases
* invalid enum
* negative money
* invalid dates
* malicious URLs
* invalid location hierarchy

### Upload testing

Test:

* executable renamed as image
* invalid MIME
* malformed image
* malicious filename
* unauthorized private file
* expired signed URL
* callback replay
* failed processing
* deletion

### Payment testing

Test manipulation and replay scenarios.

### Headers and cookies

Inspect production-like responses for:

* CSP
* HSTS where enabled
* secure cookies
* SameSite
* CORS
* cache control
* frame policy
* referrer policy

### Privacy

Inspect public HTML, metadata, network, cache, logs, and analytics.

Confirm no private data leaks.

Test:

* consent preference
* export request
* correction request
* closure request
* deletion request
* retention state

### Accessibility

Use keyboard-only navigation across all major routes.

Test:

* focus
* dialogs
* tables
* forms
* errors
* zoom
* reduced motion
* touch targets
* dynamic announcements

### Performance measurement

Measure major routes and record:

* TTFB
* FCP
* LCP
* INP
* CLS
* server latency
* query latency
* payload
* bundle
* image size
* cache hit
* error rate

### Query plans

Inspect high-impact query plans.

### Load tests

Run safe staged load tests.

Record:

* concurrency
* requests per second
* p50
* p95
* p99
* errors
* database connections
* CPU
* memory
* queue depth
* provider throttling
* cost estimate

Do not claim unsupported scale.

### Failure simulation

Simulate:

* database timeout
* OTP outage
* email outage
* payment outage
* media outage
* queue delay
* scheduler miss
* cache failure
* deployment rollback scenario

Verify graceful degradation and honest state.

### Monitoring

Confirm alerts, ownership, and runbooks.

Fix and retest every Critical or High issue.

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 17 — COMPLETE SAAS UX AUDIT AND GLOBAL REPAIR

## PHASE 17 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and every verified implementation report from Phases -1 through 16.

Invoke all approved UX, interaction, responsive, motion, story-mapping, and Admin skills relevant to the audit.

Recommended:

* UI/UX Agent Skill System
* Interaction Design Skills
* UI/UX Pro Max Skill
* Responsive Craft
* Storymap Skill
* LottieFiles Motion Design Skill
* Shadcn Admin Skill

Apply the Mandatory Execution Contract.

### Primary objective

Perform the complete end-to-end SaaS UX audit and repair the entire application.

This is not a report-only phase.

Audit every route, screen, component, state, role, relationship, and device.

Implement fixes immediately.

### Create or update complete screen inventory

For every route, record:

* route
* host
* role
* purpose
* shell
* header
* navigation
* primary action
* secondary actions
* data source
* loading
* empty
* error
* success
* permission
* provider state
* parent
* child
* Back
* Close
* Cancel
* browser Back
* refresh
* mobile
* tablet
* desktop
* implementation status
* verification status

### Audit all public experiences

Audit and repair:

* homepage
* homepage city selector
* public navigation
* search entry
* suggestions
* full search
* filters
* sort
* pagination
* Property cards
* Project cards
* city pages
* SEO pages
* public profiles
* promotion carousel
* Blog
* CMS
* legal
* cookie consent
* public footer
* public error pages

### Audit authentication

Audit and repair:

* direct login
* contextual login
* registration
* OTP
* role selection
* onboarding
* profile completion
* session expiry
* logout
* recovery
* wrong-role redirect
* host routing

### Audit Property workflow

Audit every step:

* eligibility
* draft
* save
* resume
* validation
* location
* pricing
* media
* preview
* submit
* moderation
* correction
* publication
* edit
* pause
* resume
* delete
* restore
* public detail
* Leads entry

### Audit Project and Unit workflow

Audit:

* Project creation
* compliance
* media
* Units
* inventory
* price
* preview
* moderation
* publication
* edit
* pause
* restore
* public detail
* Unit context
* Leads entry

### Audit Direct Inquiry and Leads

Audit:

* every entry point
* auth return
* consent
* explicit submission
* duplicate handling
* success
* failure
* Lead creation
* list
* filters
* detail
* source link
* messages
* notes
* Follow-Ups
* activity
* report
* notification
* mobile composer
* list-detail-return

### Audit Owner application

Audit:

* dashboard
* metrics
* Properties
* Leads
* Requirements
* Post
* Profile
* billing
* notifications
* bottom navigation
* desktop navigation
* deep graph

### Audit Broker application

Audit:

* dashboard
* metrics
* Listings
* Leads
* Requirements
* responses
* business profile
* billing
* navigation
* deep graph

### Audit Builder application

Audit:

* dashboard
* metrics
* Projects
* Units
* inventory
* Leads
* promotions
* profile
* billing
* navigation
* deep graph

### Audit internal Admin

Audit:

* shell
* navigation
* dashboard
* global search
* Staff
* permissions
* Users
* Properties
* Projects
* Units
* Requirements
* Leads
* promotions
* moderation
* reports
* support
* bugs
* billing
* providers
* locations
* CMS
* SEO
* security
* audit
* recovery
* feature flags
* settings
* maintenance

### Deep-clickability audit

Every displayed actionable relationship must work.

Audit:

* metric
* count
* card
* row
* title
* status
* notification
* invoice
* payment
* user
* Property
* Project
* Unit
* Lead
* Requirement
* report
* support ticket
* bug
* audit event
* recovery case

Fix every dead affordance.

### Navigation audit

For every major flow, verify and repair:

* entry
* Back
* Close
* Cancel
* browser Back
* refresh
* direct URL
* deep link
* list-detail-return
* filter preservation
* sort preservation
* pagination preservation
* scroll restoration
* selected tab
* selected entity
* success destination
* failure recovery

### Container audit

Inspect every use of:

* page
* modal
* drawer
* bottom sheet
* popover
* inline expansion

Move complex tasks out of inappropriate small containers.

### State audit

Every feature must have applicable:

* loading
* skeleton
* first-use empty
* filtered empty
* no-results
* validation error
* network error
* server error
* permission denied
* restricted
* suspended
* Setup Required
* provider failed
* success
* retry
* recovery

### Alignment audit

Inspect and globally repair:

* page gutters
* headings
* card padding
* table columns
* form labels
* button alignment
* icon alignment
* status alignment
* sticky actions
* modal spacing
* drawer spacing
* bottom navigation
* Admin density

### Text audit

Test long:

* user names
* Broker names
* Builder names
* Property titles
* Project names
* Unit configurations
* Gujarat locations
* statuses
* alerts
* messages
* notes
* moderation reasons
* invoice descriptions
* buttons
* filters

Fix clipping, overflow, and unsafe truncation.

### Responsive audit

Manually and programmatically audit:

* 320
* 360
* 390
* 430
* 768
* 1024
* 1366
* 1440
* wide

Audit:

* mobile keyboard
* safe area
* bottom navigation
* sticky headers
* sticky actions
* tables
* cards
* drawers
* sheets
* modals
* split views
* orientation-sensitive layout where relevant

### Accessibility audit

Repair:

* semantics
* headings
* labels
* errors
* focus
* keyboard
* screen-reader names
* contrast
* zoom
* reduced motion
* touch targets
* live announcements
* table semantics
* dialog behavior

### Content audit

Standardize final terminology.

Remove:

* vague labels
* internal technical errors
* inconsistent names
* duplicate actions
* unclear statuses
* unsupported claims

### Real-data audit

Remove or isolate:

* fake metrics
* fake notifications
* fake badges
* fake Leads
* fake payments
* fake provider states
* fake charts
* fake promotion performance
* fake activity

### Performance UX audit

Repair:

* unnecessary page blocking
* oversized bundles
* repeated requests
* layout shift
* slow images
* full-page spinners
* excessive client rendering
* unbounded lists

### Console and network audit

Visit every major route.

Fix:

* runtime errors
* hydration errors
* failed requests
* unauthorized requests
* duplicate requests
* image failures
* CSP failures
* provider failures
* stale data
* cache errors

### End-to-end journey audit

Complete and repair:

1. Guest homepage → Search → Property → Back to results
2. Guest Property → Direct Inquiry → Register → Return → Submit
3. Returning user → Login → intended destination
4. Owner → Dashboard → Property → Leads → Lead → Activity
5. Broker → Dashboard → Listing → Requirement → Lead
6. Builder → Dashboard → Project → Unit → Lead
7. notification → exact entity
8. Property draft → submit → Changes Required → correction → publish
9. Project → Units → submit → moderation → publish
10. Admin User → Property → Lead → Report → Audit
11. rejected entity → reopen → approve
12. delete → recovery → restore
13. billing → checkout → verified payment → invoice
14. session expiry → reauthenticate → continue
15. provider unavailable → honest Setup Required
16. support → Admin response → resolution
17. bug → fix → verification → close

### Bug management

Create or update real bug records for discovered defects.

Fix all Critical and High defects.

Fix Medium defects that affect production quality.

Rerun regression tests.

### Required commands

Run:

* lint
* typecheck
* tests
* build
* accessibility checks
* bundle analysis
* security checks
* responsive checks

### Required updates

Update:

* `PROJECT_STATE.md`
* `FEATURE_REGISTRY.md`

Do not mark production-ready yet.

### End condition

Stop after the complete audit, repairs, retesting, and documentation.

Return the complete Phase Implementation Report.

---

## PHASE 17 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the complete Phase 17 audit implementation report.

This is the final pre-production UX verification.

Use the live browser.

Do not use visual inspection alone.

### Server

* detect or start server
* record actual URL and port
* keep running after verification when safe

### Route coverage

Visit every route in the updated screen inventory.

For every route:

* load
* refresh
* direct URL
* correct role
* wrong role
* wrong user
* Back
* browser Back
* Close
* Cancel
* loading
* empty
* error
* success
* permission
* Setup Required
* mobile
* tablet
* desktop
* keyboard
* focus
* console
* network

### Role journeys

Complete every public and internal journey listed in the implementation prompt.

Manually type all forms.

Manually click all actions.

### Deep-click audit

Click every:

* metric
* card
* row
* title
* count
* status
* notification
* relation
* invoice
* payment
* audit reference
* recovery reference

Confirm real destinations.

### State preservation

For every list:

* apply search
* apply filters
* sort
* change page/cursor
* scroll
* open detail
* open child
* return
* refresh
* browser Back

Confirm state preservation.

### Container audit

Confirm complex workflows are not trapped in small modals.

### Responsive

Test every required width for all high-priority routes and every shared layout category.

### Accessibility

Perform keyboard-only navigation across all major journeys.

Verify focus, labels, errors, dialogs, tables, zoom, reduced motion, and contrast.

### Text stress

Use long controlled data.

Verify no clipping or overlap.

### Real-data verification

Confirm no fake metric, notification, badge, payment, provider status, Lead, message, chart, or promotion performance remains.

### Console and network

Keep console and network inspection active throughout.

### Bug closure

For every Phase 17 bug:

* reproduce
* verify fix
* run regression
* update status
* retain evidence

### Result rules

`PASS` requires:

* no Critical defects
* no High defects
* no broken core journey
* no private-data exposure
* no dead action
* no core mobile issue
* no unverified fake state
* no serious accessibility blocker
* no critical console/network failure

Update state and registry.

Return the complete Phase Verification Report.

---

# PHASE 18 — PRODUCTION DEPLOYMENT, BACKUP, ROLLBACK, LAUNCH, AND SIGN-OFF

## PHASE 18 IMPLEMENTATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and every verified phase report.

Use approved architecture, specification, and operational skills.

Apply the Mandatory Execution Contract.

### Primary objective

Prepare, deploy, verify, and operationalize the complete production platform.

Do not declare production readiness when required external configuration is unavailable.

Mark unavailable external items `SETUP_REQUIRED` or `BLOCKED` with exact evidence.

### Release preparation

Create a release record containing:

* release ID
* approved commit
* included phases
* migrations
* provider changes
* environment changes
* feature flags
* known limitations
* rollback
* owner

Freeze unrelated scope.

### CI/CD

Implement or finalize pipeline for:

1. checkout
2. dependency install
3. environment validation
4. formatting check
5. lint
6. typecheck
7. unit tests
8. integration tests
9. migration validation
10. build
11. dependency audit
12. secret scan
13. bundle review
14. artifact/deployment
15. result reporting

Production deployment must stop on required failure.

### Staging

Create or verify production-like staging:

* application runtime
* Supabase staging
* RLS
* role hosts
* internal host
* provider sandboxes
* storage
* jobs
* scheduler
* monitoring
* cache
* security headers
* synthetic data

Run complete staging sign-off.

### Production environment

Validate:

* public application URL
* Broker application URL
* Builder application URL
* internal application URL
* Supabase production project
* OTP credentials
* email credentials
* payment credentials
* webhook secrets
* media credentials
* CDN
* jobs
* scheduler
* analytics
* monitoring
* uptime
* backups
* feature flags
* maintenance state

No development mode may remain active.

### Domains and DNS

Configure and verify:

* public host
* Broker host
* Builder host
* internal host
* canonical host
* redirects
* provider callback URLs
* email-link URLs
* payment webhook URLs
* sitemap host
* robots behavior

### SSL and transport

Verify:

* certificate
* chain
* host coverage
* renewal
* HTTP to HTTPS
* mixed content
* secure cookies
* webhook HTTPS
* security headers

### Production database

Before migration:

* verify current version
* verify backup
* verify migration order
* verify lock risk
* verify forward-fix/rollback
* verify maintenance decision

Apply migrations safely.

Verify:

* schema
* constraints
* indexes
* RLS
* critical queries
* generated types
* application compatibility

### Backups

Implement and verify:

* database backup
* migration history backup
* critical configuration backup
* private media durability/backup strategy
* invoices
* audit
* recovery records
* deployment configuration

Define:

* schedule
* retention
* encryption
* access
* alert
* RPO
* RTO
* owner

### Restore test

Restore production-like backup into an isolated environment.

Verify:

* schema
* row counts
* users
* Properties
* Projects
* Units
* Leads
* messages
* payments
* invoices
* audit
* RLS
* media references

Record duration and defects.

### Rollback

Implement and rehearse:

* application rollback
* feature-flag disable
* provider disable
* safe database rollback or forward fix
* maintenance mode
* traffic recovery

Confirm stable deployment compatibility with current schema.

### Monitoring

Configure:

* application errors
* server errors
* database health
* query latency
* OTP
* email
* payment
* webhook
* media
* queue
* scheduler
* jobs
* backups
* uptime
* security events
* deployment markers

Every Critical and High alert requires:

* owner
* backup owner
* channel
* runbook
* escalation
* closure criteria

### Runbooks

Create or finalize runbooks for:

* deployment failure
* migration failure
* database outage
* OTP outage
* email outage
* payment outage
* webhook failure
* media outage
* queue backlog
* scheduler failure
* cache failure
* private-data exposure
* suspicious Admin activity
* backup failure
* restore
* rollback
* maintenance mode
* DNS/SSL failure

### Maintenance mode

Verify safe operation.

Preserve critical callbacks such as payment webhooks where required.

### Production data cleanup

Remove or disable:

* public demo listings
* public demo Projects
* fake Leads
* fake messages
* fake notifications
* fake payments
* fake promotion performance
* development test accounts not required
* development OTP bypass
* staging webhook references
* staging provider keys

Retain required audit evidence safely.

### Production deployment

Deploy in safe order:

1. additive migrations
2. backward-compatible application
3. data backfill
4. feature activation
5. verification
6. later cleanup of obsolete schema only in a separate safe release

### Production smoke tests

Use controlled production accounts and low-risk operations.

Test:

* homepage
* city selection
* search
* Property detail
* Project detail
* login
* live OTP
* Owner dashboard
* Broker dashboard
* Builder dashboard
* Direct Inquiry
* Lead creation
* message
* Admin login
* moderation
* payment
* invoice
* media
* email
* logout
* monitoring

Clean up test records.

### Post-launch monitoring

Monitor for the agreed launch window.

Watch:

* errors
* performance
* OTP
* email
* payment
* webhook
* database
* queue
* jobs
* media
* support
* security
* backups

### Final readiness classification

Evaluate separately:

* product functionality
* authentication
* database
* RLS
* security
* providers
* billing
* media
* performance
* accessibility
* operations
* monitoring
* backup
* recovery
* deployment
* support

Do not collapse missing categories into an overall false PASS.

### Final documentation

Update:

* `PROJECT_STATE.md`
* `FEATURE_REGISTRY.md`
* provider registry
* skill registry
* release record
* runbooks
* environment documentation
* deployment status
* known limitations

### End condition

Stop after production implementation, deployment actions possible with current access, and final readiness handoff.

Return the complete Phase Implementation Report.

---

## PHASE 18 MANUAL VERIFICATION PROMPT

**PROMPT — COPY INTO CLAUDE**

Read all authority files and the Phase 18 implementation report.

This is the final production sign-off verification.

Use real staging and production systems according to granted access.

Do not claim completion for inaccessible external systems.

### Release verification

Confirm:

* release ID
* commit
* scope
* migrations
* providers
* feature flags
* rollback
* owner

### CI verification

Confirm every required pipeline step passes.

### Staging verification

Repeat integrated critical journeys in staging.

### Production environment

Verify every environment variable category without exposing secrets.

Confirm:

* production mode
* correct Supabase project
* correct domains
* correct providers
* correct webhooks
* correct storage
* correct monitoring
* correct scheduler
* no development bypass

### DNS and SSL

Verify every host:

* resolves
* uses HTTPS
* has valid certificate
* redirects correctly
* has no mixed content
* uses correct cookies
* enforces canonical behavior

### Production migrations

Confirm:

* applied version
* constraints
* indexes
* RLS
* critical queries
* no schema drift
* no failed partial migration

### Backup and restore

Verify:

* latest valid backup
* alert state
* isolated restore
* data integrity
* RLS
* restore duration
* RPO/RTO result

A backup without restore evidence does not pass.

### Rollback

Verify the rollback rehearsal.

Confirm the stable application version works with current schema.

### Provider live verification

For every provider category, record exact status.

Verify live where access allows:

* OTP
* email
* payment
* media
* CDN
* jobs
* scheduler
* analytics
* error monitoring
* uptime
* backup

Do not mark `LIVE_READY` without a live successful test.

### Production smoke tests

Manually complete:

1. homepage
2. city selection
3. search
4. Property
5. Project
6. live login and OTP
7. Owner dashboard
8. Broker dashboard
9. Builder dashboard
10. Direct Inquiry
11. Lead
12. message
13. Admin login
14. moderation
15. payment
16. invoice
17. media upload
18. email
19. logout
20. monitoring event

### Security

Verify:

* public/private separation
* wrong-role denial
* wrong-user denial
* internal-host isolation
* secure cookies
* headers
* provider secrets
* webhook verification
* RLS
* audit

### Responsive and accessibility production smoke

Test representative production routes at:

* 360
* 390
* 768
* 1024
* 1440

Confirm full Phase 17 responsive evidence remains valid.

### Monitoring

Verify:

* application events
* errors
* provider health
* jobs
* backups
* uptime
* security alerts
* owner routing

### Test-data cleanup

Confirm production smoke records are cleaned, archived, or made non-public.

### Launch blockers

Do not sign off when any of these remain:

* Critical defect
* High security defect
* RLS failure
* private-data leak
* live OTP unavailable
* payment inconsistency
* invalid SSL
* migration failure
* no valid backup
* no restore test
* no rollback
* internal unauthorized access
* provider false success
* development bypass
* critical monitoring unavailable

### Final result

Use one exact final result:

* `PRODUCTION_READY`
* `PRODUCTION_READY_WITH_DOCUMENTED_NON_CRITICAL_LIMITATIONS`
* `NOT_PRODUCTION_READY`
* `BLOCKED_BY_EXTERNAL_SETUP`

Update `PROJECT_STATE.md` and `FEATURE_REGISTRY.md`.

Return the complete Phase Verification Report and final readiness classification.

---

# 8. Final Phase Gate Rules

## 8.1 Phase sequencing

The sequence is mandatory.

A later phase must not be treated as complete when an earlier required verification is not `PASS`.

## 8.2 Verification separation

Implementation and manual verification remain separate prompts.

The implementation prompt must not claim manual verification.

The verification prompt must inspect the real implementation.

## 8.3 Defect handling

When verification finds a defect:

1. record it
2. assign severity
3. identify the shared cause
4. fix it
5. rerun automated tests
6. rerun the browser flow
7. rerun regression areas
8. update the bug record
9. update project state
10. update the feature registry

## 8.4 Critical and High defects

Critical and High defects block phase `PASS`.

Examples include:

* private-data exposure
* authentication bypass
* RLS failure
* payment inconsistency
* false success
* broken core mobile action
* lost form data
* broken browser Back in a core flow
* unauthorized Admin access
* irreversible deletion without required protection
* production development bypass

## 8.5 Honest blockers

When external setup is unavailable:

* complete all possible safe implementation
* show `SETUP_REQUIRED`
* list exact missing configuration
* list exact files already completed
* list exact tests already passed
* do not simulate live success

---

# 9. Final Documentation Completion Rule

After Phase 18 verification:

* `/PROJECT_STATE.md` must represent the actual final state
* `/FEATURE_REGISTRY.md` must contain exact implementation and verification status for every registered feature
* every provider must have an explicit status
* every GitHub skill must have an explicit status
* every migration must be recorded
* every Critical or High bug must be closed or clearly block production
* production readiness must be stated honestly
* no final feature may remain falsely marked complete

---

# 10. Final System Completion Definition

The complete My Gujarat Property project is complete only when:

* all 13 authority files exist
* Phases -1 through 18 have been implemented
* every phase has a separate verification result
* final public roles are enforced
* public marketplace works
* Property lifecycle works
* Project and Unit lifecycle works
* Direct Inquiry works
* unified Leads works
* Owner application works
* Broker application works
* Builder application works
* Admin and Super Admin work
* moderation works
* reports work
* support works
* bugs work
* audit works
* recovery works
* billing works
* providers are honest and verified
* security passes
* privacy passes
* accessibility passes
* responsive verification passes
* performance is measured
* scale claims are evidence-based
* staging passes
* production deployment passes
* backups exist
* restore is tested
* rollback is tested
* monitoring is active
* production smoke testing passes
* project state and feature registry are current

---

