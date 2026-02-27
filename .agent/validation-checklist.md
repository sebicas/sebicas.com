# Validation Checklist

## Build and Type Safety
- `npm run build` completes without errors
- No TypeScript errors in editor or build output

## UI and Layout
- Hero, About, Ventures, Footer render correctly
- Navbar is visible and responsive on mobile
- Mobile menu opens and closes correctly
- Section spacing is consistent

## Navigation
- Navbar anchors scroll to the correct sections
- Section `id` values match `NAV_ITEMS`

## Links and External Targets
- Social links open in new tabs
- External links include `rel="noopener noreferrer"`
- CTA links are valid and current

## Styling Consistency
- Color palette matches Tailwind config in `index.html`
- Typography uses Inter and consistent weights
- Hover states and transitions are intact

## Content Quality
- Copy is concise and readable on mobile
- No typos or outdated personal details
- Metadata name and description match the current brand

## Optional Checks
- Lighthouse performance baseline (if requested)
- Cross-browser check (Chrome, Safari, Firefox)
