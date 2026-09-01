# Web Design QA checklist
Use this as a routing checklist, not a scorecard. Skip sections that do not apply. A small number of consequential findings is better than claiming every item is equally important.

## 1. Content truth and trust

- Claims, metrics, testimonials, logos, awards, and customer counts are supplied or sourced.
- Placeholder content is labelled as placeholder content.
- The primary CTA matches what the product and destination actually do.
- Copy describes the specific product rather than generic startup language.
- Page content is not distorted merely to fill a chosen layout.

## 2. Hierarchy and task clarity

- The page's purpose and primary action are recognizable within the first viewport.
- Primary, secondary, and supporting information have visibly different weight.
- Section order follows the user's decision journey rather than a generic hero/features/CTA sequence.
- Repeated cards, badges, eyebrows, icons, and dividers each earn their place.
- Long pages vary rhythm intentionally without becoming inconsistent.

## 3. Brand and visual system

- Existing tokens, fonts, icon family, radius, borders, and spacing language are respected.
- Colors and font families come from named tokens instead of one-off values.
- Display and body typography have clear roles; pairing is intentional rather than mandatory.
- Accent color is used to direct attention, not sprayed across unrelated elements.
- Decoration has a semantic or brand role; generic blobs, fake browser chrome, random numerals, and stock badges are questioned.
- Multiple pages of one product remain coherent. Do not force structural variety at the cost of system consistency.

## 4. Common AI-template symptoms

Flag combinations and repetition, not isolated patterns:

- centered hero + gradient headline + pill badge + two CTAs with no brief-specific reason;
- three equal feature cards with identical icon/heading/body structure;
- cards nested inside cards without semantic containment;
- every section using the same padding, width, reveal, and alignment;
- generic SaaS navigation or four-column footer that does not match the actual information architecture;
- every element using the same hover lift, shadow, or scale effect;
- invented metrics or fake social proof filling visually convenient slots;
- placeholder names, cliché product names, or copy that could describe any product.

Do not ban a pattern solely because AI often uses it. Confirm that it is repetitive, unsupported, or mismatched to this page.

## 5. Responsive layout

- No horizontal scrolling at the tested widths.
- Grid and flex children can shrink (`min-width: 0`; image-bearing tracks use an appropriate zero minimum).
- Display text, URLs, and long words wrap without clipping or destroying hierarchy.
- Buttons, tabs, breadcrumbs, and primary navigation remain readable and tappable; labels do not break awkwardly.
- Section headings collapse cleanly on mobile.
- Images preserve aspect ratio and do not set the minimum width of the layout.
- Fixed and sticky elements do not overlap one another or hide content.
- The primary CTA and essential hero content fit a realistic laptop viewport when that is part of the design intent.

## 6. Interaction and state quality

- Interactive elements expose the states their behavior actually needs: default, hover where relevant, focus-visible, active, disabled, loading, error, and success.
- State changes do not alter border width or cause layout shift.
- Focus indication is immediate, visible, and not removed without a replacement.
- Inputs and adjacent controls align; helper/error space does not create avoidable jumps.
- Reversible actions favor undo when appropriate; irreversible actions receive proportionate confirmation.
- Success feedback is quiet when the result is already visible.
- Tooltips are immediate on keyboard focus and delayed on hover.
- Carousels or moving content can be paused when required.

## 7. Motion

- Motion communicates state, hierarchy, continuity, or causality.
- Layout properties are not animated when transform/opacity can do the job.
- `transition: all`, universal hover scaling, and repeated scroll-triggered fade-ups are avoided.
- Reduced-motion behavior exists for meaningful animation.
- Focus rings and critical feedback do not animate into visibility.
- Removing an animation would not remove important information; if it would not, prefer removing it.

## 8. Accessibility and readability

- Semantic HTML and native controls are used where possible.
- Text, icons, controls, and focus rings have adequate contrast against their computed backgrounds.
- Touch targets are usable at mobile sizes.
- Images and custom art have appropriate alternative text or are explicitly decorative.
- Form fields have names, instructions, errors, and programmatic state.
- Keyboard order and dialog/menu focus behavior are coherent.
- Text measure, line height, and font sizing remain readable across widths.

## 9. Performance-sensitive presentation

- Hero/LCP media is not lazy-loaded accidentally.
- Below-fold media is deferred appropriately.
- Decorative animation does not justify a disproportionate runtime or asset cost.
- Heavy 3D, video, or animation libraries are used only when their interaction value earns the cost.
- Real screenshots are preferred to laboriously redrawn browser, device, terminal, or IDE chrome.

## 10. Evidence discipline

- Mark a finding **rendered** only after inspecting the rendered page.
- Mark interaction behavior **verified** only after exercising it.
- Mark contrast **verified** only after measuring or using a reliable inspection tool.
- Name exact viewport sizes used.
- If browser access, authentication, data, or a state is unavailable, record the gap instead of inferring a pass.
