# Chinchillas Screen Porches - UI Design System

This document outlines the design system and UI approach for the Chinchillas Screen Porches website to ensure consistency across all pages and components.

## Design Philosophy

### Core Principles
- **Clean & Modern**: Airbnb-inspired aesthetic with clean lines and minimal clutter
- **Professional & Trustworthy**: Building confidence through polished design
- **Mobile-First**: Responsive design prioritizing mobile experience
- **Accessibility-Focused**: WCAG 2.2 compliant design patterns
- **Weather Widget Inspired**: Rounded containers with soft shadows and glass-morphism effects

## Visual Identity

### Brand Colors
```css
/* Primary Colors */
--primary-text: #222222;        /* Main text, headers, active states */
--secondary-text: #666666;      /* Subtitles, descriptions, secondary info */
--background: #ffffff;          /* Page background */
--light-background: #f8f9fa;    /* Footer, subtle sections */

/* Accent Colors */
--accent-red: #ff6b6b;          /* CTA buttons, active states, highlights */
--accent-red-hover: #ff5252;    /* Hover states for red elements */

/* Interactive States */
--hover-background: #f7f7f7;    /* Light hover states */
--border-light: #e9ecef;        /* Subtle borders, dividers */
--shadow-light: rgba(0, 0, 0, 0.08);  /* Subtle shadows */
--shadow-medium: rgba(0, 0, 0, 0.15); /* Hover shadows */
```

### Typography
```css
/* Font Stack */
font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;

/* Font Sizes & Weights */
--text-xs: 12px;     /* Small labels, captions */
--text-sm: 14px;     /* Body text, links */
--text-base: 16px;   /* Standard text, nav links */
--text-lg: 18px;     /* Larger body text */
--text-xl: 20px;     /* Small headers */
--text-2xl: 24px;    /* Logo top line */
--text-3xl: 28px;    /* Section headers (mobile) */
--text-4xl: 32px;    /* Section headers (tablet) */
--text-5xl: 36px;    /* Section headers (desktop) */
--text-6xl: 48px;    /* Hero titles */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Component Design Patterns

### Container Pattern (Weather Widget Inspired)
```css
.container {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 
              0 2px 8px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(10px);
  overflow: hidden;
}
```

### Button Patterns
```css
/* Primary CTA Button */
.primary-button {
  background-color: #ff6b6b;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
  transition: all 0.3s ease;
}

.primary-button:hover {
  background-color: #ff5252;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(255, 107, 107, 0.4);
}

/* Secondary Button */
.secondary-button {
  background: rgba(255, 255, 255, 0.9);
  color: #222222;
  border: none;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

### Navigation Patterns
```css
/* Navigation Links */
.nav-link {
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.nav-link:hover {
  background-color: #f7f7f7;
}

/* Active Navigation State */
.nav-link-active {
  color: #000000;
  font-weight: 600;
  position: relative;
}

.nav-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 16px;
  right: 16px;
  height: 2px;
  background-color: #000000;
}
```

## Layout System

### Responsive Breakpoints
```css
/* Mobile First Approach */
/* Small mobile: < 480px */
/* Mobile: 480px - 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */

@media (max-width: 480px) { /* Small mobile */ }
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 1024px) { /* Tablet */ }
```

### Grid System
```css
/* Container Widths */
.container {
  max-width: 1200px;          /* Content container */
  max-width: 1760px;          /* Navbar container */
  margin: 0 auto;
  padding: 0 40px;            /* Desktop */
  padding: 0 24px;            /* Mobile */
  padding: 0 16px;            /* Small mobile */
}
```

### Spacing Scale
```css
/* Consistent spacing scale */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 40px;
--space-3xl: 60px;
--space-4xl: 80px;
```

## Component Specifications

### Navbar
- **Height**: 80px (desktop), 64px (small mobile)
- **Background**: White with subtle shadow
- **Logo**: Two-line text, centered on mobile
- **Active State**: Darker text + underline (desktop), left border (mobile)

### Footer
- **Background**: Light gray (#f8f9fa)
- **Layout**: 3-column grid (desktop) → single column (mobile)
- **CTA Card**: Weather widget container styling
- **Links**: Organized in themed sections

### Carousel
- **Container**: Weather widget inspired rounded container
- **Height**: 500px (desktop) → 350px (mobile) → 300px (small mobile)
- **Controls**: Overlay on desktop, below container on mobile
- **Transitions**: 0.5s opacity fade

### Buttons & CTAs
- **Primary**: Red accent with hover lift effect
- **Secondary**: White with subtle shadow
- **Touch Targets**: Minimum 44x44px for mobile

## Implementation Guidelines

### CSS Organization
```
components/
├── layout/
│   ├── Navbar/
│   ├── Footer/
│   └── Layout/
├── ui/
│   ├── Button/
│   ├── Card/
│   └── Container/
└── pages/
    ├── Home/
    ├── About/
    └── Services/
```

### Class Naming Convention
```css
/* BEM-inspired with CSS Modules */
.componentName { }           /* Main component */
.componentName__element { }  /* Child element */
.componentName--modifier { } /* Variant/state */

/* Examples */
.navbar { }
.navbar__logo { }
.navbar__link { }
.navbar__link--active { }
```

### Animation Standards
```css
/* Standard transitions */
transition: all 0.2s ease;     /* Quick interactions */
transition: all 0.3s ease;     /* Standard interactions */
transition: all 0.5s ease;     /* Slow animations */

/* Transform patterns */
transform: translateY(-2px);   /* Lift effect */
transform: scale(1.02);        /* Subtle grow */
transform: scale(1.1);         /* Noticeable grow */
```

## Page-Specific Patterns

### Hero Sections
- **Full-width containers** with background images
- **Overlay gradients** for text readability
- **Large typography** with clear hierarchy
- **Prominent CTAs** using primary button style

### Content Sections
- **Weather widget containers** for important content blocks
- **Consistent padding** using spacing scale
- **Clear typography hierarchy** with proper contrast
- **Grid layouts** that respond to screen size

### Cards & Content Blocks
- **Rounded corners** (8px standard, 20px for major containers)
- **Subtle shadows** for depth
- **Hover states** with lift effects
- **Consistent internal spacing**

## Accessibility Requirements

### Color Contrast
- **Normal text**: Minimum 4.5:1 ratio
- **Large text**: Minimum 3:1 ratio
- **Interactive elements**: Minimum 3:1 ratio

### Interactive Elements
- **Focus indicators**: Visible for keyboard navigation
- **Touch targets**: Minimum 44x44px
- **ARIA labels**: For icon buttons and complex interactions

### Typography
- **Readable font sizes**: Minimum 14px for body text
- **Line height**: 1.4-1.6 for body text
- **Clear hierarchy**: Logical heading structure

## Future Enhancements

### Planned Additions
- **Dark mode support** with color scheme toggles
- **Animation library** for micro-interactions
- **Component library** expansion
- **Design tokens** implementation

### Performance Considerations
- **CSS optimization** with critical path extraction
- **Image optimization** with Next.js Image component
- **Font loading** optimization
- **Animation performance** with transform/opacity only

---

*This design system should be referenced when creating new components or pages to maintain visual consistency and user experience quality across the entire website.*