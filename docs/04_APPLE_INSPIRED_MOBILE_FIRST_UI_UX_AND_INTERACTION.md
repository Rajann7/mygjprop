# `docs/04_APPLE_INSPIRED_MOBILE_FIRST_UI_UX_AND_INTERACTION.md`

# My Gujarat Property — Original Apple-Inspired Mobile-First UI, UX, Navigation, Interaction, Responsive Design, Accessibility, and Complete SaaS Audit Authority

This document defines the complete visual, interaction, navigation, responsive, accessibility, and user-flow authority for **My Gujarat Property**.

It is the primary authority for:

* original Apple-inspired product design
* mobile-first design decisions
* tablet, desktop, and wide-screen adaptation
* information architecture
* route-specific application shells
* headers
* navigation
* role-based bottom navigation
* cards
* lists
* forms
* tables
* dashboards
* Admin and Super Admin interfaces
* deep clickable entity relationships
* page, modal, drawer, sheet, popover, and inline interaction selection
* Back, Close, Cancel, and browser Back behavior
* state preservation
* search interaction
* notification interaction
* loading, empty, error, success, disabled, and recovery states
* keyboard and focus behavior
* motion
* accessibility
* content hierarchy
* alignment
* fixed and sticky positioning
* text wrapping
* complete SaaS UX audit
* live responsive verification

Claude must read this document before implementing, redesigning, auditing, or verifying any user-facing screen.

---

# 1. Product Experience Goal

My Gujarat Property must feel like a complete, premium, calm, secure, and deeply connected real-estate software product.

The experience must be:

* mobile-first
* clear
* original
* fast
* trustworthy
* accessible
* responsive
* touch-friendly
* context-aware
* consistent
* recoverable
* deeply navigable
* production-ready

The product must not feel like:

* a generic dashboard template
* a collection of unrelated screens
* a desktop product compressed into mobile
* a mobile layout created only by stacking desktop sections
* a set of decorative cards with no real destinations
* a group of popups without navigation logic
* a real-estate theme with fake data
* an Admin panel that only shows shallow summaries
* an interface where every action opens the same type of modal
* an application where users lose filters, scroll, or context
* an interface with clipped text, unstable alignment, or covered content

Every visual decision must support a real user task.

---

# 2. Design Authority

The final design must be newly created for My Gujarat Property.

The design must not depend on any previously completed visual layout as the final authority.

The visual language may be inspired by premium qualities commonly associated with Apple-style product design:

* strong clarity
* minimal visual noise
* restrained color
* precise spacing
* excellent typography
* calm hierarchy
* content-first layouts
* subtle motion
* clear touch behavior
* polished transitions
* predictable controls
* high perceived quality

The final product must remain an original Indian real-estate marketplace.

Do not copy:

* Apple pages
* Apple application screens
* Apple branding
* Apple proprietary icons
* Apple layout compositions
* Apple images
* another real-estate platform’s exact design
* another website’s exact component appearance

Behavioral references may be studied, but the final interface must be original.

---

# 3. Experience Priorities

Design decisions must follow this priority:

1. Task completion
2. Mobile usability
3. User orientation
4. Security and trust
5. Clear navigation
6. Readability
7. Accessibility
8. Error prevention
9. Recovery
10. Performance
11. Visual polish
12. Motion

A visually attractive design that creates confusion is a failure.

A compact design that hides important information is a failure.

A highly animated design that slows users is a failure.

---

# 4. Target Users and Usage Context

Users may access the product:

* on low- to mid-range Android phones
* on modern mobile devices
* through unstable mobile networks
* with one hand
* outdoors
* with limited real-estate knowledge
* while comparing multiple properties
* while managing business activity
* while receiving calls or interruptions
* through mobile browsers
* through tablets
* through desktop business environments

The interface must account for:

* touch input
* mobile keyboards
* interrupted sessions
* network delays
* incomplete data
* long Gujarati and English location names
* Indian currency formatting
* multiple status labels
* detailed real-estate specifications
* large media
* role-based workflows
* Admin data density

---

# 5. Mobile-First Authority

Mobile design is the primary design authority.

Implementation must begin with:

* 320px
* 360px
* 390px
* 430px

Only after mobile behavior is stable should the system be intentionally adapted for:

* 768px
* 1024px
* 1366px
* 1440px
* wide displays

Mobile-first means:

* primary actions are reachable
* content order is intentional
* data density is reduced appropriately
* filters use an appropriate mobile container
* tables transform into usable patterns
* navigation is thumb-friendly
* mobile keyboard behavior is tested
* safe areas are respected
* bottom navigation does not cover content
* screen transitions preserve context
* dialogs become full-screen sheets when necessary

Mobile-first does not mean:

* hiding important functionality
* removing critical Admin controls
* using tiny text
* converting every table to an unstructured card
* creating excessive scrolling without hierarchy
* opening every task in a new page

---

# 6. Required Responsive Verification Matrix

Every relevant interface must be checked at:

|  Width | Category                       | Primary concerns                                  |
| -----: | ------------------------------ | ------------------------------------------------- |
|  320px | Small mobile                   | Wrapping, touch size, keyboard, action visibility |
|  360px | Common Android mobile          | Primary mobile authority                          |
|  390px | Modern mobile                  | Comfortable mobile spacing                        |
|  430px | Large mobile                   | Wider mobile hierarchy                            |
|  768px | Tablet portrait                | Navigation and panel adaptation                   |
| 1024px | Tablet landscape/small desktop | Density and shell transition                      |
| 1366px | Common desktop                 | Main desktop layout                               |
| 1440px | Large desktop                  | Container and spacing quality                     |
|   Wide | Wide display                   | Maximum width and whitespace control              |

Every tested screen must verify:

* no horizontal overflow
* no clipped text
* no covered content
* no broken navigation
* no hidden action
* no unusable table
* no modal outside viewport
* no keyboard obstruction
* no bottom-navigation obstruction
* no sticky-header obstruction
* no unsafe fixed positioning
* no inaccessible control
* no unexpected layout shift

---

# 7. Original Design Research Process

Before creating or significantly changing a major UX area, Claude should:

1. Understand the user role.
2. Understand the real task.
3. Identify entry points.
4. Identify required data.
5. Identify success and failure outcomes.
6. Study current high-quality public products for behavioral patterns where useful.
7. Compare mobile, tablet, and desktop behavior.
8. Use verified GitHub UX skills where compatible.
9. Create an original information hierarchy.
10. Implement and test the result.

Research may examine:

* Indian real-estate search behavior
* marketplace filters
* listing-card hierarchy
* project presentation
* mobile navigation
* dashboard drill-down
* Admin management patterns
* accessibility patterns
* account and billing patterns

Research must not result in visual copying.

---

# 8. GitHub Skill Integration

The following skills may assist with this document’s implementation:

* UI/UX Agent Skill System
* Interaction Design Skills
* UI/UX Pro Max Skill
* Responsive Craft
* Storymap Skill
* LottieFiles Motion Design Skill
* Shadcn Admin Skill
* BMAD Method
* GitHub Spec Kit

Before use, Claude must confirm:

* installation
* compatibility
* license
* security
* maintenance
* project-stack compatibility
* prompt conflict
* capability duplication
* smoke-test result

Project rules override every skill.

## 8.1 Skill usage by task

### Information architecture

Use compatible:

* Storymap Skill
* BMAD Method
* UI/UX Agent Skill System

### Interaction behavior

Use compatible:

* Interaction Design Skills
* UI/UX Agent Skill System

### Visual hierarchy

Use compatible:

* UI/UX Pro Max Skill

