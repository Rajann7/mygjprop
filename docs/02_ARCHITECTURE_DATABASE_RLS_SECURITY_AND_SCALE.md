# `docs/02_ARCHITECTURE_DATABASE_RLS_SECURITY_AND_SCALE.md`

# My Gujarat Property — Architecture, Database, RLS, Security, Performance, Scale, Reliability, and Recovery Authority

This document defines the production architecture for **My Gujarat Property**.

It is the primary technical authority for:

* application architecture
* frontend and backend boundaries
* database design
* entity relationships
* ownership and scope
* Supabase authentication
* PostgreSQL schema
* Row Level Security
* server-side authorization
* API and service design
* validation
* audit logging
* provider abstractions
* caching
* queues
* media architecture
* performance
* security
* high-concurrency design
* monitoring
* backup
* recovery
* deployment safety

Claude must read this document before changing:

* database schema
* migrations
* RLS
* authentication architecture
* server actions
* route handlers
* data services
* caching
* queues
* payment integration
* media integration
* provider configuration
* security controls
* deployment architecture
* performance-critical logic

---

# 1. Technical Product Principles

The architecture must follow these principles.

## 1.1 Server-backed business authority

Authoritative business data must live in:

* Supabase PostgreSQL
* trusted server-side services
* approved external providers where required
* approved object storage for media and documents

The browser must not be the authoritative source for:

* users
* roles
* profiles
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
* subscriptions
* payments
* invoices
* promotions
* provider status
* audit logs
* permissions
* platform settings

Browser storage may hold only non-authoritative UX state such as:

* temporary unsaved draft recovery
* recent non-sensitive searches
* dismissed informational UI
* display preferences
* safe list-return state

Server data always wins.

---

## 1.2 Security at every layer

Security must be enforced through:

1. database constraints
2. Row Level Security
3. server-side service authorization
4. route and layout guards
5. validation
6. provider verification
7. storage policies
8. audit logging
9. rate limiting
10. secure configuration
11. monitoring
12. recovery controls

Frontend hiding is never considered authorization.

---

## 1.3 Supabase-first foundation

Supabase is the initial backend platform for:

* PostgreSQL
* authentication
* RLS
* database functions where appropriate
* server-side database access
* approved realtime use where genuinely useful
* storage only if selected and verified for a particular media class

Additional providers must be integrated through replaceable service boundaries.

No product module may become tightly coupled to one external provider without an abstraction layer where provider replacement is reasonably expected.

---

## 1.4 Mobile-first does not mean client-heavy

Mobile-first refers to UX priority.

It does not mean:

* putting business logic in the browser
* loading entire datasets on mobile
* performing private filtering client-side
* exposing raw database structures
* trusting client-submitted prices
* trusting client-submitted role or ownership
* trusting client-submitted moderation status

The server remains authoritative.

---

## 1.5 Deep clickable workflows require relational integrity

The product supports deep navigation such as:

```text
User
→ Property
→ Lead
→ Message
→ Activity
→ Report
→ Audit
```

and:

```text
Builder
→ Project
→ Unit
→ Lead
→ Direct Inquiry
→ Activity
```

These relationships must be represented with explicit database foreign keys and indexed relationships.

Do not create disconnected JSON blobs for core relationships.

---

# 2. Recommended Application Stack

The final repository audit must confirm installed versions before implementation.

The intended stack is:

| Layer                | Preferred technology                                         |
| -------------------- | ------------------------------------------------------------ |
| Framework            | Next.js App Router                                           |
| Language             | TypeScript                                                   |
| UI                   | React                                                        |
| Styling              | Tailwind CSS                                                 |
| Component primitives | ShadCN UI or compatible accessible primitives                |
| Forms                | React Hook Form or approved equivalent                       |
| Validation           | Zod or approved schema validation                            |
| Server mutations     | Server Actions and/or Route Handlers through service layer   |
| Client state         | Zustand only for appropriate UI state                        |
| Server state         | Server Components, service calls, and approved query caching |
| Motion               | Framer Motion and approved motion utilities                  |
| Database             | Supabase PostgreSQL                                          |
| Authentication       | Supabase Auth                                                |
| RLS                  | PostgreSQL Row Level Security                                |
| File storage         | Approved provider through media abstraction                  |
| Email                | Approved email provider through service abstraction          |
| SMS OTP              | Approved SMS OTP provider through service abstraction        |
| Payment              | Approved payment provider through secure server integration  |
| Monitoring           | Approved error and uptime monitoring                         |
| Hosting              | Production platform selected by the owner                    |
| CDN                  | Hosting CDN and/or approved media CDN                        |
| Jobs                 | Approved queue and scheduler compatible with hosting         |

Do not introduce a technology merely because a GitHub skill recommends it.

New dependencies require:

* clear purpose
* compatibility review
* security review
* bundle impact review
* maintenance review
* rollback plan

---

# 3. Repository Architecture

The exact repository structure must be confirmed during Phase -1.

The preferred logical structure is:

```text
src/
├── app/
│   ├── (public)/
│   ├── (auth)/
│   ├── (owner)/
│   ├── (broker)/
│   ├── (builder)/
│   ├── (admin)/
│   ├── api/
│   ├── error.tsx
│   ├── global-error.tsx
│   ├── not-found.tsx
│   └── layout.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── navigation/
│   ├── auth/
│   ├── property/
│   ├── project/
│   ├── unit/
│   ├── leads/
│   ├── notifications/
│   ├── admin/
│   ├── billing/
│   ├── forms/
│   ├── states/
│   └── accessibility/
│
├── features/
│   ├── auth/
│   ├── profiles/
│   ├── locations/
│   ├── search/
│   ├── properties/
│   ├── projects/
│   ├── units/
│   ├── requirements/
│   ├── inquiries/
│   ├── leads/
│   ├── messages/
│   ├── notifications/
│   ├── promotions/
│   ├── reports/
│   ├── support/
│   ├── bugs/
│   ├── moderation/
│   ├── billing/
│   ├── providers/
│   ├── admin/
│   └── audit/
│
├── services/
│   ├── auth/
│   ├── database/
│   ├── permissions/
│   ├── storage/
│   ├── email/
│   ├── sms/
│   ├── payment/
│   ├── notifications/
│   ├── jobs/
│   ├── caching/
│   ├── monitoring/
│   └── security/
│
├── lib/
│   ├── supabase/
│   ├── validation/
│   ├── errors/
│   ├── rate-limit/
│   ├── logging/
│   ├── constants/
│   ├── env/
│   └── utils/
│
├── hooks/
├── types/
├── config/
└── tests/
```

This structure is a logical guideline.

Do not reorganize a working repository blindly.

Before restructuring:

* identify duplicate code
* identify import impact
* identify route impact
* identify test impact
* identify migration impact
* create a safe checkpoint
* migrate incrementally
* verify after each structural change

---

# 4. Architectural Layering

The application must separate responsibilities.

## 4.1 Presentation layer

Responsible for:

* rendering
* user interaction
* responsive behavior
* accessibility
* loading and error states
* calling approved server operations
* showing permission-aware UI

The presentation layer must not:

* calculate trusted billing totals
* determine final role authorization
* approve content
* create verified payment state
* bypass server validation
* read private tables directly from public pages
* expose service-role access

---

## 4.2 Application service layer

Responsible for:

* authorization
* business rules
* validation
* orchestration
* database operations
* provider calls
* audit creation
* notification creation
* cache invalidation
* job scheduling
* consistent error mapping

Every important mutation must go through a service or action that performs:

1. authentication check
2. role and permission check
3. input validation
4. ownership or scope check
5. business-state check
6. database mutation
7. audit event when required
8. related event creation
9. notification scheduling where applicable
10. cache invalidation
11. safe response

---

## 4.3 Data layer

Responsible for:

* schema
* constraints
* indexes
* RLS
* database views
* transactions
* stored functions where justified
* immutable event records
* data integrity

Business invariants that can be safely enforced in PostgreSQL should not exist only in application code.

Examples:

* valid role values
* non-negative amounts
* project-unit parent relationship
* unique normalized mobile number
* valid status transitions where appropriate
* foreign-key integrity
* active record uniqueness
* moderation relation integrity
* payment idempotency keys
* audit immutability

---

## 4.4 Provider layer

External providers must be isolated behind interfaces.

Examples:

```ts
interface SmsOtpProvider {
  sendOtp(input: SendOtpInput): Promise<SendOtpResult>;
  verifyOtp(input: VerifyOtpInput): Promise<VerifyOtpResult>;
}

interface EmailProvider {
  sendTransactionalEmail(
    input: TransactionalEmailInput
  ): Promise<EmailDeliveryResult>;
}

interface PaymentProvider {
  createOrder(input: CreatePaymentOrderInput): Promise<PaymentOrderResult>;
  verifyWebhook(input: VerifyWebhookInput): Promise<VerifiedPaymentEvent>;
  createRefund(input: RefundInput): Promise<RefundResult>;
}

interface MediaStorageProvider {
  createUpload(input: UploadRequest): Promise<UploadAuthorization>;
  deleteObject(input: DeleteObjectRequest): Promise<void>;
  createSignedUrl(input: SignedUrlRequest): Promise<string>;
}
```

Provider-specific response formats must not spread throughout the product.

---

# 5. Environment Architecture

Use separate environments:

* development
* test
* staging
* production

Each environment must have:

* separate database or isolated schema
* separate provider keys
* separate storage namespace
* separate monitoring configuration
* separate deployment configuration
* separate feature flags where appropriate

Production data must never be copied into local development without:

* explicit permission
* sanitization
* secure transfer
* access control
* retention policy

---

## 5.1 Environment variables

All variables must be classified as:

* public client-safe
* server-only
* build-time
* runtime
* optional
* required
* provider-specific

`.env.example` must contain:

* variable names
* descriptions
* required environment
* client/server classification
* example format without real secrets

It must not contain:

* real tokens
* API secrets
* service-role keys
* passwords
* private URLs
* webhook secrets
* OTP codes

---

## 5.2 Environment validation

The application must validate environment configuration at startup.

Use a typed environment schema.

The validation must:

* fail safely for mandatory core configuration
* allow optional providers to remain disabled
* report Setup Required clearly
* never print secret values
* prevent development provider modes in production
* prevent missing critical production settings

---

# 6. Authentication Architecture

Authentication behavior is defined in detail in:

```text
docs/03_AUTH_ONBOARDING_ROLES_PROFILE_AND_SESSIONS.md
```

This section defines the architectural boundaries.

## 6.1 Authentication source

Supabase Auth is the initial identity source.

Authentication identity and application profile must remain separate concepts.

Recommended relation:

```text
auth.users
→ profiles
→ role-specific profile details
→ account status
→ permissions where internal
```

Do not place all application profile data inside authentication metadata.

Auth metadata may be useful for limited session hints, but the database remains authoritative for:

* role
* account status
* verification state
* profile completion
* internal permissions
* billing state

---

## 6.2 Mobile normalization

Mobile numbers must be normalized before identity lookup.

Store:

* country code
* national number
* normalized E.164 representation
* masked display representation where needed

Enforce uniqueness on normalized mobile numbers for active accounts.

Do not compare raw user-entered strings.

---

## 6.3 OTP architecture

The final user experience uses a 4-digit OTP.

Security requirements:

* OTP generated or verified through approved provider logic
* short expiry
* hashed or provider-managed storage
* attempt limit
* resend cooldown
* send rate limit
* verification rate limit
* IP and account abuse signals
* no OTP in logs
* no OTP in analytics
* no OTP in browser persistence
* no long-lived OTP records
* replay prevention

A 4-digit OTP has a limited key space.

Therefore controls must be strict:

* short validity period
* low attempt threshold
* cooldown after failures
* per-number rate limit
* per-IP rate limit
* device/session context
* progressive lockout
* suspicious-activity logging

---

## 6.4 Session architecture

Use secure server-aware sessions.

Requirements:

* secure cookies in production
* HttpOnly where supported
* appropriate SameSite policy
* session refresh handling
* logout invalidation
* server-side protected layouts
* stale-session recovery
* no private-data caching across users
* no auth redirect loops
* authenticated-user handling on auth routes
* session expiry return-context preservation

---

# 7. Final Role Architecture

Public role values:

```text
owner
broker
builder
```

Internal role classes:

```text
super_admin
admin
staff
```

Staff permissions are separate from role names.

Do not create a new role for every staff responsibility.

Use:

* internal role class
* permission records
* module scope
* action scope

---

## 7.1 Recommended role tables

```text
profiles
public_role_assignments
staff_profiles
staff_roles
permissions
staff_role_permissions
staff_user_roles
```

A simpler structure may be used if it provides equivalent integrity and maintainability.

---

## 7.2 Role transition

Public role changes must be controlled.

A role-change request should include:

* user
* current role
* requested role
* reason
* supporting information
* status
* reviewer
* review reason
* billing impact
* data ownership impact
* approved timestamp

Role change must not:

* orphan existing records
* incorrectly transfer ownership
* expose role-incompatible modules
* silently alter subscription access
* bypass verification
* delete historical role information

---

# 8. Core Database Conventions

## 8.1 Primary keys

Use UUID primary keys unless a strong technical reason exists otherwise.

Recommended:

```sql
id uuid primary key default gen_random_uuid()
```

Do not expose sequential internal identifiers unnecessarily.

---

## 8.2 Timestamps

Core tables should include:

```sql
created_at timestamptz not null default now(),
updated_at timestamptz not null default now()
```

Tables with lifecycle behavior may also include:

```sql
submitted_at
approved_at
rejected_at
published_at
paused_at
deleted_at
restored_at
archived_at
expires_at
```

Use timezone-aware timestamps.

---

## 8.3 Soft deletion

Recoverable entities should include:

```sql
deleted_at timestamptz null,
deleted_by uuid null,
delete_reason text null
```

Queries must exclude soft-deleted records by default unless recovery access is intentional.

---

## 8.4 Status fields

Use PostgreSQL enums only when the value set is highly stable and migration cost is acceptable.

Use constrained text or lookup tables when operational flexibility is needed.

All status values must be:

* documented
* validated
* consistently named
* indexed where frequently filtered
* transitioned through authorized services

