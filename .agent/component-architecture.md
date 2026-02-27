# Component Architecture

## Component Hierarchy

### Application Structure
```
App (Root Component)
├── Navbar (Fixed navigation with mobile menu)
├── main (Main content area)
│   ├── Hero (Landing section with personal intro)
│   ├── About (Feature cards with personal attributes)
│   └── Ventures (Placeholder for future content)
└── Footer (Social links and copyright)
```

### Component Relationships
- **App**: Root component that orchestrates all layout and sections
- **Navbar**: Fixed positioning, handles mobile menu state
- **Hero**: Introduction section with social media links
- **About**: Feature cards showcasing personal attributes
- **Footer**: Static footer with repeated social links

## Core Components

### App.tsx (Root Component)
**Purpose**: Main application wrapper and layout orchestration
**Props**: None (uses constants for configuration)
**State**: None (static layout)
**Dependencies**: All child components

```typescript
function App() {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <section id="ventures">{/* Future content */}</section>
      </main>
      <Footer />
    </div>
  );
}
```

**Key Features**:
- Global styling classes
- Semantic HTML structure
- Section organization for navigation

### Navbar.tsx
**Purpose**: Navigation with mobile-responsive menu
**Props**: None (uses NAV_ITEMS constant)
**State**: `isMenuOpen` (boolean for mobile menu)
**Dependencies**: Lucide icons, NAV_ITEMS constant

```typescript
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dark/95 backdrop-blur-sm z-50">
      {/* Navigation content with mobile menu */}
    </nav>
  );
};
```

**Key Features**:
- Fixed positioning with backdrop blur
- Mobile hamburger menu
- Smooth scroll navigation
- Responsive design (mobile/desktop)

### Hero.tsx
**Purpose**: Personal introduction and social media links
**Props**: None (uses constants)
**State**: None (static content)
**Dependencies**: SOCIAL_LINKS, ROLES constants

```typescript
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background watermark */}
      {/* Social icons */}
      {/* Personal introduction */}
      {/* Call-to-action */}
    </section>
  );
};
```

**Key Features**:
- Background watermark effect
- Social media icon grid
- Responsive typography
- Animated entrance effects

### About.tsx
**Purpose**: Feature cards highlighting personal attributes
**Props**: None (uses constants)
**State**: None (static content)
**Dependencies**: Feature data from constants

```typescript
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-darker">
      <div className="container mx-auto px-6">
        {/* Section heading */}
        {/* Feature cards grid */}
      </div>
    </section>
  );
};
```

**Key Features**:
- Feature card grid layout
- Icon-based visual hierarchy
- Responsive card arrangement
- Background color variation

### Footer.tsx
**Purpose**: Copyright and additional social links
**Props**: None (uses constants)
**State**: None (static content)
**Dependencies**: SOCIAL_LINKS constant

```typescript
const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-darker border-t border-gray-800">
      {/* Social links */}
      {/* Copyright text */}
    </footer>
  );
};
```

**Key Features**:
- Repeated social links for accessibility
- Copyright information
- Consistent styling with About section

## Data Architecture

### Constants Structure
All content and configuration is centralized in `constants.tsx`:

```typescript
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sebicas/',
    icon: Linkedin,
  },
  // ... more social links
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // ... more navigation items
];

export const ROLES: Role[] = [
  { title: 'Husband' },
  { title: 'Father' },
  // ... more roles
];
```

### Type Definitions
All interfaces are defined in `types.ts`:

```typescript
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

## Component Patterns

### Functional Component Pattern
All components follow the same functional component structure:

```typescript
import React from 'react';
import { Icon } from 'lucide-react';
import { CONSTANT } from '../constants';

