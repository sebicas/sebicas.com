# Deployment Guide

## Local Development

### Install and Run
```bash
npm install
npm run dev
```

### Build and Preview
```bash
npm run build
npm run preview
```

## Environment Variables

### GEMINI_API_KEY
`vite.config.ts` exposes `GEMINI_API_KEY` at build time:

```ts
define: {
  'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
  'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
}
```

Add to `.env.local` when needed:
```
GEMINI_API_KEY=your_api_key_here
```

Note: The current UI does not use this value, but it is ready for future AI features.

## Static Hosting

### Build Output
- Vite outputs to `dist/`
- Deploy the contents of `dist/` to any static host

### Recommended Hosts
- Netlify
- Vercel (static export)
- Cloudflare Pages
- GitHub Pages

## Docker Deployment

### Build Image
```bash
docker build -t sebicas-portfolio .
```

### Run Container
```bash
docker run --rm -p 3000:3000 sebicas-portfolio
```

### Health Check
The Dockerfile includes a healthcheck:
```
curl --fail http://localhost:3000/ || exit 1
```

## Nixpacks Deployment

### Configuration
`nixpacks.toml` includes:
- Node 20
- npm install
- Vite build
- Serve static output

### Default Start Command
```
npx serve dist -l ${PORT:-3000}
```

### Health Check
```
curl --fail http://localhost:${PORT:-3000}/ || exit 1
```

## Production Verification

### Manual Checks
- Open the homepage and verify all sections render
- Check that navigation anchors scroll correctly
- Confirm social links open in new tabs
- Confirm fonts and colors match the design system

### Automated Checks
- `npm run build` completes without errors
- No console errors in browser devtools
