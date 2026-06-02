import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
function walk(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.name !== 'node_modules')
    .sort((a, b) => a.name.localeCompare(b.name));
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const isLast = i === entries.length - 1;
    console.log(`${prefix}${isLast ? '└── ' : '├── '}${entry.name}`);
    if (entry.isDirectory()) walk(path.join(dir, entry.name), `${prefix}${isLast ? '    ' : '│   '}`);
  }
}
console.log(path.basename(root));
walk(root);
