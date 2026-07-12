# `FEATURE_REGISTRY.md`

# My Gujarat Property — Canonical Feature Registry, Ownership, Implementation, Verification, Provider, and Release Tracking

This file is the canonical feature inventory for **My Gujarat Property**.

Every approved product feature must appear in this registry.

Claude must read this file at the beginning of every implementation and verification session and update every feature touched during the session.

This registry prevents features, workflows, permissions, providers, routes, states, tests, and recovery requirements from being silently missed.

Detailed product behavior belongs in the relevant file inside `docs/`.

Current project progress belongs in `PROJECT_STATE.md`.

This registry records the implementation and verification state of every approved feature.

---

## 1. Registry Objectives

This file must answer:

* What features exist?
* Which roles can use each feature?
* Where does each feature appear?
* Which backend service owns the feature?
* Which data tables support it?
* Which RLS and permission rules protect it?
* Which provider dependencies exist?
* Which UI and responsive states are required?
* Is the feature implemented?
* Is the feature verified?
* Which phase owns implementation?
* Which phase owns verification?
* Are any bugs or blockers active?
* Does the feature support recovery?
* Does the feature have a real drill-down destination?
* Can an Admin or Super Admin inspect and manage it?
* Is it ready for production?

No approved feature may remain undocumented.

No removed, experimental, or unapproved feature should appear as an active product feature.

---

## 2. Registry Authority

When a registry entry conflicts with another source, use this authority order:

1. User’s latest explicit instruction
2. `docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`
3. `CLAUDE.md`
4. Relevant detailed documentation
5. Current implementation or verification prompt
6. This registry’s current recorded state
7. Existing source code

If an entry is stale:

* update the entry immediately
* record the correction in `PROJECT_STATE.md`
* do not implement from stale information
* preserve the latest approved authority

---

## 3. Status Values

### 3.1 Implementation status

Use only:

| Status           | Meaning                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------- |
| `NOT_STARTED`    | No approved implementation exists                                                           |
| `IN_PROGRESS`    | Implementation is actively being developed                                                  |
| `DONE`           | Implementation exists but full verification is pending                                      |
| `PASS`           | Implementation and required verification passed                                             |
| `PARTIAL`        | Some implementation exists, but required scope is incomplete                                |
| `FAIL`           | Implementation failed verification                                                          |
| `BLOCKED`        | A dependency or unresolved decision prevents completion                                     |
| `SETUP_REQUIRED` | External credentials, infrastructure, provider, domain, hosting, or user action is required |
| `ROLLED_BACK`    | The implementation was reverted                                                             |

### 3.2 Verification status

Use only:

| Status           | Meaning                                               |
| ---------------- | ----------------------------------------------------- |
| `NOT_RUN`        | Verification has not been performed                   |
| `IN_PROGRESS`    | Verification is currently running                     |
| `PASS`           | All applicable acceptance checks passed               |
| `PARTIAL`        | Some checks passed, but complete verification remains |
| `FAIL`           | One or more required checks failed                    |
| `BLOCKED`        | Verification cannot continue because of a dependency  |
| `SETUP_REQUIRED` | Real external configuration is required               |
| `NOT_APPLICABLE` | The verification category does not apply              |

### 3.3 Provider status

Use only:

| Status                  | Meaning                                                                   |
| ----------------------- | ------------------------------------------------------------------------- |
| `NOT_STARTED`           | Provider work has not started                                             |
| `SETUP_REQUIRED`        | Provider account, credential, configuration, or infrastructure is missing |
| `CONFIGURED_NOT_TESTED` | Configuration exists but has not been verified                            |
| `TEST_MODE_ONLY`        | Provider works only in development or sandbox mode                        |
| `ACTIVE`                | Provider is operating in the current approved environment                 |
| `LIVE_READY`            | Production credentials and live verification passed                       |
| `BLOCKED`               | Provider cannot currently be used                                         |
| `FAILED`                | Provider setup or verification failed                                     |
| `DEGRADED`              | Provider works partially or unreliably                                    |
| `DISABLED_BY_FLAG`      | Feature is intentionally disabled                                         |
| `ROLLED_BACK`           | Provider change was reverted                                              |

---

## 4. Feature Entry Requirements

Every feature entry must eventually contain:

| Field                  | Requirement                                            |
| ---------------------- | ------------------------------------------------------ |
| Feature ID             | Stable unique identifier                               |
| Feature name           | Clear product-facing name                              |
| Module                 | Product area                                           |
| Roles                  | Authorized roles                                       |
| Public/private         | Data exposure level                                    |
| Primary route/context  | Main UI destination                                    |
| Related routes         | Detail, edit, admin, or workflow routes                |
| Data authority         | Server/database/provider source                        |
| Tables or views        | Exact database objects                                 |
| Service or action      | Exact server implementation                            |
| RLS requirement        | Required database protection                           |
| Permission requirement | Required role/staff permission                         |
| Provider dependency    | External service dependency                            |
| UI states              | Loading, empty, error, success, disabled, and recovery |
| Mobile behavior        | Mobile interaction requirement                         |
| Admin visibility       | Required Admin drill-down                              |
| Recovery               | Restore, retry, reopen, undo, or rollback              |
| Implementation phase   | Phase responsible for code                             |
| Verification phase     | Matching verification phase                            |
| Implementation status  | Current implementation state                           |
| Verification status    | Current verification state                             |
| Bugs/blockers          | Active issue reference                                 |
| Production state       | Production release status                              |

Exact code paths, migration names, table names, and routes must be added when discovered or created.

“Unknown” must not remain after the relevant repository audit or implementation phase.

---

## 5. Registry Update Procedure

After every implementation phase, Claude must:

1. Identify every feature touched.
2. Update implementation status.
3. Add exact source file paths.
4. Add exact routes.
5. Add exact services or server actions.
6. Add exact migrations.
7. Add exact database tables or views.
8. Add exact RLS policies or permission rules.
9. Add provider status.
10. Add bugs or blockers.
11. Record whether Admin visibility exists.
12. Record whether mobile behavior exists.
13. Record recovery behavior.
14. Record the matching verification phase.
15. Update `PROJECT_STATE.md`.

After every verification phase, Claude must:

1. Update verification status.
2. Record automated checks.
3. Record live-browser routes.
4. Record tested widths.
5. Record role and permission tests.
6. Record RLS results.
7. Record provider results.
8. Record state-coverage results.
9. Record bugs found and fixes applied.
10. Record production-readiness state.
11. Update `PROJECT_STATE.md`.

---

## 6. Global Acceptance Requirements

Every feature must satisfy all applicable requirements.

### 6.1 Real behavior

* no fake data
* no fake counts
* no dead buttons
* no placeholder destinations
* no decorative clickable elements
* no local-device business-data authority
* no fake provider success
* no fake moderation result
* no fake payment result
* no fake analytics

### 6.2 User-flow behavior

* intentional entry point
* intentional primary action
* intentional secondary action
* correct Back behavior
* correct Close behavior
* correct Cancel behavior
* correct browser Back behavior
* clear success destination
* clear failure recovery
* preserved useful context
* no dead ends

### 6.3 UI states

* initial loading
* skeleton loading
* loaded state
* first-use empty state
* filtered empty state
* no-result state
* permission-denied state
* authentication-required state
* server-error state
* network-error state
* action-success state
* action-failure state
* processing state
* disabled state
* recovery state

### 6.4 Responsive quality

Verify where relevant at:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide displays

Every feature must avoid:

* horizontal overflow
* clipped text
* broken wrapping
* misalignment
* covered content
* sticky-element overlap
* fixed-position overlap
* keyboard obstruction
* inaccessible controls
* tiny touch targets
* broken mobile tables
* broken mobile dialogs

### 6.5 Security

* server-side authorization
* database RLS where required
* validation
* rate limiting where required
* audit logging where required
* protected secrets
* safe error messages
* direct URL protection
* wrong-user protection
* wrong-role protection
* safe provider boundary
* safe storage access

---

# 7. Governance and Documentation Registry

| ID        | Feature                                         | Scope                  | Primary authority                                                   | Implementation | Verification | Acceptance requirement                                                            |
| --------- | ----------------------------------------------- | ---------------------- | ------------------------------------------------------------------- | -------------- | ------------ | --------------------------------------------------------------------------------- |
| `GOV-001` | Master Claude operating rules                   | Entire project         | `CLAUDE.md`                                                         | `PASS`         | `PASS`       | Every Claude session reads and follows the file                                   |
| `GOV-002` | Current project-state continuity                | Entire project         | `PROJECT_STATE.md`                                                  | `PASS`         | `PASS`       | Current phase, blockers, provider state, skills, and server state remain accurate |
| `GOV-003` | Canonical feature registry                      | Entire project         | `FEATURE_REGISTRY.md`                                               | `DONE`         | `NOT_RUN`    | Every approved feature is tracked without duplication                             |
| `GOV-004` | Master product authority                        | Entire project         | `docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`                     | `DONE`         | `NOT_RUN`    | Final scope, roles, entities, business rules, and terminology defined             |
| `GOV-005` | Architecture authority                          | Entire project         | `docs/02_ARCHITECTURE_DATABASE_RLS_SECURITY_AND_SCALE.md`           | `DONE`         | `NOT_RUN`    | Data, service, RLS, security, scale, and infrastructure rules defined             |
| `GOV-006` | Authentication authority                        | Auth and profiles      | `docs/03_AUTH_ONBOARDING_ROLES_PROFILE_AND_SESSIONS.md`             | `DONE`         | `NOT_RUN`    | Complete auth, validation, redirect, session, and profile flows defined           |
| `GOV-007` | UX and interaction authority                    | Entire UI              | `docs/04_APPLE_INSPIRED_MOBILE_FIRST_UI_UX_AND_INTERACTION.md`      | `DONE`         | `NOT_RUN`    | Complete SaaS UX audit rules integrated                                           |
| `GOV-008` | Public marketplace authority                    | Public experience      | `docs/05_PUBLIC_HOME_SEARCH_LOCATION_SEO_AND_MARKETPLACE.md`        | `DONE`         | `NOT_RUN`    | Homepage, search, SEO, profiles, and discovery fully defined                      |
| `GOV-009` | Listing and Leads authority                     | Core marketplace       | `docs/06_PROPERTY_PROJECT_UNITS_DIRECT_INQUIRY_AND_LEADS.md`        | `DONE`         | `NOT_RUN`    | Property, project, unit, inquiry, lead, and activity flows fully defined          |
| `GOV-010` | Dashboard authority                             | Public roles           | `docs/07_ROLE_DASHBOARDS_NAVIGATION_AND_DEEP_DRILLDOWN.md`          | `DONE`         | `NOT_RUN`    | Role dashboards and deep drill-down fully defined                                 |
| `GOV-011` | Administration authority                        | Internal roles         | `docs/08_ADMIN_SUPER_ADMIN_MODERATION_BILLING_BUGS_AND_RECOVERY.md` | `DONE`         | `NOT_RUN`    | Full management, moderation, billing, audit, and recovery system defined          |
| `GOV-012` | Skills, providers, QA, and operations authority | Tooling and production | `docs/09_SKILLS_PROVIDERS_QA_DEPLOYMENT_AND_OPERATIONS.md`          | `DONE`         | `NOT_RUN`    | External tooling, providers, deployment, QA, and operations fully defined         |
| `GOV-013` | Phase implementation and verification system    | Entire build           | `prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md`  | `DONE`         | `NOT_RUN`    | Every phase has a complete implementation prompt and matching verification prompt |

---

# 8. Role and Permission Registry

| ID         | Feature                        | Roles                                            | Data authority                    | Admin visibility                    | Implementation | Verification | Acceptance requirement                                                                          |
| ---------- | ------------------------------ | ------------------------------------------------ | --------------------------------- | ----------------------------------- | -------------- | ------------ | ----------------------------------------------------------------------------------------------- |
| `ROLE-001` | Owner public role              | Owner                                            | Supabase profile and role records | Full permission-controlled view     | `PARTIAL` | `NOT_RUN`    | Owner permissions enforced in UI, service, route, and RLS layers                                |
| `ROLE-002` | Broker public role             | Broker                                           | Supabase profile and role records | Full permission-controlled view     | `PARTIAL` | `NOT_RUN`    | Broker permissions enforced without subordinate role dependency                                 |
| `ROLE-003` | Builder/Developer public role  | Builder/Developer                                | Supabase profile and role records | Full permission-controlled view     | `PARTIAL` | `NOT_RUN`    | Builder permissions cover projects, units, leads, and approved promotion                        |
| `ROLE-004` | Super Admin role               | Super Admin                                      | Internal staff records            | Full system access with audit       | `NOT_STARTED`  | `NOT_RUN`    | Highest internal access, protected login, all sensitive actions audited                         |
| `ROLE-005` | Admin role                     | Admin                                            | Internal staff records            | Permission-scoped                   | `NOT_STARTED`  | `NOT_RUN`    | Daily operations restricted by explicit permissions                                             |
| `ROLE-006` | Staff permission model         | Staff                                            | Permission and assignment records | Super Admin managed                 | `NOT_STARTED`  | `NOT_RUN`    | Read, write, approve, reject, restore, export, billing, and sensitive-data permissions enforced |
| `ROLE-007` | Role-aware routes              | All roles                                        | Server authorization              | Route access visible in Admin audit | `NOT_STARTED`  | `NOT_RUN`    | Direct URL access matches role permissions                                                      |
| `ROLE-008` | Role-aware navigation          | Owner, Broker, Builder/Developer, internal roles | Server session and role           | Navigation configuration visible    | `NOT_STARTED`  | `NOT_RUN`    | Only valid role destinations appear                                                             |
| `ROLE-009` | Role-aware action availability | All roles                                        | Server authorization              | Admin can inspect decisions         | `NOT_STARTED`  | `NOT_RUN`    | Disabled or unavailable actions explain why when useful                                         |
| `ROLE-010` | Internal permission audit      | Super Admin                                      | Permission and audit records      | Full                                | `NOT_STARTED`  | `NOT_RUN`    | Permission changes record actor, reason, before/after values, and timestamp                     |

---

# 9. Authentication, Registration, Session, and Profile Registry

