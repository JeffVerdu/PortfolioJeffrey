---
name: "Jeffrey Verdú"
description: "A clear, contemporary Spanish portfolio grounded in real Full Stack work."
colors:
  ground: "#f5f7f6"
  ink: "#153e3f"
  secondary: "#536364"
  mint: "#d5e9e3"
  petrol: "#184747"
  line: "#b7ceca"
  on-dark: "#f5f7f6"
  primary-hover: "#0c3031"
  focus: "#a04625"
  tab-ground: "#e8f3ef"
  tab-hover: "#bfd9d1"
  knowledge-ground: "#e8eeea"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(66px, 6.77vw, 111px)"
    fontWeight: 700
    lineHeight: 1.03
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(38px, 4.2vw, 64px)"
    fontWeight: 700
    lineHeight: 1.13
    letterSpacing: "-.03em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(28px, 2.7vw, 42px)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-.03em"
  body:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  control: "9px"
  tab: "8px"
  surface: "12px"
  flow-icon: "14px"
spacing:
  page-gutter: "clamp(24px, 4.43vw, 88px)"
  mobile-gutter: "24px"
  control-gap: "12px"
  section: "110px"
components:
  button-primary:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.on-dark}"
    rounded: "{rounded.control}"
    padding: "14px 30px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 30px"
  button-outline-hover:
    backgroundColor: "{colors.mint}"
  layer-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "8px 12px"
  layer-tab-selected:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.on-dark}"
  layer-panel:
    backgroundColor: "{colors.mint}"
    rounded: "{rounded.surface}"
    padding: "39px 42px 31px"
---

# Design System: Jeffrey Verdú

## Overview

**Creative North Star: "Capas de trabajo"**

Cool white, petrol ink and broad mint surfaces frame a professional, contemporary portfolio. Generous humanist typography and precise dividers make technical work readable without theatrical decoration. The visual character supports clear, direct Spanish and factual descriptions of experience.

Depth comes from adjacent color fields, open rows and restrained corners. Controls share that flat language; short movement clarifies interaction while preserving the reading flow.

**Key Characteristics:**

- Cool white ground with petrol contrast and mint grouping surfaces.
- Expressive display type paired with a quiet, readable body face.
- Open content rows, thin dividers and modestly rounded controls.
- Brief functional motion with a reduced-motion alternative.

## Colors

The palette combines cool mineral neutrals with green-blue ink.

### Primary

- **Petrol:** filled actions, selected tabs and the experience section. **Primary hover** deepens filled controls.
- **Mint:** broad explanatory and contact surfaces; also the outlined button hover state.

### Neutral

- **Cool white ground / on-dark:** the page surface and text on petrol respectively; both intentionally share a value.
- **Petrol ink:** default text and outlined action borders.
- **Slate secondary:** supporting copy, metadata and descriptions on light surfaces.
- **Soft green line:** dividers, tab boundaries and icon-frame borders.
- **Tab ground / tab hover:** tonal separation within the mint explorer.
- **Knowledge ground:** a quiet full-width background for skills.

The warm **focus** color is a keyboard-state signal, not a decorative accent. The petrol section belongs to this single light visual system; it is not a separate dark theme.

## Typography

**Display Font:** Bricolage Grotesque, with sans-serif fallback. **Body Font:** Hanken Grotesk, with sans-serif fallback. Both are self-hosted variable WOFF2 faces with `font-display: swap` and a supported weight range of 400–800.

The display face supplies character through broad shapes and tight tracking. Body copy, role titles, navigation and metadata use Hanken Grotesk to keep dense professional information easy to read. There is no fixed modular ratio: the type ramp follows content roles.

Display introduces the profile; headline marks major sections; title names projects. Body describes experience, while label is the compact technology-list treatment. Project descriptions use larger body copy (20px / 1.5), and dense experience text uses the frontmatter body role. Longer descriptions are constrained to approximately 66–72ch; hero supporting copy to 44–45ch.

At widths up to 950px, display becomes `clamp(58px, 9.5vw, 84px)`. Up to 700px it becomes `clamp(43px, 11.4vw, 74px)` with 1.06 line height; section headlines become 39px and project titles 31px. Dense body copy becomes 17px / 1.6.

## Layout

The centered container has a maximum width of 1600px and subtracts two fluid page gutters. At 700px and below, gutters become 24px. Broad color fields run edge to edge; their contents align with the same container.

Desktop compositions pair uneven columns rather than uniform cards: the hero uses .95fr / 1.05fr, project rows 1.3fr / 1fr, and experience rows 1fr / 2.35fr. Spacing is contextual rather than a rigid scale; large light sections use 110px vertical padding, reduced to 75px at 950px and 58px at 700px.

The 1250px breakpoint reduces gaps, type and panel padding. At 950px the hero, projects and contact become single-column. At 700px experience, skills and education also stack, and navigation becomes a disclosure menu. The sticky header is 83px tall, then 74px and finally 72px; anchored sections reserve 108px above them, or 90px on mobile.

## Elevation & Depth

No box shadows are used. Tonal surfaces, one-pixel borders and whitespace establish grouping. The mint explorer and project previews are contained surfaces; experience, education and skill entries remain open rows.

**The Flat Surface Rule.** Use tonal contrast and dividers to express hierarchy in this system.

## Shapes

Surface corners are gently rounded, while content rows stay rectangular and open. Controls and segmented tabs use the smaller corner roles in frontmatter. Flow icons sit inside bordered squares with larger corners, reducing to the surface radius on mobile. Project previews clip their real screenshots within the surface boundary.

## Components

### Buttons and text links

Filled petrol actions carry the strongest emphasis; outlined actions retain ink borders. Standard buttons have a 52px minimum height, 20px text and medium weight. The main hero action grows to 64px tall on desktop. Background and text-color transitions last 160ms. Text links use a 48px minimum height, underline on hover, and move directional arrows 3px over 180ms where implemented.

Interactive elements share a 3px focus outline with 5px offset. Contact copying is a text-style button with persistent status space for success or failure feedback.

### Navigation

The sticky, cool-white header uses a subtle bottom border. Links underline on hover; contact is outlined. The mobile menu trigger is a 44px square with a fine border and tab-radius corners. Expanded links form a vertical list with generous touch spacing. Escape closes the menu and returns focus to its trigger.

### Layer explorer

The mint panel groups three equal-width tabs, a heading, supporting copy, connected icon rows and an evidence link. Selected tabs are petrol with on-dark text; inactive tabs sit on the pale tab ground. Arrow keys, Home and End select and focus tabs. Panel content settles upward by 7px over 260ms using the shared easing curve. Reduced motion removes animation, transitions and smooth scrolling.

### Project previews and disclosure rows

Actual project screenshots appear below a mint hostname bar. Hover changes that bar's tone. Adjacent descriptions and plain technology labels stay outside the preview; technology lists are unboxed text, not pill chips. Native disclosure rows use top and bottom dividers, generous vertical padding and an arrow that rotates when open. No input-field system exists in this portfolio.

## Do's and Don'ts

### Do:

- **Do** use the self-hosted display and body pairing for their established roles.
- **Do** group related content through color fields, open rows and fine dividers.
- **Do** preserve keyboard focus visibility and the reduced-motion behavior.
- **Do** use real project screenshots as evidence with descriptive alternative text.

### Don't:

- **Don't** turn the petrol content section into an invented dark-mode specification.
- **Don't** replace the flat surface language with decorative shadows.
- **Don't** convert plain technology labels into an unsupported pill system.
- **Don't** present invented screenshots, metrics or professional claims as evidence.
