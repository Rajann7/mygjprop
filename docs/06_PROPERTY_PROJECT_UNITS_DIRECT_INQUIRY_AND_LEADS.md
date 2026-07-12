# `docs/06_PROPERTY_PROJECT_UNITS_DIRECT_INQUIRY_AND_LEADS.md`

# My Gujarat Property — Property, Project, Unit, Requirement, Direct Inquiry, Unified Leads, Messaging, Follow-Up, Moderation, Lifecycle, Security, Admin, and Verification Authority

This document defines the complete operational marketplace system for **My Gujarat Property**.

It is the primary authority for:

* Property creation and management
* Property drafts
* Property validation
* Property media
* Property preview
* Property moderation
* Property publication
* Property editing
* Property pause and resume
* Property soft deletion and restoration
* Builder Project creation and management
* Project drafts
* Project compliance
* Project media
* Project moderation
* Project publication
* Project Units
* Unit configurations
* Unit pricing
* Unit inventory
* Requirements
* Requirement responses
* Direct Inquiry
* contact-sharing consent
* Lead creation
* unified Leads workspace
* Property-specific Leads
* Project-specific Leads
* Unit-specific Leads
* messages
* private notes
* follow-ups
* activity timelines
* in-app notifications
* email-notification events
* reports
* support linkage
* moderation history
* recovery
* Admin and Super Admin drill-down
* RLS
* server authorization
* audit logging
* rate limiting
* lifecycle transitions
* responsive UX
* accessibility
* automated testing
* live-browser verification
* production readiness

Claude must read this document before implementing or changing:

* Property or Project posting
* Unit management
* Direct Inquiry
* Lead data
* Lead messages
* Lead statuses
* Lead notes
* Lead follow-ups
* Requirements
* moderation
* publication
* listing recovery
* entity reports
* marketplace notifications
* Admin entity-management workflows

---

# 1. Core Marketplace Operating Model

The platform’s operational marketplace consists of these primary relationships:

```text
Owner or Broker
→ Property
→ Direct Inquiry
→ Lead
→ Messages, Notes, Follow-Ups, and Activity
```

```text
Builder/Developer
→ Project
→ Project Units
→ Direct Inquiry
→ Project- or Unit-Specific Lead
→ Messages, Notes, Follow-Ups, and Activity
```

```text
Owner or Broker
→ Requirement
→ Permitted Response
→ Lead
→ Messages and Activity
```

Every core relationship must be:

* stored in the database
* protected by RLS
* protected by server authorization
* visible through the correct role-specific interface
* deeply clickable
* traceable through history
* visible to permissioned Admin users
* recoverable where appropriate
* auditable where sensitive actions occur

The system must not create disconnected records.

---

# 2. Final Entity Ownership Model

## 2.1 Property ownership

A Property belongs directly to:

* one Owner account, or
* one Broker account

The authoritative owner is stored through the final ownership fields defined by the database architecture.

A Property must not depend on an unrelated intermediate ownership structure.

## 2.2 Project ownership

A Project belongs directly to one Builder/Developer account.

## 2.3 Unit ownership

A Unit belongs to one Project.

The Unit’s effective owner is the Builder who owns the parent Project.

A Unit must never exist without a valid parent Project.

## 2.4 Requirement ownership

A Requirement belongs directly to one permitted Owner or Broker account.

## 2.5 Lead ownership

A Lead must have a clear accountable recipient or managing user.

The Lead must also preserve all relevant participants and source entities.

## 2.6 Message ownership

Every message must belong to:

* one Lead, or
* another explicitly approved private conversation context

Lead messages are never standalone public content.

---

# 3. Final Public Contact Model

The primary public contact action is:

```text
Direct Inquiry
```

The user must not be asked to choose an inquiry type.

Direct Inquiry must:

* preserve Property, Project, Unit, or Requirement context
* require authenticated identity before final submission
* use a short and understandable form
* require explicit submission
* record approved contact-sharing consent
* create or associate a real Lead
* create a real activity event
* create a real in-app notification
* create an email-notification event when email is configured
* show honest success or failure
* apply duplicate and abuse protection
* remain fully server-backed

Authentication success must return the user to the inquiry form.

Authentication must not silently submit the inquiry.

The user must review and explicitly submit the final inquiry.

---

# 4. Product Scope by Public Role

## 4.1 Owner

An Owner may:

* create Property drafts
* submit owned Properties
* manage owned Properties
* pause or resume owned Properties
* soft-delete and restore eligible owned Properties
* receive Property Direct Inquiries
* manage Property-specific Leads
* send Direct Inquiries to eligible public entities
* create approved Requirements
* manage Requirement-related activity
* access own Leads, messages, notes, follow-ups, and notifications

## 4.2 Broker

A Broker may:

* create Property listings
* save Property drafts
* submit listings
* manage owned listings
* receive listing Direct Inquiries
* manage listing-specific Leads
* create and manage approved Requirements
* respond to eligible Requirements
* manage unified Leads
* manage messages, notes, follow-ups, and activity
* submit Direct Inquiries where eligible

## 4.3 Builder/Developer

A Builder/Developer may:

* create Projects
* save Project drafts
* manage Project details
* manage Units inside each Project
* manage Unit pricing and inventory
* submit Projects for moderation
* manage approved Projects
* receive Project and Unit Direct Inquiries
* manage Project- and Unit-specific Leads
* manage messages, notes, follow-ups, and activity
* submit eligible Project promotion requests

## 4.4 Admin and Super Admin

Permissioned internal users may:

* inspect all relevant entities
* review moderation
* view linked users
* view linked Properties, Projects, Units, Requirements, and Leads
* perform permitted corrections
* reopen rejected records
* restore recoverable records
* edit permitted fields
* manage reports
* inspect security and audit history
* apply sensitive actions with reason and audit

---

# 5. Property Definition

A Property is a marketplace listing created by an Owner or Broker.

It represents a real-estate asset offered for an approved purpose.

A Property must have:

* a valid owner
* a valid public role
* a valid category
* a valid purpose
* a valid textual Gujarat location
* required descriptive information
* required pricing information or approved pricing state
* required media state
* a moderation state
* a publication state
* a lifecycle state
* ownership declaration
* policy acceptance
* history
* timestamps

---

# 6. Property Categories

The final taxonomy may support approved categories such as:

* Apartment
* Flat
* House
* Bungalow
* Villa
* Row House
* Tenement
* Farmhouse
* Residential Plot
* Commercial Plot
* Agricultural Land
* Shop
* Office
* Showroom
* Warehouse
* Industrial Shed
* Industrial Property
* Commercial Property
* Room
* PG
* Hostel
* approved additional categories

Taxonomy must be Admin-managed and database-backed.

The Property form must show only fields relevant to the selected category.

---

# 7. Property Purposes

Approved purposes may include:

* Sale
* Rent
* Lease

Purpose changes must update:

* pricing fields
* deposit fields
* recurring-charge fields
* availability language
* search filters
* public labels
* metadata
* validation

A purpose change in an existing published Property may require moderation review.

---

# 8. Property Lifecycle

The canonical Property lifecycle is:

```text
Draft
→ Submitted
→ Pending Review
→ In Review
→ Approved
→ Published
→ Paused
→ Resumed
→ Updated
→ Re-Review where required
→ Soft Deleted
→ Restored where allowed
→ Archived where applicable
```

Moderation may also produce:

* Changes Required
* Rejected
* Reopened

Lifecycle, moderation, and publication states must remain distinct where the distinction improves correctness.

---

# 9. Recommended Property Status Model

## 9.1 Draft status

Possible values:

* `draft`
* `incomplete`

## 9.2 Moderation status

Recommended values:

* `not_submitted`
* `pending_review`
* `in_review`
* `changes_required`
* `approved`
* `rejected`
* `reopened`

## 9.3 Publication status

Recommended values:

* `not_published`
* `scheduled`
* `published`
* `unpublished`

## 9.4 Lifecycle status

Recommended values:

* `active`
* `paused`
* `closed`
* `soft_deleted`
* `archived`

Exact database values must be consistent across:

* services
* UI
* filters
* Admin
* audit
* analytics
* tests

---

# 10. Property Creation Eligibility

Before opening or submitting Property creation, the server must verify:

* authenticated user
* active or eligible account state
* public role is Owner or Broker
* profile meets minimum required completion
* current plan permits creation where limits apply
* listing limit has not been exceeded
* required verification state where applicable
* no active restriction blocks posting
* required providers are available for provider-dependent steps

When eligibility fails, show the exact applicable state:

* Authentication Required
* Profile Setup Required
* Verification Required
* Plan Limit Reached
* Account Restricted
* Provider Setup Required
* Permission Denied

Do not open a broken posting flow.

---

# 11. Property Creation Entry Points

Property creation may begin from:

* public homepage Post action
* Owner dashboard
* Broker dashboard
* Properties or Listings module
* first-use empty state
* plan or usage screen
* approved Admin-assisted flow

Every entry point must lead to the same authoritative posting service.

---

# 12. Property Posting Flow

Recommended mobile-first flow:

```text
Start Property
→ Select Purpose and Category
→ Basic Details
→ Property Specifications
→ Gujarat Location and Address
→ Pricing
→ Amenities and Features
→ Media
→ Description
→ Contact and Ownership Declaration
→ Review
→ Save Draft or Submit
```

The exact number of steps may adapt by category.

Steps must remain logical and understandable.

---

# 13. Property Draft

A Property draft must be created server-side.

Draft behavior must support:

* stable draft ID
* current user ownership
* server-backed partial progress
* last saved timestamp
* save status
* resume
* step restoration
* safe auto-save where implemented
* explicit Save Draft
* validation appropriate to each completed step
* deletion of abandoned draft through controlled action
* Admin visibility only where permitted