| ID         | Feature                          | Roles                        | Primary context                         | Data/provider                                             | Implementation | Verification | Acceptance requirement                                                                  |
| ---------- | -------------------------------- | ---------------------------- | --------------------------------------- | --------------------------------------------------------- | -------------- | ------------ | --------------------------------------------------------------------------------------- |
| `AUTH-001` | Contextual authentication shell  | Guest, unauthenticated users | `/login`, protected-action auth context | Next.js routing and server session                        | `NOT_STARTED`  | `NOT_RUN`    | Homepage or originating context remains visible behind auth presentation                |
| `AUTH-002` | Mobile-number login              | Public roles                 | Login popup or mobile auth sheet        | Supabase Auth and SMS OTP provider                        | `NOT_STARTED`      | `NOT_RUN`    | Valid Indian mobile number required                                                     |
| `AUTH-003` | Account-existence detection      | Guest                        | Login flow                              | Server-side account lookup with enumeration-safe response | `NOT_STARTED`  | `NOT_RUN`    | Unregistered number receives safe Register option                                       |
| `AUTH-004` | Public registration              | Guest                        | Register popup or mobile auth sheet     | Supabase Auth and profile service                         | `NOT_STARTED`      | `NOT_RUN`    | Role, full name, email, mobile, consent, and OTP completed                              |
| `AUTH-005` | Registration role selection      | Guest                        | Register flow                           | Server-approved role list                                 | `NOT_STARTED`      | `NOT_RUN`    | Exactly Owner, Broker, Builder/Developer                                                |
| `AUTH-006` | Full-name validation             | Guest                        | Register flow                           | Server validation                                         | `NOT_STARTED`  | `NOT_RUN`    | Required, length-controlled, valid text, trimmed and normalized                         |
| `AUTH-007` | Email validation                 | Guest, authenticated users   | Register and profile                    | Server validation                                         | `NOT_STARTED`      | `NOT_RUN`    | Format, normalization, duplicate behavior, and error feedback verified                  |
| `AUTH-008` | Mobile-number validation         | Guest, authenticated users   | Login, register, profile                | Server validation                                         | `NOT_STARTED`      | `NOT_RUN`    | Format, length, country normalization, and duplicate behavior verified                  |
| `AUTH-009` | Four-digit OTP                   | Guest                        | Login and registration                  | SMS OTP provider and secure server verification           | `NOT_STARTED`  | `NOT_RUN`    | Exactly four digits, secure expiry, attempt limits, no client-only trust                |
| `AUTH-010` | OTP autofill                     | Guest                        | OTP screen                              | Browser and mobile autofill attributes                    | `NOT_STARTED`  | `NOT_RUN`    | Supported devices can autofill without breaking manual entry                            |
| `AUTH-011` | OTP resend and cooldown          | Guest                        | OTP screen                              | OTP service                                               | `NOT_STARTED`  | `NOT_RUN`    | Countdown, resend limit, rate limit, clear state                                        |
| `AUTH-012` | OTP attempt protection           | Guest                        | OTP screen                              | Server rate-limit and audit service                       | `NOT_STARTED`  | `NOT_RUN`    | Wrong attempts limited, abuse monitored, safe lockout and retry                         |
| `AUTH-013` | Auth keyboard behavior           | Guest                        | Login, register, OTP                    | UI interaction layer                                      | `NOT_STARTED`  | `NOT_RUN`    | Enter submits the correct valid step and never bypasses validation                      |
| `AUTH-014` | Auth Back, Close, and Cancel     | Guest                        | Auth modal or sheet                     | Routing and overlay state                                 | `NOT_STARTED`  | `NOT_RUN`    | Returns to exact underlying context without state corruption                            |
| `AUTH-015` | Auth loading and skeleton states | Guest                        | Login, register, OTP                    | UI state                                                  | `NOT_STARTED`  | `NOT_RUN`    | Stable skeleton, no layout jump, no duplicate submission                                |
| `AUTH-016` | Auth success redirect            | Public roles                 | Post-auth                               | Server-controlled return destination                      | `NOT_STARTED`  | `NOT_RUN`    | Returns to protected action or correct default destination                              |
| `AUTH-017` | Logged-in auth-route handling    | Authenticated users          | `/login`, registration route            | Server session guard                                      | `NOT_STARTED`  | `NOT_RUN`    | Authenticated user does not see login again                                             |
| `AUTH-018` | Session creation                 | Public and internal users    | Post-auth                               | Supabase session and secure cookies                       | `NOT_STARTED`      | `NOT_RUN`    | Server and browser session agree                                                        |
| `AUTH-019` | Session refresh                  | Authenticated users          | Entire authenticated product            | Supabase session middleware                               | `NOT_STARTED`      | `NOT_RUN`    | Refresh preserves valid state without redirect loops                                    |
| `AUTH-020` | Session expiry                   | Authenticated users          | Protected routes                        | Session service                                           | `NOT_STARTED`  | `NOT_RUN`    | Clear reauthentication path with intended destination preserved                         |
| `AUTH-021` | Logout                           | Authenticated users          | Account menu/settings                   | Server logout action                                      | `NOT_STARTED`      | `NOT_RUN`    | Session invalidated, protected data removed, safe public destination                    |
| `AUTH-022` | Owner profile                    | Owner                        | Owner profile and settings              | Profile tables and services                               | `NOT_STARTED`      | `NOT_RUN`    | Editable permitted fields, validation, audit where required                             |
| `AUTH-023` | Broker profile                   | Broker                       | Broker profile and settings             | Profile/business tables                                   | `NOT_STARTED`      | `NOT_RUN`    | Business identity and permitted public fields verified                                  |
| `AUTH-024` | Builder/Developer profile        | Builder/Developer            | Builder profile and settings            | Builder/business tables                                   | `NOT_STARTED`      | `NOT_RUN`    | Builder identity, approved public information, and verification state                   |
| `AUTH-025` | Profile completion               | Public roles                 | Onboarding and profile                  | Profile service                                           | `NOT_STARTED`  | `NOT_RUN`    | Required missing fields identified and completed without blocking unrelated safe access |
| `AUTH-026` | Account status handling          | Public roles                 | Entire product                          | Profile/account-status service                            | `NOT_STARTED`  | `NOT_RUN`    | Active, pending, suspended, restricted, and closed states behave correctly              |
| `AUTH-027` | Account recovery assistance      | Public and internal users    | Support and Admin                       | Support, audit, and identity verification                 | `NOT_STARTED`  | `NOT_RUN`    | Secure assisted recovery without unsafe identity changes                                |
| `AUTH-028` | Internal staff authentication    | Super Admin, Admin, staff    | Internal login                          | Secure internal authentication                            | `NOT_STARTED`      | `NOT_RUN`    | Separate protected access, no public registration, strict session rules                 |
| `AUTH-029` | Authentication accessibility     | All auth users               | Auth UI                                 | Semantic and focus system                                 | `NOT_STARTED`  | `NOT_RUN`    | Focus trap, labels, keyboard, errors, screen-reader status, reduced motion              |

---

# 10. Apple-Inspired Design and Global UX Registry

| ID       | Feature                               | Scope                            | Primary context               | Implementation | Verification | Acceptance requirement                                                             |
| -------- | ------------------------------------- | -------------------------------- | ----------------------------- | -------------- | ------------ | ---------------------------------------------------------------------------------- |
| `UX-001` | Original Apple-inspired design system | Entire product                   | Shared tokens and primitives  | `NOT_STARTED`  | `NOT_RUN`    | Premium, calm, minimal, original, content-focused, and appropriate for real estate |
| `UX-002` | Mobile-first layout system            | Entire product                   | 320–430px first               | `NOT_STARTED`  | `NOT_RUN`    | Mobile is intentionally designed, not compressed desktop                           |
| `UX-003` | Tablet layout system                  | Entire product                   | 768–1024px                    | `NOT_STARTED`  | `NOT_RUN`    | Tablet navigation, density, and panels are intentionally designed                  |
| `UX-004` | Desktop and wide layout system        | Entire product                   | 1366px, 1440px, wide          | `NOT_STARTED`  | `NOT_RUN`    | Uses space effectively without excessive stretching                                |
| `UX-005` | Typography system                     | Entire product                   | Shared design tokens          | `NOT_STARTED`  | `NOT_RUN`    | Readable sizes, stable wrapping, consistent hierarchy, no clipping                 |
| `UX-006` | Spacing and grid system               | Entire product                   | Shared layout primitives      | `NOT_STARTED`  | `NOT_RUN`    | Consistent alignment, predictable containers, stable responsive rhythm             |
| `UX-007` | Color and surface system              | Entire product                   | Shared tokens                 | `NOT_STARTED`  | `NOT_RUN`    | Accessible contrast, restrained brand use, clear status meaning                    |
| `UX-008` | Icon and action system                | Entire product                   | Buttons, menus, cards         | `NOT_STARTED`  | `NOT_RUN`    | Icons have accessible names and consistent meaning                                 |
| `UX-009` | Touch-target system                   | Mobile and tablet                | All actions                   | `NOT_STARTED`  | `NOT_RUN`    | Important controls meet accessible touch size                                      |
| `UX-010` | Public homepage header                | Public homepage                  | Homepage only                 | `NOT_STARTED`  | `NOT_RUN`    | Brand, city context, search entry, and account actions aligned                     |
| `UX-011` | Public search header                  | Search                           | Search results                | `NOT_STARTED`  | `NOT_RUN`    | Back, query, filter, and context without homepage city control                     |
| `UX-012` | Property/project detail header        | Public details                   | Detail routes                 | `NOT_STARTED`  | `NOT_RUN`    | Contextual Back and approved actions                                               |
| `UX-013` | Auth header                           | Authentication                   | Modal and mobile sheet        | `NOT_STARTED`  | `NOT_RUN`    | Back/Close semantics, focus, title, and context                                    |
| `UX-014` | Dashboard header                      | Public-role applications         | Dashboard routes              | `NOT_STARTED`  | `NOT_RUN`    | Role-aware title, actions, notifications, and account access                       |
| `UX-015` | Focused task header                   | Create/edit/review               | Task flows                    | `NOT_STARTED`  | `NOT_RUN`    | Progress, Back or Close, save state, and primary action                            |
| `UX-016` | Admin header                          | Internal application             | Admin routes                  | `NOT_STARTED`  | `NOT_RUN`    | Module context, global actions, permission-safe navigation                         |
| `UX-017` | Role-based bottom navigation          | Owner, Broker, Builder/Developer | Mobile and tablet app         | `NOT_STARTED`      | `NOT_RUN`    | Four or five meaningful destinations, safe-area aware                              |
| `UX-018` | Desktop application navigation        | Authenticated users              | Desktop app shell             | `NOT_STARTED`  | `NOT_RUN`    | Clear modules, active state, no public marketing-shell confusion                   |
| `UX-019` | Admin responsive navigation           | Internal roles                   | Admin shell                   | `NOT_STARTED`  | `NOT_RUN`    | Sidebar/drawer behavior works on every width                                       |
| `UX-020` | Page interaction pattern              | Entire product                   | Permanent routes              | `NOT_STARTED`  | `NOT_RUN`    | Used for shareable, complex, or deep content                                       |
| `UX-021` | Modal interaction pattern             | Entire product                   | Short focused tasks           | `NOT_STARTED`  | `NOT_RUN`    | Focus trap, Escape, Close, return context, mobile adaptation                       |
| `UX-022` | Drawer interaction pattern            | Dashboard and Admin              | Contextual detail/edit        | `NOT_STARTED`  | `NOT_RUN`    | Preserves list context and supports accessible mobile conversion                   |
| `UX-023` | Bottom-sheet pattern                  | Mobile                           | Filters and short tasks       | `NOT_STARTED`  | `NOT_RUN`    | Safe-area, keyboard, drag/close, focus, and action visibility                      |
| `UX-024` | Popover/dropdown pattern              | Entire product                   | Lightweight actions           | `NOT_STARTED`  | `NOT_RUN`    | Clear dismiss behavior and keyboard access                                         |
| `UX-025` | Inline-expansion pattern              | Lists and details                | Related sub-content           | `NOT_STARTED`  | `NOT_RUN`    | Expands only when it preserves task context                                        |
| `UX-026` | Back behavior                         | Entire product                   | Navigation                    | `NOT_STARTED`  | `NOT_RUN`    | Returns to previous meaningful state                                               |
| `UX-027` | Close behavior                        | Temporary experiences            | Modal/drawer/sheet            | `NOT_STARTED`  | `NOT_RUN`    | Dismisses without unintended data loss                                             |
| `UX-028` | Cancel behavior                       | Forms and mutations              | Task flows                    | `NOT_STARTED`  | `NOT_RUN`    | Handles unsaved state and returns correctly                                        |
| `UX-029` | Browser Back behavior                 | Entire product                   | Browser navigation            | `NOT_STARTED`  | `NOT_RUN`    | No loops, stale auth, or lost critical context                                     |
| `UX-030` | Context preservation                  | Search, lists, Admin             | Navigation state              | `NOT_STARTED`  | `NOT_RUN`    | Query, filters, sort, tab, pagination, and scroll preserved where useful           |
| `UX-031` | Loading-state system                  | Entire product                   | Data-driven screens           | `NOT_STARTED`  | `NOT_RUN`    | Stable skeletons and processing feedback                                           |
| `UX-032` | Empty-state system                    | Entire product                   | Collections and dashboards    | `NOT_STARTED`  | `NOT_RUN`    | First-use, filtered, and no-result states are distinct                             |
| `UX-033` | Error-state system                    | Entire product                   | Failures                      | `NOT_STARTED`  | `NOT_RUN`    | Clear explanation, retry, safe destination, reference where required               |
| `UX-034` | Success-feedback system               | Entire product                   | Mutations                     | `NOT_STARTED`  | `NOT_RUN`    | Visible result and correct destination                                             |
| `UX-035` | Unsaved-change protection             | Forms                            | Create/edit flows             | `NOT_STARTED`  | `NOT_RUN`    | Save, discard, and continue-editing choices                                        |
| `UX-036` | Text wrapping and clipping protection | Entire product                   | All responsive screens        | `NOT_STARTED`  | `NOT_RUN`    | No clipped, cut, overlapping, or unreadable text                                   |
| `UX-037` | Fixed/sticky-position safety          | Entire product                   | Headers, bottom bars, actions | `NOT_STARTED`  | `NOT_RUN`    | No covered content or keyboard obstruction                                         |
| `UX-038` | Accessibility system                  | Entire product                   | All interactions              | `NOT_STARTED`  | `NOT_RUN`    | Semantic controls, focus, labels, contrast, touch, reduced motion                  |
| `UX-039` | Purposeful motion system              | Entire product                   | Feedback and transitions      | `NOT_STARTED`  | `NOT_RUN`    | Subtle, fast, accessible, and performance-safe                                     |
| `UX-040` | Deep clickable product graph          | Entire product                   | Related entities              | `NOT_STARTED`  | `NOT_RUN`    | Every meaningful relationship has a real destination                               |
| `UX-041` | Complete SaaS UX audit                | Entire repository                | Final global audit phase      | `NOT_STARTED`  | `NOT_RUN`    | Every route, component, action, state, and journey inspected and fixed             |
| `UX-042` | Navigation behavior matrix            | Every major module               | Implementation planning       | `NOT_STARTED`  | `NOT_RUN`    | Entry, presentation, actions, exits, states, and mobile behavior defined           |
| `UX-043` | Dead-end prevention                   | Entire product                   | All routes and overlays       | `NOT_STARTED`  | `NOT_RUN`    | Every screen has orientation, exit, next action, and recovery                      |
| `UX-044` | True-interactivity audit              | Entire product                   | Buttons, rows, cards, menus   | `NOT_STARTED`  | `NOT_RUN`    | Every actionable-looking element works or is visually non-interactive              |
| `UX-045` | Consistent microcopy                  | Entire product                   | Labels, states, errors        | `NOT_STARTED`  | `NOT_RUN`    | Same concept uses the same understandable terminology                              |

---

# 11. Homepage, Public Shell, and Discovery Registry

| ID         | Feature                             | Roles                                     | Primary context              | Data authority                         | Implementation | Verification | Acceptance requirement                                                        |
| ---------- | ----------------------------------- | ----------------------------------------- | ---------------------------- | -------------------------------------- | -------------- | ------------ | ----------------------------------------------------------------------------- |
| `HOME-001` | Public homepage                     | Guest and approved authenticated contexts | `/`                          | Server-rendered approved data          | `NOT_STARTED`      | `NOT_RUN`    | Mobile-first discovery, search, promoted content, listings, trust, and footer |
| `HOME-002` | Homepage-only city selector         | Public homepage                           | Homepage header/search area  | Location service                       | `NOT_STARTED`      | `NOT_RUN`    | Appears only in homepage context                                              |
| `HOME-003` | Homepage primary search             | Public homepage                           | Homepage hero/search section | Search service                         | `NOT_STARTED`      | `NOT_RUN`    | Input focus shows suggestions; no empty results navigation                    |
| `HOME-004` | Homepage builder promotion carousel | Public homepage                           | Promoted content section     | Promotion and project/listing services | `NOT_STARTED`  | `NOT_RUN`    | Real approved content, responsive interaction, real destination               |
| `HOME-005` | Homepage approved property sections | Public homepage                           | Discovery sections           | Property public-safe view              | `NOT_STARTED`      | `NOT_RUN`    | Real approved listings, honest empty state                                    |
| `HOME-006` | Homepage approved project sections  | Public homepage                           | Discovery sections           | Project public-safe view               | `NOT_STARTED`      | `NOT_RUN`    | Real approved projects, honest empty state                                    |
| `HOME-007` | Popular city discovery              | Public homepage                           | City section                 | Location and SEO service               | `NOT_STARTED`  | `NOT_RUN`    | Real configured cities and correct landing pages                              |
| `HOME-008` | Property-type discovery             | Public homepage                           | Category section             | Search taxonomy                        | `NOT_STARTED`  | `NOT_RUN`    | Correct query destination and meaningful category                             |
| `HOME-009` | Homepage notification preview       | Authenticated public roles                | Homepage header              | Notification service                   | `NOT_STARTED`  | `NOT_RUN`    | Real unread count and contextual destinations                                 |
| `HOME-010` | Public footer                       | Public marketing and legal pages          | Public shell                 | CMS/legal service                      | `NOT_STARTED`      | `NOT_RUN`    | Appropriate public links without appearing in focused app flows               |
| `HOME-011` | Public trust and safety content     | Public homepage                           | Trust section                | CMS/legal content                      | `NOT_STARTED`  | `NOT_RUN`    | Clear marketplace role, safety, verification, and grievance guidance          |
| `HOME-012` | Homepage loading and recovery       | Public homepage                           | Page states                  | Server and UI state                    | `NOT_STARTED`  | `NOT_RUN`    | Stable skeletons, partial failure handling, retry without full-page collapse  |

---

# 12. Gujarat Location Registry

| ID        | Feature                      | Roles                  | Primary context                  | Data authority                 | Implementation | Verification | Acceptance requirement                                      |
| --------- | ---------------------------- | ---------------------- | -------------------------------- | ------------------------------ | -------------- | ------------ | ----------------------------------------------------------- |
| `LOC-001` | Gujarat State hierarchy      | All relevant roles     | Search, posting, profiles, Admin | Location tables                | `NOT_STARTED`  | `NOT_RUN`    | Stable State record and normalized identifier               |
| `LOC-002` | District hierarchy           | All relevant roles     | Location selectors               | Location tables                | `NOT_STARTED`  | `NOT_RUN`    | District belongs to State                                   |
| `LOC-003` | Taluka hierarchy             | All relevant roles     | Location selectors               | Location tables                | `NOT_STARTED`  | `NOT_RUN`    | Taluka belongs to District                                  |
| `LOC-004` | City hierarchy               | All relevant roles     | Search, posting, SEO             | Location tables                | `NOT_STARTED`      | `NOT_RUN`    | City belongs to Taluka or approved administrative structure |
| `LOC-005` | Village/Locality hierarchy   | All relevant roles     | Search and posting               | Location tables                | `NOT_STARTED`      | `NOT_RUN`    | Village/Locality belongs to City or approved parent         |
| `LOC-006` | Cascading location selector  | Public roles and Admin | Forms and filters                | Location service               | `NOT_STARTED`  | `NOT_RUN`    | State → District → Taluka → City → Village/Locality         |
| `LOC-007` | Textual address composition  | Public roles           | Property/project/profile forms   | Address service                | `NOT_STARTED`  | `NOT_RUN`    | Human-readable address stored with normalized references    |
| `LOC-008` | Missing-location request     | Public roles           | Location selector                | Request and moderation service | `NOT_STARTED`  | `NOT_RUN`    | User can request missing place; Admin reviews and resolves  |
| `LOC-009` | Admin location management    | Admin/Super Admin      | Admin locations                  | Location service               | `NOT_STARTED`  | `NOT_RUN`    | Create, edit, merge, activate, deactivate, and audit        |
| `LOC-010` | Location search indexing     | Public search          | Suggestions and filters          | Search index/database          | `NOT_STARTED`  | `NOT_RUN`    | Normalized names, aliases, and efficient query              |
| `LOC-011` | Location SEO slug management | SEO/Admin              | City/locality pages              | SEO service                    | `NOT_STARTED`  | `NOT_RUN`    | Stable unique slugs and redirect history                    |
| `LOC-012` | Location data integrity      | System                 | Database                         | Constraints and migrations     | `NOT_STARTED`  | `NOT_RUN`    | Invalid hierarchy relations prevented                       |

