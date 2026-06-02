---
name: web-app-ui-implementation
description: Use for production web UI implementation with Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Radix, TanStack, icons, MUI, or HTML prototypes.
---

# Web App UI Implementation

Use this skill when building or refactoring web UI.

## Stack priority

1. Existing project conventions.
2. Existing design system and token files.
3. Existing component primitives.
4. Target stack when no constraints exist: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui, Radix UI, TanStack, Lucide or project icon set.

## Implementation rules

- Inspect package files before assuming dependencies.
- Do not introduce MUI into a shadcn/Radix project unless the user asks or the project already uses MUI.
- Do not introduce a new icon family if one already exists.
- Use semantic components and routes.
- Use server/client component boundaries intentionally.
- Keep visual tokens centralized.
- Keep component files below 1000 lines; split long files sooner.
- Include loading, empty, error, disabled, focus, selected, and success states as appropriate.
- Use accessible Radix/shadcn primitives for dialogs, menus, popovers, tabs, tooltips, and command palettes.

## Styling rules

- No nested boxes by default.
- No glow, neon, or gradients by default.
- Use consistent surfaces, borders, radius, and focus rings.
- Implement light and dark variants with semantic CSS variables.
- Prefer class composition utilities or variants over repeated long class strings.

## shadcn/coss installation

Use targeted installation only:

```bash
pnpm dlx shadcn@latest add button dialog popover tabs table skeleton command
pnpm dlx shadcn@latest add @coss/empty
```

Add only the components needed for the deliverable.

## Verification

Run what the project provides:

```bash
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

If commands differ, inspect `package.json` and use the available scripts.