A draft must not become public.

---

# 14. Property Auto-Save

Auto-save may be used for long posting forms.

Auto-save must:

* save only validated safe partial data
* debounce requests
* show `Saving`, `Saved`, or `Save Failed`
* prevent stale responses from overwriting newer data
* support retry
* avoid duplicate drafts
* not claim success before server confirmation
* not submit the Property
* not create public content

If auto-save is unavailable, explicit Save Draft must remain available.

---

# 15. Property Basic Details

Basic details may include:

* title
* purpose
* category
* Property type
* availability
* possession state
* Property age
* description summary

Title must be:

* meaningful
* length-controlled
* trimmed
* safe from HTML
* suitable for public display
* moderated

The system may suggest a title, but the saved title must be user-reviewed.

---

# 16. Property Specification Fields

Fields depend on category.

Possible fields include:

* bedrooms
* bathrooms
* balconies
* floor
* total floors
* carpet area
* built-up area
* super built-up area
* plot area
* area unit
* facing
* furnishing
* parking
* construction age
* possession date
* ownership type
* approved category-specific fields

The form must hide irrelevant fields.

The server must reject invalid combinations.

---

# 17. Property Area Rules

Area values must:

* be positive
* use approved units
* remain within reasonable configured bounds
* use decimal precision consistently
* support unit conversion where implemented
* display clearly
* remain searchable

Approved area units may include:

* sq ft
* sq yd
* sq m
* acre
* bigha only when a clear standardized local policy is defined
* approved additional unit

The database should store:

* original value
* original unit
* normalized comparison value where required

---

# 18. Property Pricing

Pricing may include:

* total sale price
* monthly rent
* monthly lease value
* security deposit
* maintenance
* price per unit area
* negotiable state
* approved `Price on Request` state where allowed

Money must be stored in integer minor units.

The server must validate:

* positive amount
* currency
* purpose compatibility
* range
* required pricing field
* plan or policy restrictions

The client must never be the pricing authority for fees or billing.

---

# 19. Property Location

The Property address must use:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

It may also include:

* address line
* building or society
* landmark text
* postal code

The public display address must be derived safely.

The complete private address must not automatically appear publicly.

---

# 20. Property Location Validation

The server must verify:

* each location exists
* each location is active
* parent-child relationships are valid
* the selected locality belongs to the selected City
* the City belongs to the selected Taluka or approved structure
* postal code format where required
* unsupported free-text locations are rejected or converted into a missing-location request

---

# 21. Property Amenities

Amenities must use database-backed taxonomy.

Examples may include:

* lift
* security
* power backup
* water supply
* parking
* garden
* clubhouse
* gym
* children’s play area
* fire safety
* accessibility features
* approved category-specific amenities

Amenities must not be stored as uncontrolled public HTML.

---

# 22. Property Description

Property description must:

* have length limits
* be plain text or safely sanitized approved rich text
* reject scripts and unsafe HTML
* avoid unsupported claims
* remain readable
* support paragraphs
* be moderated
* preserve original user text where policy allows
* show safe error messages

---

# 23. Property Media

Property media may include:

* primary image
* additional images
* approved floor plan
* approved supporting document where allowed

Media requires the configured media provider.

Before configuration, show:

```text
Setup Required
```

Do not show fake upload success.

---

# 24. Property Media Upload Rules

Uploads must support:

* approved image formats
* content-based validation
* server-authorized upload
* image optimization
* metadata stripping where appropriate
* orientation correction
* responsive variants
* ordering
* cover-image selection
* remove
* retry
* processing
* failure state
* moderation

Listing media must follow the platform image policy.

---

# 25. Property Image Content Rules

Property images should represent the Property accurately.

The system must reject or flag:

* unrelated images
* executable files
* malicious files
* unsupported file types
* deceptive text-heavy graphics
* prohibited branding according to listing policy
* private documents uploaded as public images
* duplicate abuse
* inappropriate content

Automated checks may assist, but moderation remains authoritative.

---

# 26. Property Media States

Recommended states:

* `pending_upload`
* `uploaded`
* `processing`
* `ready`
* `failed`
* `pending_review`
* `approved`
* `rejected`
* `removed`

A Property must not publish with required media still failed or unapproved.

---

# 27. Property Preview

Preview must use currently saved server-backed draft data.

Preview must show:

* mobile card appearance
* public detail approximation
* title
* price
* location
* facts
* description
* media
* profile summary
* disclaimer
* missing required fields

Preview must not create a public route unless using a secure authorized preview token.

---

# 28. Property Submission

Before submission, the server must validate:

* ownership
* role
* account eligibility
* plan limits
* required profile state
* required fields
* location hierarchy
* pricing
* media
* description
* ownership declaration
* policy consent
* duplicate or suspicious behavior
* current draft status

Successful submission must:

* update moderation state
* set submitted timestamp
* create moderation case
* create status-history record
* create activity event
* create in-app notification
* invalidate relevant private caches
* show clear confirmation

---

# 29. Property Submission Success

Recommended result:

```text
Property submitted for review.
```

The success screen should provide:

* current status
* expected next step
* View Property
* Return to Properties
* Post Another Property where eligible

Do not imply approval.

---

# 30. Property Moderation

Property moderation must support:

* queue
* assignment
* reviewer
* data review
* media review
* ownership declaration review
* duplicate review
* report and risk context
* approve
* reject
* request changes
* reopen
* history
* audit

---

# 31. Property Moderation Review Screen

Permissioned Admin must be able to inspect:

* full Property
* user profile
* public role
* account status
* verification
* location
* pricing
* specifications
* media
* previous submissions
* related reports
* current plan
* moderation history
* audit history
* duplicate indicators
* linked Leads if already eligible
* recovery state

The screen must be deeply clickable.

---

# 32. Property Approval

Approval requires:

* moderation permission
* server-side validation
* current eligible state
* reviewer identity
* optional internal note
* public-safe content check
* confirmation
* audit

Approval must not automatically publish if publication requirements remain incomplete.

When publication is automatic after approval, the service must explicitly perform and record both transitions.

---

# 33. Property Changes Required

Changes Required must include:

* clear user-facing reason
* affected sections
* correction instructions
* internal note separated from public reason
* resubmission action
* status history
* notification

The user must be able to:

```text
Open Property
→ Review Required Changes
→ Edit Affected Sections
→ Preview
→ Resubmit
```

---

# 34. Property Rejection

Rejection requires:

* permission
* clear user-facing reason
* internal reason where needed
* confirmation
* audit
* notification
* history

Rejection must not permanently destroy the Property.

Permissioned Admin may reopen the record later.

---

# 35. Property Reopening

Reopening a rejected Property requires:

* recovery or moderation permission
* current rejected state
* reason
* confirmation
* new moderation state
* preserved rejection history
* audit
* notification where appropriate

The original rejection must remain visible in history.

---

# 36. Property Publication

A Property may become public only when:

* moderation is approved
* publication state is published
* lifecycle state is active
* owner account is eligible
* required media is eligible
* required billing or plan state is valid
* Property is not soft-deleted
* Property is not blocked by a report or security restriction
* required cache and search updates occur

---

# 37. Property Public Eligibility Recheck

Public eligibility must be rechecked when:

* Property is requested
* owner account status changes
* subscription state changes where access depends on it
* Property is paused
* Property is edited
* media is rejected
* a serious report action occurs
* Property is soft-deleted
* moderation is revoked

Do not rely only on a stale `published` boolean.

---

# 38. Property Editing

Owner or Broker may edit an owned Property when its state allows.

Editing must:

* load current server data
* validate ownership
* show saved values
* track unsaved changes
* validate updated fields
* save server-side
* create history
* trigger re-review for sensitive public changes
* invalidate relevant cache
* show success or failure

---

# 39. Property Changes Requiring Re-Review

Changes may require re-review when they affect:

* title
* purpose
* category
* Property type
* price beyond configured threshold
* location
* description
* media
* ownership claim
* major specification
* public profile relation

The exact rules must be configurable and documented.

---

# 40. Property Pause

Pause is a reversible user action.

Pause must:

* verify ownership
* verify current state
* update lifecycle state
* remove Property from public discovery
* preserve Leads and history
* preserve draft and media
* record timestamp
* create activity
* invalidate cache and search
* show clear result

---

# 41. Property Resume

Resume must:

* verify ownership
* verify account eligibility
* verify approval remains valid
* verify media remains eligible
* verify plan state where applicable
* restore public visibility
* record history
* invalidate cache
* show success

If requirements are no longer met, show the exact blocked state.

---

# 42. Property Soft Delete

Soft Delete must:

* require confirmation
* explain impact
* verify ownership
* verify dependencies
* set deleted timestamp
* hide from normal views
* hide from public discovery
* preserve Leads
* preserve messages
* preserve billing history
* preserve audit
* create recovery eligibility
* invalidate cache and search

The user should not interpret soft deletion as immediate irreversible erasure.

---

# 43. Property Restore

Restore must:

* verify recovery permission or owner eligibility
* verify retention window
* verify current account
* verify dependent data
* determine restored lifecycle state
* preserve original deletion record
* create recovery action
* create audit
* invalidate cache
* show the resulting state

A restored Property may return to:

* Draft
* Paused
* Pending Review
* Approved but Unpublished

It must not automatically return to public visibility unless all eligibility checks pass.

---

# 44. Property Archive

Archival may be used for:

* long-closed records
* completed retention state
* historical records
* Admin-managed inactive records

Archive behavior must preserve history and access rules.

---

# 45. Property Status History