---

# 13. Search and Filter Registry

| ID           | Feature                    | Roles                         | Primary context                | Data authority                           | Implementation | Verification | Acceptance requirement                                                       |
| ------------ | -------------------------- | ----------------------------- | ------------------------------ | ---------------------------------------- | -------------- | ------------ | ---------------------------------------------------------------------------- |
| `SEARCH-001` | Search input interaction   | Guest and public roles        | Homepage and search header     | Search service                           | `NOT_STARTED`      | `NOT_RUN`    | Focus, keyboard, clear, and meaningful query behavior                        |
| `SEARCH-002` | Search suggestions         | Guest and public roles        | Search overlay                 | Search index                             | `NOT_STARTED`  | `NOT_RUN`    | Grouped relevant city, locality, property, project, and category suggestions |
| `SEARCH-003` | Search results page        | Guest and public roles        | Search route                   | Public-safe listing services             | `NOT_STARTED`      | `NOT_RUN`    | Real results, pagination, loading, no-result, and error recovery             |
| `SEARCH-004` | Search filters             | Guest and public roles        | Search results                 | Query-state service                      | `NOT_STARTED`      | `NOT_RUN`    | Relevant property/project filters only                                       |
| `SEARCH-005` | Search sorting             | Guest and public roles        | Search results                 | Query-state service                      | `NOT_STARTED`      | `NOT_RUN`    | Clear sort options with stable results                                       |
| `SEARCH-006` | Mobile filter sheet        | Guest and public roles        | Search results mobile          | UI state                                 | `NOT_STARTED`  | `NOT_RUN`    | Full-screen or bottom-sheet behavior without losing query                    |
| `SEARCH-007` | Desktop filter panel       | Guest and public roles        | Search results desktop         | UI state                                 | `NOT_STARTED`  | `NOT_RUN`    | Stable aligned filter layout                                                 |
| `SEARCH-008` | Search query persistence   | Guest and public roles        | Search navigation              | URL state                                | `NOT_STARTED`  | `NOT_RUN`    | Query survives detail open and return                                        |
| `SEARCH-009` | Filter-state persistence   | Guest and public roles        | Search navigation              | URL or route state                       | `NOT_STARTED`  | `NOT_RUN`    | Filters, sort, tab, and pagination preserved                                 |
| `SEARCH-010` | Search scroll preservation | Guest and public roles        | List-detail-return             | Route state                              | `NOT_STARTED`  | `NOT_RUN`    | Useful scroll restoration after detail inspection                            |
| `SEARCH-011` | Search no-results recovery | Guest and public roles        | Search results                 | Search service                           | `NOT_STARTED`  | `NOT_RUN`    | Shows query context and useful adjustment actions                            |
| `SEARCH-012` | Search error recovery      | Guest and public roles        | Search results                 | Error boundary and retry                 | `NOT_STARTED`  | `NOT_RUN`    | Safe retry without losing query                                              |
| `SEARCH-013` | Saved properties           | Authenticated public roles    | Property cards/details/profile | Saved-item service                       | `NOT_STARTED`      | `NOT_RUN`    | Real server-backed saved state                                               |
| `SEARCH-014` | Saved projects             | Authenticated public roles    | Project cards/details/profile  | Saved-item service                       | `NOT_STARTED`      | `NOT_RUN`    | Real server-backed saved state                                               |
| `SEARCH-015` | Saved searches             | Authenticated public roles    | Search results/profile         | Saved-search service                     | `NOT_STARTED`      | `NOT_RUN`    | Query and filter definition stored server-side                               |
| `SEARCH-016` | Recent search UX           | Guest and authenticated users | Search suggestions             | Non-sensitive UX state or server profile | `NOT_STARTED`  | `NOT_RUN`    | Clearable and privacy-safe                                                   |
| `SEARCH-017` | Search abuse protection    | Public                        | Search APIs                    | Rate-limit service                       | `NOT_STARTED`  | `NOT_RUN`    | Prevents scraping and abusive query volume                                   |

---

# 14. SEO, Public Profiles, CMS, and Legal Registry

| ID            | Feature                                  | Roles                     | Primary context                        | Data authority                         | Implementation | Verification | Acceptance requirement                                          |
| ------------- | ---------------------------------------- | ------------------------- | -------------------------------------- | -------------------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
| `SEO-001`     | City property landing pages              | Public                    | City SEO routes                        | Approved listing and location services | `NOT_STARTED`  | `NOT_RUN`    | Search intent, canonical metadata, real approved results        |
| `SEO-002`     | City project landing pages               | Public                    | City project routes                    | Approved project and location services | `NOT_STARTED`  | `NOT_RUN`    | Correct city and project context                                |
| `SEO-003`     | Property-type landing pages              | Public                    | SEO routes                             | Search taxonomy                        | `NOT_STARTED`  | `NOT_RUN`    | Property type and city combinations validated                   |
| `SEO-004`     | Purpose-based landing pages              | Public                    | Sale/rent approved route patterns      | Search service                         | `NOT_STARTED`  | `NOT_RUN`    | Correct purpose, location, and canonical handling               |
| `SEO-005`     | Dynamic metadata                         | Public pages              | Metadata generation                    | SEO service                            | `NOT_STARTED`  | `NOT_RUN`    | Accurate title, description, canonical, robots, Open Graph      |
| `SEO-006`     | Structured data                          | Public pages              | Property, project, profile, breadcrumb | Public-safe data service               | `NOT_STARTED`  | `NOT_RUN`    | No private contact or misleading claims                         |
| `SEO-007`     | Sitemap generation                       | Public pages              | Sitemap routes                         | SEO index service                      | `NOT_STARTED`  | `NOT_RUN`    | Only approved indexable content included                        |
| `SEO-008`     | Robots and noindex controls              | Public and private routes | Metadata/middleware                    | Route policy                           | `NOT_STARTED`  | `NOT_RUN`    | Private, auth, dashboard, Admin, and non-public states excluded |
| `SEO-009`     | Canonical and duplicate control          | Public SEO                | SEO service                            | Route policy                           | `NOT_STARTED`  | `NOT_RUN`    | Query duplication and alternate slugs handled                   |
| `SEO-010`     | SEO redirect history                     | Public                    | Changed slugs and locations            | Redirect service                       | `NOT_STARTED`  | `NOT_RUN`    | Permanent redirects preserve valid traffic                      |
| `PROFILE-001` | Owner public profile                     | Public                    | Public profile route                   | Public-safe owner view                 | `NOT_STARTED`  | `NOT_RUN`    | Approved public fields and related approved properties          |
| `PROFILE-002` | Broker public profile                    | Public                    | Public profile route                   | Public-safe broker view                | `NOT_STARTED`  | `NOT_RUN`    | Approved business information and listings                      |
| `PROFILE-003` | Builder public profile                   | Public                    | Builder profile/microsite              | Public-safe builder view               | `NOT_STARTED`      | `NOT_RUN`    | Approved profile, projects, and promotion destinations          |
| `PROFILE-004` | Public profile privacy                   | Public                    | Public profiles                        | Public-safe views and RLS              | `NOT_STARTED`  | `NOT_RUN`    | Private fields absent from HTML, payload, metadata, and schema  |
| `CMS-001`     | Static page management                   | Admin/Super Admin         | Admin CMS                              | CMS service                            | `NOT_STARTED`      | `NOT_RUN`    | Draft, preview, publish, archive, version, and audit            |
| `CMS-002`     | Blog management                          | Admin/Content staff       | Admin CMS/blog                         | CMS service                            | `NOT_STARTED`      | `NOT_RUN`    | Authoring, media, SEO, moderation, scheduling, and publish      |
| `CMS-003`     | Help content                             | Admin/Support staff       | Help center                            | CMS service                            | `NOT_STARTED`  | `NOT_RUN`    | Searchable, categorized, contextual support content             |
| `CMS-004`     | SEO content management                   | SEO staff/Admin           | Admin SEO                              | SEO content service                    | `NOT_STARTED`  | `NOT_RUN`    | Permission-scoped metadata and content changes                  |
| `LEGAL-001`   | Terms of Service                         | Public                    | Legal route                            | Versioned CMS/legal service            | `NOT_STARTED`      | `NOT_RUN`    | Current version, acceptance linkage, and audit                  |
| `LEGAL-002`   | Privacy Policy                           | Public                    | Legal route                            | Versioned CMS/legal service            | `NOT_STARTED`      | `NOT_RUN`    | Data practices and rights clearly described                     |
| `LEGAL-003`   | Cookie and consent preferences           | Public                    | Banner/settings                        | Consent service                        | `NOT_STARTED`  | `NOT_RUN`    | Granular consent, storage, withdrawal, and audit where required |
| `LEGAL-004`   | Listing policy                           | Public roles              | Posting flows/legal route              | Legal service                          | `NOT_STARTED`  | `NOT_RUN`    | Required acceptance before submission                           |
| `LEGAL-005`   | Payment, refund, and cancellation policy | Paying users              | Billing/legal routes                   | Legal service                          | `NOT_STARTED`  | `NOT_RUN`    | Visible before payment                                          |
| `LEGAL-006`   | Marketplace disclaimer                   | Public                    | Details, posting, legal routes         | Legal content                          | `NOT_STARTED`  | `NOT_RUN`    | Platform role and user responsibility clearly stated            |
| `LEGAL-007`   | Verification disclaimer                  | Public                    | Profiles/listings/legal                | Legal content                          | `NOT_STARTED`  | `NOT_RUN`    | Verification does not imply guarantee                           |
| `LEGAL-008`   | RERA and advertising compliance notice   | Builder/Admin             | Project/promotion flows                | Legal service                          | `NOT_STARTED`  | `NOT_RUN`    | Required project and promotional compliance                     |
| `LEGAL-009`   | Grievance and support information        | Public                    | Legal/support routes                   | Support service                        | `NOT_STARTED`  | `NOT_RUN`    | Contact method, reference, status, and resolution path          |

---

# 15. Property Registry

| ID         | Feature                           | Roles                        | Primary context             | Data authority                   | Implementation   | Verification | Acceptance requirement                                                         |
| ---------- | --------------------------------- | ---------------------------- | --------------------------- | -------------------------------- | ---------------- | ------------ | ------------------------------------------------------------------------------ |
| `PROP-001` | Property creation eligibility     | Owner, Broker                | Post Property               | Server permission service        | `NOT_STARTED`        | `NOT_RUN`    | Only authorized role and plan state may create                                 |
| `PROP-002` | Property create flow              | Owner, Broker                | Focused posting flow        | Property service                 | `NOT_STARTED`        | `NOT_RUN`    | Mobile-first structured fields and complete validation                         |
| `PROP-003` | Property draft                    | Owner, Broker                | Create/edit flow            | Property database                | `NOT_STARTED`        | `NOT_RUN`    | Server-backed draft, safe reopen, save-state feedback                          |
| `PROP-004` | Property type-specific fields     | Owner, Broker                | Posting flow                | Schema and validation service    | `NOT_STARTED`        | `NOT_RUN`    | Only relevant fields shown and validated                                       |
| `PROP-005` | Property textual address          | Owner, Broker                | Posting flow                | Location and property services   | `NOT_STARTED`    | `NOT_RUN`    | Full Gujarat hierarchy and human-readable address                              |
| `PROP-006` | Property media                    | Owner, Broker                | Posting and management      | Media service                    | `SETUP_REQUIRED` | `NOT_RUN`    | Secure upload, ordering, optimization, moderation                              |
| `PROP-007` | Property preview                  | Owner, Broker                | Before submission           | Property draft service           | `NOT_STARTED`    | `NOT_RUN`    | Accurate preview using current saved data                                      |
| `PROP-008` | Property submission               | Owner, Broker                | Posting flow                | Property and moderation services | `NOT_STARTED`        | `NOT_RUN`    | Required validation and listing-policy acceptance                              |
| `PROP-009` | Property moderation               | Admin/staff                  | Moderation queue            | Moderation service               | `NOT_STARTED`        | `NOT_RUN`    | Approve, reject, request changes, reason, history                              |
| `PROP-010` | Property publication              | System/Admin                 | Public marketplace          | Property service                 | `NOT_STARTED`        | `NOT_RUN`    | Only approved and active property becomes public                               |
| `PROP-011` | Property public card              | Public                       | Homepage/search/profile     | Public-safe property view        | `NOT_STARTED`        | `NOT_RUN`    | Image, price, title, location, facts, save, Direct Inquiry                     |
| `PROP-012` | Property public detail            | Public                       | Property detail route       | Public-safe property view        | `NOT_STARTED`        | `NOT_RUN`    | Gallery, price, facts, description, address, profile, inquiry, related content |
| `PROP-013` | Property edit                     | Owner/Broker owner of record | Property management         | Property service                 | `NOT_STARTED`        | `NOT_RUN`    | Permission, validation, moderation behavior, history                           |
| `PROP-014` | Property pause                    | Owner/Broker owner of record | Property management         | Property service                 | `NOT_STARTED`        | `NOT_RUN`    | Removes public availability without deleting data                              |
| `PROP-015` | Property resume                   | Owner/Broker owner of record | Property management         | Property service                 | `NOT_STARTED`        | `NOT_RUN`    | Restores eligible public availability                                          |
| `PROP-016` | Property soft delete              | Owner/Broker owner of record | Property management         | Property service                 | `NOT_STARTED`    | `NOT_RUN`    | Confirmation, reason where required, hidden from normal views                  |
| `PROP-017` | Property restore                  | Authorized user/Admin        | Recovery context            | Recovery service                 | `NOT_STARTED`    | `NOT_RUN`    | Permission-controlled restore with history                                     |
| `PROP-018` | Property status history           | Owner/Broker/Admin           | Property detail and Admin   | Property event service           | `NOT_STARTED`    | `NOT_RUN`    | Every lifecycle mutation recorded                                              |
| `PROP-019` | Property-specific Leads access    | Owner/Broker owner of record | Property management         | Lead service                     | `NOT_STARTED`    | `NOT_RUN`    | Property → related leads → lead detail                                         |
| `PROP-020` | Property performance analytics    | Owner/Broker/Admin           | Property management         | Real analytics service           | `NOT_STARTED`    | `NOT_RUN`    | Real views/inquiries only, date-range and privacy safe                         |
| `PROP-021` | Property report action            | Public/authenticated users   | Property detail             | Report service                   | `NOT_STARTED`        | `NOT_RUN`    | Reason, evidence where allowed, status, Admin destination                      |
| `PROP-022` | Property report moderation        | Admin/staff                  | Reports and property detail | Report/moderation service        | `NOT_STARTED`    | `NOT_RUN`    | Investigate, resolve, link actions, notify, audit                              |
| `PROP-023` | Property deep Admin graph         | Admin/Super Admin            | Admin property detail       | Connected Admin services         | `NOT_STARTED`    | `NOT_RUN`    | Owner, leads, reports, billing, moderation, audit, recovery clickable          |
| `PROP-024` | Property contextual Admin editing | Authorized internal users    | Admin property detail       | Property Admin service           | `NOT_STARTED`    | `NOT_RUN`    | Correct modal/drawer/page, validation, reason, audit                           |
| `PROP-025` | Property list-state preservation  | Owner/Broker/Admin/Public    | List-detail-return          | URL/route state                  | `NOT_STARTED`    | `NOT_RUN`    | Filters, search, tab, pagination, scroll preserved                             |

---

# 16. Builder Project Registry

