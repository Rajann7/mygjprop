# `docs/08_ADMIN_SUPER_ADMIN_MODERATION_BILLING_BUGS_AND_RECOVERY.md`

# My Gujarat Property — Admin, Super Admin, Staff Permissions, Moderation, Billing, Providers, Reports, Support, Bugs, Security, Audit, Recovery, System Settings, and Verification Authority

This document defines the complete internal operating system for **My Gujarat Property**.

It is the primary authority for:

* Super Admin
* Admin
* permission-scoped internal staff
* internal authentication and authorization
* internal application shell
* internal dashboards
* user management
* profile and account management
* Property management
* Project management
* Unit management
* Requirement management
* Direct Inquiry and Lead oversight
* message and activity access
* promotion management
* moderation
* approval
* rejection
* Changes Required
* reopening
* pausing and resuming
* soft deletion
* restoration
* reports
* support tickets
* bug management
* billing
* plans
* subscriptions
* payment orders
* payments
* refunds
* invoices
* usage limits
* provider configuration
* provider health
* security events
* sessions and devices
* audit logs
* recovery
* feature flags
* CMS and SEO controls
* location management
* system settings
* maintenance mode
* operational alerts
* bulk actions
* exports
* responsive Admin UX
* mobile Admin
* tablet Admin
* accessibility
* performance
* security
* automated testing
* manual verification
* production sign-off

Claude must read this document before implementing or changing:

* Admin routes
* Super Admin routes
* staff permissions
* moderation workflows
* billing management
* provider settings
* report handling
* support-ticket handling
* bug management
* security management
* recovery tools
* audit tools
* system settings
* feature flags
* maintenance mode
* internal dashboards
* internal bulk actions
* internal exports
* sensitive mutations

---

# 1. Internal Platform Goal

The internal application must allow authorized staff to operate the complete platform without editing the database manually.

The internal application must be:

* secure
* permission-scoped
* deeply connected
* auditable
* recoverable
* responsive
* mobile-usable
* operationally clear
* efficient for repeated daily use
* original and Apple-inspired
* consistent with the public platform
* honest about provider and system state

The internal application must not feel like:

* a shallow CRUD template
* a collection of disconnected tables
* a dashboard with fake metrics
* a system where every edit happens in one generic popup
* a system where staff can change sensitive data without reason
* a system where moderation mistakes cannot be corrected
* a system where rejected or deleted entities lose their history
* a system where payment status can be manually marked successful without controls
* a system where provider secrets are visible to all Admin users
* a desktop-only interface
* an application where mobile screens are unusable
* a system where users, content, billing, reports, security, and audit are disconnected

---

# 2. Internal User Classes

The internal application supports:

1. Super Admin
2. Admin
3. Permission-scoped Staff

Public registration must never create internal users.

Internal users must be:

* invited
* created by an authorized internal user
* approved
* assigned an internal role class
* assigned explicit permissions
* protected by internal authentication controls
* auditable

---

# 3. Super Admin Authority

Super Admin is the highest internal platform authority.

Super Admin may manage, subject to audit and safety rules:

* internal users
* staff roles
* permissions
* public users
* public role state
* account restrictions
* suspensions
* restorations
* Properties
* Projects
* Units
* Requirements
* Direct Inquiries
* Leads
* reports
* support
* bugs
* moderation
* promotions
* billing
* plans
* subscriptions
* payments
* refunds
* invoices
* providers
* feature flags
* locations
* CMS
* SEO
* legal content
* security settings
* sessions
* system settings
* maintenance mode
* audit
* recovery
* operational status

Super Admin must still follow:

* confirmation
* reason requirements
* server-side authorization
* validation
* before-and-after review
* audit logging
* notification rules
* recovery rules
* legal retention
* privacy rules

Super Admin must not silently bypass audit.

---

# 4. Admin Authority

Admin access is permission-scoped.

An Admin may be allowed to manage selected areas such as:

* users
* Properties
* Projects
* Units
* Requirements
* Leads
* moderation
* reports
* support
* bugs
* promotions
* billing
* CMS
* SEO
* locations
* recovery

An Admin does not automatically receive permission to:

* manage provider secrets
* manage internal users
* change staff permissions
* issue refunds
* permanently delete records
* access all private messages
* view verification documents
* view security events
* view audit logs
* use unrestricted exports
* change system security settings
* activate maintenance mode

These require explicit permissions.

---

# 5. Staff Authority

Staff users perform narrow operational responsibilities.

Examples:

* moderation reviewer
* support agent
* billing reviewer
* content editor
* SEO manager
* location reviewer
* security analyst
* recovery specialist
* bug triage staff
* provider operations staff

Staff must see only the modules, records, fields, and actions required by their assigned permissions.

---

# 6. Permission Model

The internal system must use action-based permissions.

A role name alone is not sufficient.

Recommended permission format:

```text
module.action
```

Examples:

```text
users.view
users.edit
users.restrict
users.suspend
users.restore
users.export

properties.view
properties.edit
properties.moderate
properties.pause
properties.restore

projects.view
projects.edit
projects.moderate
projects.pause
projects.restore

units.view
units.edit
units.restore

requirements.view
requirements.moderate

leads.view
leads.edit
leads.view_messages
leads.view_private_notes
leads.export

reports.view
reports.manage
reports.escalate

support.view
support.reply
support.assign
support.close

bugs.view
bugs.create
bugs.assign
bugs.verify
bugs.close

billing.view
billing.manage
plans.manage
subscriptions.manage
payments.view
payments.reconcile
payments.refund
invoices.view
invoices.issue

promotions.view
promotions.moderate
promotions.pause
promotions.restore

providers.view
providers.manage
providers.test
providers.view_safe_diagnostics

locations.view
locations.manage
locations.merge

cms.view
cms.edit
cms.publish

seo.view
seo.manage

audit.view
security.view
security.manage
sessions.revoke
recovery.view
recovery.manage
staff.view
staff.manage
permissions.manage
settings.view
settings.manage
feature_flags.manage
maintenance.manage
exports.manage
```

---

# 7. Permission Structure

Recommended internal permission tables:

* `staff_profiles`
* `staff_roles`
* `permissions`
* `staff_role_permissions`
* `staff_user_roles`
* `staff_permission_overrides`
* `staff_access_history`

Permission resolution must support:

* role-level permission
* user-specific grant
* user-specific denial
* module scope
* action scope
* optional environment scope
* optional entity scope
* active/inactive state
* expiry where required

Explicit denial should override a broader grant when configured.

---

# 8. Permission Enforcement

Permissions must be enforced at:

1. route level
2. server-layout level
3. service level
4. mutation level
5. database level where applicable
6. UI level
7. export level
8. field level for sensitive data

Hidden UI is not authorization.

Every sensitive service must verify the exact permission.

---

# 9. Field-Level Access

Some permissions must control individual fields.

Examples:

A support agent may see:

* user name
* safe account status
* support history

but not:

* full payment details
* private verification documents
* internal security events
* provider configuration
* private Lead notes

Field-level access must be implemented through:

* safe data selectors
* server response shaping
* public/internal safe views
* permission-aware serializers

Do not load sensitive fields and merely hide them with CSS.

---

# 10. Internal Authentication

Internal authentication must be separate from public registration.

Internal authentication must support:

* approved internal identity
* secure session
* internal account status
* permission loading
* stronger session control
* logout
* session revocation
* optional step-up verification
* security monitoring
* account lockout
* audit

---

# 11. Internal Account States

Recommended internal account states:

* `invited`
* `active`
* `restricted`
* `suspended`
* `closed`

## Invited

The user has not completed secure activation.

## Active

The user may access assigned modules.

## Restricted

Some or all sensitive actions are blocked.

## Suspended

Internal access is blocked.

## Closed

The account is inactive and retained according to policy.

---

# 12. Internal Session Security

Internal sessions should use stricter controls than normal public sessions.

Requirements:

* secure cookies
* short idle timeout
* absolute session expiry
* recent-auth requirement for sensitive actions
* session revocation
* session list
* device summary
* suspicious-login detection
* permission refresh
* account-state refresh
* no public device persistence by default
* no raw token display

---

# 13. Step-Up Authentication

Sensitive operations may require recent verification.

Examples:

* changing staff permissions
* changing provider configuration
* issuing refund
* permanent deletion
* changing security settings
* disabling RLS-related protection
* activating maintenance mode
* exporting sensitive data
* restoring a high-risk account
* changing primary billing records

The step-up method must be implemented through approved secure authentication.

---

# 14. Internal Application Host

The internal application may use a dedicated host:

```text
https://account.example.com
```

The exact host must be environment-configured.

The internal host must:

* require secure authentication
* reject public-role-only access
* use server-side permission checks
* avoid public indexing
* use correct cookie scope
* use separate security headers where required
* support staging and local development

---

# 15. Internal Route Structure

Conceptual routes may include:

```text
/admin
/admin/users
/admin/users/[userId]
/admin/properties
/admin/properties/[propertyId]
/admin/projects
/admin/projects/[projectId]
/admin/units
/admin/units/[unitId]
/admin/requirements
/admin/requirements/[requirementId]
/admin/leads
/admin/leads/[leadId]
/admin/promotions
/admin/promotions/[promotionId]
/admin/moderation
/admin/reports
/admin/reports/[reportId]
/admin/support
/admin/support/[ticketId]
/admin/bugs
/admin/bugs/[bugId]
/admin/billing
/admin/plans
/admin/subscriptions
/admin/payments
/admin/invoices
/admin/providers
/admin/locations
/admin/cms
/admin/seo
/admin/security
/admin/audit
/admin/recovery
/admin/staff
/admin/permissions
/admin/settings
/admin/feature-flags
/admin/maintenance
```

Final routes must be recorded in `FEATURE_REGISTRY.md`.

---

# 16. Internal Application Shell

The internal shell must include:

* internal navigation
* current module
* global or scoped search
* notification access
* system alerts
* user menu
* permission-aware modules
* responsive content region
* safe loading states
* accessible navigation
* environment indicator outside production where useful

The shell must not expose:

* raw provider secrets
* service-role keys
* internal tokens
* private data without permission

---

# 17. Admin Navigation

Recommended primary navigation groups:

## Operations

* Overview
* Users
* Properties
* Projects
* Units
* Requirements
* Leads

## Moderation and Safety

* Moderation
* Reports
* Support
* Bugs
* Recovery

## Revenue

* Plans
* Subscriptions
* Payments
* Invoices
* Promotions

## Platform

* Locations
* CMS
* SEO
* Notifications
* Providers
* Feature Flags
* System Settings

## Security and Governance

* Staff
* Permissions
* Sessions
* Security Events
* Audit
* Maintenance

Navigation must show only permitted modules.

---

# 18. Internal Mobile Navigation

Mobile Admin may use:

* compact mobile header
* navigation drawer
* prioritized bottom navigation for most-used modules
* More screen
* full-screen detail routes
* mobile cards
* filter sheets

A mobile Admin bottom navigation may prioritize:

1. Overview
2. Users
3. Moderation
4. Reports
5. More

The exact mapping must be role- and permission-aware.

It must not expose modules the staff user cannot access.

---

# 19. Internal Tablet Navigation

Tablet may use:

* compact side rail
* bottom navigation
* collapsible drawer
* split list/detail
* touch-friendly filters
* full-screen sensitive actions

Tablet behavior must be intentionally verified.

---

# 20. Internal Desktop Navigation

Desktop may use:

* expandable sidebar
* compact rail
* grouped sections
* keyboard navigation
* stable active state
* contextual page tools

Avoid an overloaded top navigation containing every module.

---

# 21. Admin Dashboard Goal

The internal Overview dashboard must help staff understand:

* critical platform issues
* moderation workload
* user/account issues
* reports
* support backlog
* billing failures
* provider failures
* security alerts
* job failures
* recovery work
* system status

The dashboard must not show decorative charts without operational value.

---

# 22. Dashboard Priority

Recommended order:

1. critical system alert
2. provider or payment failure
3. security alert
4. moderation backlog
5. report backlog
6. support backlog
7. billing reconciliation issue
8. recovery queue
9. recent critical activity
10. platform summaries

---

# 23. Admin Metrics

Possible real metrics:

* Active Users
* Restricted Users
* Suspended Users
* Properties Pending Review
* Projects Pending Review
* Reports Awaiting Review
* Open Support Tickets
* Critical Bugs
* Failed Payments
* Payment Reconciliation Issues
* Active Promotions
* Provider Failures
* Failed Jobs
* Pending Recovery Cases

Every metric must:

* use real data
* have a defined query
* have a destination
* respect permissions
* show error state
* avoid fake trends

---

# 24. Dashboard Metric Destination

Examples:

```text
Properties Pending Review
→ Moderation Queue
→ Entity Type: Property
→ Status: Pending Review
```

```text
Failed Payments
→ Payments
→ Status: Failed
```

```text
Critical Bugs
→ Bugs
→ Severity: Critical
→ Status: Open
```

```text
Provider Failures
→ Providers
→ Status: Failed or Degraded
```

---

# 25. Internal Global Search

Permissioned staff may search:

* users
* Properties
* Projects
* Units
* Requirements
* Leads
* payments
* invoices
* reports
* tickets
* bugs
* audit references

Search results must be permission-filtered.

A user must not receive a result for a module or field they cannot access.

---

# 26. Global Search Result

Every result should include:

* entity type
* title or reference
* supporting context
* status
* exact destination
* access state

Sensitive data must be masked where full visibility is not required.

---

# 27. User Management

User management must support:

* list
* search
* role filter
* account-status filter
* verification filter
* subscription filter
* city filter
* activity filter
* security-risk filter where permitted
* user detail
* profile review
* role history
* account actions
* linked entities
* billing
* security
* audit
* recovery

---

# 28. User List

A User list row may show:

* display name
* public role
* account status
* verification summary
* city
* active entity count
* subscription summary
* last activity
* risk indicator where permitted
* created date

Do not overload the list with all private information.

---

# 29. User Filters

Approved filters may include:

* public role
* account status
* mobile verified
* email verified
* business verified
* subscription status
* registration date
* last active date
* city
* report state
* risk state
* profile completion

Filters must use server-side queries.

---

# 30. User Detail Graph

A User detail must support permission-aware sections:

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

Every section must be:

* clickable
* lazy-loaded where appropriate
* paginated
* permission-aware
* responsive
* deep-linkable where useful

---

# 31. User Overview

The overview may include:

* full name
* public role
* account status
* profile completion
* mobile verification
* email verification
* business verification
* subscription summary
* active entity counts
* report summary
* recent activity
* account alerts

Every count must link to its section.

---

# 32. User Profile Section

Profile must distinguish:

* private account profile
* public profile
* business profile
* verification fields
* contact fields
* public visibility

Private contact fields must be masked unless full-view permission exists.

---

# 33. User Role and Account Section

This section must show:

* current public role
* role assignment date
* role history
* role-change requests
* account status
* status history
* restrictions
* suspension history
* closure state
* current permitted actions

---

# 34. User Account Actions

Permissioned actions may include:

* edit permitted profile fields
* require verification
* restrict
* remove restriction
* suspend
* unsuspend
* close
* reopen
* revoke sessions
* request role review
* approve role change
* reject role change
* restore eligible records

Every action requires the correct permission.

---

# 35. Account Restriction Action

Restriction flow:

```text
User Detail
→ Restrict Account
→ Select Restriction Type
→ Review Impact
→ Enter Reason
→ Confirm
→ Server Validates
→ Restriction Applied
→ Sessions Updated where required
→ Audit Created
→ User Notified
```

The restriction must define blocked actions.

---

# 36. Account Suspension Action

Suspension requires:

* explicit permission
* reason
* impact preview
* confirmation
* account-state update
* session revocation where required
* public-content behavior
* audit
* notification
* recovery eligibility

Suspension must not delete user data.

---

# 37. Account Restoration

Unsuspending or restoring access requires:

* permission
* current state validation
* reason
* impact review
* confirmation
* account-state update
* audit
* notification
* security review where applicable

Original suspension history remains visible.

---

# 38. Role Change Management

A role-change case must show:

* current role
* requested role
* reason
* profile data
* verification impact
* subscription impact
* Property impact
* Project impact
* Unit impact
* Requirement impact
* Lead impact
* public-profile impact
* previous requests
* reviewer history

---

# 39. Role Change Approval

Approval must:

* validate requested role
* validate required profile
* validate verification
* calculate billing impact
* calculate data impact
* preserve existing ownership
* apply role assignment
* update role-specific profile
* update navigation state
* create history
* create audit
* notify user

Role change must not orphan existing data.

---

# 40. User Session Management

Security-permissioned staff may view safe session summaries:

* device type
* browser
* operating system
* created date
* last active
* revoked state
* approximate region where lawfully collected

Staff must not see raw tokens.

---

# 41. Session Revocation

Permissioned staff may:

* revoke one session
* revoke all sessions
* require reauthentication
* close suspicious sessions

