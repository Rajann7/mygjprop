# `docs/09_SKILLS_PROVIDERS_QA_DEPLOYMENT_AND_OPERATIONS.md`

# My Gujarat Property — GitHub Skills, Provider Integration, Quality Assurance, Security Testing, Performance, Deployment, Reliability, Monitoring, Backup, Recovery, Incident Response, and Production Operations Authority

This document defines the complete engineering execution, provider integration, verification, deployment, and operational authority for **My Gujarat Property**.

It is the primary authority for:

* GitHub skill inspection
* skill installation
* skill compatibility
* license review
* maintenance review
* security review
* prompt-conflict handling
* skill usage evidence
* Supabase operations
* SMS OTP provider integration
* email provider integration
* payment provider integration
* media storage and processing
* CDN
* analytics
* error monitoring
* uptime monitoring
* background jobs
* schedulers
* queues
* provider health
* environment configuration
* secrets
* automated testing
* manual verification
* live-browser verification
* responsive verification
* RLS verification
* security testing
* accessibility testing
* performance testing
* load testing
* scalability validation
* CI/CD
* staging
* production deployment
* domains and subdomains
* SSL
* database migrations
* backup
* restore
* rollback
* observability
* incident response
* operational runbooks
* post-launch monitoring
* production sign-off

Claude must read this document before:

* installing or invoking any GitHub skill
* adding a provider
* changing provider configuration
* running production migrations
* creating deployment workflows
* configuring domains
* declaring a phase verified
* declaring a feature production-ready
* running security or load tests
* changing monitoring
* changing backups
* changing rollback procedures
* launching production

---

# 1. Operational Engineering Goal

My Gujarat Property must move from documentation to production through a controlled, evidence-based engineering process.

Every implementation and operational decision must be:

* compatible with the repository
* secure
* testable
* reversible where possible
* observable
* documented
* permission-aware
* provider-aware
* environment-aware
* honest about readiness
* verified in a live application
* recorded in project state
* traceable in the feature registry

The engineering process must not depend on:

* unverified GitHub repositories
* blindly copied installation commands
* unreviewed dependencies
* fake provider success
* visual-only verification
* local-only assumptions
* undocumented database changes
* production credentials in source control
* manual database edits without migrations
* unmeasured scalability claims
* deployment without rollback
* backup without restore testing
* monitoring without alert ownership
* phase completion without live evidence

---

# 2. Authority Order

When instructions conflict, apply this order:

1. `CLAUDE.md`
2. final approved user instruction
3. `PROJECT_STATE.md`
4. `FEATURE_REGISTRY.md`
5. relevant detailed file under `/docs`
6. current implementation prompt
7. verified repository state
8. verified compatible GitHub skill guidance
9. framework and provider documentation

A GitHub skill must never override:

* final product scope
* approved roles
* security rules
* database authority
* RLS
* Apple-inspired original design direction
* mobile-first rules
* provider honesty
* verification requirements
* deployment safety

---

# 3. Exact GitHub Skill Catalog

The approved skill candidates are:

| Skill                           | Repository                                                    |
| ------------------------------- | ------------------------------------------------------------- |
| BMAD Method                     | `https://github.com/bmad-code-org/BMAD-METHOD`                |
| UI/UX Agent Skill System        | `https://github.com/sergekostenchuk/ui-ux-agent-skill-system` |
| Interaction Design Skills       | `https://github.com/rastian/interaction-design-skills`        |
| GitHub Spec Kit                 | `https://github.com/github/spec-kit`                          |
| UI/UX Pro Max Skill             | `https://github.com/nextlevelbuilder/ui-ux-pro-max-skill`     |
| LottieFiles Motion Design Skill | `https://github.com/LottieFiles/motion-design-skill`          |
| Responsive Craft                | `https://github.com/kylezantos/responsive-craft`              |
| Storymap Skill                  | `https://github.com/MartinForReal/storymap-skill`             |
| Shadcn Admin Skill              | `https://github.com/muxiaomu001/shadcn-admin-skill`           |

These are candidates for inspection and controlled use.

Presence in this list does not mean:

* installed
* compatible
* safe
* maintained
* licensed for the intended use
* required for every phase
* allowed to alter project scope

---

# 4. Skill Inspection Requirement

Before installing or invoking a skill, Claude must inspect the current repository and the skill repository.

The inspection must determine:

* repository purpose
* installation method
* supported environment
* supported Claude workflow
* supported operating systems
* required runtimes
* required package managers
* generated files
* modified files
* configuration files
* external dependencies
* scripts
* network behavior
* license
* maintenance activity
* known limitations
* security concerns
* overlap with other skills
* conflicts with project instructions
* rollback method

Current official repository instructions must be used at execution time.

Do not rely on remembered installation commands.

---

# 5. Skill Status Model

Every skill must use one of these states:

* `NOT_STARTED`
* `INSPECTION_REQUIRED`
* `INSPECTED`
* `COMPATIBLE`
* `PARTIALLY_COMPATIBLE`
* `INCOMPATIBLE`
* `LICENSE_REVIEW_REQUIRED`
* `SECURITY_REVIEW_REQUIRED`
* `INSTALLATION_APPROVED`
* `INSTALLED`
* `SMOKE_TEST_FAILED`
* `SMOKE_TEST_PASSED`
* `ACTIVE_FOR_PHASE`
* `DISABLED`
* `REMOVED`

A skill must not be marked `ACTIVE_FOR_PHASE` until:

* inspection is complete
* compatibility is confirmed
* installation is approved
* installation succeeds
* smoke testing passes
* project-rule conflicts are resolved

---

# 6. Skill Inspection Record

For every skill, record:

```text
Skill:
Repository:
Purpose:
Inspection Date:
Repository Revision or Release:
License:
Maintenance Status:
Installation Method:
Required Runtime:
Files Added:
Files Modified:
External Dependencies:
Security Concerns:
Prompt or Rule Conflicts:
Overlap with Other Skills:
Project Compatibility:
Approved Use Cases:
Prohibited Use Cases:
Rollback Method:
Smoke Test:
Current Status:
Evidence:
```

This record must be maintained in `PROJECT_STATE.md` or the approved skill register section without creating unnecessary files.

---

# 7. Skill License Review

License review must determine:

* license type
* whether commercial use is permitted
* attribution requirements
* redistribution requirements
* modification requirements
* source-disclosure implications
* embedded asset restrictions
* third-party subdependency licenses
* whether generated content introduces licensing concerns

When license terms are unclear:

* mark `LICENSE_REVIEW_REQUIRED`
* do not use the skill in production work
* do not copy its assets or code
* document the blocker

---

# 8. Skill Security Review

Security review must inspect:

* shell scripts
* installation scripts
* package scripts
* executable files
* network downloads
* post-install actions
* credential access
* filesystem scope
* Git hooks
* environment-variable access
* code-generation behavior
* telemetry
* generated prompts
* remote execution
* dependency vulnerabilities

Do not run unreviewed scripts with elevated privileges.

Do not allow a skill to:

* read production secrets
* upload source code without approval
* modify global system configuration without approval
* disable security controls
* alter Git history unexpectedly
* write outside approved project directories
* execute destructive commands

---

# 9. Skill Compatibility Review

Compatibility must be checked against:

* Next.js App Router
* TypeScript
* React
* Tailwind CSS
* ShadCN-compatible primitives
* Supabase
* Windows development environment
* GitHub repository structure
* Claude workflow
* current package manager
* current Node.js version
* current linting and formatting
* current testing stack
* current CI/CD

Partial compatibility must be documented precisely.

---

# 10. Skill Conflict Resolution

When two skills recommend conflicting approaches:

1. apply project authority
2. compare the two recommendations
3. preserve approved architecture
4. select only compatible guidance
5. reject duplicated or conflicting generated artifacts
6. document the decision
7. smoke-test the selected approach

Do not merge incompatible prompt systems blindly.

---

# 11. Skill Duplication Control

Potential overlaps include:

* BMAD Method and GitHub Spec Kit
* UI/UX Agent Skill System and UI/UX Pro Max
* Interaction Design Skills and Storymap Skill
* Responsive Craft and UI/UX Pro Max
* Shadcn Admin Skill and UI/UX Agent Skill System
* Motion Design Skill and general UX skills

For overlapping skills:

* assign one primary purpose
* assign secondary support purposes
* avoid installing duplicate generators that produce competing structures
* avoid duplicate documentation systems
* avoid conflicting component conventions
* avoid conflicting phase names

---

# 12. Approved Skill Responsibilities

## 12.1 BMAD Method

May assist with:

* structured delivery planning
* role-based planning perspectives
* complex project decomposition
* phase handoff
* implementation discipline

