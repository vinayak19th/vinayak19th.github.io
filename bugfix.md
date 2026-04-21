# Bugfix backlog

This document tracks issues identified in a code review of the Jekyll resume site (`_layouts`, `_includes`, `_sass`, `assets/`, `_config.yml`). Items are ordered by severity.

---

## Critical / high impact

### Contact modal uses placeholder URLs

**File:** `_includes/contact_card.html`

**Issue:** Social and mail links use hard-coded placeholders (`example@email.com`, `wa.me/1234567890`, empty LinkedIn/GitHub paths) instead of `site.email`, `site.whatsapp_number`, `site.linkedin_username`, `site.github_username`, etc.

**Fix:** Replace placeholders with the same Liquid variables used elsewhere (e.g. `intro.html`, `_config.yml`).

---

### Broken `href` and demo GitHub stats in `top-middle` layout

**File:** `_includes/layout/top-middle.html`

**Issue:**

1. `<a href="include.item.link">` is a literal string; it should be `{{ include.item.link }}` (or use the existing `a.html` include consistently).
2. The GitHub pin image is hard-coded to `anuraghazra/github-readme-stats` instead of deriving `username`/`repo` from `include.item.github` (as in `left-proj.html`).

**Fix:** Use proper Liquid for the href; build the stats image URL from `include.item.github` or remove the duplicate card if `left-proj` already covers this.

---

### `githubstats` config flag unused

**Files:** `_config.yml`, README, `_includes/*`

**Issue:** `githubstats: True` is documented as enabling GitHub stats on the about page, but no template checks `site.githubstats`. Repo cards render whenever `include.item.github` is set.

**Fix:** Either wrap stats/card markup in `{% if site.githubstats %}` (or similar) or remove the option from `_config.yml` and README.

---

### Generated `_site` tracked in git

**Issue:** Build output under `_site/` is committed. That duplicates source, inflates diffs, and can diverge from templates.

**Fix:** Add `_site/` to `.gitignore` (unless GitHub Pages is configured to publish from a branch that requires pre-built output—then document that exception). Prefer letting Pages build from source.

---

## Correctness & consistency

### Invalid `primary-rgb` in theme colors

**File:** `_config.yml`

**Issue:** `primary-rgb: "24,288,156"` includes `288`, which is not a valid RGB channel (max 255). Likely a typo (e.g. `188`).

**Fix:** Correct the three values to valid 0–255 integers.

---

### Bootstrap 3 JS vs Bootstrap 5 CSS

**Files:** `_sass/resume-base-theme.scss` (CDN Bootstrap 5.3.7), `assets/js/bootstrap.min.js` (v3.2.0), `_includes/nav.html` (BS3-style classes and `data-toggle`)

**Issue:** Mixed major versions are fragile and hard to maintain.

**Fix:** Standardize on one Bootstrap major version across CSS, JS, and markup (or drop bundled BS JS if only BS5 CDN CSS is needed and interactions are custom).

---

### README: dark mode storage mismatch

**Files:** `README.md`, `assets/js/darkmode.js`

**Issue:** README says persistence via cookies; implementation uses `localStorage`.

**Fix:** Update README to describe `localStorage` (or implement cookies if that is the product requirement).

---

## Security & maintenance

### Outdated jQuery

**File:** `assets/js/jquery-1.11.0.js`

**Issue:** jQuery 1.11 is unmaintained.

**Fix:** Upgrade to a supported jQuery 3.x (if jQuery is still required) or replace scroll/easing behavior with vanilla JS and remove jQuery.

---

### Third-party scripts without hardening notes

**Files:** `_includes/head.html`, `_includes/js.html`

**Issue:** External scripts (Font Awesome kit, Pageclip, unpkg, Google Fonts) add supply-chain and availability risk; some lack SRI.

**Fix:** Optional: add [Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity) where URLs are stable; document privacy/dependency tradeoffs for a personal site.

---

## Accessibility & markup

### Invalid attribute on `<main>`

**File:** `_layouts/default.html`

**Issue:** Uses `arialabel` instead of `aria-label`.

**Fix:** Replace with `aria-label="Content"` (or a more specific label).

---

### Malformed `&nbsp` in publications filters

**File:** `_includes/publications.html`

**Issue:** Labels use `Tag&nbsp:` / `Venue&nbsp:` — `&nbsp` must end with a semicolon (`&nbsp;`).

**Fix:** Use `Tag:&nbsp;` / `Venue:&nbsp;` or control spacing via CSS.

---

### Dark mode toggle: inline handler

**File:** `_includes/nav.html`

**Issue:** `onClick="modeSwitcher()"` complicates CSP and consistency.

**Fix:** Attach the handler in `darkmode.js` with `addEventListener`.

---

## Smaller nits

| Item | Location | Suggestion |
|------|----------|------------|
| Link text duplicates URL | `_includes/layout/left-proj.html` | Use project name (or title) as anchor text instead of raw URL. |
| License mismatch | `package.json` vs README | Align `"license"` with MIT if the project is MIT. |
| Typo | `_sass/resume-base-theme.scss` (`.header-contianer`) | Rename to `.header-container` everywhere it is used. |

---

## Optional verification

After fixes, run a local Jekyll build (`docker compose up` or `bundle exec jekyll serve`), click through the contact modal, every nav page, project layouts using `top-middle`, and dark mode + GitHub stat images.