---

## 8.5 Currency

Store money as integer minor units.

Example:

```text
₹12,500.00
→ 1250000 paise
```

Recommended fields:

```sql
amount_minor bigint
currency_code char(3) default 'INR'
```

Do not store money in floating-point columns.

---

## 8.6 Phone and email

Mobile:

* normalized E.164 value
* verified timestamp
* masked display helper
* uniqueness rules

Email:

* normalized lowercase
* verified timestamp where applicable
* case-insensitive uniqueness where required

Never expose raw contact fields in public-safe views.

---

## 8.7 Slugs

Public slugs require:

* normalized slug
* uniqueness
* status
* history
* redirect support
* collision handling

Do not use mutable titles as the sole entity identifier.

Recommended URL format:

```text
/property/{slug}-{short-id}
```

or another stable hybrid.

---

# 9. Core Entity Relationship Model

High-level relationships:

```text
User
├── Profile
├── Public Role
├── Properties
├── Projects
├── Requirements
├── Direct Inquiries Sent
├── Leads Received
├── Messages
├── Notifications
├── Subscriptions
├── Payments
├── Reports
└── Audit Relations
```

```text
Builder
└── Projects
    ├── Units
    ├── Media
    ├── Leads
    ├── Promotions
    ├── Moderation
    ├── Reports
    └── Activity
```

```text
Property
├── Owner or Broker
├── Location
├── Media
├── Direct Inquiries
├── Leads
├── Reports
├── Moderation
├── Status History
└── Audit
```

```text
Lead
├── Sender
├── Recipient
├── Source Entity
├── Messages
├── Notes
├── Follow-ups
├── Activity
├── Reports
└── Audit
```

---

# 10. Recommended Core Tables

The final migration design must be based on the actual repository audit.

Recommended tables include:

## Identity and access

* `profiles`
* `public_role_assignments`
* `account_status_history`
* `staff_profiles`
* `staff_roles`
* `permissions`
* `staff_role_permissions`
* `staff_user_roles`
* `role_change_requests`
* `user_sessions_metadata`
* `security_events`

## Locations

* `states`
* `districts`
* `talukas`
* `cities`
* `localities`
* `location_aliases`
* `location_change_requests`
* `location_slug_history`

## Properties

* `properties`
* `property_details`
* `property_amenities`
* `property_media`
* `property_status_history`
* `saved_properties`

## Projects

* `projects`
* `project_details`
* `project_phases`
* `project_amenities`
* `project_media`
* `project_documents`
* `project_status_history`
* `project_units`
* `unit_media`
* `unit_price_history`
* `unit_inventory_events`
* `saved_projects`

## Requirements

* `requirements`
* `requirement_responses`
* `requirement_status_history`

## Inquiry and Leads

* `direct_inquiries`
* `leads`
* `lead_participants`
* `lead_messages`
* `lead_notes`
* `lead_follow_ups`
* `lead_activity_events`
* `lead_status_history`

## Notifications

* `notifications`
* `notification_preferences`
* `email_templates`
* `email_delivery_logs`

## Promotions

* `promotions`
* `promotion_creatives`
* `promotion_schedules`
* `promotion_impressions`
* `promotion_clicks`
* `promotion_status_history`

## Moderation and reports

* `moderation_cases`
* `moderation_actions`
* `reports`
* `report_evidence`
* `report_actions`
* `recovery_actions`

## Support and bugs

* `support_tickets`
* `support_messages`
* `bugs`
* `bug_events`
* `bug_entity_links`

## Billing

* `plans`
* `plan_features`
* `subscriptions`
* `subscription_events`
* `usage_counters`
* `payment_orders`
* `payments`
* `payment_events`
* `refunds`
* `billing_profiles`
* `invoices`
* `invoice_items`
* `credit_notes`

## CMS and legal

* `cms_pages`
* `cms_page_versions`
* `blog_articles`
* `legal_documents`
* `consent_records`

## System

* `provider_configurations`
* `provider_health_checks`
* `feature_flags`
* `system_settings`
* `audit_logs`
* `outbox_events`
* `job_runs`
* `idempotency_keys`

Not every table must be created immediately.

Each phase creates only the tables required for that phase and the safe foundation for future work.

---

# 11. Profile Table Design

Recommended `profiles` responsibilities:

* application identity
* full name
* normalized mobile reference
* email
* public role
* account status
* profile completion
* avatar reference
* created/updated timestamps
* soft-delete fields

Avoid placing:

* all Builder data
* all Broker business data
* billing data
* permission arrays
* provider secrets
* large documents
* message history

into one profile row.

Role-specific business details may use:

* `owner_profiles`
* `broker_profiles`
* `builder_profiles`

or a shared business-profile structure if clean and normalized.

---

# 12. Property Data Model

Recommended primary fields:

```text
properties
- id
- owner_user_id
- owner_role
- title
- slug
- purpose
- category
- property_type
- description
- price_minor
- currency_code
- negotiable
- state_id
- district_id
- taluka_id
- city_id
- locality_id
- address_line
- landmark_text
- postal_code
- moderation_status
- publication_status
- lifecycle_status
- submitted_at
- approved_at
- published_at
- paused_at
- deleted_at
- created_at
- updated_at
```

Complex category-specific fields may live in:

* typed detail tables
* validated JSONB with strict schemas
* normalized feature tables

Use JSONB only when:

* schema variation is real
* validation exists
* indexing strategy exists
* fields do not require common relational joins
* future reporting remains practical

Do not store core searchable fields only inside JSONB.

---

# 13. Project and Unit Data Model

Recommended project fields:

```text
projects
- id
- builder_user_id
- builder_profile_id
- name
- slug
- project_type
- purpose
- description
- construction_status
- possession_date
- launch_date
- rera_status
- rera_number
- state_id
- district_id
- taluka_id
- city_id
- locality_id
- address_line
- landmark_text
- moderation_status
- publication_status
- lifecycle_status
- submitted_at
- approved_at
- published_at
- paused_at
- deleted_at
- created_at
- updated_at
```

Recommended unit fields:

```text
project_units
- id
- project_id
- configuration
- unit_type
- unit_label
- tower_or_wing
- floor_number
- area_value
- area_unit
- price_minor
- currency_code
- inventory_total
- inventory_available
- availability_status
- lifecycle_status
- deleted_at
- created_at
- updated_at
```

Database constraints should enforce:

* unit belongs to an existing project
* builder accessing unit owns the parent project
* inventory values are non-negative
* available inventory cannot exceed total inventory
* public unit visibility requires an eligible public project
* deleted project units do not appear publicly

---

# 14. Direct Inquiry Data Model

A Direct Inquiry must preserve source context.

Recommended fields:

```text
direct_inquiries
- id
- sender_user_id
- recipient_user_id
- source_type
- property_id nullable
- project_id nullable
- unit_id nullable
- requirement_id nullable
- message
- contact_consent_version
- consented_at
- status
- idempotency_key
- created_at
- updated_at
```

Constraints:

* exactly one valid source relation where applicable
* recipient must match source ownership
* unit must belong to project
* sender must be authenticated
* message length must be validated
* consent must be recorded
* duplicate/idempotency controls must exist

