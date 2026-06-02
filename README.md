# Codex Design Superpowers

A production-ready Codex plugin for product design, high-fidelity UI/UX, web apps, mobile apps, desktop app interfaces, branding, interaction design, and design-system implementation.

The package is intentionally instruction-first. It gives Codex a reusable design operating system: discovery, visual research, systems thinking, implementation guidance, and verification gates. It does not ship an MCP server or app connector because the requested workflow is primarily a skill bundle.

## What is included

```text
codex-design-superpowers/
├── .codex-plugin/plugin.json
├── skills/
│   ├── codex-design-core/
│   ├── product-design-discovery/
│   ├── visual-inspiration-research/
│   ├── web-app-ui-implementation/
│   ├── mobile-app-ui-implementation/
│   ├── design-system-tokens/
│   ├── empty-states-and-ai-streaming/
│   ├── motion-and-microinteractions/
│   ├── ui-quality-audit/
│   └── handoff-and-refactor/
├── prompts/
├── templates/
├── references/
├── assets/
├── scripts/
├── examples/
└── package.json
```

## Installation for local testing

### Repo-local marketplace

1. Copy this folder into your repository:

```bash
mkdir -p plugins
cp -R codex-design-superpowers plugins/codex-design-superpowers
```

2. Copy the example marketplace file:

```bash
mkdir -p .agents/plugins
cp plugins/codex-design-superpowers/examples/repo-marketplace.json .agents/plugins/marketplace.json
```

3. Open Codex, go to Plugins, find `Codex Design`, install it, and start a new thread.

### Personal marketplace

1. Copy the plugin into a reusable personal location:

```bash
mkdir -p ~/.codex/plugins
cp -R codex-design-superpowers ~/.codex/plugins/codex-design-superpowers
```

2. Copy and adjust the personal marketplace example:

```bash
mkdir -p ~/.agents/plugins
cp ~/.codex/plugins/codex-design-superpowers/examples/personal-marketplace.json ~/.agents/plugins/marketplace.json
```

The included personal marketplace entry uses `./.codex/plugins/codex-design-superpowers`, which is resolved relative to the personal marketplace root.

3. Restart Codex and install from the plugin browser.

## Validation

Run the included structural validator before publishing or sharing:

```bash
npm install
npm run validate
```

The validator checks:

- `plugin.json` exists and parses.
- Manifest asset paths exist.
- Each skill has a `SKILL.md` file with `name` and `description` frontmatter.
- Skill names are unique.
- Markdown and JSON files stay below the line-count guardrail.
- Legacy naming from the source prompt has not leaked into the package.

## Design posture

This plugin deliberately prefers clean, tactile, production UI over common AI-generated visual tropes.

Core defaults:

- No nested box stacks unless the user explicitly asks.
- No neon, glow, or gradient treatments unless the user explicitly asks.
- Light and dark theme variants are always considered.
- Use consistent surfaces, spacing, radius, and typography tokens.
- Prefer reusable components over screen-specific code.
- Keep files and components small enough to review.
- Use inspiration sources as reference, not as material to copy.

## Primary stack targets

- Next.js 16
- React 19.2-era patterns where applicable
- TypeScript and JavaScript
- Tailwind CSS and NativeWind
- shadcn/ui, coss/ui, Radix UI, MUI
- React Native and Expo SDK 56
- TanStack Query, Router, Table, Form, and related libraries
- Lucide, Phosphor, Material Icons, and project-provided icon sets

## License

MIT. See `LICENSE`.