It must not replace the approved 13-file documentation structure.

## 12.2 UI/UX Agent Skill System

May assist with:

* UX audit
* user-flow reasoning
* interaction completeness
* state coverage
* component audit

## 12.3 Interaction Design Skills

May assist with:

* Back behavior
* Close and Cancel behavior
* list-detail-return
* contextual overlays
* keyboard and focus
* responsive interaction
* error recovery

## 12.4 GitHub Spec Kit

May assist with:

* implementation specification
* acceptance criteria
* engineering-task breakdown
* testable requirements

It must not create a parallel product authority.

## 12.5 UI/UX Pro Max Skill

May assist with:

* visual hierarchy
* typography
* spacing
* component quality
* responsive composition

## 12.6 LottieFiles Motion Design Skill

May assist with:

* purposeful motion
* loading feedback
* success feedback
* reduced-motion-safe transitions

## 12.7 Responsive Craft

May assist with:

* breakpoint review
* responsive preview
* clipping detection
* layout adaptation
* fixed and sticky overlap checks

## 12.8 Storymap Skill

May assist with:

* user journeys
* story mapping
* role workflows
* scope sequencing
* dependency mapping

## 12.9 Shadcn Admin Skill

May assist with:

* Admin layouts
* tables
* filters
* responsive internal screens
* management components

It must not produce a shallow Admin system.

---

# 13. Skill Installation Workflow

For each skill:

```text
Inspect Repository
→ Review License
→ Review Security
→ Review Compatibility
→ Review Conflicts
→ Approve Installation
→ Create Git Checkpoint
→ Install Using Current Official Instructions
→ Inspect Changed Files
→ Run Lint
→ Run Typecheck
→ Run Tests
→ Run Build
→ Perform Skill Smoke Test
→ Record Result
→ Activate Only for Approved Phase
```

---

# 14. Skill Installation Safety

Before installation:

* commit or checkpoint current work
* ensure the working tree is understood
* list uncommitted files
* inspect install commands
* inspect generated file paths
* back up important configuration
* ensure secrets are not exposed

After installation:

* inspect `git diff`
* inspect new scripts
* inspect dependency changes
* inspect configuration changes
* run security checks
* remove unrelated generated files
* update state

---

# 15. Skill Smoke Test

A skill smoke test must use a small controlled task.

Examples:

* generate one isolated interaction specification
* audit one responsive component
* produce one story map
* inspect one Admin table
* generate one non-production motion example

The smoke test must verify:

* output relevance
* instruction compliance
* no scope conflict
* no destructive file change
* no unexpected dependency
* no security issue
* no design-copying behavior
* no duplicate documentation architecture

---

# 16. Skill Removal

A skill must be disabled or removed when:

* incompatible
* unsafe
* unmaintained beyond acceptable risk
* legally unclear
* creates conflicting project rules
* causes repeated low-quality output
* modifies files unpredictably
* duplicates another approved skill without value
* breaks build or tests

Removal must include:

* dependency cleanup
* configuration cleanup
* generated-file review
* test rerun
* build rerun
* state update
* rollback verification

---

# 17. Skill Evidence

Every phase using a skill must record:

* skill name
* status
* task performed
* output used
* output rejected
* files affected
* conflicts resolved
* verification result

Do not claim a skill was used merely because it is installed.

---

# 18. Provider Architecture Principle

External providers must remain behind service abstractions.

Provider-specific implementation must not spread through:

* components
* route layouts
* business entities
* database status logic
* UI messages

Approved provider categories:

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
* backups
* security monitoring

---

# 19. Provider Status Model

Every provider must use one of these statuses:

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

Definitions:

## NOT_STARTED

No provider setup work has begun.

## SETUP_REQUIRED

The feature exists or is planned, but credentials or configuration are missing.

## CONFIGURED_NOT_TESTED

Configuration exists, but a verified provider test has not passed.

## TEST_MODE_ONLY

The provider works only in a sandbox, development, or test environment.

## ACTIVE

The provider is working in the current non-production environment.

## LIVE_READY

Production credentials, live configuration, live tests, monitoring, and failure handling are verified.

## BLOCKED

A known external or internal blocker prevents activation.

## FAILED

The provider is not functioning.

## DEGRADED

The provider functions partially or unreliably.

## DISABLED_BY_FLAG

The provider is intentionally disabled.

---

# 20. Provider State Honesty

The UI and documentation must never show:

* Connected
* Active
* Sent
* Paid
* Uploaded
* Verified
* Live Ready

unless the corresponding verified condition has occurred.

Examples:

* configuration file exists but no test passed → `CONFIGURED_NOT_TESTED`
* media UI exists but storage credentials are missing → `SETUP_REQUIRED`
* sandbox payment works but production keys are absent → `TEST_MODE_ONLY`
* email request failed → `FAILED` or delivery failed
* OTP provider is configured but not live-tested → not `LIVE_READY`

---

# 21. Provider Registry

For every provider, record:

```text
Provider Category:
Provider Name:
Environment:
Purpose:
Service Interface:
Configuration Location:
Secret Reference:
Public Configuration:
Current Status:
Test Mode:
Live Mode:
Last Successful Test:
Last Failed Test:
Health:
Rate Limit:
Quota:
Cost Monitoring:
Failure Behavior:
Fallback:
Monitoring:
Runbook:
Rollback:
Owner:
Evidence:
```

Raw secrets must never be recorded.

---

# 22. Provider Selection Criteria

A provider must be evaluated for:

* Indian availability
* Gujarat and India delivery quality
* pricing
* rate limits
* API quality
* documentation
* webhook reliability
* uptime
* support
* security
* data residency
* compliance
* SDK quality
* Next.js compatibility
* Supabase compatibility
* retry semantics
* idempotency support
* sandbox availability
* observability
* lock-in
* exportability
* vendor risk

---

# 23. Environment Separation

Providers must use separate configuration for:

* local development
* automated test
* staging
* production

Production keys must never be used in:

* local `.env`
* test fixtures
* screenshots
* logs
* sample code
* GitHub Actions output
* documentation
* chat prompts

---

# 24. Environment Configuration

Environment variables must be:

* typed
* validated
* documented in `.env.example`
* classified as public or server-only
* required only where needed
* safe to omit for disabled optional providers

The application startup must fail safely when a mandatory production variable is missing.

Optional providers should return `SETUP_REQUIRED`, not crash unrelated modules.

---

# 25. Secret Management

Secrets include:

* Supabase service-role key
* SMS provider secret
* email provider secret
* payment secret
* payment webhook secret
* media API secret
* monitoring token
* analytics write key
* scheduler secret
* backup key
* encryption key

Secrets must be stored through:

* secure hosting environment settings
* approved secret manager
* protected CI/CD secrets

Secrets must not be stored in:

* source code
* database-readable settings
* frontend bundles
* browser storage
* public logs
* Git history
* screenshots
* Markdown files

---

# 26. Secret Rotation

Every production provider must have a secret-rotation procedure.

Rotation must define:

* who may rotate
* preparation
* overlap period where supported
* configuration update
* provider validation
* application deployment
* rollback
* monitoring
* audit
* previous-secret revocation

High-risk rotation requires step-up authentication and operational approval.

---

# 27. Supabase Responsibility

Supabase is the initial core platform for:

* PostgreSQL
* authentication
* RLS
* server-side data access
* database migrations
* database functions where justified
* realtime where approved
* storage only for media classes assigned to it

Supabase configuration must remain environment-specific.

---

# 28. Supabase Project Separation

Use separate Supabase environments or isolated approved projects for:

* development
* staging
* production

Production must not share:

* test users
* development OTP bypass
* demo data
* test payment records
* staging webhooks
* insecure RLS
* development storage buckets

---

# 29. Supabase Key Usage

## Public anonymous key

May be used only in approved client contexts protected by RLS.

## Service-role key

Must remain server-only.

The service-role key must never be:

* exposed to browser code
* prefixed as a public environment variable
* returned through API
* stored in client state
* logged
* included in screenshots

---

# 30. Supabase Migration Authority

All database changes must use migrations stored under:

```text
supabase/migrations/
```

Migrations must be:

* reviewed
* ordered
* environment-tested
* idempotent where appropriate
* backed by verification
* recorded in project state
* linked to affected features

Manual production schema changes are prohibited except emergency procedures with immediate migration reconciliation and audit.

---

# 31. Migration Preflight

Before a migration:

* inspect current schema
* confirm migration order
* inspect dependencies
* inspect table size
* inspect lock risk
* inspect RLS impact
* inspect generated types
* inspect rollback or forward-fix strategy
* test locally
* test in staging
* create backup for high-risk changes
* record expected duration

