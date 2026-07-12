# `docs/07_ROLE_DASHBOARDS_NAVIGATION_AND_DEEP_DRILLDOWN.md`

# My Gujarat Property — Role Dashboards, Application Shells, Navigation, Bottom Navigation, Deep Drill-Down, Context Preservation, Notifications, Billing Entry Points, and Verification Authority

This document defines the complete authenticated role-application experience for **My Gujarat Property**.

It is the primary authority for:

* Owner application shell
* Broker application shell
* Builder/Developer application shell
* role-specific dashboard design
* role-specific routes
* host and subdomain routing
* mobile and tablet bottom navigation
* desktop application navigation
* role-aware headers
* simplified dashboard hierarchy
* dashboard metrics
* dashboard alerts
* quick actions
* real dashboard queries
* Property, Project, Unit, Requirement, Lead, notification, profile, billing, support, and settings navigation
* deep clickable entity relationships
* list-detail-return behavior
* filter and scroll preservation
* contextual page, modal, drawer, bottom-sheet, and inline behavior
* loading, empty, error, success, restricted, and provider states
* responsive behavior
* accessibility
* security
* RLS
* server authorization
* performance
* analytics integrity
* automated tests
* live-browser verification
* production sign-off

Claude must read this document before implementing or changing:

* Owner dashboard
* Broker dashboard
* Builder dashboard
* role application layouts
* role navigation
* mobile or tablet bottom navigation
* desktop sidebar or application navigation
* dashboard summary cards
* dashboard data services
* authenticated headers
* role redirects
* deep drill-down
* authenticated list and detail flows
* notification entry points
* profile and settings navigation
* billing entry points
* role-aware empty states
* dashboard responsive behavior

---

# 1. Role Application Goal

Each authenticated public role must receive a focused application designed around the work that role performs.

The role applications must feel:

* simple
* calm
* premium
* mobile-first
* task-oriented
* deeply connected
* predictable
* secure
* fast
* accessible
* consistent with the public marketplace
* original and Apple-inspired
* suitable for repeated daily use

The role applications must not feel like:

* generic Admin templates
* public homepage copies
* collections of unrelated cards
* dashboards overloaded with every available feature
* applications where all modules have equal visual priority
* screens with fake metrics
* applications that require users to remember where related information exists
* applications where Property, Project, Unit, Lead, message, billing, and moderation data are disconnected
* desktop applications merely stacked into mobile
* mobile applications with unreadable compressed tables
* applications where every action opens a small popup
* applications that lose filters, tabs, or scroll position during navigation

---

# 2. Final Public Role Applications

The platform has exactly three public role applications:

1. Owner application
2. Broker application
3. Builder/Developer application

Each role application must have:

* its own default landing destination
* its own navigation map
* its own dashboard
* role-appropriate modules
* role-appropriate empty states
* role-appropriate actions
* role-appropriate billing and usage information
* role-appropriate deep drill-down
* consistent shared interaction patterns
* server-enforced permissions

The role applications must not expose internal Admin modules.

---

# 3. Role Application Hosting Model

The deployment may use role-specific hosts.

Recommended production host model:

```text
Public marketplace and Owner application:
https://www.example.com

Broker application:
https://broker.example.com

Builder/Developer application:
https://builder.example.com

Internal Admin application:
https://account.example.com
```

The final domains and subdomains are environment-configured.

The application must not hard-code production hostnames throughout components.

Use a centralized host-routing configuration.

---

# 4. Host Routing Rules

The host-routing system must:

* identify the current host
* load the correct application shell
* validate the authenticated role
* redirect to the correct role host after authentication
* preserve the intended safe destination
* preserve public detail links
* prevent role-host loops
* prevent open redirects
* preserve query and entity context
* use canonical public URLs for public marketplace content
* maintain secure cookie scope
* support local development
* support staging
* support production

---

# 5. Default Role Destinations

Recommended default destinations:

```text
Owner:
Main Domain → Owner Dashboard
```

```text
Broker:
Broker Subdomain → Broker Dashboard
```

```text
Builder/Developer:
Builder Subdomain → Builder Dashboard
```

When an intended protected destination exists, it takes priority if:

* it is valid
* it is safe
* it is not expired
* the role may access it
* the account state permits it
* the host-routing service can resolve it

---

# 6. Public Content Across Role Hosts

Public Property, Project, Builder profile, city, SEO, CMS, and legal URLs must use the canonical public marketplace host.

When a Broker or Builder opens public content:

* the public canonical route should remain available
* the user may return to their role application
* the role application state should remain preserved where practical
* public pages must not expose private application navigation unintentionally
* authentication cookies must follow the approved domain-security model

Public canonical content must not be duplicated across role subdomains for search-engine indexing.

---

# 7. Cross-Host Return Context

When a user moves between the public marketplace and a role application, preserve safe context such as:

* Property ID
* Project ID
* Unit ID
* Lead ID
* source route
* search query
* selected city
* filter state
* intended action
* authenticated role
* return destination

Do not place sensitive data in cross-host query parameters.

Use:

* signed short-lived context
* server-managed return state
* safe route parameters
* secure same-site session behavior

---

# 8. Role Host Access Enforcement

If an authenticated user opens the wrong role host:

* validate the current role server-side
* redirect to the correct role host
* preserve a safe intended route only when compatible
* do not render unauthorized role data
* do not flash the wrong dashboard
* do not rely only on client-side redirect
* prevent redirect loops

Example:

```text
Builder opens Broker application
→ Server validates Builder role
→ Redirects to Builder application
→ Shows appropriate safe destination
```

---

# 9. Shared Role Application Principles

Every role application must provide:

* role-aware shell
* clear current module
* dashboard
* mobile and tablet bottom navigation
* desktop navigation
* role-aware page header
* notification access
* profile access
* billing access
* security and support access
* real data
* real statuses
* intentional deep links
* permission states
* responsive layouts
* accessible interactions

Shared visual and interaction patterns must remain consistent.

Role-specific content must remain focused.

---

# 10. Simplified Dashboard Principle

The dashboard is a summary and action surface.

It is not a replacement for every management module.

Each role dashboard should primarily answer:

1. What needs attention?
2. What changed recently?
3. What should I do next?
4. What are my core records doing?
5. Are any actions blocked?
6. Are any Leads waiting?
7. Is any moderation or billing issue active?

The dashboard should not display every field from every entity.

---

# 11. Dashboard Information Priority

Dashboard content should follow this priority:

1. critical alerts
2. primary action
3. urgent work
4. core summary
5. Leads and follow-ups
6. moderation updates
7. recent activity
8. plan or billing status
9. secondary guidance

Do not place promotional or decorative content above urgent operational information.

---

# 12. Dashboard Content Limits

The initial dashboard viewport should not contain an excessive number of competing sections.

Recommended dashboard composition:

* one page heading
* one primary action
* one alert region
* three to five key summary cards
* one urgent-work section
* one recent-activity section
* one billing or usage summary where relevant

Additional details belong in dedicated modules.

---

# 13. Dashboard Metric Integrity

Every metric must be calculated from real authoritative data.

A metric must define:

* exact entity
* exact status
* exact time window
* exact role scope
* whether soft-deleted data is excluded
* whether archived data is excluded
* whether the count is current or delayed
* destination when clicked
* empty behavior
* error behavior

Do not display a metric without a defined query.

---

# 14. Dashboard Metric Contract

Every metric must have a documented contract:

```text
Metric Name:
Role:
Definition:
Database Source:
Filters:
Time Window:
Excluded States:
Refresh Strategy:
Click Destination:
Loading State:
Empty State:
Error State:
Permission Rule:
Verification:
```

---

# 15. Dashboard Count Rules

Counts must:

* use indexed queries
* be scoped to the current user
* respect RLS
* exclude unauthorized data
* exclude soft-deleted records unless explicitly requested
* use consistent statuses
* update after relevant mutations
* never be hard-coded
* never be generated from frontend mock data
* never use an unrelated approximate number without labeling

---

# 16. Dashboard Trend Rules

A trend may be shown only when:

* current and comparison periods are defined
* source data is real
* the comparison is useful
* the value is not misleading
* the calculation is efficient
* the user can understand the period

Examples:

```text
New Leads in the last 7 days compared with the previous 7 days
```

Do not show decorative growth percentages.

When a reliable comparison is unavailable, omit the trend.

---

# 17. Dashboard Card Interaction

A dashboard summary card may be:

* fully clickable
* partly clickable
* non-interactive

If clickable, it must open a meaningful destination.

Example:

```text
Active Properties
→ Properties filtered to Active
```

A card must not look clickable when it has no action.

