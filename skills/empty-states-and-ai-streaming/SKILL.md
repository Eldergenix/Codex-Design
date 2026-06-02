---
name: empty-states-and-ai-streaming
description: Use for empty states, no-data UI, AI output streaming, thinking steps, loading states, skeletons, progressive disclosure, and conversational product surfaces.
---

# Empty States and AI Streaming

Use this skill for empty states, loading, no results, onboarding nudges, AI output streaming, thinking indicators, and stateful conversational UI.

## Empty states

Install coss/ui Empty when the project uses shadcn-compatible components and the user wants a polished empty-state primitive:

```bash
pnpm dlx shadcn@latest add @coss/empty
```

Empty states should contain:

- Specific title.
- Useful explanation.
- One primary next action where appropriate.
- Optional secondary action only if genuinely useful.
- Minimal icon or media if it clarifies the state.

Do not add decorative empty-state illustrations by default.

## AI output streaming

For AI products:

- Show progress without pretending to know hidden reasoning.
- Use thinking steps only for user-facing work phases such as retrieving files, generating draft, checking constraints, or validating output.
- Do not expose private chain-of-thought.
- Avoid verbose streaming chrome; the content remains the focus.
- Include stopped, retry, error, rate-limit, and partial-output states.

## Loading states

- Skeletons should match final layout dimensions.
- Spinners are acceptable for short unknown waits but should not dominate.
- For long tasks, show meaningful progress categories.

## State checklist

- Empty.
- Loading.
- Partial.
- Error.
- Permission denied.
- Offline or unavailable.
- Success.
- Retry.