| ID         | Feature                              | Roles                      | Primary context         | Data authority                  | Implementation   | Verification | Acceptance requirement                                                    |
| ---------- | ------------------------------------ | -------------------------- | ----------------------- | ------------------------------- | ---------------- | ------------ | ------------------------------------------------------------------------- |
| `PROJ-001` | Project creation eligibility         | Builder/Developer          | Post Project            | Server permission service       | `NOT_STARTED`        | `NOT_RUN`    | Builder role, plan, verification, and required compliance checked         |
| `PROJ-002` | Project create flow                  | Builder/Developer          | Focused project flow    | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Mobile-first structured flow with validation                              |
| `PROJ-003` | Project draft                        | Builder/Developer          | Create/edit flow        | Project database                | `NOT_STARTED`        | `NOT_RUN`    | Server-backed draft and safe reopening                                    |
| `PROJ-004` | Project details                      | Builder/Developer          | Project flow            | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Name, type, purpose, address, timeline, status, description               |
| `PROJ-005` | Project textual address              | Builder/Developer          | Project flow            | Location and project services   | `NOT_STARTED`    | `NOT_RUN`    | Full Gujarat hierarchy                                                    |
| `PROJ-006` | Project compliance data              | Builder/Developer          | Project flow            | Compliance service              | `NOT_STARTED`        | `NOT_RUN`    | Required RERA and supporting information where applicable                 |
| `PROJ-007` | Project amenities and specifications | Builder/Developer          | Project flow            | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Structured and searchable data                                            |
| `PROJ-008` | Project media                        | Builder/Developer          | Project flow            | Media service                   | `SETUP_REQUIRED` | `NOT_RUN`    | Images, brochure, plans, approved video, secure processing                |
| `PROJ-009` | Project preview                      | Builder/Developer          | Before submission       | Project draft service           | `NOT_STARTED`    | `NOT_RUN`    | Accurate preview                                                          |
| `PROJ-010` | Project submission                   | Builder/Developer          | Project flow            | Project and moderation services | `NOT_STARTED`        | `NOT_RUN`    | Validation, compliance, policy acceptance                                 |
| `PROJ-011` | Project moderation                   | Admin/staff                | Project queue           | Moderation service              | `NOT_STARTED`        | `NOT_RUN`    | Full project and unit review, reason and history                          |
| `PROJ-012` | Project publication                  | System/Admin               | Public marketplace      | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Only approved active project becomes public                               |
| `PROJ-013` | Project public card                  | Public                     | Homepage/search/profile | Public-safe project view        | `NOT_STARTED`        | `NOT_RUN`    | Image, price range, title, location, configurations, save, Direct Inquiry |
| `PROJ-014` | Project public detail                | Public                     | Project detail          | Public-safe project view        | `NOT_STARTED`        | `NOT_RUN`    | Gallery, overview, units, amenities, address, builder, inquiry            |
| `PROJ-015` | Project edit                         | Builder owner of record    | Project management      | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Permission, validation, moderation behavior, history                      |
| `PROJ-016` | Project pause                        | Builder owner of record    | Project management      | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Public visibility paused without data loss                                |
| `PROJ-017` | Project resume                       | Builder owner of record    | Project management      | Project service                 | `NOT_STARTED`        | `NOT_RUN`    | Restores eligible project                                                 |
| `PROJ-018` | Project soft delete                  | Builder owner of record    | Project management      | Project service                 | `NOT_STARTED`    | `NOT_RUN`    | Dependency-aware soft delete                                              |
| `PROJ-019` | Project restore                      | Builder/Admin              | Recovery context        | Recovery service                | `NOT_STARTED`    | `NOT_RUN`    | Units, leads, and history preserved                                       |
| `PROJ-020` | Project status history               | Builder/Admin              | Project detail          | Project event service           | `NOT_STARTED`    | `NOT_RUN`    | Complete lifecycle timeline                                               |
| `PROJ-021` | Project-specific Leads access        | Builder owner of record    | Project management      | Lead service                    | `NOT_STARTED`    | `NOT_RUN`    | Project → leads → lead detail                                             |
| `PROJ-022` | Project performance analytics        | Builder/Admin              | Project management      | Real analytics service          | `NOT_STARTED`    | `NOT_RUN`    | Real activity only                                                        |
| `PROJ-023` | Project report action                | Public/authenticated users | Project detail          | Report service                  | `NOT_STARTED`        | `NOT_RUN`    | Real Admin workflow and status                                            |
| `PROJ-024` | Project deep Admin graph             | Admin/Super Admin          | Admin project detail    | Connected Admin services        | `NOT_STARTED`    | `NOT_RUN`    | Builder, units, leads, reports, billing, moderation, audit, recovery      |
| `PROJ-025` | Project contextual Admin editing     | Authorized internal users  | Admin project detail    | Project Admin service           | `NOT_STARTED`    | `NOT_RUN`    | Correct contextual UI, validation, reason, audit                          |

---

# 17. Project Unit Registry

| ID         | Feature                        | Roles                    | Primary context        | Data authority        | Implementation   | Verification | Acceptance requirement                                            |
| ---------- | ------------------------------ | ------------------------ | ---------------------- | --------------------- | ---------------- | ------------ | ----------------------------------------------------------------- |
| `UNIT-001` | Unit management inside project | Builder/Developer        | Project management     | Unit service          | `NOT_STARTED`        | `NOT_RUN`    | Unit functionality never loses project context                    |
| `UNIT-002` | Unit create                    | Builder owner of project | Project → Units        | Unit service          | `NOT_STARTED`        | `NOT_RUN`    | Configuration, price, area, inventory, status, validation         |
| `UNIT-003` | Unit edit                      | Builder owner of project | Project → Unit detail  | Unit service          | `NOT_STARTED`        | `NOT_RUN`    | Permission, history, validation                                   |
| `UNIT-004` | Unit inventory                 | Builder/Admin            | Project management     | Inventory service     | `NOT_STARTED`        | `NOT_RUN`    | Real available/reserved/sold or approved status model             |
| `UNIT-005` | Unit pricing                   | Builder/Admin            | Unit management        | Unit service          | `NOT_STARTED`        | `NOT_RUN`    | Currency, range, effective state, audit                           |
| `UNIT-006` | Unit media and floor plan      | Builder                  | Unit detail            | Media service         | `SETUP_REQUIRED` | `NOT_RUN`    | Secure relation to unit                                           |
| `UNIT-007` | Unit public visibility         | Public                   | Project detail         | Public-safe unit view | `NOT_STARTED`        | `NOT_RUN`    | Only approved eligible data                                       |
| `UNIT-008` | Unit pause/resume              | Builder/Admin            | Unit management        | Unit service          | `NOT_STARTED`    | `NOT_RUN`    | Reversible visibility and inventory state                         |
| `UNIT-009` | Unit soft delete/restore       | Builder/Admin            | Unit recovery          | Recovery service      | `NOT_STARTED`    | `NOT_RUN`    | Dependency-safe, audited                                          |
| `UNIT-010` | Unit-specific inquiry context  | Public and Builder       | Project/unit detail    | Inquiry service       | `NOT_STARTED`    | `NOT_RUN`    | Inquiry preserves exact unit when selected                        |
| `UNIT-011` | Unit-specific Leads            | Builder/Admin            | Project → Unit → Leads | Lead service          | `NOT_STARTED`    | `NOT_RUN`    | Deep clickable relation                                           |
| `UNIT-012` | Unit Admin drill-down          | Admin/Super Admin        | Admin project detail   | Admin unit service    | `NOT_STARTED`    | `NOT_RUN`    | Unit, leads, price history, status, moderation, audit             |
| `UNIT-013` | Unit bulk operations           | Authorized Builder/Admin | Project unit list      | Unit service          | `NOT_STARTED`    | `NOT_RUN`    | Permission, confirmation, reason, partial-failure handling, audit |

---

# 18. Requirement and Proposal Registry

| ID        | Feature                          | Roles                                         | Primary context          | Data authority                         | Implementation   | Verification | Acceptance requirement                                        |
| --------- | -------------------------------- | --------------------------------------------- | ------------------------ | -------------------------------------- | ---------------- | ------------ | ------------------------------------------------------------- |
| `REQ-001` | Requirement creation             | Owner, Broker                                 | Post Requirement         | Requirement service                    | `NOT_STARTED`        | `NOT_RUN`    | Purpose, budget, type, location, urgency, privacy, expiry     |
| `REQ-002` | Requirement draft                | Owner, Broker                                 | Create/edit              | Requirement database                   | `NOT_STARTED`        | `NOT_RUN`    | Server-backed and recoverable                                 |
| `REQ-003` | Requirement moderation           | Admin/staff                                   | Requirement queue        | Moderation service                     | `NOT_STARTED`        | `NOT_RUN`    | Approve, reject, request changes, reopen, audit               |
| `REQ-004` | Requirement public/eligible feed | Authorized roles                              | Requirement workspace    | Public-safe/scoped requirement view    | `NOT_STARTED`        | `NOT_RUN`    | Only permitted users and safe fields                          |
| `REQ-005` | Requirement edit                 | Owner/Broker owner of record                  | Requirement management   | Requirement service                    | `NOT_STARTED`        | `NOT_RUN`    | Permission and moderation behavior                            |
| `REQ-006` | Requirement pause/close          | Owner/Broker owner of record                  | Requirement management   | Requirement service                    | `NOT_STARTED`    | `NOT_RUN`    | Clear lifecycle and history                                   |
| `REQ-007` | Requirement expiry/renewal       | Owner/Broker/System                           | Requirement management   | Background job and requirement service | `SETUP_REQUIRED` | `NOT_RUN`    | Real expiry and safe renewal                                  |
| `REQ-008` | Requirement response/proposal    | Authorized Broker/Builder as defined by scope | Requirement detail       | Proposal and Lead services             | `NOT_STARTED`        | `NOT_RUN`    | Creates real contextual response and Lead activity            |
| `REQ-009` | Proposal lifecycle               | Authorized sender/receiver                    | Proposal detail          | Proposal service                       | `NOT_STARTED`        | `NOT_RUN`    | Sent, viewed, accepted/rejected/withdrawn/expired as approved |
| `REQ-010` | Requirement-specific Leads       | Requirement owner and authorized responder    | Requirement detail       | Lead service                           | `NOT_STARTED`    | `NOT_RUN`    | Requirement → response → lead → messages/activity             |
| `REQ-011` | Requirement Admin graph          | Admin/Super Admin                             | Admin requirement detail | Connected Admin services               | `NOT_STARTED`    | `NOT_RUN`    | User, proposals, leads, reports, moderation, audit, recovery  |

---

# 19. Direct Inquiry and Unified Leads Registry

| ID         | Feature                       | Roles                                     | Primary context                   | Data authority                   | Implementation   | Verification | Acceptance requirement                                            |
| ---------- | ----------------------------- | ----------------------------------------- | --------------------------------- | -------------------------------- | ---------------- | ------------ | ----------------------------------------------------------------- |
| `INQ-001`  | Direct Inquiry action         | Guest and authenticated public roles      | Property/project/unit detail      | Inquiry service                  | `NOT_STARTED`    | `NOT_RUN`    | Single clear inquiry action without inquiry-type selection        |
| `INQ-002`  | Inquiry authentication gate   | Guest                                     | Protected inquiry flow            | Auth return-context service      | `NOT_STARTED`    | `NOT_RUN`    | Preserves entity and intended action through login/register       |
| `INQ-003`  | Inquiry form                  | Authenticated public roles                | Modal/sheet/page based on context | Inquiry service                  | `NOT_STARTED`    | `NOT_RUN`    | Minimal validated message and consent                             |
| `INQ-004`  | Inquiry submission            | Authenticated public roles                | Inquiry flow                      | Server inquiry and Lead service  | `NOT_STARTED`    | `NOT_RUN`    | Real persisted lead, idempotent submission, clear success         |
| `INQ-005`  | Inquiry duplicate protection  | Authenticated users                       | Inquiry service                   | Duplicate and rate-limit service | `NOT_STARTED`    | `NOT_RUN`    | Prevents rapid duplicate spam without blocking valid follow-up    |
| `INQ-006`  | Inquiry privacy               | All roles                                 | Inquiry payloads                  | RLS and public-safe services     | `NOT_STARTED`    | `NOT_RUN`    | Private contact absent from unauthorized payloads                 |
| `INQ-007`  | Inquiry notification          | Lead participants                         | In-app and email                  | Notification service             | `SETUP_REQUIRED` | `NOT_RUN`    | Real in-app event; email after provider setup                     |
| `LEAD-001` | Unified Leads workspace       | Owner, Broker, Builder/Developer          | Role application                  | Lead service                     | `NOT_STARTED`        | `NOT_RUN`    | Inquiries, messages, notes, follow-ups, and timeline unified      |
| `LEAD-002` | Lead list                     | Authorized role users                     | Leads workspace                   | Scoped Lead view                 | `NOT_STARTED`        | `NOT_RUN`    | Search, filter, sort, pagination, responsive cards/table          |
| `LEAD-003` | Lead detail                   | Authorized participants                   | Lead detail route/drawer          | Lead service                     | `NOT_STARTED`        | `NOT_RUN`    | Source, entity, participants, status, timeline, actions           |
| `LEAD-004` | Property-related Leads        | Property owner/Broker/Admin               | Property management               | Lead relation                    | `NOT_STARTED`    | `NOT_RUN`    | Property → Leads → Lead detail                                    |
| `LEAD-005` | Project-related Leads         | Builder/Admin                             | Project management                | Lead relation                    | `NOT_STARTED`    | `NOT_RUN`    | Project → Leads → Lead detail                                     |
| `LEAD-006` | Unit-related Leads            | Builder/Admin                             | Unit context                      | Lead relation                    | `NOT_STARTED`    | `NOT_RUN`    | Unit relation remains visible and clickable                       |
| `LEAD-007` | Requirement-related Leads     | Authorized requirement participants/Admin | Requirement context               | Lead relation                    | `NOT_STARTED`    | `NOT_RUN`    | Requirement response is traceable                                 |
| `LEAD-008` | Lead status pipeline          | Authorized lead owner/Admin               | Lead detail                       | Lead service                     | `NOT_STARTED`        | `NOT_RUN`    | Approved statuses, permission, history, no fake automation        |
| `LEAD-009` | Lead messages                 | Authorized participants                   | Lead detail                       | Message service                  | `NOT_STARTED`        | `NOT_RUN`    | Thread privacy, unread state, send failure, retry                 |
| `LEAD-010` | Lead notes                    | Lead owner/internal authorized users      | Lead detail                       | Note service                     | `NOT_STARTED`        | `NOT_RUN`    | Private scope, author, timestamp, edit history                    |
| `LEAD-011` | Lead follow-ups               | Lead owner                                | Lead detail                       | Follow-up service                | `NOT_STARTED`        | `NOT_RUN`    | Due date, status, reminder where configured, history              |
| `LEAD-012` | Lead activity timeline        | Authorized participants/Admin             | Lead detail                       | Event service                    | `NOT_STARTED`        | `NOT_RUN`    | Chronological real events                                         |
| `LEAD-013` | Lead assignment ownership     | Authorized direct record owner/Admin      | Lead service                      | Ownership fields                 | `NOT_STARTED`    | `NOT_RUN`    | Clear accountable owner without subordinate public-role structure |
| `LEAD-014` | Lead search and filters       | Authorized users                          | Leads workspace                   | Query service                    | `NOT_STARTED`    | `NOT_RUN`    | Entity, source, status, date, unread, follow-up                   |
| `LEAD-015` | Lead list-state preservation  | Authorized users                          | List-detail-return                | URL/route state                  | `NOT_STARTED`    | `NOT_RUN`    | Filters, query, sort, tab, pagination, scroll                     |
| `LEAD-016` | Lead unread state             | Participants                              | Leads/messages                    | Message/notification service     | `NOT_STARTED`        | `NOT_RUN`    | Real counts and mark-read behavior                                |
| `LEAD-017` | Lead archive/close            | Authorized lead owner                     | Lead workspace                    | Lead service                     | `NOT_STARTED`    | `NOT_RUN`    | Reversible or history-preserving lifecycle                        |
| `LEAD-018` | Lead export                   | Permissioned users/Admin                  | Lead list                         | Export service                   | `NOT_STARTED`    | `NOT_RUN`    | Permission, rate limit, privacy, audit                            |
| `LEAD-019` | Lead Admin visibility         | Admin/Super Admin                         | Admin Leads                       | Admin Lead service               | `NOT_STARTED`        | `NOT_RUN`    | Full entity, users, messages, reports, billing relation, audit    |
| `LEAD-020` | Lead contextual Admin editing | Permissioned internal users               | Admin Lead detail                 | Admin Lead service               | `NOT_STARTED`    | `NOT_RUN`    | Status and permitted fields, reason, audit                        |
| `LEAD-021` | Lead abuse/report action      | Participants                              | Lead/message context              | Report service                   | `NOT_STARTED`    | `NOT_RUN`    | Block/report path, Admin destination, evidence and status         |
| `LEAD-022` | Lead performance reporting    | Authorized role/Admin                     | Dashboard and reporting           | Real analytics service           | `NOT_STARTED`    | `NOT_RUN`    | Real counts and date filters only                                 |

---

# 20. Notification Registry

| ID          | Feature                        | Roles               | Primary context           | Data/provider              | Implementation   | Verification     | Acceptance requirement                                  |
| ----------- | ------------------------------ | ------------------- | ------------------------- | -------------------------- | ---------------- | ---------------- | ------------------------------------------------------- |
| `NOTIF-001` | In-app notification data model | Authenticated users | Entire application        | Notification tables        | `NOT_STARTED`        | `NOT_RUN`        | Real event, recipient, entity, timestamp, state         |
| `NOTIF-002` | Notification unread count      | Authenticated users | Header/navigation         | Notification service       | `NOT_STARTED`        | `NOT_RUN`        | Real unread count with stable updates                   |
| `NOTIF-003` | Notification preview popup     | Authenticated users | Homepage/dashboard header | Notification service       | `NOT_STARTED`    | `NOT_RUN`        | Recent useful items, Close behavior, View All           |
| `NOTIF-004` | Notification center            | Authenticated users | Notification page         | Notification service       | `NOT_STARTED`        | `NOT_RUN`        | History, filters, read state, entity destination        |
| `NOTIF-005` | Notification click destination | Authenticated users | Preview and center        | Route resolver             | `NOT_STARTED`    | `NOT_RUN`        | Opens exact related entity or contextual detail         |
| `NOTIF-006` | Mark read/unread               | Authenticated users | Notification UI           | Notification service       | `NOT_STARTED`        | `NOT_RUN`        | Real persistence                                        |
| `NOTIF-007` | Notification archive/delete    | Authenticated users | Notification center       | Notification service       | `NOT_STARTED`    | `NOT_RUN`        | Clear lifecycle and recovery where supported            |
| `NOTIF-008` | Email notification provider    | Authenticated users | External notifications    | Email provider             | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Provider configured, verified, retried, audited         |
| `NOTIF-009` | Email templates                | System/Admin        | Notification settings     | Template service           | `NOT_STARTED`    | `NOT_RUN`        | Versioned, tested, safe variables, preview              |
| `NOTIF-010` | Email delivery log             | Admin/Super Admin   | Admin notification detail | Delivery service           | `NOT_STARTED`    | `NOT_RUN`        | Status, retry, failure reason, no secret content        |
| `NOTIF-011` | SMS OTP delivery               | Auth users          | Auth                      | SMS provider               | `SETUP_REQUIRED` | `SETUP_REQUIRED` | OTP only, rate-limited, verified                        |
| `NOTIF-012` | Notification preferences       | Authenticated users | Settings                  | Preference service         | `NOT_STARTED`    | `NOT_RUN`        | Applicable channels and categories only                 |
| `NOTIF-013` | Notification retry handling    | System/Admin        | Background processing     | Queue/provider service     | `SETUP_REQUIRED` | `NOT_RUN`        | Idempotent retries and failure visibility               |
| `NOTIF-014` | Admin notification management  | Admin/Super Admin   | Admin notifications       | Notification Admin service | `NOT_STARTED`    | `NOT_RUN`        | Inspect event, recipient, provider status, retry, audit |

