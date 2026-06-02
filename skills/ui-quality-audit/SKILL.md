---
name: ui-quality-audit
description: Use to review UI/UX quality, identify design inconsistencies, accessibility issues, visual polish defects, implementation debt, and production-readiness gaps.
---

# UI Quality Audit

Use this skill when asked to review, critique, improve, polish, or verify UI/UX.

## Audit levels

### Fast pass

Use for small edits or one screen:

- Hierarchy.
- Alignment.
- Spacing.
- Theme parity.
- States.
- Accessibility basics.
- Obvious code issues.

### Full pass

Use for product surfaces, design systems, or production work:

- Product fit.
- Information architecture.
- Interaction states.
- Responsive behavior.
- Empty/loading/error states.
- Light/dark parity.
- Token consistency.
- Accessibility.
- Component architecture.
- Build/test verification.

## Severity model

- Critical: blocks use, accessibility, data safety, or core task completion.
- High: visible inconsistency, broken responsive behavior, poor state handling, or major implementation debt.
- Medium: polish issue, unclear hierarchy, missing secondary state.
- Low: minor copy, spacing, naming, or optional cleanup.

## Output format

```xml
<ui_audit>
  <summary></summary>
  <critical></critical>
  <high></high>
  <medium></medium>
  <low></low>
  <recommended_fixes></recommended_fixes>
  <verification></verification>
</ui_audit>
```

When implementing fixes, prioritize critical and high issues before optional polish.
