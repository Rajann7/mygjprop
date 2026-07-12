# `CLAUDE.md`

# My Gujarat Property — Claude Code Master Operating Rules

This file is the permanent operating guide for every Claude Code session working on **My Gujarat Property**.

Claude must read this file before planning, designing, coding, testing, verifying, deploying, or changing any part of the project.

This file is intentionally compact enough to read at the beginning of every session, while still defining the non-negotiable product, engineering, UX, security, documentation, and verification rules.

---

## 1. Project Identity

**Project name:** My Gujarat Property

**Product type:** Mobile-first Gujarat real-estate marketplace and SaaS management platform

**Primary audience:** Users in Gujarat, with the majority expected to access the platform from mobile devices

**Primary public roles:**

1. Owner
2. Broker
3. Builder/Developer

**Internal operational roles:**

* Super Admin
* Admin
* Permission-scoped staff roles

Public registration must show exactly these three public roles:

* Owner
* Broker
* Builder/Developer

Internal roles must never be available through public registration.

---

## 2. Product Goal

Build a complete, secure, scalable, production-grade real-estate platform where users can:

* discover approved properties and builder projects
* search by Gujarat location hierarchy
* open detailed property and project pages
* create and manage permitted listings
* manage project units inside projects
* submit direct inquiries
* manage inquiries, leads, messages, notes, follow-ups, and related activity
* use role-specific dashboards
* manage profile, account, billing, subscription, and notifications
* access city-based search and SEO landing pages
* use a polished mobile-first experience
* receive clear feedback for every action
* recover safely from errors
* understand where they are and what they can do next

The platform must behave like one connected product, not a collection of disconnected pages.

Every screen, card, row, metric, button, menu, status, tab, notification, detail, and sub-detail must have an intentional purpose and real behavior.

---

## 3. Final Documentation Structure

The project uses exactly these permanent documentation files.

### Root files

```text
CLAUDE.md
PROJECT_STATE.md
FEATURE_REGISTRY.md
```

### Detailed documentation

```text
docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md
docs/02_ARCHITECTURE_DATABASE_RLS_SECURITY_AND_SCALE.md
docs/03_AUTH_ONBOARDING_ROLES_PROFILE_AND_SESSIONS.md
docs/04_APPLE_INSPIRED_MOBILE_FIRST_UI_UX_AND_INTERACTION.md
docs/05_PUBLIC_HOME_SEARCH_LOCATION_SEO_AND_MARKETPLACE.md
docs/06_PROPERTY_PROJECT_UNITS_DIRECT_INQUIRY_AND_LEADS.md
docs/07_ROLE_DASHBOARDS_NAVIGATION_AND_DEEP_DRILLDOWN.md
docs/08_ADMIN_SUPER_ADMIN_MODERATION_BILLING_BUGS_AND_RECOVERY.md
docs/09_SKILLS_PROVIDERS_QA_DEPLOYMENT_AND_OPERATIONS.md
```

### Phase execution file

```text
prompts/00_FULL_PHASE_IMPLEMENTATION_AND_VERIFICATION_PROMPTS.md
```

Do not create a new parallel documentation system unless the user explicitly approves it.

Do not duplicate the same project authority across many files.

Use the relevant detailed document for the current phase and update the root state files after every meaningful change.

---

## 4. Authority Order

When instructions appear to conflict, follow this priority:

1. The user’s latest explicit instruction
2. `docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`
3. This `CLAUDE.md`
4. The relevant detailed documentation file
5. The current phase implementation or verification prompt
6. Security, privacy, RLS, data-integrity, and audit requirements
7. Compatible GitHub skills
8. Existing source code and current UI

Existing code is not automatically correct.

A GitHub skill must never override the final project rules.

When a real conflict cannot be resolved safely:

* stop the affected change
* document the conflict in `PROJECT_STATE.md`
* mark the affected work `BLOCKED`
* explain the exact decision required
* continue only with unrelated safe work

Do not silently guess.

---

## 5. Session Start Procedure

At the beginning of every Claude Code session:

1. Confirm the project root.
2. Read `CLAUDE.md`.
3. Read `PROJECT_STATE.md`.
4. Read `FEATURE_REGISTRY.md`.
5. Read the current phase prompt.
6. Read only the detailed documents required by that phase.
7. Inspect the repository structure.
8. Inspect existing routes, layouts, components, services, actions, database migrations, RLS policies, providers, tests, and configuration relevant to the phase.
9. Check whether the development server is already running.
10. Check the current Git status.
11. Identify partially completed or conflicting work.
12. Confirm the last verified phase and current blocker state.
13. Create a short implementation plan before editing code.
14. Confirm which skills are required for the phase.
15. Confirm those skills are installed and verified before relying on them.

Do not start coding blindly.

Do not assume a route, table, provider, migration, skill, or component exists without inspection.

---

## 6. Token-Light Working Rule

Use a token-efficient workflow without reducing quality.

Claude should:

