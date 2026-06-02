---
name: mobile-app-ui-implementation
description: Use for React Native, Expo SDK 56, NativeWind, iOS/Android UI, mobile UX flows, touch targets, safe areas, and mobile design-system implementation.
---

# Mobile App UI Implementation

Use this skill for mobile app screens, flows, components, and React Native implementation.

## Stack priority

1. Existing project dependencies and navigation setup.
2. Existing tokens, theme provider, and component kit.
3. Target stack when starting from scratch: React Native, Expo SDK 56, TypeScript, NativeWind, platform-native navigation, safe-area handling, haptics when appropriate.

## Mobile design rules

- Minimum hit target: 44px.
- Respect safe areas, dynamic island/notch, home indicator, keyboard, and system text scaling.
- Avoid hover-only interactions.
- Use platform-native gestures and transitions when possible.
- Keep primary actions reachable.
- Design empty, loading, error, offline, permission, and success states.
- Avoid dense desktop layouts squeezed into mobile.

## React Native implementation rules

- Inspect app structure before adding screens.
- Keep screens thin; extract components and hooks.
- Keep styles token-based and theme-aware.
- Avoid hard-coded pixel values when tokens or responsive helpers exist.
- Use platform-specific files only when behavior genuinely differs.
- Test assumptions on both iOS and Android when project setup allows.

## NativeWind rules

- Use NativeWind only when configured or requested.
- Map tokens to the project’s theme rather than writing ad hoc colors.
- Keep class names readable; extract components when class strings become dense.

## Verification

Use available scripts and device checks:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm expo-doctor
pnpm start
```

Use the project’s actual package manager and scripts.
