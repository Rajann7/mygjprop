# `docs/03_AUTH_ONBOARDING_ROLES_PROFILE_AND_SESSIONS.md`

# My Gujarat Property — Authentication, Registration, Onboarding, Roles, Profiles, Account Status, Sessions, Security, Recovery, and Verification Authority

This document defines the complete authentication and account-management system for **My Gujarat Property**.

It is the primary authority for:

* login
* registration
* mobile-number identity
* four-digit OTP
* contextual authentication
* direct authentication routes
* role selection
* onboarding
* profile creation
* role-specific profiles
* public and private profile data
* account status
* session creation
* session refresh
* route protection
* logout
* account recovery
* role-change requests
* internal staff authentication
* permission-aware navigation
* consent
* security controls
* abuse prevention
* responsive authentication UX
* accessibility
* Admin and Super Admin account management
* automated testing
* live-browser verification
* production provider verification

Claude must read this document before implementing or changing:

* authentication routes
* login or registration UI
* OTP services
* user creation
* profile tables
* role records
* onboarding
* session middleware
* account-status behavior
* protected-route redirects
* public profiles
* role changes
* account recovery
* internal staff authentication
* identity-related Admin actions

---

# 1. Authentication Product Goal

Authentication must feel:

* simple
* fast
* secure
* mobile-first
* predictable
* accessible
* context-aware
* honest about provider state
* recoverable when something fails

A user should be able to understand:

* whether they are logging in or registering
* which mobile number is being used
* whether the account exists
* when an OTP was sent
* how long the OTP remains valid
* how many resend or verification attempts remain
* what happens after verification
* where they will return after success
* what to do when verification fails
* how to close or leave the authentication experience safely

Authentication must not feel like an unrelated standalone application.

When authentication begins from a Property, Project, Unit, Requirement, saved item, or other protected action, the user must remain connected to that originating context.

---

# 2. Final Identity Model

The primary login identifier is the user’s verified mobile number.

The public authentication model uses:

```text
Verified Mobile Number
→ Four-Digit OTP
→ Secure Session
→ Application Profile
→ Public Role
→ Role-Specific Experience
```

The application must distinguish between:

* authentication identity
* common application profile
* public role
* role-specific business profile
* account status
* verification state
* subscription state
* internal staff permissions

These concepts must not be collapsed into one unstructured record.

---

# 3. User Categories

The authentication system supports the following categories.

## 3.1 Guest

A Guest is not authenticated.

A Guest may access approved public experiences and begin authentication.

## 3.2 Public authenticated user

A public authenticated user has one approved public role:

* Owner
* Broker
* Builder/Developer

## 3.3 Internal authenticated user

An internal authenticated user may be:

* Super Admin
* Admin
* permission-scoped staff

Internal users must use protected internal authentication and must never be created through public registration.

## 3.4 Restricted account

A restricted account may have a valid identity but limited functionality because of:

* incomplete mandatory onboarding
* pending verification
* account restriction
* suspension
* security review
* billing restriction
* compliance requirement

Restrictions must be server-enforced.

---

# 4. Final Public Roles

Public registration must display exactly:

1. Owner
2. Broker
3. Builder/Developer

Recommended internal values:

```text
owner
broker
builder
```

The role selector must not show internal roles.

Role selection must include a short explanation.

### Owner

For a person listing and managing their own Property.

### Broker

For a real-estate professional managing brokerage listings, requirements, Leads, and related activity.

### Builder/Developer

For a business managing Projects, Units, Builder Leads, and eligible homepage promotions.

The user must understand the selected role before continuing.

---

# 5. Authentication Entry Points

Authentication may begin from:

* public header Login action
* public header Register action
* direct `/login` route
* direct registration route where supported
* Direct Inquiry
* Save Property
* Save Project
* Save Search
* Post Property
* Post Project
* Post Requirement
* protected profile action
* protected dashboard route
* protected billing route
* protected notification destination
* session-expired recovery
* support flow requiring authentication

Every entry point must create an authentication context.

---

# 6. Authentication Context

The authentication context must record only safe information required to return the user to the intended experience.

Recommended context data:

* originating path
* originating query
* intended action
* related entity type
* related entity ID
* safe display title
* selected search state
* safe form draft reference
* timestamp
* nonce or integrity token
* post-auth destination

Do not store sensitive information in public query parameters.

Do not include:

* raw mobile number
* OTP
* private message
* payment secret
* provider key
* complete private form payload
* raw authorization token

The context must be validated server-side before it is used.

---

# 7. Direct Login Route Behavior

When a Guest directly opens `/login`:

* render the public homepage as the underlying route context
* show the login experience above it
* keep the homepage visually present but non-interactive while the auth layer is active
* avoid loading a separate empty login page
* provide an intentional Close or Back action
* keep browser Back behavior predictable
* prevent duplicate overlay stacking
* prevent background scrolling while the auth layer is modal
* preserve accessibility and focus control

## 7.1 Desktop presentation

On suitable desktop widths:

* use an accessible centered modal or carefully sized dialog
* keep the form readable
* do not make the modal excessively wide
* keep a visible Close action
* trap focus while open
* restore focus to the triggering element after Close
* allow Escape when no dangerous unsaved action exists

## 7.2 Mobile presentation

On mobile:

* use a full-screen authentication experience or mobile sheet
* respect safe areas
* avoid a tiny centered popup
* keep Back or Close reachable
* keep the primary action above or correctly adapted to the mobile keyboard
* avoid content being hidden by the keyboard
* allow natural scrolling if needed
* keep OTP fields visible while typing

## 7.3 Tablet presentation

On tablet:

* choose a large modal, side sheet, or centered panel based on available width
* avoid oversized desktop whitespace
* avoid cramped mobile-style content when there is sufficient space

---

# 8. Contextual Authentication Behavior

When authentication is triggered from a protected action, the underlying context must remain understandable.

Example:

```text
Property Detail
→ Tap Direct Inquiry
→ Authentication opens above Property Detail
→ Login or registration succeeds
→ Return to the same Property
→ Resume Direct Inquiry
```

The system must preserve:

* Property, Project, Unit, or Requirement context
* safe search state
* selected unit where applicable
* intended action
* previous route
* relevant tab
* safe draft reference

The system must not:

* redirect to an unrelated dashboard after successful authentication
* lose the source entity
* submit an inquiry automatically without final user confirmation
* duplicate the protected action
* reopen stale auth after success
* create redirect loops

---

# 9. Login Flow

The final login journey is:

```text
Open Login
→ Enter Mobile Number
→ Validate Mobile Number
→ Check Account State Safely
→ Send Four-Digit OTP
→ Enter or Autofill OTP
→ Verify OTP
→ Validate Account Status
→ Create Secure Session
→ Resolve Intended Destination
→ Continue
```

---

# 10. Login Step 1 — Mobile Number

The mobile-number screen must include:

* clear title
* concise explanation
* country context
* mobile-number input
* Continue action
* Register option where appropriate
* Terms and Privacy links
* Close or Back
* loading state
* error state

Recommended title:

```text
Login to My Gujarat Property
```

Recommended helper text:

```text
Enter your mobile number to receive a four-digit verification code.
```

The input must:

* accept numeric input
* support paste
* remove spaces and formatting safely
* normalize the number
* reject invalid length
* reject unsupported country format
* use suitable mobile keyboard
* include an accessible label
* include autocomplete attributes
* preserve entered value when moving between Login and Register where safe

---

# 11. Indian Mobile-Number Validation

The first supported public mobile-number format is Indian mobile.

The system should normalize to E.164.

Example:

```text
User input: 9876543210
Normalized: +919876543210
```

Validation should check:

* required value
* numeric content after normalization
* supported country
* valid national length
* plausible Indian mobile prefix according to current validation policy
* uniqueness when creating an account
* active-account state during login
* blocked or abuse-limited state

Validation must occur:

* client-side for immediate feedback
* server-side for authority
* provider-side where required

Do not reveal too much account existence information in an abuse-prone public endpoint.

The user-facing experience may guide an unregistered user to registration while server responses remain enumeration-resistant.

---

# 12. Registered and Unregistered Number Behavior

## 12.1 Registered mobile number

When the mobile number belongs to a valid public account:

* proceed to OTP send
* show the masked mobile number
* show resend information
* do not expose account details before verification

## 12.2 Unregistered mobile number

When the mobile number is not registered:

* show a clear message
* offer a Register action
* preserve the entered number where safe
* avoid a dead end
* do not create an account automatically
* do not send the user to an unrelated page

Recommended message:

```text
No account was found for this mobile number.
```

Recommended action:

```text
Create Account
```

## 12.3 Closed, suspended, or restricted number

The system must not expose internal security details.

Use safe messages.

Examples:

```text
This account cannot currently be accessed. Contact support for assistance.
```

or:

```text
Additional verification is required before this account can continue.
```

The server must record the real reason internally.

---

# 13. Registration Flow

The final registration journey is:

```text
Open Register
→ Select Role
→ Enter Full Name
→ Enter Email
→ Enter Mobile Number
→ Accept Required Consent
→ Validate
→ Send Four-Digit OTP
→ Verify OTP
→ Create Authentication Identity
→ Create Common Profile
→ Create Role Assignment
→ Create Role-Specific Profile
→ Create Consent Record
→ Create Secure Session
→ Continue to Onboarding or Intended Action
```

Account creation must be transactional or safely recoverable.

The system must not create a partially valid account without a clear recovery state.

---

# 14. Registration Step Structure

The mobile-first registration flow should use a limited number of clear steps.

Recommended structure:

### Step 1 — Choose role

* Owner
* Broker
* Builder/Developer

### Step 2 — Basic details

* Full name
* Email
* Mobile number
* required consent

### Step 3 — Verify mobile

* four-digit OTP
* resend
* change number

### Step 4 — Account created

* success
* next step
* relevant onboarding or intended action

A single-screen registration form may be used on desktop only when it remains clear and does not reduce mobile consistency.

---

# 15. Role Selection UX

The role selector must use clearly differentiated cards or radio-style options.

Each role option should include:

* role name
* one-line purpose
* optional simple icon
* selected state
* accessible input semantics

The user must be able to:

* select one role
* change selection before submitting
* return from the next step
* understand role impact

Role selection must be submitted to the server as an approved enum.

The server must reject:

* missing role
* unknown role
* internal role
* manipulated role value
* unsupported role transition during public registration

---

# 16. Full-Name Validation

Full name is required.

Validation should include:

* trimming leading and trailing whitespace
* collapsing repeated spaces
* minimum meaningful length
* reasonable maximum length
* rejection of control characters
* Unicode-safe text handling
* safe support for Indian names
* support for apostrophes, hyphens, and periods where valid
* rejection of script or HTML content
* clear user-facing errors

Do not require a fixed first-name and last-name split unless the business later requires it.

Recommended storage:

```text
full_name
```

Optional derived display fields must not become independent uncontrolled authorities.

---

# 17. Email Validation

Email is required during registration.

Email validation must include:

* trimming
* lowercase normalization for comparison
* valid format
* reasonable maximum length
* duplicate-account policy
* blocked-domain policy only when explicitly justified
* safe server-side validation
* clear error message

The system must define whether the same email may belong to more than one public account.

Recommended final rule:

* one normalized email should map to one active public account unless a verified business requirement explicitly permits otherwise

Email ownership verification may occur:

* during onboarding
* through a verification email
* before sensitive email-based actions
* before email-notification reliance

Email verification status must be separate from mobile verification status.

---

# 18. Consent During Registration

Registration must record acceptance of:

* Terms of Service
* Privacy Policy
* account creation and identity processing
* OTP delivery
* mandatory platform communication

Optional marketing consent must be separate and unchecked by default where required.

Consent records should include:

* user ID
* consent type
* document version
* accepted state
* accepted timestamp
* source
* environment
* optional IP hash or request reference according to privacy policy

The UI must provide links to the current legal documents.

---

# 19. Four-Digit OTP Experience

The OTP screen must include:

* title
* masked destination
* four-digit input
* Verify action
* resend countdown
* Resend action when eligible
* Change Number action
* Back or Close
* error state
* loading state
* expiry state
* attempt-limit state
* provider Setup Required or failure state where applicable

Recommended title:

```text
Enter Verification Code
```

Recommended helper text:

```text
We sent a four-digit code to +91 ••••• ••210.
```

---

# 20. OTP Input Behavior

The OTP input must:

* accept exactly four digits
* support one-time-code autofill
* support paste
* support manual typing
* move focus naturally
* support Backspace
* avoid focus traps
* avoid submitting incomplete values
* clear or select invalid code according to UX rules
* be accessible to screen readers
* work with mobile keyboards
* not expose OTP in analytics
* not store OTP in local storage
* not include OTP in URL
* not log OTP

A single visually segmented input backed by one semantic input is preferred for accessibility and autofill reliability.

---

# 21. OTP Autofill

Where supported, configure:

* `autocomplete="one-time-code"`
* appropriate input mode
* compatible SMS message format
* Web OTP API only when secure, supported, and reviewed

Autofill must never:

* bypass server verification
* submit before all digits are available
* expose the OTP to unrelated scripts
* break manual entry
* trap the user when the SMS arrives late

---

# 22. OTP Expiry

The OTP must have a short validity period.

The exact duration must be defined with the selected SMS provider and security testing.

Recommended production starting range:

* approximately two to five minutes

The UI must show:

* remaining validity or resend countdown
* expired state
* clear Resend action
* clear Change Number action

Expired OTP must fail server-side even when the client timer is inaccurate.

---

# 23. OTP Resend

OTP resend must include:

* cooldown timer
* maximum resend count per time window
* number-based rate limit
* IP-based rate limit
* session-based limit
* provider cost protection
* user feedback
* new OTP invalidating or superseding previous OTP according to provider behavior

The UI must not enable Resend before the server allows it.

Recommended states:

* `Send Code`
* `Sending Code`
* `Code Sent`
* `Resend in 28s`
* `Resend Code`
* `Too Many Requests`
* `Provider Unavailable`

---

# 24. OTP Attempt Limits

Because the code has four digits, strict attempt limits are required.

The service must support:

* low maximum attempts per OTP
* temporary lock after repeated failures
* per-number limit
* per-IP limit
* per-device or session signal
* security event
* safe user message
* support escalation when needed

Example user message:

```text
Too many incorrect attempts. Request a new code and try again.
```

Do not reveal the exact remaining security threshold if that would help abuse.

---

# 25. OTP Provider States

The OTP service must use honest provider states.

Possible states:

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

## 25.1 Development behavior

A development OTP mode may exist only when:

* environment is not production
* it is explicitly enabled
* it is visually labeled as development behavior
* it cannot be activated accidentally in production
* it does not use a fixed publicly known production code
* it is audited in project state
* it is disabled before production sign-off

## 25.2 Production behavior

Production must require:

* real SMS provider
* real provider credentials
* verified sending
* verified code flow
* cost and quota monitoring
* delivery-failure handling
* abuse limits
* no development OTP bypass

---

# 26. OTP Send Result

Do not show `Code Sent` solely because the frontend started a request.

The server must:

1. validate mobile number
2. check rate limits
3. create or request OTP
4. call the provider
5. receive an accepted provider result
6. store safe delivery state
7. return a safe response

If the provider fails:

* do not show false success
* preserve the entered number
* show retry when appropriate
* show support or Setup Required when applicable
* record safe diagnostics
* avoid exposing provider internals

---

# 27. OTP Verification Result

The server must:

1. validate the verification session
2. validate OTP format
3. apply attempt limits
4. verify through trusted provider or secure OTP store
5. confirm expiry
6. prevent replay
7. load account or registration context
8. validate account status
9. create or finish the user record
10. create the secure session
11. record verification event
12. return a safe destination

The client must never decide that OTP verification succeeded.

---

# 28. Registration Account Creation Transaction

After successful registration OTP verification, the system must create:

* authentication identity
* common profile
* public role assignment
* role-specific profile
* account-status record
* required consent records
* initial onboarding state
* optional welcome notification
* audit or account-creation event
* secure session

The operation should be transactional where possible.

If one step fails:

* do not create duplicate identities on retry
* use idempotency
* record partial state safely
* provide a recovery path
* avoid leaving the user unable to login or register

---

# 29. Common Profile

The common profile may contain:

* user ID
* full name
* normalized mobile number
* mobile verified timestamp
* normalized email
* email verified timestamp
* public role
* account status
* profile completion status
* avatar reference
* preferred language where supported
* timezone
* notification preference reference
* created timestamp
* updated timestamp
* soft-delete fields

The common profile must not contain all role-specific business data.

---

# 30. Owner Profile

The Owner profile may contain:

* full name
* profile image
* approved public display name
* private email
* verified mobile
* current city
* preferred language
* account preferences
* public-profile status
* verification status
* billing profile relation

Optional Owner public-profile fields must remain safe and minimal.

---

# 31. Broker Profile

The Broker profile may contain:

* personal name
* business display name
* business description
* public logo or image
* verified mobile
* private email
* service cities
* service localities
* business address
* registration information where required
* public-profile state
* verification status
* billing profile relation
* subscription relation

The Broker profile must not expose private contact details publicly without approved policy.

---

# 32. Builder/Developer Profile

The Builder profile may contain:

* legal or business name
* public Builder name
* logo
* cover image where approved
* description
* registered office address
* service cities
* compliance information
* RERA-related business information where applicable
* public-profile state
* verification status
* billing profile
* subscription
* approved public Projects

Private documents must remain in protected storage.

---

# 33. Role-Specific Onboarding

Registration creates the account.

Onboarding completes role-relevant setup.

Onboarding must be progressive.

Do not force every possible field before the user can understand the product.

Mandatory fields should be limited to what is required for:

* identity
* security
* legal compliance
* first meaningful action
* public trust
* billing where required

---

# 34. Owner Onboarding

Recommended Owner onboarding:

1. account created
2. confirm basic profile
3. select current city
4. optionally add profile image
5. review account preferences
6. continue to intended action or Owner dashboard
7. prompt for additional details when creating first Property

Owner onboarding must not require Property information before the user starts posting.

---

# 35. Broker Onboarding

Recommended Broker onboarding:

1. account created
2. enter business display name
3. enter business description
4. select primary service cities
5. add public logo or profile image
6. provide business information required by policy
7. review notification preferences
8. continue to intended action or Broker dashboard

Additional verification can be requested before:

* higher listing limits
* sensitive business actions
* premium plans
* public verification badges

---

# 36. Builder/Developer Onboarding

Recommended Builder onboarding:

1. account created
2. enter Builder business name
3. enter legal or registered name where required
4. add logo
5. enter business description
6. enter registered office address
7. select operating cities
8. provide required compliance information
9. add verification documents through secure upload
10. review plan or trial eligibility
11. continue to Builder dashboard or Project creation

Builder onboarding must not mark the profile verified until the required review succeeds.

---

# 37. Onboarding Progress

Onboarding should have:

* visible progress
* clear required and optional fields
* save and continue
* server-backed progress
* resume capability
* mobile keyboard safety
* Back behavior
* Cancel or exit where allowed
* incomplete-state handling
* clear next action

Do not use a fake progress percentage disconnected from real required steps.

---

# 38. Profile Completion

Profile completion must be based on real required fields.

Possible states:

* `not_started`
* `in_progress`
* `minimum_complete`
* `complete`
* `verification_required`
* `under_review`
* `verified`
* `changes_required`

Profile-completion percentage must only be shown when it is based on documented field weights or required steps.

Do not show decorative completion numbers.

---

# 39. Profile Editing

Authenticated users may edit permitted profile fields.

Profile editing must include:

* current saved value
* field validation
* save state
* server persistence
* success feedback
* error recovery
* unsaved-change protection
* audit for sensitive fields
* moderation where public content changes require review

Small safe fields may use inline editing or a short modal.

Complex business profile changes should use a structured page or drawer.

---

# 40. Sensitive Profile Changes

Sensitive changes include:

* mobile number
* email
* public role
* legal business name
* verification documents
* account ownership
* billing identity
* GST information
* public verification state

Sensitive changes require:

* reauthentication where appropriate
* new verification
* reason where applicable
* server authorization
* audit
* notification
* review where required

---

# 41. Mobile-Number Change

Changing the primary mobile number must be a secure multi-step process.

Recommended flow:

```text
Account Settings
→ Change Mobile Number
→ Reauthenticate Current Account
→ Enter New Mobile Number
→ Validate Uniqueness
→ Send OTP to New Number
→ Verify OTP
→ Confirm Change
→ Update Identity and Profile
→ Revoke or Refresh Sessions
→ Send Security Notification
→ Record Audit Event
```

The system should consider notifying the previous verified contact through an approved channel.

The old number must not be released or reused unsafely.

---

# 42. Email Change

Changing email should require:

* authenticated session
* new email validation
* uniqueness check
* verification email where provider is active
* pending-change state
* confirmation
* audit
* security notification

Until verification succeeds:

* retain the currently verified email as the primary trusted email
* store the pending email separately
* avoid routing important notifications only to an unverified email

---

# 43. Role Change

A public user must not directly change their role through a normal dropdown.

Role change requires a controlled request.

Recommended flow:

```text
Profile Settings
→ Request Role Change
→ Select Requested Role
→ Review Impact
→ Enter Reason
→ Provide Required Business Information
→ Submit
→ Admin Review
→ Approve, Reject, or Request Changes
→ Apply Data and Billing Migration
→ Notify User
→ Record Audit and History
```

## 43.1 Role-change impact review

The system must evaluate:

* current Properties
* current Projects
* current Units
* current Requirements
* current Leads
* current subscription
* plan eligibility
* public profile
* verification requirements
* navigation
* permissions
* public content ownership
* billing impact

A role change must not orphan records.

---

# 44. Role Change Approval

The Admin reviewer must see:

* current role
* requested role
* user profile
* current content
* current subscription
* required new verification
* affected data
* reason
* history

Approval must require:

* permission
* reason
* confirmation
* transactional update
* audit
* notification
* safe route and navigation refresh

---

# 45. Public Profile and Private Account Separation

Every public role may have:

* private account profile
* optional public profile

Public profiles must use public-safe data.

Private account data may include:

* mobile
* private email
* billing
* sessions
* verification documents
* security events
* internal moderation
* private address details
* Leads
* messages

Public profile data may include only approved fields.

The public profile must be loaded through:

* public-safe view
* public-safe service
* approved cache
* RLS-compatible access

---

# 46. Profile Privacy Controls

Where product scope allows, users may control:

* public profile visibility
* approved display name
* profile image
* business description
* service locations
* optional public information
* email notification preferences
* analytics or cookie preferences

Users may not hide legally or operationally required status from Admin.

---

# 47. Account Status Model

Recommended public account statuses:

* `active`
* `pending`
* `restricted`
* `suspended`
* `closed`

## 47.1 Active

The user may access permitted role features.

## 47.2 Pending

The account exists but may require:

* onboarding
* email verification
* role verification
* compliance review

## 47.3 Restricted

Selected actions are blocked.

The UI must explain the relevant restriction without exposing sensitive internal details.

## 47.4 Suspended

The user’s access is substantially blocked.

Public content behavior must follow policy.

Data must remain preserved.

## 47.5 Closed

The account is closed according to policy.

Login may be blocked or routed to a recovery/support flow.

---

# 48. Account-Status Enforcement

Account status must be enforced by:

* middleware or protected layout
* server services
* database rules where appropriate
* action permissions
* UI state

Examples:

A restricted account may:

* view own account
* contact support
* view restriction reason where safe
* complete required verification

but may not:

* create new listings
* submit Direct Inquiry
* send messages
* initiate payments
* publish public content

Exact restrictions must be configurable and documented.

---

# 49. Session Creation

A session may be created only after:

* valid authentication
* valid OTP
* valid account state
* successful identity resolution
* server verification

The session must reference:

* authentication user ID
* session ID
* issued timestamp
* expiry
* refresh capability
* environment
* role snapshot for navigation hints
* authoritative profile lookup

Do not rely permanently on stale role metadata inside the client session.

---

# 50. Session Cookies

Production session cookies must use appropriate settings:

* Secure
* HttpOnly where supported
* SameSite policy
* correct domain scope
* correct path
* reasonable expiry
* no unnecessary cross-subdomain exposure
* secure refresh behavior

Do not store authentication tokens in local storage when secure cookie-based architecture is available.

---

# 51. Session Refresh

The application must handle session refresh without:

* losing current route
* losing unsaved safe state unnecessarily
* duplicating requests
* showing repeated login overlays
* creating redirect loops
* leaking previous-user data
* keeping expired authorization active

When a session refresh fails:

* clear private cached data
* preserve safe intended destination
* show authentication
* explain session expiration
* return after successful reauthentication

---

# 52. Session Expiry UX

Recommended message:

```text
Your session has expired. Verify your mobile number to continue.
```

The system should preserve:

* current route
* intended action
* safe form draft reference
* selected entity
* search state

The system must not preserve:

* OTP
* payment secret
* unsafe private payload
* stale authorization assumptions

---

# 53. Logged-In User Visiting Auth Routes

When an authenticated active user visits:

* `/login`
* registration route
* OTP route

the system must:

* validate the session server-side
* resolve the role
* redirect to the correct authenticated destination
* avoid rendering the auth screen
* avoid client-side flash of login
* avoid loops

If an intended destination exists and is permitted, use it.

Otherwise use the correct role default.

---

# 54. Default Post-Login Destinations

Recommended defaults:

### Owner

```text
Owner Dashboard
```

### Broker

```text
Broker Dashboard
```

### Builder/Developer

```text
Builder Dashboard
```

### Super Admin/Admin/Staff

```text
Internal Dashboard or First Permitted Module
```

An intended action takes priority over the default when it is:

* valid
* safe
* permitted
* not expired

---

# 55. Role-Aware Route Protection

Protected routes must define:

* authentication requirement
* accepted role
* accepted account status
* required permission
* optional plan requirement
* optional verification requirement

Examples:

```text
Owner Property Create
- authenticated
- role: owner
- account: active or eligible pending
- plan/listing limit: valid
```

```text
Builder Project Create
- authenticated
- role: builder
- required profile state
- required compliance state
- plan eligibility
```

```text
Admin Billing
- authenticated internal user
- billing-view permission
```

---

# 56. Route Guard Behavior

When route access fails:

## Guest

* open authentication
* preserve intended route

## Wrong public role

* show permission-denied state
* explain the allowed product area
* offer a safe destination
* do not silently redirect without explanation when the action matters

## Restricted account

* show restriction state
* show allowed recovery action

## Missing staff permission

* show internal permission-denied state
* record sensitive denial where appropriate
* avoid exposing module data

## Missing setup or provider

* show Setup Required
* do not show fake completion

---

# 57. Logout

Logout must:

* call the server or auth provider
* invalidate the active session
* clear private client state
* clear private caches
* close authenticated realtime channels
* remove user-specific optimistic state
* redirect to a safe public destination
* prevent browser Back from revealing active private data
* preserve no sensitive form state
* record logout event where appropriate

Logout should be accessible from:

* profile/account menu
* account settings
* security center
* Admin account menu

---

# 58. Logout All Sessions

Where supported, users may choose:

```text
Log Out of All Devices
```

This action must:

* require authentication
* optionally require recent verification
* revoke active refresh tokens or sessions
* preserve the current session only when explicitly designed
* notify the user
* create a security event
* show success or failure

---

# 59. Sessions and Devices

A security center may show:

* current session
* recent active sessions
* approximate device type
* browser
* approximate city or region only when collected lawfully
* last active time
* session-created time

Users may revoke other sessions.

Do not expose:

* raw IP
* raw session token
* full device fingerprint
* unnecessary precise location

Admin access to session details requires explicit security permission.

---

# 60. Account Recovery

Because mobile OTP is the primary login method, recovery must handle cases such as:

* user lost access to mobile number
* mobile number changed
* SIM unavailable
* account suspended
* duplicate identity
* email conflict
* incomplete account creation
* suspected compromise

Recovery must not allow weak identity replacement.

---

# 61. Assisted Recovery Flow

Recommended flow:

```text
Open Account Help
→ Select Recovery Problem
→ Provide Known Account Information
→ Create Support Reference
→ Identity Review
→ Request Supporting Evidence if Required
→ Authorized Staff Decision
→ Secure Mobile Change or Account Restoration
→ Revoke Old Sessions
→ Notify Available Trusted Channels
→ Record Audit and Recovery History
```

High-risk recovery must require:

* trained staff
* explicit permission
* reason
* evidence review
* audit
* before/after data
* session revocation
* security notification

---

# 62. Duplicate Account Handling

When duplicate identity indicators appear:

* do not merge automatically
* block unsafe account creation
* preserve current records
* create a review case
* identify mobile and email ownership safely
* allow Admin merge only with explicit permission
* preview affected records
* preserve audit and original IDs
* avoid orphaning Properties, Projects, Leads, payments, or invoices

---

# 63. Account Closure

Users may request account closure according to legal and business policy.

Closure flow should include:

* impact summary
* active listings
* active Projects
* active subscriptions
* unpaid billing
* active Leads
* legal retention
* confirmation
* optional reason
* cooling-off or recovery period where approved
* session revocation
* public-content behavior
* audit
* notification

Account closure must not delete legally required billing or audit records.

---

# 64. Account Deletion and Data Rights

Where applicable, the product must support:

* data access request
* correction request
* account closure
* deletion request
* consent withdrawal
* export request

The system must distinguish:

* content that can be deleted
* content that must be retained
* content that can be anonymized
* content that must remain for billing, fraud, dispute, legal, or audit purposes

Admin handling must be permissioned and audited.

---

# 65. Internal Staff Authentication

Internal users require separate protection.

Internal authentication must support:

* no public registration
* invited or Admin-created accounts
* internal account approval
* strong authentication
* secure session
* permission loading
* account status
* audit
* session revocation
* security alerts

A public role does not automatically grant internal access.

---

# 66. Internal User Creation

Super Admin or permissioned staff may create an internal user.

Required data may include:

* full name
* work email
* verified mobile
* internal role class
* permissions or assigned staff role
* account status
* invitation expiry
* manager or owner where required

Creation must:

* require permission
* require confirmation
* create audit
* send secure invitation through an approved channel
* avoid sharing temporary credentials insecurely

---

# 67. Staff Permissions

Internal access must use explicit permissions.

Examples:

* `users.view`
* `users.edit`
* `users.suspend`
* `users.restore`
* `properties.view`
* `properties.moderate`
* `projects.view`
* `projects.moderate`
* `leads.view`
* `messages.view_sensitive`
* `reports.manage`
* `support.manage`
* `bugs.manage`
* `billing.view`
* `billing.adjust`
* `payments.refund`
* `providers.manage`
* `audit.view`
* `security.manage`
* `recovery.manage`
* `staff.manage`

The exact permission catalog must be defined in the Admin document.

---

# 68. Internal Session Security

Internal sessions should have stricter controls:

* shorter idle timeout
* recent-auth requirement for sensitive actions
* stronger session revocation
* security event logging
* permission refresh
* device/session review
* optional step-up authentication
* no public-device persistence by default

Sensitive actions may require re-verification.

---

# 69. Authentication and Navigation Integration

After authentication, the navigation shell must update immediately.

It must reflect:

* role
* account status
* profile
* unread notifications
* permitted modules
* bottom navigation
* desktop navigation
* profile menu

The application must not require a manual refresh to show the correct authenticated state.

---

# 70. Role-Based Mobile Bottom Navigation Integration

Authentication determines the active public role.

The role dashboard document defines exact items.

Auth integration must ensure:

* correct role navigation appears
* no previous-role navigation remains cached
* current active state is correct
* unauthorized destinations are absent
* direct URL security still applies
* role change refreshes navigation safely
* logout removes authenticated bottom navigation

---

# 71. Authentication Loading States

Required loading states include:

* checking session
* sending OTP
* verifying OTP
* checking account
* creating account
* creating profile
* completing onboarding
* redirecting
* updating profile
* changing mobile
* changing email
* requesting role change
* logging out
* revoking sessions

Loading UI must:

* prevent duplicate submission
* preserve layout
* remain readable
* announce progress accessibly
* not fake progress
* provide timeout recovery where appropriate

---

# 72. Authentication Empty States

Relevant empty states include:

* no account found
* no active sessions besides current
* no role-change requests
* no profile image
* no business verification submitted
* no public profile published
* no security events available to the user

Each empty state must offer a useful next action.

---

# 73. Authentication Error States

Errors must be actionable.

Examples:

## Invalid mobile

```text
Enter a valid 10-digit Indian mobile number.
```

## Account not found

```text
No account was found for this mobile number.
```

## Invalid OTP

```text
The code is incorrect. Check the code and try again.
```

## Expired OTP

```text
This code has expired. Request a new code.
```

## Too many attempts

```text
Too many verification attempts. Request a new code after the cooldown.
```

## Provider failure

```text
We could not send the verification code. Try again shortly.
```

## Session expired

```text
Your session has expired. Verify your mobile number to continue.
```

## Permission denied

```text
You do not have access to this area.
```

## Account restricted

```text
This action is not available while your account is under review.
```

Do not show raw provider or database errors.

---

# 74. Authentication Success States

Success must show the actual result.

Examples:

* Code sent
* Mobile verified
* Account created
* Profile saved
* Email verification sent
* Mobile number updated
* Role-change request submitted
* Session revoked
* Logged out

Success must lead to the correct destination.

Avoid success toasts that disappear while the user remains in a confusing state.

---

# 75. Back, Close, and Cancel

## 75.1 Back

Use Back to return to the previous meaningful step or route.

Examples:

* OTP → mobile input
* basic details → role selection
* profile edit → profile detail

## 75.2 Close

Use Close to dismiss a temporary auth layer and reveal the underlying context.

## 75.3 Cancel

Use Cancel to stop profile editing, mobile change, email change, or role-change request.

Cancel must protect unsaved changes.

## 75.4 Browser Back

Browser Back must:

* move through meaningful auth steps where appropriate
* not duplicate OTP sends
* not reopen completed auth
* not expose authenticated pages after logout
* not lose underlying context unnecessarily

---

# 76. Keyboard Behavior

Authentication must support keyboard use.

Required:

* Tab order
* Shift+Tab
* Enter
* Escape
* Space on selectable role cards
* arrow keys where radio-group semantics are used
* visible focus
* no keyboard trap
* no accidental duplicate submission

Enter must submit only the current valid step.

Escape should close a temporary modal when safe.

