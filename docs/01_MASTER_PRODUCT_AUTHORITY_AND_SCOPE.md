# `docs/01_MASTER_PRODUCT_AUTHORITY_AND_SCOPE.md`

# My Gujarat Property — Master Product Authority, Final Scope, Roles, Entities, Business Rules, and Non-Negotiable Requirements

This document is the primary product authority for **My Gujarat Property**.

It defines:

* what the product is
* who can use it
* which roles exist
* which modules must be built
* how the major entities relate to one another
* how public and private experiences must behave
* how users move through the platform
* how Admin and Super Admin control the system
* how moderation, recovery, billing, providers, security, UX, and production readiness must work
* which product rules are mandatory across documentation, code, database, RLS, APIs, UI, verification, deployment, and operations

Claude must read this document before implementing any major product feature.

This document defines the approved product as a clean final system.

Implementation must follow the rules in this document without depending on assumptions from earlier code, screens, layouts, or documentation.

---

## 1. Product Identity

### 1.1 Product name

**My Gujarat Property**

### 1.2 Product type

My Gujarat Property is a mobile-first real-estate marketplace and SaaS management platform focused on Gujarat.

It connects:

* property owners
* real-estate brokers
* builders and developers
* property seekers
* requirement posters
* internal moderation teams
* support and operations teams
* platform administrators

The platform must support the complete lifecycle of:

* discovering property
* discovering builder projects
* posting property
* posting builder projects
* managing project inventory
* posting approved requirements
* submitting direct inquiries
* managing leads and related activity
* handling moderation
* handling subscriptions and payments
* handling notifications
* managing users and content
* recovering from mistakes
* operating the platform securely at production scale

### 1.3 Geographic focus

The initial product focus is Gujarat.

The platform must support the textual address hierarchy:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

The architecture must remain extensible enough to support additional Indian states later without redesigning the complete database or application.

### 1.4 Primary device expectation

The majority of users are expected to use mobile devices.

Therefore:

* mobile UX is the primary product authority
* tablet UX must be intentionally designed
* desktop UX must be an expansion of the approved product system
* desktop layouts must not be compressed into mobile
* mobile layouts must not be simple stacked desktop screens
* every flow must be tested on real mobile viewport sizes

---

## 2. Product Vision

The platform must feel like a mature, trustworthy, premium, simple, and production-ready Indian real-estate product.

Users must be able to:

* understand the platform without training
* find relevant property quickly
* browse project inventory clearly
* understand price, location, specification, and status
* submit an inquiry without unnecessary complexity
* manage their own listings and projects
* manage related leads from the relevant listing or project
* use clear role-based dashboards
* navigate deeply without becoming lost
* recover from errors
* understand moderation and approval states
* receive useful notifications
* manage billing and subscription
* access help and support
* trust that private information is protected

Internal teams must be able to:

* inspect every major entity
* drill into connected information
* edit permitted information
* moderate content
* correct accidental decisions
* view complete histories
* manage billing and providers
* audit sensitive actions
* resolve reports and bugs
* restore recoverable records
* operate the platform without editing the database manually

---

## 3. Product Quality Standard

My Gujarat Property must behave like one connected product.

It must not feel like:

* a collection of unrelated pages
* a decorative dashboard template
* a set of forms without workflows
* a website where buttons do not lead anywhere
* a frontend demonstration with no backend authority
* a collection of popups with no navigation logic
* a product that depends on browser local storage for business records
* a platform where Admin can see only shallow summaries
* a system where rejected or deleted records cannot be corrected
* a system that reports providers as active without real verification

Every user action must create an intentional state transition.

Every screen must provide:

* orientation
* purpose
* primary action
* secondary actions
* entry path
* exit path
* Back behavior
* Close behavior where relevant
* Cancel behavior where relevant
* success feedback
* failure recovery
* permission behavior
* mobile behavior
* loading state
* empty state
* error state

---

## 4. Final Public Role Model

The platform has exactly three public registration roles:

1. Owner
2. Broker
3. Builder/Developer

Public registration must never display internal roles.

A user selects one of the three public roles during registration.

Role permissions must be enforced through:

* database ownership and scope
* RLS
* server-side authorization
* route guards
* service-level permission checks
* UI action availability
* Admin permission controls
* audit logs where required

Role restrictions must never rely only on hidden UI.

---

# 5. Guest Experience

A Guest is a user who is not authenticated.

A Guest may:

* open the homepage
* select a homepage city
* search approved properties
* search approved projects
* view approved public property cards
* view approved public project cards
* open approved public property details
* open approved public project details
* view approved Builder profiles
* view approved Owner or Broker public profiles where enabled
* view city-based SEO landing pages
* use public filters and sorting
* view approved Builder promotions
* view public pricing
* view legal pages
* view help content
* begin a Direct Inquiry
* begin login or registration
* report public content where the workflow permits

A Guest may not:

* access a private dashboard
* access private leads
* access private messages
* access private notifications
* access private profile data
* access billing records
* access another user’s drafts
* access pending or rejected marketplace content
* access internal notes
* access moderation data
* access private verification documents
* access Admin routes
* submit a completed Direct Inquiry without the required authenticated identity
* bypass role, plan, moderation, or provider restrictions

When a Guest starts a protected action:

* preserve the originating route
* preserve the related entity
* preserve safe form state
* show the contextual login or registration experience
* return the user to the intended action after authentication

---

# 6. Owner Role

An Owner is a user who owns or represents their own property.

## 6.1 Owner capabilities

An Owner may:

* register with a mobile number
* verify a 4-digit OTP
* create and manage an Owner profile
* access the Owner dashboard
* create property listings
* save property drafts
* submit properties for moderation
* view moderation status
* edit owned properties
* pause owned properties
* resume owned properties
* soft-delete owned properties
* restore eligible owned properties
* view property-specific leads
* open an individual lead
* view messages, notes, follow-ups, and activity related to an owned property
* manage Direct Inquiries received for owned properties
* submit a Direct Inquiry on another eligible public property or project
* create and manage permitted requirements
* view notifications
* manage subscription and billing
* view real usage and plan limits
* access help and support
* submit reports
* manage account and privacy settings

## 6.2 Owner restrictions

An Owner may not:

* manage another user’s listing
* view another user’s private leads
* view another user’s private messages
* access internal moderation notes
* access Admin routes
* alter approval status
* create a Builder project
* manage project units
* configure platform providers
* change platform billing rules
* bypass plan limits
* bypass moderation
* create fake verification status
* access raw audit logs
* permanently delete protected records without permission