---

# 21. Role Dashboard Registry

| ID         | Feature                            | Roles             | Primary context           | Data authority             | Implementation | Verification | Acceptance requirement                                          |
| ---------- | ---------------------------------- | ----------------- | ------------------------- | -------------------------- | -------------- | ------------ | --------------------------------------------------------------- |
| `DASH-001` | Owner dashboard                    | Owner             | Owner application home    | Owner dashboard service    | `NOT_STARTED`      | `NOT_RUN`    | Simplified overview, real activity, useful actions              |
| `DASH-002` | Owner property summary             | Owner             | Owner dashboard           | Property service           | `NOT_STARTED`  | `NOT_RUN`    | Counts link to correctly filtered property lists                |
| `DASH-003` | Owner Lead summary                 | Owner             | Owner dashboard           | Lead service               | `NOT_STARTED`  | `NOT_RUN`    | New/open/follow-up counts link to Leads workspace               |
| `DASH-004` | Owner recent activity              | Owner             | Owner dashboard           | Event service              | `NOT_STARTED`  | `NOT_RUN`    | Real property, inquiry, moderation, and billing activity        |
| `DASH-005` | Broker dashboard                   | Broker            | Broker application home   | Broker dashboard service   | `NOT_STARTED`      | `NOT_RUN`    | Simplified listing, Lead, requirement, and billing overview     |
| `DASH-006` | Broker listing summary             | Broker            | Broker dashboard          | Property service           | `NOT_STARTED`  | `NOT_RUN`    | Real filtered drill-down                                        |
| `DASH-007` | Broker Lead summary                | Broker            | Broker dashboard          | Lead service               | `NOT_STARTED`  | `NOT_RUN`    | Listing and requirement context preserved                       |
| `DASH-008` | Broker requirement summary         | Broker            | Broker dashboard          | Requirement service        | `NOT_STARTED`  | `NOT_RUN`    | Real eligible activity                                          |
| `DASH-009` | Builder dashboard                  | Builder/Developer | Builder application home  | Builder dashboard service  | `NOT_STARTED`      | `NOT_RUN`    | Simplified project, unit, Lead, promotion, and billing overview |
| `DASH-010` | Builder project summary            | Builder/Developer | Builder dashboard         | Project service            | `NOT_STARTED`  | `NOT_RUN`    | Real filtered project destination                               |
| `DASH-011` | Builder unit summary               | Builder/Developer | Builder dashboard         | Unit service               | `NOT_STARTED`  | `NOT_RUN`    | Project context retained                                        |
| `DASH-012` | Builder Lead summary               | Builder/Developer | Builder dashboard         | Lead service               | `NOT_STARTED`  | `NOT_RUN`    | Project/unit Lead filters and destination                       |
| `DASH-013` | Builder promotion summary          | Builder/Developer | Builder dashboard         | Promotion service          | `NOT_STARTED`  | `NOT_RUN`    | Submission, status, schedule, performance, billing              |
| `DASH-014` | Dashboard metric integrity         | All public roles  | All role dashboards       | Real query services        | `NOT_STARTED`  | `NOT_RUN`    | No fake or stale decorative metrics                             |
| `DASH-015` | Dashboard quick actions            | All public roles  | Role dashboards           | Route/action configuration | `NOT_STARTED`  | `NOT_RUN`    | Every action has meaningful destination                         |
| `DASH-016` | Dashboard loading and empty states | All public roles  | Role dashboards           | UI state                   | `NOT_STARTED`  | `NOT_RUN`    | Stable skeletons and guided first-use state                     |
| `DASH-017` | Dashboard mobile behavior          | All public roles  | Mobile                    | Responsive system          | `NOT_STARTED`  | `NOT_RUN`    | Bottom navigation, readable cards, no overloaded grid           |
| `DASH-018` | Dashboard deep drill-down          | All public roles  | Dashboard to entity graph | Connected services         | `NOT_STARTED`  | `NOT_RUN`    | Metric → list → entity → related Leads → detail                 |
| `DASH-019` | Dashboard context return           | All public roles  | Drill-down and return     | Route state                | `NOT_STARTED`  | `NOT_RUN`    | User returns to previous dashboard/list state                   |
| `DASH-020` | Dashboard accessibility            | All public roles  | Dashboard UI              | Accessibility system       | `NOT_STARTED`  | `NOT_RUN`    | Keyboard, focus, labels, semantics, touch targets               |

---

# 22. Builder Homepage Promotion Registry

| ID          | Feature                           | Roles             | Primary context               | Data/provider                   | Implementation   | Verification     | Acceptance requirement                                   |
| ----------- | --------------------------------- | ----------------- | ----------------------------- | ------------------------------- | ---------------- | ---------------- | -------------------------------------------------------- |
| `PROMO-001` | Eligible builder promotion entity | Builder/Developer | Builder dashboard             | Promotion service               | `NOT_STARTED`    | `NOT_RUN`        | Links to approved project or eligible approved listing   |
| `PROMO-002` | Promotion submission              | Builder/Developer | Builder promotion flow        | Promotion service               | `NOT_STARTED`    | `NOT_RUN`        | Select entity, creative/data, location, schedule, policy |
| `PROMO-003` | Promotion preview                 | Builder/Developer | Before submission             | Promotion draft service         | `NOT_STARTED`    | `NOT_RUN`        | Accurate mobile and desktop preview                      |
| `PROMO-004` | Promotion moderation              | Admin/staff       | Promotion queue               | Moderation service              | `NOT_STARTED`    | `NOT_RUN`        | Approve, reject, request changes, reason, history        |
| `PROMO-005` | Promotion scheduling              | System/Admin      | Promotion lifecycle           | Background job service          | `SETUP_REQUIRED` | `NOT_RUN`        | Start/end, timezone, pause, resume, expiry               |
| `PROMO-006` | Homepage carousel placement       | Public            | Homepage                      | Promotion delivery service      | `NOT_STARTED`    | `NOT_RUN`        | Real approved active promotions only                     |
| `PROMO-007` | City relevance                    | Public            | Homepage                      | Location and promotion services | `NOT_STARTED`    | `NOT_RUN`        | Approved city relevance and defined fallback             |
| `PROMO-008` | Promotion click destination       | Public            | Carousel                      | Route resolver                  | `NOT_STARTED`    | `NOT_RUN`        | Opens exact approved project/listing                     |
| `PROMO-009` | Promotion billing                 | Builder/Admin     | Promotion checkout            | Billing/payment service         | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Server-calculated amount and verified payment            |
| `PROMO-010` | Promotion impression tracking     | Builder/Admin     | Promotion analytics           | Real analytics service          | `NOT_STARTED`    | `NOT_RUN`        | Real deduplicated events only                            |
| `PROMO-011` | Promotion click tracking          | Builder/Admin     | Promotion analytics           | Real analytics service          | `NOT_STARTED`    | `NOT_RUN`        | Real click events and fraud controls                     |
| `PROMO-012` | Promotion pause/resume            | Builder/Admin     | Promotion management          | Promotion service               | `NOT_STARTED`    | `NOT_RUN`        | Permission and schedule-safe behavior                    |
| `PROMO-013` | Promotion correction/recovery     | Builder/Admin     | Rejected/expired/paused state | Recovery service                | `NOT_STARTED`    | `NOT_RUN`        | Changes, resubmission, restore where allowed             |
| `PROMO-014` | Promotion Admin graph             | Admin/Super Admin | Admin promotion detail        | Connected Admin services        | `NOT_STARTED`    | `NOT_RUN`        | Builder, entity, billing, moderation, metrics, audit     |

---

# 23. Admin and Super Admin Registry

| ID          | Feature                                | Roles                          | Primary context             | Data authority                       | Implementation | Verification | Acceptance requirement                                            |
| ----------- | -------------------------------------- | ------------------------------ | --------------------------- | ------------------------------------ | -------------- | ------------ | ----------------------------------------------------------------- |
| `ADMIN-001` | Internal application shell             | Super Admin, Admin, staff      | Admin routes                | Internal auth and permission service | `NOT_STARTED`      | `NOT_RUN`    | Responsive, permission-aware, no public-shell confusion           |
| `ADMIN-002` | Admin global search                    | Permissioned internal users    | Admin header                | Admin search service                 | `NOT_STARTED`  | `NOT_RUN`    | Users, properties, projects, units, Leads, reports, payments      |
| `ADMIN-003` | User list                              | Permissioned internal users    | Admin Users                 | User Admin service                   | `NOT_STARTED`      | `NOT_RUN`    | Search, filters, sort, pagination, export permission              |
| `ADMIN-004` | User detail overview                   | Permissioned internal users    | Admin User detail           | Connected User Admin service         | `NOT_STARTED`      | `NOT_RUN`    | Full identity, account, role, status, verification summary        |
| `ADMIN-005` | User profile drill-down                | Permissioned internal users    | User detail                 | Profile Admin service                | `NOT_STARTED`  | `NOT_RUN`    | All permitted profile sections clickable                          |
| `ADMIN-006` | User property drill-down               | Permissioned internal users    | User detail → Properties    | Property Admin service               | `NOT_STARTED`  | `NOT_RUN`    | Property list, property detail, Leads, reports, moderation        |
| `ADMIN-007` | User project drill-down                | Permissioned internal users    | User detail → Projects      | Project Admin service                | `NOT_STARTED`  | `NOT_RUN`    | Projects, units, Leads, promotions, moderation                    |
| `ADMIN-008` | User Lead drill-down                   | Permissioned internal users    | User detail → Leads         | Lead Admin service                   | `NOT_STARTED`  | `NOT_RUN`    | Full source, messages, notes, activity, related entities          |
| `ADMIN-009` | User reports drill-down                | Permissioned internal users    | User detail → Reports       | Report Admin service                 | `NOT_STARTED`  | `NOT_RUN`    | Submitted and received reports, status and resolution             |
| `ADMIN-010` | User support/bug drill-down            | Permissioned internal users    | User detail → Support/Bugs  | Support service                      | `NOT_STARTED`  | `NOT_RUN`    | Tickets, bugs, references, status, resolution                     |
| `ADMIN-011` | User billing drill-down                | Billing-permissioned users     | User detail → Billing       | Billing Admin service                | `NOT_STARTED`  | `NOT_RUN`    | Plans, subscriptions, payments, invoices, adjustments             |
| `ADMIN-012` | User notification drill-down           | Permissioned internal users    | User detail → Notifications | Notification Admin service           | `NOT_STARTED`  | `NOT_RUN`    | Event, channel, status, destination, retry                        |
| `ADMIN-013` | User session/device drill-down         | Security-permissioned users    | User detail → Security      | Session Admin service                | `NOT_STARTED`  | `NOT_RUN`    | Sessions, devices, revocation, privacy                            |
| `ADMIN-014` | User security-event drill-down         | Security-permissioned users    | User detail → Security      | Security event service               | `NOT_STARTED`  | `NOT_RUN`    | Auth attempts, restrictions, suspicious activity                  |
| `ADMIN-015` | User moderation history                | Permissioned internal users    | User detail → History       | Moderation service                   | `NOT_STARTED`  | `NOT_RUN`    | All actions with actor, reason, time, before/after                |
| `ADMIN-016` | User audit trail                       | Audit-permissioned users       | User detail → Audit         | Audit service                        | `NOT_STARTED`      | `NOT_RUN`    | Immutable and searchable                                          |
| `ADMIN-017` | User recovery history                  | Recovery-permissioned users    | User detail → Recovery      | Recovery service                     | `NOT_STARTED`  | `NOT_RUN`    | Restores, reopens, status reversals, actor and reason             |
| `ADMIN-018` | User contextual editing                | Permissioned internal users    | User detail                 | User Admin service                   | `NOT_STARTED`  | `NOT_RUN`    | Correct inline/modal/drawer/page pattern                          |
| `ADMIN-019` | User status management                 | Permissioned internal users    | User detail                 | Account-status service               | `NOT_STARTED`      | `NOT_RUN`    | Suspend, unsuspend, restrict, restore, reason, audit              |
| `ADMIN-020` | User role management                   | Super Admin/permissioned Admin | User detail                 | Role service                         | `NOT_STARTED`      | `NOT_RUN`    | Valid role transition, impact preview, reason, audit              |
| `ADMIN-021` | Property moderation queue              | Permissioned internal users    | Admin Properties            | Moderation service                   | `NOT_STARTED`      | `NOT_RUN`    | Filters, assignment, review, actions, SLA state                   |
| `ADMIN-022` | Property detailed review               | Permissioned internal users    | Admin Property detail       | Property Admin service               | `NOT_STARTED`      | `NOT_RUN`    | All fields, media, owner, Leads, reports, history                 |
| `ADMIN-023` | Property moderation recovery           | Permissioned internal users    | Property history/recovery   | Recovery service                     | `NOT_STARTED`  | `NOT_RUN`    | Reopen rejected item and approve after correction                 |
| `ADMIN-024` | Project moderation queue               | Permissioned internal users    | Admin Projects              | Moderation service                   | `NOT_STARTED`      | `NOT_RUN`    | Project, units, media, compliance, history                        |
| `ADMIN-025` | Project detailed review                | Permissioned internal users    | Admin Project detail        | Project Admin service                | `NOT_STARTED`      | `NOT_RUN`    | Builder, units, Leads, reports, promotion, audit                  |
| `ADMIN-026` | Project moderation recovery            | Permissioned internal users    | Project recovery            | Recovery service                     | `NOT_STARTED`  | `NOT_RUN`    | Reopen, request changes, approve, restore                         |
| `ADMIN-027` | Unit management                        | Permissioned internal users    | Admin Project → Units       | Unit Admin service                   | `NOT_STARTED`  | `NOT_RUN`    | Detail, edit, inventory, Leads, audit                             |
| `ADMIN-028` | Lead management                        | Permissioned internal users    | Admin Leads                 | Lead Admin service                   | `NOT_STARTED`      | `NOT_RUN`    | Search, detail, participants, messages, status, report            |
| `ADMIN-029` | Requirement management                 | Permissioned internal users    | Admin Requirements          | Requirement Admin service            | `NOT_STARTED`      | `NOT_RUN`    | Moderation, responses, Leads, recovery                            |
| `ADMIN-030` | Promotion management                   | Permissioned internal users    | Admin Promotions            | Promotion Admin service              | `NOT_STARTED`  | `NOT_RUN`    | Submission, billing, schedule, moderation, metrics                |
| `ADMIN-031` | Report management                      | Permissioned internal users    | Admin Reports               | Report Admin service                 | `NOT_STARTED`      | `NOT_RUN`    | Queue, assignment, evidence, entity, resolution, audit            |
| `ADMIN-032` | Support-ticket management              | Support staff/Admin            | Admin Support               | Support service                      | `NOT_STARTED`      | `NOT_RUN`    | Status, priority, assignment, messages, related entities          |
| `ADMIN-033` | Bug-management system                  | Support/System staff/Admin     | Admin Bugs                  | Bug service                          | `NOT_STARTED`  | `NOT_RUN`    | Reproduction, severity, module, status, fix, verification         |
| `ADMIN-034` | Billing management                     | Billing staff/Admin            | Admin Billing               | Billing Admin service                | `NOT_STARTED`      | `NOT_RUN`    | Plans, subscriptions, payments, invoices, credits, audit          |
| `ADMIN-035` | Provider management                    | Super Admin/permissioned staff | Admin Providers             | Provider configuration service       | `NOT_STARTED`      | `NOT_RUN`    | Presence, mode, health, masked state, no secret values            |
| `ADMIN-036` | Feature-flag management                | Super Admin                    | Admin Settings              | Feature-flag service                 | `NOT_STARTED`  | `NOT_RUN`    | Environment scope, reason, audit, rollback                        |
| `ADMIN-037` | Platform settings                      | Super Admin/permissioned staff | Admin Settings              | Settings service                     | `NOT_STARTED`      | `NOT_RUN`    | Versioning, validation, reason, audit                             |
| `ADMIN-038` | Maintenance mode                       | Super Admin                    | Admin System                | System setting service               | `NOT_STARTED`  | `NOT_RUN`    | Safe activation, allowlist, message, audit, recovery              |
| `ADMIN-039` | Audit-log viewer                       | Audit-permissioned users       | Admin Audit                 | Audit service                        | `NOT_STARTED`      | `NOT_RUN`    | Search, filters, actor, entity, action, reason, before/after      |
| `ADMIN-040` | Recovery center                        | Recovery-permissioned users    | Admin Recovery              | Recovery service                     | `NOT_STARTED`  | `NOT_RUN`    | Deleted, rejected, suspended, failed, and reversible states       |
| `ADMIN-041` | Bulk actions                           | Permissioned internal users    | Admin lists                 | Bulk action service                  | `NOT_STARTED`  | `NOT_RUN`    | Preview, confirmation, reason, partial failure, audit             |
| `ADMIN-042` | Export controls                        | Permissioned internal users    | Admin lists/reports         | Export service                       | `NOT_STARTED`  | `NOT_RUN`    | Permission, privacy, rate limit, audit, expiration                |
| `ADMIN-043` | Admin responsive tables/cards          | Internal roles                 | Mobile/tablet Admin         | Responsive system                    | `NOT_STARTED`  | `NOT_RUN`    | Tables become usable cards or structured scroll where appropriate |
| `ADMIN-044` | Admin contextual drawers               | Internal roles                 | Desktop detail inspection   | Drawer system                        | `NOT_STARTED`  | `NOT_RUN`    | Preserves list context and supports deeper navigation             |
| `ADMIN-045` | Admin mobile full-screen detail        | Internal roles                 | Mobile detail               | Mobile sheet/page system             | `NOT_STARTED`  | `NOT_RUN`    | No cramped popup and clear Back                                   |
| `ADMIN-046` | Admin alignment and stable positioning | Internal roles                 | Entire Admin                | Design system                        | `NOT_STARTED`  | `NOT_RUN`    | Consistent grid, fixed/sticky safety, no overlap                  |
| `ADMIN-047` | Admin permission-denied UX             | Internal roles                 | Restricted modules          | Permission service                   | `NOT_STARTED`  | `NOT_RUN`    | Clear reason and safe return                                      |
| `ADMIN-048` | Admin action reason system             | Internal roles                 | Sensitive mutations         | Reason service                       | `NOT_STARTED`  | `NOT_RUN`    | Required structured or free-text reason stored                    |
| `ADMIN-049` | Admin before/after diff                | Internal roles                 | Sensitive edits             | Audit service                        | `NOT_STARTED`  | `NOT_RUN`    | Reviewable change summary                                         |
| `ADMIN-050` | Admin action recovery                  | Internal roles                 | Failed or mistaken action   | Recovery service                     | `NOT_STARTED`  | `NOT_RUN`    | Reversible where safe, history preserved                          |