Every revocation requires:

* reason
* target session
* confirmation
* audit
* notification where appropriate

---

# 42. Property Management

Admin Property management must support:

* list
* search
* filters
* Property detail
* owner relation
* public preview
* media
* moderation
* Leads
* reports
* billing relation
* activity
* audit
* recovery
* lifecycle actions

---

# 43. Property List Filters

Possible filters:

* moderation state
* publication state
* lifecycle state
* owner role
* city
* category
* purpose
* created date
* updated date
* report status
* verification state
* billing/plan issue
* soft-deleted state
* assigned reviewer

---

# 44. Admin Property Detail

Required sections:

1. Overview
2. Owner
3. Public Data
4. Private Data where permitted
5. Media
6. Moderation
7. Leads
8. Reports
9. Activity
10. Billing Relation
11. Audit
12. Recovery

---

# 45. Property Owner Link

The Owner or Broker name must open:

```text
Property
→ User Detail
```

The User detail must link back to the Property.

---

# 46. Property Leads Link

Required:

```text
Property
→ Leads
→ Specific Lead
→ Messages
→ Activity
→ User
```

Every relationship must remain permission-controlled.

---

# 47. Admin Property Editing

Admin editing must be field-scoped.

Use:

* inline edit for small safe values
* modal for short focused correction
* drawer for contextual review
* dedicated page for complex correction

Admin must not receive a generic unrestricted object editor.

---

# 48. Property Edit Review

Before saving a sensitive correction, show:

* current value
* proposed value
* moderation impact
* public visibility impact
* billing impact where applicable
* reason field
* affected caches
* affected search/SEO
* confirmation

---

# 49. Project Management

Project management must support:

* list
* search
* filters
* Builder link
* Project detail
* Units
* Leads
* promotion relation
* compliance
* media
* moderation
* reports
* billing
* audit
* recovery

---

# 50. Project Detail Sections

Required:

1. Overview
2. Builder
3. Units
4. Leads
5. Promotions
6. Compliance
7. Media
8. Moderation
9. Reports
10. Activity
11. Billing
12. Audit
13. Recovery

---

# 51. Project Unit Drill-Down

Required:

```text
Project
→ Units
→ Unit
→ Inventory History
→ Price History
→ Unit Leads
→ Lead
```

The Unit must retain the parent Project context.

---

# 52. Unit Management

Admin Unit management must support:

* list inside Project
* direct detail
* inventory
* pricing
* availability
* media
* Leads
* status history
* reports
* audit
* recovery

---

# 53. Inventory Correction

Inventory correction requires:

* permission
* current values
* proposed values
* reason
* validation
* total consistency check
* before-and-after preview
* inventory event
* audit
* public cache update
* notification where appropriate

---

# 54. Price Correction

Price correction requires:

* permission
* current price
* proposed price
* currency
* reason
* effective time
* price-history record
* moderation-impact review
* cache invalidation
* audit

---

# 55. Requirement Management

Requirement management must support:

* list
* search
* filters
* owner
* detail
* moderation
* responses
* related Leads
* expiry
* renewal
* pause
* close
* restore
* reports
* audit

---

# 56. Requirement Detail

Required sections:

* Requirement data
* owner
* location
* moderation
* responses
* related Leads
* expiry
* activity
* reports
* audit
* recovery

---

# 57. Lead Management

Admin Lead management must support:

* list
* search
* filters
* owner
* contact user
* source entity
* messages where permitted
* private notes where permitted
* follow-ups
* reports
* security events
* activity
* status history
* audit

---

# 58. Lead Privacy

Admin access to Lead content must be permission-scoped.

Possible permission levels:

* Lead summary only
* contact details
* messages
* private user notes
* internal notes
* reports
* security events

Do not provide all Admin users unrestricted message access.

---

# 59. Admin Lead Detail

Required sections:

1. Summary
2. Participants
3. Source Entity
4. Messages
5. Notes
6. Follow-Ups
7. Activity
8. Reports
9. Security
10. Audit

Sections must appear only when permitted.

---

# 60. Lead Status Correction

Admin correction requires:

* permission
* current status
* proposed status
* reason
* impact preview
* confirmation
* status history
* activity
* audit
* notification where appropriate

Admin must not send messages pretending to be a participant.

---

# 61. Promotion Management

Promotion management must support:

* list
* Builder
* destination
* creative
* city targeting
* schedule
* billing
* moderation
* active state
* pause
* resume
* expiry
* performance
* reports
* audit
* recovery

---

# 62. Promotion Eligibility Review

Before approval, verify:

* Builder account eligible
* destination active
* destination approved
* creative valid
* target city valid
* schedule valid
* billing valid
* policy accepted
* no blocking report
* no duplicate conflict

---

# 63. Promotion Approval

Approval requires:

* promotion moderation permission
* confirmation
* optional internal note
* validated schedule
* valid billing
* valid destination
* audit
* notification
* activation or scheduling logic

---

# 64. Promotion Pause

Permissioned Admin may pause a promotion for:

* policy violation
* invalid destination
* billing issue
* report
* security concern
* requested pause

Pause requires:

* reason
* confirmation
* audit
* Builder notification
* homepage cache invalidation

---

# 65. Moderation System

Moderation must support:

* Properties
* Projects
* Units where configured
* Requirements
* promotions
* public profiles
* verification
* locations
* CMS
* SEO content
* reports

---

# 66. Moderation Case

A moderation case should include:

* case ID
* entity type
* entity ID
* submitter
* current state
* assigned reviewer
* priority
* submitted timestamp
* review start
* decision
* user-facing reason
* internal note
* requested changes
* completed timestamp
* previous case relation
* audit relation

---

# 67. Moderation Queue

The queue must support:

* entity type
* status
* priority
* age
* assigned reviewer
* city
* role
* report risk
* previous rejection
* resubmission
* billing or compliance warning
* sorting
* pagination

---

# 68. Moderation Assignment

Cases may be:

* unassigned
* assigned to staff
* reassigned
* escalated
* returned to queue

Assignment actions require:

* permission
* current-state validation
* audit
* optional notification to reviewer

---

# 69. Moderation Statuses

Recommended statuses:

* `pending_review`
* `in_review`
* `changes_required`
* `approved`
* `rejected`
* `reopened`
* `archived`

---

# 70. Moderation Review UX

The moderation screen must show:

* entity summary
* submitter
* public preview
* changed fields
* media
* compliance
* previous decisions
* reports
* risk context
* billing/plan context
* audit
* decision actions

Do not force a complex moderation workflow into a small modal.

---

# 71. Before-and-After Comparison

When reviewing resubmission or Admin edit, show:

* previous value
* proposed value
* changed-field indicator
* added media
* removed media
* status change
* reviewer note
* relevant history

The comparison must be readable on mobile.

---

# 72. Approve Action

Approval requires:

* permission
* current eligible state
* server validation
* required fields
* policy checks
* confirmation
* reviewer identity
* moderation action
* entity status update
* history
* audit
* notification
* cache invalidation

---

# 73. Changes Required Action

Changes Required must include:

* user-facing explanation
* affected sections
* required corrections
* optional internal note
* confirmation
* history
* audit
* notification

The submitter must receive a clear correction path.

---

# 74. Reject Action

Rejection requires:

* permission
* clear reason
* internal reason where appropriate
* confirmation
* history
* audit
* notification
* recovery eligibility

Rejection must not delete the entity.

---

# 75. Reopen Action

A rejected or completed moderation case may be reopened.

Reopen requires:

* permission
* reason
* current-state validation
* preserved previous decision
* new review state
* audit
* notification where appropriate

---

# 76. Moderation Escalation

A case may be escalated for:

* legal concern
* suspected fraud
* security risk
* billing issue
* verification conflict
* repeated policy violation
* complex compliance review

Escalation must record:

* reason
* target team
* priority
* actor
* timestamp
* audit

---

# 77. Report Management

Reports may relate to:

* user
* Property
* Project
* Unit
* Requirement
* Lead
* message
* promotion
* public profile
* payment
* support interaction
* other approved entities

---

# 78. Report Queue

The report queue must support:

* status
* severity
* entity type
* category
* reporter
* reported user
* assigned reviewer
* date
* repeated-report indicator
* linked security event
* linked moderation case
* escalation state

---

# 79. Report Detail

Required sections:

* report summary
* reporter
* reported entity
* reported user
* evidence
* related reports
* related moderation
* related security events
* related support
* recommended actions
* resolution
* audit

---

# 80. Report Actions

Possible actions:

* dismiss
* request clarification
* warn user
* request changes
* pause entity
* reopen moderation
* restrict account
* suspend account
* escalate security review
* resolve
* reopen report

Every action requires permission and reason.

---

# 81. Report Resolution

Resolution must include:

* outcome
* user-facing message where appropriate
* internal note
* action taken
* reviewer
* timestamp
* linked audit
* notification
* recovery path where relevant

---

# 82. Support Ticket Management

Support must support:

* ticket list
* category
* priority
* status
* user
* related entity
* assignment
* conversation
* attachments when configured
* internal notes
* escalation
* resolution
* reopening
* satisfaction signal where approved

---

# 83. Support Ticket Statuses

Recommended:

* `open`
* `assigned`
* `waiting_for_user`
* `waiting_for_internal`
* `resolved`
* `closed`
* `reopened`

---

# 84. Support Ticket Detail

Required:

* ticket summary
* user
* category
* priority
* related entity
* conversation
* internal notes
* assignment
* SLA or age indicator where configured
* status history
* audit
* linked bug or report

---

# 85. Support Reply

A reply must:

* use a clearly identified staff identity
* be stored
* notify the user
* support failed-delivery state
* avoid exposing internal notes
* support attachments only when secure storage exists
* create activity

---

# 86. Support Internal Notes

Internal notes must be visually and technically separate from user-visible replies.

They require:

* author
* timestamp
* permission
* edit history where allowed
* audit where sensitive

---

# 87. Support Assignment

Assignment actions must:

* validate staff permission
* validate assignee
* record previous assignee
* record new assignee
* record timestamp
* create activity
* optionally notify assignee
* create audit where required

---

# 88. Bug Management

The internal bug system must support:

* bug creation
* triage
* severity
* priority
* module
* affected role
* affected route
* reproduction
* expected result
* actual result
* environment
* related user
* related entity
* logs/reference
* owner
* status
* fix information
* verification
* release relation
* reopening

---

# 89. Bug Fields

Recommended fields:

* bug ID
* title
* description
* severity
* priority
* module
* affected role
* affected route
* environment
* reproduction steps
* expected behavior
* actual behavior
* related user
* related entity
* safe diagnostic reference
* assigned owner
* status
* root cause
* fix summary
* changed files
* migration relation
* test result
* verified by
* release ID
* created date
* updated date

---

# 90. Bug Severity

Recommended:

* Critical
* High
* Medium
* Low

## Critical

Examples:

* private data leak
* payment corruption
* authentication bypass
* destructive action without authorization
* platform unavailable
* public content shows private information

## High

Examples:

* core workflow blocked
* Property or Project cannot be submitted
* Lead inaccessible to correct user
* Admin moderation broken
* payment verification delayed or incorrect

## Medium

Examples:

* secondary workflow defect
* incorrect non-critical state
* moderate responsive issue

## Low

Examples:

* cosmetic issue
* minor text issue
* small alignment issue

---

# 91. Bug Lifecycle

Recommended:

```text
New
→ Triaged
→ Assigned
→ In Progress
→ Fixed
→ Verification
→ Closed
```

Additional states:

* Blocked
* Deferred
* Duplicate
* Cannot Reproduce
* Reopened

---

# 92. Bug Verification

A bug cannot move to Closed until:

* reproduction is confirmed or documented
* fix is implemented
* automated checks run
* manual verification runs
* affected route is tested
* related regression areas are tested
* console and network are checked
* verification result is recorded

---

# 93. Bug Deep Linking

A bug may link to:

* user
* Property
* Project
* Unit
* Lead
* report
* support ticket
* payment
* provider
* deployment
* release
* audit event

All links must respect permissions.

---

# 94. Billing Administration

Billing Admin must support:

* plans
* plan features
* trials
* subscriptions
* usage
* payment orders
* payments
* payment events
* reconciliation
* refunds
* billing profiles
* invoices
* credit notes where implemented
* promotion billing
* billing reports
* audit

---

# 95. Plan Management

A plan may define:

* role
* name
* description
* price
* currency
* billing interval
* trial
* Property limit
* Project limit
* Unit limit
* promotion allowance
* storage allowance
* feature access
* usage limits
* active state
* public state
* display order
* effective date

---

# 96. Plan Change Safety

Changing a plan requires:

* permission
* current value
* proposed value
* affected subscribers
* effective date
* grandfathering policy
* billing impact
* public pricing impact
* confirmation
* audit
* cache invalidation

Do not silently change active subscriber billing without a documented rule.

---

# 97. Plan Versioning

Major plan changes should create a new version or effective-date record.

The system must preserve:

* old plan terms
* subscriber relation
* invoice history
* billing history
* feature history

---

# 98. Subscription Management

Subscription detail must include:

* user
* role
* plan
* status
* start
* current period
* trial
* renewal
* cancellation
* provider
* provider reference
* usage
* payments
* invoices
* events
* audit

---

# 99. Subscription Statuses

Recommended:

* `trialing`
* `active`
* `past_due`
* `paused`
* `cancelled`
* `expired`
* `incomplete`

Status must be server-controlled.

---

# 100. Manual Subscription Grant

An authorized Admin may grant or adjust a subscription only when the business policy allows it.

Required:

* permission
* user
* plan
* duration
* reason
* source
* impact preview
* confirmation
* audit
* notification
* expiry handling

Manual grant must be clearly distinguishable from provider-paid subscription.

---

# 101. Trial Management

Trial management must support:

* eligibility
* start date
* end date
* plan
* usage limits
* extension
* cancellation
* conversion
* history
* audit

Trial extension requires reason and permission.

---

# 102. Usage Management

Usage may include:

* Properties
* Projects
* Units
* promotions
* storage
* exports
* other plan-limited actions

Usage must be:

* server-calculated
* traceable
* consistent with real records
* protected from client manipulation
* visible to the user and Admin
* corrected only through controlled process

---

# 103. Usage Correction

Usage correction requires:

* permission
* current value
* expected value
* source records
* reason
* correction method
* before-and-after preview
* audit
* recalculation where possible

Prefer recalculating from authoritative records over manual number editing.

---

# 104. Payment Order Management

Payment-order detail may include:

* user
* purpose
* plan or promotion
* amount
* currency
* tax
* provider
* provider order ID
* status
* creation date
* expiry
* payment relation
* webhook events
* reconciliation state
* audit

---

# 105. Payment Status Authority

Payment status may be changed only through:

* verified provider event
* verified reconciliation
* approved internal correction with strict permission and evidence

Client-side checkout success is not authoritative.

---

# 106. Payment Detail

Required sections:

* order
* user
* amount
* purpose
* provider
* payment ID
* provider status
* internal status
* webhook history
* reconciliation
* invoice
* refund
* safe error
* audit

---

# 107. Payment Reconciliation

Reconciliation must compare:

* internal order
* provider order
* provider payment
* webhook events
* subscription activation
* invoice
* refund

Discrepancies must enter a reconciliation queue.

---

# 108. Reconciliation Queue

The queue may include:

* payment captured but subscription inactive
* internal payment pending but provider captured
* duplicate webhook
* amount mismatch
* signature failure
* invoice missing
* refund mismatch
* provider timeout

Each case must have:

* severity
* owner
* status
* evidence
* action
* audit

---

# 109. Payment Correction

Manual correction requires:

* high-level permission
* supporting provider evidence
* current state
* proposed state
* amount verification
* user verification
* impact preview
* reason
* confirmation
* audit
* notification
* subscription/invoice consistency check

---

# 110. Refund Management

Refund actions require:

* refund permission
* payment eligibility
* amount validation
* provider capability
* reason
* user impact
* plan or promotion impact
* confirmation
* provider request
* verified provider result
* refund record
* audit
* notification

Do not show refund success before provider confirmation.

---

# 111. Invoice Management

Invoice detail must include:

* user
* billing profile
* payment
* line items
* taxes
* total
* currency
* status
* issue date
* invoice number
* provider relation where applicable
* document
* audit

Invoices must remain private.

---

# 112. Invoice Issuance

An invoice may be issued only from:

* verified payment
* approved manual billing event
* valid billing profile
* valid tax data

Invoice issuance requires idempotency.

---

# 113. Invoice Correction

Invoice correction may require:

* credit note
* cancellation
* reissue
* legal retention
* audit

Do not overwrite issued invoice history silently.

---

# 114. Promotion Billing

Promotion billing must connect:

```text
Builder
→ Promotion
→ Payment Order
→ Payment
→ Invoice
→ Promotion Eligibility
```

A promotion must not become active unless required billing is valid.

---

# 115. Provider Management