---

# 32. Migration Execution

Production migration execution must:

1. confirm deployment window
2. confirm backup
3. confirm migration checksum or file identity
4. confirm current production migration version
5. apply migration
6. capture output
7. verify schema
8. verify constraints
9. verify indexes
10. verify RLS
11. verify critical queries
12. verify application compatibility
13. update state
14. monitor errors

---

# 33. Migration Failure

On migration failure:

* stop dependent deployment
* preserve logs
* determine partial changes
* do not rerun blindly
* use rollback when safely supported
* otherwise use reviewed forward fix
* verify data integrity
* notify operational owner
* record incident
* update state

---

# 34. Supabase RLS Verification

RLS verification must include real queries as:

* Guest
* Owner
* Broker
* Builder
* wrong authenticated user
* wrong role
* Staff without permission
* Staff with permission
* Admin
* Super Admin
* trusted server

Policy inspection alone is insufficient.

---

# 35. Supabase Realtime

Realtime may be used only where it improves a real workflow.

Possible uses:

* new Lead notification
* message delivery
* notification unread update
* moderation status update
* selected Admin queue update

Realtime must not:

* bypass authorization
* expose unauthorized channels
* replace durable database state
* create unbounded subscriptions
* be required for correctness
* cause duplicate events

Fallback polling or refresh must remain possible.

---

# 36. Supabase Connection Management

Production must use:

* supported connection pooling
* correct client type for serverless or persistent runtime
* bounded connections
* query timeout
* slow-query monitoring
* transaction discipline

Avoid creating a new unmanaged database connection for every component.

---

# 37. SMS OTP Provider

SMS is approved for OTP delivery.

It is not the general product-notification channel.

The OTP provider must support:

* Indian mobile delivery
* four-digit OTP
* expiry
* resend
* verification
* provider response
* delivery state
* rate limits
* cost monitoring
* abuse protection
* test environment
* production environment

---

# 38. OTP Provider Integration Flow

```text
User Enters Mobile
→ Server Validates
→ Rate Limit
→ Create OTP Challenge
→ Provider Send Request
→ Provider Accepts or Rejects
→ Store Safe Result
→ User Enters Code
→ Server Verifies
→ Session Created
```

The frontend must not call the SMS provider directly.

---

# 39. OTP Provider Verification

Required tests:

* valid Indian mobile
* invalid mobile
* provider sandbox send
* production send
* correct OTP
* incorrect OTP
* expired OTP
* resend
* attempt limit
* rate limit
* provider timeout
* provider rejection
* duplicate send
* delivery delay
* cost/quota alert
* production development-mode block

---

# 40. OTP Production Readiness

OTP may be marked `LIVE_READY` only when:

* production credentials are configured
* sender/template requirements are approved
* live message is received
* OTP verification succeeds
* expiry works
* rate limits work
* brute-force protection works
* monitoring works
* cost alerts work
* failure handling works
* development bypass is disabled
* production domain flow passes

---

# 41. Email Provider

Email is approved for external transactional notifications.

Possible use cases:

* account creation
* email verification
* mobile change security notice
* role-change status
* moderation update
* new inquiry
* message summary
* Follow-Up reminder
* billing
* payment
* invoice
* support
* security alert

---

# 42. Email Provider Integration

Email must be sent through a server-side service.

Flow:

```text
Business Event
→ Outbox Event
→ Email Job
→ Template Render
→ Provider Send
→ Delivery Result
→ Retry or Failure
```

The business mutation must not fail solely because an optional email send fails.

---

# 43. Email Template Requirements

Every transactional email template must define:

* template key
* version
* subject
* text body
* HTML body
* approved variables
* destination route
* branding
* footer
* legal text
* environment restrictions
* preview
* test

Templates must escape user-controlled content.

---

# 44. Email Verification

Email provider verification must test:

* sender domain
* sender identity
* development recipient
* staging recipient
* production recipient
* HTML rendering
* text rendering
* mobile rendering
* destination link
* expiry link
* duplicate send
* bounce handling where available
* provider failure
* retry
* unsubscribe behavior where legally required

---

# 45. Email Production Readiness

Email may be marked `LIVE_READY` only when:

* domain and sender are verified
* DNS requirements pass
* production credentials are active
* live transactional email is received
* links use production domain
* templates render correctly
* retries work
* failure logging works
* monitoring works
* private data is minimized
* support ownership is defined

---

# 46. Payment Provider

The payment provider supports:

* plan purchase
* subscription payment where supported
* promotion payment
* payment verification
* refund where enabled
* webhook
* reconciliation

Payment must remain server-authoritative.

---

# 47. Payment Integration Flow

```text
User Selects Plan or Promotion
→ Server Loads Authoritative Price
→ Server Verifies Eligibility
→ Internal Order Created
→ Provider Order Created
→ Checkout Opened
→ Client Completion Received
→ Server Waits for Verified Webhook
→ Payment Verified
→ Subscription or Promotion Activated
→ Invoice Issued
```

The client completion event is not final payment proof.

---

# 48. Payment Webhook

The payment webhook must:

* use HTTPS
* verify signature
* use raw request body where required
* store provider event ID
* enforce idempotency
* reject replay
* validate amount
* validate currency
* validate order
* validate environment
* update payment transactionally
* create payment event
* trigger subscription or promotion activation
* trigger invoice generation
* create audit
* return expected provider response

---

# 49. Payment Test Matrix

Test:

* order creation
* valid checkout
* failed checkout
* cancelled checkout
* webhook success
* duplicate webhook
* invalid signature
* wrong amount
* wrong currency
* wrong order
* delayed webhook
* provider timeout
* payment captured but activation failed
* reconciliation
* refund
* partial refund where supported
* invoice
* test/live key separation
* production webhook URL

---

# 50. Payment Production Readiness

Payment may be marked `LIVE_READY` only when:

* live merchant account is active
* production keys are configured
* production webhook is configured
* signature verification passes
* live low-risk payment succeeds
* subscription or promotion activates
* invoice is generated
* duplicate webhook is safe
* reconciliation works
* failure handling works
* refund works where enabled
* monitoring and alerts work
* support runbook exists
* production smoke test passes

---

# 51. Media Provider

Media architecture may use:

* approved object storage
* approved image transformation
* approved CDN
* private signed access
* upload authorization
* processing
* deletion
* retention

Media classes include:

* Property images
* Project images
* Unit images
* public profile images
* logos
* promotion creatives
* brochures
* floor plans
* private verification documents
* support attachments
* invoice documents
* export files

---

# 52. Media Provider Requirements

The provider must support:

* secure upload
* public and private storage
* signed URLs
* content-type validation
* file-size policy
* image transformation
* responsive variants
* deletion
* retention
* CDN
* callback or verification
* quota monitoring
* access logging where needed
* backup or durability guarantees

---

# 53. Media Upload Flow

```text
Client Requests Upload
→ Server Validates User, Role, Entity, and File Metadata
→ Server Creates Restricted Upload Authorization
→ Client Uploads
→ Server or Callback Confirms Upload
→ File Validated
→ File Processed
→ Metadata Stored
→ Moderation Applied
→ Public Delivery Enabled Only When Eligible
```

---

# 54. Media Security Testing

Test:

* valid image
* invalid extension
* mismatched MIME
* oversized file according to provider limits
* malformed file
* executable disguised as image
* private document
* public/private bucket separation
* signed URL expiry
* unauthorized access
* deleted object
* duplicate upload
* processing failure
* callback replay
* malicious filename
* metadata stripping
* image orientation
* quota exhaustion

---

# 55. Media Production Readiness

Media may be marked `LIVE_READY` only when:

* production storage exists
* upload authorization works
* public media delivery works
* private signed access works
* image processing works
* responsive variants work
* deletion works
* failure recovery works
* moderation state works
* CDN works
* quota alerts work
* private files are inaccessible publicly
* production smoke test passes

---

# 56. CDN

The CDN must support:

* public static assets
* approved public images
* cache-control
* purge or invalidation
* secure origin
* HTTPS
* performance monitoring

The CDN must not publicly cache:

* Lead data
* messages
* invoices
* private documents
* Admin pages
* authenticated responses
* provider diagnostics

---

# 57. Background Job Architecture

Background jobs may handle:

* email
* notification retries
* image processing
* promotion activation
* promotion expiry
* Requirement expiry
* Follow-Up reminders
* payment reconciliation
* invoice delivery
* export generation
* stale draft cleanup
* soft-delete archival
* analytics aggregation
* backup verification

---

# 58. Job Requirements

Every job must define:

* job key
* purpose
* trigger
* payload
* idempotency key
* retry count
* backoff
* timeout
* concurrency
* lock
* dead-letter behavior
* monitoring
* alert threshold
* manual retry
* Admin visibility
* audit requirement
* retention

---

# 59. Scheduler Requirements

Scheduled execution must:

* authenticate invocation
* prevent overlapping runs
* process bounded batches
* support continuation
* record start
* record completion
* record processed count
* record failures
* support retry
* expose health
* alert on missed run

---

# 60. Queue Requirements

The queue must support:

* durable delivery
* idempotency
* visibility timeout
* retry
* dead-letter state
* concurrency control
* monitoring
* scaling
* safe payload size
* permissioned Admin inspection

Queue payloads must not contain unnecessary secrets.

---

# 61. Job Failure Handling

When a job fails:

* retain the business record
* record failure
* retry according to policy
* avoid duplicate side effects
* move to dead-letter after retry exhaustion
* show Admin status
* alert when severity requires
* provide safe manual retry
* preserve evidence

---

# 62. Analytics Provider

Analytics may be used for:

* public discovery behavior
* search behavior
* conversion funnels
* role-dashboard navigation
* feature adoption
* performance
* approved promotion reporting

Analytics must not become the business-data authority.

---

# 63. Analytics Privacy

Do not send:

* OTP
* mobile number
* email
* private message
* private note
* exact private address
* payment secret
* invoice data
* verification-document data
* provider secret
* session token
* Admin-sensitive values

Use:

* pseudonymous identifiers
* event names
* approved entity references
* aggregated context
* consent-aware collection

---

# 64. Analytics Event Governance

Every event must define:

* event name
* purpose
* actor category
* allowed properties
* prohibited properties
* consent category
* retention
* destination
* verification

Do not add arbitrary analytics events inside components without registry review.

---

# 65. Error Monitoring

Error monitoring must capture:

* application errors
* server errors
* route failures
* provider failures
* job failures
* database errors
* failed webhooks
* performance traces
* deployment markers

Monitoring must redact:

* secrets
* OTP
* authorization headers
* private messages
* private notes
* payment details
* private documents
* complete user contact data

---

# 66. Uptime Monitoring

Monitor at least:

* public homepage
* search
* Property detail
* Project detail
* authentication entry
* role application entry
* Admin entry
* health endpoint
* payment webhook reachability where suitable
* job heartbeat
* database health
* provider status

Public health checks must expose minimal information.

---

# 67. Monitoring Severity

Recommended severities:

* Critical
* High
* Medium
* Low
* Informational

## Critical

Examples:

* platform unavailable
* payment verification broken
* private data exposure
* authentication failure platform-wide
* production database unavailable
* backup failure with no valid recent backup

## High

Examples:

* OTP provider unavailable
* search unavailable
* Lead creation failing
* moderation actions failing
* provider webhook failures
* job backlog growing

---

# 68. Alert Ownership

Every critical or high alert must define:

* owner
* backup owner
* notification channel
* acknowledgement expectation
* escalation
* runbook
* recovery action
* closure criteria

An alert without an owner is not operationally complete.

---

# 69. Operational Runbooks

Required runbooks include:

* production deployment failure
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
* account takeover
* backup failure
* restore procedure
* rollback procedure
* maintenance-mode activation
* domain or SSL failure

---

# 70. Runbook Format

Every runbook must include:

```text
Incident:
Symptoms:
Severity:
Detection:
Immediate Safety Action:
Diagnostics:
Known Dependencies:
Recovery Steps:
Rollback:
Data Integrity Checks:
User Communication:
Internal Communication:
Verification:
Closure Criteria:
Post-Incident Actions:
Owner:
```

---

# 71. Quality Assurance Authority

Quality assurance includes:

* requirements verification
* code quality
* type safety
* database integrity
* RLS
* server authorization
* unit testing
* integration testing
* end-to-end testing
* live-browser testing
* responsive testing
* accessibility
* security
* performance
* load testing
* provider testing
* deployment verification
* production smoke testing

A visual review alone is not QA.

---

# 72. QA Status Model

Use:

* `NOT_STARTED`
* `IN_PROGRESS`
* `IMPLEMENTED_UNVERIFIED`
* `PASS`
* `PASS_WITH_LIMITATIONS`
* `FAIL`
* `BLOCKED`
* `SETUP_REQUIRED`
* `DEFERRED_WITH_REASON`

`PASS` requires evidence.

`PASS_WITH_LIMITATIONS` must document exact limitations.

---

# 73. Test Environment Strategy

Testing must occur across:

* local development
* automated test environment
* staging
* production smoke environment

Tests must not depend only on local development.

---

# 74. Test Data Strategy

Test data must:

* use synthetic identities
* cover Owner, Broker, Builder
* cover Admin and Staff permissions
* cover active, restricted, suspended states
* cover draft, pending, approved, rejected, paused, deleted, restored states
* cover payment states
* cover provider failure
* cover long text
* cover empty data
* cover high-volume data

Real personal data must not be used.

---

# 75. Test Account Strategy

Maintain controlled test identities for:

* Owner
* Broker
* Builder
* Super Admin
* Admin with broad permissions
* Staff with view-only permission
* Staff with moderation permission
* Staff without permission
* restricted account
* suspended account

Production test identities must be tightly controlled and removed or disabled after approved smoke testing.

---

# 76. Unit Tests

Unit tests must cover:

* validation
* status transitions
* role checks
* permission checks
* route resolution
* provider-state mapping
* price calculations
* currency formatting
* location hierarchy
* idempotency
* cache keys
* notification destination
* error mapping
* feature-flag evaluation

---

# 77. Integration Tests

Integration tests must cover:

* service and database behavior
* RLS
* transactions
* migrations
* provider adapters
* webhooks
* outbox events
* jobs
* cache invalidation
* Admin audit
* recovery
* billing consistency
* session behavior

---

# 78. End-to-End Tests

End-to-end tests must cover:

* registration
* login
* contextual authentication
* homepage search
* Property discovery
* Project discovery
* Property posting
* Project and Unit management
* Direct Inquiry
* unified Leads
* role dashboards
* Admin moderation
* billing
* provider states
* reports
* recovery
* logout

---

# 79. Manual Verification

Manual verification must use the real running application.

It must include:

* actual routes
* actual clicks
* actual forms
* actual keyboard interaction
* actual browser Back
* actual responsive widths
* actual console review
* actual network review
* actual error states
* actual permission states
* actual provider states

---

# 80. Live Server Requirement

Before browser verification:

* detect whether a development server is already running
* identify URL and port
* reuse it when correct
* otherwise start the correct application
* confirm the application responds
* record URL and port

After verification:

* keep the development server running when safe
* record its state in `PROJECT_STATE.md`

---

# 81. Live Browser Verification Rules

For every tested flow:

1. use the real application route
2. use a real test identity
3. perform the action
4. confirm persisted data
5. refresh
6. confirm persistence
7. test browser Back
8. test direct URL
9. test wrong-user access
10. check console
11. check network
12. fix issues
13. retest

---

# 82. Responsive Verification

Required widths:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide display

Verify:

* layout
* navigation
* text wrapping
* fixed and sticky elements
* keyboard
* safe area
* table adaptation
* modal and sheet behavior
* action visibility
* horizontal overflow
* touch targets

---

# 83. Browser Coverage

At minimum, test the currently supported production browsers.

Coverage should include:

* Chromium-based desktop browser
* Chromium-based Android behavior
* Safari-compatible behavior where available
* mobile viewport behavior
* tablet viewport behavior

Browser support must be documented.

---

# 84. Console Verification

Console verification must inspect:

* runtime errors
* hydration warnings
* React warnings
* accessibility warnings where available
* failed resource loads
* duplicate key warnings
* unhandled promise rejection
* provider errors
* CSP errors
* cross-origin errors

A visually correct screen does not pass with critical console errors.

---

# 85. Network Verification

Network verification must inspect:

* failed requests
* unauthorized requests
* duplicate requests
* slow requests
* oversized payloads
* incorrect cache headers
* incorrect status codes
* exposed private fields
* provider failures
* webhook failures
* image failures

---

# 86. Direct URL Verification

For every protected route:

* open directly as Guest
* open directly as correct role
* open directly as wrong role
* open directly as wrong owner
* open directly as permissioned staff
* open directly as staff without permission
* refresh
* verify no private flash
* verify safe error or redirect

---

# 87. RLS Verification

For each protected table:

* anonymous select
* anonymous insert
* anonymous update
* anonymous delete
* correct owner select
* correct owner update
* wrong owner select
* wrong owner update
* wrong role
* staff without permission
* staff with permission
* Super Admin
* trusted server

