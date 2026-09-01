# HEADFIRST Skills

Open agent workflows with explicit provenance, public boundaries and evidence from real use.

This repository is the public source for the HEADFIRST Skills collection. No Skill is released merely because it exists in a private working library.

Every public Skill must include:

- a clear origin label: HEADFIRST Original, Reference-based Rebuild or Open-source Adaptation;
- a license and all required upstream notices;
- a public-data review;
- an example or eval that demonstrates the claimed workflow;
- known limitations and a change history.

## Released Skills

| Skill | Provenance | State |
|---|---|---|
| `interactive-html-demo` | HEADFIRST Original | Public · v1.0.0 |
| `web-design-qa` | Reference-based rebuild informed by Hallmark | Public · v1.0.0 |
| `diagnosing-bugs` | Adapted from `mattpocock/skills`, MIT | Public · v1.0.0 |

The private working Skill library is not mirrored here. Customer workflows, internal identifiers, private operating rules, personal memory and source profiles remain outside this repository.

## Website

The public catalog is being developed at `https://system-field-notes.vercel.app/skills/`.

## Install

Install one Skill with the open `skills` CLI:

```bash
npx skills add Marina-builds/headfirst-skills --skill interactive-html-demo
npx skills add Marina-builds/headfirst-skills --skill web-design-qa
npx skills add Marina-builds/headfirst-skills --skill diagnosing-bugs
```

Or copy the selected folder under `skills/` into your agent's local Skills directory.

Each package contains its instructions, provenance, known limitations and release evidence. `interactive-html-demo` also includes a reusable starter and validator. The full three-Skill audit is documented in [`docs/audits/three-skill-release-audit-2026-09-01.md`](docs/audits/three-skill-release-audit-2026-09-01.md).

The included eval cases define expected boundaries and representative routing. They are not presented as a universal model benchmark or a popularity claim.

## License

Original HEADFIRST work in this repository is released under the MIT License. Adapted work retains its applicable upstream license and notices inside the package.