---

# 24. Billing, Subscription, Payment, GST, and Invoice Registry

| ID         | Feature                        | Roles                       | Primary context                  | Data/provider                     | Implementation   | Verification     | Acceptance requirement                                     |
| ---------- | ------------------------------ | --------------------------- | -------------------------------- | --------------------------------- | ---------------- | ---------------- | ---------------------------------------------------------- |
| `BILL-001` | Role-based plans               | Public roles/Admin          | Pricing and Admin                | Plan service                      | `NOT_STARTED`        | `NOT_RUN`        | Role-appropriate features, limits, price, status           |
| `BILL-002` | Public pricing page            | Guest and public roles      | Pricing route                    | Plan public-safe view             | `NOT_STARTED`        | `NOT_RUN`        | Clear plans, taxes, terms, and real availability           |
| `BILL-003` | Trial lifecycle                | Eligible public roles/Admin | Subscription                     | Trial service                     | `NOT_STARTED`        | `NOT_RUN`        | Eligibility, start, expiry, conversion, audit              |
| `BILL-004` | Subscription creation          | Public roles                | Checkout                         | Subscription service              | `NOT_STARTED`        | `NOT_RUN`        | Server-side plan and amount validation                     |
| `BILL-005` | Subscription renewal           | Public roles/System         | Billing                          | Subscription and payment services | `SETUP_REQUIRED` | `NOT_RUN`        | Verified payment before extension                          |
| `BILL-006` | Subscription upgrade/downgrade | Public roles/Admin          | Billing settings                 | Subscription service              | `NOT_STARTED`    | `NOT_RUN`        | Proration or defined policy, impact preview, audit         |
| `BILL-007` | Subscription cancellation      | Public roles/Admin          | Billing settings                 | Subscription service              | `NOT_STARTED`    | `NOT_RUN`        | Clear effective date and access impact                     |
| `BILL-008` | Usage and limits               | Public roles/Admin          | Dashboard/billing                | Usage service                     | `NOT_STARTED`        | `NOT_RUN`        | Real usage, clear limits, no fake remaining count          |
| `BILL-009` | Checkout session               | Paying users                | Payment flow                     | Payment service                   | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Server-created order, exact amount, idempotency            |
| `BILL-010` | Payment provider               | Paying users/Admin          | Checkout and webhook             | Approved payment provider         | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Sandbox then live setup and verification                   |
| `BILL-011` | Payment webhook                | System                      | Server webhook route             | Payment provider                  | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Signature verification, idempotency, replay protection     |
| `BILL-012` | Payment success handling       | Paying users                | Post-payment                     | Payment/subscription services     | `NOT_STARTED`    | `NOT_RUN`        | Subscription activates only after verified payment         |
| `BILL-013` | Payment failure handling       | Paying users                | Payment flow                     | Payment service                   | `NOT_STARTED`    | `NOT_RUN`        | Honest failure, retry, no activation                       |
| `BILL-014` | Pending payment handling       | Paying users/Admin          | Billing                          | Payment service                   | `NOT_STARTED`    | `NOT_RUN`        | No premature activation                                    |
| `BILL-015` | Invoice generation             | Paying users/Admin          | Billing                          | Invoice service                   | `SETUP_REQUIRED` | `NOT_RUN`        | Generated only from verified transaction                   |
| `BILL-016` | GST data                       | Paying users/Admin          | Checkout/profile                 | Billing profile service           | `NOT_STARTED`    | `NOT_RUN`        | Valid business details and tax treatment                   |
| `BILL-017` | Invoice download               | Paying users/Admin          | Billing history                  | Private file service              | `SETUP_REQUIRED` | `NOT_RUN`        | Authorized, expiring access                                |
| `BILL-018` | Invoice email                  | Paying users                | External email                   | Email provider                    | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Verified delivery and retry                                |
| `BILL-019` | Refund                         | Permissioned Admin          | Admin payment detail             | Payment/refund service            | `SETUP_REQUIRED` | `NOT_RUN`        | Permission, reason, provider verification, audit           |
| `BILL-020` | Credit note                    | Billing Admin               | Admin invoice detail             | Invoice service                   | `NOT_STARTED`    | `NOT_RUN`        | Linked to original invoice and reason                      |
| `BILL-021` | Manual subscription correction | Permissioned Admin          | Admin billing                    | Subscription Admin service        | `NOT_STARTED`    | `NOT_RUN`        | Reason, impact preview, audit, recovery                    |
| `BILL-022` | Billing history                | Public roles                | Account billing                  | Billing service                   | `NOT_STARTED`        | `NOT_RUN`        | Real plans, payments, invoices, statuses                   |
| `BILL-023` | Billing Admin graph            | Permissioned Admin          | User/payment/subscription detail | Connected billing services        | `NOT_STARTED`    | `NOT_RUN`        | User, plan, payment, invoice, audit, corrections clickable |
| `BILL-024` | Payment reconciliation         | Billing Admin/System        | Admin billing                    | Reconciliation service            | `NOT_STARTED`    | `NOT_RUN`        | Provider and internal records compared                     |
| `BILL-025` | Billing error recovery         | Users/Admin                 | Billing flows                    | Billing service                   | `NOT_STARTED`    | `NOT_RUN`        | Retry, support reference, no duplicate charge              |

---

# 25. Media, Storage, and CDN Registry

| ID          | Feature                         | Roles                  | Primary context            | Data/provider                      | Implementation   | Verification     | Acceptance requirement                                        |
| ----------- | ------------------------------- | ---------------------- | -------------------------- | ---------------------------------- | ---------------- | ---------------- | ------------------------------------------------------------- |
| `MEDIA-001` | Media upload service            | Public roles/Admin     | Posting/profile/CMS        | Approved storage provider          | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Server-authorized uploads and validation                      |
| `MEDIA-002` | Image format validation         | Uploading users        | Upload flow                | Media service                      | `NOT_STARTED`    | `NOT_RUN`        | Valid image content, not extension-only trust                 |
| `MEDIA-003` | Image optimization              | System                 | Upload processing          | Image processor                    | `SETUP_REQUIRED` | `NOT_RUN`        | Web-friendly formats, responsive sizes, quality control       |
| `MEDIA-004` | Image ordering                  | Public roles/Admin     | Listing/project media      | Media relation service             | `NOT_STARTED`    | `NOT_RUN`        | Persisted order and cover selection                           |
| `MEDIA-005` | Image cropping UI               | Public roles/Admin     | Upload flow                | Client preview and server metadata | `NOT_STARTED`    | `NOT_RUN`        | Mobile-friendly crop with safe original retention policy      |
| `MEDIA-006` | Public/private media separation | System                 | Storage                    | Storage policy                     | `NOT_STARTED`    | `NOT_RUN`        | Private documents never use public URLs                       |
| `MEDIA-007` | Signed private access           | Authorized users/Admin | Private documents          | Storage provider                   | `SETUP_REQUIRED` | `NOT_RUN`        | Short-lived authorized URLs                                   |
| `MEDIA-008` | Brochure PDF upload             | Builder/Admin          | Project flow               | Private/public policy by approval  | `SETUP_REQUIRED` | `NOT_RUN`        | Type validation, size/process rules, safe rendering           |
| `MEDIA-009` | Floor-plan media                | Builder/Admin/Public   | Project/unit               | Media service                      | `SETUP_REQUIRED` | `NOT_RUN`        | Correct project/unit relation                                 |
| `MEDIA-010` | Approved video handling         | Builder/Admin/Public   | Project detail             | Media or approved embed service    | `SETUP_REQUIRED` | `NOT_RUN`        | One approved video limit where defined and safe rendering     |
| `MEDIA-011` | Upload progress and retry       | Uploading users        | Upload flow                | Upload service                     | `NOT_STARTED`    | `NOT_RUN`        | Progress, cancel, retry, partial failure                      |
| `MEDIA-012` | Upload abuse protection         | Uploading users        | Upload endpoint            | Rate-limit and scan service        | `NOT_STARTED`    | `NOT_RUN`        | Malicious, executable, unsafe SVG, and abusive upload blocked |
| `MEDIA-013` | Media moderation                | Admin/staff            | Moderation                 | Media Admin service                | `NOT_STARTED`    | `NOT_RUN`        | Inspect, reject, request replacement, audit                   |
| `MEDIA-014` | CDN delivery                    | Public                 | Public media               | CDN provider                       | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Caching, responsive delivery, invalidation                    |
| `MEDIA-015` | Orphan-media cleanup            | System/Admin           | Background operations      | Cleanup job                        | `SETUP_REQUIRED` | `NOT_RUN`        | Safe retention window and audit                               |
| `MEDIA-016` | Media deletion and restore      | Owners/Admin           | Listing/project management | Media service                      | `NOT_STARTED`    | `NOT_RUN`        | Dependency-aware, recoverable where possible                  |
| `MEDIA-017` | Media Admin graph               | Admin/Super Admin      | Entity/media detail        | Media Admin service                | `NOT_STARTED`    | `NOT_RUN`        | Uploader, entity, moderation, storage, audit                  |

---

# 26. Support, Reports, Bugs, and Grievance Registry

| ID        | Feature                      | Roles                              | Primary context            | Data authority           | Implementation | Verification | Acceptance requirement                                          |
| --------- | ---------------------------- | ---------------------------------- | -------------------------- | ------------------------ | -------------- | ------------ | --------------------------------------------------------------- |
| `SUP-001` | Public content report        | Authenticated users where required | Property/project/profile   | Report service           | `NOT_STARTED`      | `NOT_RUN`    | Reason, optional evidence, confirmation, status                 |
| `SUP-002` | User report history          | Reporting user                     | Account/support            | Report service           | `NOT_STARTED`  | `NOT_RUN`    | Submitted reports and resolution state                          |
| `SUP-003` | Admin report queue           | Permissioned staff                 | Admin Reports              | Report Admin service     | `NOT_STARTED`      | `NOT_RUN`    | Assignment, priority, entity, evidence, status                  |
| `SUP-004` | Report investigation         | Permissioned staff                 | Report detail              | Connected report service | `NOT_STARTED`  | `NOT_RUN`    | Reporter, subject, entity, history, related actions             |
| `SUP-005` | Report resolution            | Permissioned staff                 | Report detail              | Report service           | `NOT_STARTED`  | `NOT_RUN`    | Resolution reason, action, notification, audit                  |
| `SUP-006` | Support ticket creation      | Public roles                       | Help/support               | Support service          | `NOT_STARTED`      | `NOT_RUN`    | Category, message, related entity, attachment where allowed     |
| `SUP-007` | Support ticket conversation  | User and support staff             | Ticket detail              | Support message service  | `NOT_STARTED`      | `NOT_RUN`    | Participant scope, status, unread, attachments                  |
| `SUP-008` | Support ticket status        | User and support staff             | Ticket detail              | Support service          | `NOT_STARTED`      | `NOT_RUN`    | Open, in progress, waiting, resolved, reopened as approved      |
| `SUP-009` | Support Admin queue          | Support staff/Admin                | Admin Support              | Support Admin service    | `NOT_STARTED`      | `NOT_RUN`    | Search, priority, assignment, SLA, status                       |
| `SUP-010` | Bug record creation          | Internal staff/System              | Admin Bugs                 | Bug service              | `NOT_STARTED`  | `NOT_RUN`    | Module, severity, reproduction, expected, actual                |
| `SUP-011` | Bug linkage                  | Internal staff                     | Bug detail                 | Connected entity service | `NOT_STARTED`  | `NOT_RUN`    | Routes, users, properties, projects, Leads, logs, release       |
| `SUP-012` | Bug lifecycle                | Internal staff                     | Bug detail                 | Bug service              | `NOT_STARTED`  | `NOT_RUN`    | New, triaged, in progress, fixed, verified, reopened            |
| `SUP-013` | Bug fix verification         | QA/internal staff                  | Bug detail                 | Verification service     | `NOT_STARTED`  | `NOT_RUN`    | Exact reproduction retested                                     |
| `SUP-014` | User-visible issue reference | Users/support                      | Error and support flows    | Reference service        | `NOT_STARTED`  | `NOT_RUN`    | Safe reference ID without exposing internals                    |
| `SUP-015` | Grievance submission         | Public                             | Legal/support              | Grievance service        | `NOT_STARTED`  | `NOT_RUN`    | Identity, category, acknowledgement, tracking                   |
| `SUP-016` | Grievance Admin workflow     | Authorized internal users          | Admin Grievances           | Grievance Admin service  | `NOT_STARTED`  | `NOT_RUN`    | Assignment, deadline, resolution, communication, audit          |
| `SUP-017` | Support deep Admin graph     | Admin/Super Admin                  | User/entity/support detail | Connected Admin services | `NOT_STARTED`  | `NOT_RUN`    | User, entity, reports, bugs, messages, actions, audit clickable |

---

# 27. Security, Privacy, Fraud, and Audit Registry