const ComponentName: React.FC = () => {
  // Component logic here
  return (
    <div className="tailwind-classes">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

### Props Pattern
Most components use no props and rely on constants:

```typescript
// Preferred: Constants-based approach
const Hero: React.FC = () => {
  return <div>{SOCIAL_LINKS.map(...)}</div>;
};

// If props needed in future:
interface HeroProps {
  customMessage?: string;
}
const Hero: React.FC<HeroProps> = ({ customMessage }) => {
  return <div>{customMessage}</div>;
};
```

### State Management Pattern
Limited state usage, mostly for UI interactions:

```typescript
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <button onClick={toggleMenu}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      {/* Menu content */}
    </nav>
  );
};
```

## Reusable Component Patterns

### Icon Button Pattern
```typescript
const IconButton: React.FC<{
  icon: LucideIcon;
  onClick?: () => void;
  href?: string;
  ariaLabel: string;
}> = ({ icon: Icon, onClick, href, ariaLabel }) => {
  const baseClasses = "w-10 h-10 flex items-center justify-center rounded-full border border-gray-700 text-gray-400 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300";
  
  if (href) {
    return (
      <a href={href} className={baseClasses} aria-label={ariaLabel}>
        <Icon size={18} />
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={baseClasses} aria-label={ariaLabel}>
      <Icon size={18} />
    </button>
  );
};
```

### Feature Card Pattern
```typescript
const FeatureCard: React.FC<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-dark p-6 rounded-lg border border-gray-800">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-primary" size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-graytext">{description}</p>
    </div>
  );
};
```

### Section Pattern
```typescript
const Section: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
  bgVariant?: 'dark' | 'darker';
}> = ({ id, title, children, bgVariant = 'dark' }) => {
  return (
    <section id={id} className={`py-20 bg-${bgVariant}`}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};
```

## Component Communication

### Data Flow
- **Top-down**: Constants flow down to components
- **No props drilling**: Components use constants directly
- **No state lifting**: Minimal state, contained within components
- **Event handling**: Simple onClick handlers

### Navigation Communication
```typescript
// Navbar component handles navigation
const handleNavClick = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  setIsMenuOpen(false); // Close mobile menu
};
```

### Mobile Menu Communication
```typescript
// Menu state managed locally
const [isMenuOpen, setIsMenuOpen] = useState(false);

// Menu toggle function
const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

// Close menu on navigation click
const handleNavClick = (href: string) => {
  scrollToSection(href);
  setIsMenuOpen(false);
};
```

## Component Lifecycle

### Mounting
- **App**: Mounts immediately, renders all children
- **Navbar**: Sets up mobile menu state, attaches scroll listeners
- **Hero**: Renders with animation classes
- **About**: Static render, no lifecycle effects
- **Footer**: Static render, no lifecycle effects

### Updates
- **Props**: No prop updates (static content)
- **State**: Only Navbar state changes (menu toggle)
- **Effects**: Navbar may need scroll effect listeners

### Cleanup
- **Navbar**: Should clean up scroll listeners
- **Others**: No cleanup needed (static components)

## Component Testing Strategy

### Unit Testing Approach
```typescript
// Example test for Hero component
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  test('renders social links correctly', () => {
    render(<Hero />);
    expect(screen.getByTitle('LinkedIn')).toBeInTheDocument();
    expect(screen.getByTitle('GitHub')).toBeInTheDocument();
  });

  test('displays correct roles', () => {
    render(<Hero />);
    expect(screen.getByText('Husband')).toBeInTheDocument();
    expect(screen.getByText('Father')).toBeInTheDocument();
  });
});
```

### Integration Testing
```typescript
// Test navigation flow
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('App Navigation', () => {
  test('navigates to sections when clicking nav items', () => {
    render(<App />);
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    // Test scroll behavior
  });
});
```

## Future Component Architecture

### Scalability Considerations
- **Component Composition**: Easy to add new sections
- **Prop Interface**: Ready for dynamic content
- **State Management**: Prepared for global state if needed
- **Code Splitting**: Ready for React.lazy implementation

### Potential Enhancements
- **Dynamic Components**: Props-driven content
- **State Management**: Context or Redux for global state
- **Component Library**: Shared components for reuse
- **Lazy Loading**: Performance optimization for larger sites

This component architecture provides a clean, maintainable structure that scales well with future enhancements while maintaining simplicity for the current portfolio needs.