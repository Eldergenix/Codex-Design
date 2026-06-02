---
name: product-design-discovery
description: Use before major product, UI/UX, branding, or prototype work to clarify goals, audience, constraints, design system, variations, and deliverables.
---

# Product Design Discovery

Use this skill when the user starts a new design task or when requirements are broad, ambiguous, or missing context.

## Goal

Turn vague product intent into enough context to design or implement responsibly.

## Ask only what matters

For broad design work, ask a focused question set covering:

1. Product and feature goal.
2. Target users and primary job-to-be-done.
3. Platform: web, mobile, desktop, responsive, or all.
4. Existing codebase, design system, Figma, screenshots, brand assets, or UI kit.
5. Desired fidelity: wireframe, hi-fi mockup, prototype, production code, audit, or design system.
6. Number of variations and what should vary: layout, visual direction, interaction, copy, flow, motion, component style.
7. Brand tone and prohibited styles.
8. Content source: real copy, generated draft, placeholders, or user-provided content.
9. Accessibility, localization, compliance, or performance constraints.
10. Success criteria and review format.

If the user has already given enough information, do not ask redundant questions. State assumptions and proceed.

## Discovery output

Use this format when it helps:

```xml
<design_brief>
  <goal></goal>
  <audience></audience>
  <platforms></platforms>
  <source_context></source_context>
  <constraints></constraints>
  <deliverables></deliverables>
  <variation_plan></variation_plan>
  <assumptions></assumptions>
  <acceptance_criteria></acceptance_criteria>
</design_brief>
```

## Context acquisition requirement

Good hi-fi design must be rooted in existing context. Before designing from scratch, inspect or request:

- Source code.
- Existing components.
- Global styles.
- Brand tokens.
- Screenshots.
- Design files.
- Live product references owned by the user.

If none exists, explicitly say the work will use a new design direction and define that direction before implementation.