Provider management may include:

* Supabase
* SMS OTP
* email
* payment
* media storage
* CDN
* error monitoring
* analytics
* background jobs
* scheduler
* backup provider
* uptime monitoring

---

# 116. Provider State Model

Provider states must use:

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

Provider state must be honest.

---

# 117. Provider Configuration Security

Provider secrets must be stored in:

* secure environment configuration
* approved secret manager
* provider platform settings

The database may store only:

* provider identifier
* public-safe configuration
* secret reference
* masked identifier
* state
* health
* changed by
* changed date

Do not store raw secrets in readable Admin tables.

---

# 118. Provider Management Permissions

Possible permissions:

* view provider status
* view safe diagnostics
* modify non-secret settings
* update secret reference
* run test
* enable
* disable
* switch test/live mode
* view health
* view delivery logs

Each level must be separately controlled.

---

# 119. Provider Configuration Change

A sensitive provider change requires:

* permission
* step-up authentication
* current safe configuration
* proposed configuration
* environment
* impact preview
* validation
* test
* confirmation
* audit
* rollback information

---

# 120. Provider Test

A provider test must:

* use a safe test path
* avoid real user impact
* use test recipient or sandbox where possible
* store result
* show latency
* show safe response
* never expose secret
* create audit when sensitive

A provider must not become `ACTIVE` solely because configuration exists.

---

# 121. OTP Provider Management

OTP provider management must show:

* provider name
* environment
* configured state
* test/live mode
* recent send success rate
* recent failures
* quota/cost warning where available
* rate-limit status
* last verified test
* production readiness

Development OTP mode must be impossible to enable in production.

---

# 122. Email Provider Management

Email provider management must show:

* configured state
* sender domain
* verified sender state
* recent delivery
* failure rate
* bounce state where available
* template health
* last live test
* provider status

---

# 123. Payment Provider Management

Payment provider management must show:

* configured state
* test/live mode
* webhook configuration
* signature verification state
* recent payment success
* failed payments
* reconciliation issues
* last verified test
* production readiness

---

# 124. Media Provider Management

Media provider management must show:

* storage state
* upload state
* processing state
* CDN state
* private-document access
* recent failures
* quota
* last verified test
* cleanup job status

---

# 125. Provider Failure UX

Provider failure must show:

* affected provider
* status
* affected features
* last success
* safe error summary
* retry
* runbook link where approved
* incident owner
* recovery state

Do not display raw provider credentials or complete raw payloads.

---

# 126. Feature Flags

Feature flags may control:

* staged rollout
* provider-backed functionality
* beta features
* expensive features
* promotion availability
* maintenance behavior
* new search behavior
* new dashboard modules

---

# 127. Feature Flag Fields

A feature flag may include:

* key
* description
* environment
* enabled state
* audience
* percentage rollout
* role scope
* user scope where approved
* start date
* end date
* reason
* changed by
* audit
* rollback state

---

# 128. Feature Flag Safety

Feature flags must not:

* bypass RLS
* bypass permission
* bypass billing
* expose incomplete security logic
* activate production development modes
* hide data corruption

---

# 129. Feature Flag Change

Changing a high-impact flag requires:

* permission
* impact preview
* current state
* proposed state
* target audience
* reason
* confirmation
* audit
* monitoring plan
* rollback plan

---

# 130. System Settings

System settings may include:

* platform name
* public URLs
* support details
* grievance details
* default city
* listing rules
* moderation settings
* billing display settings
* notification defaults
* retention
* feature behavior
* maintenance state
* operational limits

Settings must be:

* typed
* validated
* versioned where necessary
* permissioned
* auditable
* environment-aware

---

# 131. System Setting Change

Sensitive setting changes require:

* permission
* current value
* proposed value
* validation
* impact preview
* reason
* confirmation
* audit
* cache invalidation
* rollback

---

# 132. Maintenance Mode

Maintenance mode may be activated for:

* critical migration
* security incident
* provider outage
* emergency repair
* planned maintenance

Maintenance mode must support:

* public message
* start time
* expected end
* allowed internal access
* health route
* critical provider callbacks where required
* payment-webhook handling
* audit
* automatic or manual disable
* rollback

---

# 133. Maintenance Mode Activation

Activation requires:

* high-level permission
* step-up authentication
* reason
* impact preview
* duration
* confirmation
* audit
* operational notification
* rollback plan

Do not block critical payment webhooks or recovery callbacks unintentionally.

---

# 134. Security Event Management

Security events may include:

* repeated OTP failures
* suspicious login
* session abuse
* unauthorized access attempts
* export abuse
* webhook-signature failure
* provider-secret change
* upload rejection
* inquiry spam
* message spam
* repeated direct-ID probing
* suspicious Admin action

---

# 135. Security Event Detail

Required:

* category
* severity
* actor or subject
* timestamp
* safe source context
* affected entity
* related sessions
* related reports
* related audit
* response actions
* resolution

Sensitive data must be minimized.

---

# 136. Security Response Actions

Possible actions:

* monitor
* revoke session
* restrict account
* suspend account
* block action
* require verification
* escalate
* close event
* reopen event

Every action requires permission and audit.

---

# 137. Audit System

Audit logs must record sensitive business and administrative actions.

An audit record may include:

* actor
* actor role
* permission
* action
* target entity
* target ID
* previous state
* new state
* reason
* request reference
* route
* session reference
* timestamp
* related moderation case
* related recovery case
* environment

---

# 138. Audit Immutability

Normal users and ordinary Admin users must not edit audit logs.

Audit correction must use:

* append-only clarification
* linked correction event
* authorized governance process

Do not overwrite the original event.

---

# 139. Audit Viewer

The audit viewer must support:

* entity type
* action
* actor
* date range
* severity
* module
* target user
* target entity
* reason search where allowed
* export where permitted
* pagination

---

# 140. Audit Detail

Audit detail may show:

* action
* actor
* target
* reason
* previous state
* new state
* request reference
* source route
* linked entity
* related recovery
* related moderation
* timestamp

Sensitive fields must be redacted according to permission.

---

# 141. Recovery System

Recovery must support correction of:

* accidental rejection
* accidental pause
* accidental suspension
* soft deletion
* mistaken billing state where recoverable
* mistaken role change
* mistaken provider setting
* mistaken feature-flag change
* mistaken moderation decision
* mistaken archive

---

# 142. Recovery Case

A recovery case may include:

* entity type
* entity ID
* original action
* original actor
* original timestamp
* requested recovery
* requester
* reason
* impact
* dependencies
* status
* reviewer
* result
* audit

---

# 143. Recovery Statuses

Recommended:

* `requested`
* `in_review`
* `approved`
* `rejected`
* `completed`
* `failed`
* `cancelled`

---

# 144. Recovery Workflow

```text
Open Recovery Center
→ Select Entity or Original Action
→ Review Current State
→ Review Dependencies
→ Preview Restored State
→ Enter Reason
→ Confirm
→ Server Validates
→ Recovery Applied
→ Original History Preserved
→ Audit Created
→ User Notified
```

---

# 145. Soft-Deleted Record Recovery

Recoverable entities may include:

* user
* Property
* Project
* Unit
* Requirement
* Lead
* promotion
* CMS page
* location
* support ticket
* bug

Recovery must determine the safe restored state.

It must not automatically republish public content unless all eligibility checks pass.

---

# 146. Moderation Recovery

Example:

```text
Rejected Property
→ Reopen
→ In Review
→ Approve
```

The original rejection remains visible.

---

# 147. Account Recovery

Example:

```text
Suspended User
→ Review Suspension
→ Unsuspend
→ Revoke Old Sessions if Required
→ Require Reauthentication
→ Notify User
```

---

# 148. Billing Recovery

Billing recovery may address:

* payment captured but subscription inactive
* invoice not issued
* duplicate event
* subscription incorrectly expired
* promotion payment not linked

Billing recovery requires reconciliation evidence.

---

# 149. Recovery Failure

When recovery fails:

* preserve current state
* record failure
* show safe error
* provide retry where safe
* escalate when required
* avoid partial silent restoration
* create audit

---

# 150. Permanent Deletion

Permanent deletion is exceptional.

It requires:

* highest required permission
* step-up authentication
* legal retention review
* dependency review
* backup review
* data-classification review
* reason
* explicit irreversible warning
* confirmation
* audit
* post-action verification

Permanent deletion must not be presented as a normal quick action.

---

# 151. Bulk Actions

Bulk actions may apply to:

* moderation assignment
* status change
* archive
* pause
* restore
* export
* notification
* selected safe settings

