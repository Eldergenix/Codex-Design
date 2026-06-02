# Contributor Instructions

This repository is a Codex plugin package. Keep the plugin installable without a runtime build step.

## Package rules

- Keep `.codex-plugin/plugin.json` as the only file in `.codex-plugin/`.
- Keep skills under `skills/<skill-name>/SKILL.md`.
- Each skill must include frontmatter with `name` and `description`.
- Keep skill descriptions concise because Codex uses them for progressive skill discovery.
- Do not add secrets, API keys, private URLs, or credentials.
- Do not add code that runs automatically unless there is a clear reason and a trust-review note.
- Run `npm run validate` before sharing.

## Design rules for skill content

- Favor outcome-first instructions over heavy step-by-step scaffolding.
- Use XML tags only when they improve structure.
- Keep rules testable and reviewable.
- Preserve the core product-design contract: discovery, context acquisition, design system alignment, implementation, verification.
- Do not add brand-specific styles unless the user provides the brand or asks for a new brand system.