The verification result must include actual query evidence.

---

# 88. Authorization Verification

Server authorization tests must verify:

* route permission
* service permission
* entity ownership
* account status
* role
* plan limit
* verification requirement
* provider state
* reason requirement
* audit creation
* recovery eligibility

---

# 89. Accessibility Testing

Accessibility testing must include:

* semantic headings
* landmarks
* keyboard-only navigation
* focus order
* visible focus
* modal focus trap
* drawer focus trap
* Escape
* labels
* descriptions
* field errors
* screen-reader names
* contrast
* zoom
* reduced motion
* touch targets
* dynamic announcements
* table semantics
* status not relying on color

---

# 90. Accessibility Verification Evidence

Record:

```text
Route:
Role:
Keyboard:
Focus:
Labels:
Errors:
Dialog:
Table:
Contrast:
Zoom:
Reduced Motion:
Screen Reader Review:
Touch Targets:
Result:
Defects:
```

---

# 91. Security Testing

Security testing must include:

* authentication
* OTP abuse
* session security
* role authorization
* RLS
* direct-object access
* input validation
* output encoding
* CSRF
* XSS
* injection
* rate limiting
* upload security
* private document access
* webhook verification
* payment amount validation
* provider-secret protection
* logging redaction
* export protection
* Admin permission
* feature flags
* maintenance mode
* dependency vulnerabilities

---

# 92. Authentication Security Testing

Test:

* invalid mobile
* enumeration resistance
* OTP brute force
* resend abuse
* OTP replay
* expired OTP
* session fixation
* session expiry
* logout
* logout all devices
* revoked session
* cookie security
* cross-subdomain session
* role change
* suspended account
* direct login route
* production development-OTP block

---

# 93. Authorization Security Testing

Test:

* wrong role
* wrong user
* guessed IDs
* modified request payload
* direct API
* missing UI action
* Admin without permission
* Staff field access
* service-role leakage
* public-safe view leakage
* cache leakage between users

---

# 94. Input Security Testing

Test:

* HTML
* scripts
* SQL-like strings
* Unicode edge cases
* very long values
* control characters
* malformed JSON
* invalid enum
* negative money
* invalid dates
* invalid location hierarchy
* malicious filenames
* unsafe URLs

---

# 95. Upload Security Testing

Test:

* executable renamed as image
* invalid MIME
* malformed image
* oversized file
* decompression bomb risk
* malware scan behavior where supported
* private bucket
* signed URL expiry
* unauthorized download
* deleted file
* callback replay
* filename traversal

---

# 96. Payment Security Testing

Test:

* client amount manipulation
* client success manipulation
* invalid webhook signature
* replay
* wrong environment
* wrong order
* wrong currency
* duplicate payment
* duplicate refund
* unauthorized refund
* provider-secret exposure
* invoice access by wrong user

---

# 97. Dependency Security

Before production:

* audit dependencies
* review critical vulnerabilities
* update or mitigate
* remove unused packages
* inspect transitive risk
* pin or control versions appropriately
* review install scripts
* review abandoned packages
* verify lockfile integrity

Critical unresolved dependency vulnerabilities block production unless formally accepted with mitigation.

---

# 98. Static Analysis

Run applicable tools for:

* lint
* TypeScript
* formatting
* dead code
* dependency audit
* secret scanning
* SQL review
* migration review
* accessibility linting
* bundle analysis

---

# 99. Performance Testing

Performance testing must cover:

* homepage
* search
* Property detail
* Project detail
* login
* role dashboards
* Leads
* Admin lists
* Admin detail
* payment webhook
* job processing

---

# 100. Performance Metrics

Measure:

* Time to First Byte
* First Contentful Paint
* Largest Contentful Paint
* Interaction to Next Paint
* Cumulative Layout Shift
* server response time
* query time
* payload size
* bundle size
* image size
* cache hit ratio
* error rate
* memory
* CPU

---

# 101. Performance Budget

The implementation must define measurable budgets for:

* public route JavaScript
* authenticated route JavaScript
* Admin route JavaScript
* image payload
* API response
* server response
* database query
* page interaction

Final budgets must be based on measured application behavior and production infrastructure.

Do not invent PASS thresholds without measurement and context.

---

# 102. Bundle Analysis

Bundle review must identify:

* large dependencies
* duplicate libraries
* Admin code in public bundles
* unused locales
* heavy editors
* chart libraries
* motion libraries
* provider SDKs
* client-only modules

Use dynamic import and server-side execution where appropriate.

---

# 103. Database Performance Testing

Test:

* dashboard aggregates
* search filters
* city pages
* Property lists
* Project lists
* Unit lists
* Lead lists
* message pagination
* Admin User detail
* moderation queue
* payment reconciliation
* audit search

Inspect query plans for high-impact queries.

---

# 104. Load Testing

Load testing must be staged.

Stages:

1. correctness under low load
2. baseline concurrency
3. moderate concurrency
4. production-like traffic
5. peak simulation
6. failure-point identification
7. optimization
8. repeat test
9. capacity report
10. cost report

---

# 105. Load-Test Scenarios

Include:

* homepage reads
* search suggestions
* search results
* Property detail
* Project detail
* authentication initiation
* OTP verification simulation
* Direct Inquiry
* Lead list
* message send
* dashboard reads
* Admin list reads
* payment webhook
* notification creation
* job processing

---

# 106. Load-Test Metrics

Record:

* concurrent users
* requests per second
* p50 latency
* p95 latency
* p99 latency
* error rate
* timeout rate
* database CPU
* database memory
* database connections
* application CPU
* application memory
* queue depth
* cache hit ratio
* provider throttling
* cost estimate

---

# 107. One-Million-Concurrency Rule

The architecture may target very high scale.

No documentation, UI, or marketing may claim verified support for one million concurrent users until:

* production-like load testing reaches the target
* infrastructure supports the target
* database supports the target
* providers support the target
* queue supports the target
* CDN supports the target
* failure recovery is tested
* cost is approved
* capacity report is signed off

Until then, describe the platform as architected for scalable growth.

---

# 108. Reliability Testing

Test failure of:

* database
* OTP provider
* email provider
* payment provider
* media provider
* queue
* scheduler
* cache
* CDN
* analytics
* monitoring
* job worker

Verify graceful degradation.

---

# 109. Graceful Degradation Rules

When an optional provider fails:

* preserve core database data
* show honest status
* allow safe retry
* avoid false success
* avoid losing user input
* record failure
* notify operations
* preserve recovery path

Examples:

* email fails → Lead remains valid
* analytics fails → user action remains valid
* image processing fails → upload remains pending
* payment fails → subscription remains inactive
* scheduler fails → job health shows failed

---

# 110. Chaos and Failure Simulation

In a safe non-production environment, simulate:

* provider timeout
* provider 500 response
* database timeout
* queue delay
* duplicate webhook
* missed scheduler run
* cache unavailable
* storage callback delay
* deployment rollback
* session expiry

Record outcomes and fixes.

---

# 111. CI Pipeline

The CI pipeline should include:

1. checkout
2. dependency installation
3. environment-safe validation
4. formatting check
5. lint
6. TypeScript check
7. unit tests
8. integration tests
9. migration validation
10. build
11. dependency audit
12. secret scan
13. optional bundle review
14. artifact creation
15. result reporting

Production deployment must not proceed after required CI failure.

---

# 112. Pull Request Verification

Every implementation pull request should include:

* phase or feature reference
* summary
* changed files
* migration impact
* provider impact
* security impact
* UX impact
* tests
* screenshots or browser evidence where permitted
* rollback
* known limitations
* documentation updates

---

# 113. Branch and Checkpoint Safety

Before high-risk work:

* create a stable commit
* record commit ID
* ensure working tree state is known
* create branch when appropriate
* avoid mixing unrelated phases
* avoid force-pushing shared protected branches
* preserve rollback point

---

# 114. Deployment Environments

Required environments:

* local
* automated test
* staging
* production

Staging should resemble production in:

* framework runtime
* environment configuration shape
* database schema
* RLS
* provider sandbox
* host routing
* caching
* jobs
* monitoring
* security headers

---

# 115. Staging Authority

Staging is the final integrated verification environment before production.

Staging must support:

* realistic test accounts
* production-like routes
* role hosts
* Admin host
* sandbox providers
* migrations
* browser testing
* responsive testing
* security testing
* provider testing
* performance smoke tests
* rollback rehearsal

---

# 116. Staging Data

Staging data must be synthetic.

It should include:

* all roles
* all important statuses
* all moderation states
* billing states
* provider states
* deleted and restored records
* long text
* empty states
* high-volume collections