### Responsive behavior

Use compatible:

* Responsive Craft

### Admin interface

Use compatible:

* Shadcn Admin Skill
* Interaction Design Skills
* UI/UX Pro Max Skill

### Motion

Use compatible:

* LottieFiles Motion Design Skill

Skills must assist implementation, not produce conflicting independent design systems.

---

# 9. Information Architecture Principles

Information architecture must be role-aware and task-based.

Each module must answer:

* What is this area?
* Why is the user here?
* What can they do?
* What information matters first?
* What is the next likely action?
* What related information is available?
* How do they return?
* What happens on mobile?

The product must not organize features only according to database tables.

User navigation should reflect tasks such as:

* Find Property
* View Project
* Post Property
* Manage Properties
* Manage Projects
* Manage Units
* View Leads
* Follow Up
* Review Moderation
* Manage Billing
* Resolve Report
* Restore Record

---

# 10. Application Shell Types

The product must use different shells for different contexts.

Required shell categories:

1. Public Homepage Shell
2. Public Search Shell
3. Public Detail Shell
4. Authentication Shell
5. Owner Application Shell
6. Broker Application Shell
7. Builder Application Shell
8. Focused Task Shell
9. Admin Application Shell
10. Error and Recovery Shell

The same global header, navigation, and footer must not be forced onto every route.

---

# 11. Public Homepage Shell

The homepage shell may contain:

* brand
* homepage-only city selector
* search entry
* Login or account action
* notification preview for authenticated users where appropriate
* primary public navigation
* homepage content
* public footer

The homepage shell must prioritize:

* discovery
* search
* current city
* trust
* approved promoted content
* approved Properties
* approved Projects

The homepage must not visually resemble an authenticated dashboard.

---

# 12. Public Search Shell

The search shell must include:

* meaningful Back behavior
* search query
* filter access
* sort access
* result context
* list or approved view-mode control
* loading state
* result count only when real and useful

The homepage city selector must not appear in the search header.

Selected location must be represented through:

* query
* filter chip
* title
* breadcrumb
* search field

---

# 13. Public Detail Shell

Used for:

* Property detail
* Project detail
* public profile
* SEO landing detail where relevant

It should include:

* contextual Back
* compact brand or navigation where needed
* approved save/share/report actions
* media
* content hierarchy
* Direct Inquiry
* related content
* public footer where appropriate

On mobile, the primary action may use a sticky action region only when it does not cover content.

---

# 14. Authentication Shell

The authentication shell must:

* preserve homepage or originating context
* use an accessible modal on suitable large screens
* use a full-screen mobile experience or sheet on small screens
* provide Back or Close
* manage focus
* prevent background interaction
* support keyboard
* show loading and error states
* preserve intended action

The authentication shell must not display unnecessary application navigation.

---

# 15. Role Application Shells

Owner, Broker, and Builder application shells must:

* use role-specific navigation
* show role-appropriate page titles
* show notifications
* show profile access
* support mobile bottom navigation
* support tablet adaptation
* support desktop navigation
* avoid public marketing clutter
* preserve active module state
* provide contextual actions

Each role shell should feel part of the same product while prioritizing different work.

---

# 16. Focused Task Shell

Use for:

* Post Property
* Edit Property
* Post Project
* Edit Project
* Manage Project Units
* Post Requirement
* Direct Inquiry
* Checkout
* moderation review
* complex Admin editing
* recovery workflows

The focused task shell may include:

* Back or Close
* task title
* step indicator
* save status
* draft status
* primary action
* secondary action
* optional help

It should suppress distracting global navigation when necessary.

---

# 17. Admin Application Shell

The Admin shell must support:

* responsive internal navigation
* module title
* global search where useful
* contextual filters
* notifications
* user menu
* permission-aware modules
* breadcrumbs or parent context
* deep entity navigation
* stable content width
* dense but readable data

The Admin shell must remain usable on mobile and tablet.

It must not be designed only for wide desktop screens.

---

# 18. Header System

Headers must be context-specific.

## 18.1 Header anatomy

A header may contain:

* Back or menu control
* title
* subtitle or context
* brand
* search
* city selector only on homepage
* contextual actions
* notifications
* profile access
* save state
* progress

Not every header should contain every item.

## 18.2 Header height

Header height must be based on content and device.

Avoid:

* excessively tall mobile headers
* cramped one-line desktop headers
* fixed height that clips wrapped titles
* headers that cover anchored content

## 18.3 Long title behavior

Long Property, Project, location, or user names must:

* wrap safely when needed
* truncate only when context remains available
* provide full text through accessible detail where necessary
* never overlap actions

---

# 19. Mobile Header Types

## 19.1 Standard mobile page header

Contains:

* Back or menu
* page title
* one or two contextual actions

## 19.2 Search mobile header

Contains:

* Back
* search field
* optional filter action

## 19.3 Detail mobile header

Contains:

* Back
* optional save/share menu
* optional title after scroll

## 19.4 Focused task mobile header

Contains:

* Close or Back
* task title
* save state or progress
* optional secondary action

## 19.5 Admin mobile header

Contains:

* navigation trigger
* module title
* global search or overflow action where required

---

# 20. Desktop Header Types

Desktop headers should use available width without becoming overloaded.

Actions should be grouped:

* primary
* secondary
* overflow

Avoid more than one visually dominant primary action.

Use breadcrumbs only when they improve orientation.

Do not use breadcrumbs as a replacement for correct Back behavior.

---

# 21. Role-Based Bottom Navigation

Mobile and tablet must use role-based bottom navigation.

The final exact route names must match implementation, but the primary mapping should follow these principles.

## 21.1 Owner bottom navigation

Recommended primary items:

1. Dashboard
2. Properties
3. Leads
4. Post
5. Profile

## 21.2 Broker bottom navigation

Recommended primary items:

1. Dashboard
2. Listings
3. Leads
4. Requirements
5. Profile

## 21.3 Builder bottom navigation

Recommended primary items:

1. Dashboard
2. Projects
3. Leads
4. Promotions or Units based on final task priority
5. Profile

Project Units must remain inside Project context even when a summary destination exists.

## 21.4 Guest mobile navigation

A limited public bottom navigation may be used where approved:

1. Home
2. Search
3. Post
4. Pricing
5. Login or Account

It must not compete with page-level actions.

## 21.5 Bottom-navigation rules

Bottom navigation must:

* show active state
* use labels
* use accessible icons
* respect safe area
* have sufficiently large targets
* avoid covering page content
* avoid covering sticky actions
* hide or adapt during focused tasks
* show real badges only
* maintain stable order
* not reset useful state unnecessarily

---

# 22. Desktop Navigation

Desktop role applications may use:

* side navigation
* compact side rail
* top application navigation
* hybrid navigation

The final choice must support:

* role task priority
* deep navigation
* active state
* collapsed state
* accessible labels
* keyboard navigation
* stable content width

Avoid using both a full sidebar and overloaded top navigation without purpose.

---

# 23. Tablet Navigation

Tablet design must be intentional.

Possible patterns:

* compact side rail in landscape
* bottom navigation in portrait
* collapsible navigation drawer
* split list/detail layout
* contextual side panel

The tablet transition must not create:

* duplicate navigation
* covered content
* narrow desktop tables
* excessive empty space
* mobile-only sheets that waste available width

---

# 24. Navigation State

Navigation must visually show:

* active module
* active submodule
* selected entity where relevant
* unread badges where real
* restricted items where useful
* disabled provider-backed items where useful

A selected item must remain visually distinct without relying only on color.

---