## 6.3 Owner dashboard purpose

The Owner dashboard must be simple.

It should prioritize:

* owned properties
* property status
* new leads
* pending follow-ups
* moderation updates
* billing or plan issues
* useful recent activity
* primary actions

The dashboard must not duplicate every management screen.

Every metric must have a meaningful drill-down.

Example:

```text
Owner Dashboard
→ Active Properties
→ Property List filtered to Active
→ Specific Property
→ Related Leads
→ Specific Lead
→ Messages, Notes, and Activity
```

---

# 7. Broker Role

A Broker is a professional real-estate user who manages their own brokerage activity.

The Broker role is a single public role.

## 7.1 Broker capabilities

A Broker may:

* register with a mobile number
* verify a 4-digit OTP
* create and manage a Broker profile
* access the Broker dashboard
* create property listings
* save drafts
* submit listings for moderation
* manage owned Broker listings
* edit listings
* pause listings
* resume listings
* soft-delete listings
* restore eligible listings
* view listing-specific leads
* manage Direct Inquiries
* manage messages, notes, follow-ups, and lead activity
* create and manage permitted requirements
* view eligible requirements according to approved scope
* submit permitted responses to requirements
* manage billing and subscription
* view notifications
* access support
* submit reports
* manage privacy and account settings

## 7.2 Broker ownership model

Broker records must be owned directly by the Broker account.

The Broker architecture must not require a subordinate public-role hierarchy.

Lead ownership, listing ownership, and activity ownership must be clear and directly enforceable.

## 7.3 Broker restrictions

A Broker may not:

* access another Broker’s private records
* manage Builder projects
* manage project units
* access internal platform administration
* change moderation status
* bypass billing or plan rules
* expose private user information
* access provider secrets
* access another user’s invoices
* impersonate another user without a controlled audited support workflow

## 7.4 Broker dashboard purpose

The Broker dashboard should prioritize:

* listings
* new leads
* follow-ups
* permitted requirements
* moderation status
* billing usage
* notifications
* recent real activity

Every dashboard item that appears interactive must open a real destination.

---

# 8. Builder/Developer Role

A Builder/Developer is a business user who creates and manages real-estate projects and project-linked inventory.

## 8.1 Builder/Developer capabilities

A Builder/Developer may:

* register with a mobile number
* verify a 4-digit OTP
* create and manage a Builder profile
* create builder projects
* save project drafts
* manage project details
* manage project phases where supported
* manage project-linked inventory
* create and manage units inside a project
* manage unit configuration
* manage unit price and area
* manage unit inventory status
* upload approved project media through the configured media provider
* submit projects for moderation
* view project moderation status
* edit owned projects
* pause projects
* resume projects
* soft-delete projects
* restore eligible projects
* view project-specific leads
* view unit-specific lead context
* manage Direct Inquiries
* manage messages, notes, follow-ups, and activity
* submit eligible Builder content for homepage promotion
* view promotion status
* manage billing and subscription
* view notifications
* manage support and reports
* manage approved business and compliance information

## 8.2 Builder listing model

Builder public inventory must be represented through:

* Builder projects
* project-linked unit inventory
* approved project-linked inventory cards where required by the public marketplace

A Builder promotion may reference:

* an approved Builder project
* an approved project-linked inventory listing
* an approved Builder campaign destination defined by the promotion system

Builder inventory must retain the parent project relationship.

## 8.3 Project unit rule

Units must be managed from within the related project.

Required navigation:

```text
Builder Dashboard
→ Projects
→ Specific Project
→ Units
→ Specific Unit
→ Related Leads or Activity
```

Unit management must not behave like an unrelated global listing module.

## 8.4 Builder restrictions

A Builder/Developer may not:

* manage another Builder’s projects
* edit another Builder’s units
* access internal moderation notes
* access Admin tools
* change approval status
* expose private lead data publicly
* bypass compliance requirements
* bypass subscription or promotion billing
* publish a project before required approval
* activate a paid promotion through frontend state alone

## 8.5 Builder dashboard purpose

The Builder dashboard should prioritize:

* active projects
* pending projects
* project units
* inventory status
* new leads
* follow-ups
* promotion status
* billing usage
* recent activity

Every project and unit summary must support deep drill-down.

---

# 9. Internal Role Model

Internal access is separate from public role access.

Internal users include:

* Super Admin
* Admin
* permission-scoped staff

Internal users must use a protected internal authentication flow.

Public registration must not create internal users.

---

## 9.1 Super Admin

Super Admin is the highest platform authority.

Super Admin may manage:

* all users
* all public roles
* internal Admin and staff accounts
* staff permissions
* properties
* projects
* units
* requirements
* Direct Inquiries
* leads
* messages where permission and privacy rules allow
* reports
* support tickets
* bugs
* moderation
* recovery
* billing
* subscriptions
* payments
* invoices
* plans
* promotions
* providers
* feature flags
* locations
* CMS
* SEO
* legal content
* notification templates
* audit logs
* security settings
* operational settings
* maintenance mode
* deployment status
* system health
* backup status
* recovery status

Super Admin actions must still follow:

* confirmation
* reason requirements
* audit logging
* server-side authorization
* validation
* data-integrity checks
* recovery rules
* legal and retention requirements

Super Admin must not bypass audit controls silently.

---

## 9.2 Admin

Admin access is permission-scoped.

An Admin may be granted access to:

* user management
* content moderation
* property management
* project management
* unit review
* requirement review
* lead oversight
* reports
* support
* billing
* promotion review
* CMS
* SEO
* locations
* notifications
* audits
* recovery

An Admin must not automatically receive:

* provider-secret control
* complete security control
* complete audit control
* staff permission control
* high-risk billing correction
* irreversible deletion
* unrestricted exports

These actions require explicit permission.

---

## 9.3 Staff permission system

Staff access must be action-based.

Permissions may include:

* view
* create
* edit
* approve
* reject
* request changes
* reopen
* restore
* suspend
* unsuspend
* assign
* export
* refund
* manage billing
* manage providers
* view private documents
* view sensitive profile fields
* view audit logs
* manage security
* manage recovery
* manage CMS
* manage SEO
* manage locations
* perform bulk actions

Permission enforcement must exist at:

* route level
* server-service level
* database level where applicable
* action level
* UI level

---

# 10. Core Product Entities

The primary product entities are:

* User
* Public Profile
* Internal Staff Profile
* Property
* Project
* Project Unit
* Requirement
* Direct Inquiry
* Lead
* Message
* Lead Note
* Follow-up
* Activity Event
* Notification
* Saved Property
* Saved Project
* Saved Search
* Promotion
* Report
* Support Ticket
* Bug
* Moderation Record
* Recovery Record
* Audit Log
* Plan
* Subscription
* Payment
* Invoice
* Billing Profile
* Location
* CMS Page
* Blog Article
* Provider Configuration State
* Feature Flag
* System Setting

Each entity must have:

* stable identifier
* ownership or scope
* lifecycle status
* created timestamp
* updated timestamp
* actor attribution where relevant
* soft-delete behavior where relevant
* audit coverage where relevant
* permission rules
* Admin visibility
* recovery behavior
* related-entity links

---

# 11. Property Product Rules

A Property is a normal marketplace listing created by an Owner or Broker.

## 11.1 Property categories

The property model may support approved categories such as:

* residential
* commercial
* industrial
* land or plot
* agricultural
* warehouse
* industrial shed
* shop
* office
* showroom
* apartment
* flat
* tenement
* bungalow
* villa
* row house
* farmhouse
* residential plot
* commercial plot
* room
* PG
* hostel
* other approved category

The final form must show only fields relevant to the selected category.

## 11.2 Property purposes

Supported property purposes may include:

* sale
* rent
* lease where approved by final taxonomy

The purpose must affect:

* price fields
* deposit fields
* availability fields
* filters
* SEO
* public labels
* posting validation

## 11.3 Property lifecycle

A property must support:

```text
Draft
→ Submitted
→ Pending Review
→ Approved
→ Published
→ Paused
→ Resumed
→ Updated
→ Re-reviewed where required
→ Soft Deleted
→ Restored where allowed
```

Moderation may also result in:

* Rejected
* Changes Required

Every status change must be recorded.

## 11.4 Property fields

Depending on category, a Property may include:

* title
* description
* purpose
* category
* type
* price
* price unit
* negotiable state
* maintenance
* deposit
* area
* area unit
* built-up area
* carpet area
* plot area
* bedrooms
* bathrooms
* balconies
* floor
* total floors
* age of property
* furnishing
* parking
* possession status
* availability
* facing where approved
* amenities
* textual address
* location hierarchy
* landmark text
* media
* ownership declaration
* listing-policy acceptance
* moderation state
* publication state

Irrelevant fields must remain hidden.

## 11.5 Property detail experience

Property detail must include:

* mobile-first image gallery
* price
* title
* clear textual location
* key facts
* description
* specifications
* amenities
* property status
* poster profile summary
* Direct Inquiry
* report action
* approved related properties
* legal and marketplace disclaimer
* loading, empty, error, and partial-data states

Public property detail must never expose private operational data.

## 11.6 Property management

Owner or Broker property management must include:

* view
* edit
* preview
* pause
* resume
* soft delete
* restore where eligible
* moderation status
* rejection or changes-required reason
* real performance data where implemented
* related leads
* related reports where visible
* activity history

---

# 12. Project Product Rules

A Project is a Builder/Developer real-estate development.

## 12.1 Project types

Approved project types may include:

* residential project
* commercial project
* industrial project
* plotting project
* apartment project
* villa project
* row-house project
* township
* mixed-use project
* commercial complex
* industrial zone
* approved development category

## 12.2 Project fields

A Project may include:

* project name
* builder
* project type
* purpose
* description
* project status
* construction status
* possession timeline
* launch date
* phase information
* total land area
* towers or wings
* floors
* unit configurations
* unit inventory
* price range
* amenities
* specifications
* textual address
* location hierarchy
* RERA information where applicable
* compliance documents where required
* project images
* floor plans
* brochure
* approved video
* moderation status
* publication status

## 12.3 Project lifecycle

```text
Draft
→ Project Details
→ Units and Inventory
→ Media and Compliance
→ Preview
→ Submitted
→ Pending Review
→ Approved
→ Published
→ Updated
→ Paused
→ Resumed
→ Soft Deleted
→ Restored where allowed
```

Moderation may also result in:

* Rejected
* Changes Required

## 12.4 Project detail experience

Project detail must support:

* premium mobile gallery
* project overview
* builder identity
* textual location
* price range
* project status
* configurations
* unit inventory summary
* amenities
* specifications
* possession information
* RERA information where applicable
* brochure access according to permissions
* approved project media
* Direct Inquiry
* unit-specific inquiry context
* report action
* related approved projects
* legal and compliance notices

## 12.5 Project management

Builder project management must include:

* project overview
* edit
* preview
* moderation state
* units
* inventory
* project-specific leads
* promotion eligibility
* reports where visible
* performance data where implemented
* pause
* resume
* soft delete
* restore where eligible
* activity history

---

# 13. Project Unit Rules

A Project Unit is inventory inside a Builder project.

A Unit must always reference a parent Project.

## 13.1 Unit fields

A Unit may include:

* project
* configuration
* unit type
* unit label
* area
* area unit
* floor
* tower or wing
* bedrooms where applicable
* bathrooms where applicable
* price
* price status
* inventory count
* availability status
* possession status
* floor plan
* description
* specifications
* moderation or publication state where required

## 13.2 Unit lifecycle

A Unit may support:

* Draft
* Active
* Paused
* Unavailable
* Reserved
* Sold
* Soft Deleted
* Restored

Exact inventory statuses must be documented in the listing and Leads specification.

## 13.3 Unit inquiry relation

When a user submits a Direct Inquiry from a specific unit:

* preserve the Project ID
* preserve the Unit ID
* preserve the Builder recipient
* show the unit context in the Lead
* show the unit context in Admin
* show the unit context in the activity timeline
* never lose the parent Project relationship

---

# 14. Requirement Rules

A Requirement represents an approved real-estate need posted by an Owner or Broker.

A Requirement may include:

* purpose
* property type
* project interest
* budget range
* preferred location
* preferred city
* preferred locality
* area range
* unit configuration
* possession preference
* urgency
* description
* contact-sharing consent
* expiry
* moderation state

## 14.1 Requirement lifecycle

```text
Draft
→ Submitted
→ Pending Review
→ Approved
→ Active
→ Responded
→ Paused or Closed
→ Expired
→ Renewed where allowed
→ Soft Deleted
→ Restored where allowed
```

Moderation may also result in:

* Rejected
* Changes Required

## 14.2 Requirement access

Requirement visibility and response permissions must be role-aware.

Only safe public or role-scoped data may be exposed.

Responses must create a traceable relationship to:

* sender
* requirement owner
* related property or project where applicable
* resulting Lead
* messages and activity

---

# 15. Direct Inquiry Product Model

Direct Inquiry is the primary public contact workflow for Properties and Projects.

The user must not be required to choose an inquiry type.

## 15.1 Direct Inquiry flow

```text
Open Property, Project, or Unit
→ Select Direct Inquiry
→ Authenticate if required
→ Preserve originating context
→ Show a short inquiry form
→ Validate
→ Confirm contact-sharing consent
→ Submit
→ Create Lead
→ Notify recipient in-app
→ Send email when provider is active
→ Show success
→ Open relevant Lead context where appropriate
```

## 15.2 Inquiry fields

The inquiry experience should remain minimal.

It may include:

* prefilled authenticated user name
* verified mobile number
* registered email
* short message
* optional preferred contact time where approved
* consent to share contact details with the listing recipient

## 15.3 Contact privacy

Public pages must not expose private contact numbers through a reveal action.

When a Direct Inquiry is submitted:

* the sender knowingly consents to share approved contact data
* the recipient receives the contact inside the private Lead workspace
* contact data remains protected by RLS and authorization
* contact data must not appear in public HTML
* contact data must not appear in public APIs
* contact data must not appear in metadata
* contact data must not appear in search results
* contact data must not appear in public notifications
* contact data must not appear in public analytics
* contact data must not appear in logs

## 15.4 Inquiry abuse protection

Direct Inquiry must include:

* authentication where required
* server-side validation
* duplicate detection
* rate limiting
* abuse monitoring
* consent recording
* safe error handling
* idempotent submission where appropriate

---

# 16. Unified Leads Workspace

The platform must use one unified Leads workspace for:

* Direct Inquiries
* requirement responses
* related messages
* notes
* follow-ups
* lead statuses
* activity history
* related entity context
* related user context

## 16.1 Lead source context

A Lead must identify its source:

* Property
* Project
* Unit
* Requirement
* Promotion interaction where approved
* other approved platform workflow

## 16.2 Lead data

A Lead may include:

* source type
* source ID
* sender
* recipient
* related Property
* related Project
* related Unit
* related Requirement
* status
* priority
* contact-sharing consent
* created timestamp
* last activity
* unread state
* follow-up date
* notes
* message thread
* activity timeline
* report state
* archived or closed state

## 16.3 Lead detail

Lead detail must provide:

* lead summary
* source entity
* participant information according to permission
* inquiry message
* status
* messages
* notes
* follow-ups
* activity
* related listing or project
* related unit where applicable
* moderation or report status where applicable
* complete mobile behavior
* clear Back behavior

## 16.4 Entity-level lead visibility

Leads must be accessible directly from their source entity.

Examples:

```text
Property
→ Property Leads
→ Specific Lead
→ Messages and Activity
```

```text
Project
→ Project Leads
→ Specific Lead
→ Related Unit
→ Messages and Activity
```

```text
Unit
→ Unit Leads
→ Specific Lead
```

The user must not need to lose entity context to manage related leads.

## 16.5 Lead status

The final lead-status model must remain simple and useful.

Recommended statuses:

* New
* Open
* In Progress
* Follow-up
* Qualified
* Closed
* Archived

Status changes must:

* be permission-controlled
* be server-backed
* create activity
* preserve history
* show feedback
* update related metrics

---

# 17. Messaging, Notes, Follow-Ups, and Activity

## 17.1 Messages

Messages must:

* belong to a Lead or approved support context
* be visible only to permitted participants
* support real unread state
* show send progress
* show send failure
* allow retry
* preserve order
* preserve timestamps
* prevent unauthorized access
* avoid fake online or typing indicators
* support attachments only when secure media support is configured

## 17.2 Notes

Lead notes must:

* belong to a Lead
* record author
* record timestamp
* define privacy scope
* support edit history where editing is allowed
* remain hidden from unauthorized participants
* be visible to Admin only with permission

## 17.3 Follow-ups

Follow-ups may include:

* due date
* due time
* note
* status
* owner
* completion state
* overdue state
* activity event
* notification when configured

Follow-ups must not depend on a provider being present to remain stored.

## 17.4 Activity timeline

The activity timeline must record meaningful events such as:

* inquiry created
* Lead opened
* status changed
* message sent
* note added
* follow-up created
* follow-up completed
* entity paused
* entity restored
* moderation changed
* report created
* billing-related state where relevant

The timeline must use real events.

---

# 18. Homepage Product Rules

The homepage is the main public discovery experience.

It must be mobile-first.

## 18.1 Homepage structure

The homepage may include:

1. public homepage header
2. homepage-only city selector
3. primary search
4. search suggestions
5. Builder spotlight carousel
6. approved property sections
7. approved project sections
8. popular cities
9. property categories
10. trust and safety content
11. pricing or role CTA where appropriate
12. legal and public footer

## 18.2 Homepage city selector

The city selector appears only in the homepage context.

It must:

* display the currently selected city
* support Gujarat cities
* use backend location data
* update homepage discovery
* update search context
* remain accessible on mobile
* avoid blocking the header
* not appear automatically in unrelated application headers

## 18.3 Homepage search

Tapping the homepage search must not immediately open an empty search-results page.

The expected behavior is:

```text
Tap Search
→ Focus input or open search overlay
→ Show suggestions
→ User types or selects meaningful context
→ Submit or choose a suggestion
→ Open search results
```

## 18.4 Homepage data integrity

Homepage sections must use:

* approved public data
* real database results
* real status
* honest empty states
* safe public views
* pagination or result limits
* performance-aware queries

Do not show invented counts.

---

# 19. Builder Spotlight Carousel

The homepage includes a Builder-focused promotional carousel.

This is a controlled marketplace feature.

## 19.1 Eligible promotion targets

A promotion may point to:

* an approved Builder project
* an approved project-linked inventory destination
* another approved Builder marketplace destination defined by the promotion configuration

## 19.2 Promotion lifecycle

```text
Builder selects eligible entity
→ Creates promotion submission
→ Reviews preview
→ Accepts promotion policy
→ Completes billing when required
→ Submits for moderation
→ Admin reviews
→ Approved and Scheduled
→ Active
→ Paused or Expired
→ Archived
→ Corrected or Restored where allowed
```

## 19.3 Promotion rules

A promotion must include:

* Builder
* destination entity
* title
* approved visual
* approved text
* target city or scope
* start date
* end date
* status
* moderation record
* billing relation where required
* real click destination

## 19.4 Promotion pricing