Use visual affordances consistently.

---

# 18. Role Application Navigation Layers

Role navigation may use:

* mobile bottom navigation
* tablet bottom navigation
* desktop sidebar
* compact desktop rail
* contextual page tabs
* entity sub-navigation
* overflow action menus
* breadcrumbs where useful

Do not duplicate all navigation layers simultaneously.

Each layer must have a clear responsibility.

---

# 19. Mobile and Tablet Bottom Navigation Authority

Mobile and tablet bottom navigation is mandatory for public role applications.

It is the primary role navigation for:

* 320px
* 360px
* 390px
* 430px
* 768px
* touch-oriented tablet layouts
* tablet portrait
* tablet landscape where the approved shell still uses bottom navigation

A desktop sidebar may appear at wider application breakpoints.

The bottom navigation must not disappear on tablet merely because more width exists unless an intentionally verified tablet application shell replaces it without reducing usability.

---

# 20. Bottom Navigation Structure

Bottom navigation must contain four or five primary destinations.

Each item must include:

* icon
* visible text label
* active state
* accessible name
* route
* real destination
* optional real badge
* sufficiently large touch target

The item order must remain stable for each role.

---

# 21. Bottom Navigation Safe-Area Rules

Bottom navigation must:

* respect device safe-area inset
* add matching page-bottom padding
* never cover the last list row
* never cover a sticky composer
* never cover a form action
* never overlap a Direct Inquiry action
* adapt when the keyboard opens
* use controlled z-index
* remain visible only where appropriate

---

# 22. Bottom Navigation in Focused Tasks

During focused tasks such as:

* Post Property
* Edit Property
* Create Project
* Edit Project
* Add Unit
* Direct Inquiry
* Checkout
* complex profile setup

the bottom navigation may:

* hide
* become visually de-emphasized
* be replaced by a focused action bar

The focused task must provide:

* Back or Close
* Save Draft where relevant
* primary action
* safe exit

---

# 23. Bottom Navigation Badge Rules

Badges may show:

* unread notifications
* unread Lead messages
* new Leads
* urgent follow-ups

Badges must:

* use real server-backed counts
* update after read or action
* use a display maximum such as `99+`
* not display `0`
* not be hard-coded
* not depend only on local state
* have accessible meaning

---

# 24. Owner Bottom Navigation

The Owner bottom navigation must contain:

1. Dashboard
2. Properties
3. Leads
4. Post
5. Profile

Conceptual destinations:

```text
Dashboard → Owner dashboard
Properties → Owner Property management
Leads → Unified Owner Leads workspace
Post → Start Property or Requirement action selector
Profile → Owner profile, settings, billing, security, support
```

---

# 25. Owner Post Action

The Owner Post destination may open a concise mobile action selector when multiple approved actions exist.

Possible options:

* Post Property
* Post Requirement

The selector must:

* explain each action
* open the correct focused flow
* not use a large generic menu
* close on Back or Close
* remain accessible
* preserve current dashboard state

When only one action is enabled, route directly to that action.

---

# 26. Broker Bottom Navigation

The Broker bottom navigation must contain:

1. Dashboard
2. Listings
3. Leads
4. Requirements
5. Profile

Conceptual destinations:

```text
Dashboard → Broker dashboard
Listings → Broker Property listings
Leads → Unified Broker Leads workspace
Requirements → Eligible Requirements and owned Requirements
Profile → Broker business profile, settings, billing, security, support
```

Property creation must remain clearly available through:

* dashboard primary action
* Listings empty state
* Listings page action
* contextual action menu

---

# 27. Builder Bottom Navigation

The Builder/Developer bottom navigation must contain:

1. Dashboard
2. Projects
3. Leads
4. Promotions
5. Profile

Conceptual destinations:

```text
Dashboard → Builder dashboard
Projects → Builder Projects
Leads → Unified Builder Leads workspace
Promotions → Builder homepage promotion management
Profile → Builder profile, verification, billing, security, support
```

Units remain managed inside Projects.

The bottom navigation must not create a disconnected global Unit application.

---

# 28. Project Unit Navigation Rule

The canonical Unit flow is:

```text
Projects
→ Specific Project
→ Units
→ Specific Unit
```

Dashboard Unit summaries may link to:

```text
Projects
→ Filtered Project or Unit context
```

They must not remove the parent Project relationship.

---

# 29. Desktop Navigation

Desktop application navigation may use a sidebar or compact rail.

It must include:

* role identity
* core modules
* active state
* notification access
* profile access
* optional collapse
* keyboard support
* accessible labels
* stable width
* clear grouping

Desktop navigation must not include every secondary setting as a top-level item.

---

# 30. Owner Desktop Navigation

Recommended primary modules:

* Dashboard
* Properties
* Leads
* Requirements
* Notifications
* Billing
* Profile and Settings

A prominent `Post Property` action may appear separately.

---

# 31. Broker Desktop Navigation

Recommended primary modules:

* Dashboard
* Listings
* Leads
* Requirements
* Notifications
* Billing
* Profile and Settings

A prominent `Post Property` action may appear separately.

---

# 32. Builder Desktop Navigation

Recommended primary modules:

* Dashboard
* Projects
* Leads
* Promotions
* Notifications
* Billing
* Profile and Settings

A prominent `Create Project` action may appear separately.

Units remain within Projects.

---

# 33. Tablet Navigation

Tablet layouts must remain touch-friendly.

Tablet may use:

* bottom navigation
* compact contextual side panel
* split list/detail view
* role-aware page header
* larger action sheets

Tablet must not use:

* tiny desktop sidebar labels
* overly wide desktop tables
* duplicate sidebar and bottom navigation
* narrow desktop form columns
* mouse-only interactions

---

# 34. Route-Aware Header System

Each authenticated route must use the correct header.

Header types include:

* dashboard header
* module list header
* entity detail header
* focused task header
* settings header
* notification header
* billing header
* support header

The homepage city selector must not appear in role application headers.

---

# 35. Dashboard Header

A dashboard header may include:

* role greeting
* user or business name
* page title
* notification action
* profile action
* primary role action
* compact account-status alert

Avoid excessive greeting text that reduces useful space.

---

# 36. Module List Header

A module list header may include:

* Back or navigation trigger
* module title
* real result summary
* search
* filters
* sorting
* primary create action
* overflow menu

On mobile, move lower-priority controls into:

* filter sheet
* sort sheet
* overflow menu

---

# 37. Entity Detail Header

An entity detail header may include:

* Back
* entity title
* status
* contextual actions
* overflow menu

Examples:

* Property detail
* Project detail
* Unit detail
* Lead detail
* Requirement detail
* Promotion detail

Long titles must wrap or truncate safely without covering actions.

---

# 38. Focused Task Header

Focused task headers must include:

* Back or Close
* task title
* step or progress
* save state
* optional Help
* optional draft action

Examples:

* Post Property
* Create Project
* Add Unit
* Edit Profile
* Checkout

---

# 39. Role Application Route Map

Final implementation routes must be recorded in `FEATURE_REGISTRY.md`.

Conceptual route groups may include:

```text
/owner
/owner/properties
/owner/properties/[propertyId]
/owner/properties/[propertyId]/leads
/owner/leads
/owner/leads/[leadId]
/owner/requirements
/owner/notifications
/owner/billing
/owner/profile
/owner/settings
```

```text
/broker
/broker/listings
/broker/listings/[propertyId]
/broker/listings/[propertyId]/leads
/broker/leads
/broker/leads/[leadId]
/broker/requirements
/broker/notifications
/broker/billing
/broker/profile
/broker/settings
```

```text
/builder
/builder/projects
/builder/projects/[projectId]
/builder/projects/[projectId]/units
/builder/projects/[projectId]/units/[unitId]
/builder/projects/[projectId]/leads
/builder/leads
/builder/leads/[leadId]
/builder/promotions
/builder/promotions/[promotionId]
/builder/notifications
/builder/billing
/builder/profile
/builder/settings
```

The final route model may use host-relative paths.

---

# 40. Owner Dashboard Purpose

The Owner dashboard must help the Owner manage:

* owned Properties
* Property moderation
* Property Leads
* follow-ups
* notifications
* usage
* billing
* first-time Property posting

The Owner dashboard must not include unrelated Builder or Broker business controls.

---

# 41. Owner Dashboard Recommended Structure

Recommended order:

1. account or critical alert
2. page heading and Post Property action
3. key Property and Lead summaries
4. follow-ups requiring attention
5. Property status section
6. recent Leads
7. moderation updates
8. recent activity
9. usage and billing summary
10. help or safety guidance where relevant

---