Every meaningful transition must record:

* Property ID
* previous state
* new state
* action
* actor
* reason
* timestamp
* moderation case where relevant
* recovery relation where relevant

History must be visible to:

* the Property owner, with appropriate detail
* permissioned Admin users, with full detail

---

# 46. Property-Specific Leads Entry

From Property management:

```text
Properties
→ Specific Property
→ Leads
→ Specific Lead
→ Messages, Notes, Follow-Ups, and Activity
```

The Property detail must show real Lead summaries such as:

* total Leads
* new Leads
* open Leads
* follow-ups due
* unread messages

Counts must link to filtered destinations.

---

# 47. Project Definition

A Project is a Builder/Developer development containing Project information and Project-linked Unit inventory.

A Project must have:

* one Builder owner
* Project identity
* Project type
* Gujarat location
* status
* pricing context
* possession or construction context
* compliance information where applicable
* Unit inventory
* media
* moderation
* publication
* history

---

# 48. Project Categories

Approved Project categories may include:

* Residential
* Commercial
* Industrial
* Plotting
* Mixed Use
* Township
* Apartment Project
* Villa Project
* Row House Project
* Commercial Complex
* Industrial Development
* approved additional categories

Taxonomy must be database-backed and Admin-managed.

---

# 49. Project Lifecycle

Canonical Project lifecycle:

```text
Draft
→ Basic Project Details
→ Gujarat Location
→ Compliance
→ Media
→ Units and Inventory
→ Preview
→ Submitted
→ Pending Review
→ In Review
→ Changes Required, Approved, or Rejected
→ Published
→ Paused
→ Resumed
→ Updated
→ Re-Review where required
→ Soft Deleted
→ Restored
→ Archived
```

---

# 50. Project Creation Eligibility

The server must verify:

* authenticated Builder
* active or eligible account
* minimum Builder profile completion
* required verification
* subscription or Project limit
* compliance eligibility
* provider availability for media
* no blocking restriction

When blocked, show the exact reason.

---

# 51. Project Creation Entry Points

Project creation may begin from:

* Builder dashboard
* Projects module
* first-use empty state
* approved homepage Post action
* eligible plan page
* Admin-assisted operation where permitted

---

# 52. Project Creation Flow

Recommended mobile-first structure:

```text
Start Project
→ Project Identity
→ Project Type and Status
→ Gujarat Location
→ Builder and Compliance Information
→ Amenities and Specifications
→ Media and Documents
→ Units and Inventory
→ Pricing and Possession
→ Preview
→ Submit
```

The flow must support Save Draft and Resume.

---

# 53. Project Draft

Project drafts must support:

* stable ID
* Builder ownership
* server-backed partial data
* save state
* resume
* step restoration
* Unit draft relations
* media-processing state
* compliance draft state
* safe deletion
* Admin visibility only where permitted

---

# 54. Project Identity

Project identity may include:

* Project name
* Project type
* purpose
* short description
* detailed description
* launch date
* construction status
* possession date
* phase details where supported
* total land area
* towers or wings
* number of floors
* approved public tags

Project names must be moderated.

---

# 55. Project Location

Project location uses:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

It may include:

* Project address line
* landmark
* postal code
* registered address reference where required

The public display must use approved safe address detail.

---

# 56. Project Compliance

Compliance fields may include:

* RERA applicability
* RERA registration number
* registration status
* approval authority
* approval reference
* document references
* declaration
* compliance expiry
* Project phase relation

Compliance must be treated as structured data.

Private documents must remain in protected storage.

---

# 57. Project Compliance Validation

The server must verify:

* required field presence
* format
* Project ownership
* document relation
* applicable status
* expiry where relevant
* duplicate number where relevant
* reviewer state

The system must not automatically mark compliance verified based only on user submission.

---

# 58. Project Media

Project media may include:

* cover image
* gallery images
* floor plans
* master plan
* brochure PDF
* approved Project video
* Unit-specific media

Media must use:

* secure upload
* processing
* moderation
* ordering
* public/private classification
* versioning where required
* error recovery

---

# 59. Project Preview

Preview must show:

* public Project card
* public Project detail approximation
* Builder profile relation
* location
* pricing
* Unit summary
* media
* amenities
* possession
* compliance summary
* Direct Inquiry entry
* missing required fields

Preview remains private.

---

# 60. Project Submission

Before submission, validate:

* Builder eligibility
* Project identity
* location
* required compliance
* Project status
* pricing
* media
* Unit minimum data where required
* policy consent
* duplicate Project signals
* current draft state

Successful submission must create:

* moderation case
* status history
* activity
* notification
* submitted timestamp
* Admin queue entry

---

# 61. Project Moderation

Project moderation must inspect:

* Builder profile
* Builder verification
* Project details
* location
* compliance
* media
* Unit configurations
* inventory
* pricing
* possession
* previous submissions
* reports
* billing or plan eligibility
* promotion relation where applicable
* audit history

---

# 62. Project Approval

Approval requires:

* Project moderation permission
* valid current state
* complete required Project data
* eligible Builder account
* compliant public-safe content
* reviewer identity
* confirmation
* audit

Publication may occur in the same controlled service only when every publication condition passes.

---

# 63. Project Changes Required

The Builder must receive:

* clear reason
* affected Project sections
* affected Units where applicable
* required correction
* resubmission path
* status history
* notification

---

# 64. Project Rejection and Reopening

Rejection must preserve the complete record.

Permissioned Admin may reopen a rejected Project.

The process must:

* record reason
* preserve previous rejection
* return the Project to review or correction
* create audit
* update notifications
* preserve Unit data

---

# 65. Project Publication Eligibility

A Project is public only when:

* moderation approved
* publication enabled
* lifecycle active
* Builder account eligible
* public profile eligible where required
* required media approved
* compliance state valid
* required Unit information valid
* not soft-deleted
* no blocking report or restriction

---

# 66. Project Editing

Builder may edit owned Project data when allowed.

Editing must:

* preserve current Units
* validate ownership
* validate updated fields
* create history
* trigger re-review for sensitive changes
* invalidate cache and search
* update public profile relations
* show success or failure

---

# 67. Project Pause and Resume

Pause must remove public discovery while preserving:

* Units
* Leads
* messages
* notes
* follow-ups
* billing
* history
* promotion relation

Resume must revalidate:

* Project approval
* Builder eligibility
* compliance
* media
* Unit state
* subscription
* active restriction

---

# 68. Project Soft Delete

Soft Delete must be dependency-aware.

It must preserve:

* Units
* Leads
* messages
* payment records
* promotions
* moderation
* reports
* audit

Public visibility and promotion eligibility must stop immediately.

---

# 69. Project Restore

Restore must determine:

* Builder eligibility
* Project approval state
* Unit state
* compliance validity
* promotion state
* public eligibility
* retention eligibility

The Project must return to an appropriate non-public state until checks pass.

---

# 70. Project Status History

Every transition must record:

* Project
* previous state
* new state
* action
* actor
* reason
* timestamp
* moderation relation
* recovery relation

---

# 71. Project-Specific Leads Entry

Required flow:

```text
Projects
→ Specific Project
→ Leads
→ Specific Lead
→ Related Unit where applicable
→ Messages, Notes, Follow-Ups, and Activity
```

Project summary cards and counts must open real filtered Lead views.

---

# 72. Project Unit Definition

A Unit is Project-linked inventory.

A Unit must not function as an unrelated standalone entity.

The Unit must display its parent Project in:

* Builder management
* public Project detail
* Lead detail
* Admin detail
* audit
* reports
* notifications

---

# 73. Unit Configuration

A Unit may include:

* configuration
* Unit type
* Unit label
* tower or wing
* floor
* bedrooms
* bathrooms
* area
* area unit
* price
* price status
* inventory total
* inventory available
* possession
* description
* floor plan
* lifecycle state

---

# 74. Unit Lifecycle

Recommended Unit states:

* `draft`
* `active`
* `paused`
* `unavailable`
* `reserved`
* `sold`
* `soft_deleted`
* `archived`

Unit moderation may be inherited from Project or independently reviewed where configured.

---

# 75. Unit Creation

Unit creation must occur inside:

```text
Builder Project
→ Units
→ Add Unit
```

Before creation, verify:

* Builder owns Project
* Project is editable
* Unit limit or plan permits creation
* required fields
* valid pricing
* valid area
* valid inventory
* valid configuration

---

# 76. Unit Duplicate Handling

The service must detect accidental duplicate Units using relevant fields such as:

* Project
* configuration
* tower
* floor
* Unit label
* area

The UI may offer:

* create another inventory group
* merge inventory
* cancel
* continue with explicit confirmation where valid

---

# 77. Unit Inventory

Inventory fields may include:

* total inventory
* available inventory
* reserved inventory
* sold inventory
* blocked inventory
* unavailable inventory

Database constraints must ensure:

* values are non-negative
* category totals remain consistent
* available does not exceed total
* sold and reserved transitions are controlled
* updates create inventory events

---

# 78. Unit Inventory Events

Every inventory change should record:

* Unit
* previous inventory
* new inventory
* action
* reason
* actor
* timestamp
* related transaction or Admin action where applicable

Do not overwrite inventory without history.

---

# 79. Unit Pricing

Unit pricing may include:

* base price
* price range
* price per area
* additional charges summary
* negotiable state where approved
* effective date

Pricing changes must:

* validate integer minor units
* create price history
* update public Project summary
* invalidate cache
* trigger review when configured

---

# 80. Unit Price History

Price history should include:

* Unit ID
* previous price
* new price
* currency
* effective timestamp
* actor
* reason
* source
* moderation relation where applicable