Promotion availability may be:

* included in an eligible plan
* purchased separately
* manually granted by an authorized Admin
* disabled by configuration

Pricing must be controlled from Admin.

A paid promotion may become active only after:

* verified payment
* moderation approval
* valid schedule
* eligible destination status

## 19.5 Promotion display

The carousel must:

* prioritize mobile usability
* use swipe behavior
* support accessible controls
* avoid auto-rotation that prevents reading
* pause motion when appropriate
* support reduced motion
* open the exact promoted destination
* hide when no eligible promotion exists
* use real approved data
* preserve stable layout

---

# 20. Search Product Rules

Search must support approved public Properties and Projects.

## 20.1 Search entry

Search may be entered from:

* homepage
* homepage city section
* category section
* city SEO page
* public profile
* related-listing section
* direct search route with meaningful query

## 20.2 Search suggestions

Suggestions may include:

* city
* locality
* village
* property category
* project
* Builder
* approved landmark text
* recent privacy-safe search
* approved popular search

## 20.3 Search results

Search results must support:

* query
* selected city
* purpose
* property or project mode
* category
* budget
* area
* configuration
* furnishing where applicable
* possession where applicable
* sort
* pagination
* mobile filter sheet
* desktop filter layout
* loading state
* no-results state
* error state
* retry
* state preservation

## 20.4 Context preservation

When a user:

* searches
* applies filters
* sorts
* opens a result
* returns

the platform should preserve, where technically reasonable:

* query
* filters
* sort
* selected tab
* pagination
* scroll position

Use URL state where suitable.

---

# 21. Gujarat Location and Address Rules

Location experiences must use the approved textual hierarchy.

## 21.1 Location structure

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

## 21.2 Location data requirements

Every location record should include:

* stable ID
* name
* normalized name
* slug
* parent relationship
* active state
* aliases where required
* SEO state
* created timestamp
* updated timestamp

## 21.3 Address storage

A Property, Project, Profile, Requirement, or promotion target may store:

* State ID
* District ID
* Taluka ID
* City ID
* Village/Locality ID
* address line
* landmark text
* postal code where required
* generated display address

Location identity must not depend on raw free text alone.

## 21.4 Missing location workflow

When an approved location is missing:

```text
User selects Request Missing Location
→ Selects parent location
→ Enters proposed name
→ Submits
→ Admin reviews
→ Approves, rejects, merges, or requests clarification
→ User is notified
```

---

# 22. City-Based SEO Landing Pages

The platform must support city-focused discovery.

Examples of approved page concepts:

* property in a city
* property for sale in a city
* property for rent in a city
* flats in a city
* commercial property in a city
* industrial property in a city
* projects in a city
* Builder projects in a city

## 22.1 SEO page rules

SEO pages must:

* use real approved data
* use stable canonical URLs
* avoid private information
* avoid misleading counts
* show meaningful H1 and supporting content
* use correct metadata
* use structured data where valid
* show useful search filters
* show an honest empty state
* avoid indexing invalid filter combinations
* handle changed slugs through redirects
* include breadcrumbs where useful

## 22.2 Indexing rules

Do not index:

* private dashboards
* auth routes
* Admin routes
* drafts
* pending content
* rejected content
* deleted content
* private messages
* leads
* billing
* provider settings
* arbitrary low-value search parameters

---

# 23. Public Profile Rules

## 23.1 Owner public profile

An Owner public profile may show approved information such as:

* display name
* profile image
* public verification state
* approved properties
* account age where approved
* safe public summary

## 23.2 Broker public profile

A Broker public profile may show:

* display or business name
* public image or logo
* business description
* approved service areas
* approved listings
* public verification state
* safe public summary

## 23.3 Builder public profile

A Builder profile may show:

* Builder name
* logo
* description
* approved projects
* active approved promotions
* approved compliance summary
* public verification state
* city coverage

## 23.4 Public-profile privacy

Public profiles must not expose:

* private mobile numbers
* private email
* private billing
* private documents
* internal notes
* moderation notes
* private Leads
* private messages
* provider data
* security data
* raw verification documents

---

# 24. Authentication Product Rules

Login and registration use mobile-number authentication.

## 24.1 Login flow

```text
Open Login
→ Enter mobile number
→ Validate number
→ Determine registered state
→ Send 4-digit OTP
→ Enter or autofill OTP
→ Verify
→ Create secure session
→ Redirect to intended destination
```

## 24.2 Registration flow

```text
Open Register
→ Select Owner, Broker, or Builder/Developer
→ Enter full name
→ Enter email
→ Enter mobile number
→ Accept required consent
→ Validate
→ Send 4-digit OTP
→ Verify
→ Create user and role profile
→ Create session
→ Redirect to intended destination or role default
```

## 24.3 Direct auth route

When a user directly opens the login route:

* show the public homepage as the underlying background
* show login above the homepage
* use a centered accessible modal on suitable desktop widths
* use a focused mobile auth sheet or full-screen auth experience on mobile

## 24.4 Contextual auth

When auth starts from a protected action:

* preserve the originating page
* preserve the related entity
* preserve safe query state
* show login or registration
* return to the intended action after success

## 24.5 Already-authenticated behavior

If an authenticated user opens a login or registration URL:

* do not show the auth screen again
* redirect to the correct authenticated destination
* prevent loops
* preserve relevant intended route

## 24.6 Validation

Validation is required for:

* mobile number
* full name
* email
* role
* OTP
* consent

Validation must exist both client-side and server-side.

---

# 25. Notification Product Rules

The platform supports:

* in-app notifications
* email notifications
* SMS OTP delivery

## 25.1 In-app notification preview

The application may show:

* a real unread badge
* a compact preview of the latest five unread or recent relevant items
* a View All action
* a maximum badge display such as `99+`
* clear read and unread states

## 25.2 Notification destination

Every notification must open:

* the related Property
* the related Project
* the related Lead
* the related message
* the related moderation state
* the related billing record
* the related support item
* another exact relevant destination

A notification must not open a meaningless generic screen.

## 25.3 Email notifications

Email may be used for approved events such as:

* new inquiry
* moderation result
* billing event
* subscription event
* payment receipt
* invoice
* support update
* security notice
* account-status notice

Email must remain `SETUP_REQUIRED` until a real provider is configured and tested.

---

# 26. Saved and Personalization Features

Authenticated users may save:

* properties
* projects
* searches

Saved data must be server-backed.

Saved-item features must support:

* add
* remove
* real persistence
* optimistic feedback only when rollback is supported
* authenticated access
* list management
* empty state
* error recovery
* Admin visibility only when justified and permissioned

Personalization must not expose private behavior publicly.

---

# 27. Dashboard Product Rules

Owner, Broker, and Builder dashboards must be simplified.

A dashboard is not a complete management replacement.

It is a role-specific entry point.

## 27.1 Dashboard content principles

Show:

* real summary
* urgent items
* recent activity
* useful next actions
* moderation issues
* lead follow-ups
* billing issues
* notifications
* meaningful metrics

Do not show:

* fake analytics
* fake growth
* decorative charts
* clickable cards without destinations
* excessive duplicate navigation
* unrelated modules
* overloaded desktop tables on mobile

## 27.2 Deep dashboard drill-down

Every meaningful dashboard item must connect to a real management flow.

Example:

```text
New Leads
→ Leads filtered to New
→ Specific Lead
→ Source Property
→ Property Detail
→ Related Activity
```

## 27.3 Role-based mobile and tablet bottom navigation

Bottom navigation must:

* use role-appropriate destinations
* use four or five primary items
* show an active state
* preserve safe-area spacing
* not cover content
* adapt during focused task flows
* link to real screens
* remain consistent for each role

Exact navigation maps are defined in the dashboard document.

---

# 28. Admin and Super Admin Product Authority

The internal platform must provide complete, deeply connected management.

Admin must not stop at shallow list views.

## 28.1 User management graph

Required navigation:

```text
Admin Users
→ User
→ Profile
→ Account and Role State
→ Properties
→ Projects
→ Units
→ Direct Inquiries
→ Leads
→ Messages and Activity
→ Reports
→ Support and Bugs
→ Billing
→ Subscriptions
→ Payments
→ Invoices
→ Notifications
→ Verification
→ Sessions and Devices
→ Security Events
→ Moderation History
→ Audit Trail
→ Recovery History
```

Every linked item must be clickable according to permission.

## 28.2 Contextual editing

Internal users may edit approved fields using:

* inline editing for small safe changes
* modal for short focused changes
* drawer for contextual inspection
* dedicated page for complex or sensitive work
* mobile full-screen view where required

A large or high-risk workflow must not be forced into a cramped popup.

## 28.3 Sensitive action rules

Sensitive actions require:

* permission
* server authorization
* validation
* confirmation
* reason
* audit log
* actor
* timestamp
* before and after values where relevant
* notification where relevant
* recovery where appropriate

## 28.4 Moderation actions

Moderation may include:

* Approve
* Reject
* Request Changes
* Reopen
* Restore
* Pause
* Resume
* Archive
* Assign
* Escalate

## 28.5 Mistake recovery

If an item is rejected accidentally:

```text
Open entity history
→ Select Reopen
→ Enter reason
→ Confirm
→ Return entity to review
→ Review corrected data
→ Approve or request changes
→ Preserve original rejection history
```

The correction must not erase the original action.

## 28.6 Admin layout quality

Admin screens must have:

* consistent alignment
* stable grids
* clear hierarchy
* sticky headers only when safe
* fixed elements only when safe
* mobile card conversion
* useful drawers
* full-screen mobile detail where required
* no clipped text
* no hidden actions
* no overlap
* no meaningless tabs
* no fake metrics
* no disconnected sub-details

---

# 29. Moderation System

The platform requires moderation for relevant user-generated public content.

Moderated entities may include:

* Properties
* Projects
* Units where required
* Requirements
* Promotions
* Profile verification
* location requests
* CMS content
* SEO content
* reports

## 29.1 Moderation record

A moderation record should include:

* entity type
* entity ID
* submitter
* status
* assigned reviewer
* reviewer
* reason
* requested changes
* submitted timestamp
* reviewed timestamp
* previous status
* new status
* related audit event

## 29.2 Moderation statuses

Use approved statuses such as:

* Draft
* Pending Review
* In Review
* Changes Required
* Approved
* Rejected
* Reopened
* Archived

## 29.3 Moderation integrity

Moderation must:

* preserve history
* prevent unauthorized decisions
* prevent frontend-only approval
* show submitter-friendly reasons
* keep internal notes private
* support reassignment
* support escalation
* support recovery
* support audit

---

# 30. Delete and Recovery Rules

The default user deletion model is soft deletion.

## 30.1 Soft delete

Soft deletion must:

* hide the record from normal views
* preserve related history
* preserve audit
* preserve dependent records
* support recovery where allowed
* record actor and timestamp

## 30.2 Restore

Restore must:

* verify permission
* verify dependencies
* show the resulting state
* preserve original history
* record reason when required
* create audit activity

## 30.3 Permanent deletion

Permanent deletion requires:

* explicit high-level permission
* confirmation
* reason
* retention review
* dependency review
* legal review where relevant
* backup consideration
* audit log
* irreversible-action warning

---

# 31. Reports, Support, and Bug Management

Every user-facing report or support action must have a complete destination.

## 31.1 Report flow

```text
User reports entity
→ Report is stored
→ User receives confirmation
→ Admin report queue receives item
→ Reviewer opens entity and evidence
→ Reviewer investigates
→ Reviewer takes action
→ Resolution is recorded
→ User receives appropriate update
→ Audit history is preserved
```

## 31.2 Support flow

Support tickets must support:

* category
* subject
* message
* related entity
* priority
* status
* assignment
* user replies
* staff replies
* timestamps
* attachments when secure media is configured
* resolution
* reopening where appropriate

## 31.3 Bug management

Internal bug records must support:

* bug ID
* title
* severity
* module
* affected role
* affected route
* reproduction steps
* expected behavior
* actual behavior
* related user
* related entity
* logs or reference
* status
* assigned owner
* changed files
* fix
* verification
* reopened state
* release relation

Bugs must be clickable from related Admin entities where appropriate.

---

# 32. Billing, Subscription, Payment, and Invoice Scope

The platform may monetize:

* role-based subscription plans
* plan upgrades
* plan renewals
* Builder promotions
* approved premium capabilities

## 32.1 Plan system

A plan may define:

* role
* price
* billing period
* listing limit
* project limit
* promotion allowance
* storage allowance
* usage limits
* feature access
* trial eligibility
* active state
* display order

## 32.2 Subscription lifecycle

```text
Eligible User
→ Select Plan
→ Checkout
→ Provider Payment
→ Verified Webhook
→ Activate Subscription
→ Track Usage
→ Renew, Upgrade, Downgrade, or Cancel
```

## 32.3 Payment integrity

A subscription or promotion must not activate from client-side success alone.