# 42. Owner Dashboard Primary Action

The primary Owner action is:

```text
Post Property
```

It must:

* verify eligibility
* preserve return destination
* open the focused posting flow
* show exact blocked state when unavailable
* not open a nonfunctional form

A secondary action may allow:

```text
Post Requirement
```

---

# 43. Owner Key Metrics

Recommended key metrics:

* Active Properties
* Properties Under Review
* New Leads
* Follow-Ups Due
* Plan Usage

Only the most useful four or five should appear prominently.

---

# 44. Owner Active Properties Metric

Definition:

* Properties owned by current Owner
* lifecycle state active
* publication state published
* moderation approved
* not soft-deleted

Click destination:

```text
Owner Properties
→ Filter: Active
```

---

# 45. Owner Properties Under Review Metric

Definition:

* current Owner Properties with moderation state:

  * pending review
  * in review
  * changes required where grouped intentionally

The UI should distinguish `Changes Required` when urgent action is needed.

Click destination:

```text
Owner Properties
→ Filter: Review Status
```

---

# 46. Owner New Leads Metric

Definition:

* current Owner Leads
* source belongs to an owned Property or approved Requirement
* status `new`
* not archived

Click destination:

```text
Owner Leads
→ Filter: New
```

---

# 47. Owner Follow-Ups Due Metric

Definition:

* follow-ups owned by the current Owner
* due today or overdue
* not completed
* Lead accessible

Click destination:

```text
Owner Leads
→ Filter: Follow-Up Due
```

---

# 48. Owner Plan Usage Metric

The plan summary may show:

* active plan
* Properties used
* Property limit
* renewal date
* trial end
* billing issue

All values must be real.

Click destination:

```text
Owner Billing and Usage
```

---

# 49. Owner Property Status Section

The dashboard may show a concise Property-status list containing:

* Property image
* title
* current status
* latest update
* Lead count
* next required action

Each row must open the Property management detail.

Do not show a duplicate full Property list.

Limit the section to recently active or urgent records.

---

# 50. Owner Recent Leads Section

Each recent Lead item may show:

* contact name
* source Property
* status
* latest message
* last activity
* follow-up
* unread state

Click destination:

```text
Lead Detail
```

Source Property must also be clickable.

---

# 51. Owner Moderation Alerts

Moderation alerts may include:

* Changes Required
* Approved
* Rejected
* Published
* Paused by platform
* report-related restriction

Each alert must open the exact Property moderation context.

---

# 52. Owner Recent Activity

Real activities may include:

* Property draft saved
* Property submitted
* Property approved
* Property published
* Direct Inquiry received
* message received
* Follow-Up completed
* Property paused
* Property restored
* payment verified

Activity items must open relevant destinations when meaningful.

---

# 53. Owner Dashboard Empty State

For a new Owner with no Property:

```text
You have not posted a Property yet.
```

Primary action:

```text
Post Property
```

Supporting content may explain:

* draft saving
* moderation
* Direct Inquiry
* Leads

Do not show zero-valued decorative cards across the entire page.

---

# 54. Owner Properties Module

The Owner Properties module must support:

* list
* search
* status filters
* sorting
* creation
* Property detail
* edit
* preview
* pause
* resume
* soft delete
* restore where eligible
* moderation
* related Leads
* activity
* reports where visible
* plan-limit context

---

# 55. Owner Property List Item

A Property item may show:

* image
* title
* location
* price
* publication state
* moderation state
* Lead summary
* last updated
* primary destination
* quick-action menu

Quick actions may include:

* Edit
* Preview
* Pause
* Resume
* Delete
* View Leads

Quick actions must respect status and permission.

---

# 56. Owner Property Detail Navigation

Required sections may include:

1. Overview
2. Public Preview
3. Leads
4. Moderation
5. Activity
6. Reports where visible
7. Settings or Lifecycle Actions

On mobile, sections may use:

* a structured section list
* segmented controls
* full-page subsections

Avoid too many horizontal tabs.

---

# 57. Owner Property Deep Drill-Down

Required navigation:

```text
Owner Dashboard
→ Properties
→ Property
→ Property Leads
→ Lead
→ Messages
→ Activity
```

Related links must support return context.

---

# 58. Owner Leads Workspace

Owner Leads must show Leads connected to:

* owned Properties
* approved owned Requirements
* other explicitly approved Owner interactions

The workspace must support:

* filters
* search
* status
* unread
* follow-up
* source Property
* message preview
* detail
* notes
* activity

---

# 59. Owner Requirements Module

Owner Requirement management may support:

* create
* draft
* submit
* moderation
* active state
* responses
* related Leads
* pause
* close
* expiry
* renewal
* soft delete
* restore

Every response or Lead must remain connected to the Requirement.

---

# 60. Owner Profile and Settings

Owner Profile and Settings should provide:

* personal profile
* public profile where enabled
* verification
* notification preferences
* billing and usage
* security
* sessions and devices
* privacy and consent
* support
* legal
* logout

Mobile should use a settings list with focused detail pages.

---

# 61. Broker Dashboard Purpose

The Broker dashboard must help the Broker manage:

* listings
* Leads
* follow-ups
* Requirements
* moderation
* plan usage
* billing
* notifications
* daily brokerage activity

It must remain focused on the Broker’s own direct records.

---

# 62. Broker Dashboard Recommended Structure

Recommended order:

1. account or billing alert
2. page heading and Post Property action
3. key listing and Lead metrics
4. urgent follow-ups
5. recent listings
6. recent Leads
7. Requirement activity
8. moderation updates
9. recent activity
10. usage and billing

---

# 63. Broker Dashboard Primary Action

Primary action:

```text
Post Property
```

Secondary action:

```text
Post Requirement
```

The dashboard must not make the user search through navigation for core creation actions.

---

# 64. Broker Key Metrics

Recommended:

* Active Listings
* Listings Under Review
* New Leads
* Follow-Ups Due
* Active Requirements
* Plan Usage

Only four or five should remain visually prominent.

---

# 65. Broker Active Listings Metric

Definition:

* Properties owned by current Broker
* active
* approved
* published
* not soft-deleted

Click destination:

```text
Broker Listings
→ Filter: Active
```

---

# 66. Broker Listings Under Review Metric

Definition:

* Broker Properties in moderation states requiring review or user action

Click destination:

```text
Broker Listings
→ Filter: Review
```

`Changes Required` should appear as a separate urgent alert when present.

---

# 67. Broker New Leads Metric

Definition:

* Leads owned by current Broker
* status New
* source is an owned listing or approved Requirement response
* not archived

Click destination:

```text
Broker Leads
→ Filter: New
```

---

# 68. Broker Follow-Ups Due Metric

Definition:

* active Lead Follow-Ups
* owned by current Broker
* due or overdue
* not completed

Click destination:

```text
Broker Leads
→ Filter: Follow-Up Due
```

---

# 69. Broker Active Requirements Metric

Definition:

* Requirements owned by current Broker
* approved
* active
* not expired
* not deleted

Click destination:

```text
Broker Requirements
→ Tab: My Requirements
→ Filter: Active
```

---

# 70. Broker Recent Listings

The dashboard may show recently updated or urgent listings.

Each item must include:

* title
* location
* status
* Lead summary
* last update
* required action

Clicking opens listing detail.

---

# 71. Broker Requirement Activity

The Requirement section may show:

* new eligible Requirements
* responses sent
* active owned Requirements
* expiring Requirements
* resulting Leads

Every item must open the correct Requirement context.

---

# 72. Broker Recent Leads

Recent Leads must preserve:

* source listing
* Requirement source where applicable
* contact
* status
* unread state
* follow-up
* latest activity

Every source relation must be clickable.

---

# 73. Broker Dashboard Empty State

For a new Broker:

```text
Start by posting your first Property listing.
```

Primary action:

```text
Post Property
```

Secondary guidance may explain:

* listing moderation
* Direct Inquiry
* Leads
* Requirements

---

# 74. Broker Listings Module

The Broker Listings module must support:

* search
* filters
* sort
* Property creation
* list and detail
* moderation
* edit
* pause
* resume
* delete
* restore
* Property-specific Leads
* performance where real
* activity
* plan limits

---

# 75. Broker Listing Deep Drill-Down

Required navigation:

```text
Broker Dashboard
→ Listings
→ Property
→ Leads
→ Lead
→ Messages
→ Notes
→ Follow-Ups
→ Activity
```

---

# 76. Broker Leads Workspace

The Broker Leads workspace consolidates:

* listing Direct Inquiries
* Requirement responses
* messages
* notes
* follow-ups
* status
* activity
* source entity