* read only the root files and phase-relevant detailed documents
* avoid pasting entire large files into responses
* use targeted repository searches
* inspect exact files before editing
* use focused diffs
* reuse approved shared patterns
* update `PROJECT_STATE.md` after meaningful work
* keep `FEATURE_REGISTRY.md` synchronized
* summarize changes instead of repeating full source files
* preserve continuity for another Claude session
* record exact blockers and next actions
* avoid recreating information already documented elsewhere

Token efficiency must never be used as a reason to skip:

* database migrations
* RLS
* permission checks
* validation
* responsive testing
* live-browser testing
* accessibility
* provider verification
* security checks
* audit logging
* rollback notes
* manual verification
* error handling
* recovery behavior

---

## 7. Final Product Role Model

### 7.1 Owner

An Owner can manage the functionality explicitly permitted in the master scope, including:

* own profile and account
* own properties
* own direct inquiries and leads
* own notifications
* own billing and subscription
* own permitted requirements
* own property lifecycle actions
* support and report flows
* role-appropriate dashboard and navigation

An Owner must never access:

* another user’s private records
* internal administration
* private moderation information
* unrelated leads
* private billing records
* provider secrets
* another user’s private documents

### 7.2 Broker

A Broker can manage the functionality explicitly permitted in the master scope, including:

* own profile and business information
* own listings
* own permitted requirements
* own direct inquiries and leads
* unified lead activity
* billing and subscription
* role-appropriate dashboard and navigation
* permitted marketplace workflows

The public Broker role is a single role.

The product must not depend on subordinate-agent assignment structures.

### 7.3 Builder/Developer

A Builder/Developer can manage:

* builder profile
* builder projects
* project units and inventory inside the related project
* eligible builder listing or project promotion
* project-specific inquiries and leads
* project activity
* billing and subscription
* builder dashboard
* permitted public and management workflows

Project unit management must remain inside the relevant project context.

### 7.4 Super Admin, Admin, and Staff

Super Admin has complete platform-level control subject to security and audit requirements.

Admin and staff access must be permission-scoped.

Internal access must be enforced through:

* server-side authorization
* database-level restrictions where applicable
* route guards
* permission checks
* audit logs
* reason requirements for sensitive actions

UI hiding alone is never sufficient.

---

## 8. Core Contact and Lead Model

The public contact action for properties and projects is:

```text
Direct Inquiry
```

Direct Inquiry must:

* be simple and clear
* avoid unnecessary inquiry-type selection
* use authenticated user context where required
* create a real server-backed lead
* preserve the originating property, project, or unit context
* record sender, receiver, source, timestamp, consent, and status
* appear in the correct role’s unified Leads workspace
* maintain an activity timeline
* support permission-controlled notes, messages, and follow-up actions
* prevent duplicate abuse where appropriate
* apply rate limiting
* display honest success or failure
* never show fake lead creation
* never depend on local-device storage as the authoritative record

Phone numbers must not be exposed through a public reveal workflow.

The platform’s textual address and inquiry system must work without map or geolocation dependencies.

---

## 9. Unified Leads Workspace

Leads, direct inquiries, messages, notes, follow-ups, status history, and related activity must be organized into one unified Leads workspace.

The workspace must support deep contextual navigation such as:

```text
Dashboard
→ Properties or Projects
→ Specific Property or Project
→ Related Leads
→ Specific Lead
→ Messages, Notes, Status, Activity, and Related Entity
```

Every meaningful level must be clickable.

Examples of required drill-down:

```text
Property list
→ Property detail
→ Property-specific leads
→ Lead detail
→ Inquiry activity
→ Message thread
→ Related user profile
```

```text
Project list
→ Project detail
→ Project unit
→ Unit- or project-specific leads
→ Lead detail
→ Full activity history
```

A metric, row, card, label, or relationship that visually appears interactive must have a real destination or contextual interaction.

Decorative fake interactivity is prohibited.

---

## 10. Authentication and Registration Authority

Authentication is mobile-number based.

### Login

Login must support:

* mobile-number input
* proper Indian mobile-number validation
* 4-digit OTP
* OTP autofill where supported
* keyboard and Enter-key behavior
* loading and skeleton states
* invalid OTP handling
* expiry handling
* resend limits
* attempt limits
* rate limits
* clear error recovery
* successful redirect
* session creation
* secure server validation

### Registration

Registration must collect:

* public role
* full name
* email
* mobile number
* OTP verification

Role options must be exactly:

* Owner
* Broker
* Builder/Developer

Validation must cover:

* name formatting
* email format
* mobile-number format and length
* duplicate number
* duplicate email where relevant
* OTP format
* required consent
* server-side validation

### Popup and route behavior

Login and registration must be contextual experiences.

When the user directly visits the login route:

* show the public homepage as the background
* show the login experience above it
* use an accessible modal on larger screens
* use an appropriate full-screen sheet or mobile auth presentation on small screens

When authentication is triggered from a protected action:

* preserve the originating route and relevant state
* preserve the correct underlying context
* return the user to the intended action after success
* prevent redirect loops
* prevent stale auth screens

