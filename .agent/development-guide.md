# Development Guide

## Prerequisites

### Required Software
- **Node.js 18+** - JavaScript runtime environment
- **npm** - Package manager (comes with Node.js)
- **Git** - Version control system

### Optional but Recommended
- **VS Code** - Code editor with excellent React/TypeScript support
- **React Developer Tools** - Browser extension for React debugging
- **TypeScript Importer** - VS Code extension for automatic imports

## Setup Instructions

### 1. Clone and Install
```bash
# Clone the repository (if applicable)
git clone <repository-url>
cd sebicas.com

# Install dependencies
npm install
```

### 2. Environment Configuration
```bash
# Create environment file
touch .env.local

# Add Gemini API key (if using AI features)
echo "GEMINI_API_KEY=your_api_key_here" >> .env.local
```

### 3. Development Server
```bash
# Start development server
npm run dev

# The app will be available at http://localhost:3000
```

## Development Workflow

### Available Scripts
```json
{
  "dev": "vite",                    // Development server
  "build": "vite build",            // Production build
  "preview": "vite preview",        // Preview production build locally
  "start": "serve dist -l 3000"     // Production server
}
```

### Development Process
1. **Start Development**: `npm run dev`
2. **Make Changes**: Edit components or styles
3. **Hot Reload**: Browser updates automatically
4. **Type Check**: TypeScript validates in real-time
5. **Test Changes**: Verify functionality in browser
6. **Build**: `npm run build` when ready for deployment

## Code Conventions

### TypeScript Standards

#### Component Structure
```typescript
// Always use functional components with TypeScript
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ComponentProps {
  // Define props here
}

const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic here
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

#### Import Organization
```typescript
// 1. React and core libraries
import React, { useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';

// 2. External libraries
import { Linkedin, Github } from 'lucide-react';

// 3. Internal components (relative imports)
import Navbar from './components/Navbar';
import { SOCIAL_LINKS } from './constants';

// 4. Types and interfaces
import { SocialLink, NavItem } from './types';
```

#### Naming Conventions
- **Components**: PascalCase (Hero, Navbar, Footer)
- **Files**: PascalCase for components (Hero.tsx, Navbar.tsx)
- **Variables**: camelCase (socialLinks, navItems)
- **Constants**: UPPER_SNAKE_CASE (SOCIAL_LINKS, NAV_ITEMS)
- **Interfaces**: PascalCase (SocialLink, NavItem)
- **Types**: PascalCase (ComponentProps)

### File Organization

#### Root Level Files
- `App.tsx` - Main application component
- `index.tsx` - React DOM entry point
- `constants.tsx` - Application-wide constants
- `types.ts` - TypeScript type definitions
- `vite.config.ts` - Vite configuration

#### Component Directory Structure
```
components/
├── Navbar.tsx         # Navigation component
├── Hero.tsx           # Hero section
├── About.tsx          # About section
└── Footer.tsx         # Footer component
```

### Component Patterns

#### Functional Components
```typescript
// Preferred: Functional component with TypeScript
const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Content */}
    </section>
  );
};

export default Hero;
```

#### Props Handling
```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {children}
    </button>
  );
};
```

#### State Management
```typescript
import { useState, useEffect } from 'react';

const Component: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    // Side effects here
  }, [dependencies]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return <div>{/* JSX */}</div>;
};
```

## TypeScript Best Practices

### Type Definitions
```typescript
// types.ts - Central type definitions
export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Role {
  title: string;
}
```

### Strict Typing
```typescript
// Always type your props and state
interface ComponentProps {
  title: string;
  count: number;
  isActive: boolean;
  items: string[];
  onClick: (id: string) => void;
}

// Use type assertions sparingly
const element = document.getElementById('root') as HTMLElement;
```

### Generic Types
```typescript
// For reusable components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <div>
      {items.map(item => (
        <div key={keyExtractor(item)}>
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}
```

## Development Tips

### Hot Reload Best Practices
- **Component Changes**: Automatic hot reload
- **Type Changes**: May require manual refresh
- **Config Changes**: Requires server restart
- **New Files**: Should be picked up automatically

### Debugging
```typescript
// Use console.log for debugging
console.log('Debug info:', { variable1, variable2 });

// Use React DevTools for component inspection
// Install React Developer Tools browser extension
```

### Performance Considerations
- **Avoid Inline Functions**: Use useCallback and useMemo
- **Lazy Loading**: Use React.lazy for code splitting
- **Image Optimization**: Use appropriate image formats
- **Bundle Analysis**: Check bundle size regularly

## Code Quality

### TypeScript Configuration
The project uses strict TypeScript settings:
- `"strict": true` - Strict type checking
- `"noImplicitAny": true` - No implicit any types
- `"strictNullChecks": true` - Strict null checking

### Linting
While not explicitly configured, follow these patterns:
- **Consistent Indentation**: 2 spaces (project default)
- **No Trailing Spaces**: Clean up whitespace
- **Consistent Quotes**: Use single quotes for strings
- **Semicolons**: Include semicolons at line endings

### Code Review Checklist
- [ ] All props are typed
- [ ] Imports are organized correctly
- [ ] No unused imports
- [ ] No console.log statements in production
- [ ] Components are properly exported
- [ ] Event handlers are properly typed

## Testing Strategy

### Current Status
- **No Test Framework**: Currently no testing implemented
- **Manual Testing**: Browser-based verification
- **Type Checking**: TypeScript provides compile-time validation

### Recommended Testing Setup
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom jest @types/jest

# Create test files alongside components
# Hero.tsx -> Hero.test.tsx
```

### Testing Patterns
```typescript
// Example test structure
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders personal introduction', () => {
    render(<Hero />);
    expect(screen.getByText('@sebicas')).toBeInTheDocument();
  });
});
```

## Common Issues and Solutions

### Import Errors
```typescript
// Issue: Cannot find module
// Solution: Check import paths and file extensions
import Component from './Component'; // Correct
import Component from './Component.tsx'; // Incorrect in TSX
```

### Type Errors
```typescript
// Issue: Type 'string' is not assignable to type 'never'
// Solution: Properly type arrays and objects
const items: string[] = []; // Correct
const items = []; // Type becomes never[]
```

### Build Issues
```bash
# Clear build cache
npm run build -- --force

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

This development guide provides comprehensive instructions for working with the portfolio project, ensuring consistent, high-quality code contributions.