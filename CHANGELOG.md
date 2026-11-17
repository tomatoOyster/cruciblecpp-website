# Changelog

All notable changes to the CrucibleCpp website.

## v1.2.1 — 2026-11-18

### Fixed

- Translating the two Chinese comments inside the PowerShell code blocks
  for every locale
- Keeping command lines and the surrounding HTML structure unchanged

## v1.2.0 — 2026-11-18

### Changed

- Rebuilt every non-Chinese locale directly from the Chinese 7-page source
- Every locale now has the same HTML structure, section ids, link count,
  code blocks and text-node count as the Chinese source
- Replaced section aliases with real translated pages
- Added RTL direction for Arabic, Persian, Hebrew and Urdu
- Verified 32 locales × 8 pages (index, features, docs, download, changelog,
  license, about, 404) with a parity checker

## v1.1.0 — 2026-11-18

### Added

- 8 new languages: Urdu, Bengali, Tamil, Czech, Hungarian, Finnish, Danish and Norwegian
- Full translated sections for each new locale
- Locale routes for features, docs, download, changelog, license and about
- RTL support for Urdu
- Updated language hub with 33 language cards
- Updated screenshots and language count in the README

## v1.0.0 — 2026-11-18

First public release of the website source.

### Added

- Desktop home page and six content pages: features, docs, download, changelog,
  license and about
- Dedicated language hub at `languages.html`
- 25 language entries with inline SVG flags
- Full translated pages for every non-Chinese locale
- Section aliases for `/features.html`, `/docs.html`, `/download.html`,
  `/changelog.html`, `/license.html` and `/about.html` in every locale
- RTL layout support for Arabic, Persian and Hebrew
- Custom language picker with keyboard controls and outside-click close
- Cyan light theme
- Static 404 page
- Sanitized Nginx example
- Screenshots for the home page and language hub

### Changed

- The top language dropdown keeps the nine primary languages; additional
  languages live on the language hub
- The mobile website is intentionally excluded from this repository

### Notes

- No build step and no runtime dependencies
- Website source is MIT licensed
- The product license is CC BY-NC 4.0 for V3.0.0 and later, MIT for V2.9.0 and
  earlier