Payment requires:

* server-calculated amount
* server-created order
* secure provider integration
* signature verification
* idempotent webhook handling
* payment-status storage
* reconciliation
* clear failure handling

## 32.4 Invoice integrity

An invoice may be generated only from:

* verified payment
* approved manual billing event
* valid tax and billing data

Invoices must be private and permission-protected.

---

# 33. Provider Product Scope

Supabase is the first product foundation.

Additional providers are integrated only through dedicated implementation phases.

Provider-backed areas may include:

* SMS OTP
* Email
* Payment
* Media storage
* CDN
* Error monitoring
* Analytics
* Cron
* Background jobs
* Backup and recovery

## 33.1 Provider honesty

A provider must use one of these clear states:

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

Do not mark a provider active because environment variables exist.

A provider becomes active only after a real working test.

## 33.2 Provider failure behavior

When a provider is unavailable:

* preserve user data where possible
* show an honest state
* avoid fake success
* provide retry where appropriate
* provide Admin visibility
* record diagnostics safely
* avoid exposing secrets
* keep unrelated product functionality available

---

# 34. Service-Backed Data Authority

Business data must be stored in backend services and the database.

The browser is not the authoritative source.

Server-backed data includes:

* users
* profiles
* roles
* properties
* projects
* units
* requirements
* inquiries
* leads
* messages
* notes
* follow-ups
* notifications
* moderation
* reports
* bugs
* billing
* subscriptions
* payments
* invoices
* promotions
* audit logs
* provider state
* permissions
* settings

Local storage may be used only for safe non-authoritative UX purposes such as:

* temporary unsaved form recovery
* dismissed non-critical UI
* recent non-sensitive searches
* display preferences

Server data must always win.

---

# 35. Security and Privacy Authority

Security must be enforced through:

* Supabase RLS
* server-side authorization
* validated service methods
* route protection
* secure storage access
* secure sessions
* rate limiting
* audit logs
* provider-secret protection
* safe rendering
* safe uploads
* monitoring
* incident response

## 35.1 Private data

Private data includes:

* mobile number
* private email
* private address details
* Leads
* messages
* notes
* follow-ups
* verification documents
* billing
* payments
* invoices
* internal notes
* provider settings
* audit data
* security events
* private media

Private data must never leak through:

* public HTML
* public APIs
* metadata
* structured data
* sitemaps
* search results
* logs
* notifications
* analytics
* client-side state
* cached public responses

## 35.2 Direct URL security

Every private route must be tested against:

* Guest
* wrong user
* wrong role
* suspended account
* expired session
* unauthorized staff
* missing permission

## 35.3 Abuse prevention

The platform must protect:

* OTP send
* OTP verify
* inquiry submission
* search APIs
* form submission
* uploads
* account actions
* Admin actions
* exports
* payment actions
* bulk actions

---

# 36. Audit Authority

Sensitive actions require an audit record.

An audit record may include:

* actor
* actor role
* action
* entity type
* entity ID
* previous state
* new state
* reason
* timestamp
* source route
* related moderation record
* related recovery record
* request context
* environment

Audit records must not be editable by normal users.

---

# 37. Legal and Consent Scope

The product must include:

* Terms of Service
* Privacy Policy
* Cookie and consent preferences
* Listing Policy
* Promotion Policy
* Payment Policy
* Refund and Cancellation Policy
* Marketplace Disclaimer
* Verification Disclaimer
* RERA and Builder compliance notices
* Support and grievance information

## 37.1 Required consent points

Consent may be required for:

* registration
* terms
* privacy
* OTP and data processing
* Direct Inquiry contact sharing
* property submission
* project submission
* requirement submission
* promotion submission
* payment
* marketing email where optional
* cookies and analytics where required

Consent must be:

* versioned where necessary
* stored
* attributable
* revocable where applicable
* visible to Admin only with permission

---

# 38. Apple-Inspired Product Design Authority

The visual and interaction system must be original.

It may be inspired by qualities associated with premium Apple-style product design:

* clean hierarchy
* calm spacing
* restrained use of color
* precise alignment
* strong typography
* smooth but subtle motion
* clear touch behavior
* high perceived quality
* low visual noise
* content-first presentation

The platform must not copy proprietary Apple screens or assets.

## 38.1 Real-estate suitability

The product must combine premium visual quality with:

* large readable property images
* clear prices
* clear location
* easy scanning
* trust indicators
* direct actions
* simple inquiry flow
* local Indian usability
* mobile keyboard awareness
* low-bandwidth resilience

## 38.2 UX reference rule

Leading Indian real-estate platforms may be studied for:

* search behavior
* filter behavior
* property-card information hierarchy
* project presentation
* trust patterns
* mobile navigation behavior
* result-to-detail flow

The final design must remain visually original.

---

# 39. Complete SaaS UX and Interaction Authority

For every screen, determine:

* where the user came from
* why the user entered
* what the primary goal is
* what information is required
* what the primary action is
* what secondary actions exist
* what happens after every action
* what happens after success
* what happens after failure
* how Back behaves
* how Close behaves
* how Cancel behaves
* how browser Back behaves
* what happens after refresh
* what state is preserved
* how permission denial behaves
* how mobile behaves
* how the user exits
* what happens next

## 39.1 Interaction container decisions

Use:

* full page for permanent or complex content
* modal for short focused tasks
* drawer for contextual inspection and moderate editing
* full-screen mobile sheet for focused mobile tasks
* popover for lightweight actions
* inline expansion for directly related sub-content

Do not place every interaction in a popup.

Do not place every interaction on a separate page.

## 39.2 Deep clickable wireframe rule

Every major product relationship must be navigable.

Examples:

```text
Dashboard
→ Property
→ Leads
→ Lead
→ Message
→ Related User
```

```text
Admin User
→ Project
→ Unit
→ Lead
→ Report
→ Audit
```

Every card, count, badge, status, row, relation, and metric that looks actionable must work.

---

# 40. Header, Footer, and Navigation Product Rules

The same header must not appear on every route.

The product requires:

* public homepage header
* search header
* property/project detail header
* auth header
* dashboard header
* focused task header
* Admin header
* mobile context header

The homepage city selector belongs only to the homepage context.

Authenticated application screens should not automatically show a large public footer.

Focused tasks should not show distracting public navigation.

Sticky and fixed positioning must be used only when:

* it improves the flow
* it does not cover content
* it supports safe areas
* it supports keyboard opening
* it is verified at all required widths

---

# 41. Responsive Product Requirements

