---
name: interactive-html-demo
description: Build, adapt, or review portable single-file interactive HTML for product demos, proposals, reports, process explainers, product maps, clickable prototypes, and browser-based presentations. Use when the audience needs to click, navigate, compare, filter, or observe state changes. Prefer documents or slides when interaction would not improve understanding.
---

# Interactive HTML Demo

Create a truthful, portable, browser-tested interactive deliverable. Treat interaction as part of the argument, not decoration.

## Choose the format deliberately

Use interactive HTML when the audience must see or control a process, decision path, state change, comparison, drill-down, simulated workflow, or presentation with offline fallbacks.

Prefer a document or slide deck when the content is linear and clicking would add ceremony rather than understanding.

## Build the interaction contract first

Before implementation, define:

1. `Goal`: what the audience should understand or decide.
2. `Page map`: each page or section and its single job.
3. `Actions`: what people can click, tap, type, or filter.
4. `State changes`: what visibly changes after each action.
5. `Fallbacks`: how the presenter recovers from time, network, or click-path failure.
6. `Truth boundary`: what is real, simulated, illustrative, or pending validation.

Do not begin from visual styling alone.

## Model guided flows as state

Represent a guided demo as an ordered state array instead of scattered event-handler branches:

`ready -> action -> visible consequence -> useful feedback -> retry -> success -> next step`

Keep state data separate from rendering logic so future reuse mainly changes content.

## Reuse the single-file shell

For a new build, copy and adapt `assets/single-file-starter.html`. Preserve these capabilities unless the brief excludes them:

- previous and next controls with progress;
- keyboard navigation and touch swipe;
- directory, fullscreen, and speaker notes;
- reduced-motion support;
- explicit desktop, tablet, and mobile layouts;
- recovery controls such as jump, retry, reset, or force-pass.

Change content and state data before changing the shell behavior.

## Keep the truth boundary visible

- Label simulated AI, microphone, backend, payment, data, or automation as an interactive prototype or simulated demo.
- Never imply that a canned transition calls a live model or production service.
- Distinguish assumptions from observed results and live capabilities.
- Do not hide prototype disclosure only in speaker notes.
- Use real copy and data; never invent customers, testimonials, metrics, or product states.

## Implement for portability

- Keep one main conclusion per presentation page.
- Keep the critical path operable without scrolling at the intended presentation viewport.
- Embed core CSS and JavaScript so the file works offline by default.
- Use semantic HTML, button types, visible focus styles, readable contrast, meaningful labels, and usable touch targets.
- Store only user-owned interface progress in `localStorage`; never store credentials or sensitive data.
- Preserve supplied working content and never overwrite the user's source unless explicitly requested.

## Validate the rendered result

Run the dependency-free validator:

```bash
node scripts/validate_interactive_html.mjs /absolute/path/to/output.html
```

Then follow `references/acceptance-checklist.md`. At minimum:

1. Render around 1440x900, 768x1024, and 390x844.
2. Inspect every distinct layout family.
3. Execute the full critical interaction path.
4. Test keyboard navigation, mobile behavior, directory, fullscreen fallback, and recovery controls.
5. Test with the network disabled when offline operation was promised.
6. Recheck prototype disclosure and any current factual claims.

Source inspection alone is not completion.

## Deliver

Return the absolute file link, one sentence describing the interaction, what was verified, all simulated or externally dependent capabilities, and any portability limitation.

## Resources

- `assets/single-file-starter.html`: reusable presentation and demo shell.
- `scripts/validate_interactive_html.mjs`: dependency-free static checks.
- `references/acceptance-checklist.md`: rendered, accessibility, and live-demo QA.