Public display of price history is not required unless explicitly approved.

---

# 81. Unit Public Visibility

A Unit is publicly visible only when:

* parent Project is public
* Unit is active
* Unit is not soft-deleted
* inventory or availability permits display
* pricing is valid
* public data is approved
* no blocking restriction exists

---

# 82. Unit Pause and Resume

Pause removes the Unit from active public availability.

Resume must revalidate:

* parent Project
* Builder account
* inventory
* price
* Unit media
* moderation state

---

# 83. Unit Soft Delete and Restore

Soft deletion must preserve:

* Project relation
* Lead relation
* inquiry relation
* price history
* inventory events
* media
* audit

Restore must preserve original deletion history.

---

# 84. Unit-Specific Direct Inquiry

A public user may select a specific Unit before sending a Direct Inquiry.

The inquiry must preserve:

* Project ID
* Unit ID
* Builder recipient
* configuration
* public Unit context
* consent
* message

The resulting Lead must visibly show:

```text
Project
→ Unit
→ Inquiry
```

---

# 85. Requirement Definition

A Requirement represents a user’s approved real-estate need.

It may be created by an Owner or Broker according to final permission rules.

A Requirement may include:

* purpose
* Property category
* Property type
* preferred city
* preferred locality
* budget range
* area range
* configuration
* possession preference
* urgency
* description
* expiry
* contact-sharing consent
* moderation
* lifecycle

---

# 86. Requirement Lifecycle

Recommended lifecycle:

```text
Draft
→ Submitted
→ Pending Review
→ Approved
→ Active
→ Responded
→ Paused
→ Closed
→ Expired
→ Renewed
→ Soft Deleted
→ Restored
```

Moderation may also produce:

* Changes Required
* Rejected
* Reopened

---

# 87. Requirement Creation

The form must:

* be mobile-first
* show only relevant fields
* use Gujarat location data
* validate budget
* validate purpose
* validate category
* record consent
* support draft
* support preview
* support submission

---

# 88. Requirement Visibility

Requirement visibility must be role- and permission-aware.

The public or eligible feed must expose only safe fields.

It must not expose private contact information.

---

# 89. Requirement Response

A permitted response may include:

* related Property
* related Project
* related Unit where applicable
* short message
* response status
* sender
* Requirement
* resulting Lead relation

The response must create or associate real Lead activity.

---

# 90. Requirement Expiry

Requirement expiry must be handled by a real scheduled job.

When the scheduler is not configured, the system must show:

```text
Setup Required
```

Expiry processing must be:

* idempotent
* observable
* auditable
* safe for retries
* visible in Admin

---

# 91. Requirement Renewal

Renewal must:

* verify owner
* verify current state
* update expiry
* preserve previous expiry history
* revalidate moderation where required
* create notification and activity
* enforce plan or policy limits

---

# 92. Direct Inquiry Entry Points

Direct Inquiry may begin from:

* Property card
* Property detail
* Project card
* Project detail
* selected Unit
* related content
* public profile through an eligible entity
* saved Property or Project

The entry must preserve exact context.

---

# 93. Direct Inquiry Authentication Gate

When a Guest selects Direct Inquiry:

```text
Open Inquiry
→ Preserve Entity
→ Open Contextual Authentication
→ Login or Register
→ Return to Entity
→ Reopen Inquiry Form
→ User Reviews
→ User Explicitly Submits
```

Do not auto-submit after authentication.

---

# 94. Direct Inquiry Form

The form should remain short.

Recommended fields:

* authenticated user name
* verified mobile display
* registered email
* message
* optional preferred contact time where approved
* contact-sharing consent
* source summary

The user must be able to review the target:

* Property
* Project
* Unit
* Requirement

---

# 95. Direct Inquiry Default Message

The system may suggest a message.

Example:

```text
I am interested in this Property. Please contact me with more details.
```

The user must be able to edit the message.

The message must be validated and sanitized.

---

# 96. Direct Inquiry Contact Consent

Before submission, show a clear consent statement.

Example:

```text
By sending this inquiry, you agree to share your registered contact details with the listing recipient for this inquiry.
```

Consent must record:

* user
* version
* source entity
* timestamp
* accepted state

---

# 97. Direct Inquiry Submission Transaction

Submission must perform a transaction that:

1. authenticates the sender
2. validates account status
3. validates source entity
4. validates source public eligibility
5. resolves recipient
6. validates message
7. validates consent
8. checks rate limits
9. checks duplicate/idempotency key
10. creates Direct Inquiry
11. creates or associates Lead
12. creates initial Lead message or inquiry event
13. creates activity event
14. writes notification/outbox event
15. returns safe success

---

# 98. Direct Inquiry Idempotency

Idempotency must prevent:

* double taps
* browser retries
* slow-network duplicate submissions
* repeated form submission
* duplicated background retry

Use:

* idempotency key
* sender
* source entity
* time window
* unique constraint where appropriate

A valid later follow-up must remain possible.

---

# 99. Direct Inquiry Duplicate Protection

Duplicate detection may consider:

* sender
* recipient
* source entity
* recent open Lead
* recent message
* time window

When a recent Lead already exists, the product may:

* open the existing Lead
* append a new message after user confirmation
* show that an inquiry already exists

Do not silently discard the user’s intent.

---

# 100. Direct Inquiry Rate Limiting

Rate limits must consider:

* sender user ID
* session
* IP
* source entity
* recipient
* time window
* total daily volume
* suspicious repetition

When limited:

* show a safe message
* preserve the form
* provide retry timing where appropriate
* record a security event

---

# 101. Direct Inquiry Success

Success must confirm:

* inquiry was stored
* recipient context
* next step
* Lead availability where appropriate

Recommended:

```text
Inquiry sent successfully.
```

Possible next actions:

* View Lead
* Continue Browsing
* Return to Property or Project

Do not display recipient private details outside the authorized Lead context.

---

# 102. Direct Inquiry Failure

Failure must preserve:

* message
* source entity
* consent selection where safe

Possible states:

* validation error
* rate limited
* source unavailable
* recipient unavailable
* account restricted
* network error
* server error

Do not show false success.

---

# 103. Contact Data Sharing

After successful inquiry, approved contact data may become visible to the authorized recipient inside the private Lead.

The service must define which fields are shared.

Recommended:

* full name
* verified mobile
* registered email where approved
* message

Contact sharing must not occur publicly.

---

# 104. Lead Definition

A Lead is a private operational record created from an approved marketplace interaction.

A Lead must preserve:

* source
* sender
* recipient
* related entity
* status
* unread state
* messages
* notes
* follow-ups
* activity
* timestamps
* ownership
* privacy
* Admin relation

---

# 105. Lead Sources

Approved Lead sources may include:

* Property Direct Inquiry
* Project Direct Inquiry
* Unit Direct Inquiry
* Requirement response
* approved platform-created operational conversion
* Admin-assisted creation where explicitly permitted and audited

Every Lead must have a real source.

---

# 106. Lead Participants

A Lead may include:

* sender/contact
* recipient/manager
* permissioned internal observer
* system event actor

Participants must be explicitly represented.

A user must not gain Lead access solely because they know the Lead ID.

---

# 107. Lead Ownership

The Lead’s managing owner is the user responsible for handling it.

For marketplace inquiries:

* Property Lead owner is the Property owner
* Project or Unit Lead owner is the Builder
* Requirement-related Lead owner follows the approved response model

Ownership changes by Admin require:

* permission
* reason
* audit
* notification where appropriate

---

# 108. Unified Leads Workspace

Owner, Broker, and Builder must use a unified Leads workspace.

It must consolidate:

* inquiry source
* Lead list
* messages
* private notes
* follow-ups
* status
* activity
* related entity
* unread state
* priority
* contact details according to permission

The workspace must not split related activity into disconnected modules.

---

# 109. Leads Workspace Entry Points

Leads may be opened from:

* role dashboard
* bottom navigation
* desktop navigation
* Property management
* Project management
* Unit management
* Requirement management
* notification
* search within dashboard
* Admin User detail
* Admin entity detail

Every entry must preserve relevant filters and source context.

---

# 110. Lead List

Lead list items should include:

* contact name
* source entity
* source type
* status
* unread indicator
* last message preview
* last activity
* next follow-up
* priority
* timestamp

Every Lead row or card must open Lead detail.

---

# 111. Lead Filters

Approved filters may include:

* status
* source type
* Property
* Project
* Unit
* Requirement
* unread
* priority
* follow-up due
* date range
* city context where useful
* archived state

Filters must be server-backed.

---

# 112. Lead Search

Lead search may support:

* contact name
* source entity title
* Lead reference
* approved contact field for authorized users
* message-safe indexed excerpt where policy permits

Search must respect access control.

---

# 113. Lead Sorting

Approved sorting may include:

* most recent activity
* oldest activity
* newest Lead
* follow-up due
* priority
* unread first

Sorting must be deterministic and server-backed.

---

# 114. Lead List State Preservation

When opening and returning from Lead detail, preserve:

* search
* filters
* sorting
* tab
* pagination or cursor
* scroll
* selected Lead where useful

---

# 115. Lead Detail Structure

Lead detail may include:

1. Lead summary
2. contact summary
3. source entity
4. status
5. priority
6. next follow-up
7. message thread
8. private notes
9. activity timeline
10. report or support action
11. related entity links
12. Admin-specific sections where permitted

---

# 116. Lead Source Summary

The source summary must be clickable.

Examples:

```text
Lead
→ Property
```

```text
Lead
→ Project
→ Unit
```

```text
Lead
→ Requirement
→ Response
```

When the source is unavailable, show a controlled state without exposing deleted private data.

