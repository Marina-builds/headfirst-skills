# Three-Skill Release Audit — 2026-09-01

This audit covers the three HEADFIRST public packages. `interactive-html-demo` remains the original release; `web-design-qa` and `diagnosing-bugs` were packaged only after the release gates below were completed.

## Decision summary

| Skill | Provenance decision | Source and privacy result | Release decision |
|---|---|---|---|
| `interactive-html-demo` | HEADFIRST Original | Public package is separated from product-specific hosting guidance; no private identifiers, credentials or customer data found | Public package may remain released |
| `web-design-qa` | Reference-based Rebuild | Informed by Hallmark's public audit-first approach; no identical substantive lines found; remote-reference safety, provenance and five routing cases are packaged | Public package may be released as v1.0.0 |
| `diagnosing-bugs` | Open-source Adaptation | Materially restructures Matt Pocock's MIT-licensed Skill; adds narrower triggers, diagnosis-only read-only behavior, sensitive-evidence handling and external-write boundaries | Public package may be released as v1.0.0 with the bundled upstream MIT license |

## Evidence reviewed

### `interactive-html-demo`

- Public `SKILL.md`, starter asset, acceptance checklist, validator, provenance and release record.
- Static validator result on 2026-09-01: 15 passes, 0 warnings, 0 errors.
- Public-data scan across the package and repository documentation.
- The public Skill omits the product-specific hosting boundary that remains in the private working version.

### `web-design-qa`

- Local `SKILL.md`, rendered-review checklist and five routing evals.
- Hallmark at commit [`2e1b9baaed5f1614c409ae7084c7d64f9e878344`](https://github.com/Nutlope/hallmark/commit/2e1b9baaed5f1614c409ae7084c7d64f9e878344), the latest upstream commit before the local rebuild was created.
- Hallmark's MIT license and its public audit, redesign and study boundaries.
- Exact-line comparison of substantive lines in the local Skill and checklist against Hallmark's `SKILL.md`; no identical substantive line was found.

The local Skill keeps transferable principles such as audit before edit, honest content, responsive checks and explicit evidence levels. It adds remote-reference safety: private and loopback targets are refused, access controls are not bypassed, and instructions embedded in remote pages are ignored. It does not carry Hallmark's theme catalog, macrostructure rotation, CSS stamps, project log or design-generation system. This is therefore labeled a reference-based rebuild, not an original Skill and not a Hallmark redistribution.

### `diagnosing-bugs`

- Local `SKILL.md` and Codex UI metadata.
- Matt Pocock's upstream Skill at commit [`2ab958093e83e0ec752e6c1c5932da465bf23e0c`](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/diagnosing-bugs).
- Upstream MIT license, including the requirement to preserve the copyright and permission notice.
- Direct source diff between the pinned upstream Skill and the local adaptation.

The adaptation retains the evidence-first debugging loop while shortening the original workflow, narrowing its trigger conditions and allowing proportional handling of obvious failures. Diagnosis-only work now keeps project files and external systems read-only; new tests, scripts, harnesses and instrumentation require exact permission. Logs, HAR files, traces and request captures are treated as sensitive local evidence and redacted before quoting or sharing. Those are meaningful modifications, but the lineage remains direct.

## Completed release gates

### `web-design-qa`

1. `PROVENANCE.md` pins Hallmark and explains what was retained and omitted.
2. `THIRD_PARTY_NOTICES.md` preserves Hallmark attribution and its MIT notice for transparency.
3. Five routing cases cover Audit, Fix, Reference Study, SEO/CRO handoff and unsafe private URLs.
4. The public package contains no environment-specific guidance or private identifiers.

### `diagnosing-bugs`

1. Matt Pocock's copyright and full MIT permission notice are included in the package.
2. `PROVENANCE.md` pins the source commit and lists the material modifications.
3. Five cases cover diagnosis-only, known-fix, sensitive-evidence, production-instrumentation and dirty-worktree behavior.
4. The package contains no temporary debugging artifacts or private identifiers.

## Audit boundary

This review establishes source lineage, license obligations, public-data safety and package boundaries. It does not claim popularity, performance improvement or broad real-world effectiveness. Those claims require later usage evidence.