---

# 117. Staging Sign-Off

Staging sign-off requires:

* CI passed
* migrations passed
* RLS passed
* role flows passed
* Admin flows passed
* provider sandbox passed
* responsive passed
* accessibility passed
* security tests passed
* console and network passed
* backup created
* rollback rehearsed
* documentation updated

---

# 118. Production Deployment Preconditions

Before production deployment:

* approved release scope
* approved commit
* CI PASS
* staging PASS
* migration plan
* backup
* rollback plan
* provider readiness
* production environment validation
* domain readiness
* SSL readiness
* monitoring readiness
* alert ownership
* support readiness
* release communication
* maintenance decision

---

# 119. Production Deployment Flow

```text
Approve Release
→ Freeze Scope
→ Confirm Backup
→ Confirm Provider Status
→ Confirm Environment
→ Apply Safe Migrations
→ Deploy Application
→ Verify Health
→ Run Smoke Tests
→ Verify Providers
→ Monitor
→ Announce Success or Roll Back
```

---

# 120. Deployment Order

For compatible changes, prefer:

1. additive database migration
2. backward-compatible application deployment
3. data backfill
4. feature activation
5. old code removal
6. old schema removal in a later verified release

Avoid deploying code that depends on an unapplied migration.

---

# 121. Domain Architecture

Production domains may include:

* public marketplace
* Broker application
* Builder application
* internal account/Admin application

Domain configuration must define:

* canonical public host
* role hosts
* internal host
* cookie scope
* CORS
* redirect rules
* environment mapping
* provider callback URLs
* email link URLs
* payment webhook URLs
* sitemap host
* robots host

---

# 122. DNS Verification

Before production:

* records resolve
* propagation verified
* canonical host configured
* subdomains resolve
* no stale conflicting record
* provider verification records resolve
* email DNS records resolve
* SSL issuance succeeds
* redirects work

---

# 123. SSL

Every production host must use valid HTTPS.

Verify:

* certificate validity
* certificate chain
* hostname coverage
* renewal
* redirect from HTTP
* HSTS where approved
* no mixed content
* webhook HTTPS
* secure cookies
* no expired certificate

---

# 124. Cross-Subdomain Security

Cross-subdomain behavior must verify:

* session cookie scope
* SameSite behavior
* CSRF protection
* open-redirect protection
* CORS
* auth redirects
* public canonical URLs
* role isolation
* internal host isolation

Do not share sensitive cookies across all subdomains without a reviewed need.

---

# 125. Production Environment Validation

Validate:

* required variables
* optional-provider states
* production mode
* development modes disabled
* correct Supabase project
* correct provider keys
* correct domains
* correct webhook URLs
* correct storage bucket
* correct monitoring project
* correct analytics environment
* correct scheduler secret
* correct feature flags
* correct maintenance state

---

# 126. Feature Activation

High-risk features should be activated through controlled feature flags where appropriate.

Activation sequence:

* deploy disabled
* verify infrastructure
* enable for internal test users
* verify
* enable for limited production users
* monitor
* expand
* fully enable

Feature flags must not bypass security.

---

# 127. Production Smoke Tests

After deployment, test:

* homepage
* city selection
* search
* Property detail
* Project detail
* login
* OTP
* Owner dashboard
* Broker dashboard
* Builder dashboard
* Direct Inquiry
* Lead creation
* Admin login
* moderation queue
* billing route
* provider health
* payment webhook reachability
* media upload
* email send
* logout
* monitoring

Use controlled production test accounts and safe low-risk operations.

---

# 128. Smoke-Test Data Cleanup

After production smoke testing:

* remove temporary listings or mark them non-public
* remove temporary Projects
* archive test Leads where policy permits
* cancel test promotions
* reconcile test payment
* disable test accounts
* retain required audit evidence
* avoid leaving fake public content

---

# 129. Rollback Authority

Every production deployment requires a rollback plan.

Rollback may include:

* application rollback
* feature-flag disable
* provider disable
* migration rollback where safe
* forward fix
* traffic routing
* maintenance mode

---

# 130. Application Rollback

Application rollback requires:

* known stable deployment
* compatibility with current database
* environment consistency
* provider compatibility
* health verification
* smoke testing
* monitoring

Do not roll back code to a version incompatible with applied schema.

---

# 131. Database Rollback

Database rollback is allowed only when safe.

Prefer forward fixes when:

* new valid data uses the new schema
* rollback would lose data
* destructive changes occurred
* migration is not fully reversible

Every migration must state:

* reversible
* partially reversible
* forward-fix only

---

# 132. Provider Rollback

Provider rollback may include:

* return to previous provider
* disable provider
* switch to test-disabled state
* use approved fallback
* queue events for later retry

Provider switching must preserve:

* idempotency
* delivery state
* payment state
* user experience
* audit

---

# 133. Backup Authority

Backups must cover:

* production database
* migration history
* critical configuration
* provider configuration references
* private media according to storage capability
* invoices
* audit logs
* recovery records
* deployment configuration
* operational runbooks

---

# 134. Backup Schedule

Backup policy must define:

* frequency
* retention
* encryption
* region
* access
* monitoring
* failure alert
* restore testing
* owner

Critical data such as payments, Leads, messages, and audit may require stricter recovery objectives.

---

# 135. Recovery Objectives

Define:

* RPO — acceptable data-loss window
* RTO — acceptable recovery duration

Separate objectives may be defined for:

* database
* payment
* Leads and messages
* media
* public cache
* analytics
* logs

Final production values must be agreed and recorded.

---

# 136. Restore Testing

A backup is not considered verified until restored.

Restore testing must:

* use a safe isolated environment
* restore database
* verify schema
* verify row counts
* verify critical relationships
* verify RLS
* verify authentication
* verify payments
* verify Leads
* verify audit
* verify media references
* record duration
* record defects

---

# 137. Backup Failure

When backup fails:

* raise alert
* identify last valid backup
* retry
* investigate provider
* block high-risk deployment when recovery protection is inadequate
* document incident
* verify subsequent backup
* run restore test if integrity is uncertain

---

# 138. Disaster Recovery

Disaster recovery must address:

* database loss
* region outage
* provider outage
* account compromise
* storage loss
* deployment corruption
* domain failure
* secret compromise

The disaster-recovery plan must define:

* authority
* communication
* failover
* restore
* validation
* user impact
* provider coordination
* closure

---

# 139. Incident Response

Incident lifecycle:

```text
Detected
→ Triaged
→ Severity Assigned
→ Contained
→ Diagnosed
→ Recovered
→ Verified
→ Communicated
→ Closed
→ Reviewed
```

---

# 140. Incident Severity

## Critical

* widespread outage
* data exposure
* payment corruption
* authentication compromise
* irreversible data loss
* production database unavailable

## High

* major workflow unavailable
* OTP outage
* Lead creation failure
* payment webhook failure
* provider outage affecting critical action

## Medium

* partial workflow degradation
* background-job delay
* limited Admin module failure

## Low

* minor operational issue
* cosmetic production defect

---

# 141. Incident Record

Every High or Critical incident must record:

* incident ID
* start time
* detection
* severity
* affected systems
* affected users
* data impact
* immediate action
* root cause
* recovery
* verification
* communication
* end time
* follow-up actions
* owner

---

# 142. Incident Communication

Communication must be:

* factual
* timely
* privacy-safe
* clear about impact
* clear about current status
* clear about next update

Do not claim resolution before verification.

---

# 143. Post-Incident Review

A review must include:

* what happened
* why it happened
* detection quality
* response quality
* user impact
* data impact
* timeline
* root cause
* contributing factors
* corrective actions
* owners
* deadlines
* verification

Blame-oriented reports are prohibited.

---

# 144. Maintenance Mode Operations

Maintenance mode may be used when:

* migration requires downtime
* security incident requires containment
* critical service is unstable
* major repair is underway

Maintenance mode must preserve where required:

* payment webhook handling
* health checks
* internal access
* incident communication
* recovery routes

---

# 145. Operational Dashboards

Operational dashboards should display:

* application health
* database health
* provider health
* queue depth
* failed jobs
* payment webhook status
* OTP delivery
* email delivery
* media processing
* backup status
* error rate
* latency
* deployment version
* current incidents

Metrics must use real data.

---

# 146. Log Management

Logs must be:

* structured
* timestamped
* environment-tagged
* request-correlated
* retention-controlled
* access-controlled
* redacted
* searchable

Do not log:

* OTP
* passwords
* service-role keys
* authorization headers
* full payment payload
* private messages
* private notes
* signed private URLs
* unmasked sensitive contact data

---

# 147. Request Correlation