Escape must not silently discard dangerous unsaved changes.

---

# 77. Focus Management

When auth opens:

* focus the first meaningful field or heading
* announce the dialog
* trap focus inside a modal
* restore focus after Close

When a validation error occurs:

* focus the first invalid field or error summary
* associate the error with the input

When moving to OTP:

* focus the OTP input

When success redirects:

* focus the destination page heading or main content

---

# 78. Accessibility

Authentication must support:

* semantic form elements
* real labels
* field descriptions
* error associations
* screen-reader status messages
* visible focus
* sufficient contrast
* touch targets
* zoom
* reduced motion
* accessible role selector
* accessible OTP input
* accessible countdown text
* non-color-only error and success states

Do not use placeholder text as the only label.

---

# 79. Responsive Authentication Layout

## 79.1 320px and 360px

* full-width content
* safe horizontal padding
* no clipped title
* no oversized logo
* no side-by-side fields
* primary action visible
* OTP input fits
* keyboard does not cover actions

## 79.2 390px and 430px

* comfortable spacing
* readable helper text
* clear role cards
* stable error layout
* safe bottom action

## 79.3 768px and 1024px

* balanced modal, sheet, or split panel
* no excessive whitespace
* no tiny mobile panel in a large viewport
* correct focus containment

## 79.4 1366px, 1440px, and wide

* centered readable auth container
* homepage background remains visually supportive
* no excessive modal width
* no distracting background interactions
* proper overlay contrast

---

# 80. Safe Fixed and Sticky Positioning

Mobile authentication may use a sticky primary action only when:

* it does not cover fields
* it moves correctly with the keyboard
* it respects safe-area insets
* it does not overlap legal text
* scrolling remains possible
* error messages remain visible

The auth header may be sticky when it improves navigation and does not reduce usable space excessively.

---

# 81. Motion

Authentication motion should be subtle.

Allowed motion:

* modal or sheet entrance
* step transition
* loading indicator
* validation feedback
* success confirmation

Motion must:

* support reduced-motion preference
* not delay OTP entry
* not shake excessively
* not move form fields unexpectedly
* not create layout shift

---

# 82. Authentication Data Tables

The exact schema must follow the repository audit and architecture document.

Recommended tables include:

* `profiles`
* `public_role_assignments`
* `owner_profiles`
* `broker_profiles`
* `builder_profiles`
* `account_status_history`
* `role_change_requests`
* `consent_records`
* `user_sessions_metadata`
* `security_events`
* `profile_verification_cases`
* `profile_verification_documents`
* `email_change_requests`
* `mobile_change_requests`
* `account_recovery_cases`
* `internal_staff_profiles`
* `staff_roles`
* `permissions`
* `staff_role_permissions`
* `staff_user_roles`

Do not duplicate authentication identity records unnecessarily.

---

# 83. Recommended Common Profile Fields

```text
profiles
- id
- auth_user_id
- full_name
- email_normalized
- email_verified_at
- mobile_e164
- mobile_verified_at
- public_role
- account_status
- onboarding_status
- profile_completion_status
- avatar_media_id
- preferred_language
- timezone
- created_at
- updated_at
- deleted_at
```

Sensitive fields must remain protected.

---

# 84. Public Role Assignment

Recommended fields:

```text
public_role_assignments
- id
- user_id
- role
- status
- started_at
- ended_at
- created_by
- change_request_id
- created_at
```

The current active role must be unambiguous.

Historical role changes must remain traceable.

---

# 85. Account Status History

Recommended fields:

```text
account_status_history
- id
- user_id
- previous_status
- new_status
- reason
- actor_user_id
- actor_staff_id
- created_at
```

Account status must not be changed without history.

---

# 86. Role-Change Request Table

Recommended fields:

```text
role_change_requests
- id
- user_id
- current_role
- requested_role
- reason
- status
- submitted_data_json
- billing_impact_json
- data_impact_json
- reviewed_by
- review_reason
- reviewed_at
- created_at
- updated_at
```

JSON fields must be validated and must not contain secrets.

---

# 87. Session Metadata

Session metadata may include:

```text
user_sessions_metadata
- id
- user_id
- auth_session_reference
- device_type
- browser_family
- operating_system
- last_active_at
- created_at
- revoked_at
- revocation_reason
```

Do not store raw session tokens.

---

# 88. Profile Verification

Verification may apply to:

* mobile
* email
* Owner identity where required
* Broker business
* Builder business
* Builder compliance
* internal staff identity

Verification state must be specific.

Do not use one vague `verified` boolean for every kind of verification.

Recommended categories:

* `mobile_verified`
* `email_verified`
* `identity_verified`
* `business_verified`
* `compliance_verified`
* `public_badge_eligible`

---

# 89. Verification Status

Recommended statuses:

* `not_submitted`
* `pending`
* `in_review`
* `changes_required`
* `approved`
* `rejected`
* `expired`
* `revoked`

Verification must include:

* submitted timestamp
* reviewer
* reason
* document references
* expiry where applicable
* history
* audit

---

# 90. Verification Documents

Verification documents must:

* use private storage
* use signed URLs
* be visible only to authorized users and staff
* have retention policy
* have file validation
* have malware or content review strategy
* record uploader
* record entity
* record review state
* never appear in public profile data

---

# 91. Public Verification Badge

A public verification badge may appear only when:

* the relevant verification category is approved
* the approval remains active
* the public profile is eligible
* no suspension or revocation exists
* the badge meaning is clearly described

The badge must not imply:

* guaranteed transaction safety
* guaranteed Property ownership
* guaranteed Project performance
* platform liability for user claims

---

# 92. Authentication Service Boundaries

Recommended service modules:

```text
auth-service
otp-service
registration-service
session-service
profile-service
onboarding-service
role-service
account-status-service
recovery-service
staff-auth-service
consent-service
security-event-service
```

UI components must not call providers directly.

---

# 93. Login Service

The Login service must:

* normalize mobile
* validate request
* check rate limit
* resolve safe account state
* create OTP challenge
* call provider
* return masked destination
* record safe event
* avoid account enumeration
* expose honest provider status

---

# 94. Registration Service

The Registration service must:

* validate role
* validate full name
* validate email
* validate mobile
* validate consent
* check duplicates
* create registration challenge
* call OTP service
* finalize account after verification
* create related records
* enforce idempotency
* create secure session

---

# 95. Session Service

The Session service must:

* create session
* refresh session
* validate current user
* load current profile
* load account status
* load current role
* revoke session
* revoke all sessions
* clear session
* prevent stale role and status access

---

# 96. Profile Service

The Profile service must:

* load private profile
* load public-safe profile
* validate updates
* enforce field permissions
* trigger moderation where required
* create history
* create audit for sensitive changes
* invalidate cache

---

# 97. Role Service

The Role service must:

* validate final public roles
* load active role
* create registration role
* process role-change request
* analyze data impact
* analyze subscription impact
* apply approved transition
* refresh navigation/session state
* preserve history

---

# 98. Account Status Service

The Account Status service must:

