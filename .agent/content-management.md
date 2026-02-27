# Content Management Guide

## Content Sources

### Centralized Content (Preferred)
- `constants.tsx` stores shared, reusable content:
  - `SOCIAL_LINKS` for all social profiles and icons
  - `NAV_ITEMS` for the navigation labels and section anchors
  - `ROLES` for the hero role list

### Component-Local Content
- `components/Hero.tsx` includes the hero headline and personal intro paragraph
- `components/About.tsx` includes the feature card titles and copy
- `App.tsx` includes the Ventures placeholder section and copy
- `components/Navbar.tsx` includes the logo text and Connect CTA link
- `components/Footer.tsx` includes the footer headline and copyright line

### Metadata
- `metadata.json` stores the site name and description for platform metadata
- `index.html` defines the page title and global Tailwind config

## Common Updates

### Update Social Links
Edit `constants.tsx` to add, remove, or change social platforms.

Checklist:
- Keep `platform` human readable (used for aria labels)
- Ensure `url` is a full HTTPS link
- Use a valid `lucide-react` icon

### Update Navigation
Edit `constants.tsx` for `NAV_ITEMS`.

Checklist:
- Match `href` with section `id` values in `App.tsx` or component sections
- Keep label short for navbar layout

### Update Hero Intro
Edit the text in `components/Hero.tsx`.

Checklist:
- Keep the tone personal and concise
- Avoid long lines that break on mobile
- Keep emphasis spans for key phrases

### Update About Cards
Edit `components/About.tsx` card titles and descriptions.

Checklist:
- Keep titles short (1 to 3 words)
- Keep descriptions to 1 to 2 sentences
- Maintain the 4-card grid balance (or update grid columns if adding)

### Update Ventures Placeholder
Edit the `#ventures` section in `App.tsx`.

Checklist:
- Keep paragraph centered and concise
- Update CTA link as needed

## Adding New Content Sections

### Recommended Flow
1. Create a new component in `components/`
2. Add the component to `App.tsx` in the correct order
3. Add a `NAV_ITEMS` entry in `constants.tsx`
4. Add an `id` to the new section for anchor navigation

### Section Template
```tsx
<section id="new-section" className="py-20 bg-dark">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-8">Section Title</h2>
    <p className="text-graytext max-w-2xl mx-auto">
      Section description text.
    </p>
  </div>
</section>
```

## Content Quality Standards

### Tone and Style
- Confident, personal, and concise
- Avoid jargon or overly technical language
- Keep line lengths short for mobile readability

### Accessibility
- All external links must include `rel="noopener noreferrer"`
- Keep aria labels for social icons
- Maintain heading hierarchy (H1 in Hero, H2 for sections)

### Consistency
- Use the existing color and typography system
- Keep spacing patterns consistent with other sections
- Use Tailwind utility classes instead of custom CSS

## Content Review Checklist

- Links open correctly and include `rel` attributes
- Navigation anchors match section `id`s
- Text reads well on mobile and desktop
- Social links are accurate and up to date
- Metadata title and description remain accurate
