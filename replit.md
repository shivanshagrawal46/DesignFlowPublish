# Swara Vigyan Wellness - Spiritual Wellness Landing Website

## Overview
A beautiful, elegant landing website for a spiritual wellness company featuring calming design, smooth animations, and a peaceful user experience. Built with React, TypeScript, and Tailwind CSS with a focus on visual excellence and tranquility.

## Purpose
To provide an inviting digital presence for Swara Vigyan Wellness, showcasing services, programs, and philosophy while enabling prospective clients to connect through a contact form.

## Current State
✅ Fully functional production-ready website with advanced features
- **Beautiful hero section** with parallax scrolling and smooth animations
- **Smooth navbar** with elegant color transitions on scroll  
- **Floating scroll-to-top button** for enhanced UX
- **Services showcase** with fade-in animations
- **Wellness programs** with alternating slide-in animations
- **About section** with owner details, professional portrait, and credentials
- **Client testimonials** with circular portrait images
- **Functional contact form** with success messaging and backend integration
- **Admin dashboard** to view all contact submissions
- **Responsive design** optimized for mobile and desktop
- **Smooth scroll navigation** throughout
- **Advanced Framer Motion animations** on all sections
- **Dark mode** support with theme toggle capability

## Tech Stack
- **Frontend**: React 18, TypeScript, Wouter (routing)
- **Styling**: Tailwind CSS, Shadcn UI components
- **Forms**: React Hook Form, Zod validation
- **State Management**: TanStack Query (React Query)
- **Backend**: Express.js, Node.js
- **Storage**: In-memory storage (MemStorage)
- **Build Tool**: Vite

## Project Architecture

### Frontend Structure
```
client/src/
├── components/
│   ├── navigation.tsx     # Sticky header with smooth color transitions
│   ├── hero.tsx          # Full-viewport hero with parallax & animations
│   ├── philosophy.tsx     # Mission statement with fade-in animation
│   ├── services.tsx      # Three service cards with staggered animations
│   ├── programs.tsx      # Two-column programs with slide-in effects
│   ├── about.tsx         # Owner details with portrait and credentials
│   ├── testimonials.tsx  # Client testimonials with circular portraits
│   ├── contact.tsx       # Contact form with success message display
│   ├── footer.tsx        # Footer with social links and admin access
│   └── scroll-to-top.tsx # Floating scroll-to-top button
├── pages/
│   ├── home.tsx          # Main landing page with all sections
│   ├── admin.tsx         # Admin dashboard for viewing submissions
│   └── not-found.tsx     # 404 page
├── App.tsx               # Root component with routing
└── index.css             # Tailwind config and custom utilities
```

### Backend Structure
```
server/
├── routes.ts             # API endpoints for contact form
├── storage.ts            # In-memory storage interface
└── index.ts              # Express server setup
```

### Shared Schema
```
shared/
└── schema.ts             # Drizzle schema and Zod validation
```

## Data Model

### Contact Submissions
```typescript
{
  id: string (UUID)
  name: string
  email: string
  phone?: string (optional)
  interest: string (meditation | yoga | healing | immersion | retreat)
  message: string
  createdAt: Date
}
```

## Design System

### Color Palette (Spiritual Wellness Theme)
- **Primary (Sage Green)**: `145 30% 45%` - Calming, grounding
- **Background (Warm Cream)**: `40 20% 97%` - Soft, inviting
- **Foreground (Warm Brown)**: `30 8% 20%` - Natural, earthy
- **Accent (Lavender)**: `270 25% 88%` - Spiritual, peaceful
- **Muted (Neutral Beige)**: `40 18% 93%` - Subtle contrast

### Typography
- **Serif (Headlines)**: Cormorant Garamond - Elegant, refined
- **Sans (Body)**: Inter - Clean, readable
- Hero: 5xl-7xl, light weight
- Section headings: 3xl-4xl, light weight
- Body text: base-lg, normal weight

### Spacing System
- Section padding: py-12 md:py-20 (reduced for elegant, tighter layout)
- Container max-width: max-w-7xl
- Grid gaps: gap-6 md:gap-8 (optimized spacing)
- Consistent spacing rhythm throughout

## Key Features

### 1. Hero Section
- Full-viewport immersive experience with **parallax scrolling effect**
- Hero image scales and fades on scroll (scale: 1 → 0.8, opacity: 1 → 0)
- **Sequential fade-in animations** on page load (title, subtitle, buttons)
- Glass-morphism buttons with hover scale effects (105%)
- **Smooth bouncing scroll indicator** with infinite animation
- Smooth scroll to sections

### 2. Services Section
- Three service cards with icons and **staggered fade-in animations**
- Mindful Meditation, Transformative Yoga, Holistic Healing
- Hover elevation effects with smooth transitions
- Cards fade in from bottom with 0.1s delay between each
- Responsive grid layout with optimized spacing

### 3. Wellness Programs
- Alternating two-column layout with **slide-in animations**
- Images slide from alternating sides (left/right)
- Text content slides from opposite direction
- Program images with rounded corners and shadows
- Benefit lists with check icons
- CTA buttons with smooth transitions

