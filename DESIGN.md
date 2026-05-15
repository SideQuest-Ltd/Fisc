---
name: Fisc
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system for Fisc is rooted in the "2026 Modern Finance" aesthetic—a synthesis of high-utility minimalism and emotional security. The brand personality is authoritative yet approachable, positioning the product as a sophisticated financial co-pilot rather than a static ledger. 

The visual direction utilizes a refined **Corporate/Modern** style with hints of **Minimalism**. It prioritizes high data clarity through intentional whitespace and a reduction of non-functional decorative elements. The goal is to evoke a sense of "quiet confidence," ensuring the user feels in control of their financial trajectory without the cognitive load typically associated with fiscal management.

## Colors
The palette is engineered to balance institutional trust with the optimism of financial growth. 

*   **Primary (Deep Navy):** Used for core navigation, primary headings, and heavy UI elements to establish a foundation of stability and security.
*   **Secondary (Emerald Green):** Reserved for "growth" indicators, positive balances, CTA buttons, and success states. It is a vibrant, modern emerald—highly visible but calibrated to remain "calm" rather than neon.
*   **Neutral/Surface:** A sophisticated range of cool grays and charcoals. The background is a crisp, off-white slate to reduce eye strain and provide a premium feel compared to pure white.
*   **Functional Colors:** Error states use a muted terracotta; warnings use a soft amber. Neither should compete with the primary emerald growth color.

## Typography
The system uses a dual-sans-serif approach to distinguish between "Data/Labels" and "Content/Reading." 

**Geist** is employed for headlines and labels to provide a technical, modern edge that suggests precision. **Inter** is used for body copy and long-form data due to its exceptional legibility at small sizes. 

Numerical data should always use tabular lining figures to ensure that columns of currency align perfectly. High contrast is maintained by using Deep Navy for headings and a Slate Gray for secondary body text.

## Layout & Spacing
This design system utilizes a **Fixed Grid** model for desktop and a **Fluid** model for mobile. 

*   **Desktop:** A 12-column grid with a 1280px max-width. Content is centered with generous 40px side margins to create an "airy" feel.
*   **Mobile:** A 4-column fluid grid.
*   **Spacing Rhythm:** An 8px linear scale governs all padding and margins. Large-scale sections should be separated by 48px or 64px to maintain the minimalist aesthetic and prevent data density from feeling overwhelming. 

Cards and data clusters should utilize "Internal Breathing Room"—padding within elements should rarely be less than 24px.

## Elevation & Depth
Depth is created through **Tonal Layers** supplemented by **Ambient Shadows**. 

Instead of traditional heavy drop shadows, the system uses "Elevated Surfaces." The background is the lowest layer (`Neutral-50`). Primary cards and containers sit one level above on a pure white surface with a very soft, diffused shadow (Blur: 20px, Opacity: 4%, Color: Navy). 

For interactive elements like modals or dropdowns, a secondary backdrop blur (Glassmorphism) is applied to the background layer to maintain context while focusing user attention. This creates a sense of physical stacking that feels organized and secure.

## Shapes
The shape language is defined by "Modern Softness." A consistent **0.5rem (8px)** corner radius is used for standard components (buttons, input fields), while larger containers (cards, modals) scale up to **1rem (16px)**. 

This balance avoids the clinical feel of sharp corners while remaining more professional and "buttoned-up" than fully rounded pill shapes. High-level sections (e.g., the main "Total Balance" dashboard card) may use a **1.5rem** radius to signify their importance and create a friendlier entry point.

## Components
*   **Buttons:** Primary buttons are Solid Emerald with White text. Secondary buttons use a Ghost style (Navy border, Navy text). All buttons have an 8px radius and a subtle 2px vertical offset shadow on hover to feel tactile.
*   **Input Fields:** Minimalist design with a 1px Slate border. On focus, the border transitions to Navy with a soft 4px Emerald outer glow. Labels sit strictly above the field in Geist Semibold.
*   **Cards:** Pure white backgrounds with a 16px radius. No borders; depth is provided solely by the ambient shadow.
*   **Chips/Tags:** Used for transaction categories (e.g., "Housing", "Groceries"). These use a desaturated version of the category color with high-contrast text for accessibility.
*   **Data Visualization:** Charts should use thick stroke weights (3px+) with rounded caps. Use Emerald for positive trends and Navy for neutral benchmarks.
*   **Lists:** Transaction lists should have generous vertical padding (16px) and thin, 1px dividers in the lightest gray shade.