Important requests should include a correlation or request ID.

Use it across:

* application logs
* provider calls
* webhook handling
* jobs
* audit records
* support references

The request ID must not expose sensitive information.

---

# 148. Audit and Operational Log Separation

Audit records document business actions.

Operational logs document technical execution.

Do not rely on technical logs as the only audit record for:

* moderation
* suspension
* refund
* provider change
* role change
* recovery
* permanent deletion

---

# 149. Data Retention

Retention must be defined for:

* operational logs
* error events
* provider logs
* OTP challenges
* email delivery
* payment events
* jobs
* exports
* backups
* audit
* security events
* messages
* deleted entities

Retention must follow:

* legal requirements
* privacy
* operational need
* storage cost
* recovery requirements

---

# 150. Data Cleanup Jobs

Cleanup jobs may handle:

* expired OTP challenges
* expired signed links
* expired exports
* stale temporary uploads
* abandoned drafts
* old job payloads
* old provider logs
* old analytics data
* retention-based archival

Cleanup jobs must be:

* bounded
* idempotent
* monitored
* auditable where sensitive
* safe for retry

---

# 151. Production Support Readiness

Before launch:

* support categories exist
* support route works
* grievance details are published
* staff permissions exist
* support notification works
* escalation path exists
* payment support runbook exists
* account recovery runbook exists
* provider outage runbook exists
* incident ownership exists

---

# 152. Operational Ownership

Every critical system must have an owner:

* application
* database
* authentication
* OTP
* email
* payment
* media
* queue
* scheduler
* monitoring
* backup
* security
* support
* billing
* moderation
* deployment

Ownership must be visible in operational records.

---

# 153. Release Management

Every production release must record:

* release ID
* date
* commit
* included phases
* migrations
* provider changes
* feature flags
* known limitations
* test result
* staging result
* production smoke result
* rollback
* owner

---

# 154. Release Freeze

Before production deployment:

* stop unrelated changes
* confirm exact commit
* confirm migrations
* confirm configuration
* confirm provider state
* confirm release notes
* confirm rollback

Do not deploy a moving unreviewed branch.

---

# 155. Hotfix Process

A hotfix must:

* address a defined production defect
* minimize unrelated changes
* preserve security
* include focused tests
* include staging or equivalent safe verification when possible
* include rollback
* update documentation
* receive post-deployment verification

Emergency does not mean unaudited.

---

# 156. Post-Launch Monitoring Window

After launch or high-risk release:

* monitor continuously for an agreed window
* watch errors
* watch provider failures
* watch payment events
* watch OTP delivery
* watch database performance
* watch queue depth
* watch support tickets
* watch security events
* verify backups

---

# 157. Post-Launch Review

After the monitoring window, record:

* release health
* error rate
* performance
* provider health
* user-reported issues
* support volume
* payment consistency
* security events
* required fixes
* capacity observations
* next release priority

---

# 158. Phase Execution Relationship

The phase prompt file controls implementation order.

This document has special authority over:

* Phase 0 — GitHub Skills
* Phase 2 — Database, migrations, and RLS
* Phase 3 — OTP provider foundations
* Phase 15 — Billing and providers
* Phase 16 — Security, privacy, performance, and scale
* Phase 17 — Complete UX audit and repair
* Phase 18 — Production APIs, deployment, and sign-off

Every phase still requires its matching manual verification.

---

# 159. Phase 0 Operational Result

Phase 0 must produce:

* inspection of all nine skills
* license result
* security result
* compatibility result
* overlap result
* approved installation list
* installation evidence
* smoke-test evidence
* disabled-skill list
* rollback checkpoint
* state update
* registry update

No product feature should be redesigned solely because a skill was installed.

---

# 160. Provider Implementation Phase Result

A provider implementation phase must produce:

* service interface
* provider adapter
* environment validation
* Admin status
* safe error mapping
* rate limits
* idempotency
* monitoring
* automated tests
* live test
* failure-state test
* rollback
* state update
* registry update

---

# 161. QA Phase Result

A QA phase must produce:

* automated test result
* manual-browser result
* responsive result
* accessibility result
* console result
* network result
* security result
* RLS result
* performance result where applicable
* fixed defects
* retest evidence
* server status
* state update
* registry update

---

# 162. Deployment Phase Result

The deployment phase must produce:

* production environment validation
* domains
* SSL
* migrations
* backup
* restore evidence
* provider readiness
* monitoring
* alert ownership
* deployment
* production smoke test
* rollback evidence
* post-launch monitoring
* final limitations
* sign-off

---

# 163. Verification Prompt Rules

Every phase verification prompt must:

1. read authority files
2. inspect phase implementation
3. run required automated checks
4. run or reuse the development server
5. use the live browser
6. test correct roles
7. test wrong roles
8. test direct URLs
9. test Back and browser Back
10. test responsive widths
11. test loading, empty, error, success, and blocked states
12. inspect console
13. inspect network
14. inspect persistence
15. test security and RLS where relevant
16. fix defects
17. rerun tests
18. record exact evidence
19. update `PROJECT_STATE.md`
20. update `FEATURE_REGISTRY.md`
21. leave the server running when safe

---

# 164. Verification Evidence Format

Every verification response must record:

```text
Phase:
Implementation Status:
Verification Status:
Repository:
Commit or Checkpoint:
Changed Files:
Migrations:
Skills Used:
Providers:
Automated Commands:
Command Results:
Development Server:
Routes Tested:
Roles Tested:
Direct URLs:
Responsive Widths:
Keyboard:
Accessibility:
Console:
Network:
RLS:
Security:
Performance:
Bugs Found:
Fixes Applied:
Retest:
Known Limitations:
Rollback:
PROJECT_STATE Updated:
FEATURE_REGISTRY Updated:
Final Result:
Next Phase:
```

---

# 165. PASS Rules

A phase may be marked `PASS` only when:

* implementation exists
* required automated checks pass
* required live routes work
* persistence works
* permissions work
* wrong-user access fails safely
* responsive widths pass
* critical accessibility checks pass
* console has no critical errors
* network has no unexplained critical failures
* provider state is honest
* documentation is updated
* no Critical or High defect remains

---

# 166. PASS_WITH_LIMITATIONS Rules

Use only when:

* core verified behavior passes
* remaining limitation is non-critical
* limitation is documented
* user impact is documented
* workaround exists where needed
* follow-up phase is defined

Do not use `PASS_WITH_LIMITATIONS` to hide:

* security failure
* RLS failure
* provider false success
* payment uncertainty
* broken core mobile flow
* private data exposure
* missing required verification

---

# 167. BLOCKED Rules

A phase is `BLOCKED` when an external or prerequisite dependency prevents valid completion.

Examples:

* missing provider credentials
* domain not available
* hosting not configured
* required legal decision missing
* production access unavailable
* incompatible dependency requiring approval

A blocked phase must still complete all possible safe work.

---

# 168. Setup Required Rules

Use `SETUP_REQUIRED` for:

* provider credentials
* sender-domain verification
* payment merchant activation
* storage account
* monitoring project
* domain DNS
* SSL prerequisites
* scheduler configuration

The UI must expose this state honestly to authorized users.

---

# 169. Bug Handling During Verification

When verification finds a bug:

1. record defect
2. assign severity
3. identify root area
4. fix shared cause where applicable
5. rerun targeted tests
6. rerun regression tests
7. repeat live-browser flow
8. update bug status
9. update project state
10. update feature registry

Critical and High defects block PASS.

---

# 170. No Fake Verification

Prohibited verification claims:

* “Looks correct” without running
* “Should work” without testing
* “Production ready” without provider and deployment evidence
* “RLS secure” without identity-based queries
* “Responsive” after testing one width
* “Payment works” after client checkout only
* “Email works” after rendering a template
* “One million users supported” without load evidence
* “Backup verified” without restore

---

# 171. Documentation Maintenance

Operational implementation must update:

* `PROJECT_STATE.md`
* `FEATURE_REGISTRY.md`
* relevant detailed authority document when contract changes
* prompt file only when the approved phase process changes
* `.env.example` when environment variables change
* migration records when schema changes
* runbooks when operational behavior changes

---

# 172. PROJECT_STATE Update Requirements

Record:

* current phase
* implementation status
* verification status
* active server
* providers
* skills
* migrations
* environment
* test results
* live-browser evidence
* responsive widths
* security
* performance
* deployment
* backup
* rollback
* bugs
* blockers
* next action

---

# 173. FEATURE_REGISTRY Update Requirements

Every completed or changed feature must record:

* feature ID
* name
* role
* routes
* components
* services
* tables
* migrations
* RLS
* provider dependency
* state coverage
* responsive coverage
* automated tests
* manual verification
* security
* performance
* current status
* known limitations

