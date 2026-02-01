# Design Guidelines: Spiritual Wellness Landing Website

## Design Approach
**Reference-Based Approach** drawing inspiration from leading wellness platforms like Headspace, Calm, and premium wellness brands. The design emphasizes tranquility, elegance, and emotional connection through generous whitespace, flowing layouts, and serene visual hierarchy.

## Core Design Principles
- **Serenity Through Space**: Embrace generous whitespace to create breathing room and peaceful user experience
- **Gentle Visual Flow**: Soft, organic shapes and subtle transitions guide users through content
- **Authenticity**: Use genuine imagery showcasing real wellness practices and human connection
- **Minimal Distraction**: Clean, uncluttered layouts that promote focus and calm

## Typography System
- **Primary Font**: Google Fonts "Cormorant Garamond" (serif) for elegant headlines and section titles
- **Secondary Font**: "Inter" (sans-serif) for body text and UI elements
- **Hierarchy**:
  - Hero headline: text-5xl md:text-6xl lg:text-7xl, font-light, tracking-tight
  - Section headings: text-3xl md:text-4xl, font-light
  - Subheadings: text-xl md:text-2xl, font-normal
  - Body text: text-base md:text-lg, font-normal, leading-relaxed
  - Testimonial quotes: text-xl md:text-2xl, font-light, italic

## Layout & Spacing System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, and 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl with px-6 md:px-8
- Component spacing: space-y-8 to space-y-16 for vertical flow
- Grid gaps: gap-8 md:gap-12 for multi-column layouts

## Page Structure & Components

### 1. Hero Section (100vh)
- Full-viewport immersive experience with large hero image
- Centered content overlay with blurred background for text/CTA container
- Headline + subheadline + primary CTA button with blurred glass-morphism effect
- Subtle scroll indicator at bottom

### 2. Introduction/Philosophy Section
- Single column, centered content with max-w-3xl
- Elegant typography with generous line-height (leading-loose)
- Brief mission statement (2-3 sentences)

### 3. Services/Offerings Section
- Three-column grid layout (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Each service card includes:
  - Icon (Material Icons or Heroicons via CDN)
  - Service name (text-2xl)
  - Description paragraph
  - Soft hover elevation effect
- Cards use subtle rounded corners (rounded-2xl) and light borders

### 4. Wellness Programs/Experiences Section
- Two-column alternating layout (image + content)
- First program: image left, content right
- Second program: content left, image right
- Each includes program name, description, benefits list, and "Learn More" CTA
- Images are large, full-bleed within their column

### 5. Founder/About Story Section
- Single column narrative with max-w-4xl
- Founder photo (rounded-full, w-32 h-32) centered above text
- Personal story in first person
- Elegant pull quote treatment for key mission statement

### 6. Testimonials Section
- Three-column grid (grid-cols-1 md:grid-cols-3)
- Each testimonial card:
  - Client photo (rounded-full)
  - Quote in italic serif
  - Client name and transformation journey length
- Soft background treatment to separate from page

### 7. Contact/Begin Journey Section
- Two-column layout: form left (lg:col-span-7), contextual info right (lg:col-span-5)
- Form fields: Name, Email, Phone, Interest (dropdown), Message
- All inputs use consistent styling with focus states
- Right column includes:
  - Location/studio address
  - Contact methods (email, phone)
  - Availability hours
  - Small map placeholder or nature image
- Primary CTA button for form submission

### 8. Footer
- Three-column grid for desktop (grid-cols-1 md:grid-cols-3)
- Column 1: Brand tagline + social media icons (Font Awesome)
- Column 2: Quick links (About, Services, Contact, Privacy)
- Column 3: Newsletter signup with single email input + subscribe button
- Bottom bar: Copyright, terms, privacy links

## Component Library

### Buttons
- Primary: Generous padding (px-8 py-4), rounded-full, text-base md:text-lg
- Secondary: Same sizing, outlined variant
- Glass-morphism buttons over images: backdrop-blur-md with semi-transparent background

### Cards
- Service cards: rounded-2xl, light border, p-8, subtle shadow on hover
- Testimonial cards: rounded-xl, p-6, elevated background
- Consistent aspect ratios for imagery within cards

### Forms
- Input fields: rounded-lg, p-4, border with focus ring
- Textareas: minimum h-32
- Consistent spacing between fields (space-y-6)

### Images
- Hero: Full-viewport background with subtle gradient overlay
- Services: Square aspect ratio (aspect-square) icons or symbolic imagery
- Programs: Landscape orientation (aspect-video) showing wellness activities
- Testimonials: Circle cropped portraits (aspect-square then rounded-full)
- About: Portrait or square founder photo
- All images use object-cover for consistent cropping

## Navigation
- Transparent header over hero, transitions to solid on scroll
- Logo left, navigation links center, CTA button right
- Mobile: Hamburger menu with full-screen overlay
- Sticky positioning (sticky top-0) with backdrop-blur

## Image Requirements

### Large Hero Image
**Yes** - Full-viewport hero image is essential
- Subject: Serene meditation scene, yoga practice in nature, or peaceful wellness space
- Treatment: Subtle warm or cool gradient overlay for text legibility
- Mood: Tranquil, inviting, aspirational

### Additional Images
- Services section: 3 symbolic/abstract wellness images (optional decorative elements)
- Programs section: 2-4 lifestyle photos showing actual wellness activities (yoga, meditation, nature walks)
- Founder/About: 1 authentic portrait photo
- Testimonials: 3 client portrait photos (can use placeholder silhouettes if needed)
- Contact section: Small location/studio image or nature scene

## Animations
Use sparingly for premium feel:
- Subtle fade-in on scroll for section content (opacity + translate-y)
- Smooth page scroll behavior (scroll-smooth)
- Gentle hover lifts on cards (hover:scale-105 transition-transform)
- No distracting parallax or aggressive motion

## Accessibility
- Maintain WCAG AA contrast ratios throughout
- Focus states on all interactive elements
- Semantic HTML structure with proper headings
- Alt text for all imagery

This creates a comprehensive, serene landing experience that embodies spiritual wellness values through thoughtful design and authentic content presentation.