Bulk actions must not bypass per-record validation.

---

# 152. Bulk Action Flow

```text
Select Records
→ Choose Action
→ Review Selection
→ Preview Eligible and Ineligible Records
→ Enter Reason
→ Confirm
→ Process Safely
→ Show Per-Record Result
→ Create Audit
```

---

# 153. Partial Bulk Failure

When some records fail:

* successful records remain successful
* failed records show reason
* retry is available where safe
* no false all-success message appears
* audit links the batch and individual outcomes

---

# 154. Exports

Exports may include:

* user list
* moderation queue
* Lead data
* billing data
* payment reconciliation
* reports
* audit
* bug list

Exports require explicit permission.

---

# 155. Export Security

Exports must:

* validate scope
* validate fields
* exclude unauthorized data
* mask sensitive fields
* rate limit
* process asynchronously for large sets
* create expiring download
* store audit
* apply retention
* delete expired export files
* prevent public access

---

# 156. Export Request

The export request must show:

* selected filters
* record estimate where efficient
* included columns
* sensitive-field warning
* reason where required
* expiry
* audit notice

---

# 157. Location Management

Location Admin must support:

* State
* District
* Taluka
* City
* Village/Locality
* aliases
* active state
* SEO state
* missing-location requests
* duplicates
* merging
* redirects
* audit

---

# 158. Location Merge

A merge requires:

* source location
* target location
* affected Properties
* affected Projects
* affected Requirements
* affected profiles
* affected SEO pages
* redirects
* aliases
* reason
* confirmation
* transaction
* audit
* post-merge verification

---

# 159. CMS Management

CMS Admin must support:

* page list
* draft
* version
* preview
* review
* publish
* schedule
* archive
* restore
* metadata
* canonical
* robots
* audit

---

# 160. CMS Publishing

Publication requires:

* permission
* validated content
* sanitized output
* valid metadata
* valid route
* preview
* confirmation
* version record
* cache invalidation
* audit

---

# 161. SEO Management

SEO management may include:

* metadata templates
* city-page configuration
* indexability
* canonical
* redirects
* structured data
* sitemap eligibility
* FAQ
* internal links
* preview

---

# 162. SEO Safety

SEO staff must not be able to:

* index private routes
* index pending content
* expose private fields
* override canonical security rules
* publish unsafe structured data
* remove critical privacy controls

Server validation must enforce protected route categories.

---

# 163. Internal Notifications

Internal users may receive notifications for:

* assigned moderation case
* escalated report
* assigned support ticket
* critical bug
* payment reconciliation issue
* provider failure
* security event
* recovery assignment
* job failure
* maintenance event

Every notification must open the exact destination.

---

# 164. Internal Notification Priority

Recommended priorities:

* Critical
* High
* Normal
* Informational

Priority must be based on defined operational rules.

---

# 165. Internal Data Tables

Relevant tables may include:

* `staff_profiles`
* `staff_roles`
* `permissions`
* `staff_role_permissions`
* `staff_user_roles`
* `staff_permission_overrides`
* `moderation_cases`
* `moderation_actions`
* `reports`
* `report_actions`
* `support_tickets`
* `support_messages`
* `support_internal_notes`
* `bugs`
* `bug_events`
* `bug_entity_links`
* `plans`
* `plan_versions`
* `plan_features`
* `subscriptions`
* `subscription_events`
* `usage_counters`
* `payment_orders`
* `payments`
* `payment_events`
* `payment_reconciliation_cases`
* `refunds`
* `invoices`
* `invoice_items`
* `credit_notes`
* `provider_configurations`
* `provider_health_checks`
* `feature_flags`
* `system_settings`
* `security_events`
* `audit_logs`
* `recovery_actions`
* `export_jobs`
* `job_runs`
* `maintenance_events`

---

# 166. Internal RLS

Internal tables must use RLS or equivalent secure server access.

Rules:

* public users cannot read internal tables
* public users cannot create internal records except through approved public-facing services
* staff may read only permissioned records
* staff may mutate only through trusted services
* audit logs are append-only
* provider secrets are never directly readable
* exports are private
* security events are restricted
* recovery records are restricted
* billing records are user-owned or staff-permissioned

---

# 167. Internal Service Authorization

Every internal mutation must verify:

* internal authentication
* internal account state
* exact permission
* target entity
* target state
* allowed fields
* reason requirement
* confirmation state
* step-up auth where required
* idempotency
* audit
* notification
* cache invalidation
* recovery behavior

---

# 168. Internal Service Boundaries

Recommended services:

```text
admin-user-service
staff-service
permission-service
moderation-service
admin-property-service
admin-project-service
admin-unit-service
admin-requirement-service
admin-lead-service
report-service
support-service
bug-service
billing-admin-service
payment-reconciliation-service
refund-service
invoice-service
provider-admin-service
feature-flag-service
system-settings-service
security-event-service
audit-service
recovery-service
export-service
maintenance-service
```

---

# 169. Sensitive Mutation Contract

Every sensitive mutation must define:

```text
Action:
Permission:
Step-Up Required:
Allowed Target States:
Required Reason:
Validation:
Before State:
Proposed State:
Impact:
Confirmation:
Transaction:
Audit:
Notification:
Recovery:
Cache Invalidation:
Verification:
```

---

# 170. Reason Requirements

A reason is mandatory for:

* restriction
* suspension
* unsuspension
* role-change approval or rejection
* moderation rejection
* Changes Required
* reopening
* Admin data correction
* pause by staff
* restore
* permanent deletion
* payment correction
* refund
* subscription grant
* usage correction
* provider change
* feature-flag change
* maintenance mode
* export of sensitive data
* security action

Reason text must be:

* validated
* meaningful
* stored
* visible in audit according to permission
* never replaced by a generic placeholder

---

# 171. Confirmation Levels

Use different confirmation levels.

## Low Risk

Simple confirmation.

## Medium Risk

Confirmation plus impact summary.

## High Risk

Reason plus impact summary plus explicit confirmation.

## Critical

Step-up authentication plus reason plus typed confirmation plus audit.

Do not use the same generic confirm dialog for every action.

---

# 172. Before-and-After Difference Viewer

Sensitive edits should display:

* field
* old value
* new value
* masked sensitive values
* added state
* removed state
* unchanged fields omitted by default
* public impact
* billing impact
* moderation impact

Mobile must show differences as stacked cards.

---

# 173. Internal Responsive Design

The internal application must be tested at:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide displays

---

# 174. Internal Mobile UX

Mobile Admin must support:

* navigation drawer or prioritized bottom navigation
* structured cards
* full-screen entity details
* full-screen sensitive workflows
* filter sheets
* sort sheets
* large touch targets
* readable status
* no compressed desktop table
* safe Back
* no overlapping fixed UI

---

# 175. Internal Tablet UX

Tablet may support:

* compact side rail
* split list/detail
* touch-friendly filters
* larger drawers
* bottom navigation where approved
* intentional density

---

# 176. Internal Desktop UX

Desktop may support:

* grouped sidebar
* tables
* split views
* drawers
* sticky table headers
* efficient keyboard use
* multi-column details
* contextual actions

Desktop must still use constrained readable widths.

---

# 177. Responsive Table Rules

Tables may transform into:

* structured cards
* expandable rows
* priority-column tables
* horizontally scrollable tables with sticky identity column
* split list/detail

The selected pattern must preserve:

* entity identity
* status
* primary destination
* critical action
* accessibility

---

# 178. Sticky and Fixed Internal UI

Possible sticky elements:

* internal header
* table header
* filter bar
* detail tabs
* action bar

They must:

* not cover content
* respect safe area
* work with keyboard
* avoid nested-scroll conflicts
* use controlled z-index
* have mobile fallback

---

# 179. Internal Loading States

Required loading states:

* dashboard
* user list
* user detail
* entity list
* moderation queue
* report queue
* billing
* provider health
* audit
* recovery
* export
* security events

Use layout-matching skeletons.

---

# 180. Internal Empty States

Examples:

* no pending moderation
* no open reports
* no reconciliation issues
* no critical bugs
* no recovery cases
* no provider failures
* no audit results for filters

Empty states must not look like an error.

---

# 181. Internal Error States

Errors must:

* preserve filters
* preserve selected entity where possible
* provide Retry
* provide safe reference
* avoid raw technical detail
* allow support or escalation
* not show false success
* not clear unsaved reason fields

---

# 182. Permission-Denied State

Permission-denied UI must:

* explain lack of access
* provide a safe return
* avoid revealing hidden data
* allow access-request workflow only if implemented
* log repeated suspicious attempts where appropriate