The workspace must not split these into disconnected main navigation modules.

---

# 77. Broker Requirements Workspace

The Broker Requirements workspace may contain:

* eligible Requirement feed
* Broker’s own Requirements
* responses sent
* related Leads
* saved filters where approved

Recommended top-level segments:

* Available
* My Requirements
* Responses

The exact labels must remain understandable and role-appropriate.

---

# 78. Broker Requirement Response Flow

Required navigation:

```text
Requirements
→ Requirement Detail
→ Respond
→ Select Relevant Property or Approved Context
→ Add Message
→ Submit
→ Lead Created or Updated
→ Lead Detail
```

The response must remain traceable.

---

# 79. Broker Profile and Settings

Broker Profile and Settings should include:

* personal profile
* business profile
* public profile
* service cities
* verification
* notification preferences
* billing and usage
* security
* sessions
* privacy
* support
* legal
* logout

---

# 80. Builder Dashboard Purpose

The Builder dashboard must help the Builder manage:

* Projects
* Project Units
* inventory
* Leads
* follow-ups
* promotion status
* moderation
* compliance
* billing
* notifications

It must not display unrelated Property-management controls.

---

# 81. Builder Dashboard Recommended Structure

Recommended order:

1. critical account, compliance, provider, or billing alert
2. page heading and Create Project action
3. key Project, Unit, Lead, and promotion metrics
4. urgent follow-ups
5. Project status
6. inventory attention
7. recent Leads
8. promotion status
9. moderation updates
10. recent activity
11. billing and usage

---

# 82. Builder Dashboard Primary Action

Primary action:

```text
Create Project
```

Secondary actions may include:

* Manage Projects
* View Leads
* Create Promotion

Promotion creation must be available only when eligibility passes.

---

# 83. Builder Key Metrics

Recommended:

* Active Projects
* Projects Under Review
* Available Units
* New Leads
* Active Promotions
* Follow-Ups Due
* Plan Usage

Only the most important four or five should appear prominently.

---

# 84. Builder Active Projects Metric

Definition:

* Projects owned by current Builder
* approved
* published
* active
* not soft-deleted

Click destination:

```text
Builder Projects
→ Filter: Active
```

---

# 85. Builder Projects Under Review Metric

Definition:

* current Builder Projects in:

  * pending review
  * in review
  * changes required

Click destination:

```text
Builder Projects
→ Filter: Review
```

`Changes Required` must produce an urgent direct action.

---

# 86. Builder Available Units Metric

Definition:

* active Units
* belonging to current Builder’s Projects
* available inventory above zero
* not soft-deleted
* parent Project accessible

Click destination:

```text
Builder Projects
→ Inventory Context
→ Filter: Available Units
```

The user must retain Project context.

---

# 87. Builder New Leads Metric

Definition:

* Leads owned by current Builder
* source Project or Unit
* status New
* not archived

Click destination:

```text
Builder Leads
→ Filter: New
```

---

# 88. Builder Active Promotions Metric

Definition:

* promotions owned by current Builder
* approved
* scheduled and currently active
* valid billing
* valid destination
* not paused or expired

Click destination:

```text
Builder Promotions
→ Filter: Active
```

---

# 89. Builder Inventory Attention Section

The dashboard may show:

* Units with zero availability
* Units missing price
* Units paused
* Projects missing required Unit data
* recent inventory changes
* inventory conflicts

Each item must open the exact Project and Unit context.

---

# 90. Builder Project Status Section

The Project section may show:

* Project image
* Project name
* moderation state
* publication state
* Unit summary
* Lead summary
* promotion eligibility
* required action

Each item opens Project detail.

---

# 91. Builder Recent Leads

Each Lead item should show:

* contact
* Project
* Unit where applicable
* status
* unread state
* latest message
* follow-up
* activity

Project and Unit links must be clickable.

---

# 92. Builder Promotion Status Section

The promotion section may show:

* promotion destination
* target city
* moderation state
* billing state
* schedule
* active/paused/expired state
* real impressions or clicks where implemented
* required action

No fake performance values may appear.

---

# 93. Builder Dashboard Empty State

For a new Builder:

```text
Create your first Project to start managing Units and Leads.
```

Primary action:

```text
Create Project
```

Supporting guidance may explain:

* Project moderation
* Unit creation
* Direct Inquiry
* Builder promotions

---

# 94. Builder Projects Module

The Projects module must support:

* Project list
* search
* status filters
* sorting
* Project creation
* Project detail
* Units
* Project-specific Leads
* moderation
* compliance
* media
* edit
* pause
* resume
* soft delete
* restore
* promotion eligibility
* activity

---

# 95. Builder Project Detail Structure

Recommended sections:

1. Overview
2. Units and Inventory
3. Leads
4. Media
5. Compliance
6. Moderation
7. Promotions
8. Activity
9. Lifecycle Actions

On mobile, sections should use a structured section list or manageable segmented navigation.

---

# 96. Builder Project Deep Drill-Down

Required navigation:

```text
Builder Dashboard
→ Projects
→ Project
→ Units
→ Unit
→ Unit Leads
→ Lead
→ Messages and Activity
```

and:

```text
Builder Dashboard
→ Projects
→ Project
→ Project Leads
→ Lead
→ Source Unit where applicable
```

---

# 97. Builder Unit List

A Unit list item may show:

* configuration
* tower or wing
* area
* price
* inventory
* availability
* status
* Lead count
* last updated

Clicking opens Unit detail.

---

# 98. Builder Unit Detail

Unit detail must show:

* parent Project
* configuration
* price
* inventory
* status
* media
* price history where permitted
* inventory events
* related Leads
* lifecycle actions

The parent Project must remain visible and clickable.

---

# 99. Builder Leads Workspace

The Builder Leads workspace must support:

* Project filter
* Unit filter
* status
* unread
* follow-up
* priority
* date range
* search
* messages
* notes
* activity

The source Project and Unit must remain visible.

---

# 100. Builder Promotions Module

The Promotions module must support:

* eligible destination selection
* draft
* preview
* billing state
* submission
* moderation
* schedule
* active state
* pause
* resume
* expiry
* performance where real
* correction
* resubmission
* history

---

# 101. Builder Profile and Settings

Builder Profile and Settings should include:

* personal account profile
* Builder business profile
* public profile
* verification
* compliance
* service cities
* notification preferences
* billing and usage
* security
* sessions
* privacy
* support
* legal
* logout

---

# 102. Unified Leads Navigation Authority

Every role must use one unified Leads workspace.

Primary navigation must not separate:

* inquiries
* messages
* notes
* follow-ups
* activity

into unrelated main modules.

These are parts of Lead management.

---

# 103. Leads Workspace Layout

Mobile:

* Lead list
* search
* filter sheet
* Lead cards
* full-screen Lead detail
* keyboard-aware message composer

Tablet:

* list and detail split where useful
* bottom navigation remains available
* filter drawer or sheet

Desktop:

* list/detail split
* persistent filters
* selected Lead highlight
* contextual source panel

---

# 104. Lead List Item Navigation

A Lead row or card must open Lead detail.

Nested actions may include:

* status menu
* follow-up action
* archive action

Nested actions must not trigger the primary row navigation accidentally.

---

# 105. Lead Detail Navigation

Lead detail must provide clickable access to:

* contact user
* source Property
* source Project
* source Unit
* source Requirement
* messages
* notes
* follow-ups
* activity
* report
* related notification where relevant

Every relation must respect permissions.

---

# 106. Lead Source Return Behavior

When a user opens a source entity from a Lead and returns:

* return to the same Lead
* preserve Lead tab
* preserve message scroll where practical
* preserve unsent message draft safely
* preserve list filters
* avoid duplicating the Lead route

---

# 107. Dashboard-to-Lead Drill-Down

Required chains:

```text
Dashboard Metric
→ Filtered Lead List
→ Lead Detail
→ Source Entity
→ Return to Lead
→ Return to Filtered List
→ Return to Dashboard
```

The route state must remain stable.

---

# 108. Notification Integration

Every role application must provide:

* unread badge
* notification preview where suitable
* notification center
* exact destinations
* read state
* archive where supported
* real timestamps

Notification data must be server-backed.

---

# 109. Notification Preview

The preview may show:

* latest five unread or recent notifications
* category
* title
* source summary
* timestamp
* read state
* View All

It may appear as:

* desktop popover
* mobile full-screen sheet
* tablet drawer or popover

---

# 110. Notification Destination Rules

Examples:

```text
New Property Lead
→ Exact Lead
```

```text
Project Changes Required
→ Exact Project
→ Moderation Section
```

