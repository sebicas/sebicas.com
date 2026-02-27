# Roadmap

## Current State
- Single-page portfolio with Hero, About, Ventures placeholder, and Footer
- Navigation anchors wired to page sections
- Tailwind styling via CDN with custom palette
- Docker and Nixpacks deployment configurations

## Gaps and Opportunities

### Content
- Blog section exists in navigation but no section is implemented
- Ventures section is a placeholder with no portfolio items

### Structure
- Most content lives in components instead of centralized data
- No testing or linting configured beyond TypeScript checks

### UX and Performance
- No analytics or performance monitoring
- No lazy loading for large future sections

## Suggested Next Steps

### Short Term
- Implement a Blog section (even as a placeholder) and add `id="blog"`
- Move About cards and Hero copy into `constants.tsx` for easier updates
- Add a small Projects or Ventures grid

### Medium Term
- Add basic tests for core components
- Add SEO enhancements (meta description, Open Graph tags)
- Consider a lightweight analytics solution

### Long Term
- Add CMS integration for dynamic content
- Introduce real blog posts and venture case studies
- Add performance optimizations (code splitting and image optimization)

## Notes
This roadmap is advisory and should be updated as priorities change.
