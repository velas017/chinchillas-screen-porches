# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.4.4 web application using React 19.1.0 and TypeScript. The project uses the modern Next.js App Router architecture with the `/src/app` directory structure.

## Project Goals

This is a static website to present a porch screening business.

## Project Requirements

### Functional Requirements
- Homepage/Landing page with business overview and call-to-action
- About Us page with company information and values
- Services page detailing porch screening services offered
- Gallery/Portfolio page showcasing completed projects
- Contact Us page with contact form and business information

### Technical Requirements
[ADD YOUR TECHNICAL REQUIREMENTS HERE]
- Example: Must be mobile-responsive
- Example: SEO optimized with meta tags
- Example: Accessibility compliant (WCAG 2.1 AA)

### Code Standards
[ADD YOUR CODING STANDARDS HERE]
- Example: All components must have TypeScript interfaces
- Example: Use server components by default, client components only when needed
- Example: Follow atomic design principles for component organization

## Common Commands

### Development
```bash
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint for code quality checks
```

## Architecture

### Directory Structure
- `/src/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout component with metadata configuration
  - `page.tsx` - Page components
  - `*.module.css` - Component-scoped CSS modules
  - `globals.css` - Global styles
- `/public/` - Static assets served directly

### Key Patterns
1. **App Router**: All pages use the Next.js App Router pattern with file-based routing in `/src/app/`
2. **TypeScript**: Strict mode is enabled. Use type-safe code throughout.
3. **CSS Modules**: Component styles use `.module.css` files for scoped styling
4. **Font Loading**: Uses `next/font` for optimized font loading with Geist font family
5. **Path Aliases**: Use `@/*` to import from the `src` directory (e.g., `import { Component } from '@/app/components'`)
6. **Mobile-First Responsive Design**: 
   - Design for mobile devices first, then scale up for tablets and desktops
   - Use CSS Grid and Flexbox for flexible layouts
   - Implement responsive breakpoints: mobile (<768px), tablet (768px-1024px), desktop (>1024px)
   - Ensure touch-friendly interface elements (minimum 44x44px touch targets)
   - Test on various device sizes and orientations
7. **SEO Optimization**:
   - Use Next.js Metadata API for dynamic meta tags (title, description, Open Graph)
   - Implement structured data (JSON-LD) for rich snippets
   - Ensure semantic HTML structure for better crawlability
   - Use Next.js Image component for optimized image loading and proper alt texts
   - Create XML sitemap and robots.txt
   - Implement proper URL structure with descriptive slugs
   - Ensure fast page load times (Core Web Vitals optimization)
8. **DRY (Don't Repeat Yourself) Principles**:
   - Create reusable components for repeated UI patterns
   - Extract common logic into custom hooks
   - Use component composition over duplication
   - Centralize shared styles in CSS variables or theme files
   - Build generic components that accept props for customization
   - Create utility functions for repeated operations
   - Maintain a components library structure (atoms, molecules, organisms)

### Configuration Notes
- **TypeScript**: Configured with strict mode and Next.js plugin for enhanced support
- **ESLint**: Includes Next.js recommended rules and Core Web Vitals for performance
- **Module Resolution**: Set to "bundler" for optimal Next.js compatibility

# Accessibility Requirements: WCAG 2.2 Compliance

**CRITICAL**: This application must meet WCAG 2.2 Level AA accessibility guidelines. All new components and features must follow these standards:

### Semantic HTML & Structure
- Use proper HTML5 semantic elements (`<main>`, `<nav>`, `<section>`, `<header>`, etc.)
- Maintain logical heading hierarchy (h1 → h2 → h3)
- Use lists (`<ul>`, `<ol>`) for grouped content
- Ensure proper form labeling with `<label>` elements

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Implement proper focus management and visible focus indicators
- Support tab navigation with logical tab order
- Provide skip links for main content areas
- Handle modal/panel focus trapping

### ARIA Attributes
- Use appropriate ARIA roles, states, and properties
- Implement `aria-label`, `aria-labelledby`, and `aria-describedby` where needed
- Use `aria-expanded`, `aria-selected` for interactive components
- Provide live regions (`aria-live`) for dynamic content updates

### Color & Contrast
- Maintain minimum 4.5:1 contrast ratio for normal text
- Maintain minimum 3:1 contrast ratio for large text and UI components
- Never rely solely on color to convey information
- Support both light and dark themes with proper contrast

### Responsive Design
- Support zoom up to 400% without horizontal scrolling
- Ensure touch targets are minimum 44×44 pixels
- Design works across mobile, tablet, and desktop
- Support both portrait and landscape orientations

### Component-Specific Guidelines
- **Forms**: Proper labels, error messages, and validation feedback
- **Modals/Panels**: Focus trapping, escape key handling, return focus
- **Calendars**: Keyboard navigation, proper date announcements
- **Tables**: Header associations, sorting announcements
- **Buttons**: Clear purpose, loading states, disabled states

### Testing Requirements
- Test with screen readers (VoiceOver, NVDA, JAWS)
- Verify keyboard-only navigation
- Check color contrast ratios
- Validate with automated tools (axe-core, Lighthouse)