```text
Payment Verified
→ Exact Payment or Invoice
```

```text
Follow-Up Due
→ Exact Lead
→ Follow-Up Section
```

A notification must not open a generic dashboard when an exact destination exists.

---

# 111. Unavailable Notification Destination

When the related entity is unavailable:

* explain that it is no longer available
* preserve a safe summary
* provide a relevant module destination
* avoid exposing deleted private content
* allow notification archive
* record no false error

---

# 112. Notification Read Behavior

A notification may become read when:

* the user opens it
* the exact destination is displayed
* the user explicitly marks it read

The server must persist read state.

Unread counts must update consistently across:

* header
* bottom navigation
* notification preview
* notification center

---

# 113. Profile Navigation

Profile entry must lead to a structured account area.

Recommended sections:

* Profile
* Public Profile
* Verification
* Billing and Usage
* Notifications
* Security
* Sessions and Devices
* Privacy and Consent
* Support
* Legal
* Logout

Role-specific sections must appear only when relevant.

---

# 114. Profile Mobile UX

On mobile, Profile should use:

* clear account summary
* settings list
* grouped sections
* full-page detail routes
* Back behavior
* no overloaded single form
* no small nested modal for complex edits

---

# 115. Profile Desktop UX

Desktop may use:

* left-side section navigation
* medium-width detail panel
* direct section URLs
* stable unsaved-change handling

Do not use excessive horizontal tabs.

---

# 116. Billing Entry Points

Billing must be reachable from:

* dashboard alert
* usage summary
* profile/settings
* plan-limit state
* promotion flow
* checkout
* invoice notification

All billing entry points must lead to the same authoritative billing records.

---

# 117. Billing Dashboard Summary

The dashboard may show:

* current plan
* usage
* renewal date
* trial expiry
* payment issue
* invoice available
* promotion billing status

It must not display:

* fake renewal
* client-calculated payment state
* unverified invoice
* unsupported upgrade action

---

# 118. Billing Alert Priority

Billing alerts should appear when:

* plan expired
* trial ending
* usage limit reached
* payment failed
* payment pending unusually long
* invoice available
* promotion payment required

Each alert must open the exact billing context.

---

# 119. Support Entry Points

Support must be reachable from:

* Profile and Settings
* error states
* provider failure
* billing issue
* moderation issue
* account restriction
* report status
* recovery flow

Support context should preserve:

* current route
* related entity
* safe error reference
* issue category

---

# 120. Help and Guidance

Role applications may include contextual guidance for:

* first Property
* first Project
* first Unit
* first Direct Inquiry
* first Lead
* first promotion
* verification
* billing

Guidance must be:

* brief
* dismissible where appropriate
* non-blocking
* linked to Help
* role-specific

---

# 121. Application Search

Authenticated role applications may provide scoped search.

## Owner search may include:

* own Properties
* own Leads
* own Requirements
* notifications

## Broker search may include:

* own listings
* Leads
* Requirements
* responses

## Builder search may include:

* Projects
* Units
* Leads
* promotions

Search must respect permissions and RLS.

---

# 122. Application Search Results

Each result must show:

* entity type
* title
* supporting context
* status
* destination

Search must not include:

* another user’s private data
* public marketplace results unless clearly separated
* deleted content outside recovery context
* private Admin data

---

# 123. Scoped Search UX

On mobile:

* use full-screen search
* focus input
* group results
* provide Close
* preserve current route

On desktop:

* use header search or command interface
* support keyboard
* show grouped results
* open exact destination

---

# 124. Role Application Filters

List modules must support relevant filters.

Examples:

## Properties/Listings

* status
* moderation
* purpose
* city
* updated date

## Projects

* status
* moderation
* city
* Project type
* compliance state

## Leads

* status
* source
* unread
* follow-up
* priority
* date

## Requirements

* ownership
* status
* response state
* expiry
* city

Filters must be server-backed.

---

# 125. List-Detail-Return Authority

Every role application list must preserve useful state when moving to detail and back.

Preserve:

* search
* filters
* sorting
* tab
* page or cursor
* scroll position
* selected item
* expanded row where useful
* view mode

This applies to:

* Properties
* Listings
* Projects
* Units
* Leads
* Requirements
* Promotions
* Notifications
* Billing history
* Support tickets

---

# 126. URL State

Use URL state for shareable or refresh-safe list state where appropriate.

Examples:

```text
?status=active
?moderation=changes_required
?lead_status=new
?follow_up=due
?project_id=...
?unit_id=...
?page=2
?sort=recent
```

Validate every parameter server-side.

---

# 127. Scroll Restoration

Scroll restoration should work when:

* returning from detail to list
* returning from Lead to dashboard
* closing a desktop detail drawer
* returning from public detail to role application

Do not restore scroll to an invalid position after list data changes significantly.

---

# 128. Page, Drawer, and Modal Selection

Use a dedicated page for:

* full entity detail
* complex editing
* Project management
* Lead detail on mobile
* billing
* settings
* long forms

Use a drawer for:

* desktop quick inspection
* moderate contextual detail
* short edit while preserving list

Use a modal for:

* short confirmation
* short reason input
* brief focused action

Use a bottom sheet for:

* mobile filters
* mobile sort
* quick action selection
* short confirmation

---

# 129. Entity Detail Drawer Rule

Desktop may use a drawer for quick viewing of:

* Lead
* notification
* Property summary
* Project summary
* billing record

The drawer must provide:

* full-detail link
* Close
* keyboard support
* return focus
* no state loss

Complex actions must open a full page.

---

# 130. Quick Action Menus

Entity quick-action menus may include:

* Edit
* View Leads
* Pause
* Resume
* Delete
* Restore
* Preview
* View Public Page

Menus must:

* show only valid actions
* close on outside click
* close on Escape
* support keyboard
* use confirmation for destructive actions
* not replace primary detail navigation

---

# 131. Create Action Behavior

Create actions must check eligibility before or immediately after entry.

Possible states:

* allowed
* profile completion required
* verification required
* plan limit reached
* account restricted
* provider setup required
* permission denied

The UI must display the real reason.

---

# 132. Account Restriction States

When an account is restricted, the role application may allow:

* viewing profile
* viewing restriction information
* completing verification
* viewing billing
* contacting support
* viewing existing records according to policy

Blocked actions must show:

* clear reason
* next step
* support entry where required

---

# 133. Suspended Account Shell

A suspended account must not see a normal active dashboard.

Show a controlled account-status screen containing:

* safe status message
* permitted support action
* permitted recovery action
* billing access only when policy permits
* legal information
* logout

Private records must remain protected.

---

# 134. Incomplete Onboarding State

When onboarding is incomplete:

* show a focused onboarding continuation
* explain required steps
* preserve completed data
* allow safe dashboard preview only when approved
* block only actions requiring missing data
* avoid blocking unrelated safe actions without reason

---

# 135. Verification Required State

Verification-required UI must show:

* verification type
* current status
* required next action
* document or information requirement
* review state
* changes-required reason
* support path

Do not show a generic disabled button without explanation.

---

# 136. Plan-Limit State

When a plan limit is reached:

* show current usage
* show limit
* show affected action
* show upgrade or contact path
* preserve current draft where possible
* avoid creating an invalid record
* use server-calculated values

---

# 137. Provider Setup State

Role applications may display user-facing provider states for:

* media upload
* email delivery
* payment
* invoice
* scheduled reminder

The UI must distinguish:

* Setup Required
* Temporarily Unavailable
* Processing
* Failed
* Test Mode where visible only in non-production
* Active

Do not expose provider secrets or configuration details.

---

# 138. Dashboard Loading State

Dashboard loading must:

* preserve shell and navigation
* use section-aware skeletons
* avoid large blank screens
* load critical alerts early
* avoid fake numbers
* support partial section loading
* handle timeout
* announce status accessibly

---

# 139. Dashboard Partial Failure

If one dashboard section fails:

* keep other successful sections visible
* show a local error
* provide Retry
* record monitoring event
* avoid replacing the whole dashboard with a generic error

A critical authorization or session failure may require a page-level state.

---

# 140. Dashboard Empty State

Empty states must reflect the user’s actual stage.

Examples:

* no Properties
* no Projects
* no Leads
* no Requirements
* no promotions
* no notifications
* no billing history

Do not use the same generic empty state everywhere.

---

# 141. Dashboard Error State

Dashboard error messages must:

* remain safe
* explain what failed
* provide Retry
* preserve navigation
* preserve user context
* provide support reference where useful
* not expose raw database or provider errors

---

# 142. Dashboard Success Feedback

Dashboard actions may show success for:

* Property paused
* Project resumed
* Follow-Up completed
* notification marked read
* draft created
* promotion submitted

The visible dashboard state must update.

A toast alone is insufficient when a card or count must change.

---

# 143. Dashboard Refresh Behavior

Refresh must:

* reload authorized server data
* preserve valid route state
* preserve filters encoded in URL
* handle session expiry
* handle role change
* handle account restriction
* avoid duplicate mutation
* not reveal previous-user data

---

# 144. Browser Back Behavior

Browser Back must be verified for:

* dashboard to list
* list to detail
* detail to Lead
* Lead to source entity
* profile sections
* notification destinations
* billing
* support
* cross-host transitions
* focused task flows

It must not:

* force a dashboard reset without reason
* create authentication loops
* show stale unauthorized data
* duplicate an overlay
* lose unsaved work silently

---

# 145. New-Tab Behavior

Same-tab navigation is the default on mobile.

On desktop, standard browser-controlled new-tab behavior should remain available for:

* public Property comparison
* public Project comparison
* selected Admin or application records when standard anchors are used

Do not force every role-application detail into a new tab.

Cross-host links should clearly preserve security and return behavior.

---

# 146. Deep Clickability Rule

Every displayed relationship that appears actionable must have a real destination.

Examples:

* metric
* count
* Property title
* Project title
* Unit configuration
* Lead name
* status alert
* notification
* invoice number
* support reference
* moderation update
* promotion destination

If an item has no action, it must not use interactive styling.

---

# 147. Required Owner Graph

```text
Owner Dashboard
→ Properties
→ Property
→ Property Leads
→ Lead
→ Messages
→ Notes
→ Follow-Ups
→ Activity
→ Source Property
```

```text
Owner Dashboard
→ Requirements
→ Requirement
→ Response
→ Lead
→ Activity
```

```text
Owner Dashboard
→ Billing
→ Subscription
→ Payment
→ Invoice
```

---

# 148. Required Broker Graph

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

---

# 149. Required Builder Graph

```text
Builder Dashboard
→ Projects
→ Project
→ Units
→ Unit
→ Unit Leads
→ Lead
→ Messages and Activity
```

```text
Builder Dashboard
→ Projects
→ Project
→ Project Leads
→ Lead
→ Source Unit
```

```text
Builder Dashboard
→ Promotions
→ Promotion
→ Project
→ Billing
→ Performance
```

---

# 150. Required Notification Graph

```text
Notification
→ Exact Entity
→ Relevant Section
→ Related Child Entity
```

Examples:

```text
New Lead Notification
→ Lead
→ Source Property
```

```text
Project Changes Required
→ Project
→ Moderation
→ Edit Required Section
```

---

# 151. Required Billing Graph

```text
Dashboard Billing Alert
→ Billing
→ Subscription
→ Payment
→ Invoice
→ Support if Problem Exists
```

All billing values must come from authoritative billing services.

---

# 152. Required Support Graph

```text
Error or Account Alert
→ Support
→ Ticket
→ Related Entity
→ Replies
→ Resolution
```

Users must be able to return to the original entity.

---

# 153. Admin-Linked Role Visibility

Permissioned Admin users must be able to inspect the same underlying role records through the Admin application.

Examples:

```text
Admin User
→ User Role
→ Dashboard Source Entities
→ Properties or Projects
→ Leads
→ Billing
→ Notifications
→ Audit
```

Role dashboards must not rely on data that Admin cannot trace to an authoritative entity.

---

# 154. Dashboard Query Architecture

Each role should have an optimized dashboard service.

Recommended services:

```text
owner-dashboard-service
broker-dashboard-service
builder-dashboard-service
```

Each service should:

* authenticate
* load current role
* validate account status
* load critical alerts
* calculate key metrics
* load limited urgent work
* load limited recent activity
* load billing summary
* return public-role-safe data
* use indexed queries
* avoid N+1 calls
* apply user-scoped caching where safe

---

# 155. Dashboard Summary Response

A dashboard response may contain:

```text
role
accountStatus
profileSummary
criticalAlerts
primaryActionState
metrics
urgentFollowUps
recentEntities
recentLeads
moderationUpdates
recentActivity
billingSummary
notificationSummary
generatedAt
```

Do not return full entity details unnecessarily.

---

# 156. Dashboard Query Performance

Dashboard queries must:

* select only required columns
* use limited result counts
* use aggregate queries efficiently
* avoid loading all Leads
* avoid loading all messages
* avoid loading all activity
* avoid one query per card
* use indexes
* support timeout
* support partial failure

---

# 157. Dashboard Aggregate Strategy

Possible approaches:

* one optimized server query
* small set of parallel indexed queries
* database view
* restricted RPC
* precomputed aggregate where justified

The selected approach must:

* respect RLS
* prevent data leakage
* remain maintainable
* remain correct after mutations
* avoid stale misleading values

---

# 158. Dashboard Cache Rules

User-specific dashboards may use:

* short user-scoped cache
* server request memoization
* role-scoped cache key
* invalidation tags

Never use shared public caching for private dashboard data.

Cache keys must include:

* user
* role
* relevant account state
* environment

---

# 159. Dashboard Cache Invalidation

Invalidate relevant dashboard summaries after:

* Property created
* Property submitted
* Property moderated
* Property paused
* Property restored
* Project created
* Project submitted
* Unit inventory updated
* Direct Inquiry received
* Lead status changed
* message sent or read
* Follow-Up created or completed
* promotion changed
* payment verified
* subscription changed
* notification read
* account status changed

---

# 160. Application List Query Rules

All role lists require:

* server-side filtering
* pagination or cursor
* stable sorting
* selected columns
* ownership scope
* soft-delete handling
* permission handling
* loading state
* empty state
* error state

Do not fetch all records into the browser.

---

# 161. Activity Query Rules

Activity sections must:

* use append-only real events
* limit initial results
* use cursor pagination
* exclude unauthorized events
* use safe summaries
* link to real entities
* display correct timestamps

---

# 162. Notification Query Rules

Notification queries must:

* use recipient scope
* index unread state
* paginate
* limit preview results
* order by creation time
* exclude deleted or archived state as configured
* resolve destination safely

---

# 163. Dashboard RLS

Dashboard data must derive from tables protected by RLS.

The dashboard must not use a service-role query that returns unrestricted data directly to the browser.

Trusted server aggregation using elevated access may be used only when:

* the server validates the user
* the aggregation explicitly scopes every query
* no private unrelated data is returned
* the implementation is security-reviewed
* tests prove isolation

---

# 164. Route Authorization

Every role route must validate:

* authentication
* public role
* account status
* ownership where entity-specific
* plan or verification requirement where applicable

Direct URL tests are mandatory.

---

# 165. Wrong-Role Access

When a user opens another role’s route:

* do not render unauthorized data
* show a safe permission state or redirect
* preserve a safe compatible destination
* log suspicious repeated attempts where appropriate
* avoid exposing route internals

---

# 166. Wrong-User Entity Access

When a user opens another user’s private entity ID:

* return permission denied or not found according to security policy
* do not reveal entity existence unnecessarily
* create a security event for suspicious repeated probing
* do not return partial data
* do not rely on hidden buttons

---

# 167. Service-Level Authorization

Every dashboard action must call a trusted service that verifies:

* session
* role
* account status
* entity ownership
* current entity state
* plan state
* provider state
* validation
* rate limit
* idempotency
* audit requirement

---

# 168. Security and Privacy

Role applications contain private data.

Private dashboard data includes:

* contact details
* Leads
* messages
* notes
* follow-ups
* billing
* invoices
* notifications
* security settings
* account status
* private drafts
* moderation detail
* private addresses
* support tickets

Private data must not appear in:

* public HTML
* public metadata
* shared cache
* public analytics
* unauthenticated APIs
* browser logs
* error payloads
* another user’s session

---

# 169. Client State Rules

Client state may manage:

* current drawer
* temporary filter draft
* open section
* non-authoritative UI preference
* unsent message draft
* optimistic state with rollback

Client state must not be authoritative for:

* role
* Property ownership
* Project ownership
* Lead access
* payment status
* moderation status
* notification count
* plan usage
* account status

---

# 170. Application Analytics

Approved role-application events may include:

* dashboard viewed
* dashboard metric opened
* Property module opened
* Project module opened
* Lead opened
* Follow-Up completed
* notification opened
* billing opened
* promotion opened

Analytics must not include:

* private message body
* private note
* full mobile number
* private email
* invoice data
* payment secrets
* private support content

---

# 171. Dashboard Metric Analytics

Metric-click analytics may record:

* role
* metric key
* destination module
* timestamp
* privacy-safe session

