# CrucibleCpp Website

Official website source for [CrucibleCpp Preprocessor](https://github.com/tomatoOyster/cruciblecpp-preprocessor).

- Live site: https://hfsdr.cn
- Product: https://github.com/tomatoOyster/cruciblecpp-preprocessor
- License: MIT

This repository contains the **desktop multilingual website**. The mobile
version is maintained separately and is not part of this repository.

## Languages

The language hub is `languages.html`. It contains 25 language entries:

```text
简体中文  zh-TW  English  Español  Deutsch  العربية
Русский  日本語  한국어   Français Português (Brasil)
Italiano Polski Türkçe Tiếng Việt Bahasa Indonesia ไทย
हिन्दी فارسی עברית Ελληνικά Українська Nederlands Svenska Română
```

Each locale has its own directory and translated section anchors. The top
navigation dropdown intentionally stays short; new languages are added to
`languages.html` rather than making the dropdown grow indefinitely.

## Structure

```text
index.html             Home
features.html          Features
docs.html              Documentation
download.html          Download
changelog.html         Changelog
license.html           License
about.html             About
languages.html         Language hub
404.html               404 page
assets/                CSS, JS, flags, favicon
en/ zh-TW/ ...         Localized pages
deploy/                Sanitized Nginx example
```

Each localized directory contains:

```text
index.html             Full translated page
features.html          Section alias
docs.html              Section alias
download.html          Section alias
changelog.html         Section alias
license.html           Section alias
about.html             Section alias
```

The section aliases open the corresponding anchor in the translated page.

## Local preview

No build step is required:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/
```

## Deployment

Copy the site files to any static web root and point Nginx at it. A sanitized
example is provided in:

```text
deploy/nginx.conf.example
```

Do not commit TLS private keys, server passwords, deployment credentials, or
machine-specific paths.

## Adding a language

1. Create a new locale directory.
2. Translate the seven section pages.
3. Add a card to `languages.html`.
4. Add the language to the relevant navigation if desired.
5. Verify every route returns HTTP 200.

## License

MIT. See [LICENSE](LICENSE).