# 25. Global Layout Grid

Use a shared layout system.

Required principles:

* consistent page gutters
* consistent maximum widths
* aligned page titles
* aligned filters
* aligned cards
* predictable section spacing
* stable content columns
* responsive transitions

Recommended conceptual sizes:

* mobile page padding: compact but comfortable
* tablet padding: moderate
* desktop content container: constrained
* wide-screen content: maximum width with centered layout

Exact values belong in design tokens.

---

# 26. Page Width Categories

Use different width categories.

## 26.1 Narrow

For:

* login
* profile forms
* billing forms
* confirmation tasks

## 26.2 Medium

For:

* detail pages
* posting flows
* settings
* support forms

## 26.3 Wide

For:

* search results
* dashboards
* Lead workspace
* Admin lists

## 26.4 Full application width

For:

* Admin split views
* complex tables
* analytics where real
* project inventory management

Avoid one global maximum width for every screen.

---

# 27. Design Tokens

The design system must use reusable tokens.

Token categories:

* colors
* typography
* spacing
* radii
* borders
* shadows
* sizes
* layout
* motion
* z-index
* safe-area offsets
* focus rings
* status styles

Do not hard-code arbitrary values across screens.

---

# 28. Color System

The color system must be restrained and accessible.

It should include:

* primary brand
* neutral background
* elevated surface
* secondary surface
* primary text
* secondary text
* muted text
* border
* focus
* success
* warning
* error
* information
* pending
* approved
* rejected
* paused
* disabled

Status must not depend only on color.

Use:

* text
* icon
* shape
* label

with color.

---

# 29. Surface System

Surfaces may include:

* page background
* primary card
* elevated panel
* inset section
* modal
* drawer
* popover
* input
* selected item
* disabled region

Avoid excessive card nesting.

Do not place every section inside a bordered card.

Use whitespace and hierarchy before adding containers.

---

# 30. Typography

Typography must support:

* clear hierarchy
* Indian names
* Gujarat location names
* currency
* long Property titles
* Admin data
* mobile readability

Required text categories:

* display
* page title
* section title
* card title
* body
* supporting text
* label
* caption
* metadata
* status
* numeric metric

Typography must:

* use readable line height
* avoid tiny supporting text
* avoid low-contrast gray
* support browser zoom
* wrap safely
* not use all caps for long labels

---

# 31. Currency and Numeric Typography

Indian currency should use:

```text
₹12,50,000
₹1.25 Cr
₹35,000/month
```

Formatting must be consistent.

Do not mix:

* raw paise
* inconsistent lakh/crore abbreviations
* unformatted long numbers
* ambiguous monthly and total pricing

Price should remain visually prominent without overwhelming all other information.

---

# 32. Spacing System

Spacing must follow a consistent scale.

Use spacing to communicate:

* grouping
* hierarchy
* section separation
* action relationship
* form structure

Avoid:

* random margins
* uneven card padding
* large empty gaps on desktop
* cramped mobile controls
* inconsistent list-row height

---

# 33. Border Radius

Use a restrained radius system.

Different levels may include:

* small control radius
* medium card radius
* large sheet/modal radius
* pill radius for chips

Do not make every element a pill.

Do not use excessive rounded containers that reduce information density.

---

# 34. Shadows and Elevation

Use subtle elevation.

Suitable for:

* modal
* drawer
* floating action
* elevated card
* sticky control

Avoid:

* heavy shadows
* multiple competing shadow styles
* shadows on every card
* elevation without functional meaning

---

# 35. Iconography

Icons must:

* have consistent stroke or fill style
* support labels
* have accessible names
* be understandable
* align with text
* use consistent sizes

Icon-only buttons require:

* accessible name
* tooltip where appropriate
* sufficiently large touch target
* visible focus

Do not use an X icon for delete.

---

# 36. Button System

Button variants may include:

* primary
* secondary
* tertiary
* text
* destructive
* icon
* loading
* disabled

Rules:

* one dominant primary action per focused area
* destructive action must not look like normal primary
* loading buttons prevent duplicate action
* disabled actions must have a reason where useful
* button labels must be specific
* mobile full-width buttons should be used only when appropriate

Prefer:

* Send Inquiry
* Save Changes
* Approve Property
* Pause Project
* Restore User

Avoid vague labels such as:

* Submit
* Done
* Proceed

when a more specific label is possible.

---

# 37. Link System

Links are used for navigation.

Buttons are used for actions.

Do not style a destructive mutation as a normal text link.

Links must:

* show focus
* have sufficient contrast
* remain identifiable
* preserve expected browser behavior

New-tab behavior should be intentional.

Do not force every detail into a new tab.

Use a new tab primarily when:

* users need to compare multiple public details on desktop
* opening an external legal/provider destination
* preserving a long Admin task benefits from it

On mobile, same-tab navigation is usually preferred.

---

# 38. Card System

Cards must represent a meaningful entity or grouped information.

Card types may include:

* Property card
* Project card
* Unit card
* Lead card
* Requirement card
* Promotion card
* Dashboard summary card
* Admin entity card
* Notification card
* Billing card
* Support ticket card

Each card must define:

* clickable area
* primary destination
* secondary actions
* status
* loading skeleton
* empty or unavailable behavior
* mobile and desktop layout

---

# 39. Property Card

A Property card may include:

* image
* title
* price
* purpose
* location
* key facts
* status or trust label
* save action
* Direct Inquiry
* poster summary where appropriate

Rules:

* title must not clip
* image aspect ratio must be stable
* price must be readable
* location must wrap or truncate safely
* actions must not overlap
* card click must open Property detail
* save must not trigger card navigation
* Direct Inquiry must preserve Property context

---

# 40. Project Card

A Project card may include:

* project image
* name
* Builder
* location
* price range
* configuration summary
* construction or possession state
* verification or compliance label
* save
* Direct Inquiry

The card must open Project detail.

Project Units must not be represented as unrelated Properties unless explicitly supported by the final marketplace model.

---

# 41. Lead Card or Row

Lead list items may include:

* user name
* source entity
* status
* unread state
* latest message
* last activity
* next follow-up
* priority
* timestamp

Clicking must open Lead detail.

Secondary actions may include:

* change status
* add follow-up
* archive

Secondary actions must not block the primary detail destination.

---

# 42. Dashboard Metric Cards

Metric cards may show:

* count
* label
* trend only when based on real comparison
* supporting status
* destination

A metric card is clickable only when a meaningful filtered view exists.

Examples:

* Active Properties → Properties filtered to Active
* New Leads → Leads filtered to New
* Pending Projects → Projects filtered to Pending
* Failed Payments → Admin Billing filtered to Failed

Decorative metrics are prohibited.

---

# 43. List Rows

Rows must:

* have consistent height
* align labels
* support hover only as enhancement
* support keyboard focus
* define primary click area
* prevent nested-action conflicts
* transform cleanly on mobile

On mobile, a row may become a structured card.

Do not hide important row data only in hover.

---

# 44. Tables

Tables are suitable for:

* Admin lists
* billing
* inventory
* moderation queues
* audit logs
* provider status

Tables must support:

* column hierarchy
* sorting where useful
* filtering
* pagination
* loading skeleton
* empty state
* row destination
* selection where needed
* bulk actions where permitted
* accessible headers
* responsive adaptation

---

# 45. Mobile Table Adaptation

Do not compress desktop tables until columns become unreadable.

Choose one of:

* card transformation
* priority columns with expandable details
* horizontal scroll with sticky identifying column
* split list/detail view
* full-screen row detail

The choice depends on task.

Admin tables on mobile should usually become:

* structured cards
* expandable rows
* full-screen detail

---

# 46. Form System

Forms must include:

* visible label
* optional helper text
* required indication
* current value
* validation
* field error
* form error
* loading state
* save state
* success state
* cancel
* unsaved-change handling
* accessibility
* mobile keyboard behavior

Client validation improves UX.

Server validation remains authoritative.

---

# 47. Form Field Types

Shared fields may include:

* text
* textarea
* mobile number
* email
* OTP
* currency
* numeric
* select
* combobox
* searchable location selector
* radio cards
* checkbox
* date
* time
* file upload
* image upload
* multi-select
* status selector
* rich text only where approved

Each field must define mobile behavior.

---

# 48. Label and Error Alignment

Labels and fields must remain aligned.

Errors must:

* appear near the related field
* not shift the entire page unpredictably
* not overlap other fields
* use accessible association
* explain how to fix the problem

Long errors must wrap.

---

# 49. Long Forms

Long forms such as Property and Project posting must use:

* logical steps
* progress
* server-backed draft
* save and continue
* section validation
* review step
* clear required fields
* resume capability
* mobile sticky action where safe
* desktop summary where useful

Do not place a very long posting flow inside one popup.

---

# 50. Multi-Step Flow Rules

Each step must define:

* title
* purpose
* required fields
* optional fields
* validation
* Back behavior
* save behavior
* next behavior
* error behavior
* resume behavior

Step indicators must represent real progress.

Users must be able to return without losing saved data.

---

# 51. Unsaved Changes

When a user tries to leave a dirty form, provide appropriate options:

* Save Draft
* Discard Changes
* Continue Editing

Do not show warnings when nothing changed.

Do not lose complex form data silently.

---

# 52. Search UX

Search must feel immediate but must not open empty results on simple focus.

Expected homepage flow:

```text
Tap Search
→ Search input activates
→ Suggestions appear
→ User types or selects meaningful context
→ Results open
```

Search must support:

* typing
* clear
* keyboard navigation
* suggestions
* recent safe searches
* city and locality results
* Property and Project results
* category suggestions
* loading
* no results
* retry

---

# 53. Search Suggestions

Suggestions should be grouped.

Possible groups:

* Cities
* Localities
* Properties
* Projects
* Builders
* Property Types
* Recent Searches

Each result must have:

* clear type
* title
* supporting context
* destination or search behavior

Do not show duplicate ambiguous items without location context.

---

# 54. Search Results Layout

Mobile:

* compact search header
* filter button
* sort control
* selected filter chips
* result cards
* bottom sheet filters

Desktop:

* search header
* filter side panel or horizontal filter region
* result list/grid
* optional secondary detail behavior
* stable result count

---

# 55. Filter UX

Filters must:

* use clear labels
* show selected state
* support reset
* support apply on mobile
* update results predictably
* preserve selections
* avoid excessive nested dropdowns
* show selected chips
* support loading state

Mobile filter sheet must:

* provide Close
* provide Reset
* provide Apply
* show result count only when real
* preserve unsubmitted selections correctly
* not hide primary action under keyboard

---

# 56. List-Detail-Return Behavior

When a user opens an item from a list, the system should preserve:

* query
* filters
* sorting
* selected tab
* pagination
* scroll position
* list display mode

When the user returns, they should continue from the previous context.

This applies to:

* search results
* Properties
* Projects
* Leads
* Requirements
* Admin users
* moderation queues
* reports
* billing lists
* bugs

---

# 57. Property Detail UX

Property detail must prioritize:

1. media
2. price
3. title
4. location
5. key facts
6. Direct Inquiry
7. description
8. specifications
9. amenities
10. poster profile
11. status and disclaimers
12. related Properties

Mobile may use a sticky Direct Inquiry action.

The sticky action must:

* not cover content
* respect safe area
* not conflict with bottom navigation
* hide or adapt during keyboard use
* remain accessible

---

# 58. Project Detail UX

Project detail must prioritize:

1. media
2. project name
3. Builder
4. location
5. price range
6. configuration
7. construction/possession status
8. Direct Inquiry
9. Units
10. amenities
11. specifications
12. compliance information
13. brochure and approved media
14. related Projects

Unit selection must preserve Project context.

---

# 59. Profile UX

Private profile areas should separate:

* personal information
* business profile
* public profile
* verification
* notifications
* billing
* security
* privacy
* support

Do not place every setting on one long page.

On mobile:

* use settings lists
* open focused detail screens
* preserve Back behavior

On desktop:

* use side navigation or tabs only when they remain manageable

---

# 60. Dashboard UX

Dashboards must be simple, role-specific, and action-oriented.

A dashboard should answer:

* What needs attention?
* What changed?
* What should I do next?
* Where are my core records?
* Are there any blocked actions?

Dashboard sections may include:

* summary
* urgent tasks
* recent activity
* moderation updates
* lead follow-ups
* billing alerts
* primary shortcuts

Avoid:

* excessive charts
* fake trends
* duplicated module lists
* dense tables on mobile
* visually equal priority for everything

---

# 61. Owner Dashboard UX

Prioritize:

* Properties
* new Leads
* follow-ups
* moderation updates
* usage
* notification
* Post Property

Example drill-down:

```text
New Leads
→ Leads filtered to New
→ Lead
→ Property
→ Activity
```

---

# 62. Broker Dashboard UX

Prioritize:

* Listings
* Leads
* follow-ups
* Requirements
* moderation status
* usage
* billing
* Post Property

The Broker dashboard must not depend on subordinate-agent controls.

---

# 63. Builder Dashboard UX

Prioritize:

* Projects
* Units
* inventory status
* Leads
* promotion status
* moderation
* billing
* Create Project

Project Units must remain connected to their Project.

---

# 64. Unified Leads Workspace UX

The Leads workspace should support:

* list
* filters
* search
* status
* unread
* follow-up
* source entity
* message preview
* detail
* activity

Mobile:

* list screen
* full-screen Lead detail
* tabs or segmented sections inside detail

Desktop:

* list/detail split view may be used
* selected Lead remains highlighted
* detail can open without losing list filters

---

# 65. Lead Detail UX

Lead detail may include:

* user summary
* source entity
* contact information according to permission
* inquiry message
* status
* follow-up
* messages
* notes
* activity
* report action
* related Property, Project, Unit, or Requirement

Every source relation must be clickable.

Admin users may have additional permission-controlled sections.

---

# 66. Admin UX Authority

Admin and Super Admin must be designed as a connected management product.

Admin must not only show:

* a user list
* a few summary fields
* isolated edit popups

Admin must support a deep data graph.

---

# 67. Admin User Detail Architecture

A User detail may include:

1. Overview
2. Profile
3. Account and Role
4. Verification
5. Properties
6. Projects
7. Units
8. Leads
9. Messages and Activity
10. Requirements
11. Reports
12. Support and Bugs
13. Billing
14. Subscriptions
15. Payments
16. Invoices
17. Notifications
18. Sessions and Devices
19. Security Events
20. Moderation History
21. Audit Trail
22. Recovery History

Sections must be:

* permission-aware
* lazy-loaded where needed
* paginated
* clickable
* responsive
* stateful
* deep-linked where appropriate

---

# 68. Admin Contextual Editing

Admin editing must use the correct container.

## Use inline editing for:

* small safe values
* low-risk labels
* simple status metadata where allowed

## Use modal for:

* short focused action
* confirmation
* reason input
* limited field update

## Use drawer for:

* contextual inspection
* moderate edit
* quick review while preserving list

## Use dedicated page for:

* complex profile editing
* Project moderation
* billing correction
* role change
* security action
* recovery
* provider configuration
* large forms

On mobile, drawers should often become full-screen pages or sheets.

---

# 69. Admin Deep Clickability

Required examples:

```text
Users
→ User
→ Properties
→ Property
→ Property Leads
→ Lead
→ Messages
→ Activity
```

```text
Users
→ User
→ Projects
→ Project
→ Units
→ Unit
→ Related Leads
```

```text
User
→ Billing
→ Subscription
→ Payment
→ Invoice
→ Audit
```

```text
Report
→ Reported Entity
→ User
→ Moderation History
→ Recovery
```

Every displayed relationship must have:

* destination
* permission
* loading state
* empty state
* Back behavior
* mobile behavior

---

# 70. Admin List UX

Admin lists must include only useful controls.

Possible controls:

* search
* status
* role
* date
* city
* assignment
* moderation state
* plan
* risk
* sort
* export where permitted

Filters should not consume excessive vertical space.

On mobile:

* use a filter sheet
* show selected chips
* convert rows to structured cards
* keep actions accessible

---

# 71. Admin Fixed and Sticky Positioning

Admin may use:

* sticky table headers
* sticky filter bar
* sticky action panel
* sticky detail tabs

Only when:

* content remains visible
* keyboard does not block action
* mobile fallback exists
* nested scroll is avoided
* z-index is controlled
* screen reader order remains logical

Fixed positioning must not be used as a shortcut for poor layout.

---

# 72. Admin Tabs

Tabs are suitable when sections are peers.

Do not create too many horizontal tabs.

For many sections, use:

* side navigation
* grouped sections
* overflow menu
* mobile section list

Every tab must:

* have real content
* preserve active state
* support direct link where appropriate
* show loading
* show empty state
* not reset unnecessarily

---

# 73. Modal Rules

A modal is temporary.

A modal must include:

* title
* clear purpose
* Close
* focus trap
* Escape behavior
* primary action
* secondary action
* loading state
* error state
* return-focus behavior

Do not use a modal for:

* complex multi-section Admin editing
* long Property posting
* full Project moderation
* large billing correction
* detailed user graph
* complex recovery

---

# 74. Drawer Rules

A drawer may preserve list context.

Suitable for:

* Lead preview
* User quick view
* Property moderation preview
* notification detail
* contextual editing

A drawer must:

* provide Close
* support keyboard
* trap focus when modal
* not create hidden nested scroll
* become appropriate mobile experience
* provide a link to full detail when content grows

---

# 75. Bottom Sheet Rules

Bottom sheets are suitable for mobile:

* filters
* sort
* lightweight selection
* quick actions
* short forms
* confirmation

Bottom sheets must:

* respect safe area
* have visible title
* have Close
* support keyboard
* not hide actions
* not become excessively tall without full-screen conversion
* use drag-to-close only as an additional behavior, not the sole behavior

---

# 76. Popover and Dropdown Rules

Use for lightweight context.

Suitable for:

* account menu
* action menu
* notification preview
* sort menu
* simple status selector

Popovers must:

* close on outside click
* close on Escape
* support keyboard
* remain within viewport
* not contain complex forms
* not disappear before an action can be completed

---

# 77. Inline Expansion Rules

Use inline expansion when:

* content belongs directly to a row
* quick details help without leaving the list
* expansion remains small

Do not use inline expansion for large nested workflows.

Expanded content must:

* preserve alignment
* support keyboard
* have Collapse
* not create confusing nested scroll

---

# 78. Back Behavior

Back returns to the previous meaningful context.

Back should preserve:

* list state
* filters
* query
* sort
* tab
* pagination
* scroll
* selected entity where useful

Back must not:

* always force dashboard
* clear useful state
* behave differently from browser Back without reason
* open a stale screen

---

# 79. Close Behavior

Close dismisses a temporary layer.

Examples:

* modal
* drawer
* sheet
* popover
* notification preview

Close must restore:

* background context
* prior focus
* prior scroll state

Close must not silently discard unsaved changes.

---

# 80. Cancel Behavior

Cancel stops the current operation.

Examples:

* cancel edit
* cancel checkout
* cancel role-change request draft
* cancel moderation action

Cancel may require confirmation when data changed.

Cancel is not the same as Back.

---

# 81. Browser Back Behavior

Browser Back must be explicitly tested.

It must not:

* create auth loops
* reopen completed OTP
* reveal private data after logout
* reset search without reason
* lose a long form without warning
* reopen dismissed overlays incorrectly
* navigate to invalid deleted content without recovery state

---

# 82. Refresh Behavior

Refreshing a route must:

* preserve valid URL state
* reload current authorized data
* maintain active tab where encoded
* show loading state
* handle session expiry
* handle deleted or unavailable entity
* avoid duplicate mutation

Temporary overlays do not need to survive refresh unless the route model requires it.

---

# 83. Deep Linking

Important detail screens should support stable URLs.

Suitable deep links:

* Property
* Project
* public profile
* Lead
* Admin user
* Admin Property
* Admin Project
* payment
* invoice
* report
* bug
* audit event
* recovery case

The server must validate permission before rendering.

---

# 84. Loading States

Loading states must match final layout.

Use:

* skeletons for content
* progress for action
* spinner only for small localized waits
* loading button for mutation
* optimistic update only when reversible

Avoid:

* full-page spinner for every request
* skeleton with different dimensions from loaded content
* indefinite loading without timeout or recovery
* duplicate submissions

---

# 85. Skeleton Rules

Skeletons must:

* preserve layout
* reflect actual content hierarchy
* avoid excessive animation
* support reduced motion
* not appear as fake data
* not shift when loaded

Property card skeleton should match:

* image
* price line
* title line
* location
* facts
* action area

---

# 86. Empty States

Different empty states are required.

## 86.1 First-use empty

Example:

```text
You have not posted any Properties yet.
```

Action:

```text
Post Property
```

## 86.2 Filtered empty

Example:

```text
No Properties match the selected filters.
```

Action:

```text
Clear Filters
```

## 86.3 Search no results

Show:

* query
* selected filters
* suggestions
* modify search

## 86.4 Permission empty

Do not show a generic empty list when access is denied.

## 86.5 Setup empty

Show Setup Required when a provider or configuration is missing.

---

# 87. Error States

Errors must explain:

* what failed
* what remained saved
* whether retry is available
* where to go
* whether support is required

Error categories:

* network
* server
* validation
* authentication
* permission
* provider
* conflict
* deleted entity
* unavailable state
* rate limit
* setup required

---

# 88. Success States

Success should:

* confirm the real result
* update visible state
* navigate appropriately
* create notification where relevant
* avoid duplicate action
* allow the next logical task

Examples:

* Property saved as draft
* Inquiry sent
* Project submitted for review
* Lead status updated
* User restored
* Payment verified

---

# 89. Disabled States

Disabled actions must not be mysterious.

Where useful, explain:

* missing permission
* incomplete profile
* plan limit
* pending moderation
* provider setup
* invalid status
* processing state

Use tooltip, helper text, inline message, or status panel.

Do not rely only on a gray button.

---

# 90. Setup Required States

Provider-backed features may show:

* Setup Required
* Not Configured
* Test Mode
* Provider Unavailable
* Retry
* Contact Admin

Never display:

* fake sent state
* fake paid state
* fake uploaded state
* fake active status

---

# 91. Notifications UX

The notification system may use:

* unread badge
* preview popover
* notification center
* grouped history
* contextual destination

The preview should show a limited number of useful recent items.

Each notification must include:

* category
* title
* supporting text
* timestamp
* read state
* destination

---

# 92. Notification Click Behavior

Clicking a notification must open the exact related context.

Examples:

* Lead notification → Lead detail
* moderation notification → specific Property moderation state
* payment notification → payment or invoice
* support notification → ticket
* security notification → security settings

If the destination is no longer available:

* show a recovery state
* explain why
* provide a safe destination

---

# 93. Toasts

Toasts are suitable for short confirmation.

Examples:

* Saved
* Copied
* Marked as read
* Filter cleared

Toasts must not be the only place where a critical result appears.

Do not use toasts for:

* complex errors
* important moderation reasons
* payment failure details
* session expiry
* data-loss warnings

---

# 94. Banners and Alerts

Use inline banners for:

* account restriction
* provider Setup Required
* billing issue
* moderation changes required
* service degradation
* security action required

Banners must:

* have clear severity
* explain action
* be dismissible only when appropriate
* not cover navigation
* not stack excessively

---

# 95. Status Chips and Badges

Statuses may include:

* Draft
* Pending Review
* Approved
* Rejected
* Changes Required
* Published
* Paused
* Closed
* Restored
* Setup Required
* Failed

Chips must:

* use readable text
* use accessible color
* not be too small
* wrap or truncate safely
* remain consistent across modules

---

# 96. Motion Authority

Motion must be purposeful.

Suitable uses:

* modal entrance
* drawer transition
* sheet transition
* list update
* success feedback
* loading
* status change
* context transition
* carousel swipe

Motion must not:

* delay actions
* distract
* create nausea
* hide data
* cause layout shift
* ignore reduced motion
* consume excessive resources

---

# 97. Motion Durations

Use a restrained duration system.

Conceptual categories:

* immediate feedback
* quick transition
* standard panel transition
* deliberate major transition

Do not use long decorative animations for routine tasks.

---

# 98. Reduced Motion

When reduced motion is enabled:

* disable non-essential movement
* replace large transitions with fades or instant updates
* avoid auto-rotating carousel
* reduce parallax
* reduce celebratory animation

Functionality must remain complete.

---

# 99. Carousel Interaction

The Builder promotion carousel must:

* support swipe
* support keyboard
* support visible controls where needed
* support pause
* avoid unreadably fast auto-rotation
* respect reduced motion
* open exact destination
* preserve image ratio
* avoid layout shift

If auto-rotation is used:

* allow manual control
* pause on interaction
* provide sufficient reading time
* stop when page is hidden where practical

---

# 100. Accessibility Authority

Accessibility is mandatory.

Required:

* semantic HTML
* keyboard navigation
* visible focus
* logical tab order
* accessible names
* real labels
* error association
* status announcements
* modal focus trap
* Escape behavior
* touch-target sizing
* contrast
* zoom support
* reduced motion
* non-color status meaning
* screen-reader-friendly dynamic updates

---

# 101. Keyboard Navigation

Test:

* Tab
* Shift+Tab
* Enter
* Space
* Escape
* arrow keys
* browser Back
* form submission
* menu navigation
* tab navigation
* dialog navigation
* list selection

No keyboard trap is allowed.

---

# 102. Focus Management

Focus must move intentionally.

Examples:

* opening modal → modal title or first field
* closing modal → trigger
* validation failure → first invalid field
* route navigation → page heading or main content
* opening drawer → drawer title
* closing drawer → selected row
* success → next logical control

---

# 103. Screen Reader Support

Dynamic messages should use appropriate announcements.

Examples:

* form error summary
* OTP sent
* result count updated
* filter applied
* Lead status changed
* file upload completed
* loading completed

Do not overuse live regions.

---

# 104. Color Contrast

All important text and controls must meet appropriate contrast.

Special attention:

* muted text
* status chips
* disabled controls
* placeholder text
* image overlays
* focus rings
* error text
* selected navigation

---

# 105. Touch Targets

Touch targets must be comfortably usable.

Small icons may have a larger invisible hit area.

Avoid placing multiple tiny actions too close together.

Mobile action menus may consolidate low-priority actions.

---

# 106. Text Clipping Prevention

The following must never clip:

* page title
* Property title
* Project name
* user name
* Gujarati location name
* status
* button label
* form label
* error message
* table header
* notification title
* billing description

Use:

* wrapping
* flexible layout
* `min-width: 0`
* correct flex behavior
* responsive type
* accessible truncation

Do not solve every issue with ellipsis.

---

# 107. Long Content Handling

Long content may include:

* Property descriptions
* Project descriptions
* legal text
* Admin notes
* Lead messages
* support messages
* audit values

Use:

* readable line length
* paragraph spacing
* expand/collapse where appropriate
* preformatted safe view for structured values
* copy action where useful
* no uncontrolled overflow

---

# 108. Fixed and Sticky Positioning

Fixed and sticky elements may include:

* mobile header
* bottom navigation
* sticky Direct Inquiry action
* Admin table header
* focused task action bar
* filter bar

Every fixed/sticky element must account for:

* safe area
* keyboard
* content padding
* viewport height
* nested scroll
* z-index
* accessibility
* mobile browser chrome

---

# 109. Z-Index System

Use a shared scale.

Conceptual order:

1. base content
2. sticky content
3. header
4. bottom navigation
5. dropdown
6. popover
7. drawer
8. modal
9. toast
10. critical system alert

Avoid arbitrary high values.

Test combined overlays.

---

# 110. Safe Areas

Mobile layout must use safe-area insets for:

* bottom navigation
* sticky action
* full-screen sheet
* mobile header
* media viewer

Do not add unnecessary extra padding on devices without safe-area requirements.

---

# 111. Mobile Keyboard

Test forms with the keyboard open.

Ensure:

* active field remains visible
* primary action remains reachable
* sheet does not break
* sticky footer adapts
* page can scroll
* OTP field stays visible
* no double viewport height issue
* no hidden validation error

---

# 112. Image and Media UX

Images must:

* preserve aspect ratio
* use stable dimensions
* load progressively
* provide fallback
* have meaningful alt text where applicable
* support gallery navigation
* avoid unexpected cropping
* avoid brand logos in listing images where policy disallows them
* remain optimized

---

# 113. Gallery UX

Property and Project galleries should support:

* primary image
* thumbnail or count
* full-screen viewer
* swipe
* keyboard
* Close
* current position
* error fallback
* no background scroll

On mobile, gallery interaction must not conflict with browser navigation.

---

# 114. File Upload UX

Uploads must show:

* accepted type
* processing state
* progress
* preview
* reorder
* remove
* retry
* failure
* moderation state where applicable

Do not show upload success until the server confirms the file.

---

# 115. Trust and Safety UX

Trust content should be clear and non-alarming.

Possible elements:

* verification state
* marketplace disclaimer
* reporting
* safe inquiry explanation
* billing security
* account-security notice

Do not use verification to imply guaranteed transaction safety.

---

# 116. Legal Content Placement

Legal notices must appear where decisions occur.

Examples:

* registration consent
* Direct Inquiry contact consent
* listing submission policy
* Project compliance
* payment terms
* promotion policy
* report declaration

Do not hide critical consent only inside footer links.

---

# 117. Content Writing

UI writing must be:

* clear
* concise
* specific
* respectful
* action-oriented
* suitable for Indian users

Avoid internal technical terms.

Prefer:

* We could not send the code.
* Your Property is under review.
* This action requires an active plan.
* No Leads match these filters.

Avoid:

* RPC error
* mutation failed
* invalid enum
* provider exception
* record not found in relation

---

# 118. Terminology Consistency

