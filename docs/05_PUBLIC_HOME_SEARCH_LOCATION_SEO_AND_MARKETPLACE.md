# `docs/05_PUBLIC_HOME_SEARCH_LOCATION_SEO_AND_MARKETPLACE.md`

# My Gujarat Property — Public Homepage, Marketplace Discovery, Search, Gujarat Locations, City SEO, Public Profiles, Promotions, CMS, Legal, Trust, Performance, and Verification Authority

This document defines the complete public marketplace experience for **My Gujarat Property**.

It is the primary authority for:

* public homepage
* homepage header
* homepage-only city selector
* public marketplace navigation
* Property discovery
* Project discovery
* search entry
* autocomplete and suggestions
* search results
* filters
* sorting
* search-state preservation
* Gujarat location hierarchy
* city and locality records
* missing-location requests
* city-based SEO pages
* property-type SEO pages
* purpose-based SEO pages
* public Property cards
* public Project cards
* public Builder, Broker, and Owner profiles
* saved Properties
* saved Projects
* saved searches
* Builder promotion carousel
* public CMS pages
* Blog
* legal pages
* trust and safety content
* public metadata
* canonical URLs
* structured data
* sitemaps
* robots rules
* public caching
* performance
* accessibility
* responsive behavior
* complete public marketplace verification

Claude must read this document before implementing or changing:

* homepage
* public navigation
* city selection
* search
* public results
* public cards
* public detail discovery sections
* SEO routes
* location records
* public profiles
* promotion carousel
* CMS
* legal pages
* saved marketplace content
* public caching
* metadata
* sitemap or robots behavior

---

# 1. Public Marketplace Goal

The public marketplace must help a user move naturally from discovery to a meaningful Property, Project, public profile, or Direct Inquiry.

The public experience must feel:

* fast
* trustworthy
* mobile-first
* easy to scan
* locally relevant
* visually premium
* clear about listing status
* clear about location
* clear about price
* connected to real approved data
* recoverable when no result or error occurs

The public marketplace must not feel like:

* an advertising page disconnected from real listings
* a homepage with fake counts
* a search field that opens an empty result page
* a city selector repeated on every route
* a collection of unrelated promotional sections
* a page where public and private data are mixed
* a search experience that loses filters after opening a detail
* a set of SEO pages generated without useful content
* a marketplace where unavailable, rejected, paused, or deleted records remain public
* a carousel with fake destination or fake performance

---

# 2. Public Audience

The public experience serves:

* Guests
* authenticated Owners
* authenticated Brokers
* authenticated Builders/Developers
* search-engine crawlers accessing approved public pages
* users opening shared Property or Project links
* users arriving from city-based search results
* users arriving from approved promotional links
* users comparing Properties and Projects

Authenticated users may see limited account-aware public actions such as:

* saved state
* notification access
* profile access
* Direct Inquiry
* return to their role application

Public pages must never expose private dashboard data.

---

# 3. Public Marketplace Scope

The public marketplace includes:

* homepage
* public search
* Property results
* Project results
* Property detail
* Project detail
* Unit context inside Project detail
* public profiles
* city pages
* locality pages where approved
* property-type pages
* purpose pages
* pricing
* help
* CMS pages
* Blog
* legal pages
* Builder promotion carousel
* trust and safety content
* saved-item entry points
* contextual authentication
* Direct Inquiry entry points

---

# 4. Public Route Principles

Public routes must be:

* stable
* human-readable
* shareable where appropriate
* indexable only when useful
* server-authorized
* generated from public-safe data
* canonicalized
* resilient to changed slugs
* responsive
* accessible
* cacheable where safe

Public routes must not expose private database IDs as the sole human-facing identifier when a readable slug can be used.

A stable short identifier may be combined with a slug to prevent collisions.

Conceptual examples:

```text
/
/search
/property/{property-slug}-{stable-id}
/project/{project-slug}-{stable-id}
/builder/{builder-slug}-{stable-id}
/broker/{broker-slug}-{stable-id}
/owner/{owner-slug}-{stable-id}
/city/{city-slug}
/city/{city-slug}/properties
/city/{city-slug}/projects
/city/{city-slug}/property-for-sale
/city/{city-slug}/property-for-rent
/city/{city-slug}/{property-type-slug}
/pricing
/help
/blog
/blog/{article-slug}
/terms
/privacy
/listing-policy
/payment-policy
/refund-policy
/marketplace-disclaimer
/verification-disclaimer
/grievance
```

Final route names must match implementation and must be recorded in `FEATURE_REGISTRY.md`.

---

# 5. Public Shell Authority

The public shell must support:

* brand
* homepage-only city selector
* search entry
* account or login
* notification access for authenticated users where appropriate
* public navigation
* responsive menu
* contextual footer
* legal links
* trust content

The public shell must adapt by route.

The homepage header must not be reused unchanged on:

* search results
* Property detail
* Project detail
* auth flow
* dashboard
* Admin
* focused task flow

---

# 6. Homepage Product Purpose

The homepage is the primary discovery and orientation screen.

It must answer:

* Which city am I browsing?
* What am I searching for?
* Which approved Properties and Projects are available?
* Which categories are relevant?
* Which trusted Builder content is promoted?
* How do I post?
* How do I view pricing?
* How do I login or register?
* How does the marketplace work?
* How do I stay safe?

The homepage must not attempt to show every platform module.

---

# 7. Homepage Information Hierarchy

Recommended homepage order:

1. public homepage header
2. city context
3. primary search
4. search suggestions or search-entry support
5. Builder spotlight carousel
6. approved Properties
7. approved Projects
8. property-category discovery
9. popular cities
10. trusted public profiles or verified businesses where approved
11. marketplace trust and safety
12. role-specific posting CTA
13. pricing or plan CTA
14. helpful content
15. public footer

The exact order may adapt based on real usage data, but:

* search must remain prominent
* city context must remain clear
* promoted content must not dominate the entire page
* trust information must be visible
* public discovery must use real approved data

---

# 8. Homepage Header

The homepage header may include:

* brand
* homepage city selector
* Login or Account
* notification icon for authenticated users
* compact public navigation
* Post action
* Pricing
* responsive menu

The header must remain readable at:

* 320px
* 360px
* 390px
* 430px
* 768px
* 1024px
* 1366px
* 1440px
* wide displays

On mobile:

* avoid too many visible actions
* prioritize brand, city context, and account/menu
* move secondary links into a menu
* ensure the city selector does not crush the brand or account action
* preserve touch targets
* prevent wrapping that breaks alignment

---

# 9. Homepage-Only City Selector

The city selector is a homepage-specific control.

It must not appear as a repeated global control on every route.

The selector must:

* show the active city
* use backend location records
* support searching approved Gujarat cities
* support recent safe city selections
* support popular cities
* support accessible keyboard navigation
* support mobile full-screen or sheet presentation
* update homepage discovery
* update search context
* preserve the selected city during the public browsing session
* support a clear default state
* support an unavailable-city recovery state

The city selector must not depend on:

* device geolocation
* a map
* coordinates
* background location access

---

# 10. Default City Behavior

The default city may be determined through one of these approved methods:

1. user’s previously selected city
2. safe account preference for authenticated users
3. configured platform default
4. a clear `Select City` state

The system must not silently guess a city with false confidence.

When no city is selected:

* show a clear selector
* allow search across Gujarat where approved
* avoid showing city-specific claims
* show general approved discovery or configured default content
* preserve a stable layout

---

# 11. City Selector Interaction

Expected mobile flow:

```text
Tap city selector
→ Open full-screen location selector or mobile sheet
→ Focus search input
→ Show recent and popular cities
→ User types or selects city
→ Save selected city
→ Close selector
→ Refresh homepage sections
```

Expected desktop flow:

```text
Click city selector
→ Open accessible popover, modal, or command dialog
→ Search or choose city
→ Save selection
→ Close
→ Update homepage context
```

The selector must support:

* Close
* Escape
* outside click where applicable
* keyboard
* loading
* no results
* retry
* long city names
* recent selection clearing where offered

---

# 12. City Selection Persistence

The selected city may be stored:

* in the URL when entering search
* in a safe cookie or preference
* in the authenticated user’s profile
* in non-authoritative browser preference storage

The backend remains authoritative for city records.

The selected city must not:

* expose private data
* create a false account-level permanent preference without consent
* override a direct city URL
* override an explicit search filter
* prevent the user from changing city

Priority should be:

1. explicit route or search parameter
2. explicit current selection
3. authenticated saved preference
4. configured default

---

# 13. Homepage Primary Search

The homepage search is the main discovery control.

It must not open an empty results screen merely because it was tapped.

Expected flow:

```text
Tap search
→ Search field activates
→ Suggestions appear
→ User types or selects meaningful context
→ Search is submitted
→ Results page opens
```

A meaningful search may include:

* selected city
* locality
* Property category
* Project
* Builder
* purpose
* approved keyword
* a selected suggestion

