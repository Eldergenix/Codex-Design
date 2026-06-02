# GPT-5.5 Guidance for Codex Design

Use this reference when authoring or revising design instructions, prompts, or agent workflows.

## Prompt structure

Prefer concise XML-like sections when structure helps:

```xml
<outcome>What the user wants produced.</outcome>
<context>Known product, audience, platform, files, and constraints.</context>
<constraints>Design, accessibility, stack, legal, brand, performance, and time limits.</constraints>
<evidence>Sources, codebase artifacts, screenshots, docs, or user-provided references.</evidence>
<output_format>Exact deliverable shape.</output_format>
<validation>How completion will be checked.</validation>
```

## Outcome-first behavior

- Define the result and success criteria first.
- Avoid long process stacks unless the exact path matters.
- Give Codex freedom to choose efficient implementation details.
- Use explicit acceptance criteria for design quality.

## Reasoning effort defaults

- Use lower effort for simple copy, spacing, component polish, and deterministic edits.
- Use medium effort for multi-screen UI, design-system work, and moderate codebase integration.
- Use high effort only for ambiguous product strategy, complex cross-platform architecture, migration plans, or when many constraints conflict.

## Tool-heavy workflows

- Before tools: state the intent briefly.
- During long tasks: send concise progress updates when useful.
- After tools: summarize what changed and what remains.
- Do not claim verification without running or inspecting an applicable signal.

## Retrieval budgets

For inspiration and docs research, define:

- Sources to inspect.
- Keywords or product category.
- Maximum number of sources.
- Relevance criteria.
- Stop rule.

Example:

```xml
<retrieval_budget>
Inspect up to 5 sources: official docs first, then up to 3 inspiration sources. Stop once component API, visual pattern, and implementation constraints are clear.
</retrieval_budget>
```

## Final answer shape

Keep completion notes short:

- What was delivered.
- Where it is.
- What was verified.
- Caveats or next steps.