---

# 117. Lead Status Model

Recommended statuses:

* `new`
* `open`
* `in_progress`
* `follow_up`
* `qualified`
* `closed`
* `archived`

The exact status catalog must remain simple.

---

# 118. Lead Status Transition Rules

Possible transitions:

```text
New
→ Open
→ In Progress
→ Follow-Up
→ Qualified
→ Closed
→ Archived
```

Reopening may be allowed:

```text
Closed
→ Open
```

Every transition must:

* verify permission
* validate current state
* create status history
* create activity
* update metrics
* show feedback
* audit sensitive Admin changes

---

# 119. Lead Priority

Optional priorities:

* Low
* Normal
* High
* Urgent

Priority must not be automatically inferred without defined logic.

Priority changes must create activity.

---

# 120. Lead Messages

Messages belong to a Lead.

Messages must support:

* text
* sender
* timestamp
* unread state
* delivery state
* retry
* edited state where allowed
* deleted state where policy allows
* attachment only when secure media is configured

Messages must not be public.

---

# 121. Message Sending

Message send flow:

1. authenticate sender
2. validate Lead access
3. validate active account
4. validate Lead state
5. validate message
6. apply rate limit
7. create message
8. update Lead last activity
9. create activity event
10. create notification event
11. return safe message data

---

# 122. Message Validation

Messages must:

* have meaningful content
* stay within length limits
* reject unsafe HTML
* be sanitized
* reject unsupported file content
* support Unicode
* preserve paragraphs
* avoid logging full message body unnecessarily

---

# 123. Message Delivery States

Recommended states:

* `sending`
* `sent`
* `failed`
* `read`

`Sending` is a client-side temporary state.

`Sent` requires server persistence.

`Read` requires real read-state update.

Do not display delivery claims from fake local state.

---

# 124. Message Retry

When message sending fails:

* keep the unsent message visible to the sender
* label it Failed
* provide Retry
* prevent duplicate successful retry
* preserve typed content
* show safe error

---

# 125. Message Read State

Read state must be participant-specific.

A message becomes read when:

* the permitted recipient opens the relevant Lead/message context
* the server records the read timestamp

Unread counts must be real.

---

# 126. Message Editing

Editing may be allowed only within configured rules.

If allowed:

* verify sender
* enforce time limit where applicable
* preserve edit timestamp
* preserve audit/history where required
* notify participants only when appropriate

---

# 127. Message Deletion

Message deletion should normally be soft deletion.

The UI may display:

```text
Message removed
```

Internal audit may preserve required metadata.

Sensitive content handling must follow legal and privacy policy.

---

# 128. Message Attachments

Attachments are enabled only when the media provider and security checks are configured.

Allowed attachments must define:

* file types
* size policy
* scanning
* private storage
* signed access
* retention
* deletion
* participant permissions

Before setup, show honest disabled or Setup Required behavior.

---

# 129. Private Lead Notes

Notes are operational and private by default.

A Note must include:

* Lead
* author
* body
* visibility scope
* created timestamp
* edited timestamp where allowed
* soft-delete state where allowed

---

# 130. Note Visibility

Possible scopes:

* `lead_owner_private`
* `internal_staff_private`
* `shared_with_authorized_participants`

Use the narrowest required scope.

Do not expose internal notes to public participants.

---

# 131. Note Editing

Note editing must:

* verify author or permission
* preserve edit history where required
* create activity if useful
* avoid silent overwriting
* show success or failure

---

# 132. Lead Follow-Ups

A Follow-Up may include:

* title or note
* due date
* due time
* owner
* status
* priority
* completion state
* completed timestamp
* activity relation
* reminder-notification state

---

# 133. Follow-Up States

Recommended:

* `scheduled`
* `due`
* `overdue`
* `completed`
* `cancelled`

State may be derived partly from time and explicit completion.

---

# 134. Follow-Up Creation

The user must be able to:

```text
Lead
→ Add Follow-Up
→ Set Date and Time
→ Add Note
→ Save
```

The service must:

* validate Lead access
* validate date
* create Follow-Up
* update next-follow-up summary
* create activity
* create notification schedule when configured

---

# 135. Follow-Up Reminder

In-app reminder may be generated through a scheduled job.

Email reminder may be generated when email is configured.

The Follow-Up record must remain valid even if notification delivery fails.

---

# 136. Follow-Up Completion

Completion must:

* record actor
* record completion timestamp
* update Lead summary
* create activity
* optionally prompt for next action
* preserve history

---

# 137. Lead Activity Timeline

The timeline must use real events.

Possible events:

* inquiry created
* Lead created
* Lead opened
* status changed
* priority changed
* message sent
* message read
* note added
* note edited
* follow-up created
* follow-up completed
* source entity paused
* source entity restored
* report created
* Admin correction
* Lead closed
* Lead reopened
* Lead archived

---

# 138. Activity Event Requirements

Each event should include:

* event type
* Lead
* actor
* timestamp
* related entity
* safe summary
* metadata
* visibility scope

Do not include secrets or unnecessary private data in generic event metadata.

---

# 139. Lead Archive

Archive removes a Lead from active default views while preserving:

* messages
* notes
* follow-ups
* activity
* source relation
* audit

Archive must be reversible where policy permits.

---

# 140. Lead Close and Reopen

Closing a Lead must:

* require explicit action
* record status
* preserve history
* allow reopening where permitted
* update dashboard metrics
* create activity

---

# 141. Lead Export

Lead export may be available only to permissioned users and approved plans.

Export must:

* verify permission
* respect scope
* exclude unauthorized private fields
* rate limit
* create audit
* use expiring download
* show processing
* handle large datasets asynchronously
* respect privacy and consent

---

# 142. Lead Notifications

In-app notifications may be generated for:

* new inquiry
* new message
* Follow-Up due
* Lead status changed
* Lead reopened
* report update
* Admin action affecting Lead

Each notification must link to the exact Lead or related entity.

---

# 143. Email Lead Notifications

When email is active, approved events may include:

* new inquiry
* new message summary
* Follow-Up reminder
* Lead status change where useful

Email must:

* avoid exposing excessive private data
* use secure destination links
* log delivery status
* retry safely
* remain secondary to the server-backed Lead

---

# 144. Lead Notification Failure

Notification failure must not roll back the Lead or message.

The system must:

* preserve the business event
* record delivery failure
* retry where configured
* show Admin provider state
* avoid fake delivery success

---

# 145. Reporting a Lead or Message

Participants may report:

* spam
* abusive content
* suspected fraud
* inappropriate contact
* other approved reason

The report must preserve:

* Lead
* message where applicable
* reporter
* reported user
* reason
* evidence reference
* timestamp
* status

---

# 146. Lead Report Admin Flow

Required flow:

```text
Lead Report
→ Admin Queue
→ Report Detail
→ Lead
→ Message
→ Participants
→ Source Entity
→ Security and Report History
→ Resolve
→ Record Action
→ Notify as Appropriate
```

---

# 147. Property and Project Reports

Public users may report eligible public entities.

A report must include:

* entity
* reporter
* reason
* optional note
* optional secure evidence
* timestamp
* status

Report submission must create a real Admin destination.

---

# 148. Report Statuses

Recommended:

* `submitted`
* `triaged`
* `in_review`
* `action_required`
* `resolved`
* `dismissed`
* `reopened`

---

# 149. Report Resolution

Resolution may result in:

* no action
* warning
* request changes
* pause entity
* remove media
* restrict account
* reopen moderation
* suspend account
* escalate security review

Sensitive actions require permission, reason, confirmation, audit, and recovery where appropriate.

---

# 150. Property and Project Notification Events

Approved notifications may include:

* draft reminder where configured
* submission received
* review started
* changes required
* approved
* rejected
* published
* paused
* resumed
* restored
* report update
* plan limit issue
* media processing failure

Every notification must have a real destination.

---

# 151. Moderation Notification Destination

A moderation notification should open:

```text
Property or Project Management
→ Relevant Entity
→ Moderation Status
→ Required Changes or History
```

Do not open a generic dashboard.

---

# 152. Admin Property Management Graph

Required Admin navigation:

```text
Admin Properties
→ Property
→ Owner or Broker
→ Public Profile
→ Media
→ Moderation
→ Leads
→ Specific Lead
→ Messages and Activity
→ Reports
→ Billing Relation
→ Audit
→ Recovery
```

---

# 153. Admin Project Management Graph

Required Admin navigation:

```text
Admin Projects
→ Project
→ Builder
→ Units
→ Specific Unit
→ Project or Unit Leads
→ Promotion
→ Compliance
→ Reports
→ Moderation
→ Billing
→ Audit
→ Recovery
```

---

# 154. Admin Lead Management Graph

Required Admin navigation:

```text
Admin Leads
→ Lead
→ Contact User
→ Managing User
→ Source Property, Project, Unit, or Requirement
→ Messages
→ Notes according to permission
→ Follow-Ups
→ Reports
→ Security Events
→ Audit
```

---

# 155. Admin Contextual Property Editing

Permissioned Admin may edit permitted Property fields.

Use:

* inline edit for small safe metadata
* modal for short focused changes
* drawer for contextual inspection
* dedicated page for complex Property correction

Every sensitive edit requires:

* reason
* validation
* before/after diff
* audit
* notification where appropriate
* moderation impact review
* recovery plan

---

# 156. Admin Contextual Project Editing

Complex Project changes should use a dedicated page or structured drawer.

Admin must not edit Project and Unit data through one overloaded popup.

---

# 157. Admin Lead Editing

Permissioned Admin may:

* change status
* correct ownership where policy permits
* archive or restore
* resolve reports
* revoke abusive access

