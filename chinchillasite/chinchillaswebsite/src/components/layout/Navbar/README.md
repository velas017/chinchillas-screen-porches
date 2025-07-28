# Navbar Component Documentation

## Overview

The Navbar component is a modern, responsive navigation bar inspired by Airbnb's clean design aesthetic. It provides a professional and user-friendly navigation experience across all device sizes.

## Design Principles

- **Clean & Minimal**: Focus on content with subtle visual enhancements
- **Mobile-First**: Designed to work seamlessly on all devices
- **Accessibility**: WCAG 2.2 compliant with keyboard navigation support
- **Performance**: Lightweight with smooth transitions

## Visual Specifications

### Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]           [Navigation Links]         [CTA Button]    │
│  Chinchillas                                Request a Quote  │
│  Screen Porches   Home About Services Gallery Contact        │
└─────────────────────────────────────────────────────────────┘
```

### Colors

- **Primary Text**: `#222222` (dark gray)
- **Active Text**: `#000000` (black)
- **Secondary Text**: `#666666` (logo subtitle)
- **Background**: `#ffffff` (white)
- **Hover Background**: `#f7f7f7` (light gray)
- **CTA Button**: `#222222` background, `#ffffff` text
- **Shadow**: `rgba(0, 0, 0, 0.08)` (subtle drop shadow)

### Typography

- **Logo Top**: 20px, font-weight 600
- **Logo Bottom**: 14px, font-weight 400
- **Nav Links**: 16px, font-weight 500
- **Active Links**: font-weight 600
- **Mobile Links**: 18px

### Spacing

- **Container Max Width**: 1760px
- **Container Padding**: 80px (desktop), 40px (tablet), 24px (mobile)
- **Nav Link Gap**: 32px (desktop), 24px (tablet)
- **Nav Link Padding**: 10px 16px
- **Navbar Height**: 80px (desktop), 64px (small mobile)

## Component Features

### 1. Three-Section Layout
- **Left Section**: Brand identity with two-line logo
- **Center Section**: Main navigation links
- **Right Section**: Call-to-action button

### 2. Active Page Indicator
- Darker text color (#000000)
- Increased font weight (600)
- Underline indicator (2px) on desktop
- Left border indicator (4px) on mobile

### 3. Hover Effects
- Nav links: Light gray background with 8px border radius
- CTA button: Darker background with subtle scale transform
- Logo: Opacity change for subtle feedback

### 4. Mobile Menu (< 768px)
- Hamburger menu toggle
- Full-width dropdown menu
- Centered logo in navbar
- Touch-friendly link sizes
- Smooth slide-down animation

## Responsive Breakpoints

### Desktop (> 1024px)
- Full three-section layout
- All navigation links visible
- 80px container padding

### Tablet (768px - 1024px)
- Compressed spacing
- Smaller padding (40px)
- Reduced nav link gaps

### Mobile (< 768px)
- Hamburger menu
- Centered logo
- Hidden desktop navigation
- Full-width mobile menu

### Small Mobile (< 480px)
- Reduced navbar height (64px)
- Smaller logo text
- Compact padding (16px)

## Accessibility Features

- Semantic HTML structure (`<nav>`, `<ul>`, `<li>`)
- ARIA label for mobile menu toggle
- Keyboard navigable
- Focus indicators
- Sufficient color contrast ratios
- Touch targets minimum 44x44px

## Usage

```tsx
import Navbar from '@/components/layout/Navbar/Navbar'

// In your layout:
<Navbar />
```

## Customization Guide

### Adding New Navigation Links

Edit the `navLinks` array in `Navbar.tsx`:

```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
  // Add new link here:
  { href: '/blog', label: 'Blog' }
]
```

### Modifying Colors

Update the CSS variables in `Navbar.module.css`:

```css
/* Text colors */
color: #222222;  /* Primary text */
color: #000000;  /* Active text */
color: #666666;  /* Secondary text */

/* Background colors */
background-color: #ffffff;  /* Navbar background */
background-color: #f7f7f7;  /* Hover state */
background-color: #222222;  /* CTA button */
```

### Adjusting Spacing

Modify the spacing values in the CSS:

```css
.container {
  padding: 0 80px;  /* Horizontal padding */
  max-width: 1760px;  /* Container width */
}

.navLinks {
  gap: 32px;  /* Space between links */
}
```

## Component Structure

```
Navbar/
├── Navbar.tsx          # Main component logic
├── Navbar.module.css   # Component styles
└── README.md          # This documentation
```

## Best Practices

1. **Maintain Consistency**: Keep the design consistent across all pages
2. **Test Responsiveness**: Always test on multiple device sizes
3. **Accessibility First**: Ensure all changes maintain WCAG compliance
4. **Performance**: Keep animations smooth and lightweight
5. **SEO**: Use semantic HTML and proper link structure

## Future Enhancements

- Dropdown menus for nested navigation
- Search functionality integration
- Animated logo on scroll
- Sticky/hidden on scroll behavior
- Dark mode support
- Multi-language support