### 4. About Section
- **Owner portrait** (Maya Chen) with scale-up animation
- Professional credentials: Certified Yoga Instructor, Mindfulness Coach, Reiki Master
- Circular portrait with elegant ring styling
- Founder story and philosophy with fade-in animation
- Centered content with max-width
- Elegant pull quote
- Personal narrative approach

### 5. Testimonials
- Three-column testimonial cards with **staggered fade-in animations**
- **Circular portrait images** for each testimonial (professionally styled)
- Client quotes in serif italic
- Name and journey duration
- Cards fade in from bottom with 0.15s delay between each
- Hover elevation effects

### 6. Contact Form
- Comprehensive form with validation
- Name, email, phone (optional), interest, message
- Loading states with spinner
- Success message display
- Error handling with toast notifications
- Two-column layout with contact info

### 7. Navigation
- Sticky header with **ultra-smooth color transitions** (500ms ease-in-out)
- Background and text colors change elegantly on scroll (trigger: 100px)
- Logo transitions from white to dark color
- All navigation buttons have smooth color transitions
- Mobile hamburger menu with full-screen overlay
- Desktop horizontal navigation
- Smooth scroll to sections

### 8. Scroll-to-Top Button
- **Floating button** appears when scrolled past 400px
- Positioned at bottom-right with elegant fade-in animation
- Circular design with shadow and hover scale effect (110%)
- Smooth scroll to top on click
- Auto-hides when at top of page

### 9. Admin Dashboard
- View all contact form submissions at `/admin`
- Beautiful card layout for each submission
- Displays: name, email, phone, interest badge, message, timestamp
- Clickable email and phone links
- Formatted timestamps with full date and time
- Hover effects on submission cards
- Empty state with icon when no submissions
- Accessible via subtle link in footer

## API Endpoints

### POST /api/contact
Submit a contact form inquiry
```json
{
  "name": "string",
  "email": "string",
  "phone": "string?",
  "interest": "meditation | yoga | healing | immersion | retreat",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for reaching out. We'll be in touch soon.",
  "data": { ...contactSubmission }
}
```

### GET /api/contact
Retrieve all contact submissions (admin dashboard use)

**Response:**
```json
[
  {
    "id": "uuid",
    "name": "string",
    "email": "string",
    "phone": "string?",
    "interest": "string",
    "message": "string",
    "createdAt": "ISO date string"
  }
]
```

## User Workflows

### Primary User Journey
1. Land on hero section with calming imagery
2. Read philosophy and mission
3. Explore services and programs
4. Learn about the founder's journey
5. Read client testimonials
6. Fill out contact form to begin journey
7. Receive confirmation message

## Testing
All interactive elements have data-testid attributes for automated testing:
- Navigation links and buttons
- Hero CTAs
- Service cards
- Program images and CTAs
- Testimonial cards
- Contact form inputs
- Footer links and social media

## Development Notes

### Running the Application
```bash
npm run dev
```
Server runs on port 5000 with Vite dev server for frontend.

### Key Dependencies
- React 18 with TypeScript
- Tailwind CSS for styling
- Shadcn UI component library
- React Hook Form + Zod for form validation
- TanStack Query for data fetching
- Wouter for client-side routing
- Lucide React for icons
- **Framer Motion** for advanced animations (parallax, fade-ins, slide-ins)

### Design Guidelines
See `design_guidelines.md` for comprehensive design system documentation including:
- Typography hierarchy
- Layout and spacing primitives
- Component patterns
- Image requirements
- Animation guidelines
- Accessibility standards

## Recent Enhancements (Latest Update)
✅ **Hero Parallax Scrolling**: Background scales and content fades as user scrolls
✅ **Smooth Navbar Transitions**: Ultra-smooth 500ms color transitions on scroll
✅ **Scroll-to-Top Button**: Floating button with elegant animations
✅ **Admin Dashboard**: View all contact submissions at `/admin`
✅ **Owner Details**: Professional portrait with credentials in About section
✅ **Testimonial Images**: Circular portraits for all testimonials
✅ **Reduced Spacing**: Tighter, more elegant layout (py-12 md:py-20)
✅ **Enhanced Animations**: Framer Motion throughout (fade-ins, slide-ins, staggered delays)
✅ **Button Hover Effects**: Subtle scale effects (105-110%)
✅ **Mobile Optimization**: Responsive text sizes and spacing

## Future Enhancements
- Blog section for wellness articles
- Booking system for sessions and classes
- Meditation timer or guided audio player
- Resource library with downloadable content
- Newsletter email integration with email service (Mailchimp/SendGrid)
- Google Analytics integration
- PostgreSQL database for persistence
- Admin authentication and security
- Email notifications for new submissions (SendGrid/Resend)
- Advanced admin features (edit/delete submissions, export to CSV)

## Notes
- Currently using in-memory storage (data resets on server restart)
- Contact form submissions are stored temporarily
- All images are AI-generated for MVP
- Dark mode fully supported with theme toggle capability
- Responsive design tested across breakpoints
- Smooth scroll behavior enabled globally
- SEO meta tags included in HTML