---

# 14. Homepage Search Input

The search input must include:

* visible or accessible label
* meaningful placeholder
* clear action
* search icon
* keyboard support
* mobile input mode
* loading state
* clear button
* accessible focus
* suggestion panel
* error recovery

Possible placeholder:

```text
Search by city, locality, Property type, Project, or Builder
```

The placeholder must not be the only label for accessibility.

---

# 15. Search Entry Modes

Search may begin through:

* free-text typing
* location selection
* Property category selection
* Project selection
* Builder selection
* purpose selection
* popular search
* city section
* SEO landing page
* related-content section
* public profile
* saved search

Every entry must translate into a valid server-understood query.

---

# 16. Search Suggestion Architecture

Search suggestions must be server-backed or use safely cached approved data.

Suggestion categories may include:

* Cities
* Localities
* Villages
* Property Types
* Projects
* Builders
* Brokers where public search is approved
* Popular Searches
* Recent Searches

Each suggestion must include:

* type
* title
* context
* stable identifier
* action or destination
* optional icon
* optional supporting location

Do not show ambiguous duplicate names without parent context.

Example:

```text
Mavdi
Locality in Rajkot, Gujarat
```

---

# 17. Suggestion Ranking

Suggestion ranking may consider:

* exact match
* prefix match
* normalized match
* alias match
* selected city relevance
* active approved inventory
* popularity based on real data
* recency
* configured business priority

Ranking must not expose private data.

Paid promotion must not silently corrupt normal search relevance unless a clearly labeled sponsored placement is intentionally defined.

---

# 18. Search Input Normalization

Search normalization should support:

* case-insensitive matching
* whitespace trimming
* repeated-space collapse
* common transliteration
* location aliases
* punctuation normalization
* Gujarati and English names where supported
* safe Unicode handling
* common spelling variation

Search must not allow unsafe raw query injection.

---

# 19. Search Results Route

Search results must use URL state where appropriate.

Conceptual query example:

```text
/search?city=rajkot&mode=property&purpose=sale&type=flat&min_price=2500000&max_price=7500000&sort=relevance
```

URL parameters must:

* use approved names
* be validated
* be canonicalized
* ignore unknown unsafe values
* support sharing
* support browser Back
* support refresh
* support server rendering
* avoid private data
* avoid excessive duplicate URLs

---

# 20. Search Modes

The marketplace may support clear search modes:

* Properties
* Projects

A combined mode may be used only when the result distinction remains clear.

Mode selection must:

* be visible
* preserve relevant filters
* clear incompatible filters safely
* update the result heading
* update metadata where indexable
* preserve browser Back behavior

---

# 21. Property Search Results

Property results must include only records that are:

* approved
* published
* active
* not soft-deleted
* not expired where expiry applies
* permitted for public display
* consistent with selected filters

Property result cards must show real data.

---

# 22. Project Search Results

Project results must include only Projects that are:

* approved
* published
* active
* not soft-deleted
* permitted for public display
* consistent with selected filters

Unit availability summaries must be derived from real eligible Unit data.

---

# 23. Search Result Heading

The heading should communicate:

* mode
* location
* purpose
* category where relevant
* real result context

Examples:

```text
Properties for Sale in Rajkot
```

```text
Builder Projects in Ahmedabad
```

```text
Commercial Properties in Morbi
```

Do not show misleading counts when counts are approximate or unavailable.

---

# 24. Search Result Count

A result count may be shown when:

* it is real
* it is efficient to calculate
* it helps the user
* it does not create performance problems
* it reflects active filters

When exact count is expensive:

* show paginated results without fake count
* show a bounded or approximate label only when clearly identified
* do not present a guessed exact number

---

# 25. Property Search Filters

Approved Property filters may include:

* city
* locality
* village
* purpose
* category
* Property type
* minimum price
* maximum price
* area range
* area unit
* bedrooms
* bathrooms
* furnishing
* possession or availability
* Property age
* parking
* selected amenities
* approved verification state
* posted-by role where approved
* date posted
* approved status-specific public filter

Only relevant filters should appear for the selected category and purpose.

---

# 26. Project Search Filters

Approved Project filters may include:

* city
* locality
* Project type
* price range
* configuration
* construction status
* possession timeline
* Builder
* amenities
* approved verification/compliance state
* launch or completion context
* Unit availability

Project filters must not expose internal inventory data.

---

# 27. Filter Dependency Rules

Filters may depend on other selections.

Examples:

* City selection limits locality options.
* Property category controls available type filters.
* Purpose controls price labels.
* Project mode shows Project-specific filters.
* Configuration applies only to relevant residential inventory.
* Unit availability applies only to Project mode.

When a parent filter changes:

* clear incompatible child filters
* inform the user where needed
* preserve compatible filters
* update results
* avoid silent invalid state

---

# 28. Mobile Filter Experience

On mobile, filters should use:

* full-screen sheet
* large bottom sheet
* structured filter page

The mobile filter experience must include:

* title
* Close
* Reset
* Apply
* selected values
* expandable sections
* validation
* loading state
* safe keyboard behavior
* visible action region
* safe-area support

Do not apply every change immediately if doing so creates excessive network requests or confusing navigation.

A draft filter state may be used until `Apply Filters`.

---

# 29. Desktop Filter Experience

Desktop filters may use:

* left-side filter panel
* top filter bar
* hybrid panel
* sticky filter summary

The panel must:

* remain aligned
* not dominate the page
* support long labels
* preserve results visibility
* support keyboard
* avoid nested scrolling when unnecessary

---

# 30. Filter Chips

Selected filters may appear as chips.

Each chip must:

* show a readable label
* provide remove action
* use accessible name
* wrap safely
* not become too narrow
* not create horizontal overflow

A `Clear All` action may be shown when multiple filters are active.

---

# 31. Search Sorting

Approved Property sorting may include:

* Relevance
* Newest
* Price: Low to High
* Price: High to Low
* Area: Low to High
* Area: High to Low

Approved Project sorting may include:

* Relevance
* Newest
* Price Range: Low to High
* Possession: Earliest
* Recently Updated where useful

Sorting must be server-backed.

Do not show popularity sorting unless based on real approved analytics.

---

# 32. Search Result Card Layout

Mobile:

* single-column cards
* strong image
* readable price
* readable title
* clear location
* concise facts
* save action
* Direct Inquiry
* stable spacing

Tablet:

* one or two columns depending on content density
* consistent card width
* no compressed facts

Desktop:

* list or grid according to task
* stable card heights where appropriate
* no excessive unused space
* hover only as enhancement

---

# 33. Search Result Pagination

Use server-side pagination.

Possible patterns:

* numbered pages
* Load More
* cursor-based infinite loading

The selected pattern must support:

* browser Back
* state preservation
* deep link
* loading
* retry
* accessibility
* performance

For infinite loading:

* provide a reachable footer
* preserve scroll
* avoid duplicate records
* show explicit loading
* support Back restoration

---

# 34. Search List-Detail-Return

When a user opens a Property or Project and returns, preserve:

* query
* selected city
* mode
* filters
* sorting
* page or cursor
* scroll position
* selected result where useful
* display mode

This state should be encoded in:

* URL
* route state
* safe session state
* server-compatible state

Do not depend only on fragile component memory.

---

# 35. Search Loading State

Search loading must:

* preserve the search header
* preserve selected filters
* show card-shaped skeletons
* avoid blank page
* prevent duplicate requests
* maintain stable layout
* announce loading accessibly

When only filters change, the entire page should not necessarily disappear.

---

# 36. Search Empty States

## 36.1 No results

Show:

* search context
* active filters
* clear explanation
* Clear Filters
* Modify Search
* nearby approved city suggestions where configured
* related categories where useful

Do not display random unrelated Properties.

## 36.2 No inventory in selected city

Show:

* selected city
* no-availability message
* nearby or broader Gujarat search option where configured
* saved-search option for authenticated users
* public help or posting CTA where relevant

## 36.3 Invalid query

Show:

* corrected safe query state
* clear message
* return to search
* no raw validation error

---

# 37. Search Error State

Search errors must preserve:

* query
* filters
* sort
* selected mode

Provide:

* Retry
* safe homepage return
* support reference for persistent errors where appropriate

Do not clear the user’s search because the server failed.

---

# 38. Search Accessibility

Search must support:

* labeled input
* keyboard navigation
* accessible suggestions
* active-descendant or equivalent pattern
* Escape to close suggestions
* arrow navigation
* Enter to choose
* screen-reader announcement
* filter labels
* result-count announcement
* focus restoration
* no keyboard trap

---

# 39. Property Public Card

A public Property card may contain:

* primary image
* image count where real
* saved state
* purpose label
* price
* title
* location
* category
* selected facts
* public status or verification indicator
* poster summary where useful
* Direct Inquiry
* card destination

The card must use public-safe data.

---

# 40. Property Card Interaction