Use:

* Owner
* Broker
* Builder/Developer
* Property
* Project
* Unit
* Requirement
* Direct Inquiry
* Lead
* Message
* Note
* Follow-up
* Activity
* Notification
* Promotion

Do not rename the same module differently across roles without a clear reason.

---

# 119. Localization Readiness

The first primary interface language may be English, but the architecture should support future localization.

Requirements:

* avoid hard-coded text scattered across components
* support longer translated strings
* avoid fixed text widths
* keep date and currency formatting centralized
* support Unicode
* support Gujarati location names
* preserve accessible labels

Do not mix languages unexpectedly within one screen.

---

# 120. Date and Time

Date and time must use consistent formatting.

Show:

* local user-friendly date
* relative time only when useful
* exact time in detail or tooltip where needed
* timezone-sensitive billing and schedule information

Avoid ambiguous formats such as:

```text
02/03/26
```

Use clearer formats.

---

# 121. Real Data and Fake UI Prohibition

The UI must not show fake:

* metrics
* badges
* notifications
* unread counts
* views
* Leads
* payments
* verification
* provider health
* charts
* activity
* promotion results

Development data must be visibly and technically isolated.

---

# 122. True Interactivity Requirement

Every element that appears interactive must:

* navigate
* open a contextual layer
* perform a real action
* show an intentional disabled reason
* or be visually presented as non-interactive

Audit:

* cards
* rows
* badges
* icons
* tabs
* menu items
* metrics
* status labels
* relation links
* pagination
* filters
* breadcrumbs
* notifications

---

# 123. Dead-End Prevention

No screen may leave the user without:

* orientation
* Back
* next action
* safe destination
* recovery

Examples of dead ends:

* empty page after auth
* notification with invalid destination
* rejected Property without correction path
* deleted record without recovery state
* payment failure without retry
* permission denial without safe destination
* no-results page without filter reset

---

# 124. Complete SaaS UX Audit Scope

The global audit must inspect:

* repository routes
* layouts
* page components
* navigation
* headers
* footers
* cards
* tables
* forms
* modals
* drawers
* sheets
* popovers
* menus
* tabs
* filters
* search
* notifications
* dashboards
* profile
* settings
* Admin
* billing
* moderation
* recovery
* providers
* error pages
* mobile behavior
* accessibility
* browser Back
* refresh
* deep links
* loading
* empty
* error
* success
* permission
* setup states

The audit must result in implementation and fixes, not only a report.

---

# 125. Screen Inventory

Before the global audit, generate an inventory containing:

* route
* role
* purpose
* shell
* header
* navigation
* primary action
* secondary actions
* data source
* states
* parent route
* child route
* Back behavior
* mobile behavior
* Admin relation
* verification status

The inventory should be stored in the most appropriate existing documentation or registry structure without creating unnecessary files.

---

# 126. Navigation Behavior Matrix

For every major screen or experience, define:

```text
Screen:
Role:
Entry points:
Presentation type:
Shell:
Header:
Global navigation:
Primary action:
Secondary actions:
Back behavior:
Close behavior:
Cancel behavior:
Browser Back:
Refresh:
Success destination:
Failure behavior:
Permission behavior:
Mobile behavior:
Tablet behavior:
Desktop behavior:
State to preserve:
Loading state:
Empty state:
Error state:
Recovery:
```

This matrix is mandatory for complex flows.

---

# 127. Interaction Contract

Every important action should define:

```text
Action:
Actor:
Source screen:
Trigger:
Required permission:
Validation:
Confirmation:
Processing state:
Success result:
Failure result:
Audit:
Notification:
Cache invalidation:
Recovery:
```

This prevents incomplete actions.

---

# 128. End-to-End Journey Audit

Required journeys include:

* Guest homepage → Search → Property → Back to results
* Guest Property → Direct Inquiry → Register → Return → Submit
* Returning user → Login → intended destination
* Owner → Dashboard → Property → Leads → Lead → Activity
* Broker → Dashboard → Listing → Leads → Message
* Builder → Dashboard → Project → Unit → Lead
* Notification → exact related entity
* Property creation → Draft → Submit → Moderation
* Rejected Property → Correct → Resubmit
* Admin Users → User → Property → Lead → Report → Audit
* Admin rejected entity → Reopen → Approve
* Billing → Checkout → verified result
* Session expiry → Reauthenticate → continue
* Delete → Recovery → Restore
* Provider unavailable → honest Setup Required state
* Support report → Admin resolution

---

# 129. Global Alignment Audit

Inspect:

* page gutters
* title alignment
* filter alignment
* card padding
* table column alignment
* form label alignment
* button alignment
* icon alignment
* status alignment
* sticky action alignment
* bottom navigation spacing
* modal spacing
* drawer spacing
* empty-state centering

Fix shared causes globally.

---

# 130. Text Wrapping Audit

Inspect:

* long user names
* long Project names
* long Property titles
* long city/locality names
* long status labels
* long button labels
* long error messages
* long filter chips
* long Admin values
* long billing descriptions

Do not test only short seed data.

---

# 131. Mobile Interaction Audit

Inspect:

* thumb reach
* Back placement
* Close placement
* bottom navigation
* sticky actions
* keyboard
* filter sheet
* sort sheet
* full-screen detail
* cards
* tables
* media gallery
* OTP
* form steps
* deep links
* browser Back
* orientation change where relevant

---

# 132. Tablet Audit

Inspect:

* navigation choice
* split view
* card density
* table adaptation
* drawer width
* modal width
* empty space
* landscape and portrait behavior
* touch targets
* fixed positioning

---

# 133. Desktop Audit

Inspect:

* maximum width
* data density
* navigation
* hover enhancement
* keyboard
* list/detail split
* table usability
* deep drill-down
* whitespace
* new-tab comparison behavior where approved

---

# 134. Admin Audit

Inspect:

* every entity list
* every detail
* every relation
* every edit action
* every status
* every permission
* every sensitive action
* every reason field
* every audit link
* every recovery action
* mobile layout
* table adaptation
* fixed positioning
* lazy loading
* pagination
* error state

---

# 135. Accessibility Audit

Test:

* keyboard-only
* focus order
* focus visibility
* modal trap
* Escape
* labels
* error association
* screen-reader naming
* contrast
* zoom
* reduced motion
* touch targets
* dynamic announcements
* heading hierarchy

---

# 136. Console and Network Audit

For every tested flow:

* check console
* check failed requests
* check duplicate requests
* check unauthorized requests
* check hydration issues
* check provider errors
* check image failures
* check cache behavior
* check navigation errors

A visually correct screen with failing network behavior does not pass.

---

# 137. Performance UX

The experience must remain usable under delay.

Provide:

* skeletons
* incremental loading
* retry
* cached public content where safe
* image optimization
* pagination
* progressive detail sections

Avoid:

* blocking entire page for one secondary request
* loading every related Admin section initially
* huge client bundles
* unoptimized galleries
* repeated identical calls

---

# 138. Low-Network Behavior

On slow or unstable networks:

* preserve entered form data
* show processing
* prevent duplicate submission
* show retry
* distinguish pending from failed
* avoid fake success
* keep public cached content where safe

---

# 139. Design-System Component Governance

Shared components must have:

* documented purpose
* variants
* states
* accessibility behavior
* responsive behavior
* tests where critical

Do not create duplicate buttons, cards, or dialogs for every module.

Do not over-generalize one component until it becomes difficult to maintain.

---

# 140. Component Composition

Prefer composition.

Example Property card building blocks:

* Media
* Price
* Title
* Location
* Facts
* Status
* Actions

