# Next.js Component Contract

Use this contract when creating or refactoring production web UI.

```xml
<component_contract>
  <name></name>
  <route_or_parent></route_or_parent>
  <responsibility></responsibility>
  <props></props>
  <states>default, hover, focus, active, disabled, loading, empty, error, success</states>
  <theme>light and dark</theme>
  <accessibility></accessibility>
  <dependencies></dependencies>
  <verification></verification>
</component_contract>
```

Rules:

- Use TypeScript unless the project is JavaScript-only.
- Keep server/client boundaries explicit.
- Use existing tokens and utilities.
- Add components through shadcn/coss only when needed.
- Do not introduce new component libraries without user approval.