| ID        | Feature                                   | Scope                          | Data authority             | Implementation   | Verification     | Acceptance requirement                                          |
| --------- | ----------------------------------------- | ------------------------------ | -------------------------- | ---------------- | ---------------- | --------------------------------------------------------------- |
| `SEC-001` | Database RLS                              | Private tables                 | Supabase policies          | `NOT_STARTED`        | `NOT_RUN`        | Guest, wrong-user, wrong-role, staff, and service access tested |
| `SEC-002` | Public-safe views                         | Public pages                   | Database views/services    | `NOT_STARTED`        | `NOT_RUN`        | No private fields in public payload                             |
| `SEC-003` | Server-side authorization                 | All mutations/private reads    | Server service layer       | `NOT_STARTED`        | `NOT_RUN`        | UI hiding never used as sole protection                         |
| `SEC-004` | Route guards                              | Authenticated and Admin routes | Middleware/server layouts  | `NOT_STARTED`        | `NOT_RUN`        | Direct URL protection                                           |
| `SEC-005` | Input validation                          | All forms/APIs                 | Server validation schemas  | `NOT_STARTED`        | `NOT_RUN`        | Client and server validation with safe errors                   |
| `SEC-006` | Output sanitization                       | User-generated content         | Rendering service          | `NOT_STARTED`    | `NOT_RUN`        | Prevents unsafe HTML/script rendering                           |
| `SEC-007` | Authentication rate limiting              | Auth                           | Rate-limit service         | `NOT_STARTED`    | `NOT_RUN`        | Login, OTP send, OTP verify, resend protected                   |
| `SEC-008` | Inquiry rate limiting                     | Inquiry                        | Rate-limit service         | `NOT_STARTED`    | `NOT_RUN`        | Spam and automated abuse limited                                |
| `SEC-009` | Search rate limiting                      | Search APIs                    | Rate-limit service         | `NOT_STARTED`    | `NOT_RUN`        | Scraping and denial patterns controlled                         |
| `SEC-010` | Admin action rate and permission controls | Admin                          | Authorization service      | `NOT_STARTED`    | `NOT_RUN`        | High-risk and bulk actions controlled                           |
| `SEC-011` | Secure session cookies                    | Auth                           | Session service            | `NOT_STARTED`        | `NOT_RUN`        | Secure, HttpOnly, SameSite, environment-correct                 |
| `SEC-012` | CSRF protection                           | Relevant mutations             | Framework/security layer   | `NOT_STARTED`    | `NOT_RUN`        | Appropriate same-site and token controls                        |
| `SEC-013` | Security headers                          | Entire application             | Hosting/framework config   | `NOT_STARTED`    | `NOT_RUN`        | CSP, HSTS in production, content-type, framing, referrer policy |
| `SEC-014` | Secret management                         | Providers and database         | Environment/secret manager | `NOT_STARTED`        | `NOT_RUN`        | No client, docs, logs, or repository leakage                    |
| `SEC-015` | Log redaction                             | Entire system                  | Logging service            | `NOT_STARTED`    | `NOT_RUN`        | OTP, secrets, private messages, payment data redacted           |
| `SEC-016` | Audit logging                             | Sensitive actions              | Audit service              | `NOT_STARTED`        | `NOT_RUN`        | Actor, action, entity, reason, before/after, timestamp          |
| `SEC-017` | Audit immutability                        | Audit records                  | RLS/database policy        | `NOT_STARTED`    | `NOT_RUN`        | Unauthorized update/delete blocked                              |
| `SEC-018` | Privacy consent                           | Public users                   | Consent service            | `NOT_STARTED`    | `NOT_RUN`        | Terms, privacy, contact sharing, marketing where applicable     |
| `SEC-019` | Data minimization                         | Entire product                 | Data model and services    | `NOT_STARTED`    | `NOT_RUN`        | Collect and expose only required data                           |
| `SEC-020` | Private contact protection                | Public marketplace             | Public-safe services       | `NOT_STARTED`    | `NOT_RUN`        | No unauthorized exposure in HTML, payload, metadata, logs       |
| `SEC-021` | Private document protection               | Verification/billing/media     | Storage and RLS            | `NOT_STARTED`    | `NOT_RUN`        | Signed access and permission checks                             |
| `SEC-022` | File upload security                      | Media                          | Media service              | `NOT_STARTED`    | `NOT_RUN`        | Type/content validation, malware strategy, access isolation     |
| `SEC-023` | Payment security                          | Billing                        | Payment service            | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Signature, idempotency, amount validation, replay protection    |
| `SEC-024` | Fraud reporting                           | Public and Admin               | Report/fraud service       | `NOT_STARTED`    | `NOT_RUN`        | Reporting, review, status, action, recovery                     |
| `SEC-025` | Suspicious activity events                | Security staff/Admin           | Security service           | `NOT_STARTED`    | `NOT_RUN`        | Auth and abuse events visible and actionable                    |
| `SEC-026` | Account restriction                       | Security/Admin                 | Account service            | `NOT_STARTED`    | `NOT_RUN`        | Permission, reason, notification, audit, recovery               |
| `SEC-027` | Data export privacy                       | Admin/user exports             | Export service             | `NOT_STARTED`    | `NOT_RUN`        | Scope, permission, expiry, audit                                |
| `SEC-028` | Data retention                            | Entire product                 | Retention policy/jobs      | `NOT_STARTED`    | `NOT_RUN`        | Defined retention and deletion lifecycle                        |
| `SEC-029` | Backup security                           | Operations                     | Backup service             | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Encryption, access, retention, restore verification             |
| `SEC-030` | Incident response                         | Operations                     | Incident process           | `NOT_STARTED`    | `NOT_RUN`        | Detect, contain, communicate, recover, review                   |

---

# 28. Performance, Scale, Reliability, and Observability Registry

| ID         | Feature                        | Scope                            | Data/provider                | Implementation   | Verification     | Acceptance requirement                                         |
| ---------- | ------------------------------ | -------------------------------- | ---------------------------- | ---------------- | ---------------- | -------------------------------------------------------------- |
| `PERF-001` | Rendering strategy             | Public and app routes            | Next.js                      | `NOT_STARTED`    | `NOT_RUN`        | SSR/ISR/static/client choices documented per route             |
| `PERF-002` | Public page caching            | Public pages                     | CDN/framework cache          | `NOT_STARTED`    | `NOT_RUN`        | Safe freshness and invalidation                                |
| `PERF-003` | Application data caching       | Authenticated app                | Server cache                 | `NOT_STARTED`    | `NOT_RUN`        | User-scoped data never leaks across sessions                   |
| `PERF-004` | Database indexes               | Database                         | Supabase PostgreSQL          | `NOT_STARTED`    | `NOT_RUN`        | Query plans and high-use filters optimized                     |
| `PERF-005` | Pagination                     | Large lists                      | Query services               | `NOT_STARTED`        | `NOT_RUN`        | No unbounded data loads                                        |
| `PERF-006` | Cursor pagination              | Activity and Lead streams        | Query services               | `NOT_STARTED`    | `NOT_RUN`        | Stable large-stream pagination                                 |
| `PERF-007` | Database connection management | Server runtime                   | Supabase/hosting             | `NOT_STARTED`    | `NOT_RUN`        | Compatible pooling and concurrency behavior                    |
| `PERF-008` | Background queue               | Email, media, expiry, processing | Queue provider               | `SETUP_REQUIRED` | `NOT_RUN`        | Idempotent, observable, retry-safe jobs                        |
| `PERF-009` | Scheduled jobs                 | Expiry and maintenance           | Cron provider                | `SETUP_REQUIRED` | `NOT_RUN`        | Safe schedules, idempotency, locking                           |
| `PERF-010` | Image performance              | Public pages                     | Media/CDN                    | `SETUP_REQUIRED` | `NOT_RUN`        | Responsive images, lazy loading, dimensions, quality           |
| `PERF-011` | Code splitting                 | Entire application               | Next.js build                | `NOT_STARTED`    | `NOT_RUN`        | Heavy Admin and editor code isolated                           |
| `PERF-012` | Core Web Vitals                | Public/mobile                    | Performance tools            | `NOT_STARTED`    | `NOT_RUN`        | Measured mobile targets                                        |
| `PERF-013` | API response monitoring        | Server APIs                      | Monitoring provider          | `SETUP_REQUIRED` | `NOT_RUN`        | Latency, error, volume, saturation                             |
| `PERF-014` | Database monitoring            | Database                         | Supabase/monitoring          | `SETUP_REQUIRED` | `NOT_RUN`        | Slow queries, connections, locks, storage                      |
| `PERF-015` | Error monitoring               | Entire product                   | Error provider               | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Source maps, redaction, alerts                                 |
| `PERF-016` | Uptime monitoring              | Public and critical endpoints    | Monitoring provider          | `SETUP_REQUIRED` | `SETUP_REQUIRED` | External checks and alert routing                              |
| `PERF-017` | Graceful degradation           | Provider-backed features         | Service layer                | `NOT_STARTED`    | `NOT_RUN`        | Core site remains usable during optional-provider failure      |
| `PERF-018` | Load-shedding behavior         | High traffic                     | Infrastructure/service layer | `NOT_STARTED`    | `NOT_RUN`        | Protects core read and auth paths                              |
| `PERF-019` | Staged load testing            | Entire system                    | Load-test environment        | `SETUP_REQUIRED` | `NOT_RUN`        | Gradual concurrency, bottleneck analysis, no fabricated result |
| `PERF-020` | High-concurrency architecture  | Entire system                    | Hosting/database/CDN         | `NOT_STARTED`    | `NOT_RUN`        | Designed for horizontal scale and measured before claims       |
| `PERF-021` | Availability objectives        | Production                       | Operations                   | `NOT_STARTED`    | `NOT_RUN`        | Measurable service objectives                                  |
| `PERF-022` | Recovery-time objective        | Production                       | Backup/operations            | `NOT_STARTED`    | `NOT_RUN`        | Defined and tested                                             |
| `PERF-023` | Recovery-point objective       | Production                       | Backup/operations            | `NOT_STARTED`    | `NOT_RUN`        | Defined and tested                                             |
| `PERF-024` | Capacity planning              | Production                       | Infrastructure               | `NOT_STARTED`    | `NOT_RUN`        | Traffic, storage, database, media, provider cost reviewed      |
| `PERF-025` | Performance regression gate    | CI/release                       | Automated checks             | `NOT_STARTED`    | `NOT_RUN`        | Critical route performance compared before release             |

---

# 29. Provider and Environment Registry

| ID             | Feature                       | Scope                          | Provider                                   | Implementation   | Verification     | Acceptance requirement                                          |
| -------------- | ----------------------------- | ------------------------------ | ------------------------------------------ | ---------------- | ---------------- | --------------------------------------------------------------- |
| `PROVIDER-001` | Supabase Auth                 | Authentication                 | Supabase                                   | `NOT_STARTED`        | `NOT_RUN`        | Final auth flow and production configuration verified           |
| `PROVIDER-002` | Supabase PostgreSQL           | Primary data                   | Supabase                                   | `NOT_STARTED`        | `NOT_RUN`        | Schema, migrations, indexes, backups, performance verified      |
| `PROVIDER-003` | Supabase RLS                  | Data protection                | Supabase                                   | `NOT_STARTED`        | `NOT_RUN`        | Complete policy tests                                           |
| `PROVIDER-004` | Supabase server client        | Server data                    | Supabase                                   | `NOT_STARTED`        | `NOT_RUN`        | Server/client boundary verified                                 |
| `PROVIDER-005` | SMS OTP provider              | OTP only                       | To be selected in provider phase           | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Real test, production test, cost, limits, privacy               |
| `PROVIDER-006` | Email provider                | External notifications         | To be selected in provider phase           | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Domain authentication, templates, retries, delivery test        |
| `PROVIDER-007` | Payment provider              | Billing                        | To be selected/confirmed in provider phase | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Orders, webhook, refund, reconciliation                         |
| `PROVIDER-008` | Media storage                 | Images/documents               | To be selected in provider phase           | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Public/private policy, signed access, lifecycle                 |
| `PROVIDER-009` | CDN                           | Public media/assets            | To be selected in provider phase           | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Cache, purge, responsive delivery                               |
| `PROVIDER-010` | Error monitoring              | Diagnostics                    | To be selected in operations phase         | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Redaction, alerts, source maps                                  |
| `PROVIDER-011` | Product analytics             | Approved analytics             | To be selected if enabled                  | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Consent, event taxonomy, no private-data leakage                |
| `PROVIDER-012` | Background jobs               | Async work                     | To be selected in operations phase         | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Retries, idempotency, visibility                                |
| `PROVIDER-013` | Cron scheduling               | Scheduled work                 | Hosting/job provider                       | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Secure invocation and locking                                   |
| `PROVIDER-014` | Backup provider               | Recovery                       | Supabase/approved backup solution          | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Automated backup and real restore test                          |
| `PROVIDER-015` | Hosting                       | Application runtime            | User-provided platform                     | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Build, environment, scale, logs, rollback                       |
| `PROVIDER-016` | Domain and DNS                | Production access              | User-provided domain                       | `SETUP_REQUIRED` | `SETUP_REQUIRED` | DNS, SSL, redirects, email DNS records                          |
| `PROVIDER-017` | Provider Admin status         | Internal operations            | Provider service                           | `NOT_STARTED`        | `NOT_RUN`        | Presence, mode, health, last verified, no secret values         |
| `PROVIDER-018` | Provider failure fallback     | Entire product                 | Service abstraction                        | `NOT_STARTED`    | `NOT_RUN`        | Setup Required, Blocked, retry, or safe fallback shown honestly |
| `PROVIDER-019` | Provider configuration audit  | Super Admin                    | Audit service                              | `NOT_STARTED`    | `NOT_RUN`        | Every change reasoned and logged                                |
| `PROVIDER-020` | Environment variable registry | Development/staging/production | Environment system                         | `NOT_STARTED`    | `NOT_RUN`        | `.env.example` names only, server/client classification         |

---

# 30. Skills and Agent Workflow Registry

Phase 0 result (2026-07-12): all nine candidates installed (four in the first batch, five in the user-instructed follow-up incl. BMAD v6.10.0 and Spec Kit v0.12.11; statuses, caveats, responsibility map, and rollback in `PROJECT_STATE.md` Section 13). `DONE` below means installed and smoke-tested, pending Phase 0 manual verification.

| ID          | Skill                           | Repository                                                    | Planned role                                          | Implementation | Verification | Acceptance requirement                                           |
| ----------- | ------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- | -------------- | ------------ | ---------------------------------------------------------------- |
| `SKILL-001` | BMAD Method                     | `https://github.com/bmad-code-org/BMAD-METHOD`                | Product discovery, planning, implementation structure | `DONE` | `PASS`    | Current repository inspected, safely installed, smoke tested     |
| `SKILL-002` | UI/UX Agent Skill System        | `https://github.com/sergekostenchuk/ui-ux-agent-skill-system` | UX architecture and interface reasoning               | `DONE` | `PASS`    | Compatible skill invoked in UX phases                            |
| `SKILL-003` | Interaction Design Skills       | `https://github.com/rastian/interaction-design-skills`        | State transitions, navigation, interaction semantics  | `DONE` | `PASS`    | Used for navigation matrices and journey audits                  |
| `SKILL-004` | GitHub Spec Kit                 | `https://github.com/github/spec-kit`                          | Specifications and acceptance criteria                | `DONE` | `PASS`    | Project authority remains higher than generated specifications   |
| `SKILL-005` | UI/UX Pro Max Skill             | `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`     | Visual hierarchy and product UI quality               | `DONE` | `PASS`    | Supports original Apple-inspired UI without copying              |
| `SKILL-006` | LottieFiles Motion Design Skill | `https://github.com/LottieFiles/motion-design-skill`          | Purposeful accessible motion                          | `DONE` | `PASS`    | Reduced-motion-safe and performance-safe usage                   |
| `SKILL-007` | Responsive Craft                | `https://github.com/kylezantos/responsive-craft`              | Mobile, tablet, desktop responsive implementation     | `DONE` | `PASS`    | Required widths tested                                           |
| `SKILL-008` | Storymap Skill                  | `https://github.com/MartinForReal/storymap-skill`             | User journeys and feature slicing                     | `DONE` | `PASS`    | Role journeys and deep drill-down map created                    |
| `SKILL-009` | Shadcn Admin Skill              | `https://github.com/muxiaomu001/shadcn-admin-skill`           | Admin architecture and components                     | `DONE` | `PASS`    | Used only where compatible with final Admin rules                |
| `SKILL-010` | Skill security review           | All external skills                                           | Installation safety                                   | `DONE` | `PASS`    | Install scripts, dependencies, permissions, license reviewed     |
| `SKILL-011` | Skill compatibility review      | All external skills                                           | Project compatibility                                 | `DONE` | `PASS`    | Next.js, TypeScript, Tailwind, ShadCN, Claude Code compatibility |
| `SKILL-012` | Skill conflict resolution       | All external skills                                           | Authority protection                                  | `DONE` | `PASS`    | Conflicting skill instruction rejected or isolated               |
| `SKILL-013` | Skill version tracking          | All installed skills                                          | Reproducibility                                       | `DONE` | `PASS`    | Commit/version and install path recorded                         |
| `SKILL-014` | Skill smoke testing             | All installed skills                                          | Operational validation                                | `DONE` | `PASS`    | Skill can be invoked before phase usage                          |
| `SKILL-015` | Skill rollback                  | All installed skills                                          | Recovery                                              | `DONE` | `PASS`    | Installation can be safely reverted                              |

---

# 31. QA and Manual Verification Registry