Admin must not impersonate a participant or send misleading messages as that participant.

---

# 158. Admin Bulk Actions

Bulk actions may include:

* assign moderation cases
* pause selected records
* request changes
* archive eligible records
* export permitted data

Bulk actions require:

* explicit permission
* selected-record preview
* impact summary
* reason
* confirmation
* partial-failure handling
* per-record audit or batch-linked audit
* recovery where possible

---

# 159. Admin Moderation Recovery

Permissioned Admin must be able to correct mistakes.

Examples:

```text
Rejected Property
→ Reopen
→ Review
→ Approve
```

```text
Paused Project
→ Review Restriction
→ Resume
```

```text
Deleted Unit
→ Recovery Center
→ Restore
```

The original history must remain intact.

---

# 160. Admin Alignment and Responsive Rules

All management interfaces must use:

* consistent page grid
* stable tabs or section navigation
* aligned labels
* readable values
* responsive tables
* mobile cards
* safe sticky headers
* safe action bars
* no content overlap
* no clipped titles
* no hidden actions
* no excessively small controls

---

# 161. Property Database Model

The exact schema must be finalized through migrations.

Recommended tables:

* `properties`
* `property_details`
* `property_amenities`
* `property_media`
* `property_status_history`
* `property_drafts`
* `saved_properties`

Core Property fields should include:

* ID
* owner user ID
* owner role
* purpose
* category
* type
* title
* description
* price
* currency
* location IDs
* address fields
* moderation status
* publication status
* lifecycle status
* timestamps
* soft-delete fields

---

# 162. Project Database Model

Recommended tables:

* `projects`
* `project_details`
* `project_phases`
* `project_amenities`
* `project_media`
* `project_documents`
* `project_status_history`
* `project_drafts`
* `project_units`
* `unit_media`
* `unit_price_history`
* `unit_inventory_events`

---

# 163. Requirement Database Model

Recommended tables:

* `requirements`
* `requirement_drafts`
* `requirement_responses`
* `requirement_status_history`

---

# 164. Direct Inquiry Database Model

Recommended fields:

```text
direct_inquiries
- id
- sender_user_id
- recipient_user_id
- source_type
- property_id
- project_id
- unit_id
- requirement_id
- message
- contact_consent_version
- consented_at
- status
- idempotency_key
- created_at
- updated_at
```

The database must enforce valid source relationships.

---

# 165. Lead Database Model

Recommended fields:

```text
leads
- id
- source_type
- source_id
- inquiry_id
- owner_user_id
- contact_user_id
- property_id
- project_id
- unit_id
- requirement_id
- status
- priority
- last_activity_at
- next_follow_up_at
- closed_at
- archived_at
- created_at
- updated_at
```

---

# 166. Lead Supporting Tables

Recommended:

* `lead_participants`
* `lead_messages`
* `lead_message_reads`
* `lead_notes`
* `lead_follow_ups`
* `lead_activity_events`
* `lead_status_history`
* `lead_reports`
* `lead_exports`

---

# 167. Database Constraints

Required constraints include:

* valid owner role
* Property owner exists
* Project Builder exists
* Unit Project exists
* Unit inventory non-negative
* Unit available inventory not above total
* Direct Inquiry source valid
* recipient matches source ownership
* Lead source valid
* message Lead exists
* follow-up Lead exists
* consent version exists
* money non-negative
* valid status
* no duplicate active saved item
* no duplicate idempotency key

---

# 168. Database Indexes

Indexes should support:

* user-owned Property list
* Builder Project list
* Project Unit list
* moderation queues
* public eligibility
* city search
* Property Lead list
* Project Lead list
* Unit Lead list
* Lead owner and status
* Lead last activity
* Follow-Up due date
* unread messages
* Direct Inquiry duplicate detection
* report queue
* soft-delete filters

Index design must use real query plans.

---

# 169. Property RLS

Public users may read only public-safe eligible Properties.

Owner or Broker may:

* create according to role
* read own Properties in every lifecycle state
* update eligible owned Properties
* pause or resume owned Properties
* soft-delete eligible owned Properties
* request restore according to policy

Users may not manage another user’s Property.

---

# 170. Project and Unit RLS

Builder may:

* create Projects
* read all owned Projects
* update eligible owned Projects
* manage Units belonging to owned Projects
* read owned Unit history

Public users may read only public-safe eligible Project and Unit data.

---

# 171. Requirement RLS

Requirement owner may:

* create
* read
* update
* pause
* close
* soft-delete eligible owned Requirements

Eligible responders may read only safe fields and create permitted responses.

---

# 172. Direct Inquiry RLS

Sender may:

* create through trusted service
* read own submitted inquiry where product UX provides it

Recipient may:

* read inquiries addressed to their eligible entities

Neither may alter protected source or consent fields directly.

---

# 173. Lead RLS

Lead access may be granted to:

* Lead owner
* authorized participant
* permissioned internal user
* Super Admin

A wrong user must not read:

* Lead
* messages
* notes
* contact
* activity
* Follow-Ups

---

# 174. Message RLS

A message may be read only by:

* authorized Lead participants
* permissioned internal users according to privacy rules

A message may be created only by an authorized active participant.

---

# 175. Note RLS

Private owner notes may be read by:

* Lead owner
* explicitly permissioned internal user

Internal notes may be read only by authorized internal users.

---

# 176. Follow-Up RLS

Follow-Ups may be managed by:

* Lead owner
* authorized internal user

Contact participants must not see private operational Follow-Ups unless the product explicitly shares them.

---

# 177. RLS Test Matrix

For every relevant table, test:

* Guest read
* Guest write
* correct owner read
* correct owner update
* wrong user read
* wrong user update
* wrong role
* paused account
* suspended account
* staff without permission
* staff with permission
* Super Admin
* trusted server role

---

# 178. Server Authorization

RLS is not sufficient.

Every mutation service must verify:

* authentication
* account status
* role
* ownership
* permission
* entity state
* plan limit
* provider availability
* input
* rate limit
* idempotency
* audit requirement

---

# 179. Service Boundaries

Recommended services:

```text
property-service
property-moderation-service
project-service
project-moderation-service
unit-service
inventory-service
requirement-service
direct-inquiry-service
lead-service
message-service
note-service
follow-up-service
activity-service
notification-service
report-service
recovery-service
```

UI must not directly manipulate protected tables.

---

# 180. Property Service Responsibilities

The Property service must support:

* create draft
* load draft
* update draft
* validate
* preview
* submit
* edit
* pause
* resume
* soft delete
* restore request
* load management detail
* load public-safe detail
* list owned Properties
* create history
* invalidate cache

---

# 181. Project Service Responsibilities

The Project service must support:

* create draft
* update draft
* manage compliance
* manage media references
* preview
* submit
* edit
* pause
* resume
* soft delete
* restore
* public-safe load
* management load
* status history

---

# 182. Unit Service Responsibilities

The Unit service must support:

* create
* edit
* validate Project ownership
* update price
* update inventory
* pause
* resume
* soft delete
* restore
* list by Project
* public-safe summary
* create history

---

# 183. Direct Inquiry Service Responsibilities

The Direct Inquiry service must:

* authenticate
* validate source
* resolve recipient
* validate consent
* validate message
* enforce limits
* enforce idempotency
* create inquiry
* create Lead
* create activity
* schedule notifications
* return safe result

---

# 184. Lead Service Responsibilities

The Lead service must:

* list scoped Leads
* load Lead detail
* update status
* update priority
* archive
* reopen
* load source relation
* update last activity
* calculate real summaries
* enforce access
* create history

---

# 185. Message Service Responsibilities

The Message service must:

* validate participant
* create message
* manage read state
* retry safely
* edit where permitted
* soft delete where permitted
* create activity
* schedule notification
* apply rate limit

---

# 186. Follow-Up Service Responsibilities

The Follow-Up service must:

* create
* update
* complete
* cancel
* calculate due state
* schedule reminder event
* update Lead summary
* create activity

---

# 187. Moderation Service Responsibilities

The moderation service must:

* create cases
* assign reviewer
* load entity snapshot
* validate action
* approve
* reject
* request changes
* reopen
* preserve history
* create audit
* notify submitter
* invalidate cache

---

# 188. Recovery Service Responsibilities

The recovery service must:

* load recoverable records
* verify permission
* verify retention
* preview impact
* restore
* preserve deletion/rejection history
* create recovery record
* create audit
* notify affected user
* invalidate cache

---

# 189. Transaction Requirements

Use database transactions for:

* Direct Inquiry and Lead creation
* moderation decision and status history
* Property submission and moderation-case creation
* Project submission and moderation-case creation
* Unit inventory update and inventory event
* status transition and activity
* restore and recovery record
* role or Admin ownership correction where relevant

Do not keep transactions open during long provider calls.

---

# 190. Outbox Events

Use an outbox or equivalent reliable event pattern for:

* in-app notification
* email notification
* reminder
* cache invalidation job where asynchronous
* analytics event
* provider delivery

The business transaction must succeed independently of optional notification delivery.

---

# 191. Provider Dependencies

Provider-dependent capabilities include:

* image storage
* image processing
* brochure storage
* email
* scheduled reminders
* scheduled expiry
* asynchronous export

Each provider must show an honest state:

* Setup Required
* Configured Not Tested
* Test Mode
* Active
* Live Ready
* Failed
* Degraded
* Disabled

---

# 192. In-App Notifications

In-app notifications are database-backed and do not require an external notification provider.

They must include:

* recipient
* category
* title
* message
* entity
* destination
* read state
* timestamp

---

# 193. Email Provider Behavior

Email is used for approved external notifications.

