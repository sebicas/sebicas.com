# Styling Guide

## Tailwind CSS Configuration

### Setup
This project uses Tailwind CSS via CDN, configured in `index.html`:

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: "#ff4b5c",
          dark: "#1a1b29",
          darker: "#13141f",
          light: "#f8f9fa",
          graytext: "#a9adb8"
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        fontWeight: {
          300: "300",
          400: "400",
          600: "600",
          700: "700",
          800: "800"
        }
      },
    },
  };
</script>
```

### CDN Import
```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Color System

### Primary Colors
- **Primary (`#ff4b5c`)**: Red/pink accent for CTAs, links, highlights
- **Dark (`#1a1b29`)**: Main background color
- **Darker (`#13141f`)**: Darker sections, backgrounds for contrast
- **Light (`#f8f9fa`)**: Light accents, subtle text highlights
- **Graytext (`#a9adb8`)**: Secondary text, muted content

### Color Usage Patterns
```typescript
// Background colors
bg-dark          // Primary background
bg-darker        // Contrasting sections
bg-primary       // Accent backgrounds (rare)

// Text colors
text-white       // Primary text on dark backgrounds
text-graytext    // Secondary text
text-primary     // Links, CTAs, important text
text-light       // Subtle highlights

// Border colors
border-gray-700  // Subtle borders
border-primary   // Emphasized borders
```

## Typography System

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: Sans-serif system fonts

### Font Weights
- **300**: Light text, subtle content
- **400**: Regular body text
- **600**: Semibold emphasis
- **700**: Bold headings
- **800**: Extra bold hero text

### Text Sizing Patterns
```typescript
// Hero text
text-5xl md:text-8xl  // Large hero titles

// Section headings
text-3xl              // Main section titles
text-2xl              // Subsection titles
text-xl               // Card titles

// Body text
text-lg               // Emphasized body text
text-base             // Standard body text
text-sm               // Small labels, metadata
```

### Typography Examples
```typescript
// Hero title styling
<h1 className="text-5xl md:text-8xl font-bold leading-tight">
  I am <span className="text-white">@sebicas</span>
</h1>

// Section heading
<h2 className="text-3xl font-bold text-white mb-8">
  About Me
</h2>

// Body text
<p className="text-graytext text-lg leading-relaxed">
  Professional description here...
</p>
```

## Layout System

### Container Pattern
```typescript
// Standard container
<div className="container mx-auto px-6">
  {/* Content */}
</div>

// Full-width container
<div className="w-full">
  {/* Content */}
</div>
```

### Spacing System
```typescript
// Padding
py-20           // Large vertical padding
px-6            // Horizontal padding for containers
py-4            // Small vertical padding
py-8            // Medium vertical padding

// Margin
mb-8            // Bottom margin for sections
mt-8            // Top margin
space-y-6       // Vertical space between children
space-x-4       // Horizontal space between children
```

### Responsive Breakpoints
- **Mobile**: Default styles (320px+)
- **Tablet**: `md:` prefix (768px+)
- **Desktop**: `lg:` prefix (1024px+)

## Component Styling Patterns

### Buttons and Links
```typescript
// Primary button/link
<button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
  Button Text
</button>

// Text link
<a href="#" className="text-primary font-semibold hover:underline">
  Link Text
</a>

// Icon button
<button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300">
  <Icon size={18} />
</button>
```

### Navigation
```typescript
// Fixed navbar
<nav className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
  <div className="container mx-auto px-6">
    {/* Navigation content */}
  </div>
</nav>

// Mobile menu button
<button className="md:hidden text-white">
  <Menu size={24} />
</button>

// Desktop navigation
<ul className="hidden md:flex space-x-8">
  <li><a href="#home" className="text-white hover:text-primary transition-colors">Home</a></li>
</ul>
```

### Cards and Sections
```typescript
// Feature card
<div className="bg-darker p-6 rounded-lg border border-gray-800">
  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
    <Icon className="text-primary" size={24} />
  </div>
  <h3 className="text-xl font-semibold text-white mb-2">Card Title</h3>
  <p className="text-graytext">Card description text...</p>
</div>

// Section container
<section className="py-20 bg-dark">
  <div className="container mx-auto px-6">
    {/* Section content */}
  </div>
</section>
```

