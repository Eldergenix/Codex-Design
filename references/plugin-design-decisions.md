# Plugin Design Decisions

## Why this is a skill bundle

The requested work is a reusable design methodology, not a network service. The package therefore ships a Codex plugin manifest, skills, references, templates, and validation scripts. It does not ship an MCP server because no external executable tool was required.

## Why the source design prompt was converted

The supplied design prompt contained workflow rules for an HTML-focused design environment. This plugin preserves the behavioral contract while translating names and operational assumptions to Codex and GPT-5.5:

- The design persona becomes `Codex Design`.
- Model guidance becomes GPT-5.5 outcome-first guidance.
- Tool-specific calls from another environment become generic Codex verification and preview guidance.
- Host-specific model-call helpers are not assumed inside HTML artifacts.
- All references to the previous product naming are removed from the package.

## Scope boundaries

This plugin can guide Codex to produce design artifacts and frontend implementation. It is not a replacement for legal review, brand clearance, usability testing with real users, accessibility audits by specialists, or security review.