When email is unavailable:

* the Lead remains valid
* the inquiry remains valid
* the in-app notification remains valid
* delivery status shows failure or Setup Required
* no fake email success is shown

---

# 194. Scheduled Job Dependencies

Scheduled jobs may be required for:

* Follow-Up reminders
* Requirement expiry
* promotion expiry
* stale draft cleanup
* asynchronous export cleanup
* notification retries

Jobs must be:

* idempotent
* observable
* locked against overlapping execution
* retryable
* visible in Admin

---

# 195. Security Controls

Required protections include:

* server validation
* RLS
* ownership checks
* rate limiting
* inquiry duplicate prevention
* message spam prevention
* input sanitization
* upload validation
* private-media access
* secure error handling
* audit
* security events
* export controls

---

# 196. Privacy Controls

Private data includes:

* sender mobile
* sender email
* Lead messages
* notes
* Follow-Ups
* private address
* documents
* moderation notes
* reports
* security events

Private data must not appear in:

* public Property HTML
* public Project HTML
* metadata
* structured data
* sitemaps
* public search payloads
* public analytics
* logs
* public cache

---

# 197. Rate-Limit Categories

Rate limiting is required for:

* Property draft creation
* Project draft creation
* Property submission
* Project submission
* Direct Inquiry
* message send
* report submission
* media upload authorization
* export
* Admin bulk action

---

# 198. Audit Requirements

Audit is required for:

* moderation approve
* reject
* request changes
* reopen
* Admin edit
* pause by Admin
* resume by Admin
* soft delete by Admin
* restore
* Lead ownership correction
* sensitive status change
* export
* report resolution
* inventory correction
* price correction
* compliance change

---

# 199. Public and Private Caching

Public cache may include:

* approved Property detail
* approved Project detail
* public Unit summaries
* public cards

Private Lead data must not use shared public cache.

After mutation, invalidate relevant:

* public detail
* public search
* homepage section
* city SEO page
* role dashboard
* management list
* Admin detail
* moderation queue

---

# 200. Property UX — Mobile

At 320px–430px:

* use a focused multi-step form
* use one-column fields
* keep Save Draft visible
* keep Back clear
* ensure keyboard does not cover action
* keep media cards manageable
* keep long location text readable
* avoid horizontal tables
* use full-screen sheets for selections
* show validation near fields
* preserve progress

---

# 201. Property UX — Tablet and Desktop

Tablet may use:

* larger step layout
* summary panel
* two-column fields where logical
* contextual preview

Desktop may use:

* structured form plus review summary
* stable content width
* side progress
* no excessively wide text fields

---

# 202. Project UX — Mobile

Project creation must:

* split complex sections
* preserve draft
* show Unit-management transition clearly
* use full-screen media and compliance screens where needed
* prevent overloaded one-page forms
* provide clear Project context inside Unit screens

---

# 203. Unit UX

Unit list must show:

* configuration
* price
* inventory
* status
* last update
* actions

Mobile should use structured Unit cards.

Desktop may use a table with:

* row detail
* bulk selection where permitted
* responsive overflow control

---

# 204. Direct Inquiry UX

The inquiry UI must:

* show source summary
* show authenticated identity
* show contact-sharing consent
* use specific Send Inquiry action
* show processing
* prevent duplicate tap
* preserve input
* show success
* provide correct next destination

---

# 205. Leads UX — Mobile

Mobile Leads should use:

* filter/search header
* structured Lead cards
* unread state
* source summary
* follow-up summary
* full-screen Lead detail
* segmented Message, Notes, and Activity sections where useful
* safe sticky message composer
* keyboard-aware layout

---

# 206. Leads UX — Desktop

Desktop may use:

* list/detail split view
* selected Lead highlight
* persistent filters
* contextual source panel
* message and activity area
* no state loss when changing selected Lead

---

# 207. Message Composer UX

The composer must:

* remain visible without covering messages
* adapt to keyboard
* show send state
* support multiline
* have clear Send action
* preserve failed text
* support attachment only when configured
* avoid accidental Enter behavior where multiline is intended

---

# 208. Notes UX

Notes should be visibly distinct from participant messages.

The UI must clearly label:

* Private Note
* visibility
* author
* timestamp

Do not visually mix private notes into the user-visible message thread without separation.

---

# 209. Follow-Up UX

Follow-Up controls should show:

* due date
* overdue state
* completion action
* next Follow-Up
* calendar input
* note
* clear timezone context

---

# 210. Activity Timeline UX

Timeline events should be grouped by date when useful.

Each event should show:

* action
* actor
* time
* related entity
* optional detail

Avoid excessive visual decoration.

---

# 211. Loading States

Required loading states include:

* Property draft loading
* Project draft loading
* Unit list loading
* media processing
* submission
* moderation state
* Direct Inquiry submission
* Lead list
* Lead detail
* message send
* Follow-Up save
* report submission
* restore action

Skeletons must match final layout.

---

# 212. Empty States

Examples:

## No Properties

```text
You have not posted any Properties yet.
```

Action:

```text
Post Property
```

## No Projects

```text
You have not created any Projects yet.
```

Action:

```text
Create Project
```

## No Units

```text
No Units have been added to this Project.
```

Action:

```text
Add Unit
```

## No Leads

```text
No Leads have been received for this item yet.
```

## Filtered Lead Empty

```text
No Leads match the selected filters.
```

Action:

```text
Clear Filters
```

---

# 213. Error States

Required errors include:

* draft save failure
* invalid Property
* invalid Project
* invalid Unit inventory
* media provider unavailable
* submission failure
* permission denied
* moderation conflict
* inquiry failure
* duplicate inquiry
* message failure
* Follow-Up failure
* report failure
* restore conflict
* source entity unavailable

Every error must provide a recovery action.

---

# 214. Unsaved Changes

Property, Project, Unit, message draft, note, and Follow-Up edits must handle unsaved state.

Appropriate actions:

* Save Draft
* Discard
* Continue Editing

Do not show unsaved warnings when no meaningful change occurred.

---

# 215. Back, Close, and Cancel

## Back

Returns to the previous meaningful step or list.

## Close

Dismisses a modal, drawer, sheet, or preview.

## Cancel

Stops a create, edit, moderation, or recovery action.

Browser Back must be verified throughout:

* posting
* inquiry
* Lead list/detail
* Admin drill-down
* moderation
* recovery

---

# 216. Deep Linking

Stable deep links should exist for:

* owned Property detail
* owned Project detail
* Unit detail
* Lead detail
* Requirement detail
* Admin Property
* Admin Project
* Admin Unit
* Admin Lead
* moderation case
* recovery case

Every private deep link requires server permission validation.

---

# 217. Accessibility

Required:

* semantic forms
* visible labels
* accessible step indicators
* error associations
* keyboard navigation
* focus management
* accessible dialogs
* accessible tables
* touch targets
* contrast
* screen-reader status
* reduced motion
* accessible message composer
* accessible timeline
* accessible status changes

---

# 218. Text Wrapping and Alignment

Test with:

* long Property title
* long Project name
* long Unit configuration
* long location
* long user name
* long moderation reason
* long message
* long note
* long Follow-Up
* long status

No content may:

* clip
* overlap
* cover actions
* cause uncontrolled horizontal scrolling
* break fixed or sticky positioning

---

# 219. Responsive Verification Widths

Verify all relevant flows at:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide display

---

# 220. Property Automated Tests

## Unit tests

* role eligibility
* category validation
* purpose validation
* pricing validation
* area validation
* location hierarchy
* lifecycle transition
* public eligibility
* re-review decision
* soft-delete eligibility

## Integration tests

* draft create/update
* submit
* moderation
* approve and publish
* changes required
* reject and reopen
* pause/resume
* soft delete/restore
* RLS
* cache invalidation

## End-to-end tests

* create draft
* resume
* preview
* submit
* Admin review
* user correction
* publication
* public detail
* edit
* pause
* resume
* delete
* restore
* Property-specific Leads

---

# 221. Project and Unit Automated Tests

## Unit tests

* Builder eligibility
* Project validation
* compliance validation
* Unit inventory constraints
* Unit pricing
* public eligibility
* Project lifecycle
* Unit lifecycle

## Integration tests

* Project draft
* Unit creation
* inventory update
* price update
* submission
* moderation
* publication
* pause/resume
* delete/restore
* Project and Unit RLS

## End-to-end tests

* create Project
* add Units
* preview
* submit
* Admin review
* publish
* public Project
* Unit inquiry
* Project-specific Leads
* pause/resume
* restore

---

# 222. Direct Inquiry Automated Tests

Test:

* Guest starts inquiry
* contextual login
* contextual registration
* return to inquiry
* explicit final submit
* Property inquiry
* Project inquiry
* Unit inquiry
* Requirement response
* consent missing
* invalid message
* duplicate tap
* idempotency
* rate limit
* source unavailable
* recipient unavailable
* Lead creation
* activity creation
* notification creation
* email Setup Required
* RLS

---

# 223. Leads Automated Tests

Test:

* Lead list scope
* Property Lead filter
* Project Lead filter
* Unit Lead filter
* status update
* priority update
* message send
* read state
* message failure/retry
* note privacy
* Follow-Up create
* Follow-Up complete
* activity timeline
* archive
* reopen
* report
* wrong user
* wrong role
* Admin access
* export permission

---

# 224. Property Manual Verification Matrix

Verify:

* Owner Property creation
* Broker Property creation
* wrong role
* plan limit
* account restriction
* draft
* auto-save
* resume
* category-dependent fields
* location hierarchy
* price
* media
* preview
* validation
* submit
* pending review
* changes required
* reject
* reopen
* approve
* publish
* public card
* public detail
* edit
* re-review
* pause
* resume
* soft delete
* restore
* history
* Lead drill-down
* mobile
* tablet
* desktop
* accessibility
* console
* network
* RLS