---

# 174. Production Readiness Categories

Production readiness must be evaluated separately for:

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

One passing category does not make the entire platform production-ready.

---

# 175. Final Production Readiness Checklist

The platform may be declared production-ready only when:

* final approved scope is implemented
* public roles are correct
* internal permissions work
* Supabase production environment is verified
* migrations are applied
* RLS passes
* auth works with live OTP
* email works
* payment works
* media works
* jobs and scheduler work
* role dashboards work
* Admin works
* moderation works
* recovery works
* reports and support work
* billing and invoices work
* provider Admin states are honest
* responsive verification passes
* accessibility verification passes
* security testing passes
* performance is measured
* load testing is documented
* monitoring is active
* alerts have owners
* backups exist
* restore is tested
* rollback is tested
* domains resolve
* SSL is valid
* production smoke testing passes
* post-launch monitoring is planned
* known limitations are documented
* no Critical or High defects remain

---

# 176. Launch-Day Checklist

Launch day must include:

* release freeze
* approved commit
* backup confirmation
* provider confirmation
* domain confirmation
* SSL confirmation
* production environment confirmation
* migration confirmation
* deployment
* health check
* role smoke tests
* payment smoke test
* OTP smoke test
* email smoke test
* media smoke test
* Admin smoke test
* monitoring review
* support readiness
* incident ownership
* post-launch observation

---

# 177. Launch Blocking Conditions

Launch must be blocked by:

* unresolved Critical defect
* unresolved High security defect
* RLS failure
* production OTP unavailable
* payment inconsistency
* private-data exposure
* invalid SSL
* migration failure
* no valid backup
* restore not tested for critical launch
* rollback unavailable
* Admin unauthorized access
* provider false-success behavior
* production development bypass
* critical monitoring unavailable

---

# 178. Post-Launch Operational Cadence

Recommended ongoing operations include:

## Daily

* provider health
* failed jobs
* payment reconciliation
* critical errors
* security alerts
* support backlog
* backup status

## Weekly

* performance trends
* slow queries
* dependency alerts
* moderation backlog
* report backlog
* storage and database usage
* provider cost

## Monthly

* restore test according to policy
* permission review
* internal user review
* feature-flag review
* retention review
* incident review
* capacity review
* billing consistency review

---

# 179. Permission Review

Internal permissions must be reviewed periodically.

Review:

* active Staff
* inactive Staff
* unnecessary permissions
* expired access
* sensitive permissions
* provider access
* refund access
* export access
* audit access
* recovery access
* maintenance access

Remove access that is no longer required.

---

# 180. Provider Cost Monitoring

Monitor:

* OTP cost
* email volume
* payment fees
* storage
* bandwidth
* image processing
* CDN
* monitoring
* queue
* database
* backup

Unexpected cost increases must trigger review.

---

# 181. Capacity Monitoring

Monitor:

* active users
* request volume
* database size
* connection usage
* query latency
* storage use
* bandwidth
* queue depth
* provider quota
* error rate
* cache hit ratio

Capacity planning must be based on measured growth.

---

# 182. Operational Security Review

Periodic review must include:

* secrets
* dependency vulnerabilities
* RLS
* permissions
* internal accounts
* provider access
* webhook signatures
* export access
* session security
* logs
* backups
* incident readiness

---

# 183. Final Skill Registry Requirements

Before completion of Phase 0, all nine skills must have an explicit status.

No skill may remain silently unreviewed.

The registry must state:

* used
* not used
* disabled
* incompatible
* blocked
* approved for later phase

---

# 184. Final Provider Registry Requirements

Before production sign-off, every provider category must have an explicit state.

Required categories:

* Supabase database
* Supabase authentication
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

No provider category may remain ambiguous.

---

# 185. Final QA Registry Requirements

Before production sign-off, record:

* unit tests
* integration tests
* end-to-end tests
* manual browser tests
* responsive tests
* accessibility tests
* security tests
* RLS tests
* provider tests
* performance tests
* load tests
* deployment tests
* restore tests
* rollback tests
* production smoke tests

---

# 186. Non-Negotiable Skills Rules

1. Every skill must be inspected before use.
2. Current official repository instructions must be used.
3. License must be reviewed.
4. Security must be reviewed.
5. Compatibility must be reviewed.
6. Skill conflicts must be resolved in favor of project authority.
7. Duplicate skill systems must not create duplicate documentation or architecture.
8. Installation requires a Git checkpoint.
9. Changed files must be inspected.
10. Smoke testing is mandatory.
11. Installed does not mean active.
12. Skill usage must be recorded.
13. Unsafe or incompatible skills must be disabled or removed.
14. Skills must never access production secrets.
15. Skills must never redefine final roles or product scope.

---

# 187. Non-Negotiable Provider Rules

1. Providers must use service abstractions.
2. Provider state must remain honest.
3. Configuration alone does not mean verified.
4. Test mode does not mean production-ready.
5. Secrets remain server-only.
6. Production and staging credentials are separate.
7. Development bypasses are disabled in production.
8. Provider failures must not create fake success.
9. Provider integration requires monitoring.
10. Provider integration requires failure handling.
11. Payment success requires verified webhook evidence.
12. Email failure must not remove valid business data.
13. OTP must be rate-limited and abuse-protected.
14. Private media requires signed access.
15. Background jobs require idempotency and retries.
16. Scheduler runs must be observable.
17. Provider changes require audit and rollback.
18. Every provider requires a runbook.
19. Production readiness requires a live test.
20. Every provider category needs an explicit final status.

---

# 188. Non-Negotiable QA Rules

1. Visual inspection alone is insufficient.
2. Every phase requires automated checks.
3. Every phase requires live-browser verification where applicable.
4. Browser Back must be tested.
5. Direct URLs must be tested.
6. Wrong-role access must be tested.
7. Wrong-user access must be tested.
8. RLS must be tested with real identities.
9. Required responsive widths must be tested.
10. Keyboard and focus must be tested.
11. Console must be checked.
12. Network must be checked.
13. Loading, empty, error, success, blocked, and Setup Required states must be tested.
14. Critical and High bugs block PASS.
15. Bugs must be fixed and retested.
16. Provider states must be verified.
17. Performance claims require measurement.
18. Scalability claims require load testing.
19. Backup claims require restore testing.
20. Production readiness requires production smoke testing.

---

# 189. Non-Negotiable Deployment Rules

1. Production deployment requires staging verification.
2. Production deployment requires an approved commit.
3. Production deployment requires environment validation.
4. Database changes require migrations.
5. High-risk migrations require backup.
6. Deployment requires rollback.
7. Domains must resolve correctly.
8. SSL must be valid.
9. Role hosts must be verified.
10. Webhooks must use production URLs.
11. Provider keys must match the production environment.
12. Monitoring must be active.
13. Alerts must have owners.
14. Support must be ready.
15. Production smoke tests are mandatory.
16. Launch is blocked by Critical or High security failures.
17. Development modes must be disabled.
18. Fake data must not remain public.
19. Post-launch monitoring is mandatory.
20. Production readiness must be recorded honestly.

---

# 190. Non-Negotiable Operational Rules

1. Every critical system has an owner.
2. Every critical alert has a runbook.
3. Logs must be redacted.
4. Audit logs and technical logs remain separate.
5. Backups must be monitored.
6. Restores must be tested.
7. Incidents must be recorded.
8. High and Critical incidents require post-incident review.
9. Recovery must preserve data integrity.
10. Maintenance mode must be controlled and audited.
11. Exports must remain private.
12. Data retention must be documented.
13. Cleanup jobs must be monitored.
14. Capacity must be measured.
15. Provider cost must be monitored.
16. Permissions must be reviewed.
17. Releases must be traceable.
18. Hotfixes must remain tested and documented.
19. Project state must remain current.
20. Feature registry must remain current.

---

# 191. Implementation Handoff

The final file must define the complete phase-by-phase Claude implementation and manual verification system.

It must include:

* exact phase order
* one implementation prompt per phase
* one matching verification prompt per phase
* GitHub skill setup
* repository audit
* architecture
* database
* RLS
* authentication
* design system
* homepage
* search
* location
* SEO
* Property
* Project
* Units
* Direct Inquiry
* Leads
* Owner dashboard
* Broker dashboard
* Builder dashboard
* promotions
* Admin
* moderation
* recovery
* billing
* providers
* security
* privacy
* performance
* scale
* complete SaaS UX audit
* production APIs
* deployment
* production sign-off
* exact evidence formats
* server-running requirement
* state and registry updates
* no-PASS-without-verification rules

---