---

# 183. Provider Setup State

Provider screens must distinguish:

* Setup Required
* Configured Not Tested
* Test Mode
* Active
* Live Ready
* Degraded
* Failed
* Disabled

Do not show one generic `Connected` badge.

---

# 184. Internal Accessibility

The internal application must support:

* semantic headings
* keyboard navigation
* visible focus
* accessible tables
* accessible filters
* modal focus trap
* drawer focus trap
* Escape
* labels
* error associations
* screen-reader status
* reduced motion
* zoom
* touch targets
* non-color status meaning
* accessible difference viewer
* accessible audit detail

---

# 185. Internal Keyboard Support

Test:

* Tab
* Shift+Tab
* Enter
* Space
* Escape
* arrow keys
* table focus
* menu navigation
* filter navigation
* drawer open/close
* modal open/close
* form submission
* browser Back

No keyboard trap is allowed.

---

# 186. Internal Performance

Large internal datasets require:

* pagination
* indexed search
* server-side filtering
* selected columns
* lazy-loaded sections
* cursor pagination for activity
* asynchronous export
* cached safe summaries
* query time monitoring

---

# 187. User Detail Performance

User detail must load:

* overview first
* counts through optimized queries
* related tabs on demand
* paginated records
* limited recent activity

Do not load all user-related data in one request.

---

# 188. Moderation Queue Performance

Moderation queries should index:

* status
* entity type
* assigned reviewer
* priority
* submitted date
* city
* report state

---

# 189. Billing Performance

Billing queries should index:

* user
* status
* provider ID
* payment ID
* order ID
* invoice number
* date
* reconciliation state

---

# 190. Audit Performance

Audit requires:

* pagination
* date filtering
* actor filtering
* entity filtering
* action filtering
* retention/archival strategy

Do not load full previous/new JSON for every list row.

---

# 191. Internal Caching

Internal cache may be used for:

* safe dashboard summaries
* permission catalog
* location taxonomy
* provider public-safe status
* feature-flag state

Internal private data must not use public cache.

---

# 192. Cache Invalidation

Invalidate relevant internal views after:

* user state change
* moderation decision
* entity edit
* payment update
* subscription update
* report action
* ticket action
* bug update
* provider change
* feature-flag change
* recovery
* location merge
* CMS publish

---

# 193. Internal Monitoring

Monitor:

* permission failures
* unauthorized access
* moderation action failure
* payment correction failure
* refund failure
* provider-test failure
* audit write failure
* recovery failure
* export failure
* maintenance-mode issue
* route error
* slow query
* bulk-action partial failure

---

# 194. Internal Security Alerts

Alert on:

* repeated permission denial
* export abuse
* suspicious account suspension
* provider-secret change
* webhook-signature failure
* large refund
* permanent deletion
* feature-flag emergency change
* audit write failure
* unusual bulk action
* repeated recovery failure

---

# 195. Automated Tests — Permissions

Required unit tests:

* permission resolution
* role-level grant
* user override
* explicit denial
* module scope
* field masking
* route permission
* action permission
* step-up requirement

Required integration tests:

* staff without permission
* staff with read permission
* staff with edit permission
* Super Admin
* suspended staff
* expired permission
* direct API access
* RLS

---

# 196. Automated Tests — Moderation

Test:

* queue loading
* assignment
* approve
* reject
* Changes Required
* reopen
* resubmission comparison
* history
* audit
* notification
* wrong permission
* stale state
* duplicate action
* cache invalidation

---

# 197. Automated Tests — Billing

Test:

* plan create
* plan version
* subscription grant
* payment order
* webhook verification
* reconciliation
* payment correction
* refund
* invoice issue
* duplicate webhook
* idempotency
* wrong amount
* wrong permission
* audit

---

# 198. Automated Tests — Recovery

Test:

* rejected entity reopen
* soft-deleted Property restore
* Project restore
* Unit restore
* user unsuspend
* payment consistency recovery
* invalid recovery
* dependency conflict
* audit
* notification
* original-history preservation

---

# 199. Automated Tests — Providers

Test:

* Setup Required
* configured not tested
* safe test
* failed test
* active
* degraded
* disabled
* permission
* secret masking
* audit
* production development-mode block

---

# 200. Automated Tests — Bugs and Support

Test:

* ticket create
* assignment
* reply
* internal note
* resolve
* reopen
* bug create
* triage
* assign
* fix
* verify
* close
* reopen
* linked entity
* permission
* audit

---

# 201. Admin Dashboard Manual Verification

Verify:

* Super Admin overview
* Admin overview
* scoped staff overview
* metric accuracy
* metric destination
* critical alerts
* provider alert
* payment alert
* moderation backlog
* report backlog
* support backlog
* bug backlog
* recovery backlog
* partial failure
* mobile
* tablet
* desktop
* keyboard
* accessibility
* console
* network

---

# 202. User Management Manual Verification

Verify:

* user list
* search
* filters
* user detail
* profile
* role
* account status
* verification
* Properties
* Projects
* Units
* Leads
* reports
* support
* billing
* sessions
* security
* audit
* recovery
* restrict
* suspend
* unsuspend
* revoke sessions
* role change
* wrong permission
* responsive layout

---

# 203. Property and Project Admin Verification

Verify:

* Property list
* Project list
* filters
* detail
* owner/Builder link
* Units
* Leads
* moderation
* reports
* billing
* audit
* recovery
* Admin edit
* before/after
* reason
* pause
* resume
* reopen
* restore
* mobile
* tablet
* desktop
* permission denial

---

# 204. Moderation Manual Verification

Verify:

* unassigned case
* assigned case
* reassignment
* Property review
* Project review
* Requirement review
* promotion review
* profile review
* approve
* Changes Required
* reject
* reopen
* resubmission diff
* stale action
* duplicate action
* audit
* notification
* list-state preservation
* responsive layout

---

# 205. Report Manual Verification

Verify:

* report queue
* report detail
* entity link
* user link
* related reports
* evidence
* moderation link
* security link
* dismiss
* warn
* request changes
* pause entity
* restrict account
* escalate
* resolve
* reopen
* audit
* notification

---

# 206. Support Manual Verification

Verify:

* ticket list
* filters
* assignment
* user-visible reply
* internal note
* attachment provider state
* waiting state
* resolve
* close
* reopen
* linked bug
* linked entity
* mobile
* tablet
* desktop
* permission

---

# 207. Bug Manual Verification

Verify:

* bug create
* affected route
* affected role
* related entity
* severity
* assign
* Blocked
* In Progress
* Fixed
* Verification
* Closed
* Reopened
* changed files
* test result
* release link
* console/network evidence
* permissions

---

# 208. Billing Manual Verification

Verify:

* plan list
* plan create
* plan update
* affected-subscriber preview
* subscription detail
* trial
* usage
* payment order
* payment
* webhook history
* reconciliation
* correction
* refund
* invoice
* promotion billing
* audit
* permission
* step-up auth
* provider state
* mobile
* tablet
* desktop

---

# 209. Provider Manual Verification

Verify:

* provider list
* safe status
* Setup Required
* Configured Not Tested
* test mode
* active
* degraded
* failed
* run test
* secret masking
* change configuration
* reason
* confirmation
* audit
* rollback
* production development-mode prevention

---

# 210. Recovery Manual Verification

Verify:

* recovery queue
* deleted Property
* deleted Project
* deleted Unit
* rejected entity
* suspended user
* role-change correction
* billing recovery
* preview
* dependencies
* reason
* confirm
* restore
* audit
* notification
* failed recovery
* original history
* responsive layout

---

# 211. Permission Verification Matrix

For every sensitive module, test:

1. Guest
2. public Owner
3. public Broker
4. public Builder
5. internal user without module access
6. internal user with view-only access
7. internal user with edit access
8. internal user with sensitive-action access
9. Admin
10. Super Admin
11. suspended internal user
12. expired session
13. direct API request
14. direct URL request

---

# 212. Responsive Verification Recording

For every major internal route, record:

```text
Route:
Internal Role:
Permissions:
320px:
360px:
390px:
430px:
768px:
1024px:
1366px:
1440px:
Wide:
Navigation:
Table/Card Behavior:
Drawer/Modal Behavior:
Keyboard:
Text Wrapping:
Sticky/Fixed Overlap:
Permission State:
Accessibility:
Console:
Network:
Result:
```

---

# 213. Live Browser Verification Procedure

The matching verification prompt must:

1. detect or start the development server
2. record URL and port
3. login as Super Admin
4. verify internal navigation
5. verify dashboard metrics
6. open Users
7. open User detail
8. inspect linked Properties, Projects, Units, Leads, billing, security, audit, and recovery
9. test a permissioned user edit
10. test restriction
11. test suspension and restoration
12. test session revocation
13. open Property moderation
14. approve, reject, request changes, and reopen controlled test entities
15. open Project and Unit management
16. test inventory and price correction
17. open Lead detail
18. verify permissioned message and note access
19. open reports
20. resolve and reopen a report
21. open support
22. assign, reply, resolve, and reopen
23. open bugs
24. create, assign, verify, close, and reopen a bug
25. open billing
26. verify plan, subscription, payment, reconciliation, refund, and invoice flows
27. open providers
28. verify all provider states
29. test safe provider test
30. open audit
31. open recovery
32. restore a recoverable entity
33. test feature flags
34. test system settings
35. test maintenance mode in a safe non-production environment
36. login as permission-scoped Admin
37. verify restricted modules
38. login as narrow Staff
39. verify field-level masking
40. test all required widths
41. test keyboard and focus
42. check console
43. check network
44. test direct URL access
45. test RLS and service authorization
46. fix defects
47. retest
48. update `PROJECT_STATE.md`
49. update `FEATURE_REGISTRY.md`
50. keep the development server running when safe

---

# 214. Performance Verification

Measure:

* Admin dashboard latency
* User list query
* User detail initial query
* related-tab query
* moderation queue latency
* report queue latency
* billing query latency
* audit query latency
* provider-health query
* recovery query
* bulk-action throughput
* export-job duration
* payload size
* database connections
* cache behavior

---

# 215. Internal Load Testing

Load-test:

* Admin dashboard reads
* User list filters
* moderation queue
* report queue
* billing list
* payment-webhook processing
* audit writes
* notification creation
* export-job creation
* provider-health checks
* recovery reads

Destructive internal load testing must not run against production without explicit safeguards.

---

# 216. Production Internal Security Checklist

Before production:

* internal host protected
* SSL valid
* public indexing blocked
* internal registration disabled
* internal invite flow secure
* permission checks active
* field masking active
* session controls active
* step-up auth active where required
* audit writes verified
* audit records immutable
* provider secrets protected
* exports private
* recovery permission protected
* permanent deletion restricted
* maintenance mode protected
* production development modes blocked
* monitoring active
* alerts configured

---

# 217. Production Billing Checklist

Before production:

* payment provider live configuration verified
* webhook signature verified
* live payment tested
* duplicate webhook handled
* reconciliation tested
* refund tested where enabled
* invoice tested
* subscription activation tested
* promotion billing tested
* no client-side payment authority
* provider failure handled
* audit active
* production smoke test passed

---

# 218. Production Moderation Checklist

Before production:

* queues work
* assignment works
* approve works
* Changes Required works
* reject works
* reopen works
* resubmission comparison works
* notifications work
* cache invalidation works
* public visibility updates correctly
* audit works
* wrong-permission access fails
* mobile and desktop verification pass

---

# 219. Production Recovery Checklist

Before production:

* recoverable entities defined
* retention windows defined
* recovery preview works
* dependency checks work
* audit works
* original history remains
* public records do not republish incorrectly
* failed recovery is safe
* permanent deletion separated
* backup and restore verified

---

# 220. Production Sign-Off

The internal application may pass production sign-off only when:

* internal authentication works
* permission model works
* field-level access works
* Super Admin works
* Admin works
* scoped Staff works
* User graph is deeply connected
* Property graph is deeply connected
* Project and Unit graph is deeply connected
* Lead graph is deeply connected
* moderation works
* reports work
* support works
* bug management works
* billing works
* reconciliation works
* refunds work where enabled
* invoices work
* provider states are honest
* provider secrets are protected
* feature flags work safely
* system settings are audited
* maintenance mode works safely
* security events work
* audit is append-only
* recovery works
* bulk actions handle partial failure
* exports are private and audited
* RLS passes
* server authorization passes
* direct URL tests pass
* responsive widths pass
* accessibility passes
* performance is measured
* internal monitoring is active
* production smoke test passes

---

# 221. Feature Registry Updates

After implementation, update at least:

* `ADMIN-001` through `ADMIN-035`
* `MOD-001` through `MOD-020`
* `REPORT-001` through `REPORT-012`
* `SUPPORT-001` through `SUPPORT-012`
* `BUG-001` through `BUG-012`
* `BILL-001` through `BILL-020`
* `PAY-001` through `PAY-015`
* `PROMO-001` through `PROMO-014`
* `PROVIDER-001` through `PROVIDER-015`
* `AUDIT-001` through `AUDIT-010`
* `RECOVERY-001` through `RECOVERY-015`
* `SEC-001` through `SEC-020`
* `OPS-001` through `OPS-015`
* `GRAPH-001` through `GRAPH-020`
* relevant `QA-*`
* relevant `PERF-*`

Record exact:

* routes
* layouts
* components
* services
* tables
* migrations
* RLS policies
* permission keys
* indexes
* cache tags
* provider states
* tests
* manual verification
* responsive widths
* security result
* known issues
* production status

---

# 222. Project State Updates

Update `PROJECT_STATE.md` with:

* current Admin phase
* internal authentication status
* permission status
* Super Admin status
* Admin status
* Staff status
* User management status
* Property management status
* Project and Unit status
* Lead oversight status
* moderation status
* report status
* support status
* bug status
* billing status
* payment status
* provider status
* feature-flag status
* system-setting status
* security status
* audit status
* recovery status
* migrations
* changed files
* automated checks
* live-browser routes
* responsive widths
* accessibility
* performance
* bugs
* blockers
* rollback checkpoint
* development server URL and port
* next prompt

---

# 223. Non-Negotiable Internal Platform Rules

1. Public registration never creates internal users.
2. Internal access is permission-scoped.
3. Super Admin remains subject to audit and safety controls.
4. Admin does not automatically receive every permission.
5. Internal Staff see only assigned modules and fields.
6. Frontend hiding is not authorization.
7. Every sensitive action requires server authorization.
8. Sensitive actions require a meaningful reason.
9. High-risk actions require impact preview and confirmation.
10. Critical actions require step-up authentication.
11. Every sensitive action creates an audit record.
12. Original history must never be silently overwritten.
13. Admin User detail must provide complete linked-entity drill-down.
14. Property, Project, Unit, Lead, billing, report, support, security, audit, and recovery relations must be clickable.
15. Complex tasks must use dedicated pages or suitable drawers.
16. High-risk actions must not be placed in tiny popups.
17. Moderation supports Approve, Changes Required, Reject, Reopen, and recovery.
18. Rejection does not delete the entity.
19. Soft deletion is the default recoverable deletion model.
20. Restoration preserves original history.
21. Permanent deletion is exceptional and highly restricted.
22. Billing state is server-authoritative.
23. Payment success requires verified provider evidence.
24. Refund success requires provider confirmation.
25. Invoice history must not be silently overwritten.
26. Provider state must remain honest.
27. Provider secrets must never be exposed in Admin responses.
28. Development provider modes must be blocked in production.
29. Reports must connect to real entities and actions.
30. Support replies and internal notes must remain separate.
31. Bugs require reproduction, fix, verification, and closure evidence.
32. Feature flags must not bypass security.
33. Maintenance mode requires permission, reason, audit, and rollback.
34. Exports require permission, privacy controls, expiry, and audit.
35. Bulk actions must show per-record outcomes.
36. RLS and server authorization are both mandatory.
37. Internal mobile and tablet UX are mandatory.
38. Text must never clip or overlap.
39. Fixed and sticky controls must never cover content.
40. Accessibility is mandatory.
41. Internal performance must be measured.
42. Live-browser verification is required before PASS.
43. Production readiness requires real provider, billing, security, audit, recovery, backup, and deployment verification.
44. `PROJECT_STATE.md` and `FEATURE_REGISTRY.md` must be updated after implementation and verification.
45. The development server must remain running after verification when safe.

---

# 224. Implementation Handoff

The next document must define:

* GitHub skill inspection
* skill installation
* skill compatibility
* license review
* security review
* prompt-conflict handling
* provider setup
* provider testing
* Supabase operations
* OTP SMS
* email
* payment
* media
* monitoring
* analytics
* schedulers
* background jobs
* QA
* automated tests
* manual verification
* browser verification
* performance testing
* load testing
* security testing
* accessibility testing
* staging
* deployment
* domain
* SSL
* migrations
* backup
* restore
* rollback
* observability
* incident response
* production launch
* post-launch operations

---

