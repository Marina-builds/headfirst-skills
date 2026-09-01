# HEADFIRST Skills

Open agent workflows with explicit provenance, public boundaries and evidence from real use.

This repository is being prepared as the public source for the HEADFIRST Skills collection. No Skill is released merely because it exists in a private working library.

Every public Skill must include:

- a clear origin label: HEADFIRST Original, Reference-based Rebuild or Open-source Adaptation;
- a license and all required upstream notices;
- a public-data review;
- an example or eval that demonstrates the claimed workflow;
- known limitations and a change history.

## Current release candidates

| Skill | Provenance | State |
|---|---|---|
| `interactive-html-demo` | HEADFIRST Original | Release-ready locally |
| `web-design-qa` | Reference-based rebuild informed by Hallmark | Source audit passed; public package not prepared |
| `diagnosing-bugs` | Adapted from `mattpocock/skills`, MIT | Source audit passed; upstream notice required in package |

The private working Skill library is not mirrored here. Customer workflows, internal identifiers, private operating rules, personal memory and source profiles remain outside this repository.

## Website

The public catalog is being developed at `https://system-field-notes.vercel.app/skills/`.

## First Skill

`skills/interactive-html-demo/` contains the complete first package: instructions, Codex UI metadata, a reusable single-file starter, a dependency-free validator, rendered acceptance criteria, provenance, limitations, and validation evidence.

The other two candidates remain outside the public package directory. Their source audit is documented in [`docs/audits/three-skill-release-audit-2026-09-01.md`](docs/audits/three-skill-release-audit-2026-09-01.md); passing a source audit does not by itself make a Skill release-ready.

## License

Original HEADFIRST work in this repository is released under the MIT License. Adapted work will retain its applicable upstream license and notices.