Primary card click:

* opens Property detail

Save action:

* saves or unsaves without opening the card

Direct Inquiry:

* preserves Property context
* opens the approved inquiry flow
* authenticates when required

Secondary menu:

* may include Share
* may include Report
* must not create nested click conflict

---

# 41. Property Card Image

The image must:

* use stable aspect ratio
* have responsive source
* have explicit dimensions
* use optimized format
* load lazily below the fold
* show fallback when unavailable
* preserve important content
* avoid layout shift
* avoid unsafe image text overlays

The card must not show an image that failed moderation.

---

# 42. Property Card Price

Price formatting must be consistent.

Examples:

```text
₹45 Lakh
₹1.25 Crore
₹25,000/month
₹85/sq ft
```

The card must not show:

* raw minor units
* inconsistent decimal formatting
* ambiguous monthly/total labels
* a missing price without explanation when price is required

When price is intentionally unavailable, show an approved label such as:

```text
Price on Request
```

only if allowed by business policy.

---

# 43. Property Card Location

Location should show a concise public-safe hierarchy such as:

```text
Mavdi, Rajkot
```

or:

```text
Morbi, Gujarat
```

Do not display a complete private address on a card.

Long location names must wrap or truncate accessibly.

---

# 44. Property Card Facts

Show only the most useful facts.

Examples:

* configuration
* area
* furnishing
* floor
* availability

Do not overload the card with every Property field.

The detail page holds complete information.

---

# 45. Project Public Card

A public Project card may contain:

* primary Project image
* Project name
* Builder name
* location
* price range
* configuration range
* construction status
* possession context
* Unit availability summary where real
* public verification/compliance indicator
* save action
* Direct Inquiry
* card destination

---

# 46. Project Card Interaction

Primary click:

* opens Project detail

Builder name:

* opens public Builder profile where available

Configuration or Unit summary:

* may open Project detail focused on Units

Save:

* server-backed saved state

Direct Inquiry:

* preserves Project context

---

# 47. Public Property Detail Discovery Integration

Property detail behavior is defined more deeply in the next document.

Public marketplace responsibilities include:

* correct public route
* public-safe data
* metadata
* related Property section
* public profile link
* saved state
* Direct Inquiry entry
* report entry
* search-return context
* caching
* structured data
* noindex when ineligible

---

# 48. Public Project Detail Discovery Integration

Project detail marketplace responsibilities include:

* correct public route
* public-safe Project data
* public Builder link
* Project Unit summaries
* Direct Inquiry
* saved state
* related Projects
* metadata
* structured data
* caching
* search-return state
* noindex when ineligible

---

# 49. Gujarat Location Authority

The approved textual hierarchy is:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

Location data must be backend-managed.

The public marketplace must not rely on free-text city strings as the only location authority.

---

# 50. State Records

State records should contain:

* stable ID
* canonical name
* normalized name
* slug
* state code
* active state
* display order
* SEO state
* timestamps

The initial public marketplace focuses on Gujarat.

The architecture must remain extensible.

---

# 51. District Records

District records should contain:

* stable ID
* State ID
* canonical name
* normalized name
* slug
* active state
* aliases
* SEO state
* timestamps

District must belong to a valid State.

---

# 52. Taluka Records

Taluka records should contain:

* stable ID
* District ID
* canonical name
* normalized name
* slug
* active state
* aliases
* timestamps

Taluka must belong to a valid District.

---

# 53. City Records

City records should contain:

* stable ID
* Taluka or approved administrative parent
* District ID where denormalized for query performance
* State ID where denormalized safely
* canonical name
* normalized name
* slug
* aliases
* active state
* featured state
* SEO state
* homepage eligibility
* timestamps

Denormalized parent IDs must remain consistent through constraints or controlled updates.

---

# 54. Village and Locality Records

Village/Locality records should contain:

* stable ID
* City ID
* Taluka ID where useful
* District ID where useful
* State ID where useful
* canonical name
* normalized name
* slug
* type
* aliases
* active state
* SEO state
* timestamps

Location type may distinguish:

* village
* locality
* area
* neighborhood
* industrial area
* approved market area

---

# 55. Location Aliases

Aliases may support:

* English spelling
* Gujarati spelling
* transliteration
* common misspelling
* historical name
* abbreviation

Aliases must:

* point to one canonical record
* be moderated
* avoid duplicate conflict
* support search
* not create duplicate public pages automatically

---

# 56. Location Selector Reuse

The same location data foundation may support:

* homepage city selector
* Property posting
* Project posting
* Requirement posting
* public search
* public profiles
* promotion targeting
* SEO
* Admin filters

The UI container may differ by context.

Do not reuse the homepage city selector component unchanged in every workflow.

---

# 57. Cascading Location Selection

Posting and structured filters may follow:

```text
State
→ District
→ Taluka
→ City
→ Village/Locality
```

Rules:

* child options load after parent selection
* incompatible child selection is cleared
* loading is visible
* empty child state is explained
* missing-location request is available where approved
* current selection is preserved during errors
* server validates the final hierarchy

---

# 58. Missing Location Request

When a required location is missing, the user may submit a request.

Required request fields may include:

* requested location type
* proposed name
* parent location
* optional alternate spelling
* optional supporting note
* requester
* source workflow
* timestamp

The request must not automatically create a public location record.

---

# 59. Missing Location Request Flow

```text
Open location selector
→ Search
→ No matching location
→ Select Request Missing Location
→ Choose location type and parent
→ Enter proposed name
→ Submit
→ Request stored
→ Admin reviews
→ Approve, Reject, Merge, or Request Clarification
→ User notified
```

---

# 60. Missing Location Admin Review

Admin must be able to:

* search existing locations
* compare possible duplicates
* review aliases
* approve new location
* merge into an existing location
* reject
* request clarification
* activate or deactivate
* record reason
* create audit
* notify requester

A location merge must preserve:

* existing Property references
* existing Project references
* SEO redirects
* search aliases
* history

---

# 61. Location Slugs

Location slugs must be:

* normalized
* unique in the intended route scope
* stable
* human-readable
* redirectable after change
* safe for URLs

Changing a slug requires:

* redirect record
* cache invalidation
* sitemap update
* canonical update
* related SEO-page update

---

# 62. Location Search Indexing

Search should index:

* canonical name
* aliases
* parent names
* location type
* active status
* public inventory availability where useful

Indexes may include:

* normalized B-tree
* trigram
* full-text
* parent composite indexes

The implementation must be based on real query plans.

---

# 63. Location Data Integrity

The database must prevent:

* locality without valid City
* City without valid parent
* duplicate active canonical names under the same parent unless intentionally allowed
* invalid inactive parent assignment
* public SEO page for inactive location
* orphaned references

---

# 64. City-Based Homepage Content

When a city is selected, homepage sections may show:

* approved Properties in the city
* approved Projects in the city
* active Builder promotions targeting the city
* popular Property categories in the city
* public Builder profiles active in the city
* city-specific help or content where approved

When no data exists:

* hide empty section or show an intentional empty state
* avoid fake fallback without explanation
* optionally broaden to nearby or Gujarat-wide content according to configured rule
* label broadened content clearly

---

# 65. City Fallback Rules

A fallback strategy may use:

1. selected city
2. configured related city group
3. configured District
4. Gujarat-wide approved content

Fallback must be configured, not guessed.

The UI should explain broader results when relevant.

Example:

```text
No active Projects were found in Morbi. Showing approved Projects across Gujarat.
```

---

# 66. SEO Product Goal

SEO pages must help real users.

They must not exist only to generate large numbers of thin URLs.

Every indexable SEO page must provide:

* meaningful search intent
* real approved inventory
* clear heading
* useful filters
* useful content
* canonical URL
* metadata
* internal links
* public-safe data
* honest empty behavior

---

# 67. Approved SEO Page Types

Possible indexable page types:

* city Property page
* city Project page
* city Property-for-sale page
* city Property-for-rent page
* city Property-type page
* city commercial Property page
* city industrial Property page
* city Builder Project page
* public Builder profile
* public Broker profile where useful
* public Property detail
* public Project detail
* approved Blog article
* approved CMS landing page

---

# 68. SEO Route Taxonomy

Conceptual route patterns may include:

```text
/city/{city-slug}/properties
/city/{city-slug}/projects
/city/{city-slug}/property-for-sale
/city/{city-slug}/property-for-rent
/city/{city-slug}/{property-type-slug}
/city/{city-slug}/commercial-property
/city/{city-slug}/industrial-property
```

Do not generate arbitrary combinations.

Every route pattern must have:

* validation
* canonical rules
* indexability rules
* metadata rules
* content rules
* empty-state rules

---

# 69. SEO Query Combination Rules

Index only combinations with:

* approved location
* approved taxonomy
* meaningful intent
* sufficient unique value
* stable route
* real content or configured evergreen content
* no private data
* no duplicate canonical conflict

Do not index:

* arbitrary price filters
* arbitrary sort orders
* pagination duplicates unless intentionally handled
* temporary filters
* empty low-value combinations
* user-specific saved search
* private routes
* unsupported query strings

---

# 70. SEO Page Heading Rules

H1 must be specific and natural.

Examples:

```text
Properties for Sale in Rajkot
```

```text
Flats for Rent in Ahmedabad
```

```text
Builder Projects in Surat
```

Supporting H2 sections may include:

* Available Property Types
* Popular Localities
* Approved Projects
* Price Guidance based on real data where implemented
* How to Search
* Trust and Safety
* Frequently Asked Questions

Do not repeat keyword phrases unnaturally.

---

# 71. SEO Metadata

Every indexable page must define:

* title
* meta description
* canonical URL
* robots
* Open Graph title
* Open Graph description
* Open Graph image where approved
* structured data where valid
* breadcrumb data where valid

Metadata must be generated from:

* canonical location
* canonical taxonomy
* approved entity data
* real public-safe content

Do not expose private values.

---

# 72. Property Detail Metadata

Property detail metadata may include:

* public title
* purpose
* Property type
* city
* price where approved
* public image
* public description summary

Do not include:

* private mobile
* private email
* exact private address details
* internal moderation note
* Lead data
* unpublished information

When a Property is no longer public:

* update robots
* remove from sitemap
* provide an appropriate unavailable state
* use redirect only when a valid replacement exists

---

# 73. Project Detail Metadata

Project metadata may include:

* Project name
* Builder
* city
* Project type
* price range
* possession context
* public image
* public summary

Do not include private compliance documents.

---

# 74. Public Profile Metadata

Public Builder, Broker, or Owner profile metadata may include:

* approved public name
* role or business type
* city or service area
* public description
* approved image

Do not include private contact data.

---

# 75. Canonical URL Rules

Canonical URLs must:

* use one approved scheme
* use one approved domain
* use stable slug strategy
* exclude tracking parameters
* exclude non-canonical filter order
* resolve aliases
* handle pagination intentionally
* avoid duplicate trailing slash behavior
* avoid duplicate uppercase/lowercase routes

---

# 76. Redirect Rules

Use permanent redirects for:

* changed canonical slug
* merged location
* moved CMS page
* renamed public profile
* corrected route format

Use temporary redirects for:

* short-term campaign destination
* maintenance routing
* transitional state

Redirects must not create loops.

---

# 77. Robots Rules

Noindex or block indexing for:

* login
* registration
* OTP
* dashboards
* profile settings
* Leads
* messages
* notifications
* billing
* invoices
* Admin
* moderation
* provider settings
* recovery
* drafts
* pending content
* rejected content
* deleted content
* private support tickets
* arbitrary internal search combinations
* user-specific saved items

---

# 78. Sitemap Architecture

Sitemaps may be split by content type:

* pages
* Properties
* Projects
* public profiles
* locations
* Blog
* CMS

Sitemap generation must include only:

* approved
* public
* active
* canonical
* indexable
* non-deleted content

Each entry may include:

* URL
* last modified
* optional image metadata where valid

Do not use fabricated change frequency or priority claims.

---

# 79. Sitemap Updates

Sitemap state must update after:

* Property publication
* Property unpublication
* Project publication
* Project unpublication
* public profile publication
* profile removal
* city activation
* city deactivation
* slug change
* Blog publication
* CMS publication

Updates may use:

* dynamic sitemap generation
* scheduled generation
* cache invalidation

The method must scale.

---

# 80. Structured Data

Use structured data only when valid.

Possible types:

* BreadcrumbList
* Organization
* RealEstateAgent or LocalBusiness where valid
* Product or Offer only when semantically appropriate
* Article
* FAQPage when real FAQ content exists
* WebSite
* SearchAction where valid
* ItemList for approved lists

Do not add misleading structured data.

---

# 81. Structured Data Privacy

Structured data must not include:

* private mobile
* private email
* internal IDs
* unpublished content
* exact private address where not public
* private billing
* Lead data
* internal rating
* fake review
* fake availability

---

# 82. Breadcrumbs

Breadcrumbs may appear on:

* Property detail
* Project detail
* city pages
* property-type pages
* public profiles
* Blog article
* CMS page

Breadcrumbs should reflect real hierarchy.

Example:

```text
Home → Rajkot → Properties for Sale → Property Detail
```

Breadcrumbs do not replace a mobile Back action.

---

# 83. Internal Linking

Public pages should link meaningfully to:

* city pages
* locality pages
* Property categories
* Projects
* Builder profiles
* related Properties
* related Projects
* help
* trust and legal pages

Do not generate large blocks of low-value links.

---

# 84. City SEO Page Content

A city page may include:

* H1
* short introduction
* search/filter controls
* approved Properties
* approved Projects
* popular localities
* Property categories
* public Builders
* helpful FAQs
* trust content
* related city links

The page must remain useful when inventory is low.

---

# 85. Locality SEO Pages

Locality pages may be enabled only when:

* the locality record is verified
* there is meaningful inventory or approved evergreen value
* canonical rules are clear
* duplicate city content is avoided
* Admin can manage indexability

Inactive or thin locality pages should be noindexed or unavailable.

---

# 86. SEO Content Governance

SEO staff or permissioned Admin may manage:

* title templates
* description templates
* H1 templates
* supporting content
* FAQ
* indexability
* canonical override
* redirect
* content version
* publication state

Changes must be:

* validated
* previewed
* permissioned
* audited
* recoverable

---

# 87. Public Profiles

Public profile types:

* Owner
* Broker
* Builder/Developer

Public profile visibility must be configurable according to role policy.

Every public profile must use public-safe data.

---

# 88. Owner Public Profile

An Owner public profile may show:

* approved display name
* profile image
* public verification state
* active approved Properties
* public summary
* account activity summary only when approved and non-sensitive

It must not show:

* private mobile
* private email
* billing
* Leads
* messages
* internal moderation
* private documents
* security events

---

# 89. Broker Public Profile

A Broker public profile may show:

* approved business/display name
* public image or logo
* business description
* service cities
* active approved listings
* public verification state
* public trust information
* Direct Inquiry entry through eligible listing context

It must not expose private account data.

---

# 90. Builder Public Profile

A Builder public profile may show:

* public Builder name
* legal/business summary where approved
* logo
* cover image
* description
* service cities
* approved Projects
* active approved promotions
* public verification state
* approved compliance summary
* public trust content

The profile must support deep navigation:

```text
Builder Profile
→ Project
→ Project Units
→ Direct Inquiry
```

---

# 91. Public Profile Status

Possible states:

* Draft
* Pending Review
* Published
* Changes Required
* Paused
* Hidden
* Suspended
* Archived

Only eligible Published profiles are public.

---

# 92. Public Profile Edit and Moderation

Public profile content changes may require review when they affect:

* business name
* public description
* logo
* cover
* service location
* verification claim
* compliance information

The private account profile may update separately from the public profile.

---

# 93. Saved Properties

Authenticated users may save Properties.

The feature must:

* store state server-side
* show saved state on cards and detail
* work across devices
* prevent duplicate rows
* support unsave
* provide immediate feedback
* rollback optimistic UI when server fails
* preserve privacy
* support saved list
* support empty state

---

# 94. Saved Projects

Saved Projects follow the same server-backed rules.

The saved list must show only currently accessible public Projects.

If a saved Project becomes unavailable:

* preserve a limited unavailable record where policy allows
* explain the state
* allow removal
* avoid exposing unpublished details

---

# 95. Saved Searches

Authenticated users may save a search definition.

A saved search may contain:

* mode
* city
* locality
* purpose
* category
* selected filters
* sort only when useful
* display name
* created timestamp

Saved searches must:

* be server-backed
* validate filters
* avoid storing unsafe arbitrary text
* support rename
* support delete
* support rerun
* support email notification only when a real approved alert feature is configured

Do not claim automatic alerts are active unless implemented and verified.

---

# 96. Recent Searches

Recent searches may be stored as:

* privacy-safe local preference
* authenticated server history

Recent searches must:

* be clearable
* avoid sensitive content
* use normalized labels
* limit retention
* not become public
* not affect search relevance unfairly

---

# 97. Public Notification Entry

Authenticated public users may see a notification icon in approved public contexts.

The icon must:

* show a real unread count
* open a preview
* link to the full notification center
* close on outside click
* close on Escape
* preserve current page
* use correct destination

The homepage notification experience must not expose private message content in a public screenshot or shared context.

---

# 98. Builder Promotion Carousel Purpose

The homepage includes a moderated Builder promotion carousel.

The carousel promotes eligible approved Builder content.

It must not behave like an unmoderated advertising slot.

---

# 99. Eligible Promotion Destinations

A promotion may target:

* approved Builder Project
* approved Project-linked inventory destination
* approved Builder public profile campaign
* another configured approved Builder marketplace destination

The destination must be:

