# weweb-onboarding

Remote content for the **editor onboarding canvas carousel** (WW-5241).

The WeWeb editor fetches `onboarding-carousel.json` from the `main` branch at runtime
and renders it as a carousel over the empty canvas during the first AI generation.
The product team owns this content — edit it here, no editor release required.

## Layout

```
onboarding-carousel.json   manifest (schema below)
assets/                    GIFs / images referenced by slide.asset
```

## Schema

```jsonc
{
  "version": 1,                 // bump only on a breaking schema change
  "slideDurationMs": 10000,     // default auto-advance interval (fallback per slide)
  "mediaMaxHeight": 380,        // optional, px — media frame max height (code default: 380)
  "slides": [
    {
      "id": "build-interface",  // stable unique id
      "icon": "16/plus-circle", // wwEditorIcon name
      "title": "…",
      "subtitle": "…",
      "asset": "file.gif",      // resolved to assets/<asset> on this branch
      "imageAlt": "…",
      "durationMs": 8000          // optional; per-slide auto-advance (falls back to slideDurationMs)
    },
    {
      "id": "weweb-academy",
      "type": "cta",            // optional; "cta" renders a link button
      "icon": "16/book-open",
      "title": "…",
      "subtitle": "…",
      "asset": "academy-guides-bg.png",
      "imageAlt": "…",
      "ctaLabel": "Open WeWeb Academy",
      "ctaUrl": "https://academy.weweb.io/"
    }
  ]
}
```

## Media size

`mediaMaxHeight` (optional, top-level, pixels) sets the max height of the
slide media frame. It is optional: when omitted (or invalid), the editor uses
its built-in default of **380px**. Set it here to make the GIFs/images larger
or smaller without an editor release — the responsive cap still applies, so the
frame never exceeds the available canvas height.

```jsonc
"mediaMaxHeight": 480   // taller media; remove this line to fall back to 380
```

## Local development (with weweb-editor)

1. Clone this repo next to `weweb-editor` (sibling directory), or set `WEWWEB_ONBOARDING_PATH`.
2. In `weweb-editor`, copy `env/.env.development.local.example` → `env/.env.development.local`.
3. Run the editor as usual (`npm run serve` or `npm run serve:dev`).
4. In the browser devtools console:
   - `wwLib.__onboardingCarousel.show()` — open the carousel overlay
   - `wwLib.__onboardingCarousel.reload()` — re-fetch JSON after edits
   - `wwLib.__onboardingCarousel.hide()` — close the overlay

Edits to `onboarding-carousel.json` and `assets/` are served live from your local clone (no commit/push needed). Reload the carousel after JSON changes.

Without `.env.development.local`, the editor uses production content from GitHub `main` (cached in `localStorage` under `ww-onboarding-carousel`).

## Editing

1. Add/replace a file under `assets/`.
2. Add/edit/reorder the matching entry in `onboarding-carousel.json`.
3. Commit to `main`. The editor picks it up on next load (stale-while-revalidate cache).

Keep `version` unchanged unless the editor-side schema changes.
Unknown fields are ignored by the editor, so additive changes are safe.

The editor ships a minimal text-only fallback, so a malformed JSON or an
unreachable GitHub degrades gracefully — but keep this file valid.
