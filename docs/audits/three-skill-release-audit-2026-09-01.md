# Three-Skill Release Audit — 2026-09-01

This audit covers the three HEADFIRST release candidates. Only `interactive-html-demo` is currently present as a public package. A source audit is not permission to upload the other candidates before their remaining release requirements are complete.

## Decision summary

| Skill | Provenance decision | Source and privacy result | Release decision |
|---|---|---|---|
| `interactive-html-demo` | HEADFIRST Original | Public package is separated from product-specific hosting guidance; no private identifiers, credentials or customer data found | Public package may remain released |
| `web-design-qa` | Reference-based Rebuild | Informed by Hallmark's public audit-first approach; no identical substantive lines found in the local Skill or checklist; no private identifiers or credentials found | Source audit passed; do not publish until provenance, release evidence and rendered QA results are packaged |
| `diagnosing-bugs` | Open-source Adaptation | Materially restructures Matt Pocock's MIT-licensed Skill and adds narrower triggers and permission boundaries; no private identifiers or credentials found | Source audit passed; do not publish without the upstream copyright/MIT notice, pinned commit, change summary and validation evidence |

## Evidence reviewed

### `interactive-html-demo`

- Public `SKILL.md`, starter asset, acceptance checklist, validator, provenance and release record.
- Static validator result on 2026-09-01: 15 passes, 0 warnings, 0 errors.
- Public-data scan across the package and repository documentation.
- The public Skill omits the product-specific hosting boundary that remains in the private working version.

### `web-design-qa`

- Local `SKILL.md`, rendered-review checklist and four trigger evals.
- Hallmark at commit [`2e1b9baaed5f1614c409ae7084c7d64f9e878344`](https://github.com/Nutlope/hallmark/commit/2e1b9baaed5f1614c409ae7084c7d64f9e878344), the latest upstream commit before the local rebuild was created.
- Hallmark's MIT license and its public audit, redesign and study boundaries.
- Exact-line comparison of substantive lines in the local Skill and checklist against Hallmark's `SKILL.md`; no identical substantive line was found.

The local Skill keeps transferable principles such as audit before edit, honest content, responsive checks and explicit evidence levels. It does not carry Hallmark's theme catalog, macrostructure rotation, CSS stamps, project log or design-generation system. This is therefore labeled a reference-based rebuild, not an original Skill and not a Hallmark redistribution.

### `diagnosing-bugs`

- Local `SKILL.md` and Codex UI metadata.
- Matt Pocock's upstream Skill at commit [`2ab958093e83e0ec752e6c1c5932da465bf23e0c`](https://github.com/mattpocock/skills/tree/2ab958093e83e0ec752e6c1c5932da465bf23e0c/skills/engineering/diagnosing-bugs).
- Upstream MIT license, including the requirement to preserve the copyright and permission notice.
- Direct source diff between the pinned upstream Skill and the local adaptation.

The adaptation retains the evidence-first debugging loop while shortening the original workflow, narrowing its trigger conditions, allowing proportional handling of obvious failures, and adding diagnosis-only, dirty-worktree and external-write boundaries. Those are meaningful modifications, but the lineage remains direct.

## Remaining release gates

### `web-design-qa`

1. Add `PROVENANCE.md` naming Hallmark as a public reference and explaining what was retained and omitted.
2. Add a public release record with actual rendered checks at the declared viewports.
3. Run and record the four trigger evals against the packaged version.
4. Review the package again after removing any environment-specific guidance.

### `diagnosing-bugs`

1. Include Matt Pocock's copyright and full MIT permission notice with the package.
2. Pin the source commit and list the material modifications in `PROVENANCE.md`.
3. Add trigger and non-trigger evals, including diagnosis-only and known-fix cases.
4. Record package validation and confirm that no temporary debugging artifacts ship.

## Audit boundary

This review establishes source lineage, license obligations, public-data safety and present packaging gaps. It does not claim popularity, performance improvement or broad real-world effectiveness. Those claims require later usage evidence.