Do not send the metric value when it could reveal sensitive business information unnecessarily.

---

# 172. Responsive Owner Dashboard

## 320px and 360px

* single-column layout
* compact heading
* one clear primary action
* two-column metrics only when readable
* no horizontal overflow
* bottom navigation visible
* urgent alerts above summaries
* list sections use cards

## 390px and 430px

* improved card spacing
* two-column metric grid where stable
* readable recent activity
* safe bottom padding

## 768px and 1024px

* tablet bottom navigation
* two-column section layout where useful
* wider cards
* no desktop table compression
* optional split view

## 1366px and 1440px

* constrained dashboard width
* balanced summary grid
* desktop navigation
* no excessive card stretching

---

# 173. Responsive Broker Dashboard

Mobile must prioritize:

* new Leads
* follow-ups
* listing action
* moderation issues

Tablet may use:

* two-column summary
* wider Lead cards
* Requirement activity panel

Desktop may use:

* summary grid
* recent listing and Lead columns
* stable sidebar
* concise Requirement section

---

# 174. Responsive Builder Dashboard

Mobile must prioritize:

* Project status
* inventory attention
* new Leads
* Create Project

Tablet may use:

* Project and inventory split
* Lead panel
* promotion status

Desktop may use:

* summary grid
* Project status table/card hybrid
* inventory alert panel
* recent Leads
* promotion panel

---

# 175. Responsive List Modules

Mobile:

* structured cards
* filter sheet
* sort sheet
* full-screen detail
* safe bottom navigation

Tablet:

* structured list
* optional split detail
* bottom navigation
* filter drawer

Desktop:

* table or list
* side filter or compact filter bar
* detail page or drawer
* desktop navigation

---

# 176. Responsive Lead Workspace

Mobile:

* Lead cards
* full-screen Lead
* keyboard-safe composer
* Back to preserved list
* bottom navigation hidden or adapted during message composition when necessary

Tablet:

* split list/detail
* bottom navigation
* touch-friendly filters

Desktop:

* persistent list/detail
* resizable or fixed balanced panes where appropriate
* keyboard shortcuts only as optional enhancement

---

# 177. Text Wrapping Verification

Test dashboards with:

* long user name
* long business name
* long Property title
* long Project name
* long Unit configuration
* long location
* long status
* long alert
* long notification
* long plan name
* long support title

Text must not:

* clip
* overlap icons
* push actions outside viewport
* break metric cards
* create horizontal overflow
* hide status meaning

---

# 178. Fixed and Sticky Positioning

Role applications may use:

* sticky header
* bottom navigation
* sticky message composer
* sticky filter bar
* focused task action bar

Every fixed or sticky element must:

* respect safe area
* account for keyboard
* add matching content spacing
* use controlled z-index
* avoid nested sticky conflicts
* work at all required widths
* not cover the final list item

---

# 179. Accessibility

Role applications must support:

* semantic headings
* skip links
* keyboard navigation
* visible focus
* accessible navigation labels
* accessible active state
* touch targets
* screen-reader status
* accessible metric names
* accessible table headers
* modal and drawer focus management
* keyboard-safe message composer
* contrast
* reduced motion
* zoom
* non-color status meaning

---

# 180. Bottom Navigation Accessibility

Bottom navigation must:

* use a navigation landmark
* include visible labels
* identify current page
* provide accessible badge text
* support keyboard focus
* avoid icon-only ambiguity
* maintain predictable order

---

# 181. Dashboard Accessibility

Metrics must announce:

* label
* value
* destination where clickable

Example accessible meaning:

```text
New Leads, 4, opens filtered Leads list
```

A non-interactive metric must not be announced as a button or link.

---

# 182. Loading Accessibility

Loading states should announce:

* dashboard loading
* list updating
* filter applied
* action processing
* content loaded

Avoid repetitive announcements for every skeleton item.

---

# 183. Error Accessibility

Errors must:

* receive focus when blocking
* be associated with the failed section
* provide keyboard-accessible Retry
* not rely only on color
* preserve page orientation

---

# 184. Motion

Role application motion may support:

* navigation transitions
* drawer opening
* filter-sheet opening
* list updates
* success feedback
* metric refresh

Motion must:

* remain subtle
* not delay work
* support reduced motion
* avoid moving focus
* avoid layout shift
* remain performant on mobile

---

# 185. Dashboard Skeletons

Skeletons must match:

* metric dimensions
* alert region
* recent list rows
* activity section
* billing summary

Do not use a generic centered spinner for the entire dashboard when structured loading is possible.

---

# 186. Role Dashboard Automated Tests

## Unit tests

* metric definitions
* role route resolver
* host resolver
* navigation mapping
* active navigation state
* badge calculation
* dashboard alert priority
* filtered destination generation
* list-state serialization
* permission-state mapping

## Integration tests

* Owner dashboard service
* Broker dashboard service
* Builder dashboard service
* dashboard RLS
* billing summary
* notification summary
* cache invalidation
* host redirect
* wrong-role access
* account restriction
* plan-limit state

## End-to-end tests

* role login redirect
* role dashboard load
* primary action
* metric drill-down
* list-detail-return
* notification destination
* profile navigation
* billing navigation
* bottom navigation
* desktop navigation
* session expiry
* wrong-role route
* responsive behavior

---

# 187. Owner Dashboard Verification Matrix

Verify:

* first-time Owner
* Owner with Properties
* Owner with pending moderation
* Owner with Changes Required
* Owner with Leads
* Owner with follow-ups
* Owner with no Leads
* Owner with plan limit
* Owner with billing issue
* active metric destination
* pending metric destination
* new Lead destination
* follow-up destination
* Property detail
* Property Leads
* Lead detail
* notification
* profile
* settings
* support
* logout
* mobile bottom navigation
* tablet bottom navigation
* desktop navigation
* Back
* browser Back
* refresh
* responsive widths
* accessibility
* console
* network
* RLS

---

# 188. Broker Dashboard Verification Matrix

Verify:

* first-time Broker
* Broker with listings
* listing moderation
* Changes Required
* active Requirements
* eligible Requirement feed
* response
* resulting Lead
* new Lead metric
* follow-up metric
* listing detail
* listing Leads
* Lead detail
* notification
* billing
* profile
* support
* mobile bottom navigation
* tablet bottom navigation
* desktop navigation
* list-state preservation
* responsive widths
* accessibility
* console
* network
* RLS

---

# 189. Builder Dashboard Verification Matrix

Verify:

* first-time Builder
* Builder with Projects
* Project moderation
* Project Changes Required
* Project Units
* available Unit metric
* inventory attention
* new Lead metric
* Project Lead
* Unit Lead
* promotion draft
* promotion billing state
* promotion moderation
* promotion active state
* notification
* billing
* profile
* verification
* support
* mobile bottom navigation
* tablet bottom navigation
* desktop navigation
* responsive widths
* accessibility
* console
* network
* RLS

---

# 190. Bottom Navigation Verification Matrix

For every role, test:

* item order
* item label
* active state
* route
* Back behavior
* browser Back
* badge
* safe area
* page-bottom padding
* keyboard opening
* focused task behavior
* orientation change
* tablet
* deep route active state
* logout removal
* role change refresh
* accessibility

---

# 191. Desktop Navigation Verification Matrix

Test:

* active module
* collapsed state where supported
* keyboard
* labels
* route
* deep route
* profile menu
* notification
* logout
* wrong-role route
* long business name
* wide screen
* smaller desktop
* focus
* no duplicate navigation

---

# 192. Dashboard Metric Verification

For each metric:

1. identify database query
2. create controlled test records
3. verify included records
4. verify excluded records
5. verify wrong-user exclusion
6. verify soft-deleted exclusion
7. verify archived-state handling
8. verify value
9. click metric
10. verify filtered destination
11. mutate underlying data
12. verify invalidation
13. verify new value

No metric may pass through visual inspection alone.

---

# 193. Deep Drill-Down Verification

Verify these chains end to end:

```text
Owner Dashboard
→ Active Properties
→ Property
→ Leads
→ Lead
→ Source Property
→ Back to Lead
→ Back to filtered list
```

```text
Broker Dashboard
→ New Leads
→ Lead
→ Listing
→ Requirement where applicable
→ Back
```

```text
Builder Dashboard
→ Project
→ Unit
→ Unit Leads
→ Lead
→ Messages
→ Back to Unit
```

```text
Notification
→ Exact Entity
→ Exact Section
```

```text
Billing Alert
→ Payment
→ Invoice
```

---

# 194. List-Detail-Return Verification

For every major module:

* apply search
* apply filters
* choose sort
* move to page or cursor position
* scroll
* open item
* open related child
* return
* confirm state preserved
* refresh
* confirm URL state where expected
* use browser Back
* confirm no duplicate route

---

# 195. Provider-State Verification

Verify dashboard behavior when:

* media is Setup Required
* email is Setup Required
* payment is Setup Required
* payment is pending
* payment failed
* scheduled job unavailable
* provider degraded
* provider restored

No fake success may appear.

---

# 196. Account-State Verification

Verify:

* active account
* onboarding incomplete
* verification required
* plan limit reached
* restricted account
* suspended account
* closed account
* session expired
* role changed
* wrong host
* wrong role
* unauthorized entity

---

# 197. Responsive Verification Recording

For every role dashboard and major module, record:

```text
Route:
Role:
Host:
Account State:
320px:
360px:
390px:
430px:
768px:
1024px:
1366px:
1440px:
Wide:
Bottom Navigation:
Desktop Navigation:
Keyboard:
Text Wrapping:
Sticky/Fixed Overlap:
List-Detail-Return:
Accessibility:
Console:
Network:
Result:
```

---

# 198. Live Browser Verification Procedure

The matching verification prompt must:

1. detect or start the development server
2. record actual URL and port
3. verify host-routing behavior
4. login as Owner
5. open Owner dashboard
6. verify every Owner metric
7. navigate through Properties and Leads
8. verify Owner bottom navigation
9. verify Owner profile and billing
10. login as Broker
11. open Broker dashboard
12. verify every Broker metric
13. navigate Listings, Leads, and Requirements
14. verify Broker bottom navigation
15. login as Builder
16. open Builder dashboard
17. verify every Builder metric
18. navigate Projects, Units, Leads, and Promotions
19. verify Builder bottom navigation
20. verify tablet navigation
21. verify desktop navigation
22. verify notifications
23. verify billing entry points
24. verify list-detail-return
25. verify Back and browser Back
26. verify refresh
27. verify restricted and provider states
28. verify all required widths
29. verify keyboard and focus
30. check console
31. check network
32. test wrong-role access
33. test wrong-user access
34. test RLS
35. fix defects
36. retest
37. update `PROJECT_STATE.md`
38. update `FEATURE_REGISTRY.md`
39. keep the development server running when safe

---

# 199. Dashboard Performance Verification

Measure:

* dashboard server response
* metric query time
* critical alert query time
* recent Lead query time
* activity query time
* billing-summary query time
* number of database queries
* payload size
* cache behavior
* invalidation behavior
* mobile rendering time
* client bundle impact

Do not mark performance PASS without measurement.

---

# 200. Dashboard Load Testing

Load tests should include:

* Owner dashboard reads
* Broker dashboard reads
* Builder dashboard reads
* Lead list reads
* Property list reads
* Project list reads
* notification preview reads
* repeated filter queries
* cache invalidation under activity
* concurrent dashboard sessions

Measure:

* p50
* p95
* p99
* error rate
* database connections
* query latency
* cache hit ratio
* application CPU
* memory
* payload size

---

# 201. Monitoring

Monitor:

* dashboard load failure
* wrong-role redirect loop
* metric query failure
* stale badge behavior
* notification destination failure
* billing-summary failure
* list query latency
* dashboard cache failure
* RLS denial anomaly
* deep-link failure
* client navigation error

---

# 202. Production Role Application Checklist

Production sign-off requires:

* role host routing works
* role redirects work
* Owner dashboard works
* Broker dashboard works
* Builder dashboard works
* metrics use real data
* every metric opens a real destination
* mobile bottom navigation works
* tablet bottom navigation works
* desktop navigation works
* list-detail-return works
* notifications open exact destinations
* profile and settings work
* billing entry points work
* role restrictions work
* account-state screens work
* provider states are honest
* RLS passes
* server authorization passes
* wrong-user access fails safely
* responsive widths pass
* text wrapping passes
* sticky and fixed positioning passes
* accessibility passes
* console is clean for tested flows
* network errors are handled
* dashboard performance is measured
* load tests cover dashboard reads
* monitoring is active
* production hosts and SSL work
* production smoke test passes

---

# 203. Feature Registry Updates

After implementation, update at least:

* `DASH-001` through `DASH-020`
* `ROLE-001` through `ROLE-010`
* `UX-010` through `UX-019`
* `UX-026` through `UX-030`
* `UX-040` through `UX-045`
* `GRAPH-001` through `GRAPH-020`
* relevant `PROP-*`
* relevant `PROJ-*`
* relevant `UNIT-*`
* relevant `REQ-*`
* relevant `LEAD-*`
* relevant `NOTIF-*`
* relevant `BILL-*`
* relevant `SEC-*`
* relevant `PERF-*`
* relevant `QA-*`
* relevant `OPS-*`

Add exact:

* hosts
* routes
* layouts
* navigation files
* dashboard services
* query definitions
* tables
* views
* RLS policies
* indexes
* cache tags
* tests
* browser routes
* responsive widths
* accessibility result
* known issues
* production status

---

# 204. Project State Updates

Update `PROJECT_STATE.md` with:

* current dashboard phase
* Owner dashboard status
* Broker dashboard status
* Builder dashboard status
* host-routing status
* mobile bottom-navigation status
* tablet bottom-navigation status
* desktop-navigation status
* dashboard query status
* deep drill-down status
* list-state preservation status
* notification status
* billing-entry status
* RLS result
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

# 205. Non-Negotiable Dashboard and Navigation Rules

1. Public role applications are Owner, Broker, and Builder/Developer.
2. Each role receives a focused application shell.
3. Role applications may use configured role-specific hosts.
4. Host routing must be server-validated.
5. The Owner application remains focused on owned Properties, Leads, Requirements, billing, and profile.
6. The Broker application remains focused on listings, Leads, Requirements, billing, and business profile.
7. The Builder application remains focused on Projects, Units, Leads, promotions, billing, and Builder profile.
8. Units remain inside the parent Project context.
9. Mobile and tablet bottom navigation is mandatory.
10. Owner bottom navigation is Dashboard, Properties, Leads, Post, and Profile.
11. Broker bottom navigation is Dashboard, Listings, Leads, Requirements, and Profile.
12. Builder bottom navigation is Dashboard, Projects, Leads, Promotions, and Profile.
13. Desktop navigation must remain role-specific and concise.
14. The homepage city selector must not appear in role application headers.
15. Dashboards must be simplified.
16. Dashboards must prioritize urgent work and primary actions.
17. Dashboard metrics must use real authoritative data.
18. Fake metrics and decorative trends are prohibited.
19. Every clickable metric must open a real filtered destination.
20. Every displayed actionable relationship must have a real route or contextual action.
21. Leads, messages, notes, follow-ups, and activity remain unified.
22. Property-specific Leads must be directly accessible.
23. Project-specific Leads must be directly accessible.
24. Unit-specific Lead context must remain visible.
25. Notifications must open exact related destinations.
26. Billing alerts must open exact billing records.
27. List, filter, sort, tab, pagination, and scroll state must be preserved where useful.
28. Browser Back must be predictable.
29. Complex tasks must use dedicated pages rather than cramped popups.
30. Mobile and tablet layouts must be intentionally designed.
31. Bottom navigation must never cover content.
32. Sticky and fixed controls must be keyboard- and safe-area-aware.
33. Text must never clip or overlap.
34. Private dashboard data must never enter public cache.
35. RLS and server authorization are both mandatory.
36. Wrong-role and wrong-user direct URL access must be tested.
37. Provider states must remain honest.
38. Critical dashboard sections must support partial failure.
39. Accessibility is mandatory.
40. Dashboard performance must be measured.
41. Live-browser verification is required before PASS.
42. `PROJECT_STATE.md` and `FEATURE_REGISTRY.md` must be updated after implementation and verification.
43. The development server must remain running after verification when safe.

---

# 206. Implementation Handoff

The next document must define the complete Admin and Super Admin operating system, including:

* internal application shell
* Admin and Super Admin permissions
* internal user management
* deeply connected User detail
* Property management
* Project management
* Unit management
* Lead management
* Requirement management
* promotion management
* report management
* support-ticket management
* bug management
* billing
* subscriptions
* payments
* invoices
* provider management
* moderation
* approval
* rejection
* changes required
* reopen
* recovery
* soft-delete restoration
* audit
* reason-required actions
* before-and-after differences
* bulk actions
* exports
* security events
* sessions and devices
* system settings
* feature flags
* maintenance mode
* responsive Admin UX
* mobile Admin
* tablet Admin
* performance
* security
* QA
* production verification

---