Required widths include:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide displays

The following are failures:

* horizontal overflow
* clipped text
* broken wrapping
* overlapping controls
* covered content
* unreadable table
* modal outside viewport
* hidden action
* keyboard-covered action
* bottom navigation covering content
* fixed header covering anchor content
* tiny tap target
* broken safe-area spacing
* misaligned labels
* inconsistent card height without reason
* unstable skeleton
* inaccessible navigation

---

# 42. Accessibility Product Requirements

Accessibility must be built into the product.

Required:

* semantic HTML
* keyboard navigation
* visible focus
* logical tab order
* accessible labels
* accessible names for icon buttons
* form-label association
* form-error association
* modal focus trap
* Escape behavior
* reduced-motion support
* screen-reader status messages
* color contrast
* touch-target sizing
* zoom support
* non-hover access
* non-color-only status indication

---

# 43. Performance and Scale Authority

The product must be architected for high traffic.

The business may target very large usage, including up to one million concurrent or live users.

This target must not be presented as proven until measured.

The architecture must consider:

* CDN
* caching
* optimized images
* pagination
* cursor pagination
* database indexes
* query limits
* connection management
* background jobs
* queues
* rate limits
* asynchronous processing
* autoscaling
* observability
* graceful degradation
* backups
* restore
* disaster recovery
* security controls
* cost and quota monitoring

Performance targets must be measurable.

---

# 44. Reliability and Recovery Authority

The production system must include:

* monitoring
* error tracking
* uptime checks
* database monitoring
* provider monitoring
* queue monitoring
* backup
* restore test
* deployment rollback
* migration rollback or forward-fix plan
* incident response
* maintenance mode
* operational alerts
* post-deployment smoke test

No claim of production readiness is valid without real operational verification.

---

# 45. Content State Requirements

Every data-driven screen must support relevant states.

Required state categories include:

* initial loading
* skeleton loading
* background refresh
* loaded
* partial data
* first-use empty
* filtered empty
* search no results
* permission denied
* authentication required
* session expired
* setup required
* provider blocked
* network error
* server error
* validation error
* processing
* action success
* action failure
* disabled
* unsaved changes
* pending
* approved
* rejected
* changes required
* paused
* restored
* archived
* deleted

Every state must offer a useful next action where possible.

---

# 46. Product Terminology

Use consistent terminology.

Approved primary terms:

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
* Report
* Support Ticket
* Bug
* Pending Review
* Approved
* Rejected
* Changes Required
* Paused
* Restored
* Subscription
* Payment
* Invoice

Do not use different names for the same feature across unrelated modules without a real reason.

---

# 47. No Fake Product Behavior

The platform must never fake:

* users
* listings
* projects
* units
* requirements
* inquiries
* leads
* messages
* activity
* analytics
* views
* counts
* payments
* subscriptions
* invoices
* verification
* moderation
* notifications
* provider health
* OTP delivery
* email delivery
* media upload
* deployment
* load-test success
* production readiness

Development seed data must be clearly marked and isolated.

---

# 48. Production Readiness Definition

The platform is production-ready only when all applicable areas have passed:

* product implementation
* role permissions
* authentication
* database migrations
* RLS
* Direct Inquiry
* unified Leads
* property lifecycle
* project lifecycle
* unit management
* dashboards
* Admin drill-down
* moderation recovery
* billing
* provider integration
* media
* email
* SMS OTP
* payment
* security
* accessibility
* responsive design
* performance
* load testing
* monitoring
* backups
* restore
* deployment
* domain
* SSL
* rollback
* production smoke test

A successful build alone is not production readiness.

---

# 49. Implementation Authority

Every implementation phase must:

1. read `CLAUDE.md`
2. read `PROJECT_STATE.md`
3. read `FEATURE_REGISTRY.md`
4. read this document when product scope is involved
5. read the phase-specific detailed documentation
6. inspect the repository
7. inspect current code
8. inspect current database and RLS
9. inspect current provider state
10. inspect installed skills
11. create an implementation plan
12. implement code
13. create migrations
14. enforce authorization
15. update documentation
16. run automated checks
17. prepare matching verification

---

# 50. Verification Authority

Every implementation phase must be followed by its matching verification phase.

Verification must include, where relevant:

* lint
* typecheck
* tests
* production build
* migration verification
* RLS verification
* role checks
* direct URL checks
* live development server
* live browser
* mobile widths
* tablet widths
* desktop widths
* complete journey
* loading states
* empty states
* error states
* accessibility
* clipping and overflow
* console errors
* network errors
* audit records
* provider states
* recovery behavior
* documentation updates

The development server should remain running after verification when safe and supported.

---

# 51. Final Non-Negotiable Product Rules

The following rules apply to the complete project:

1. Public roles are Owner, Broker, and Builder/Developer.
2. Mobile UX is the primary authority.
3. The visual system is original and Apple-inspired.
4. The product must behave as one connected platform.
5. Public property and project contact uses Direct Inquiry.
6. Private contact data must not be publicly exposed.
7. Leads, messages, notes, follow-ups, and activity use one unified Leads workspace.
8. Property-specific and project-specific Leads must be directly accessible.
9. Project Units remain inside the parent Project context.
10. Role dashboards must be simplified.
11. Every meaningful dashboard item must drill into real data.
12. Admin must support complete linked-entity drill-down.
13. Sensitive actions require permission, reason, confirmation, and audit.
14. Moderation mistakes must be recoverable.
15. User deletion should normally be recoverable.
16. Business data must be server-backed.
17. Supabase is the first backend foundation.
18. SMS is used for OTP delivery.
19. Email is the approved external-notification channel.
20. Provider status must remain honest.
21. The homepage city selector belongs only to the homepage.
22. Search results open only after meaningful user input or selection.
23. Gujarat location uses textual hierarchy.
24. City-based SEO pages must use real approved data.
25. Builder promotions use a moderated homepage carousel.
26. Every actionable-looking element must work.
27. Every screen must provide entry, orientation, exit, success, failure, and recovery.
28. Text must never clip or overlap.
29. Fixed and sticky UI must never cover content.
30. Every implementation phase requires real verification.
31. Production readiness requires real provider, security, performance, deployment, backup, and rollback verification.

---

# 52. Document Handoff

The next detailed document must define:

* frontend and backend architecture
* service boundaries
* database entities
* relationships
* ownership and scope
* RLS
* authorization
* migrations
* indexes
* caching
* queues
* security
* scale
* backup
* observability
* recovery
* deployment architecture

---

