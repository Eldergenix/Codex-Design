---
name: handoff-and-refactor
description: Use after design or implementation to package handoff notes, refactor UI code, split god components, document tokens, and prepare maintainable frontend deliverables.
---

# Handoff and Refactor

Use this skill after design implementation or when an interface needs production hardening.

## Handoff package

Include only useful handoff material:

- Files changed.
- Components created or modified.
- Tokens added or updated.
- State coverage.
- Accessibility considerations.
- Verification run.
- Known caveats.
- Next steps.

## Refactor triggers

Refactor when:

- A file approaches 1000 lines.
- A component has unrelated responsibilities.
- Class strings are repeatedly duplicated.
- Surface/radius/spacing decisions are hard-coded repeatedly.
- Theme values diverge between light and dark.
- State handling is interleaved with visual primitives.

## Refactor shape

Separate:

- `tokens` or CSS variables.
- Primitive UI components.
- Product components.
- Screen composition.
- Hooks and data access.
- Test fixtures or sample data.

## Completion note

Keep final notes concise. State what changed, where to review it, what was verified, and what remains uncertain.