* active
* public
* approved
* non-deleted
* eligible during the promotion schedule

---

# 100. Promotion Submission Data

A promotion may contain:

* Builder ID
* destination entity type
* destination entity ID
* title
* short description
* image or creative
* target city
* optional broader Gujarat scope
* start date
* end date
* placement
* priority controlled by Admin
* billing relation
* moderation status
* publication status
* click destination
* policy version

---

# 101. Promotion Lifecycle

```text
Draft
→ Preview
→ Billing Required or Included
→ Submitted
→ Pending Review
→ Changes Required, Approved, or Rejected
→ Scheduled
→ Active
→ Paused
→ Resumed
→ Expired
→ Archived
→ Restored or Resubmitted where allowed
```

Every transition must be server-controlled.

---

# 102. Promotion Billing State

Promotion availability may be:

* included in a plan
* separately paid
* manually granted by authorized Admin
* disabled

A paid promotion must not activate until:

* payment is verified
* moderation is approved
* destination is eligible
* schedule is valid

---

# 103. Promotion Moderation

Admin review must include:

* Builder
* destination
* creative
* text
* target city
* schedule
* billing state
* policy compliance
* destination status
* previous history

Admin actions:

* Approve
* Reject
* Request Changes
* Pause
* Resume
* Reopen
* Archive
* Restore where allowed

All sensitive actions require reason and audit.

---

# 104. Promotion City Targeting

Promotion targeting may use:

* one selected city
* configured multiple-city set
* Gujarat-wide scope
* Admin-defined placement rules

The homepage should prioritize:

1. selected city match
2. configured related-city or District fallback
3. Gujarat-wide eligible promotion

The fallback must be documented and deterministic.

---

# 105. Promotion Ordering

Ordering may consider:

* city relevance
* active schedule
* approved priority
* fairness rotation
* plan or paid placement
* recency
* frequency cap

Do not use hidden random ordering that makes reporting unreliable.

Sponsored content must be visually identifiable where required.

---

# 106. Promotion Carousel UX

Mobile:

* one clear slide/card at a time
* swipe
* visible position indicator
* readable text
* stable image ratio
* clear CTA
* no cramped multi-card display

Tablet:

* one or two cards depending on width
* touch-friendly controls

Desktop:

* multiple visible items or large hero card according to final design
* keyboard support
* visible navigation controls

---

# 107. Promotion Motion

Auto-rotation is optional.

When enabled:

* provide sufficient reading time
* pause on interaction
* pause on hover where relevant
* support keyboard
* stop or reduce under reduced-motion preference
* avoid layout shift
* avoid rapid rotation
* preserve manual control

---

# 108. Promotion Tracking

Real tracking may include:

* impression
* click
* destination open
* date
* promotion
* placement
* city context
* anonymous or privacy-safe session signal

Tracking must:

* avoid private user data
* support deduplication
* support abuse filtering
* be labeled honestly
* not create fake metrics
* be visible to Admin
* be visible to Builder only within approved scope

---

# 109. Promotion Empty State

When no promotion is eligible:

* hide the section cleanly
* or show an approved non-paid editorial section

Do not show placeholder promotions.

Do not leave a large empty carousel container.

---

# 110. Homepage Property Sections

Possible sections:

* Newly Approved Properties
* Properties for Sale in Selected City
* Properties for Rent in Selected City
* Commercial Properties
* Industrial Properties
* Saved or Recently Viewed context for authenticated users where approved

Each section must:

* use real data
* have a meaningful heading
* have a View All destination
* use limited results
* hide or show a real empty state
* preserve selected city context

---

# 111. Homepage Project Sections

Possible sections:

* New Builder Projects
* Projects in Selected City
* Ready-to-Move Projects
* Upcoming Projects
* Commercial Projects
* Industrial Projects

Every label must match real Project status.

---

# 112. Popular Cities

Popular Cities may be determined by:

* configured featured status
* real approved inventory
* real search activity
* business priority

The UI must not show fake Property counts.

Each city card should open a useful city landing page or search.

---

# 113. Property Category Discovery

Category cards may include:

* Flats
* Houses
* Villas
* Plots
* Commercial
* Industrial
* Offices
* Shops
* Warehouses
* approved category set

The category route must:

* preserve selected city
* open valid results
* show correct filters
* have real destination

---

# 114. Public Trust and Safety Section

The homepage and detail pages should explain:

* marketplace role
* verification meaning
* user responsibility
* safe inquiry
* reporting
* moderation
* billing safety
* support and grievance

Content should be concise and reassuring.

It must not imply guaranteed transaction safety.

---

# 115. Public Posting CTA

The homepage may include:

```text
Post Property
```

The action must:

* authenticate when needed
* preserve intent
* route Owner or Broker to Property posting
* route Builder to Project posting or relevant Builder flow
* explain role eligibility
* not open an invalid form for the user’s role

Guest flow may begin with:

* role-aware registration
* login
* role selection where registering

---

# 116. Public Pricing CTA

Pricing must be accessible to Guests and authenticated users.

Pricing must show:

* role
* plan name
* price
* billing period
* included features
* limits
* taxes or tax note
* trial where real
* active state
* CTA
* legal links

Do not show plans that cannot be purchased or assigned unless clearly labeled.

---

# 117. CMS Scope

The public CMS may manage:

* homepage informational sections
* static pages
* help pages
* legal pages
* Blog
* trust and safety content
* FAQ
* SEO supporting content
* public announcements

CMS content must be:

* versioned
* permissioned
* previewable
* publishable
* archivable
* auditable
* recoverable

---

# 118. CMS Page Lifecycle

```text
Draft
→ Review
→ Approved
→ Scheduled or Published
→ Updated
→ Archived
→ Restored
```

CMS publication must not rely on client state alone.

---

# 119. CMS Page Fields

A CMS page may include:

* title
* slug
* summary
* body
* metadata
* canonical
* robots state
* Open Graph image
* author
* version
* publication state
* scheduled date
* updated timestamp
* audit relation

Rich content must be sanitized.

---

# 120. Blog Scope

Blog may include:

* market education
* Property buying guidance
* renting guidance
* Builder and Project education
* legal awareness
* location guides
* platform updates
* safety content

Blog content must not make unsupported claims.

---

# 121. Blog Article Fields

A Blog article may include:

* title
* slug
* excerpt
* body
* author
* category
* tags
* hero image
* published date
* updated date
* metadata
* canonical
* structured data
* related articles
* status

---

# 122. Blog Article Verification

Before publication:

* links must work
* images must load
* metadata must be valid
* body must be sanitized
* headings must be structured
* accessibility must pass
* mobile layout must pass
* canonical must be correct
* no private or false data may appear

---

# 123. Legal Page Scope

Required public legal and policy pages include:

* Terms of Service
* Privacy Policy
* Cookie and Consent Policy
* Listing Policy
* Promotion Policy
* Payment Policy
* Refund and Cancellation Policy
* Marketplace Disclaimer
* Verification Disclaimer
* Builder/Project Compliance Notice
* Grievance and Support Information

---

# 124. Legal Versioning

Legal documents must support:

* version
* effective date
* publication date
* status
* archived previous version
* user consent relation where required
* Admin audit

The current effective version must be clear.

---

# 125. Legal Content Placement

Legal links must appear:

* public footer
* registration
* Direct Inquiry
* posting
* Project submission
* promotion submission
* checkout
* account settings
* grievance flow

Critical consent must not rely only on footer links.

---

# 126. Cookie and Consent UX

The product must provide a consent experience appropriate to enabled technologies.

Possible categories:

* Essential
* Preferences
* Analytics
* Marketing where approved

Rules:

* essential cannot be disabled when technically required
* optional categories require clear choice
* preferences must be changeable
* consent must be stored
* default state must follow applicable policy
* the banner must not block the entire product unnecessarily
* mobile layout must remain usable

---

# 127. Public Footer

The public footer may include:

* brand
* search links
* city links
* Property categories
* Project links
* pricing
* help
* Blog
* About
* Terms
* Privacy
* Listing Policy
* Payment Policy
* Marketplace Disclaimer
* Grievance
* social links only when configured

The footer must not appear in focused authenticated workflows unless intentionally required.

---

# 128. Footer SEO Safety

The footer must not contain:

* hundreds of low-value keyword links
* hidden links
* duplicate city combinations
* private routes
* Admin routes
* login-only links disguised as content
* outdated policies

---

# 129. Public Error Pages

Required public error states:

* 404
* 410 or unavailable content
* server error
* network error
* invalid search
* inactive city page
* removed Property
* removed Project
* unavailable profile
* provider-dependent action unavailable

Each state must provide:

* explanation
* homepage action
* search action where useful
* Back
* support where appropriate

---

# 130. Removed or Unavailable Property State

When a Property is no longer public:

* do not expose private details
* explain that it is unavailable
* offer related active Properties
* preserve safe public metadata only when policy allows
* remove from sitemap
* update robots
* avoid redirecting to an unrelated Property

