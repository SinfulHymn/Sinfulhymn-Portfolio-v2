# Changelog

Record of the redesign and cleanup work done on this portfolio, kept so
changes can be referenced later without re-deriving them. Newest first.

## Footer, security hardening, and Photos page

- **Footer redesign** (`components/Footer.tsx`): rebuilt to match sig2void's
  actual "Elsewhere" / "Contact" pattern — GitHub, Instagram, and LinkedIn as
  handle + platform rows with hairline dividers, plus a "Contact" section and
  a colophon row.
- **Email obfuscation** (`components/ObfuscatedEmail.tsx`): the address is
  assembled client-side after mount instead of being present in the initial
  HTML, so non-JS scrapers never see a plain `mailto:` link.
- **Fixed a real email leak**: `pages/about.tsx` and `pages/blog/[...slug].tsx`
  were passing the full MDX author frontmatter (including an email address)
  straight into `getStaticProps` props, which Next.js serializes verbatim into
  the `__NEXT_DATA__` JSON blob in every page's HTML — regardless of what the
  UI actually renders. Removed `email` from `data/authors/default.mdx`'s
  frontmatter (the root cause) and added defense-in-depth redaction in both
  `getStaticProps` functions. `AuthorLayout` and `Footer` now both source the
  contact address from `siteMetadata.email` instead.
- **Dependency vulnerabilities**: `npm audit` reported 41 vulnerabilities (3
  critical). Traced most of them to `react-spring` — unused since its only
  consumer (`ButtonCard`) was deleted earlier — which was pulling in the
  entire `react-native` dependency tree as a transitive dependency. Removed
  `react-spring`, `@react-three/fiber`, `@react-three/postprocessing` (all
  unused), then ran `npm audit fix` (non-breaking only). Result: 41 → 10
  vulnerabilities (1 critical remaining — `next` itself, which needs a
  framework major-version upgrade; deliberately left as a separate follow-up
  given the testing surface that requires).
- **CSP tightened** (`next.config.js`): `connect-src *` → `'self' giscus.app`,
  `img-src * blob: data:` → `'self' data:`, added `object-src 'none'`,
  `base-uri 'self'`, `form-action 'self'`.
- **New Photos page**: added "Photos" to the nav (`data/headerNavLinks.ts`),
  built `pages/photos.tsx` with a CSS-columns masonry grid and a native
  `<dialog>`-based lightbox (click to enlarge, closes on Escape/backdrop/×).
  Seeded `data/photosData.ts` with only `main_photo.jpg` — traced
  `ocean.jpeg`, `time-machine.jpg`, and the `canada/` images in git history to
  two leftover starter-template demo blog posts (not real photos), so they
  were deliberately left out rather than presented as personal content. Add
  real photos to `public/static/images/` and list them in `photosData.ts`
  following the same pattern as `projectsData.ts`.

## Hero polish: padding, tagline width, nav spacing, nomenclature

- Hero horizontal padding increased (`clamp(1rem,4vw,1.5rem)` →
  `clamp(1.5rem,8vw,5rem)`) for more breathing room now that it's full-width.
- Tagline max-width widened (`max-w-md` → `max-w-3xl`) so more words fit per
  line; its font-size floor also lowered so it shrinks further on narrow
  screens.
- Nav links given their own `.nav-primary` class (wider `letter-spacing:
  0.3em` vs. the standard `.apparatus` 0.18em) and larger gaps between links,
  matching sig2void's more spread-out nav treatment.
- "About" renamed to "Whoami" in `data/headerNavLinks.ts` (propagates to
  Hero nav, sticky header nav, and mobile nav — all share this one file). The
  route itself stays `/about`.
- Light/dark toggle moved to the opposite end of the hero's bottom row via
  `justify-between` (nav left, toggle right), matching sig2void's layout.

## Full-bleed hero + fluid typography

- Removed the `max-w-3xl`/`xl:max-w-4xl` cap from the Hero's content wrapper
  (`components/Hero.tsx`) — sig2void's `.landing-inner` has no max-width at
  all, only fluid padding, so the hero content now spans the full section
  width instead of sitting in a centered reading column with large empty
  margins on wide screens.
- Converted key sizes to CSS `clamp()` (fluid typography/spacing, scaling
  continuously with viewport width instead of jumping at Tailwind
  breakpoints): the Hero wordmark, tagline, Hero padding, `PageTitle`, and
  `SectionContainer`'s horizontal padding (used site-wide).

## Color scheme: tried a rust/terracotta duotone, then reverted

