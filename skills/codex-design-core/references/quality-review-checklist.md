# Quality Review Checklist

Use this checklist before final response or handoff.

## Screens and flows

- Each screen has a clear primary action.
- Secondary actions are visually subordinate.
- Navigation has a coherent information architecture.
- Empty/loading/error/success states are present when relevant.
- Edge cases are not hidden by perfect-path mock data.

## Visual consistency

- Surface levels are consistent.
- No accidental nested boxes.
- Spacing scale is consistent.
- Radius and border choices are consistent.
- Light and dark variants are implemented or specified.
- No glow, neon, or gradient appears unless requested.

## Components

- Components are named for product meaning and UI role.
- Repeated patterns are extracted.
- Variant APIs are typed or documented.
- Component files are not god components.
- State styles cover hover, focus, active, disabled, selected, loading, and error.

## Accessibility and platform

- Mobile hit targets are at least 44px.
- Focus indicators are visible.
- Color contrast is acceptable.
- Keyboard and screen-reader semantics are not broken.
- Reduced-motion behavior exists where motion could be disruptive.

## Verification

- Run available typecheck, lint, unit test, build, storybook, visual regression, or preview checks.
- If verification is impossible, state exactly what was not verified.