---

# 131. Removed or Unavailable Project State

When a Project is no longer public:

* show a controlled unavailable state
* preserve Builder public link only if still valid
* offer related Projects
* remove from sitemap
* update metadata
* avoid exposing private Unit data

---

# 132. Public Profile Unavailable State

When a public profile is unavailable:

* explain that the profile is not currently public
* avoid exposing private account status
* provide search or homepage action
* remove from sitemap
* preserve valid redirects only when a replacement exists

---

# 133. Public Caching Strategy

Suitable cache candidates:

* homepage public sections
* city pages
* Property detail
* Project detail
* public profiles
* public CMS
* Blog
* public location lists
* promotion delivery response

Caching must use public-safe data only.

---

# 134. Cache Invalidation

Invalidate related public cache after:

* Property approval
* Property pause
* Property resume
* Property deletion
* Property restore
* Project approval
* Project pause
* Project resume
* Project deletion
* Project restore
* Unit availability change
* public profile publication
* public profile update
* city record update
* promotion activation
* promotion pause
* promotion expiry
* CMS publication
* legal publication

---

# 135. Public Cache Privacy

Public cache must never include:

* user-specific saved state
* private contact
* Leads
* messages
* notifications
* billing
* private profile
* Admin state
* private moderation
* user-specific account actions

Saved state should be layered separately after authentication.

---

# 136. Homepage Query Performance

Homepage sections should:

* request only required columns
* use indexed filters
* limit result counts
* avoid one large all-purpose query
* load secondary sections progressively where useful
* use cache
* avoid N+1 profile requests
* use public-safe joined views
* have timeout and fallback behavior

---

# 137. Search Query Performance

Search must:

* use server-side filters
* use indexes
* paginate
* avoid `select *`
* avoid client-side filtering
* limit suggestion results
* debounce client requests
* cancel stale requests
* protect against abusive volume
* log slow queries safely

---

# 138. SEO Page Performance

SEO pages should:

* use server rendering or static/ISR strategy
* use cached location metadata
* paginate inventory
* optimize images
* avoid loading all filters eagerly
* avoid loading authenticated data unnecessarily
* maintain useful content without excessive client JavaScript

---

# 139. Core Web Vitals

Public pages should target strong mobile performance.

Measure:

* Largest Contentful Paint
* Interaction to Next Paint
* Cumulative Layout Shift
* First Contentful Paint
* Time to First Byte

Do not declare PASS without measurement.

---

# 140. Image Performance

Public images must use:

* responsive sizes
* optimized formats
* width and height
* priority only for above-fold critical media
* lazy loading below fold
* CDN
* fallback
* stable aspect ratio

---

# 141. JavaScript Performance

Public routes should minimize client JavaScript.

Use:

* Server Components
* progressive enhancement
* dynamic import
* isolated interactive components
* lightweight search overlay
* lazy-loaded non-critical carousel logic
* no heavy Admin dependencies in public bundles

---

# 142. Public Accessibility

The public marketplace must support:

* semantic headings
* keyboard
* visible focus
* labeled search
* accessible cards
* accessible carousel
* accessible filters
* dialog focus
* screen-reader result updates
* touch targets
* contrast
* reduced motion
* zoom
* meaningful image alt text
* non-color status meaning

---

# 143. Homepage Accessibility

Verify:

* skip link
* heading order
* city selector label
* search label
* carousel controls
* card names
* save button names
* Direct Inquiry labels
* footer landmarks
* keyboard navigation
* focus restoration

---

# 144. Search Accessibility

Verify:

* suggestion navigation
* selected suggestion announcement
* result count announcement
* filter labels
* sort label
* applied filter announcement
* loading announcement
* no-results heading
* keyboard
* mobile sheet focus
* Close and Apply semantics

---

# 145. Public Card Accessibility

A card must not create nested interactive conflicts.

Recommended approach:

* main title or card region links to detail
* save is separate button
* Direct Inquiry is separate button
* menu is separate button

Each control needs an accessible name.

---

# 146. Promotion Carousel Accessibility

The carousel must provide:

* accessible region label
* slide position
* Previous
* Next
* pause control when auto-rotating
* keyboard support
* reduced-motion support
* readable focus order
* no focus movement on automatic rotation

---

# 147. Responsive Homepage

## 147.1 320px

* compact header
* city selector remains readable
* search remains full-width
* promotion card fits
* sections use one column
* no horizontal overflow
* footer links stack clearly

## 147.2 360px

* primary mobile authority
* comfortable search
* stable card layout
* clear CTA

## 147.3 390px and 430px

* more breathing room
* larger media
* category grid may expand
* no oversized empty margins

## 147.4 768px

* two-column discovery where appropriate
* tablet header
* carousel adaptation
* filters use tablet layout

## 147.5 1024px

* desktop transition
* wider search
* multi-column cards
* controlled section width

## 147.6 1366px and 1440px

* centered maximum width
* balanced whitespace
* readable sections
* no excessively stretched cards

## 147.7 Wide

* maximum content width
* no full-bleed text stretching
* media may remain wider where intentional
* section alignment remains stable

---

# 148. Responsive Search Results

Mobile:

* one-column results
* filter sheet
* sort sheet or menu
* selected chips
* sticky filter trigger only when safe

Tablet:

* filter drawer or side panel
* one or two columns
* stable list-detail behavior

Desktop:

* side filters or horizontal filters
* list or grid
* real comparison support
* no excessive content width

---

# 149. Public Text Wrapping Verification

Test with:

* long Property title
* long Project name
* long Builder name
* long locality
* long city
* long price label
* long status
* long filter chip
* long Blog title
* long legal page heading

No text may:

* overlap
* clip
* push actions outside viewport
* become unreadably truncated
* create uncontrolled card height

---

# 150. Sticky and Fixed Public UI

Possible sticky elements:

* mobile detail header
* Direct Inquiry action
* search filter trigger
* homepage header where useful

Rules:

* never cover content
* never conflict with bottom navigation
* respect safe area
* adapt to keyboard
* avoid multiple sticky layers
* use controlled z-index
* remain accessible

---

# 151. New-Tab Behavior

Public detail links may support new-tab behavior through normal browser actions.

The product should not force every card into a new tab.

Recommended:

* same-tab by default on mobile
* normal anchor behavior on desktop
* allow user-controlled new tab
* use explicit new tab only for external legal/provider destination where appropriate

---

# 152. Share Behavior

Property, Project, public profile, Blog, and city pages may support Share.

Share must use:

* canonical URL
* approved title
* public-safe description
* Web Share API where supported
* copy-link fallback
* accessible feedback

Do not include private referral data unless an approved referral system exists.

---

# 153. Report Entry

Public Property, Project, or profile pages may include a Report action.

The report entry must:

* preserve entity
* require authentication where policy requires
* open a short contextual form
* validate reason
* create a real report
* show confirmation
* create Admin destination
* preserve report history
* not reveal internal review details

---

# 154. Public Analytics Events

Approved public events may include:

* homepage viewed
* city selected
* search opened
* search submitted
* filter applied
* Property opened
* Project opened
* public profile opened
* saved item
* Direct Inquiry started
* promotion impression
* promotion click
* Blog opened

Analytics must not include:

* private contact
* raw full search text containing personal information
* OTP
* message body
* billing details
* private account ID where avoidable

---

# 155. Public Security

Public endpoints require:

* input validation
* rate limiting
* bot protection where configured
* query limits
* public-safe views
* no private fields
* no unrestricted export
* no hidden draft access
* no unpublished preview without authorized token
* safe cache headers
* safe structured data
* content sanitization

---

# 156. Search Rate Limiting

Search and suggestion endpoints should use:

* IP/session rate limits
* query-length limits
* result limits
* debounce
* abuse monitoring
* caching
* bot controls where configured

Legitimate browsing should remain smooth.

---

# 157. Public Preview Security

Authorized preview links for draft CMS or moderated content must:

* use secure expiring token
* require permission where appropriate
* avoid indexing
* avoid cache leakage
* avoid exposing unrelated private data
* expire
* be auditable

---

# 158. Public Data Views

Recommended public-safe views or services:

* `public_properties`
* `public_projects`
* `public_project_units`
* `public_owner_profiles`
* `public_broker_profiles`
* `public_builder_profiles`
* `public_promotions`
* `public_locations`
* `public_cms_pages`
* `public_blog_articles`

These views must exclude private fields.

---

# 159. Public Data Eligibility

A Property is public only when all required conditions pass.

Example:

```text
moderation_status = approved
publication_status = published
lifecycle_status = active
deleted_at is null
owner account eligible
required media eligible
```

A Project and Promotion must use equivalent eligibility checks.

---

# 160. Public Detail Consistency

The public card and detail page must not contradict each other.

Fields such as:

* price
* title
* location
* status
* availability
* Builder
* configuration

