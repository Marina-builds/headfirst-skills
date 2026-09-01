---
name: diagnosing-bugs
description: Diagnose hard, intermittent, environment-specific bugs and performance regressions with evidence-first reproduction and falsifiable hypotheses. Use when the user explicitly asks to diagnose or find the root cause of a nontrivial failure, when prior fixes failed, behavior is flaky, or the cause is unknown. Do not use for straightforward syntax or type errors, known fixes, or requests that only ask to implement an already-understood change.
---
# Diagnosing Bugs

Find the cause before changing production behavior. Scale the process to the bug: preserve the discipline below for difficult failures without turning obvious problems into a ceremony.

## 1. Respect the requested boundary

- If the user asks only for diagnosis, treat the project and external systems as read-only. Identify and explain the cause; do not implement the fix, create tests or scripts, change configuration, add instrumentation, or leave debugging artifacts behind.
- Prefer existing commands and read-only probes in diagnosis-only mode. If a useful reproduction requires a new file or temporary instrumentation, stop and ask permission for that exact artifact, location, and cleanup plan.
- If the user asks to fix the bug, diagnose first, then implement the narrowest verified fix.
- Do not commit, push, create issues, change external systems, or add production instrumentation unless the user has authorized that action.
- Preserve unrelated work and inspect a dirty worktree before editing overlapping files.

## 2. Protect debugging evidence

Treat logs, HAR files, traces, request captures, core dumps, environment output, configuration and screenshots as potentially sensitive.

- Inspect raw evidence locally when practical. Do not upload, commit, paste, or forward a raw artifact without explicit authorization.
- Before quoting evidence, remove credentials, cookies, authorization headers, tokens, personal data and unrelated customer information. Prefer the smallest excerpt that proves the point.
- Keep exact secret values out of commands, notes, tests and final reports. Name the storage location or variable instead.
- If safe redaction would remove the signal needed for diagnosis, explain the conflict and ask how the user wants the evidence handled.

## 3. Classify the failure

Confirm the exact symptom, expected behavior, affected environment, and available evidence. Inspect the relevant code, logs, history, and configuration.

If the cause is already directly established by a compiler error, failing assertion, or obvious local defect, explain the evidence and proceed within the user's requested boundary. Use the full loop below when the failure is intermittent, remote, performance-related, resistant to an earlier fix, or otherwise uncertain.

## 4. Build a proportional feedback loop

Create the smallest practical signal that distinguishes the reported bug from normal behavior. Prefer, in order:

1. An existing focused test or command.
2. A minimal failing test at a public seam, when file changes are authorized.
3. A CLI or HTTP reproduction with fixed input.
4. An existing browser check, or a new browser script when file creation is authorized.
5. A sanitized captured request, trace, log sample, or fixture replay.
6. A temporary harness or measurement script, only with permission to create and later remove it.

For flaky failures, repeat the trigger and record the observed rate. For performance regressions, establish a measured baseline before theorizing.

The loop is ready when it exercises the reported path, observes the user's actual symptom, and can be rerun. Fast and deterministic is ideal, but do not block useful diagnosis when the only available evidence comes from a remote or human-observed environment. In that case, state the evidence gap and request the smallest artifact or access needed.

## 5. Reproduce and minimise

Run the loop and capture the exact failure. Remove inputs, steps, dependencies, or configuration one at a time while the symptom remains. Stop when further reduction loses the failure or would no longer represent the real path.

Do not silently substitute a nearby error for the user's reported bug.

## 6. Test falsifiable hypotheses

Generate two to five ranked hypotheses when the cause is not obvious. For each one, state a prediction that would support or refute it. Prefer cheap, discriminating probes and change one variable at a time.

Use targeted debugger inspection or measurements. Add uniquely tagged temporary logs only when instrumentation is authorized. Avoid broad logging. Show the ranked hypotheses to the user when their domain knowledge could materially change the order, but continue with the best-supported read-only probe when waiting is unnecessary.

Record what each probe established. Do not present an inference as a confirmed cause.

## 7. Fix and verify when authorized

When implementation is in scope:

1. Add a regression test before the fix when a correct observable seam exists.
2. Apply the smallest change that addresses the supported cause.
3. Run the focused reproduction against the original scenario.
4. Run relevant broader checks without disturbing unrelated work.
5. Remove temporary instrumentation and artifacts.

If no honest regression-test seam exists, say so instead of adding a misleading shallow test. Recommend architectural follow-up separately from the immediate fix.

## 8. Report the result

Lead with the outcome and include:

- **Symptom:** what was actually reproduced or observed.
- **Cause:** confirmed root cause, or the best-supported hypothesis if confirmation remains impossible.
- **Evidence:** the command, measurement, log, or comparison that supports the conclusion.
- **Action:** fix applied and verification run, or the exact next step if diagnosis-only.
- **Changes:** files or external state changed; state `none` for diagnosis-only work.
- **Uncertainty:** any material gap that remains.

Keep simple diagnoses short. Include the full investigation trail only when it helps the user verify the conclusion or continue the work.