* load current status
* apply restrictions
* process suspension
* process restoration
* record reason
* create audit
* revoke sessions where required
* notify user
* preserve public-content behavior according to policy

---

# 99. Authentication RLS Rules

RLS must protect:

* profiles
* role assignments
* onboarding
* consent records
* session metadata
* security events
* recovery cases
* verification cases
* verification documents
* staff accounts
* permissions

## 99.1 User profile

A user may:

* read their own private profile
* update permitted own fields

A user may not:

* change their own account status
* set verification state
* assign internal permissions
* change role directly
* read another user’s private profile

## 99.2 Public profile

Guests may read only:

* approved public-safe fields
* active public profile
* permitted role information

## 99.3 Role change

A user may:

* create their own role-change request
* read their own request

A user may not:

* approve their own request
* edit review fields
* apply the role transition directly

## 99.4 Session metadata

A user may:

* read safe information about their own sessions
* request revocation through a trusted service

A user may not:

* access raw auth tokens
* modify another user’s sessions

## 99.5 Internal staff

Staff access requires explicit permission.

Super Admin access remains audited.

---

# 100. Rate-Limit Categories

Authentication rate limiting must include:

* mobile-number check
* OTP send
* OTP resend
* OTP verify
* registration start
* registration finish
* login attempt
* mobile change
* email verification send
* account recovery
* staff login
* session revocation

Limits should use combinations of:

* mobile hash
* user ID
* IP
* session
* device signal
* route
* time window

Production rate limiting must work across horizontally scaled instances.

---

# 101. Abuse and Enumeration Protection

Protect against:

* testing whether mobile numbers exist at scale
* OTP spam
* SMS cost abuse
* brute-force OTP
* registration flooding
* duplicate accounts
* session fixation
* account takeover
* role manipulation
* recovery abuse
* internal account probing

Responses must remain useful to legitimate users without exposing unnecessary identity information.

---

# 102. Security Events

Record events such as:

* OTP send requested
* OTP send rate-limited
* OTP verification failed
* repeated failed verification
* login succeeded
* login blocked
* registration completed
* session revoked
* passwordless account recovery started
* mobile change requested
* mobile changed
* email changed
* role-change request submitted
* account suspended
* account restored
* staff permission denied

Security events must not store OTP or secret values.

---

# 103. Audit Events

Audit-sensitive authentication actions include:

* public role assignment
* role change
* mobile change
* email change
* account restriction
* suspension
* restoration
* account closure
* verification approval
* verification rejection
* internal user creation
* staff role assignment
* permission change
* assisted recovery
* session revocation by staff

Audit records should include:

* actor
* target user
* action
* reason
* before state
* after state
* timestamp
* request reference

---

# 104. Authentication Notifications

In-app and email notifications may be created for:

* account created
* mobile changed
* email changed
* role-change request received
* role-change approved
* role-change rejected
* account restricted
* account suspended
* account restored
* new internal login
* session revoked
* recovery completed
* verification approved
* verification changes required

SMS is reserved for OTP delivery.

Do not use SMS for general product notifications.

---

# 105. Email Verification

When the email provider is active:

```text
User provides email
→ Server creates verification token
→ Email sent
→ User opens verification link
→ Server validates token
→ Email marked verified
→ Pending email becomes active
→ Notification and audit created
```

Email verification links must:

* expire
* be single-use
* avoid exposing user ID unnecessarily
* use secure random tokens
* use trusted domain
* handle already-used link
* handle expired link
* handle logged-in and logged-out states

---

# 106. Provider Failure During Registration

If SMS OTP fails before account creation:

* do not create a complete account
* preserve safe entered details temporarily
* show retry
* keep registration context
* avoid duplicate account on retry

If account creation succeeds but a welcome email fails:

* keep the account valid
* record email failure
* retry asynchronously
* do not show account creation failure

---

# 107. Idempotency

Use idempotency for:

* OTP send challenge creation
* OTP verification finalization
* account creation
* profile creation
* role assignment
* welcome notification
* mobile change
* role-change approval
* assisted recovery

Retries must not create duplicate profiles or role assignments.

---

# 108. Transaction Boundaries

Use transactions for:

* registration finalization
* role assignment plus profile creation
* role-change approval
* account status change plus history
* mobile change plus identity update
* account closure plus session revocation state

Do not keep a database transaction open while waiting on a slow external provider.

---

# 109. Caching and Authentication

Do not publicly cache:

* private profile
* session state
* account status
* role-change request
* security events
* verification documents
* internal permissions

Public profile caching is allowed only through public-safe data and correct invalidation.

After profile or role changes, invalidate:

* public profile
* dashboard shell
* role navigation
* account settings
* Admin user detail
* relevant public listing profile summaries

---

# 110. Authentication Analytics

Approved analytics events may include:

* login_started
* otp_send_success
* otp_verify_success
* registration_started
* role_selected
* registration_completed
* onboarding_completed
* login_failed_category
* session_expired
* profile_saved

Do not send:

* mobile number
* email
* OTP
* full name
* session token
* private failure details
* verification-document information

Use pseudonymous event IDs where appropriate.

---

# 111. Admin User Detail Authentication Section

Admin User Detail must include permission-controlled sections for:

* account overview
* public role
* account status
* profile completion
* mobile verification
* email verification
* business verification
* current subscription
* sessions
* security events
* role-change history
* recovery history
* audit history

Each section must be clickable.

---

# 112. Admin Profile Editing

Admin may edit permitted profile data.

Use:

* inline edit for small safe fields
* modal for short changes
* drawer for contextual edit
* dedicated page for complex verification or business changes

Admin edits must not bypass:

* validation
* ownership rules
* moderation
* verification
* reason
* audit
* notification

---

# 113. Admin Account Status Actions

Permissioned Admin actions may include:

* restrict
* remove restriction
* suspend
* unsuspend
* close
* reopen
* require verification
* revoke sessions

Each action requires:

* permission
* confirmation
* reason
* impact preview
* server validation
* audit
* user notification where appropriate
* recovery path

---

# 114. Admin Session Management

Security-permissioned staff may:

* view safe session metadata
* revoke one session
* revoke all sessions
* investigate suspicious activity
* require reauthentication

Admin must not see:

* raw tokens
* complete cookies
* OTP
* provider secret

---

# 115. Admin Recovery

Recovery-permissioned staff may handle:

* lost mobile access
* incomplete registration
* duplicate account review
* mistaken suspension
* mistaken role change
* verification correction
* account restoration

Every recovery action must preserve original history.

---

# 116. Admin Role-Change Management

Admin role-change detail must show:

* user
* current role
* requested role
* request reason
* current Properties
* current Projects
* current Units
* current Leads
* current Requirements
* current subscription
* verification impact
* data migration impact
* billing impact
* previous requests
* approval actions
* audit

---

# 117. Authentication Support Integration

Every auth error that requires staff assistance should create or link to a safe support flow.

Support should receive:

* user or mobile hash reference
* error category
* timestamp
* request reference
* current account state if permitted
* safe diagnostic information

Support must not receive:

* OTP
* secret tokens
* raw provider credentials

---

# 118. Complete Login Verification Matrix

Verification must test:

* valid registered Owner login
* valid registered Broker login
* valid registered Builder login
* unregistered number
* invalid number
* missing number
* provider failure
* OTP resend
* expired OTP
* incorrect OTP
* too many attempts
* OTP autofill
* pasted OTP
* Back to mobile
* Change Number
* Close
* Escape
* Enter key
* browser Back
* refresh on OTP step
* duplicate submission
* slow network
* session creation
* intended redirect
* logged-in user visiting login
* suspended account
* restricted account
* mobile widths
* tablet widths
* desktop widths
* accessibility
* console
* network

---

# 119. Complete Registration Verification Matrix

Verification must test:

* Owner registration
* Broker registration
* Builder registration
* no role selected
* invalid role manipulation
* invalid full name
* invalid email
* duplicate email
* invalid mobile
* duplicate mobile
* missing consent
* OTP send
* OTP resend
* wrong OTP
* expired OTP
* successful account creation
* duplicate retry
* profile creation
* role-specific profile creation
* consent record
* onboarding destination
* protected-action return
* direct registration route
* Back between steps
* Close
* unsaved state
* responsive layout
* keyboard
* screen reader semantics
* server errors
* provider Setup Required state

---

# 120. Session Verification Matrix

Test:

* session survives refresh
* session refresh works
* session expiry
* logout
* browser Back after logout
* direct protected route after logout
* role navigation after login
* account suspension during active session
* role change during active session
* revoked session
* logout all devices
* private cache clearing
* wrong-user cache isolation
* multi-tab logout
* stale session
* network interruption
* server restart
* production cookie settings

---

# 121. Profile Verification Matrix

Test:

* common profile load
* role profile load
* edit allowed field
* edit disallowed field
* validation
* save success
* save failure
* unsaved changes
* mobile layout
* public/private separation
* public profile cache invalidation
* email change
* mobile change
* role-change request
* verification state
* Admin edit
* audit creation
* wrong-user direct API access
* RLS

---

# 122. RLS Verification Matrix

For each identity-related table, test:

* Guest read
* Guest write
* owner read
* owner update
* wrong-user read
* wrong-user update
* wrong-role read
* staff without permission
* staff with view permission
* staff with edit permission
* Super Admin
* service-role server access
* public-safe view
* deleted account
* suspended account

---

# 123. Live Browser Verification

The matching verification prompt must:

1. detect or start the development server
2. record URL and port
3. open the public homepage
4. open direct login route
5. test contextual login
6. test registration
7. test OTP states
8. test role selection
9. test redirects
10. test protected routes
11. test profile
12. test logout
13. test role navigation
14. test mobile widths
15. test tablet
16. test desktop
17. check console
18. check network
19. fix defects
20. retest
21. update `PROJECT_STATE.md`
22. update `FEATURE_REGISTRY.md`
23. keep the development server running when safe

---

# 124. Required Responsive Widths

Authentication and profile screens must be verified at:

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

* no clipping
* no overflow
* no keyboard obstruction
* no hidden primary action
* no modal outside viewport
* no excessive whitespace
* no tiny touch target
* no broken legal text
* no overlapping error
* no sticky-bar overlap

---

# 125. Automated Tests

Required automated test categories:

## Unit tests

* mobile normalization
* mobile validation
* email normalization
* full-name validation
* role validation
* OTP format
* account-status permission
* intended-route validation
* public/private field mapping
* role-change impact rules

## Integration tests

* OTP challenge
* registration finalization
* profile creation
* session creation
* session expiry
* role-change request
* account status update
* audit creation
* RLS
* session revocation

## End-to-end tests

* login
* registration
* contextual auth
* protected-action return
* profile onboarding
* logout
* session expiry
* role navigation
* internal login
* Admin account management

---

# 126. Production Authentication Checklist

Production authentication may pass only when:

* real SMS provider is configured
* live OTP send works
* live OTP verify works
* development OTP is disabled
* rate limits are active
* brute-force protections are active
* secure cookies are active
* domain and SSL are valid
* auth redirects are valid on production domain
* session refresh works
* logout works
* account status is enforced
* private profiles are protected
* RLS tests pass
* internal auth is protected
* provider failures are handled
* monitoring is active
* logs are redacted
* security alerts are configured
* recovery procedure is documented
* production browser verification passes

---

# 127. Feature Registry Updates

After implementation, update at least:

* `AUTH-001` through `AUTH-029`
* `ROLE-001` through `ROLE-010`
* relevant `SEC-*` entries
* relevant `NOTIF-*` entries
* relevant `ADMIN-*` entries
* relevant `QA-*` entries
* relevant `PROVIDER-*` entries

Add exact:

* routes
* components
* server actions
* service files
* tables
* migrations
* RLS policies
* tests
* provider state
* verification result

---

# 128. Project State Updates

After implementation or verification, update `PROJECT_STATE.md` with:

* current auth phase
* status
* changed files
* migrations
* OTP provider state
* skill usage
* tests
* live-browser routes
* responsive widths
* bugs
* blockers
* server URL and port
* rollback checkpoint
* next prompt

---

# 129. Non-Negotiable Authentication Rules

1. Login and registration use the mobile number as the primary identifier.
2. The user enters a four-digit OTP.
3. OTP verification is server-authoritative.
4. OTP must never appear in logs, URLs, analytics, or browser storage.
5. Public registration shows exactly Owner, Broker, and Builder/Developer.
6. Internal roles are never publicly registrable.
7. Direct `/login` shows the homepage as background with auth above it.
8. Protected-action auth preserves originating context.
9. Successful auth returns to the intended permitted action.
10. An unregistered number receives a clear Register path.
11. Authenticated users must not see login again.
12. Full name, email, mobile, role, OTP, and consent require validation.
13. Sessions must use secure server-aware handling.
14. Role and account status must be loaded from authoritative server data.
15. Profile data is separated from authentication identity.
16. Public and private profile data must be separated.
17. Role changes require review, impact analysis, and audit.
18. Sensitive profile changes require re-verification.
19. Internal access requires explicit permissions.
20. Missing providers must show honest status.
21. Development OTP must be impossible to use in production.
22. All authentication screens must be mobile-first and accessible.
23. Every loading, success, error, expired, blocked, and recovery state must exist.
24. RLS and server authorization must both be verified.
25. Live-browser verification is required before PASS.

---

# 130. Implementation Handoff

The next document must define the complete visual and interaction system, including:

* original Apple-inspired design direction
* mobile-first component architecture
* visual tokens
* typography
* spacing
* color
* surfaces
* responsive layouts
* route-specific headers
* role-based bottom navigation
* page, modal, drawer, sheet, popover, and inline rules
* Back, Close, Cancel, and browser Back
* list-detail-return
* state preservation
* loading, empty, error, success, and recovery
* forms
* tables
* cards
* notifications
* dashboards
* Admin layouts
* motion
* accessibility
* global UX audit
* navigation behavior matrix
* live responsive verification

---

