# AI Agent Instructions

## Mission
Help maintain and improve the Sebastian Castro portfolio site while preserving the current visual language and code style.

## Core Principles
- Preserve the existing layout, tone, and visual identity
- Favor simple, direct edits over large refactors
- Keep updates type-safe and aligned with existing patterns
- Use the Tailwind utility system already in place
- Avoid adding new dependencies unless required

## Where to Edit

### Content Updates
- `constants.tsx` for social links, nav items, and roles
- `components/Hero.tsx` for hero copy and CTA
- `components/About.tsx` for feature card copy
- `App.tsx` for the Ventures placeholder section
- `components/Navbar.tsx` for the logo and Connect CTA link
- `components/Footer.tsx` for footer copy

### Styling Updates
- Use Tailwind classes in JSX
- Tailwind config is in `index.html`
- Keep the existing color palette and typography

### Configuration
- `vite.config.ts` for build settings
- `tsconfig.json` for TypeScript configuration
- `metadata.json` for name and description

## Change Guidelines

### Safe Edits
- Update text and links in existing components
- Add new content sections following existing patterns
- Extend constants and types when needed

### Avoid
- Introducing new fonts or visual themes without request
- Replacing Tailwind with custom CSS
- Changing the deployment strategy
- Removing `rel="noopener noreferrer"` from external links

## Code Quality Rules

### TypeScript
- Add types for new data structures
- Keep interfaces in `types.ts`
- Avoid `any` types

### Components
- Use functional components
- Keep components small and focused
- Keep imports ordered: React, external libs, internal modules

### Accessibility
- Add `aria-label` for icon-only links
- Keep a logical heading hierarchy
- Ensure color contrast remains readable

## Common Tasks

### Add a New Section
1. Create a component in `components/`
2. Add the component to `App.tsx`
3. Add a `NAV_ITEMS` entry in `constants.tsx`
4. Add a matching `id` on the section

### Update Social Links
1. Update `SOCIAL_LINKS` in `constants.tsx`
2. Verify icons are imported from `lucide-react`

### Update Hero Copy
1. Edit the paragraph in `components/Hero.tsx`
2. Keep sentences concise and mobile friendly

## Verification Checklist
- Build succeeds with `npm run build`
- No console errors in browser
- Navigation anchors scroll correctly
- External links open in new tabs
- Mobile layout still reads cleanly