If the entered mobile number is not registered:

* explain that the account does not exist
* offer a clear Register action
* preserve the entered number where safe

If an authenticated user visits an auth route:

* do not show the login or registration flow again
* redirect to the correct authenticated destination

All Close, Back, Cancel, keyboard, focus, and browser Back behaviors must be intentional.

---

## 11. Notification Model

The product supports:

* real in-app notifications
* email notifications
* SMS for OTP delivery only

In-app notifications must be server-backed.

The notification experience may use:

* a compact preview popup or popover
* a notification drawer where appropriate
* a dedicated notification history page when required

Every notification must define:

* title
* message
* related entity
* timestamp
* read or unread state
* click destination
* status
* archive or deletion behavior where supported
* permission scope

A notification must open a meaningful related destination.

A notification must never open an empty or disconnected page.

The unread count must be real.

Do not show fake badges or fake delivery status.

---

## 12. Gujarat Location Model

The platform uses a textual Gujarat address hierarchy:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

Location data must:

* be stored in the backend
* use stable identifiers
* support normalized searching
* support city and locality filters
* support city-based SEO landing pages
* support property and project posting
* preserve human-readable address text
* handle missing-location requests through a controlled workflow
* avoid map dependencies
* avoid geolocation dependencies
* avoid coordinates as a required user-facing feature

The city selector appears on the public homepage only.

Other screens must use context-specific search, filters, titles, breadcrumbs, or selected location labels instead of repeating the homepage city selector.

---

## 13. Search Behavior

The homepage search must not navigate to an empty search-results screen merely because the input was tapped.

The search flow must:

* focus the search input
* show relevant suggestions
* support city, locality, property type, project, and other approved search entities
* require a meaningful query, selection, or filter before showing results
* preserve the user’s query
* preserve filters and sort
* provide loading feedback
* provide no-results recovery
* provide clear error recovery
* support mobile keyboard behavior
* support back navigation
* preserve list state after viewing a detail page
* use real searchable data
* avoid fake popular counts

Search-results navigation must preserve, where technically reasonable:

* query
* filters
* sorting
* selected tab
* pagination
* scroll position

---

## 14. Apple-Inspired Mobile-First Design Authority

The visual and interaction system must be completely original.

The product may take inspiration from Apple’s qualities:

* clarity
* restraint
* calm visual hierarchy
* precise spacing
* readable typography
* strong content focus
* polished transitions
* excellent touch behavior
* consistent interaction feedback
* minimal visual noise
* premium perceived quality

The product must not copy Apple’s proprietary assets, pages, icons, layouts, or branded visual identity.

The result must remain appropriate for an Indian real-estate marketplace.

### Design priorities

1. Mobile usability
2. User orientation
3. Clear task completion
4. Predictable navigation
5. Content readability
6. Trust
7. Accessibility
8. Performance
9. Error prevention
10. Visual polish

### Mobile-first authority

Design and verify mobile first at:

* 320px
* 360px
* 390px
* 430px

Then adapt intentionally for:

* 768px
* 1024px
* 1366px
* 1440px
* wide displays

Desktop UI must not simply be squeezed into mobile.

Mobile UI must not merely be a vertically stacked desktop layout.

---

## 15. Header and Application Shell Rules

Do not show the same header on every screen.

Use context-specific shell types.

### Public Homepage Header

May include:

* brand
* homepage-only city selector
* account or login access
* notification preview for authenticated users
* essential public actions

### Public Search Header

Should include:

* Back behavior
* search query or search control
* filter access
* clear context

The homepage city selector must not appear here.

### Property or Project Detail Header

Should include:

* meaningful Back behavior
* contextual title where useful
* approved secondary actions
* responsive behavior

### Auth Header

Should support:

* Back
* Close
* current auth context
* mobile full-screen behavior
* accessible focus handling

### Dashboard Header

Should be role-aware and may include:

* page title
* contextual actions
* notifications
* profile access
* navigation trigger on smaller screens

### Focused Task Header

Used for:

* create
* edit
* posting
* configuration
* review
* approval

It may include:

* Back or Close
* title
* progress
* save state
* primary action
* secondary action

### Admin Header

Should support:

* module context
* global search where useful
* notifications
* account menu
* permissions
* contextual actions

Headers must be stable, aligned, and responsive.

Sticky or fixed positioning is allowed only when:

* it improves usability
* it does not cover content
* it works with device safe areas
* it does not create overlap
* it remains accessible with the mobile keyboard
* it is tested across all required widths

---

## 16. Bottom Navigation

Mobile and tablet must use role-based bottom navigation.

Bottom navigation must:

* use a maximum of approximately four or five primary destinations
* reflect the current role
* use real destinations
* show a clear active state
* preserve safe-area spacing
* avoid covering content
* avoid competing with focused task actions
* hide or adapt during immersive flows where appropriate
* remain consistent across the same role’s application screens

Exact item mapping is defined in the dashboard and navigation documentation.

Secondary actions should move to:

* More
* contextual menus
* drawers
* profile or settings areas

Do not overload the bottom navigation.

---

## 17. Page, Modal, Drawer, Sheet, Popover, and Inline Rules

Choose the interaction container according to the task.

### Use a full page when:

* the content needs a permanent URL
* users may bookmark or share it
* the task is long or complex
* the content has deep sub-navigation
* the user enters another major product area

### Use a modal when:

* the task is short
* the user should return to the same context
* the interaction is focused
* the action is confirmatory or lightweight

### Use a drawer or side panel when:

* users need details while preserving the list
* quick editing is appropriate
* contextual drill-down benefits from background visibility
* desktop space supports it

### Use a full-screen mobile sheet when:

* a desktop modal or drawer becomes too constrained on mobile
* the task requires focused mobile attention
* keyboard interaction would otherwise break the layout

### Use a popover or dropdown when:

* actions are small and contextual
* content is lightweight
* a full route would be unnecessary

### Use inline expansion when:

* the content directly belongs to the current item
* leaving the page would interrupt the task

Do not force all editing into popups.

Long forms, complex moderation, payment workflows, and high-risk administration usually require a dedicated page or structured drawer.

---

## 18. Back, Close, Cancel, and Browser Back

These controls are not interchangeable.

### Back

Returns to the previous meaningful product context.

Back should preserve relevant list, filter, search, tab, and scroll state.

### Close

Dismisses a temporary layer and restores the underlying context.

### Cancel

Stops the current action or editing process.

Cancel must handle unsaved changes correctly.

### Browser Back

Must behave predictably and must not:

* create redirect loops
* show stale authentication
* lose important state without warning
* reopen completed temporary flows unexpectedly
* expose unauthorized screens

### Unsaved changes

When relevant, provide:

* confirmation
* save draft
* discard
* continue editing

Do not use an X icon to mean Delete.

Do not show Back and Close together without a clear reason.

---

## 19. Complete Interaction and User-Flow Rule

For every screen, Claude must determine:

* entry points
* user goal
* primary action
* secondary actions
* presentation type
* global navigation visibility
* contextual header
* Back behavior
* Close behavior
* Cancel behavior
* success destination
* failure behavior
* permission behavior
* mobile behavior
* state to preserve
* refresh behavior
* browser Back behavior
* empty state
* loading state
* error state
* recovery action

No screen may exist without logical entry and exit paths.

No action may end without feedback.

No user should need to guess what happens next.

---

## 20. Deep Clickable Product Graph

The product must support deep, connected navigation across related entities.

Examples:

```text
Dashboard
→ Listing summary
→ Property list
→ Property
→ Property leads
→ Lead
→ Message or note
→ Related user
→ Related audit entry
```

```text
Builder dashboard
→ Project
→ Unit
→ Unit status
→ Related leads
→ Lead activity
→ Related inquiry
```

```text
Admin users
→ User
→ Profile
→ Properties
→ Property
→ Leads
→ Lead
→ Messages
→ Report
→ Moderation history
→ Audit log
```

Every displayed relationship must be intentionally designed.

A row, card, count, status, badge, relation, or metric that appears actionable must:

* open a real destination
* open a relevant contextual detail
* trigger a real action
* or be visually presented as non-interactive

No dead affordances.

---

## 21. Dashboard Rules

Owner, Broker, and Builder dashboards must be simplified.

A dashboard must not become a duplicate of every module.

The dashboard should prioritize:

* role-relevant overview
* urgent actions
* recent real activity
* direct entry to core workflows
* useful counts
* contextual drill-down
* clear mobile navigation

Dashboard metrics must be real.

A metric card may be clickable only when a meaningful filtered destination exists.

Examples:

* Active Properties → filtered property list
* New Leads → Leads workspace filtered to new
* Pending Approval → filtered pending items
* Paused Projects → filtered paused projects

Every drill-down must preserve context.

---

## 22. Admin and Super Admin Deep Management

Admin and Super Admin must manage the platform as a connected data graph, not a set of shallow lists.

### User detail must support access to relevant linked data

Depending on permission:

* full profile
* public role
* account status
* contact state
* verification state
* properties
* projects
* project units
* direct inquiries
* unified leads
* messages and activity
* reports
* support issues
* bugs
* billing
* subscriptions
* payments
* invoices
* notifications
* moderation history
* sessions and devices
* security events
* audit trail
* recovery history

Every linked item must support deeper drill-down.

### Contextual editing

Admin may edit permitted data from the correct interface.

Use:

* inline editing for small safe fields
* a modal for short focused changes
* a drawer for contextual inspection or moderate editing
* a dedicated page for complex or high-risk workflows

Do not place large or dangerous forms inside cramped popups.

### Sensitive actions

Sensitive mutations must include:

* explicit permission check
* server-side authorization
* server-side validation
* reason
* confirmation
* audit log
* actor identity
* timestamp
* before and after values where appropriate
* notification where appropriate
* reversible recovery where appropriate

Examples include:

* approve
* reject
* reopen
* restore
* suspend
* unsuspend
* change role
* modify billing
* activate subscription manually
* refund
* delete
* restore
* change provider configuration
* modify security settings

### Recovery

Moderation and management must support correction.

An item rejected by mistake must have a permission-controlled path to:

* reopen
* review
* request changes
* approve
* record reason
* preserve history

The same recovery principle applies globally to supported entities.

---

## 23. Alignment, Layout, and Responsive Stability

All UI must remain aligned and stable.

Required qualities:

* consistent grids
* consistent spacing
* predictable container widths
* readable line lengths
* aligned labels and values
* aligned cards and rows
* responsive tables
* consistent action placement
* stable loading skeletons
* clear hierarchy
* safe sticky positioning
* safe fixed positioning
* no content hidden under navigation
* no layout shift caused by avoidable UI changes

The following are failures:

* clipped text
* broken text wrapping
* words cut off
* labels overlapping values
* buttons extending outside the viewport
* icons misaligned with text
* cards with inconsistent internal spacing
* sticky elements covering content
* fixed bars blocking forms
* horizontal scroll caused by layout bugs
* tiny touch targets
* broken dialogs
* broken sheets
* tables unusable on mobile
* keyboard hiding primary actions
* truncated status text without accessible expansion

Test all required widths.

---

## 24. Complete State Coverage

Every data-driven experience must consider relevant states:

* initial loading
* skeleton loading
* background refresh
* loaded with data
* first-use empty
* filtered empty
* search no results
* partial data
* permission denied
* authentication required
* session expired
* setup required
* provider blocked
* network error
* server error
* validation error
* success
* action failure
* retry
* processing
* disabled
* destructive confirmation
* unsaved changes
* archived
* restored
* paused
* rejected
* pending
* approved

Do not use one generic empty state for everything.

Every state must provide an appropriate next action.

---

## 25. Data Architecture Authority

Business data must be server-backed.

Authoritative data must live in:

* Supabase PostgreSQL
* approved server-side services
* approved storage providers for media
* verified external providers for payment, email, and OTP

Do not use browser local storage as the authoritative source for:

* users
* properties
* projects
* units
* leads
* inquiries
* messages
* notifications
* billing
* subscriptions
* payments
* moderation
* audit logs
* provider status
* permissions

Local storage may be used only for appropriate non-authoritative UX state such as:

* temporary draft recovery
* dismissed non-critical UI
* recent non-sensitive search
* display preference

Server state must remain authoritative.

---

## 26. Supabase-First Rule

Supabase is the first platform foundation for:

* authentication
* PostgreSQL
* RLS
* server-side data access
* realtime only where explicitly implemented and verified
* approved storage use where selected

Other providers are integrated in later phases.

Provider-backed features must remain honest until configured and tested.

Allowed provider states include:

* `NOT_STARTED`
* `SETUP_REQUIRED`
* `CONFIGURED_NOT_TESTED`
* `TEST_MODE_ONLY`
* `ACTIVE`
* `LIVE_READY`
* `BLOCKED`
* `FAILED`
* `DEGRADED`
* `DISABLED_BY_FLAG`

Do not display provider success without a real test.

---

## 27. External Provider Rules

The production system may integrate:

* SMS OTP provider
* email provider
* payment provider
* media storage
* CDN
* error monitoring
* analytics where approved
* cron or background jobs
* backup and recovery services

Provider integration must include:

* environment variable documentation
* server-only secret handling
* setup status
* test mode
* live mode
* error handling
* retry behavior
* idempotency
* rate limits
* logs with redaction
* admin status
* verification procedure
* production retest
* rollback procedure

SMS must be used for OTP delivery only.

External user notifications use email.

Do not expose provider secrets in:

* client code
* source control
* docs
* screenshots
* logs
* browser responses
* admin UI

Admin may view configuration presence and health, but not raw secret values.

---

## 28. Database Migration Rules

Every database change requires a migration.

Migrations must:

* live in the approved Supabase migration directory
* use descriptive timestamped names
* explain purpose
* identify affected tables
* identify RLS changes
* identify indexes
* identify destructive behavior
* include safe backfill logic
* include rollback guidance
* avoid silent schema drift
* be tested before PASS

Do not manually change production schema without a recorded migration.

---

## 29. RLS and Authorization Rules

Private data must be protected at multiple layers:

* RLS
* server actions
* route handlers
* middleware or route guards
* service authorization
* storage policies
* permission checks

RLS must not be disabled to make a feature work.

Every private table must define:

* who can read
* who can create
* who can update
* who can delete or soft-delete
* how ownership is determined
* how staff permissions are enforced
* whether public-safe views are required

Test:

* guest access
* wrong-user access
* wrong-role access
* direct URL access
* direct API access
* staff access
* Super Admin access

Frontend hiding is not security.

---

## 30. Audit Rules

Audit logs are required for sensitive actions.

Audit records should include, where relevant:

* actor
* actor role
* action
* entity type
* entity ID
* previous state
* new state
* reason
* timestamp
* request or session context
* source module
* recovery relation
* related approval or moderation record

