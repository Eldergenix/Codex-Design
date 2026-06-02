# Visual Style Contract

This contract is mandatory for Codex Design output unless the user or existing design system says otherwise.

## Default style posture

Default to a restrained, tactile, modern product language:

- Clean geometry.
- Deliberate whitespace.
- Strong typography hierarchy.
- Fine borders and subtle tonal elevation.
- Fast, useful motion.
- Low-decoration interface surfaces.
- Consistent light and dark themes.

## Hard visual prohibitions

Do not use these unless the user explicitly asks or the existing product already uses them:

- Nested box stacks.
- Neon styles.
- Glow effects.
- Large gradients or gradient backgrounds.
- Glassmorphism dashboards.
- Left-border-accent cards.
- Arbitrary icons to fill space.
- Emoji as UI decoration.
- Fake analytics or decorative metrics.

## Surface system

Use a semantic elevation model:

- `surface-0`: page background.
- `surface-1`: base panel or app chrome.
- `surface-2`: card or grouped control.
- `surface-3`: floating control, menu, or popover.
- `surface-4`: modal, sheet, or dominant overlay.
- `surface-selected`: selected list row or active state.
- `surface-hover`: transient hover layer.
- `surface-danger`, `surface-warning`, `surface-success`: semantic feedback surfaces.

Rules:

- A child surface should lift relative to its parent, not hard-code a global level.
- Light mode may rely on borders and shadow more than hue shifts.
- Dark mode needs perceptible tonal separation.
- Do not add a new card if spacing, type, or divider treatment can solve grouping.

## Radius and border

- Use 2 or 3 radius values maximum per product area.
- Use large radius for major surfaces only if the product language calls for it.
- Do not mix pill, 2xl, and sharp radii randomly.
- Use border opacity and color tokens; avoid raw hard-coded colors.

## Typography

- Use the existing product font stack when available.
- Avoid defaulting to overused generic stacks when creating a new brand direction; choose a deliberate type direction.
- For 1920x1080 slides, text should not drop below 24px.
- For mobile, body copy should remain comfortably readable and controls should not compress below platform norms.

## Motion

Motion must clarify state or continuity. Prefer:

- 120ms-220ms transitions for small state changes.
- 220ms-380ms for surface entrance or route-level changes.
- Reduced-motion alternatives.
- Progressive blur only where it improves scrolling or overlay legibility.
- Border beam or liquid metal treatments only for user-requested premium accents, not baseline UI.
