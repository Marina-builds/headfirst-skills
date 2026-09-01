#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'catalog.json'), 'utf8'));
const failures = [];
const passes = [];

const check = (condition, success, failure) => {
  if (condition) passes.push(success);
  else failures.push(failure);
};

const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8');

for (const skill of catalog.skills.filter((item) => item.state === 'public')) {
  const base = `skills/${skill.name}`;
  for (const required of ['SKILL.md', 'PROVENANCE.md', 'RELEASE.md']) {
    check(fs.existsSync(path.join(root, base, required)), `${skill.name}: ${required}`, `${skill.name}: missing ${required}`);
  }

  const skillText = read(`${base}/SKILL.md`);
  check(new RegExp(`^name:\\s*${skill.name}$`, 'm').test(skillText), `${skill.name}: frontmatter name`, `${skill.name}: frontmatter name mismatch`);
  check(/^description:\s*\S.+$/m.test(skillText), `${skill.name}: description`, `${skill.name}: missing description`);

  const evalPath = path.join(root, base, 'evals/evals.json');
  if (skill.validation?.routingCases) {
    check(fs.existsSync(evalPath), `${skill.name}: eval file`, `${skill.name}: missing evals/evals.json`);
    if (fs.existsSync(evalPath)) {
      const evals = JSON.parse(fs.readFileSync(evalPath, 'utf8'));
      check(evals.skill_name === skill.name, `${skill.name}: eval name`, `${skill.name}: eval skill_name mismatch`);
      check(evals.evals.length === skill.validation.routingCases, `${skill.name}: ${evals.evals.length} routing cases`, `${skill.name}: expected ${skill.validation.routingCases} routing cases, found ${evals.evals.length}`);
    }
  }
}

check(fs.existsSync(path.join(root, 'skills/web-design-qa/THIRD_PARTY_NOTICES.md')), 'web-design-qa: Hallmark notice', 'web-design-qa: missing Hallmark notice');
check(fs.existsSync(path.join(root, 'skills/diagnosing-bugs/LICENSE')), 'diagnosing-bugs: upstream license', 'diagnosing-bugs: missing upstream license');

const trackedTextFiles = [];
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules', 'output', '.playwright-cli'].includes(entry.name)) continue;
    const target = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(target);
    else if (/\.(md|json|ya?ml|mjs|html)$/i.test(entry.name)) trackedTextFiles.push(target);
  }
};
walk(root);

const unsafe = /(\/Users\/[^\s'"`<]+|BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY|\bsk-[A-Za-z0-9_-]{20,}|\bBearer\s+[A-Za-z0-9._-]{20,})/g;
for (const file of trackedTextFiles) {
  if (path.resolve(file) === fileURLToPath(import.meta.url)) continue;
  const hits = [...fs.readFileSync(file, 'utf8').matchAll(unsafe)];
  check(hits.length === 0, `public scan: ${path.relative(root, file)}`, `public scan: sensitive-looking value in ${path.relative(root, file)}`);
}

const starterValidation = spawnSync(process.execPath, [
  path.join(root, 'skills/interactive-html-demo/scripts/validate_interactive_html.mjs'),
  path.join(root, 'skills/interactive-html-demo/assets/single-file-starter.html'),
  '--json'
], { encoding: 'utf8' });
check(starterValidation.status === 0, 'interactive-html-demo: starter validator', 'interactive-html-demo: starter validator failed');

console.log(`HEADFIRST repository validation: ${passes.length} pass, ${failures.length} fail`);
for (const failure of failures) console.error(`FAIL ${failure}`);
process.exit(failures.length ? 1 : 0);