The same building blocks may support different layouts without one giant component with many unrelated flags.

---

# 141. ShadCN and Primitive Use

Accessible primitives may be used for:

* dialog
* drawer
* dropdown
* tabs
* tooltip
* select
* command palette
* toast

They must be visually adapted to the final design system.

Default component styling is not the final design.

---

# 142. Responsive Craft Use

Responsive Craft should be used, when verified, to:

* inspect breakpoints
* preview multiple widths
* identify overflow
* compare layout transitions
* verify mobile and tablet behavior

Its output must be reviewed against this document.

---

# 143. Interaction Design Skill Use

Interaction Design Skills should assist with:

* Back behavior
* overlay decisions
* state transitions
* keyboard behavior
* error recovery
* list-detail-return
* navigation matrix
* deep drill-down

The skill must not redefine approved product scope.

---

# 144. UI/UX Pro Max Use

UI/UX Pro Max may assist with:

* hierarchy
* typography
* spacing
* visual balance
* responsive composition
* component quality

It must not copy third-party visual systems.

---

# 145. Motion Design Skill Use

Motion skill output must be evaluated for:

* purpose
* performance
* accessibility
* reduced motion
* product fit

Decorative motion should be rejected when it does not improve understanding.

---

# 146. Shadcn Admin Skill Use

Shadcn Admin Skill may assist with:

* Admin shell
* tables
* filters
* responsive detail
* management patterns

The final Admin system must still support:

* deep graph
* reason-required mutations
* recovery
* audit
* mobile use
* contextual editing

---

# 147. Implementation Workflow

For a major UX phase:

1. Read authority files.
2. Inspect current repository.
3. Inventory affected routes.
4. Identify existing shared components.
5. Invoke required verified skills.
6. Define user journeys.
7. Define navigation matrix.
8. Define responsive behavior.
9. Define states.
10. Define accessibility behavior.
11. Implement shared foundation.
12. Implement screens.
13. Connect real data and actions.
14. Test automated checks.
15. Run live browser.
16. Test required widths.
17. Fix defects.
18. Update documentation and registry.

---

# 148. UX Refactoring Rule

When a defect is global, fix the shared cause.

Examples:

* text clipping across cards → fix shared card typography/layout
* modal overflow → fix shared modal primitive
* keyboard-covered actions → fix mobile task-shell primitive
* inconsistent Back behavior → fix navigation contract
* Admin table mobile failure → fix responsive data-list pattern

Do not apply repeated local patches when a shared solution exists.

---

# 149. Verification Requirements

A UX phase may pass only when applicable checks succeed:

* lint
* typecheck
* tests
* build
* real routes
* real data
* live browser
* all required widths
* keyboard
* focus
* screen states
* Back
* Close
* Cancel
* browser Back
* refresh
* deep links
* console
* network
* no clipping
* no overflow
* no covered content
* no dead actions
* no fake data
* documentation updated
* feature registry updated

---

# 150. Responsive Verification Recording

For each tested route, record:

```text
Route:
Role:
320px:
360px:
390px:
430px:
768px:
1024px:
1366px:
1440px:
Wide:
Keyboard:
Focus:
Text clipping:
Sticky/fixed overlap:
Console:
Network:
Result:
```

Do not mark PASS with untested widths when they are required.

---

# 151. Manual Browser Verification

Manual verification must:

1. Detect or start development server.
2. Record actual URL and port.
3. Open the changed route.
4. Use real navigation.
5. Test role access.
6. Test primary action.
7. Test secondary actions.
8. Test Back.
9. Test browser Back.
10. Test refresh.
11. Test loading.
12. Test empty.
13. Test error.
14. Test permission.
15. Test responsive widths.
16. Test keyboard.
17. Check console.
18. Check network.
19. Fix issues.
20. Retest.
21. Keep server running when safe.

---

# 152. UX Bug Severity

## Critical

* security exposure
* user cannot complete core action
* private data visible
* payment or inquiry false success
* Admin destructive action without confirmation

## High

* broken mobile navigation
* dead end
* lost form data
* broken Back
* clipped critical text
* covered primary action
* nonfunctional dashboard drill-down

## Medium

* inconsistent spacing
* unclear label
* secondary state missing
* minor alignment issue
* non-critical keyboard issue

## Low

* cosmetic polish
* subtle animation timing
* minor visual inconsistency

Critical and High defects must block phase PASS.

---

# 153. Production UX Sign-Off

Production UX sign-off requires:

* mobile-first flows pass
* tablet flows pass
* desktop flows pass
* Admin mobile and desktop pass
* auth pass
* search pass
* Property and Project details pass
* Direct Inquiry pass
* Leads pass
* dashboard drill-down pass
* moderation and recovery pass
* billing pass
* provider states pass
* accessibility pass
* no critical clipping
* no dead actions
* no fake metrics
* console and network clean for tested flows
* performance acceptable
* live production smoke test pass

---

# 154. Feature Registry Updates

After implementation, update relevant entries including:

* `UX-001` through `UX-045`
* `HOME-*`
* `SEARCH-*`
* `DASH-*`
* `ADMIN-*`
* `GRAPH-*`
* `QA-*`
* related module entries

Add exact:

* routes
* components
* design-token files
* layout files
* navigation configuration
* tests
* browser verification
* bugs
* status

---

# 155. Project State Updates

Update `PROJECT_STATE.md` with:

* current UX phase
* skills used
* screens changed
* components changed
* routes tested
* widths tested
* accessibility result
* clipping result
* console result
* network result
* bugs
* rollback checkpoint
* development server status
* next prompt

---

# 156. Non-Negotiable UX Rules

1. Mobile UX is the primary design authority.
2. The visual system is original and Apple-inspired.
3. The product must not copy another platform’s visual design.
4. Every screen must have a clear purpose.
5. Every screen must have a logical entry and exit.
6. Every actionable-looking element must work.
7. Every meaningful relationship must be clickable.
8. Dashboard metrics require real destinations.
9. Admin must support complete deep drill-down.
10. Complex Admin edits must not be forced into small popups.
11. Page, modal, drawer, sheet, popover, and inline patterns must be chosen intentionally.
12. Back, Close, and Cancel are not interchangeable.
13. Browser Back must be predictable.
14. Search state must be preserved.
15. List-detail-return must preserve useful context.
16. Loading, empty, error, success, permission, and setup states are mandatory.
17. Text must never clip or overlap.
18. Fixed and sticky elements must never cover content.
19. Mobile keyboards must not hide required actions.
20. Bottom navigation must be role-based and safe-area aware.
21. Status must not rely only on color.
22. Accessibility is part of implementation.
23. Motion must be purposeful and reduced-motion safe.
24. Real data must drive all metrics and badges.
25. Live-browser responsive verification is required before PASS.
26. Global defects must be fixed through shared patterns.
27. The global UX audit must implement fixes, not only report them.
28. Development server should remain running after verification when safe.
29. Documentation and feature registry must be updated.
30. Production UX sign-off requires real production smoke testing.

---

# 157. Implementation Handoff

The next document must define the complete public marketplace experience, including:

* homepage
* homepage-only city selector
* public headers and footer
* search entry
* search suggestions
* search results
* filters
* sorting
* Property discovery
* Project discovery
* Builder promotion carousel
* Gujarat location hierarchy
* missing-location workflow
* city and locality SEO pages
* public profiles
* saved Properties
* saved Projects
* saved searches
* CMS
* legal pages
* public trust and safety
* public performance
* public caching
* indexing
* metadata
* structured data
* sitemaps
* responsive verification

---