- Replaced the original neon acid-green/lavender/blush/storm palette with a
  restrained rust/terracotta duotone (closer to sig2void's actual approach)
  in `tailwind.config.js`, plus a matching hero grain overlay and radial
  vignette for atmosphere, and larger/bolder topography scale (640px → 920px
  tiles).
- User asked to revert the colors ("it was fine before") — reverted
  `tailwind.config.js` and the topography color variables byte-for-byte back
  to the original palette. **Kept** the hero atmosphere improvements (grain,
  vignette, larger topography scale) since those weren't part of the
  complaint, plus the font system and a couple of unrelated small fixes
  (routing literal `text-black`/`dark:text-white` through semantic tokens, a
  broken class-name bug in `PostSimple.tsx`).

## Hacker font system + Whoami "man page" redesign

- Swapped Newsreader (literary serif) for a monospace-first "hacker terminal"
  pairing: **JetBrains Mono** for body/UI chrome (site-wide default via
  `SectionContainer`), **Share Tech Mono** for headings/wordmark
  (`font-display`), both self-hosted via `next/font/google`
  (`lib/fonts.ts`). Added a blinking terminal cursor (`.cursor`) next to the
  hero wordmark and a `// ` comment-style prefix on the tagline.
- Topography motif made more visible: opacity and tile size increased.
- Rebuilt `layouts/AuthorLayout.tsx` (the About/"Whoami" page) as a literal
  terminal "man page" — pulled sig2void's actual `/whoami/` HTML/CSS to copy
  the *structure*, not their personal content: a terminal title-bar chrome
  (`$ sinfulhymn@localhost: ~/whoami`), a bordered page with a soft glow,
  `WHOAMI(1)` header, man-page sections (Name/Synopsis/Description/
  Background), an Options block rendering contact/GitHub/LinkedIn as fake
  CLI flags (`--contact`, `--github`, `--linkedin`), and the avatar reframed
  as its own terminal tab (`$_avatar`), sitting beside the page on `xl:`
  screens.

## Layout refinement pass

- `MobileNav.tsx` restyled to match the hairline/apparatus system (was still
  using generic `bg-gray-200`/`gray-800`); fixed a real bug where its overlay
  (`z-10`) sat *behind* the sticky header (`z-20`).
- Whoami page: avatar moved from always-stacked-below to sitting beside the
  terminal window at `xl:` breakpoints (matched to `SectionContainer`'s
  actual widen-point at 1280px, not the `lg:` breakpoint, which would have
  triggered the two-column layout while the container was still capped
  narrower).
- Tightened the ~80px stacked-padding gap between Hero and homepage content
  on the home route specifically.
- Standardized the project-card grid gap between the homepage and `/projects`
  (was `gap-8` vs `gap-10` for the identical grid).

## Vercel deployment fix

- Build was failing with "Cannot find module '@/lib/fonts'". Root cause: the
  git repo had **two full copies of the project** — a stale, pre-redesign
  copy at the true repo root, and the current copy nested under
  `Sinfulhymn-Portfolio/` (what Vercel's Root Directory actually points at).
  Verified via a fresh isolated clone + real `next build` that the correct
  nested copy builds cleanly on its own. Removed the 151-file stale duplicate
  from the true root (commit `93d4ed3`) and pushed.

## Initial sig2void-inspired redesign + refactor

- Adopted sig2void's **layout/structural patterns** (explicitly not their
  colors, which the user asked to keep): a full-bleed hero with the
  topography-map motif as signature art (moved off the global `<body>`,
  where it was a faint site-wide texture, into the hero), a slim sticky
  header with a hairline bottom border that blurs on scroll on inner pages,
  a serif/mono type pairing (later replaced — see Hacker font section
  above), hairline dividers instead of cards/shadows, and underline-grow-on-
  hover nav links.
- New components: `Hero.tsx`. Restyled: `LayoutWrapper.tsx`, `Card.tsx`,
  `Tag.tsx`, `Pagination.tsx`, `PageTitle.tsx`, `Footer.tsx` (later redone —
  see above), `ThemeSwitch.tsx` (sun/moon slider). Removed the glossy
  3D-tilt `ButtonCard` and the 5-layer `GradientOverlay` component.
- Restyled `layouts/ListLayout.tsx`, `PostLayout.tsx`, `AuthorLayout.tsx`
  (later rebuilt again — see Whoami section), and the corresponding pages.
- **Refactor/cleanup**: restored `data/projectsData.ts` (every entry had been
  commented out — Projects rendered empty everywhere); fixed
  `siteMetadata.image` pointing at a nonexistent file; deleted `unused-blogs/`
  (8 dead MDX files); trimmed 5 of 6 unused newsletter API routes and 2 of 3
  unused comment providers; removed 11 confirmed-unused Tailwind color
  tokens; removed the dead `GradientOverlay`/`ButtonCard`/`logo.svg` and
  their orphaned gradient image assets; dropped `@fontsource/inter` (loaded a
  full variable font file that nothing referenced) and
  `@mailchimp/mailchimp_marketing` (unused) from `package.json`.