Audit records must be protected from unauthorized editing.

---

## 31. Delete, Pause, Restore, and Recovery

Property and project management must support:

* Edit
* Pause
* Resume
* Delete
* Restore where allowed

User-facing delete should normally be recoverable.

Permanent deletion requires:

* explicit permission
* confirmation
* reason
* dependency review
* audit log
* legal and retention review
* backup consideration

Pause and Resume must preserve data.

Restore must preserve history.

The user must understand the status and consequence of each action.

---

## 32. Security and Abuse Protection

The platform must include appropriate controls for:

* OTP abuse
* login brute force
* inquiry spam
* form abuse
* scraping
* credential stuffing
* unauthorized exports
* mass actions
* payment fraud
* upload abuse
* malicious files
* injection
* cross-site scripting
* CSRF where relevant
* broken access control
* session theft
* secret exposure
* log leakage
* enumeration
* denial-of-service patterns

Use:

* server validation
* rate limiting
* permission checks
* secure cookies
* short-lived tokens where appropriate
* audit logs
* upload validation
* content sanitization
* security headers
* monitoring
* alerting
* safe error messages

Never claim the platform is impossible to hack.

Use measurable risk-reduction controls and documented incident response.

---

## 33. Performance and Scale

The product must be architected for very high traffic.

The business target may reach extremely large live usage, including up to one million concurrent or live users.

Do not claim this capacity until real infrastructure and staged load testing prove it.

Design for scale using:

* CDN
* caching
* optimized images
* query indexes
* pagination
* cursor-based loading where appropriate
* database connection management
* asynchronous jobs
* queues
* rate limiting
* horizontally scalable services
* read optimization
* background processing
* graceful degradation
* observability
* autoscaling where supported
* backup and recovery
* disaster-recovery planning

Measure:

* response times
* error rates
* database load
* cache hit ratio
* queue delay
* upload duration
* Core Web Vitals
* server resource usage
* failed transactions
* recovery time
* availability

Performance claims require real tests.

---

## 34. Accessibility

Accessibility is part of implementation.

Required considerations:

* semantic HTML
* keyboard navigation
* visible focus
* logical tab order
* touch target size
* accessible names for icon buttons
* form labels
* error associations
* modal focus trapping
* Escape behavior
* screen-reader status messages
* color contrast
* reduced-motion support
* zoom support
* responsive text
* non-color status indicators

Do not rely on hover-only interactions.

---

## 35. Motion

Motion must be purposeful.

Use motion for:

* hierarchy
* transition feedback
* loading
* success
* state changes
* drawer or sheet transitions
* list updates
* focus guidance

Do not use:

* excessive decorative motion
* motion that delays task completion
* motion that causes layout shift
* motion that ignores reduced-motion preference
* animation that hides system state
* motion that harms performance

Motion must remain subtle, fast, and accessible.

---

## 36. GitHub Skills

The following skills are part of the project workflow:

1. BMAD Method
   `https://github.com/bmad-code-org/BMAD-METHOD`

2. UI/UX Agent Skill System
   `https://github.com/sergekostenchuk/ui-ux-agent-skill-system`

3. Interaction Design Skills
   `https://github.com/rastian/interaction-design-skills`

4. GitHub Spec Kit
   `https://github.com/github/spec-kit`

5. UI/UX Pro Max Skill
   `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`

6. LottieFiles Motion Design Skill
   `https://github.com/LottieFiles/motion-design-skill`

7. Responsive Craft
   `https://github.com/kylezantos/responsive-craft`

8. Storymap Skill
   `https://github.com/MartinForReal/storymap-skill`

9. Shadcn Admin Skill
   `https://github.com/muxiaomu001/shadcn-admin-skill`

---

## 37. Skill Installation and Use Rules

Skills must be handled in the dedicated skills phase.

Claude must:

1. Open and inspect the current official repository.
2. Read the current README, skill file, setup instructions, and license.
3. Inspect install scripts before running them.
4. Confirm compatibility with Claude Code.
5. Confirm compatibility with the project stack.
6. Detect duplicate capability.
7. Detect prompt or architecture conflicts.
8. Use the official installation method.
9. Prefer project-local installation where practical.
10. Record exact installed version or commit.
11. Run a smoke test.
12. Record status in `PROJECT_STATE.md`.
13. Record skill usage in phase results.
14. Mark failed or incompatible skills honestly.
15. Never fake installation or activation.

Do not rely on stale hard-coded installation commands without reading the current repository instructions.

### Skill authority

Skills may assist with:

* discovery
* product planning
* information architecture
* user journeys
* visual systems
* interaction design
* responsiveness
* admin layouts
* motion
* specification
* verification

Skills may not override:

* final roles
* final contact model
* security
* RLS
* data ownership
* provider states
* platform scope
* phase acceptance criteria
* user instructions

---

## 38. Expected Skill Use by Work Area

### Product discovery and planning

Use, where compatible:

* BMAD Method
* GitHub Spec Kit
* Storymap Skill

### Information architecture and UX system

Use, where compatible:

* UI/UX Agent Skill System
* UI/UX Pro Max Skill
* Interaction Design Skills
* Storymap Skill

### Responsive implementation

Use, where compatible:

* Responsive Craft
* UI/UX Agent Skill System

### Motion

Use, where compatible:

* LottieFiles Motion Design Skill

### Admin and management interfaces

Use, where compatible:

* Shadcn Admin Skill
* UI/UX Pro Max Skill
* Interaction Design Skills

### Global UX audit

Use all relevant verified UX skills in a controlled sequence.

Do not allow different skills to generate conflicting systems independently.

---

## 39. Complete SaaS UX Audit Authority

The complete application must be audited as one connected product.

Claude must inspect:

* every route
* every layout
* every page
* every module
* every component
* every button
* every icon action
* every card
* every row
* every tab
* every menu
* every dropdown
* every filter
* every search flow
* every form
* every detail view
* every modal
* every drawer
* every sheet
* every popup
* every notification
* every dashboard
* every profile flow
* every settings flow
* every role
* every permission state
* every loading state
* every empty state
* every error state
* every success state
* every mobile interaction
* every authenticated and unauthenticated journey

Claude must not stop after writing a UX report.

Claude must implement the fixes, connect missing behavior, test the result, and update documentation.

---

## 40. Navigation Behavior Matrix

Before or during implementation of each major module, define:

```text
Screen or experience:
Entry points:
Presentation type:
Global navigation visible:
Contextual header:
Primary action:
Secondary actions:
Back behavior:
Close behavior:
Cancel behavior:
Success destination:
Failure behavior:
Permission behavior:
Mobile behavior:
Refresh behavior:
Browser Back behavior:
State to preserve:
Loading state:
Empty state:
Error recovery:
```

This matrix may be recorded in implementation notes or relevant documentation.

The purpose is consistent product behavior, not paperwork.

---

## 41. End-to-End Journey Testing

Verification must test complete journeys, including:

* first-time registration
* returning login
* unregistered number to registration
* protected action to auth and return
* homepage search to result
* search to detail and return
* property list to property detail
* property to related leads
* lead to activity and messages
* project to unit
* project or unit to leads
* dashboard to module and back
* notification to related entity
* create to save
* edit to save
* pause and resume
* delete and restore
* moderation rejection to correction and approval
* admin user to linked data
* permission denied
* session expired
* network failure and recovery
* first-use empty state
* filtered empty state
* mobile bottom navigation
* mobile keyboard behavior
* browser Back
* refresh with preserved state
* direct URL access
* wrong-role access

Adapt the journeys to the exact phase scope.

---

## 42. Verification Rules

Every implementation phase must be followed by its matching verification prompt.

A phase is not complete merely because code was written.

Verification must include, where relevant:

* lint
* typecheck
* unit tests
* integration tests
* production build
* migration checks
* RLS checks
* direct URL checks
* wrong-role checks
* wrong-user checks
* live development server
* live browser interaction
* mobile widths
* tablet widths
* desktop widths
* wide-screen layout
* keyboard navigation
* accessibility
* text clipping
* alignment
* console errors
* network errors
* loading states
* empty states
* error states
* success states
* complete end-to-end journeys
* data persistence
* audit logs
* provider states
* rollback notes

---

## 43. Development Server Rule

During verification:

1. Detect whether the development server is already running.
2. Reuse it when safe.
3. Start it when required.
4. Confirm the actual URL and port.
5. Open the application in a live browser.
6. Test changed routes and journeys.
7. Keep the development server running after verification unless:

   * the user explicitly asks to stop it
   * it creates a security risk
   * it blocks required work
   * the environment automatically terminates it

The final verification response must state:

* server running: yes or no
* URL
* port
* reason if not running

A production build alone is not enough for UI PASS.

---

## 44. Honest Status Values

Use only clear status values:

* `NOT_STARTED`
* `IN_PROGRESS`
* `DONE`
* `PASS`
* `PARTIAL`
* `FAIL`
* `BLOCKED`
* `SETUP_REQUIRED`
* `ROLLED_BACK`

Definitions:

### `DONE`

Implementation exists, but complete verification may still be pending.

### `PASS`

Implementation and required verification succeeded.

### `PARTIAL`

Some requirements are complete, while others remain unverified or incomplete.

### `BLOCKED`

A dependency or decision prevents safe completion.

### `SETUP_REQUIRED`

External configuration, credentials, provider setup, DNS, hosting, or environment setup is required.

Do not use vague statements such as:

* probably works
* should work
* almost done
* seems ready
* production ready maybe

---

## 45. PASS Requirements

A phase may be marked `PASS` only when all phase-relevant requirements are true.

Examples:

* code implemented
* required migration created
* migration tested
* RLS tested
* authorization tested
* lint passed
* typecheck passed
* tests passed
* build passed
* live server started
* changed routes opened in browser
* responsive widths tested
* important flows tested
* console checked
* network checked
* state persistence checked
* error recovery checked
* accessibility checked
* docs updated
* feature registry updated
* blockers resolved
* no fake data
* no fake provider success
* no private-data leak
* rollback notes recorded

When a real provider is unavailable, the feature may pass its honest Setup Required behavior, but must not be marked live-ready.

---

## 46. Root State Files

### `PROJECT_STATE.md`

Update after every meaningful phase.

It must contain:

* current phase
* current status
* last verified phase
* implementation summary
* changed files
* migrations
* active providers
* setup-required providers
* installed skills
* skill verification
* bugs
* blockers
* rollback checkpoint
* running server URL and port
* next prompt
* latest timestamp

Keep it concise and current.

### `FEATURE_REGISTRY.md`

Update every feature touched.

Each entry should track:

* feature ID
* feature name
* module
* role
* route
* data source
* tables
* RLS
* service or action
* UI state
* provider dependency
* implementation status
* verification status
* known issue
* related phase

Do not allow features to disappear silently.

---

## 47. No Fake Data or Fake Success

Do not present fake production behavior.

Do not fake:

* users
* listings
* projects
* units
* leads
* messages
* analytics
* views
* inquiries
* payments
* invoices
* subscriptions
* verification
* provider health
* OTP delivery
* email delivery
* upload success
* moderation success
* audit records
* notification delivery
* load-test results
* deployment success
* production readiness

Development seed data may be used only when:

* clearly identified
* isolated from production
* useful for testing
* removable
* not presented as real production data

---

## 48. Error and Recovery Standard

Every error must answer:

* What happened?
* What can the user do next?
* Can the action be retried?
* Was data saved?
* Was anything partially completed?
* Where can the user go?
* Does support need a reference ID?
* Does the admin need an audit entry?

Avoid raw technical errors in normal user UI.

Log secure diagnostic details without exposing secrets or private data.

---

## 49. Content and Microcopy

Use consistent terminology.

Approved primary terms include:

* Owner
* Broker
* Builder/Developer
* Property
* Project
* Unit
* Direct Inquiry
* Lead
* Message
* Notification
* Pending
* Approved
* Rejected
* Paused
* Restored

Labels must describe the action clearly.

Avoid vague buttons such as:

* Submit
* Continue
* Done

when a more specific label improves clarity.

Examples:

* Send Inquiry
* Save Property
* Save Changes
* Pause Property
* Restore Project
* Approve Listing
* Request Changes

Use concise, natural English suitable for Indian users.

Localization may be added only according to approved scope.

---

## 50. Code Quality

Implementation must:

* use TypeScript safely
* avoid unnecessary `any`
* use reusable components
* avoid duplicate business logic
* use server-side services
* validate all inputs
* handle null and missing data
* define stable types
* use consistent naming
* avoid hard-coded secrets
* avoid dead code
* avoid placeholder routes
* avoid unhandled promises
* avoid silent failures
* include error boundaries where useful
* include loading states
* include tests for critical logic
* remain readable for future maintainers

Do not overengineer simple features.

Do not use one-off hacks when the problem is structural.

---

## 51. Production Deployment

Production readiness requires:

* production environment variables
* hosting configuration
* domain configuration
* DNS
* SSL
* live provider credentials
* secure secret handling
* database migrations
* backups
* monitoring
* error tracking
* rate limits
* production build
* production smoke test
* live authentication test
* live OTP test
* live email test
* payment verification where enabled
* media upload test
* RLS test
* admin permissions test
* rollback procedure
* incident procedure
* post-deployment monitoring

The user will provide required API credentials, domain, hosting, and business configuration during the relevant phase.

Never place secrets in documentation or chat output.

---

## 52. Final Phase Response Format

After every implementation phase, respond with:

```text
Phase:
Status:

Summary:
Skills used:
Files changed:
Database migrations:
RLS and security changes:
Providers:
Documentation updated:
Checks run:
Live browser work:
Issues found:
Blockers:
Rollback checkpoint:
Development server status:
Next prompt:
```

After every verification phase, respond with:

```text
Verification phase:
Result:

Automated checks:
Live browser routes tested:
Devices and widths tested:
User journeys tested:
Permissions tested:
RLS tested:
Loading and state coverage:
Accessibility:
Console and network:
Bugs found:
Fixes applied:
Remaining blockers:
Documentation updated:
Development server status:
Next prompt:
```

Keep responses concise but complete.

---

## 53. Final Operating Principle

For every screen and action, ask:

> What would a real user naturally expect to happen next?

Then ensure:

* the result is visible
* the destination is logical
* the user remains oriented
* previous work is preserved
* the user can go back
* the user can recover
* the state is stored correctly
* permissions are enforced
* the action is audited where necessary
* the UI works on mobile
* the behavior is real

Do not optimize isolated pages.

Optimize the complete product journey.

Do not treat My Gujarat Property as a collection of UI screens.

Treat it as one deeply connected, secure, scalable, production-grade software platform.

---