The inquiry service must create or associate a Lead transactionally.

---

# 15. Lead Data Model

Recommended `leads` fields:

```text
leads
- id
- source_type
- source_id
- inquiry_id
- owner_user_id
- contact_user_id
- property_id nullable
- project_id nullable
- unit_id nullable
- requirement_id nullable
- status
- priority
- unread_count
- last_activity_at
- next_follow_up_at
- closed_at
- archived_at
- created_at
- updated_at
```

Lead ownership must represent the user responsible for managing the Lead.

This is not a public subordinate-role assignment model.

Lead participants should be stored separately when multiple participants require explicit access.

---

## 15.1 Lead messages

Recommended fields:

```text
lead_messages
- id
- lead_id
- sender_user_id
- message_type
- body
- delivery_status
- edited_at
- deleted_at
- created_at
```

Message visibility must be restricted to:

* permitted Lead participants
* permissioned internal users
* trusted server processing

---

## 15.2 Lead notes

Notes may include a visibility scope:

```text
private_owner
internal_admin
shared_participants
```

Use the narrowest scope required.

---

## 15.3 Lead activity

Use an append-oriented event table.

Recommended fields:

```text
lead_activity_events
- id
- lead_id
- event_type
- actor_user_id
- actor_staff_id
- entity_type
- entity_id
- metadata_json
- created_at
```

Metadata must not contain secrets or unnecessary private information.

---

# 16. Notification Data Model

Recommended fields:

```text
notifications
- id
- recipient_user_id
- category
- title
- body
- entity_type
- entity_id
- destination_path
- read_at
- archived_at
- created_at
```

Notification creation should be server-controlled.

Do not let the client specify arbitrary destination paths.

Use a route resolver that maps:

* entity type
* entity ID
* recipient role
* permission state

to a valid destination.

---

# 17. Admin and Audit Data Model

Admin actions must not be stored only as free-text logs.

Recommended audit fields:

```text
audit_logs
- id
- actor_user_id nullable
- actor_staff_id nullable
- actor_role
- action
- entity_type
- entity_id
- reason
- previous_state_json
- new_state_json
- request_id
- session_id
- source_route
- ip_hash nullable
- user_agent_summary nullable
- created_at
```

Do not store raw sensitive request bodies.

Audit records must be append-only for ordinary operations.

---

## 17.1 Recovery records

Recommended:

```text
recovery_actions
- id
- entity_type
- entity_id
- original_action_id
- recovery_action
- requested_by
- approved_by
- reason
- previous_state_json
- restored_state_json
- created_at
```

Recovery must preserve the original event.

---

# 18. Billing Data Model

## 18.1 Plans

Recommended:

```text
plans
- id
- role
- name
- slug
- description
- price_minor
- currency_code
- billing_interval
- trial_days
- active
- public
- display_order
- created_at
- updated_at
```

Plan limits may be stored in normalized `plan_features`.

Avoid unvalidated arbitrary JSON for critical limits.

---

## 18.2 Subscriptions

Recommended fields:

```text
subscriptions
- id
- user_id
- plan_id
- status
- provider
- provider_subscription_id
- starts_at
- current_period_start
- current_period_end
- trial_ends_at
- cancels_at
- cancelled_at
- created_at
- updated_at
```

---

## 18.3 Payments

Recommended:

```text
payments
- id
- user_id
- payment_order_id
- provider
- provider_payment_id
- amount_minor
- currency_code
- status
- verified_at
- failure_code
- failure_message_safe
- idempotency_key
- created_at
- updated_at
```

Never trust client-submitted amount or success status.

---

# 19. Location Data Model

Recommended hierarchy:

```text
states
districts
talukas
cities
localities
```

Every child table must include:

* parent ID
* normalized name
* slug
* active flag
* sort order where needed
* SEO state
* timestamps

Location uniqueness should consider parent scope.

Example:

```text
unique(normalized_name, district_id)
```

for Taluka, where appropriate.

---

## 19.1 Location aliases

Use aliases for:

* common spelling variations
* transliterations
* historic names
* alternative local names

Aliases support search without changing canonical names.

---

# 20. Public-Safe Views

Public pages should use public-safe database views or strictly selected services.

Examples:

* `public_properties`
* `public_projects`
* `public_project_units`
* `public_owner_profiles`
* `public_broker_profiles`
* `public_builder_profiles`
* `public_promotions`
* `public_locations`

Public-safe views must exclude:

* mobile number
* private email
* internal address notes
* Leads
* messages
* moderation notes
* private documents
* billing
* audit
* provider data
* security events
* soft-deleted content
* non-approved content

Views must still respect RLS or be exposed through trusted server queries.

---

# 21. RLS Architecture

RLS must be enabled for every private or user-owned table.

The core rule:

> A user may access only records they own, participate in, are publicly allowed to view, or are authorized to manage through verified internal permissions.

---

## 21.1 RLS helper strategy

Use stable helper functions carefully.

Examples:

* `current_user_id()`
* `current_public_role()`
* `is_super_admin()`
* `has_staff_permission(permission_key)`
* `owns_property(property_id)`
* `owns_project(project_id)`
* `is_lead_participant(lead_id)`

Security-definer functions require strict review.

They must:

* set safe `search_path`
* return minimal booleans or scoped values
* avoid dynamic SQL where possible
* avoid leaking secrets
* avoid recursive policy calls
* remain indexed and performant

---

## 21.2 Profile policies

Users may:

* read own private profile
* update permitted own fields

Public users may:

* read only public-safe profile views

Internal users may:

* read or edit according to permission

---

## 21.3 Property policies

Public:

* read approved, published, active, non-deleted property data through public-safe access

Owner/Broker:

* create when role and account state permit
* read own records in all lifecycle states
* update own eligible records
* pause/resume own eligible records
* soft-delete own eligible records

Internal:

* access according to moderation or management permission

No user may edit another user’s property.

---

## 21.4 Project policies

Public:

* read approved published projects

Builder:

* create and manage own projects
* manage units belonging to own projects
* read own projects in all lifecycle states

Internal:

* manage according to permission

---

## 21.5 Lead policies

A Lead may be read by:

* Lead owner
* authorized participant
* permissioned internal staff
* Super Admin

A Lead message may be read by:

* permitted Lead participants
* permissioned internal staff where policy allows

Public users must never read Lead records.

---

## 21.6 Billing policies

Users may read:

* own subscription
* own payments
* own invoices
* own billing profile

Users may not directly set:

* payment verified state
* subscription activation
* invoice issuance
* refund state

Trusted server operations and verified provider events control these states.

---

## 21.7 Audit policies

Normal users must not modify audit records.

Internal users may read audit records only with explicit permission.

Audit creation should occur through trusted server operations or restricted database functions.

---

# 22. RLS Testing Requirements

For every private table, test:

1. anonymous read
2. anonymous insert
3. anonymous update
4. anonymous delete
5. authenticated owner read
6. authenticated owner update
7. wrong-user read
8. wrong-user update
9. wrong-role access
10. staff without permission
11. staff with read permission
12. staff with write permission
13. Super Admin
14. service role from trusted server only

