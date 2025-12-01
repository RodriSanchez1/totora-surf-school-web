# Totora Surf School & Hostel - Project Brief

## Project Overview
Totora Surf School & Hostel is a landing page website for a surf school and hostel located in Huanchaco, Peru. Huanchaco is known as the birthplace of the traditional "caballito de totora" (totora reed boats), making it a culturally significant surf destination.

## Project Details

### Name
Totora Surf School & Hostel Landing Page

### Location
Huanchaco, Peru

### Technology Stack
- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.x
- **Styling**: Tailwind CSS (via CDN)
- **Icons**: Lucide React 0.554.0
- **Internationalization**: React Intl 6.6.8
- **Carousel**: Embla Carousel React (for image slideshows)

### Project Structure
```
totora-surf-school-web/
├── components/
│   ├── layout/         # Header, Footer
│   ├── sections/       # Hero, About, Services, Testimonials, Features, CallToAction
│   ├── shared/         # LanguageSelector
│   └── ui/             # Button, Logo, ImageCarousel, SurfTripCard, EquipmentCard, VideoServiceCard
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── AboutPage.tsx   # About Us page
│   ├── HostelPage.tsx  # Hostel information page
│   └── SurfSchoolPage.tsx  # Surf School information page
├── i18n/               # Internationalization files
├── App.tsx             # Main application component with routing
├── index.tsx           # Application entry point
├── index.html          # HTML template
├── constants.ts        # Application constants (routes, URLs, contact)
├── metadata.json       # Project metadata
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite build configuration
```

### Application Architecture
Multi-page application with React Router:

#### Routes
- **/** - Home (landing page with Hero, About summary, Services, Testimonials, Features, CTA)
- **/about** - About Us page (expanded history, values, team)
- **/hostel** - Hostel page (rooms, amenities, pricing)
- **/surf-school** - Surf School page (surf trips carousel, equipment rental, class levels with photo/video options, video services, features, caballito de totora experience)

#### Navigation
- Header with React Router Links to main pages
- Footer with internal routing and external links
- Mobile-responsive hamburger menu

#### Shared Components
1. **Header** - Fixed navigation with language selector and booking CTA
2. **Footer** - Site links, contact info, and social media
3. **Button** - Supports both internal routing (`to` prop) and external links (`href` prop)

### Design System

#### Brand Colors
- **Totora Dark**: `#004E86` (Deep Blue)
- **Totora Light**: `#4AA0D8` (Light/Vibrant Blue)
- **Totora Yellow**: `#FECB46` (Gold/Yellow)
- **Totora Cream**: `#F9F9F7` (Off-white background)

#### Typography
- **Font Family**: Inter (weights: 300, 400, 600, 700, 800)

### Internationalization
The application supports multiple languages through React Intl:
- **Spanish (es)** - Primary language (complete translations)
- **English (en-US)** - Complete translations for all pages
- **French (fr)** - Navigation only (pages use fallback)
- **Portuguese (pt-BR)** - Navigation only (pages use fallback)

Language context provided via `LanguageProvider` component wrapping the entire app.

### Development

#### Prerequisites
- Node.js

#### Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

#### Environment Variables
- `GEMINI_API_KEY` - Required for AI features (set in `.env.local`)

### SEO Information
- **Title**: Totora Surf School & Hostel - Huanchaco, Peru
- **Description**: Aprende a surfear en la cuna del caballito de totora. Clases de surf, hostel frente al mar y surf trips en Huanchaco, Perú.
- **Language**: Spanish (es)

### Current Status
- Version: 0.0.0
- Git Branch: main
- Recent Activity: Redesigned Surf School Classes section with improved pricing structure
  - **UI/UX Improvements**:
    - Redesigned Levels section from alternating layout to modern 3-column grid of cards
    - Added expandable accordion for package pricing within each level card
    - Implemented special badge highlighting video analysis service for intermediate/advanced levels
    - Improved visual hierarchy with prominent base price display (100 soles)
  - **Pricing Structure Updates**:
    - Unified base price: 100 soles per class (all levels)
    - Class duration updated: 1:30 hours (all levels)
    - Optional add-ons: Photos (+15 soles), Videos (+40 soles)
    - Package discounts: 5 classes (10% off), 10 classes (15% off), 15 classes (20% off)
    - Video service for intermediate/advanced includes technical wave analysis
  - **i18n Updates**: Added 25+ new translation keys for pricing and packages in 4 languages (ES, EN, PT-BR, FR)
  - **Components Modified**: SurfSchoolPage.tsx - Complete redesign of Levels section
  - **Previous Enhancements**:
    - UI Components: ImageCarousel, SurfTripCard, EquipmentCard, VideoServiceCard, VideoBackground, WaveDivider
    - Sections: Surf Trips, Equipment Rental, Video Services
    - Dependencies: embla-carousel-react

### Key Differentiators
- Located in Huanchaco, the birthplace of traditional totora reed surfing
- Combines surf school with hostel accommodation
- Oceanfront location
- Offers surf trips in addition to lessons

### Target Audience
- Surf enthusiasts
- Travelers visiting Peru
- People interested in traditional surf culture
- Spanish and international tourists

### Business Offerings
1. **Surf Lessons** - Classes for all levels (beginner, intermediate, advanced)
   - Duration: 1:30 hours per class
   - Price: 100 soles per individual class
   - Packages: 5 classes (450 soles), 10 classes (850 soles), 15 classes (1,200 soles)
   - Optional add-ons: Photos (+15 soles), Videos (+40 soles)
   - Special: Video analysis service for intermediate/advanced (included in video option)
2. **Surf Trips** - Organized trips to world-class waves (Chicama, Pacasmayo, Puemape, Lobitos)
3. **Equipment Rental** - High-quality surfboards and wetsuits
4. **Video Services** - Professional HD camera recording, drone footage, and technical surf analysis
5. **Hostel Accommodation** - Oceanfront lodging
6. **Cultural Experience** - Caballito de totora (traditional reed boat) heritage experiences
