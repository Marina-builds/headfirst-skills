# Interactive HTML Acceptance Checklist

## Content and truth

- Each page has one clear job and the full sequence supports one takeaway.
- Claims, metrics, sources, pricing, policies, and platform capabilities are current or clearly dated.
- Simulated AI, microphone, backend, payment, and automation behavior is visibly labeled.
- Planning assumptions are not presented as achieved results.
- External sources open safely in a new tab with `rel="noopener"`.

## Critical path

- The main demo starts from a clear ready state.
- Every click produces visible feedback.
- The full state path reaches its intended success or decision state.
- Reset, retry, jump, or force-pass controls recover the demo.
- Repeating the path does not leave stale content or broken controls.

## Presentation controls

- Previous/next controls work at boundaries without wrapping unexpectedly.
- Arrow keys, Page Up/Down, Home/End, and Space behave as documented.
- Directory/overview opens, identifies the current page, navigates, and closes.
- Speaker notes are readable and do not leak into audience view by default.
- Fullscreen either works or provides a clear browser fallback.
- URL hashes/deep links open the expected page when supported.

## Responsive rendering

- Inspect desktop around 1440x900.
- Inspect tablet around 768x1024.
- Inspect mobile around 390x844 and, when practical, 375px width.
- No clipped headings, wrapped primary CTAs, unintended horizontal scrolling, or unreachable controls.
- Mobile multi-column layouts collapse explicitly.
- Touch targets are comfortable and swipe does not block normal vertical scrolling.

## Accessibility and motion

- Page language, title, viewport, landmarks, and heading order are sensible.
- Buttons declare `type="button"` unless they submit a real form.
- Interactive controls have visible focus states and accessible names.
- Text and button contrast is readable.
- Reduced-motion preference disables nonessential transitions and animations.
- Dynamic demo messages use an appropriate live region when useful.

## Portability and reliability

- Core CSS and JavaScript are embedded when single-file/offline delivery was promised.
- No local absolute dependency is hidden from the user.
- Refreshing the page returns to a predictable state.
- `localStorage` stores only user-owned UI progress, never credentials or sensitive data.
- Network-off testing passes when offline operation was promised.
- Print behavior is checked if printable delivery was requested.

## Final evidence

- Run `validate_interactive_html.mjs` with zero errors.
- Save at least one desktop screenshot and one mobile screenshot.
- Report tested interaction paths and any remaining warnings.
