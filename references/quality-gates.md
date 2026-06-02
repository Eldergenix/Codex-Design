# Codex Design Quality Gates

Run these gates before considering design work complete.

## Product fit

- The design matches the user’s product goal, audience, and platform.
- The primary user action is obvious without decorative noise.
- Empty, loading, error, success, and permission states are accounted for when relevant.
- Copy is specific and useful; no filler text exists just to fill space.

## Visual system

- Light and dark theme variants use the same semantic token model.
- Surfaces have consistent elevation rules.
- Spacing uses a predictable scale.
- Radius values are intentional and not randomly mixed.
- Type scale is readable at the target viewport.
- Color choices come from the brand/design system or an explicitly defined token set.

## Anti-trope enforcement

- No nested box stacks unless the user asked for framed composition.
- No neon, glow, or gradient styles unless the user asked.
- No left-border-accent card pattern unless already in the design system.
- No emoji unless part of the brand or existing product language.
- No generic AI dashboard slop: decorative stats, meaningless icons, or fake analytics.

## Accessibility

- Text contrast passes WCAG AA where possible.
- Focus states are visible.
- Interactive targets are at least 44px on mobile.
- States do not rely on color alone.
- Motion has reduced-motion fallback when meaningful.
- Semantic elements or accessible roles are used.

## Code quality

- Files stay below 1000 lines.
- Components stay focused; split before a god component forms.
- Reusable UI primitives are extracted.
- No hard-coded surface values when tokens are available.
- No duplicated class strings when a variant utility is warranted.
- Build, lint, typecheck, or focused tests are run when available.
