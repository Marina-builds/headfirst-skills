#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

const target = process.argv[2];
const jsonMode = process.argv.includes('--json');

if (!target) {
  console.error('Usage: node validate_interactive_html.mjs /absolute/path/to/file.html [--json]');
  process.exit(2);
}

const resolved = path.resolve(target);
if (!fs.existsSync(resolved)) {
  console.error(`File not found: ${resolved}`);
  process.exit(2);
}

const html = fs.readFileSync(resolved, 'utf8');
const errors = [];
const warnings = [];
const passes = [];

const check = (condition, pass, failure, level = 'error') => {
  if (condition) passes.push(pass);
  else (level === 'warning' ? warnings : errors).push(failure);
};

check(/<!doctype html>/i.test(html), 'HTML doctype present', 'Missing HTML doctype');
check(/<html[^>]*\blang=["'][^"']+["']/i.test(html), 'Document language present', 'Missing html lang attribute');
check(/<meta[^>]*name=["']viewport["']/i.test(html), 'Viewport meta present', 'Missing viewport meta');
check(/<title>\s*[^<]+\s*<\/title>/i.test(html), 'Document title present', 'Missing or empty title');
check(/<style(?:\s[^>]*)?>[\s\S]*<\/style>/i.test(html), 'Embedded CSS present', 'Missing embedded CSS');
check(/<script(?:\s[^>]*)?>[\s\S]*<\/script>/i.test(html), 'Embedded JavaScript present', 'Missing embedded JavaScript');
check(/prefers-reduced-motion/i.test(html), 'Reduced-motion rule present', 'Missing prefers-reduced-motion handling');
check(/focus-visible/i.test(html), 'Visible focus styling present', 'Missing focus-visible styling', 'warning');

const slideCount = (html.match(/<section\b[^>]*class=["'][^"']*\bslide\b[^"']*["']/gi) || []).length;
check(slideCount >= 2, `${slideCount} slide sections found`, 'Expected at least two section.slide elements', 'warning');

const buttonTags = html.match(/<button\b[^>]*>/gi) || [];
const buttonsWithoutType = buttonTags.filter(tag => !/\btype=["'](?:button|submit|reset)["']/i.test(tag));
check(buttonsWithoutType.length === 0, 'All buttons declare type', `${buttonsWithoutType.length} button(s) missing type`, 'warning');

check(/addEventListener\(["']keydown["']/i.test(html), 'Keyboard handler present', 'No keyboard navigation handler found', 'warning');
check(/touchstart/i.test(html) && /touchend/i.test(html), 'Touch swipe handlers present', 'Touch swipe handling not found', 'warning');
check(/requestFullscreen|fullscreenElement/i.test(html), 'Fullscreen support present', 'Fullscreen support not found', 'warning');
check(/localStorage/i.test(html), 'Local progress support present', 'localStorage not used; acceptable if persistence is unnecessary', 'warning');

const externalScripts = html.match(/<script\b[^>]*\bsrc=["']https?:\/\/[^"']+["'][^>]*>/gi) || [];
const externalStyles = html.match(/<link\b[^>]*\bhref=["']https?:\/\/[^"']+["'][^>]*>/gi) || [];
check(externalScripts.length + externalStyles.length === 0, 'No external core dependencies', `${externalScripts.length + externalStyles.length} external script/style dependency found; offline mode may fail`, 'warning');

const result = {
  file: resolved,
  bytes: Buffer.byteLength(html),
  slideCount,
  passes,
  warnings,
  errors,
  ok: errors.length === 0
};

if (jsonMode) {
  console.log(JSON.stringify(result, null, 2));
} else {
  console.log(`Interactive HTML validation: ${resolved}`);
  console.log(`PASS ${passes.length}  WARN ${warnings.length}  ERROR ${errors.length}`);
  for (const item of warnings) console.log(`WARN  ${item}`);
  for (const item of errors) console.log(`ERROR ${item}`);
}

process.exit(errors.length ? 1 : 0);