---

# 225. Project Manual Verification Matrix

Verify:

* Builder Project creation
* wrong role
* profile requirement
* draft
* Project details
* location
* compliance
* media
* Units
* inventory
* pricing
* preview
* submit
* changes required
* reject
* reopen
* approve
* publish
* public detail
* Unit context
* edit
* pause
* resume
* soft delete
* restore
* Project Leads
* Unit Leads
* promotion eligibility relation
* responsive layouts
* RLS

---

# 226. Direct Inquiry Manual Verification Matrix

Verify:

* Property card inquiry
* Property detail inquiry
* Project card inquiry
* Project detail inquiry
* Unit inquiry
* Guest auth
* registered user
* explicit post-auth submit
* contact consent
* valid message
* invalid message
* duplicate submission
* slow network
* rate limit
* recipient Lead
* sender confirmation
* in-app notification
* email provider state
* mobile keyboard
* Back
* Close
* browser Back
* console
* network
* privacy

---

# 227. Unified Leads Manual Verification Matrix

Verify:

* Owner Leads
* Broker Leads
* Builder Leads
* Lead list
* search
* filters
* sort
* pagination
* Property-specific entry
* Project-specific entry
* Unit-specific entry
* Lead detail
* source link
* contact privacy
* status
* priority
* message
* message retry
* read state
* private note
* Follow-Up
* activity
* archive
* reopen
* report
* notification destination
* list-detail-return
* mobile
* tablet
* desktop
* keyboard
* accessibility
* console
* network
* RLS

---

# 228. Admin Manual Verification Matrix

Verify:

* Property queue
* Property detail
* user link
* media
* moderation
* Leads
* reports
* audit
* recovery
* Project queue
* Project detail
* Builder
* Units
* Unit detail
* Project Leads
* promotion relation
* Lead list
* Lead detail
* participants
* messages
* notes permission
* Follow-Ups
* status correction
* report resolution
* sensitive action reason
* before/after diff
* reopen
* restore
* mobile Admin
* tablet Admin
* desktop Admin
* alignment
* sticky/fixed behavior
* console
* network
* permission denial

---

# 229. Live Browser Verification Procedure

The matching verification prompt must:

1. detect or start the development server
2. record URL and port
3. login as Owner
4. create and manage a Property
5. login as Broker
6. create and manage a listing
7. login as Builder
8. create Project and Units
9. test public Property and Project
10. submit Direct Inquiry
11. inspect recipient Lead
12. send message
13. add private note
14. create Follow-Up
15. inspect activity
16. test Property-specific Lead navigation
17. test Project- and Unit-specific Lead navigation
18. login as permissioned Admin
19. review moderation
20. test rejection and reopening
21. test approval
22. test soft deletion and restore
23. test reports
24. test required widths
25. test keyboard and focus
26. check console
27. check network
28. test RLS
29. fix defects
30. retest
31. update root state files
32. keep development server running when safe

---

# 230. Performance Requirements

Large collections must use:

* pagination
* cursor loading where appropriate
* indexed queries
* selected columns
* server filtering
* cache
* lazy-loaded Admin tabs

Do not load:

* all Leads
* all messages
* all Units
* all activity
* all Admin relations

in one request.

---

# 231. Lead Performance

Lead list queries should index:

* owner
* status
* source
* last activity
* follow-up
* unread state

Message queries should use cursor pagination.

Activity queries should use cursor pagination.

---

# 232. Admin Performance

Admin User, Property, Project, and Lead details should load:

* summary first
* related sections on demand
* paginated child records
* real counts through optimized queries

Avoid N+1 relation loading.

---

# 233. Scale and Reliability

The system must support horizontal application scaling.

Use:

* stateless request handling
* distributed rate limiting
* database indexes
* connection management
* idempotency
* background jobs
* outbox events
* provider retry
* observability
* graceful degradation

No concurrency claim is valid without measured load testing.

---

# 234. Monitoring

Monitor:

* draft-save failure
* submission failure
* moderation failure
* Direct Inquiry failure
* duplicate inquiry rate
* message failure
* notification failure
* Lead query latency
* inventory conflicts
* media-processing failure
* report-processing failure
* recovery failure

---

# 235. Security Event Monitoring

Record:

* inquiry abuse
* message spam
* repeated unauthorized Lead access
* bulk export attempt
* upload rejection
* invalid inventory manipulation
* suspicious moderation action
* report abuse
* repeated direct-ID probing

---

# 236. Production Provider Verification

Before production PASS:

* media upload must work with live storage
* image processing must work
* private documents must use signed access
* email notification must work
* scheduled jobs must run
* provider errors must be visible
* no development-only provider bypass may remain
* secrets must remain server-only

---

# 237. Production Data Verification

Before production:

* remove demo marketplace data
* remove development test accounts unless explicitly retained
* verify no fake Leads
* verify no fake messages
* verify no fake notifications
* verify no fake promotion metrics
* verify no development OTP dependency
* verify public-safe views
* verify RLS
* verify indexes
* verify backups

---

# 238. Production Sign-Off Checklist

This module may pass production sign-off only when:

* Property lifecycle works
* Project lifecycle works
* Unit lifecycle works
* Requirement lifecycle works
* Direct Inquiry works
* consent is stored
* Lead creation is transactional
* unified Leads works
* messages work
* notes remain private
* Follow-Ups work
* activity is real
* notifications have real destinations
* reports reach Admin
* moderation works
* reopening works
* soft delete works
* restore works
* Admin deep drill-down works
* RLS passes
* server authorization passes
* rate limits work
* media provider works
* email provider state is correct
* scheduled jobs work
* responsive widths pass
* accessibility passes
* console is clean for tested flows
* network failures are handled
* load testing covers critical operations
* monitoring is active
* backup and rollback are verified
* production smoke test passes

---

# 239. Feature Registry Updates

After implementation, update at least:

* `PROP-001` through `PROP-025`
* `PROJ-001` through `PROJ-025`
* `UNIT-001` through `UNIT-013`
* `REQ-001` through `REQ-011`
* `INQ-001` through `INQ-007`
* `LEAD-001` through `LEAD-022`
* relevant `NOTIF-*`
* relevant `ADMIN-*`
* relevant `GRAPH-*`
* relevant `SEC-*`
* relevant `PERF-*`
* relevant `PROVIDER-*`
* relevant `QA-*`

Record exact:

* routes
* components
* services
* tables
* migrations
* RLS policies
* indexes
* provider states
* tests
* browser routes
* responsive widths
* known issues
* verification status

---

# 240. Project State Updates

Update `PROJECT_STATE.md` with:

* current phase
* implementation status
* changed files
* migrations
* Property status
* Project status
* Unit status
* Requirement status
* Direct Inquiry status
* Leads status
* provider status
* moderation status
* RLS result
* automated checks
* live-browser routes
* responsive widths
* Admin verification
* bugs
* blockers
* rollback checkpoint
* development server URL and port
* next prompt

---

# 241. Non-Negotiable Operational Rules

1. Owner and Broker create Properties.
2. Builder/Developer creates Projects and manages Units inside Projects.
3. Every Unit has a valid parent Project.
4. All business records are server-backed.
5. Property, Project, Unit, and Requirement drafts are recoverable.
6. Public content requires approved eligibility.
7. Direct Inquiry is the primary public contact action.
8. Direct Inquiry does not require inquiry-type selection.
9. Authentication preserves source context.
10. Authentication never silently submits an inquiry.
11. The user explicitly submits the final inquiry.
12. Contact-sharing consent is recorded.
13. Private contact is never publicly exposed.
14. Direct Inquiry creates or associates a real Lead.
15. Lead source relationships are never lost.
16. Leads, messages, notes, Follow-Ups, and activity use one unified workspace.
17. Property-specific Leads are directly accessible.
18. Project-specific Leads are directly accessible.
19. Unit-specific Lead context remains visible.
20. Messages are private and server-backed.
21. Private notes remain permission-protected.
22. Follow-Ups remain stored even if reminder delivery fails.
23. Every activity item represents a real event.
24. Every displayed Lead count uses real data.
25. Property and Project moderation preserves history.
26. Rejected entities can be reopened by permissioned Admin.
27. User deletion is soft deletion by default.
28. Restoration preserves original deletion history.
29. Sensitive Admin actions require permission, reason, confirmation, and audit.
30. Complex Admin changes must not be forced into small popups.
31. Provider-backed features show honest provider state.
32. No fake upload, notification, email, Lead, message, metric, or success is allowed.
33. RLS and server authorization are both mandatory.
34. Large lists require pagination.
35. Live-browser verification is required before PASS.
36. Mobile, tablet, desktop, keyboard, accessibility, console, and network checks are required.
37. The development server remains running after verification when safe.
38. `PROJECT_STATE.md` and `FEATURE_REGISTRY.md` must be updated after every implementation and verification phase.

---

# 242. Implementation Handoff

The next document must define the complete role-specific application structure, including:

* Owner dashboard
* Broker dashboard
* Builder dashboard
* role-based mobile and tablet bottom navigation
* desktop application navigation
* dashboard metrics
* real dashboard queries
* deep clickable dashboards
* Property, Project, Unit, Requirement, and Lead drill-down
* profile and settings navigation
* notification integration
* billing entry points
* simplified dashboard hierarchy
* list-detail-return
* responsive role shells
* loading, empty, error, and permission states
* Admin-linked role visibility
* full end-to-end navigation verification

---