RLS verification must not rely solely on policy inspection.

Run real queries using distinct test identities.

---

# 23. Server Authorization

RLS is mandatory but not sufficient.

Server services must check:

* authenticated user
* account status
* public role
* entity ownership
* lifecycle state
* plan limit
* verification requirement
* staff permission
* action reason
* provider availability
* idempotency
* rate limit

Example property update sequence:

```text
authenticate
→ load profile
→ validate active account
→ load property
→ confirm ownership
→ confirm editable status
→ validate payload
→ execute transaction
→ create history
→ create audit
→ invalidate cache
→ return safe result
```

---

# 24. Validation Architecture

Use shared validation schemas.

Validation categories:

* format
* type
* required fields
* length
* range
* enum/status
* ownership
* relational integrity
* provider state
* lifecycle transition
* business limit
* content sanitization
* consent
* file type
* amount

Client validation improves UX.

Server validation is authoritative.

Database constraints provide final integrity.

---

## 24.1 Error model

Use structured errors.

Recommended categories:

* `AUTHENTICATION_REQUIRED`
* `PERMISSION_DENIED`
* `VALIDATION_FAILED`
* `NOT_FOUND`
* `CONFLICT`
* `RATE_LIMITED`
* `SETUP_REQUIRED`
* `PROVIDER_FAILED`
* `STATE_TRANSITION_INVALID`
* `DATABASE_FAILED`
* `UNKNOWN_ERROR`

User-facing messages must be safe and actionable.

Internal logs may contain more detail after redaction.

---

# 25. Transactions

Use transactions for multi-step operations where partial completion would corrupt state.

Examples:

* Direct Inquiry plus Lead creation
* payment verification plus subscription activation
* moderation decision plus status history
* project deletion plus unit state transition
* restoration plus recovery event
* role change plus permission and billing impact
* invoice creation plus invoice items
* refund plus payment event
* promotion approval plus schedule activation

Transactions should remain short.

Do not perform long external provider calls inside database transactions.

Use:

1. persist pending operation
2. call provider
3. verify response
4. finalize state transactionally

---

# 26. Idempotency

Idempotency is required for:

* Direct Inquiry submission
* payment order creation
* payment webhook processing
* refund processing
* email job scheduling
* notification creation from events
* promotion activation
* scheduled expiry
* media-processing callbacks
* retryable Admin actions

Use stable idempotency keys and unique constraints.

---

# 27. Event and Outbox Architecture

For reliable secondary work, use an outbox pattern where appropriate.

Example:

```text
Database transaction:
- create Direct Inquiry
- create Lead
- write outbox event

Background worker:
- read outbox event
- create notification
- send email
- mark event processed
```

Benefits:

* avoids losing notifications after successful data mutation
* supports retries
* supports provider failure
* supports observability
* prevents long request latency

Outbox processing must be:

* idempotent
* retryable
* observable
* rate-limited
* dead-letter aware

---

# 28. Caching Architecture

Caching must never leak user-specific data.

## 28.1 Public caching

Suitable for:

* approved property detail
* approved project detail
* city SEO pages
* public Builder profiles
* public location lists
* approved homepage sections

Use:

* server cache
* ISR
* CDN
* tag-based invalidation
* short TTL where data changes frequently

---

## 28.2 Private caching

Private authenticated data requires:

* user-scoped cache keys
* role-scoped cache keys
* short lifetimes
* invalidation after mutation
* no shared public cache

Avoid caching:

* private messages
* raw Leads
* payment state
* sensitive Admin details
* security events

unless the caching system provides strict secure scoping.

---

## 28.3 Cache invalidation

Mutations must invalidate related views.

Examples:

Property approval invalidates:

* property detail
* owner property list
* search results
* city SEO page
* homepage section
* Admin moderation queue

Project unit update invalidates:

* project detail
* project management
* unit list
* Builder dashboard
* relevant search results

---

# 29. Search Architecture

Search must use indexed server queries.

Phase 1 may use PostgreSQL search.

Future scale may use a dedicated search provider if justified.

Searchable fields include:

* property title
* project name
* city
* locality
* property type
* project type
* Builder name
* approved aliases
* selected descriptive fields

Search must avoid:

* scanning unbounded large tables
* exposing private drafts
* returning rejected or deleted content
* client-side filtering of private raw data
* leaking hidden fields

---

## 29.1 Search indexes

Possible indexes:

* normalized title
* trigram index
* full-text `tsvector`
* city ID
* locality ID
* purpose
* category
* price
* publication status
* created timestamp

Composite indexes must match real query patterns.

Do not add excessive indexes without query analysis.

---

# 30. Pagination

All large datasets require pagination.

Use:

* cursor pagination for activity streams, messages, and large result lists
* offset pagination for smaller Admin collections where acceptable
* server-side filters
* stable sorting

Never fetch all records and paginate in the browser.

---

# 31. Media Architecture

Media must use an abstraction layer.

Media classes may include:

* public property images
* public project images
* public Builder logos
* approved brochures
* floor plans
* private verification documents
* private billing documents
* support attachments

Each media class must define:

* storage provider
* public/private state
* upload authorization
* validation
* processing
* CDN policy
* retention
* deletion
* signed access
* moderation
* audit

---

## 31.1 Upload flow

Recommended:

```text
Client requests upload
→ Server validates role, entity, and file metadata
→ Server creates restricted upload authorization
→ Client uploads directly to storage
→ Storage callback or server confirms upload
→ Media processing validates content
→ Metadata stored
→ Moderation state applied
→ Public delivery enabled only when eligible
```

Do not trust client-provided MIME type alone.

---

## 31.2 Image processing

Images should support:

* safe decode
* metadata stripping where appropriate
* orientation correction
* resizing
* compression
* modern output format
* thumbnail generation
* responsive variants
* dimension recording
* blur placeholder where useful

---

## 31.3 Private documents

Private documents require:

* private bucket or namespace
* server authorization
* short-lived signed URL
* no public CDN caching
* access audit where appropriate
* retention policy
* deletion policy

---

# 32. Email Architecture

Email is the approved external notification channel.

Email delivery must be asynchronous where possible.

Flow:

```text
Business event
→ Notification event
→ Email job
→ Provider call
→ Delivery result
→ Delivery log
→ Retry or fail state
```

Email templates must:

* use approved variables
* escape user content
* have text and HTML versions
* have preview
* have version tracking
* support unsubscribe where legally required
* avoid private information beyond the approved purpose

---

# 33. SMS OTP Architecture

SMS is used for OTP delivery.

SMS OTP service must support:

* send
* provider response
* delivery attempt record
* resend limit
* verification attempt limit
* provider failure
* fallback status only if approved
* cost monitoring
* abuse monitoring

Never show “OTP sent” unless the provider request succeeded according to verified provider semantics.

---

# 34. Payment Architecture

Payment must be server-controlled.

## 34.1 Payment order flow

```text
User selects approved plan or promotion
→ Server loads current price
→ Server verifies eligibility
→ Server creates internal order
→ Server creates provider order
→ Client opens provider checkout
→ Provider returns client event
→ Server waits for verified webhook
→ Payment marked verified
→ Subscription or promotion activated
```

