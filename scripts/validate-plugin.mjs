import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const fail = (message) => {
  console.error(`✗ ${message}`);
  process.exitCode = 1;
};
const ok = (message) => console.log(`✓ ${message}`);

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (error) {
    fail(`${file} is not valid JSON: ${error.message}`);
    return null;
  }
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const manifestPath = path.join(root, '.codex-plugin', 'plugin.json');
if (!fs.existsSync(manifestPath)) fail('Missing .codex-plugin/plugin.json');
const manifest = readJson(manifestPath);
const marketplacePath = path.join(root, '.agents', 'plugins', 'marketplace.json');
if (!fs.existsSync(marketplacePath)) fail('Missing .agents/plugins/marketplace.json');
const marketplace = readJson(marketplacePath);

if (manifest) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(manifest.name || '')) fail('Manifest name must be kebab-case');
  if (!manifest.version) fail('Manifest version is required');
  if (manifest.skills !== './skills/') fail('Manifest skills must be ./skills/');
  const assetFields = [
    manifest.interface?.composerIcon,
    manifest.interface?.logo,
    ...(manifest.interface?.screenshots || []),
  ].filter(Boolean);
  for (const rel of assetFields) {
    const assetPath = path.join(root, rel);
    if (!fs.existsSync(assetPath)) fail(`Manifest asset path does not exist: ${rel}`);
  }
  ok('Manifest parsed and asset paths checked');
}

if (marketplace) {
  const plugin = marketplace.plugins?.find((entry) => entry.name === manifest?.name);
  if (!plugin) fail(`Marketplace must include plugin entry for ${manifest?.name || 'manifest name'}`);
  if (plugin?.source?.source !== 'local') fail('Marketplace plugin source must be local');
  if (plugin?.source?.path !== './') fail('Marketplace plugin source path must be ./');
  if (plugin?.icon && !fs.existsSync(path.join(root, plugin.icon))) fail(`Marketplace icon path does not exist: ${plugin.icon}`);
  ok('Marketplace manifest parsed and plugin source checked');
}

const skillsDir = path.join(root, 'skills');
if (!fs.existsSync(skillsDir)) fail('Missing skills directory');
const skillNames = new Set();
for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skillFile = path.join(skillsDir, entry.name, 'SKILL.md');
  if (!fs.existsSync(skillFile)) {
    fail(`Missing SKILL.md in ${entry.name}`);
    continue;
  }
  const text = fs.readFileSync(skillFile, 'utf8');
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) {
    fail(`${entry.name}/SKILL.md missing frontmatter`);
    continue;
  }
  const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const description = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (!name) fail(`${entry.name}/SKILL.md missing name`);
  if (!description) fail(`${entry.name}/SKILL.md missing description`);
  if (name && skillNames.has(name)) fail(`Duplicate skill name: ${name}`);
  if (name) skillNames.add(name);
  if (description && description.length > 260) fail(`${entry.name} description is too long for progressive disclosure`);
}
ok(`Checked ${skillNames.size} skills`);

for (const file of walk(root)) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  if (rel.startsWith('node_modules/')) continue;
  if (/\.(md|json|mjs|html|css|svg)$/.test(rel)) {
    const text = fs.readFileSync(file, 'utf8');
    const lines = text.split(/\r?\n/).length;
    if (lines > 1000) fail(`${rel} exceeds 1000 lines (${lines})`);
    if (/\b[Cc]laude\b/.test(text)) fail(`${rel} contains legacy product naming`);
  }
}
ok('Line limits and naming checks passed');

if (!process.exitCode) ok('Plugin validation passed');
