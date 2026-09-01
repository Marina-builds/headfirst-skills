# Release record

## Version 1.0.0

Prepared on 2026-09-01 as an OPEN-SOURCE ADAPTATION of Matt Pocock's MIT-licensed `diagnosing-bugs` Skill.

## Validation

- Codex Skill structure and UI metadata validated.
- Five cases cover diagnosis-only read-only behavior, obvious known failures, sensitive HAR evidence, authorization before production instrumentation and dirty-worktree-safe fixing.
- Upstream source is pinned to commit `2ab958093e83e0ec752e6c1c5932da465bf23e0c`; the full upstream MIT notice is included.
- Public-data scan found no credentials, customer identifiers, personal paths or private operating rules.
- Release claims are limited to the included workflow, safety boundaries and evaluation contract; no superiority or broad effectiveness claim is made.

## Known limitations

- Diagnosis quality still depends on access to the failing path and representative evidence.
- Diagnosis-only mode may have to stop when a useful reproduction requires a new file or instrumentation; the user must explicitly authorize that expansion.
- Redaction can remove details needed for diagnosis. When that happens, the Skill asks the user how the evidence should be handled instead of sharing it by default.
- The Skill does not authorize commits, pushes, issue creation, external changes or production instrumentation.

## Change history

- `1.0.0`: First public adaptation with proportional routing, diagnosis-only read-only behavior, sensitive-evidence handling, dirty-worktree protection, upstream license, evaluation cases and release record.
