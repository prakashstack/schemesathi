# SchemeSathi roadmap

Frontend-only (no backend, no DB, no auth). Static-deployable.

## Verified data sources
- [x] data.gov.in `/lists` catalogue API — CORS `*`, sample public key works. Used for live dataset search.
- [x] api.postalpincode.in — CORS `*`. Used for PIN -> state/district.
- [x] myScheme API — region-blocked / not browser-accessible. NOT integrated; linked as official portal only.

## Tasks
- [x] Simplify eligibility into three steps, with plain-language optional questions in all three languages; verify the completed flow.
- [x] Design system (src/styles.css)
- [x] Types, states data, categories data
- [x] i18n: en, hi
- [x] i18n: gu
- [x] Scheme reference dataset with published criteria + official URLs
- [x] Eligibility engine + tests
- [x] Services: governmentApi, schemeApi, locationApi
- [x] Hooks: i18n, profile (localStorage), saved schemes
- [x] Layout: header, footer, language switcher, disclaimer
- [x] Pages: /, /eligibility, /results, /schemes, /schemes/:id, /categories, /categories/:id, /states, /states/gujarat, /central, /saved, /privacy
- [x] Head metadata per route
- [x] Verify in browser
