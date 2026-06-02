# React Native Screen Contract

Use this contract when creating or refactoring mobile screens.

```xml
<mobile_screen_contract>
  <screen_name></screen_name>
  <platforms>ios, android</platforms>
  <navigation_context></navigation_context>
  <primary_user_action></primary_user_action>
  <safe_area_and_keyboard></safe_area_and_keyboard>
  <states>default, loading, empty, error, offline, permission, success</states>
  <accessibility>labels, roles, focus, dynamic type, hit targets</accessibility>
  <theme>light and dark</theme>
  <verification></verification>
</mobile_screen_contract>
```

Rules:

- Respect safe areas and keyboard behavior.
- Minimum touch target is 44px.
- Avoid hover-only behavior.
- Use NativeWind only when configured or requested.
- Keep screen files thin and extract reusable components.
