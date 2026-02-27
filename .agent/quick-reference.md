# Quick Reference

## Key Files
- `App.tsx` main layout and section order
- `components/Navbar.tsx` navigation and CTA
- `components/Hero.tsx` hero content and social icons
- `components/About.tsx` feature cards
- `components/Footer.tsx` footer content
- `constants.tsx` social links, nav items, roles
- `types.ts` shared TypeScript interfaces
- `index.html` Tailwind config and global styles
- `vite.config.ts` Vite build settings

## Common Commands
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Common Edits

### Update Social Links
- Edit `SOCIAL_LINKS` in `constants.tsx`

### Update Navigation
- Edit `NAV_ITEMS` in `constants.tsx`
- Match section `id` values in `App.tsx`

### Update Roles
- Edit `ROLES` in `constants.tsx`

### Update Hero Copy
- Edit `components/Hero.tsx`

### Update About Cards
- Edit `components/About.tsx`

## Design Tokens

### Colors
- `primary` #ff4b5c
- `dark` #1a1b29
- `darker` #13141f
- `light` #f8f9fa
- `graytext` #a9adb8

### Typography
- Font: Inter
- Weights: 300, 400, 600, 700, 800