| ID       | Feature                              | Scope                     | Implementation   | Verification     | Acceptance requirement                                |
| -------- | ------------------------------------ | ------------------------- | ---------------- | ---------------- | ----------------------------------------------------- |
| `QA-001` | Dependency installation verification | Repository                | `NOT_STARTED`    | `NOT_RUN`        | Clean installation succeeds                           |
| `QA-002` | Lint verification                    | Entire codebase           | `NOT_STARTED`    | `NOT_RUN`        | No unresolved lint failure                            |
| `QA-003` | Typecheck verification               | Entire codebase           | `NOT_STARTED`    | `NOT_RUN`        | No TypeScript error                                   |
| `QA-004` | Unit tests                           | Critical logic            | `NOT_STARTED`    | `NOT_RUN`        | Validation, authorization, service logic covered      |
| `QA-005` | Integration tests                    | Database/services         | `NOT_STARTED`    | `NOT_RUN`        | Real service interaction and failure behavior         |
| `QA-006` | End-to-end tests                     | Critical journeys         | `NOT_STARTED`    | `NOT_RUN`        | Auth, search, posting, inquiry, Leads, Admin, billing |
| `QA-007` | Production build                     | Entire application        | `NOT_STARTED`    | `NOT_RUN`        | Build passes in production mode                       |
| `QA-008` | Live development-server verification | Changed routes            | `NOT_STARTED`    | `NOT_RUN`        | Server URL and port confirmed                         |
| `QA-009` | Live browser verification            | Changed routes            | `NOT_STARTED`    | `NOT_RUN`        | Actual interaction, not code-only review              |
| `QA-010` | Small-mobile verification            | Relevant UI               | `NOT_STARTED`    | `NOT_RUN`        | 320px and 360px                                       |
| `QA-011` | Modern-mobile verification           | Relevant UI               | `NOT_STARTED`    | `NOT_RUN`        | 390px and 430px                                       |
| `QA-012` | Tablet verification                  | Relevant UI               | `NOT_STARTED`    | `NOT_RUN`        | 768px and 1024px                                      |
| `QA-013` | Desktop verification                 | Relevant UI               | `NOT_STARTED`    | `NOT_RUN`        | 1366px and 1440px                                     |
| `QA-014` | Wide-screen verification             | Relevant UI               | `NOT_STARTED`    | `NOT_RUN`        | Stable maximum width and alignment                    |
| `QA-015` | Text clipping audit                  | Entire UI                 | `NOT_STARTED`    | `NOT_RUN`        | No clipping, overlap, broken wrap                     |
| `QA-016` | Sticky/fixed overlap audit           | Entire UI                 | `NOT_STARTED`    | `NOT_RUN`        | No covered content or keyboard obstruction            |
| `QA-017` | Accessibility verification           | Entire UI                 | `NOT_STARTED`    | `NOT_RUN`        | Keyboard, focus, semantic labels, contrast, touch     |
| `QA-018` | Console-error verification           | Browser routes            | `NOT_STARTED`    | `NOT_RUN`        | No unresolved relevant console errors                 |
| `QA-019` | Network-error verification           | Browser routes            | `NOT_STARTED`    | `NOT_RUN`        | Failed requests handled and investigated              |
| `QA-020` | Loading-state verification           | Data screens              | `NOT_STARTED`    | `NOT_RUN`        | Skeleton and processing states                        |
| `QA-021` | Empty-state verification             | Data screens              | `NOT_STARTED`    | `NOT_RUN`        | First-use, filtered, and no-result                    |
| `QA-022` | Error-recovery verification          | Data and action flows     | `NOT_STARTED`    | `NOT_RUN`        | Retry and safe destination                            |
| `QA-023` | Auth journey verification            | Auth                      | `NOT_STARTED`    | `NOT_RUN`        | First-time, returning, unregistered, redirect, expiry |
| `QA-024` | List-detail-return verification      | Search, dashboards, Admin | `NOT_STARTED`    | `NOT_RUN`        | State preserved                                       |
| `QA-025` | Deep-clickable graph verification    | Entire product            | `NOT_STARTED`    | `NOT_RUN`        | Every expected relationship works                     |
| `QA-026` | Role-permission verification         | All roles                 | `NOT_STARTED`    | `NOT_RUN`        | Correct access and denial                             |
| `QA-027` | RLS verification                     | Private data              | `NOT_STARTED`    | `NOT_RUN`        | Guest, wrong-user, wrong-role, service, Admin         |
| `QA-028` | Provider setup-state verification    | Provider-backed features  | `NOT_STARTED`    | `NOT_RUN`        | Honest Setup Required/Blocked behavior                |
| `QA-029` | Real provider verification           | Configured providers      | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Real send/payment/upload/health test                  |
| `QA-030` | Payment verification                 | Billing                   | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Success, failure, pending, webhook, duplicate         |
| `QA-031` | Backup restore verification          | Operations                | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Real restore in safe environment                      |
| `QA-032` | Load-test verification               | Performance               | `SETUP_REQUIRED` | `NOT_RUN`        | Staged real results and bottleneck fixes              |
| `QA-033` | Security verification                | Entire product            | `NOT_STARTED`    | `NOT_RUN`        | Auth, authorization, secrets, headers, rate limits    |
| `QA-034` | Deployment smoke test                | Production                | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Domain, SSL, routes, providers, monitoring            |
| `QA-035` | Rollback verification                | Deployment                | `NOT_STARTED`    | `NOT_RUN`        | Application and migration rollback plan tested        |
| `QA-036` | Development-server persistence       | Verification sessions     | `NOT_STARTED`    | `NOT_RUN`        | Server remains running after verification when safe   |
| `QA-037` | Final production sign-off            | Entire project            | `NOT_STARTED`    | `NOT_RUN`        | All critical features and operations pass             |

---

# 32. Deployment and Operations Registry

| ID        | Feature                       | Scope              | Provider/infrastructure      | Implementation   | Verification     | Acceptance requirement                                              |
| --------- | ----------------------------- | ------------------ | ---------------------------- | ---------------- | ---------------- | ------------------------------------------------------------------- |
| `OPS-001` | Local development environment | Development        | Local runtime                | `NOT_STARTED`        | `NOT_RUN`        | Documented install, run, test, and migration commands               |
| `OPS-002` | Environment-variable template | All environments   | `.env.example`               | `NOT_STARTED`        | `NOT_RUN`        | Names, descriptions, client/server classification, no secrets       |
| `OPS-003` | Development environment       | Development        | Supabase/dev providers       | `NOT_STARTED`        | `NOT_RUN`        | Safe non-production behavior                                        |
| `OPS-004` | Test environment              | Automated QA       | Test services                | `NOT_STARTED`    | `NOT_RUN`        | Isolated repeatable test data                                       |
| `OPS-005` | Staging environment           | Pre-production     | Hosting and providers        | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Production-like verification without live-user impact               |
| `OPS-006` | Production hosting            | Production         | User-provided hosting        | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Build, runtime, scaling, logs, secrets, rollback                    |
| `OPS-007` | Domain configuration          | Production         | User-provided domain         | `SETUP_REQUIRED` | `SETUP_REQUIRED` | DNS, canonical domain, redirects                                    |
| `OPS-008` | SSL configuration             | Production         | Hosting/domain               | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Valid secure transport                                              |
| `OPS-009` | Production database migration | Production         | Supabase                     | `NOT_STARTED`    | `NOT_RUN`        | Backup, migration, verification, rollback                           |
| `OPS-010` | CI checks                     | Repository         | CI provider                  | `NOT_STARTED`    | `NOT_RUN`        | Lint, typecheck, tests, build                                       |
| `OPS-011` | Deployment pipeline           | Staging/production | Hosting/CI                   | `NOT_STARTED`    | `NOT_RUN`        | Controlled environment promotion                                    |
| `OPS-012` | Release checklist             | Production         | Operations process           | `NOT_STARTED`    | `NOT_RUN`        | Code, DB, providers, legal, monitoring, rollback                    |
| `OPS-013` | Monitoring alerts             | Production         | Monitoring providers         | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Errors, uptime, latency, database, queues                           |
| `OPS-014` | Backup schedule               | Production         | Backup provider              | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Automated and retained                                              |
| `OPS-015` | Restore procedure             | Production         | Backup provider              | `SETUP_REQUIRED` | `SETUP_REQUIRED` | Documented and tested                                               |
| `OPS-016` | Application rollback          | Production         | Git/hosting                  | `NOT_STARTED`    | `NOT_RUN`        | Previous stable version recoverable                                 |
| `OPS-017` | Database rollback             | Production         | Supabase migrations          | `NOT_STARTED`    | `NOT_RUN`        | Safe documented rollback or forward-fix strategy                    |
| `OPS-018` | Provider rollback             | Production         | External providers           | `NOT_STARTED`    | `NOT_RUN`        | Safe disable/fallback without false success                         |
| `OPS-019` | Incident response             | Production         | Operations                   | `NOT_STARTED`    | `NOT_RUN`        | Severity, owner, communication, containment, recovery               |
| `OPS-020` | Post-deployment verification  | Production         | Live system                  | `NOT_STARTED`    | `NOT_RUN`        | Auth, search, listings, inquiry, Leads, Admin, provider smoke tests |
| `OPS-021` | Production-data protection    | Production         | Database/storage             | `NOT_STARTED`    | `NOT_RUN`        | No seed/demo contamination and safe access                          |
| `OPS-022` | Cost and quota monitoring     | Production         | Providers/hosting            | `NOT_STARTED`    | `NOT_RUN`        | Budget, usage, thresholds, alerts                                   |
| `OPS-023` | Operational Admin health view | Super Admin        | Admin System                 | `NOT_STARTED`    | `NOT_RUN`        | Provider, queue, database, deployment, backup status                |
| `OPS-024` | Graceful maintenance flow     | Production         | Maintenance service          | `NOT_STARTED`    | `NOT_RUN`        | User-safe message and privileged access                             |
| `OPS-025` | Final production handoff      | Project owner      | Documentation and operations | `NOT_STARTED`    | `NOT_RUN`        | Credentials ownership, runbooks, support, backup, rollback          |

---

# 33. Cross-Entity Deep Drill-Down Registry

The following navigation relationships are mandatory.

Each relationship must be implemented, permission-protected, responsive, and verified.

| ID          | Relationship                       | Required destination chain                                        | Implementation | Verification |
| ----------- | ---------------------------------- | ----------------------------------------------------------------- | -------------- | ------------ |
| `GRAPH-001` | Owner property to Lead             | Dashboard → Properties → Property → Leads → Lead → Activity       | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-002` | Broker listing to Lead             | Dashboard → Listings → Property → Leads → Lead → Messages/Notes   | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-003` | Builder project to Lead            | Dashboard → Projects → Project → Leads → Lead → Activity          | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-004` | Builder project unit to Lead       | Project → Units → Unit → Leads → Lead                             | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-005` | Search to detail and return        | Search → Result → Detail → Return to preserved search             | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-006` | Notification to entity             | Notification → Exact related entity/detail                        | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-007` | Requirement to proposal/Lead       | Requirement → Response → Lead → Messages/Activity                 | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-008` | Admin user to profile              | Users → User → Profile section → Contextual edit                  | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-009` | Admin user to properties           | User → Properties → Property → Leads/Reports/History              | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-010` | Admin user to projects             | User → Projects → Project → Units/Leads/Promotion                 | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-011` | Admin user to Leads                | User → Leads → Lead → Messages/Entity/Activity                    | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-012` | Admin user to billing              | User → Subscription → Payment → Invoice → Audit                   | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-013` | Admin user to reports              | User → Reports → Report → Entity → Resolution                     | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-014` | Admin user to bugs/support         | User → Support/Bug → Detail → Related entity → Fix/status         | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-015` | Moderation recovery                | Queue → Entity → Rejected history → Reopen → Review → Approve     | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-016` | Soft-delete recovery               | Entity → Deleted state → Recovery center → Restore → History      | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-017` | Provider issue to affected feature | Provider status → Failure → Affected module → Recovery/setup      | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-018` | Audit to entity                    | Audit event → Actor → Entity → Before/after → Related action      | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-019` | Bug to verification                | Bug → Reproduction → Fix → Changed files → Verification result    | `NOT_STARTED`  | `NOT_RUN`    |
| `GRAPH-020` | Promotion to billing and project   | Promotion → Project/listing → Builder → Payment → Metrics → Audit | `NOT_STARTED`  | `NOT_RUN`    |

---


## Phase 1 exact route map (source of truth: `src/lib/routes.ts`)

| Route | Area / host | Access | Purpose | State |
| ----- | ----------- | ------ | ------- | ----- |
| `/` | public | public | Homepage with city selector | Implemented (foundation shell) |
| `/search` | public | public | Search results | Planned |
| `/property/[slug]` | public | public | Property detail | Planned |
| `/project/[slug]` | public | public | Builder project detail | Planned |
| `/city/[city]` | public | public | City SEO landing page | Planned (flag: city_seo_pages) |
| `/profile/[slug]` | public | public | Public Broker/Builder profile | Planned |
| `/pricing` | public | public | Plans and pricing | Planned |
| `/help` | public | public | Help and support | Planned |
| `/blog`, `/blog/[slug]` | public | public | Blog (flag: blog) | Planned |
| `/legal/terms`, `/legal/privacy` | public | public | Legal pages | Planned |
| `/login` | auth | guest_only | Mobile-number OTP login | Planned |
| `/register` | auth | guest_only | Three-role registration | Planned |
| `/owner` | owner (public host section) | role: owner | Owner dashboard | Planned |
| `/owner/properties` | owner | role: owner | Owner property list | Planned |
| `/owner/leads` | owner | role: owner | Owner Leads workspace | Planned |
| `/` | broker host | role: broker | Broker dashboard | Planned |
| `/listings` | broker host | role: broker | Broker listings | Planned |
| `/leads` | broker host | role: broker | Broker Leads workspace | Planned |
| `/` | builder host | role: builder | Builder dashboard | Planned |
| `/projects` | builder host | role: builder | Builder projects | Planned |
| `/leads` | builder host | role: builder | Builder Leads workspace | Planned |
| `/` | internal host | internal | Admin overview | Planned |
| `/users` | internal host | internal | User management | Planned |
| `/moderation` | internal host | internal | Moderation queues | Planned |
| `/audit` | internal host | internal | Audit log | Planned |

Rules verified in Phase 1: public canonical pages exist only on the public host; role hosts never duplicate canonical public content; planned routes are not linked or rendered anywhere; access rules are typed per route.
# 34. Feature Release Gates

A feature may move to `PASS` only when all applicable gates succeed.

## Gate A — Product definition

* feature appears in registry
* role and scope are defined
* entry and exit paths are defined
* primary and secondary actions are defined
* states are defined
* Admin visibility is defined
* recovery is defined

## Gate B — Technical implementation

* route or contextual interaction exists
* server service exists
* validation exists
* database migration exists where required
* tables and indexes exist
* RLS exists
* permissions exist
* audit exists where required
* provider abstraction exists where required
* errors are handled

## Gate C — UI and interaction

* correct page/modal/drawer/sheet pattern
* mobile-first implementation
* tablet implementation
* desktop implementation
* loading state
* empty state
* error state
* success state
* disabled/setup-required state
* Back/Close/Cancel behavior
* browser Back behavior
* state preservation
* accessibility
* no clipping or overlap

## Gate D — Verification

* lint
* typecheck
* relevant tests
* production build
* live development server
* live browser
* required widths
* end-to-end journey
* wrong-user and wrong-role checks
* RLS check
* console check
* network check
* provider check
* documentation update

## Gate E — Production

* production environment configured
* real provider verified
* domain and SSL verified
* monitoring active
* backup active
* restore tested
* rollback documented
* security reviewed
* load/performance reviewed
* critical bugs closed
* production smoke test passed

---

# 35. Initial Registry State Summary

### Phase -1 audit note (2026-07-12)

The Phase -1 repository audit found **no application code in the repository** — only the 13 documentation files exist. Every implementation status previously recorded as `PARTIAL` was unevidenced and has been normalized to `NOT_STARTED`. No feature entry was removed. Verification statuses remain `NOT_RUN`. Provider-dependent features remain `SETUP_REQUIRED` where recorded. If a legacy codebase exists outside this repository, the user must provide it before any status may be upgraded; statuses may only change with repository evidence. Full audit detail: `PROJECT_STATE.md` Section 6.

| Category                           | Current state                                   |
| ---------------------------------- | ----------------------------------------------- |
| Documentation authority            | `DONE` — all 13 files present                   |
| Repository audit                   | `PASS` — Phase -1 implemented and verified 2026-07-12 |
| Database foundation                | `PASS` — Phase 2 verified: constraints, RLS matrix, views, query plans (2026-07-12) |
| Skills setup                       | `PASS` — all 9 installed and verified (2026-07-12; caveats in PROJECT_STATE.md Section 13) |
| Role architecture                  | `PARTIAL` — Phase 1 constants/validators done; RLS and route enforcement pending |
| Authentication                     | `NOT_STARTED` — no code exists in repository     |
| Apple-inspired design system       | `NOT_STARTED`                                   |
| Public marketplace                 | `NOT_STARTED` — no code exists in repository     |
| Gujarat location hierarchy         | `NOT_STARTED` — no code exists in repository          |
| Search and SEO                     | `NOT_STARTED` — no code exists in repository          |
| Properties                         | `NOT_STARTED` — no code exists in repository  |
| Projects                           | `NOT_STARTED` — no code exists in repository  |
| Units                              | `NOT_STARTED` — no code exists in repository     |
| Direct Inquiry                     | `NOT_STARTED`                                   |
| Unified Leads                      | `NOT_STARTED` — no code exists in repository |
| Dashboards                         | `NOT_STARTED` — no code exists in repository      |
| Builder promotion carousel         | `NOT_STARTED`                                   |
| Admin/Super Admin                  | `NOT_STARTED` — no code exists in repository        |
| Billing and payment                | `NOT_STARTED` plus provider `SETUP_REQUIRED`          |
| Media                              | `SETUP_REQUIRED`                                |
| Email                              | `SETUP_REQUIRED`                                |
| SMS OTP                            | `SETUP_REQUIRED`                                |
| Security/RLS verification          | `NOT_STARTED` under new authority               |
| Performance and scale              | `NOT_STARTED`                                   |
| QA and live-browser verification   | `NOT_STARTED`                                   |
| Deployment and production sign-off | `SETUP_REQUIRED`                                |

---

# 36. Required Registry Maintenance Rule

Claude must never mark an entire module complete while one of its critical child features remains:

* `NOT_STARTED`
* `PARTIAL`
* `FAIL`
* `BLOCKED`
* `SETUP_REQUIRED`

unless the module status clearly reflects the incomplete child feature.

A parent feature may be:

* `DONE` when implementation exists but verification is pending
* `PARTIAL` when required child work remains
* `PASS` only when every release-critical child feature passes

Provider-dependent features may pass their honest disabled or Setup Required UI behavior, but may not be marked `LIVE_READY`.

---

# 37. Registry Handoff Summary

The next Claude session must understand:

1. This registry is the canonical inventory.
2. Every approved feature must remain represented.
3. Exact routes, tables, migrations, services, and code paths must be added during repository audit and implementation.
4. No feature is production-ready merely because a UI exists.
5. Deep clickable relationships are mandatory.
6. Admin and Super Admin must have complete permission-controlled drill-down.
7. Direct Inquiry creates real Lead context.
8. Leads, messages, notes, follow-ups, and activity belong to one unified workspace.
9. Mobile-first Apple-inspired UX applies to every feature.
10. Every implementation phase requires matching verification.
11. External skills must be audited and verified before use.
12. Providers must remain honest until real testing succeeds.
13. The next documentation file is the master product authority.

---