must come from consistent authoritative data.

---

# 161. Promotion Consistency

Promotion text must not claim values that conflict with the destination.

Before activation, validate:

* destination title
* destination status
* destination city
* active price or approved range
* Builder ownership
* image
* schedule
* billing
* moderation

---

# 162. Public Content Moderation

Public-facing CMS, Blog, profiles, promotions, Properties, and Projects must use approved moderation rules.

The public rendering layer must never infer approval from a client-provided flag.

---

# 163. Public Marketplace Admin Controls

Admin/Super Admin must be able to manage:

* homepage sections
* featured cities
* category visibility
* public profile visibility
* search taxonomy
* SEO indexability
* redirects
* promotions
* CMS
* Blog
* legal pages
* trust content
* public announcements
* public cache invalidation
* location requests

Every sensitive change requires:

* permission
* validation
* reason where appropriate
* audit
* preview
* recovery

---

# 164. Homepage Section Management

Admin may control:

* section enabled state
* display order
* heading
* query definition
* result limit
* selected city behavior
* empty behavior
* featured categories
* promotion placement

Admin must not manually enter fake Property results.

Sections must query approved data.

---

# 165. Search Taxonomy Management

Admin may manage:

* categories
* Property types
* Project types
* purposes
* filter visibility
* display labels
* SEO slugs
* active state
* sort order

Changes must preserve existing records and redirects where needed.

---

# 166. SEO Management

Permissioned Admin/SEO staff may manage:

* indexability
* metadata template
* content
* canonical
* redirect
* sitemap eligibility
* robots state
* featured location
* FAQ
* internal links

No SEO change may expose private routes.

---

# 167. Public Cache Management

Super Admin or permissioned staff may:

* inspect cache status
* invalidate specific entity
* invalidate city page
* invalidate homepage section
* invalidate CMS page
* run safe revalidation

Cache management must:

* require permission
* be audited
* avoid unrestricted global purge without confirmation
* preserve system stability

---

# 168. Public Marketplace Error Monitoring

Monitor:

* homepage failures
* search failures
* suggestion failures
* Property-detail failures
* Project-detail failures
* promotion failures
* image failures
* metadata failures
* sitemap failures
* CMS rendering failures

Alerts must include safe route and reference context.

---

# 169. Required Database Tables

The exact schema must follow repository audit and migrations.

Relevant tables may include:

* `states`
* `districts`
* `talukas`
* `cities`
* `localities`
* `location_aliases`
* `location_change_requests`
* `location_slug_history`
* `properties`
* `property_media`
* `projects`
* `project_units`
* `project_media`
* `public_profile_settings`
* `saved_properties`
* `saved_projects`
* `saved_searches`
* `promotions`
* `promotion_creatives`
* `promotion_schedules`
* `promotion_impressions`
* `promotion_clicks`
* `cms_pages`
* `cms_page_versions`
* `blog_articles`
* `legal_documents`
* `consent_records`
* `redirects`
* `seo_page_configurations`
* `search_taxonomies`

---

# 170. RLS Requirements

Public read policies must allow only eligible public data.

Authenticated users may:

* manage own saved items
* manage own saved searches
* read own preferences

Users may not:

* alter public approval status
* publish promotions
* edit another user’s public profile
* view unpublished content
* access private contact
* read another user’s saved items

Internal users require explicit permissions.

---

# 171. Public Marketplace Service Boundaries

Recommended services:

```text
homepage-service
location-service
search-service
suggestion-service
property-public-service
project-public-service
public-profile-service
saved-item-service
saved-search-service
promotion-delivery-service
seo-service
metadata-service
sitemap-service
cms-public-service
legal-content-service
redirect-service
```

UI components must not query unrestricted tables directly.

---

# 172. Homepage Service

The homepage service must:

* resolve selected city
* load eligible promotions
* load approved Property sections
* load approved Project sections
* load categories
* load popular cities
* load trust content
* apply cache
* handle partial failure
* return public-safe data

A failure in one secondary section should not necessarily break the entire homepage.

---

# 173. Search Service

The search service must:

* validate query
* normalize filters
* resolve location
* enforce public eligibility
* apply indexes
* paginate
* sort
* return public-safe records
* generate filter summary
* protect against abusive volume
* preserve deterministic result order

---

# 174. SEO Service

The SEO service must:

* validate route
* load canonical location
* load taxonomy
* determine indexability
* generate title
* generate description
* generate canonical
* generate robots
* generate structured data
* generate breadcrumbs
* handle redirects
* invalidate cache after changes

---

# 175. Promotion Delivery Service

The promotion service must:

* resolve selected city
* load eligible active promotion
* verify schedule
* verify destination
* verify moderation
* verify billing eligibility
* apply ordering
* return public-safe creative
* record real impression asynchronously
* avoid blocking homepage when tracking fails

---

# 176. Saved Item Service

The saved-item service must:

* authenticate
* validate entity eligibility
* insert idempotently
* remove safely
* return current state
* prevent duplicates
* preserve privacy
* support device synchronization

---

# 177. CMS Public Service

The CMS public service must:

* load published version
* sanitize content
* enforce schedule
* apply cache
* provide metadata
* handle archived page
* support redirects
* exclude drafts
* avoid exposing editor data

---

# 178. Navigation Behavior Matrix — Homepage

```text
Screen: Public Homepage
Role: Guest or authenticated public role
Entry points: Root URL, brand link, public navigation
Presentation type: Full page
Shell: Public Homepage Shell
Header: Homepage Header
Global navigation: Public
Primary action: Search
Secondary actions: Select City, browse categories, view Projects, login/account, Post, Pricing
Back behavior: Browser history
Close behavior: City/search/auth overlays only
Cancel behavior: Overlay-specific
Browser Back: Restores previous public route or closes route-based overlay
Refresh: Preserves explicit city preference where valid
Success destination: Search, Property, Project, profile, posting, auth
Failure behavior: Partial section fallback or page-level retry
Permission behavior: Protected actions trigger contextual auth
Mobile behavior: Compact header, one-column discovery, swipe carousel
Tablet behavior: Expanded sections, intentional grid
Desktop behavior: Constrained wide layout
State to preserve: Selected city, recent safe search, saved state
Loading state: Section-aware skeletons
Empty state: Hide empty secondary section or show intentional message
Error state: Retry and safe public fallback
Recovery: Home, Search, Select City, Retry
```

---

# 179. Navigation Behavior Matrix — Search

```text
Screen: Public Search Results
Role: Guest or authenticated public role
Entry points: Homepage search, SEO page, category, city page, related content
Presentation type: Full page
Shell: Public Search Shell
Header: Search Header
Global navigation: Compact public navigation
Primary action: Open result
Secondary actions: Filter, sort, save, Direct Inquiry
Back behavior: Return to originating public context
Close behavior: Filter/sort sheet only
Cancel behavior: Discard draft filter changes
Browser Back: Restore prior query/filter/page/scroll
Refresh: Reload same validated URL state
Success destination: Property or Project detail
Failure behavior: Preserve query and show retry
Permission behavior: Saved/Inquiry triggers auth
Mobile behavior: Single-column cards and filter sheet
Tablet behavior: Drawer or side filters
Desktop behavior: Side panel/top filters and list/grid
State to preserve: Query, city, mode, filters, sort, pagination, scroll
Loading state: Result skeletons
Empty state: Clear filters or broaden search
Error state: Retry without losing query
Recovery: Modify Search, Clear Filters, Home
```

---

# 180. Navigation Behavior Matrix — City SEO Page

```text
Screen: City SEO Landing
Role: Public
Entry points: Search engine, homepage city, internal links
Presentation type: Full public page
Shell: Public Discovery Shell
Header: Public/Search Context Header
Global navigation: Public
Primary action: Browse results
Secondary actions: Change filters, open category, view Project, select Property
Back behavior: Browser history
Close behavior: Overlay-specific
Cancel behavior: Filter draft only
Browser Back: Preserve prior public route
Refresh: Reload canonical city page
Success destination: Search result or detail
Failure behavior: Honest low-inventory state
Permission behavior: Protected actions trigger auth
Mobile behavior: Search-first, single-column cards
Tablet behavior: Structured discovery grid
Desktop behavior: City content plus results
State to preserve: City and selected category
Loading state: SEO content and results skeleton
Empty state: Broaden to District/Gujarat according to configured rule
Error state: Retry or Search
Recovery: Homepage, Search, nearby configured city
```

---

# 181. Required Automated Tests

## Unit tests

* city selection resolution
* location hierarchy validation
* slug normalization
* search query validation
* filter normalization
* sort validation
* public eligibility
* canonical generation
* metadata generation
* robots decision
* sitemap eligibility
* promotion eligibility
* promotion city ranking
* saved-item idempotency
* public profile field mapping

## Integration tests

* homepage service
* search service
* public Property query
* public Project query
* city SEO page
* location alias search
* promotion delivery
* saved Property
* saved Project
* saved search
* CMS publication
* redirect handling
* RLS public/private separation

