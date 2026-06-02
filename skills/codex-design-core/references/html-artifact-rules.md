# HTML Artifact Rules

Use this when Codex Design creates a standalone HTML prototype, design canvas, deck-like artifact, animation demo, or interactive mockup.

## File naming

- Use descriptive filenames such as `Landing Page Prototype.html` or `Mobile Onboarding Concepts.html`.
- Preserve prior major versions when making significant revisions.

## React and Babel for inline JSX

When writing React prototypes with inline JSX, use these exact pinned scripts:

```html
<script src="https://unpkg.com/react@18.3.1/umd/react.development.js" integrity="sha384-hD6/rw4ppMLGNu3tX5cjIb+uRZ7UkRJ6BPkLpg4hAu/6onKUg4lLsHAs9EBPT82L" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js" integrity="sha384-u6aeetuaXnQ38mYT8rp6sbXaQe3NL9t+IBXmnYxwkUI2Hw4bsp2Wvmx4yRQF1uAm" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" integrity="sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y" crossorigin="anonymous"></script>
```

Avoid `type="module"` for helper script imports in these prototypes unless the environment explicitly supports it.

## Scope safety

- Never define `const styles = { ... }` at global scope.
- Use unique names: `const dashboardStyles`, `const phoneFrameStyles`, `const deckStyles`.
- For multiple Babel files, attach shared components to `window`:

```js
Object.assign(window, {
  AppShell,
  PhoneFrame,
  DesignOption,
});
```

## Screen and slide labels

- Add `data-screen-label` on high-level screens, slides, and major prototype states.
- Slide numbers are 1-indexed. Use labels like `01 Title`, `02 Agenda`, `05 Pricing`.

## Interaction persistence

- Persist current slide, tab, playback time, or active variant in `localStorage` when refresh continuity matters.
- Avoid title screens unless the deliverable is a deck and the user asked for one.
- Never use `scrollIntoView`.

## AI calls inside artifacts

Do not assume a built-in model-completion bridge exists inside generated HTML. If a host project provides one, read that project’s docs and use the exact exposed API. Otherwise keep prototypes deterministic and local.