Client success is not final proof.

---

## 34.2 Webhook requirements

Payment webhook must:

* verify signature
* use raw request body where required
* enforce idempotency
* store provider event ID
* reject replay
* map provider status safely
* never trust query parameters
* create audit and payment events
* update subscription only in valid state
* return safe provider response

---

## 34.3 Reconciliation

A scheduled reconciliation job should compare:

* internal payment order
* provider order
* provider payment
* webhook events
* subscription activation
* invoice

Discrepancies must appear in Admin billing.

---

# 35. Promotions Architecture

Promotion delivery requires:

* eligible Builder content
* moderation
* schedule
* billing state where required
* active destination
* location relevance
* public-safe creative
* real click destination

Promotion query should filter:

* approved
* active
* schedule-valid
* destination-active
* billing-valid
* target-scope match
* non-deleted

Carousel order may use:

* priority
* city relevance
* schedule
* fairness rules
* controlled rotation

Do not use random ordering that prevents predictable reporting without business approval.

---

# 36. Admin Architecture

Admin is an authenticated application with permission-scoped modules.

Recommended route grouping:

```text
/admin
/admin/users
/admin/users/[id]
/admin/properties
/admin/properties/[id]
/admin/projects
/admin/projects/[id]
/admin/leads
/admin/leads/[id]
/admin/reports
/admin/support
/admin/bugs
/admin/billing
/admin/providers
/admin/audit
/admin/recovery
/admin/settings
```

Admin detail pages should use server-loaded related counts and paginated relations.

Do not fetch every related record in one giant query.

Use lazy-loaded tabs or sections with independent pagination.

---

## 36.1 Admin deep drill-down performance

User detail may show summary counts:

* properties
* projects
* Leads
* reports
* tickets
* payments

Each section loads detailed data only when opened.

Use:

* indexed relation queries
* pagination
* batched counts
* cached safe summaries
* loading states

Avoid N+1 queries.

---

## 36.2 Admin editing

Use separate service methods for internal editing.

Do not reuse unrestricted generic update functions.

Every Admin mutation should specify:

* actor
* permission
* target
* allowed fields
* reason requirement
* validation
* audit
* recovery behavior

---

# 37. Reporting and Bug Architecture

Reports and bugs must link to real entities.

Use generic link tables where useful:

```text
entity_type
entity_id
```

For critical relations, explicit foreign keys are preferable.

Bug records should support:

* affected route
* affected module
* affected role
* related user
* related entity
* related release
* reproduction
* verification

Logs must use safe reference IDs rather than raw secret data.

---

# 38. Audit and Logging Architecture

Separate:

* operational logs
* security events
* business audit logs
* provider delivery logs
* job logs

Do not put everything in one table.

## 38.1 Operational logs

Used for:

* errors
* performance
* request traces
* job failures

They may live in monitoring infrastructure.

## 38.2 Business audit logs

Used for:

* Admin edits
* moderation
* role change
* billing correction
* provider setting change
* restore
* delete
* security action

They belong in durable database records.

---

## 38.3 Log redaction

Never log:

* OTP
* provider secrets
* passwords
* service-role key
* full payment payload
* private message body unless explicitly justified and protected
* private document URLs
* raw authorization headers
* complete session tokens
* full contact information unnecessarily

---

# 39. Rate Limiting

Rate limits are required for:

* OTP send
* OTP verify
* login
* registration
* Direct Inquiry
* messages
* search
* saved-item toggles
* report submission
* support creation
* uploads
* payment order creation
* Admin bulk actions
* exports
* provider health checks

Rate limiting should consider:

* user ID
* IP
* device/session
* mobile number hash
* route
* action category

Use distributed rate limiting in production if multiple instances are deployed.

---

# 40. Security Headers

Production should configure:

* Content Security Policy
* Strict-Transport-Security
* X-Content-Type-Options
* Referrer-Policy
* Permissions-Policy
* frame restrictions
* secure cookie settings

CSP must be compatible with:

* Next.js
* approved analytics
* approved payment provider
* approved media CDN
* approved email links

Do not weaken CSP globally to fix one integration.

---

# 41. CSRF and Mutation Safety

Use framework-native protections and SameSite cookies.

Sensitive mutations should also verify:

* authenticated session
* valid origin where appropriate
* server-generated intent token where appropriate
* idempotency
* authorization
* reason/confirmation

GET requests must not perform mutations.

---

# 42. Content Security

User-provided text must be safely rendered.

Use:

* plain text by default
* sanitized rich text only where required
* safe Markdown rendering if approved
* server validation
* output escaping

Do not allow arbitrary HTML in:

* property description
* project description
* inquiry message
* Lead message
* notes
* support messages
* CMS without a trusted sanitized editor pipeline

---

# 43. Security Event Model

Record security-relevant events such as:

* repeated failed OTP
* rate-limit trigger
* suspicious login
* session revocation
* account suspension
* permission denial on sensitive action
* export attempt
* provider-secret configuration change
* webhook signature failure
* upload rejection
* abnormal inquiry volume

Security events must avoid storing unnecessary personal data.

---

# 44. Account Status Architecture

Account states may include:

* active
* pending
* restricted
* suspended
* closed

Account status must affect:

* login
* dashboard access
* posting
* inquiry
* messaging
* billing
* public content
* Admin actions

Suspension must not destroy data.

Restoration must preserve history.

---

# 45. Performance Architecture

The platform must be designed for high traffic.

Performance priorities:

1. homepage
2. search
3. property detail
4. project detail
5. authentication
6. Direct Inquiry
7. dashboard
8. Leads
9. Admin
10. provider callbacks

---

## 45.1 Server rendering

Use:

* static generation for stable public content
* ISR for public marketplace pages where appropriate
* server rendering for personalized or frequently changing content
* client rendering only for interactive parts

Avoid full client-side rendering of public marketplace pages without reason.

---

## 45.2 Query efficiency

Every major query must define:

* filters
* selected columns
* indexes
* pagination
* expected cardinality
* cache strategy
* timeout strategy

Avoid:

* `select *`
* unbounded joins
* N+1 queries
* large JSON payloads
* repeated identical requests
* loading full message history at once

---

## 45.3 Image performance

Public pages should use:

* responsive dimensions
* explicit width and height
* optimized format
* lazy loading below the fold
* priority only for critical images
* CDN delivery
* reasonable quality
* placeholder where useful

---

## 45.4 Bundle performance

Keep client bundles small.

Use:

* Server Components
* dynamic imports
* route-level code splitting
* deferred Admin tools
* deferred editors
* minimal animation libraries
* tree-shakeable dependencies

Avoid importing heavy Admin or chart libraries into public routes.

---

# 46. Scale Architecture

The platform may target extremely large usage.

Scale must be validated gradually.

## 46.1 Scale layers

### Edge and CDN

Handle:

* static assets
* public page cache
* image delivery
* bot filtering where configured
* request distribution

### Application layer

Use:

* stateless instances
* horizontal scaling
* short request lifecycle
* background jobs for heavy tasks
* distributed rate limiting
* structured monitoring

### Database layer

Use:

* indexes
* connection pooling
* pagination
* read optimization
* query budgets
* slow-query monitoring
* data partitioning only when justified
* archival strategy
* read replicas where supported and necessary

### Queue layer

Use for:

* email
* media processing
* scheduled expiry
* reporting
* analytics aggregation
* cleanup
* reconciliation

---

## 46.2 One-million-user target

No document or UI may claim proven support for one million concurrent users until real load testing and infrastructure validation succeed.

Required staged testing:

1. baseline single-user correctness
2. low concurrent load
3. moderate load
4. production-like load
5. peak simulation
6. failure-point analysis
7. bottleneck remediation
8. re-test
9. capacity report
10. cost report

---

# 47. Load Testing

Load tests must cover:

* homepage reads
* search
* property detail
* project detail
* login initiation
* OTP verification simulation through safe test provider
* Direct Inquiry
* Lead list
* messages
* Admin lists
* payment webhook
* notification creation

Do not run destructive load tests against production without explicit approval and safeguards.

Metrics:

* requests per second
* p50 latency
* p95 latency
* p99 latency
* error rate
* timeout rate
* database CPU
* database connections
* cache hit ratio
* queue depth
* memory
* application CPU
* provider throttling
* cost

---

# 48. Graceful Degradation

When an optional provider fails:

* core public browsing should remain available
* saved business data should remain safe
* the UI should show a clear provider state
* retry should be possible where appropriate
* background jobs should retry safely
* Admin should see failure status

Examples:

Email failure:

* Lead still exists
* in-app notification still exists
* email delivery shows failed
* retry available

Media processor failure:

* upload remains pending
* public publishing blocked
* user sees processing issue
* Admin sees failure

Payment failure:

* subscription remains inactive
* no invoice
* retry allowed
* no false success

---

# 49. Observability

Production observability must include:

* request tracing
* error tracking
* uptime monitoring
* database monitoring
* provider health
* queue health
* scheduled-job health
* payment webhook health
* email-delivery health
* security-event alerts
* deployment markers

Every critical alert needs:

* severity
* owner
* notification destination
* runbook
* escalation
* resolution note

---

# 50. Health Checks

Recommended endpoints or internal checks:

* application health
* database connectivity
* queue connectivity
* provider configuration presence
* provider live health where safe
* storage connectivity
* deployment version
* migration version

Public health endpoints must expose minimal information.

Detailed health belongs in protected Admin.

---

# 51. Backup Architecture

Backups must cover:

* database
* critical configuration
* migration history
* storage metadata
* private documents according to provider capability
* deployment configuration
* encryption keys through provider-managed secure backup where applicable

Backup schedule must define:

* frequency
* retention
* encryption
* access
* region
* restore process
* verification

A backup is not trusted until restored successfully in a safe environment.

---

# 52. Recovery Objectives

Define:

* RPO: acceptable data-loss window
* RTO: acceptable recovery duration

Different modules may have different targets.

Examples:

* payments and Leads require stricter RPO
* public cache may be rebuilt
* analytics may tolerate delayed recovery

Final targets must be agreed before production.

---

# 53. Deployment Architecture

Deployment requires:

* immutable build
* environment validation
* migration plan
* health check
* smoke test
* monitoring marker
* rollback checkpoint

Preferred flow:

```text
Code reviewed
→ CI checks
→ Staging deployment
→ Staging migration
→ Staging verification
→ Production backup
→ Production migration
→ Production deployment
→ Health check
→ Smoke test
→ Monitor
```

---

# 54. Database Migration Rules

Migration files must live in:

```text
supabase/migrations/
```

Recommended filename:

```text
YYYYMMDDHHMMSS_descriptive_name.sql
```

Each migration must document:

* purpose
* phase
* tables changed
* constraints changed
* indexes changed
* RLS changed
* destructive impact
* backfill
* expected duration
* rollback or forward-fix approach

---

## 54.1 Migration safety

Before applying:

* inspect current schema
* inspect dependent code
* inspect table size
* estimate lock impact
* create backup for high-risk migration
* test in local or staging
* verify rollback

For large tables:

* avoid long table locks
* create indexes concurrently where supported
* backfill in batches
* deploy additive schema before dependent code
* remove old schema only after verification

---

# 55. Rollback Architecture

Rollback must exist at:

* code level
* database level
* provider level
* feature-flag level
* deployment level

## 55.1 Code rollback

Record:

* stable commit
* deployment ID
* environment configuration
* migration compatibility

## 55.2 Database rollback

Prefer safe forward fixes when rollback would destroy newer valid data.

Every migration must state:

* reversible
* partially reversible
* forward-fix only

## 55.3 Feature rollback

Use feature flags for high-risk capabilities where appropriate.

Feature flags must not bypass authorization.

---

# 56. Feature Flags

Feature flags may control:

* provider-backed modules
* gradual rollout
* beta features
* maintenance
* expensive operations
* promotion availability

Flags must include:

* key
* environment
* audience
* enabled state
* reason
* changed by
* changed at
* audit history

Do not use feature flags to hide broken security.

---

# 57. Data Retention and Archival

Retention must be defined for:

* soft-deleted listings
* messages
* audit logs
* security events
* provider logs
* payment records
* invoices
* support tickets
* bug records
* uploads
* failed jobs
* analytics events

Retention must consider:

* legal obligations
* user privacy
* operational value
* storage cost
* recovery requirements

Archival jobs must be observable and reversible where required.

---

# 58. Privacy Architecture

Privacy requirements include:

* data minimization
* purpose limitation
* private-by-default fields
* permissioned Admin access
* consent storage
* secure export
* retention
* deletion requests according to policy
* audit
* safe public views
* provider data disclosure control

Admin visibility does not mean unrestricted visibility.

Sensitive tabs require explicit permission.

---

# 59. Accessibility Architecture

Accessible behavior must be supported by the technical system.

Shared primitives must provide:

* keyboard handling
* focus management
* modal focus trap
* Escape behavior
* accessible names
* ARIA only where necessary
* error announcements
* loading announcements
* reduced-motion support
* semantic structure

Do not implement accessibility separately on each page when a shared primitive can enforce it.

---

# 60. Responsive Architecture

Responsive behavior should be implemented through reusable layout primitives.

Examples:

* responsive page container
* mobile context header
* desktop app shell
* safe-area bottom navigation
* responsive data list
* table-to-card adapter
* drawer-to-full-screen-sheet adapter
* sticky action bar
* responsive form grid
* truncation with accessible expansion

Avoid one-off breakpoint hacks.

---

# 61. Design Token Architecture

Design tokens should cover:

* spacing
* typography
* radii
* shadows
* color
* status color
* surface
* border
* focus ring
* motion duration
* z-index
* layout width
* safe-area offsets

Tokens must support the original Apple-inspired visual system without copying Apple assets.

---

# 62. Z-Index and Overlay Architecture

Define a shared z-index scale.

Example categories:

* base
* sticky content
* header
* bottom navigation
* dropdown
* popover
* drawer
* modal
* toast
* critical system alert

Avoid arbitrary extremely high z-index values.

Overlays must be tested together.

---

# 63. Form Architecture

Forms must use shared patterns for:

* schema validation
* server errors
* field errors
* dirty state
* unsaved-change protection
* submission state
* retry
* draft save
* step navigation
* keyboard handling
* mobile sticky action
* accessibility

Long posting forms should save server-backed drafts.

---

# 64. Error Boundary Architecture

Use error boundaries at appropriate levels:

* global
* route group
* module
* complex widget

Error boundaries must:

* show safe message
* provide retry
* preserve navigation
* generate safe reference ID where needed
* report to monitoring
* not expose stack traces

---

# 65. Background Jobs

Background jobs may handle:

* email delivery
* promotion activation
* promotion expiry
* requirement expiry
* invoice email
* media processing
* cleanup
* analytics aggregation
* reconciliation
* backup verification
* stale-draft cleanup

Each job must define:

* idempotency
* retry limit
* backoff
* timeout
* lock
* dead-letter state
* Admin visibility
* alert threshold

---

# 66. Cron Safety

Cron-triggered work must:

* authenticate invocation
* prevent overlapping runs
* use idempotent logic
* log start and finish
* record processed counts
* record failures
* avoid unbounded batch size
* support resumable processing

---

# 67. Analytics Architecture

Analytics must be privacy-aware.

Approved events may include:

* public page view
* search submission
* result open
* saved item
* Direct Inquiry start
* Direct Inquiry success
* promotion impression
* promotion click
* posting completion
* subscription checkout

Do not send:

* full mobile number
* private email
* private message
* private Lead notes
* raw search text containing personal data
* provider secrets
* payment secrets
* private document URL

Business analytics must use real events.

---

# 68. Search Engine Optimization Architecture

SEO infrastructure must support:

* metadata generation
* canonical URL
* robots control
* sitemap
* structured data
* breadcrumbs
* slug history
* redirect history
* public-safe content
* cache invalidation

Search engines must never index:

* private dashboards
* Leads
* messages
* billing
* Admin
* auth states
* drafts
* pending content
* rejected content
* deleted content

---

# 69. Admin Query Boundaries

Admin needs broad visibility, but queries must remain scoped and performant.

Rules:

* never load all related data at once
* paginate every large relation
* use summary counts
* lazy-load detail tabs
* require permission before sensitive queries
* log sensitive exports
* avoid raw provider secrets
* avoid public caching
* mask contact details where full view is not required

---

# 70. Sensitive Data Classification

## Level 1 — Public

Examples:

* approved listing title
* approved project name
* public price
* public location
* public Builder profile

## Level 2 — Authenticated private

Examples:

* own profile
* own drafts
* own notifications
* own billing summary

## Level 3 — Restricted business

Examples:

* Leads
* messages
* contact shared through inquiry
* private notes
* moderation reasons visible to owner

## Level 4 — Internal sensitive

Examples:

* private verification documents
* fraud reports
* Admin notes
* security events
* payment reconciliation
* provider configuration state

## Level 5 — Secret

Examples:

* API secrets
* service-role key
* webhook secret
* encryption keys
* session signing secrets

Each level requires stricter handling.

---

# 71. Testing Architecture

Tests should include:

## Unit

* validators
* permission functions
* status transitions
* price calculations
* idempotency logic
* route resolver
* notification destination resolver

## Integration

* service plus database
* RLS
* Direct Inquiry transaction
* moderation transaction
* payment event handling
* restoration
* audit creation

## End-to-end

* login
* registration
* search
* posting
* project unit management
* Direct Inquiry
* Lead workflow
* Admin drill-down
* moderation recovery
* billing
* provider Setup Required behavior

---

# 72. Data Seeding

Development seed data must:

* be clearly marked
* be isolated
* avoid real personal data
* support all roles
* support lifecycle states
* support RLS tests
* be removable
* not appear in production

Production startup must not auto-seed demo marketplace content.

---

# 73. Security Review Checklist

Before production, verify:

* secrets
* RLS
* authorization
* input validation
* output sanitization
* session cookies
* CSP
* rate limits
* OTP controls
* inquiry controls
* upload controls
* webhook verification
* payment amount validation
* private document access
* audit immutability
* Admin permission
* export controls
* dependency vulnerabilities
* logging redaction
* backup access
* incident process

---

# 74. Performance Review Checklist

Before production, verify:

* route rendering strategy
* bundle size
* image optimization
* query plans
* indexes
* pagination
* cache
* invalidation
* queue throughput
* provider limits
* database connections
* Core Web Vitals
* load test
* error rate
* autoscaling
* cost

---

# 75. Architecture Verification Requirements

A phase affecting architecture may pass only if applicable checks succeed:

* repository inspection
* migration created
* migration applied safely
* schema verified
* constraints verified
* indexes verified
* RLS verified
* service authorization verified
* TypeScript types generated or synchronized
* lint passed
* typecheck passed
* tests passed
* build passed
* live browser flow passed
* direct URL checks passed
* wrong-user checks passed
* console checked
* network checked
* documentation updated
* registry updated
* rollback recorded

---

# 76. Required Documentation Updates After Architecture Changes

Update:

```text
PROJECT_STATE.md
FEATURE_REGISTRY.md
```

Also update the relevant detailed document when the architecture contract changes.

Record:

* changed files
* migration
* tables
* policies
* indexes
* provider impact
* security impact
* performance impact
* rollback
* verification
* next step

---

# 77. Architecture Decision Record Rule

For major architectural decisions, record a concise decision entry in `PROJECT_STATE.md` or an approved architecture section.

Include:

* decision
* context
* options considered
* reason
* consequences
* rollback or replacement path

Examples:

* search provider selection
* media provider selection
* queue provider selection
* hosting selection
* caching strategy
* public-safe view strategy

Do not create many extra files unless approved.

---

# 78. Non-Negotiable Architecture Rules

1. Business data is server-backed.
2. Supabase is the initial data and auth foundation.
3. Public roles are Owner, Broker, and Builder/Developer.
4. Project units always belong to a parent project.
5. Direct Inquiry creates a real Lead context.
6. Leads preserve source entity relationships.
7. Public pages use public-safe data.
8. Private contact never appears in public payloads.
9. RLS is required for private tables.
10. Server authorization is required in addition to RLS.
11. Database changes require migrations.
12. Sensitive actions require audit.
13. Payment activation requires verified server-side provider events.
14. Provider failures must not create fake success.
15. Long-running work belongs in jobs or queues.
16. Large collections require pagination.
17. Search uses indexed server queries.
18. Public cache must never contain private user data.
19. Admin drill-down must be relational and paginated.
20. Recovery preserves original history.
21. Soft deletion is the default for recoverable entities.
22. Secrets never enter client code, logs, or documentation.
23. Performance claims require measurement.
24. Production readiness requires backup, monitoring, and rollback.
25. Live verification is required after implementation.

---

# 79. Implementation Handoff

The next document must define the complete authentication and user-account system, including:

* login modal and mobile sheet
* direct login route behavior
* contextual authentication
* role selection
* full-name validation
* email validation
* mobile validation
* 4-digit OTP
* OTP autofill
* resend
* limits
* session
* redirect
* account state
* onboarding
* public and private profiles
* role changes
* internal authentication
* recovery
* responsive UX
* accessibility
* verification

---

