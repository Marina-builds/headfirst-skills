# Provenance

**Label:** OPEN-SOURCE ADAPTATION

This Skill directly adapts Matt Pocock's `diagnosing-bugs` Skill from [mattpocock/skills](https://github.com/mattpocock/skills) at commit `2ab958093e83e0ec752e6c1c5932da465bf23e0c`.

The adaptation keeps the upstream evidence-first loop: build a useful signal, reproduce and minimise, test falsifiable hypotheses, instrument narrowly, then fix and verify when authorized.

HEADFIRST changes the operating boundary for general-purpose agents:

- narrows automatic triggering to hard, intermittent, environment-specific or unknown-cause failures;
- routes obvious compiler, assertion and known-fix cases through a short path;
- makes diagnosis-only work project- and external-system-read-only;
- requires explicit permission before creating tests, scripts, harnesses or instrumentation during diagnosis-only work;
- protects dirty worktrees and separates diagnosis from commit, push, issue creation and external writes;
- treats HAR files, traces, logs, request captures and environment output as sensitive evidence that must remain local and be redacted before quoting or sharing;
- allows best-supported hypotheses when a complete local reproduction is impossible, while preserving uncertainty.

The full upstream MIT license is included in `LICENSE` and must remain with redistributed copies.