## Animation and Transitions

### Hover Effects
```typescript
// Smooth color transitions
hover:text-primary
hover:bg-primary/10
hover:border-primary

// Scale transformations
hover:scale-105
group-hover:scale-110

// Shadow effects
hover:shadow-lg
hover:shadow-primary/30
```

### Transition Utilities
```typescript
// Standard transitions
transition-colors duration-300
transition-transform duration-300
transition-all duration-300

// Animation classes (custom)
animate-in
slide-in-from-bottom
duration-700
```

### Loading Animations
```typescript
// Fade in animation
<div className="animate-in fade-in duration-500">
  {/* Content */}
</div>

// Slide animations
<div className="animate-in slide-in-from-bottom duration-700">
  {/* Content */}
</div>
```

## Custom CSS Patterns

### Watermark Effect
```typescript
// Hero section watermark
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
  <h1 className="text-[15vw] font-bold watermark opacity-20 whitespace-nowrap">
    @sebicas
  </h1>
</div>
```

### Selection Styling
```typescript
// Custom text selection
<div className="selection:bg-primary selection:text-white">
  {/* Content */}
</div>
```

## Responsive Design Patterns

### Mobile-First Approach
```typescript
// Base styles (mobile)
<div className="px-4 py-6">
  <h1 className="text-2xl font-bold">Title</h1>
</div>

// Tablet styles
<div className="px-6 py-8 md:px-8">
  <h1 className="text-2xl md:text-4xl font-bold">Title</h1>
</div>

// Desktop styles
<div className="px-6 py-8 md:px-8 lg:px-12">
  <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Title</h1>
</div>
```

### Common Responsive Patterns
```typescript
// Navigation
<div className="flex justify-between items-center">
  <div className="hidden md:flex space-x-8">
    {/* Desktop nav */}
  </div>
  <div className="md:hidden">
    {/* Mobile menu button */}
  </div>
</div>

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Responsive grid */}
</div>

// Text sizing
<h2 className="text-2xl md:text-3xl lg:text-4xl">
  Responsive heading
</h2>
```

## Styling Best Practices

### Performance Optimization
- **Utility-First**: Prefer Tailwind utilities over custom CSS
- **Responsive Prefix**: Always apply responsive variants (md:, lg:)
- **Transition Grouping**: Group similar transitions together
- **Minimal Custom CSS**: Use Tailwind's built-in utilities

### Maintainability
- **Consistent Colors**: Use defined color palette consistently
- **Semantic Classes**: Apply colors and styles purposefully
- **Spacing Consistency**: Use the same spacing values throughout
- **Typography Hierarchy**: Maintain clear heading and text hierarchy

### Accessibility
```typescript
// Focus states
focus:outline-none focus:ring-2 focus:ring-primary

// ARIA labels (in JSX)
<button aria-label="Close menu">
  <X size={24} />
</button>

// High contrast
text-white bg-primary  // Good contrast ratio
text-graytext bg-dark  // Adequate contrast for secondary text
```

## Common Styling Tasks

### Adding New Sections
```typescript
// Standard section template
<section id="section-id" className="py-20 bg-dark">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-white mb-8">Section Title</h2>
    <p className="text-graytext max-w-2xl mx-auto mb-8">
      Section description text...
    </p>
    {/* Section content */}
  </div>
</section>
```

### Custom Buttons
```typescript
// Variant buttons
<button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
  Primary Button
</button>

<button className="border border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
  Secondary Button
</button>
```

### Icon Styling
```typescript
// Icon containers
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
  <Icon className="text-primary" size={24} />
</div>

// Standalone icons
<Icon className="text-gray-400 hover:text-primary transition-colors" size={18} />
```

This styling guide provides comprehensive patterns and best practices for maintaining consistent, responsive, and accessible styling across the portfolio project.