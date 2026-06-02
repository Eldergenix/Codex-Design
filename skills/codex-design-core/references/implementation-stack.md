# Implementation Stack Contract

Follow the installed project versions first. When no project context is available, use this target stack.

## Web

- Next.js 16 with App Router.
- TypeScript by default.
- Tailwind CSS for styling when already configured or requested.
- shadcn/ui for owned component source, not black-box components.
- Radix UI primitives for accessible behavior.
- TanStack Query for server state, TanStack Table for data grids, TanStack Form where adopted.
- Lucide, Phosphor, Material Icons, or MUI icons based on project convention.
- MUI only when the project already uses it or the user asks for Material-style systems.

## Mobile

- React Native with Expo SDK 56 when creating or modifying Expo apps.
- NativeWind for utility styling when already configured or requested.
- Respect safe areas, keyboard behavior, platform-specific navigation, haptics, permissions, and touch targets.
- Minimum mobile hit target: 44px.
- Prefer platform-native gestures over web-like hover patterns.
- Verify on both iOS and Android assumptions when the codebase supports both.

## Component rules

- Keep component files below 300-500 lines where practical; hard limit 1000 lines.
- Split data, primitives, composed components, and screens.
- Prefer variants with class variance utilities or typed mappings when variants repeat.
- Keep layout primitives generic and product components semantic.
- Do not create one-off CSS variables without adding them to the token contract.
- Include loading, empty, error, disabled, focus, selected, and success states when relevant.

## shadcn/ui and coss/ui commands

Use the current `shadcn` CLI pattern:

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button dialog popover tabs table skeleton command
pnpm dlx shadcn@latest add @coss/empty
```

For Fluid Functionalism surfaces, inspect the upstream docs and install recipe when the user asks for that design language:

```bash
npx shadcn@latest add https://www.fluidfunctionalism.com/r/elevated.json
```

Do not bulk-install every registry item. Install only components needed by the design.

## CSS default when no style is provided

When no brand or design system exists, use a Fluid Functionalism-inspired token approach:

- semantic surfaces,
- dark/light parity,
- radius as a mode,
- subtle tonal elevation,
- no nested boxes,
- no glow/neon/gradient defaults.

If the user explicitly asks to use the upstream global CSS, fetch and inspect the source, confirm license/fit, and adapt only the needed token ideas into the project’s existing CSS architecture.
