---
name: design-system-tokens
description: Use to create, repair, or enforce design tokens, semantic surfaces, light/dark themes, spacing, radius, typography, component variants, and reusable UI primitives.
---

# Design System Tokens

Use this skill when a task touches themes, tokens, CSS variables, component variants, or system consistency.

## Token model

Define semantic tokens before styling individual screens:

- Color: background, foreground, muted, primary, secondary, accent, destructive, warning, success, border, input, ring.
- Surfaces: page, panel, card, popover, modal, selected, hover.
- Typography: display, title, heading, body, label, caption, mono.
- Space: compact, default, relaxed; map to a consistent scale.
- Radius: small, medium, large, full; avoid excessive values.
- Shadow/elevation: none, subtle, floating, overlay.

## Light and dark parity

Every token must have light and dark values. Do not implement a light-only UI unless the user explicitly requests it.

## Surface rules

- Surface levels must lift relative to context.
- Avoid nested boxes; use spacing, dividers, grouping, and typography first.
- Do not make every section a card.
- Use borders and tone subtly.

## Component rules

- Build primitives before screen-specific composites.
- Define variants for repeated states.
- Keep component APIs predictable.
- Include accessibility states.
- Document component usage if it is new to the codebase.

## Default design language

When no style exists, use the Fluid Functionalism-inspired fallback described in `codex-design-core/references/implementation-stack.md`, then adapt to the product’s audience.