## End-to-end tests

* homepage city selector
* homepage search
* search suggestions
* Property results
* Project results
* filters
* sort
* list-detail-return
* saved Property
* saved Project
* city page
* public Builder profile
* promotion click
* CMS page
* legal page
* unavailable Property
* unavailable Project
* contextual auth from public action

---

# 182. Homepage Verification Matrix

Verify:

* Guest homepage
* authenticated Owner homepage
* authenticated Broker homepage
* authenticated Builder homepage
* city selector
* no city selected
* selected city
* city with inventory
* city without inventory
* search activation
* search suggestion
* promotion with eligible data
* no promotion
* Property sections
* Project sections
* popular cities
* category links
* trust content
* pricing link
* posting CTA
* footer
* loading
* partial failure
* full error
* notification preview
* mobile widths
* tablet
* desktop
* keyboard
* console
* network

---

# 183. Search Verification Matrix

Verify:

* free-text search
* city search
* locality search
* Property type search
* Project search
* Builder search
* invalid query
* no query
* filters
* incompatible filter reset
* sort
* pagination
* Load More where used
* browser Back
* refresh
* shared URL
* detail open
* return to preserved state
* no results
* server failure
* slow network
* saved state
* Direct Inquiry auth
* mobile filter sheet
* tablet filter layout
* desktop filter panel
* keyboard
* accessibility
* console
* network

---

# 184. Location Verification Matrix

Verify:

* State load
* District load
* Taluka load
* City load
* Village/Locality load
* alias search
* duplicate name with parent context
* inactive location
* invalid hierarchy
* missing location request
* Admin approval
* Admin merge
* notification
* SEO slug
* redirect after slug change
* RLS
* mobile selector
* keyboard
* no-results state

---

# 185. SEO Verification Matrix

Verify:

* canonical city page
* sale page
* rent page
* Property-type page
* Project page
* public profile
* Property detail
* Project detail
* metadata
* canonical
* robots
* Open Graph
* structured data
* breadcrumb
* sitemap inclusion
* sitemap exclusion
* inactive content
* deleted content
* slug redirect
* duplicate parameters
* pagination
* server rendering
* mobile performance
* no private data in HTML or metadata

---

# 186. Promotion Verification Matrix

Verify:

* eligible promotion
* ineligible destination
* missing payment
* pending moderation
* approved
* scheduled
* active
* paused
* expired
* city match
* fallback
* no promotion
* carousel swipe
* keyboard
* reduced motion
* Previous/Next
* click destination
* impression
* click tracking
* no fake metrics
* responsive widths
* image failure
* cache invalidation
* Admin recovery

---

# 187. Public Profile Verification Matrix

Verify:

* Owner public profile
* Broker public profile
* Builder public profile
* unpublished profile
* suspended profile
* long name
* no active listings
* approved listings
* Project links
* save action where relevant
* Direct Inquiry entry through entity
* metadata
* no private contact
* no private payload
* mobile
* tablet
* desktop
* accessibility
* RLS

---

# 188. Saved Feature Verification Matrix

Verify:

* Guest save triggers auth
* authenticated save
* unsave
* duplicate tap
* server failure
* optimistic rollback
* cross-device persistence
* saved list
* unavailable saved item
* saved search
* invalid saved filter
* delete saved search
* RLS
* privacy
* mobile

---

# 189. CMS and Legal Verification Matrix

Verify:

* draft not public
* published page public
* scheduled page
* archived page
* restored page
* metadata
* canonical
* sanitization
* links
* responsive layout
* Blog article
* legal version
* consent link
* footer links
* noindex where required
* Admin audit
* rollback

---

# 190. Responsive Verification Recording

For every major public route, record:

```text
Route:
Role:
Selected city:
320px:
360px:
390px:
430px:
768px:
1024px:
1366px:
1440px:
Wide:
Search:
Filter:
Keyboard:
Text wrapping:
Sticky/fixed overlap:
Accessibility:
Console:
Network:
Metadata:
Result:
```

---

# 191. Live Browser Verification

The matching verification prompt must:

1. detect or start the development server
2. record URL and port
3. open homepage
4. select city
5. open search
6. use suggestions
7. apply filters
8. sort
9. open Property
10. return to results
11. open Project
12. return to results
13. test saved actions
14. test public profile
15. test city SEO page
16. test promotion
17. test CMS
18. test legal page
19. test unavailable states
20. test all required widths
21. test keyboard
22. check console
23. check network
24. inspect HTML/metadata for private leakage
25. fix defects
26. retest
27. update `PROJECT_STATE.md`
28. update `FEATURE_REGISTRY.md`
29. keep the development server running when safe

---

# 192. Production Marketplace Checklist

The public marketplace may pass production sign-off only when:

* homepage uses real approved data
* city selection works
* search suggestions work
* search filters work
* search state is preserved
* Property cards work
* Project cards work
* public profiles protect private data
* Builder promotions are moderated
* promotions use valid destinations
* SEO routes are canonical
* metadata is accurate
* sitemap is accurate
* robots rules are accurate
* no private routes are indexable
* public cache is safe
* performance is measured
* accessibility passes
* mobile widths pass
* tablet widths pass
* desktop widths pass
* no text clipping exists
* no fixed element covers content
* no fake counts or promotions exist
* public RLS tests pass
* monitoring is active
* production domain and SSL work
* production smoke test passes

---

# 193. Feature Registry Updates

After implementation, update at least:

* `HOME-001` through `HOME-012`
* `LOC-001` through `LOC-012`
* `SEARCH-001` through `SEARCH-017`
* `SEO-001` through `SEO-010`
* `PROFILE-001` through `PROFILE-004`
* `CMS-001` through `CMS-004`
* `LEGAL-001` through `LEGAL-009`
* `PROMO-001` through `PROMO-014`
* relevant `UX-*`
* relevant `SEC-*`
* relevant `PERF-*`
* relevant `QA-*`
* relevant `GRAPH-*`

Add exact:

* routes
* components
* services
* tables
* migrations
* RLS policies
* indexes
* cache tags
* metadata files
* sitemap files
* tests
* browser verification
* bugs
* provider state

---

# 194. Project State Updates

Update `PROJECT_STATE.md` with:

* current public marketplace phase
* implementation status
* changed files
* migrations
* location data status
* search status
* SEO status
* promotion status
* CMS status
* skills used
* automated checks
* live browser routes
* responsive widths
* accessibility
* metadata verification
* public data leakage result
* bugs
* blockers
* rollback checkpoint
* development server URL and port
* next prompt

---

# 195. Non-Negotiable Public Marketplace Rules

1. The homepage is mobile-first.
2. The city selector appears only in the homepage context.
3. City selection uses backend Gujarat location data.
4. The public marketplace does not require device geolocation.
5. Tapping search does not open empty results.
6. Search opens after meaningful input or selection.
7. Search uses public-safe server data.
8. Search filters are validated and server-backed.
9. Search state is preserved through detail navigation.
10. Property results include only approved, published, active records.
11. Project results include only approved, published, active records.
12. Property and Project cards use real data.
13. Public cards never expose private contact data.
14. Saved Properties, Projects, and searches are server-backed.
15. Public profiles use public-safe fields only.
16. Builder promotion content is moderated.
17. Paid promotion activation requires verified billing.
18. Promotion destination must be active and approved.
19. Promotion tracking must use real events.
20. Empty promotion sections must not show placeholders.
21. Gujarat location follows State → District → Taluka → City → Village/Locality.
22. Missing locations require Admin review.
23. SEO pages must be useful and canonical.
24. Thin arbitrary filter combinations must not be indexed.
25. Private routes and data must never be indexed.
26. Sitemaps contain only eligible public content.
27. Metadata and structured data must never expose private data.
28. CMS and legal content must be versioned and audited.
29. Public cache must never include private user data.
30. Public pages must pass mobile, tablet, desktop, accessibility, console, network, and metadata verification.
31. No fake counts, listings, promotions, ratings, or analytics may appear.
32. Every public action must have a real destination.
33. Every error must provide recovery.
34. Every fixed or sticky control must be tested for overlap.
35. Production PASS requires real live-domain smoke testing.

---

# 196. Implementation Handoff

The next document must define the complete core marketplace operations, including:

* Property creation
* Property drafts
* Property validation
* Property media
* Property preview
* Property moderation
* Property publication
* Property editing
* Property pause/resume
* Property soft delete and restore
* Project creation
* Project drafts
* Project compliance
* Project media
* Project moderation
* Project publication
* Project Units
* Unit inventory
* Unit pricing
* Direct Inquiry
* contact-sharing consent
* Lead creation
* unified Leads workspace
* messages
* notes
* follow-ups
* activity timeline
* entity-specific Lead drill-down
* notifications
* reports
* lifecycle state
* security
* RLS
* Admin drill-down
* QA and verification

---
