# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Start development server at http://localhost:3000
- `npm test` - Run tests in interactive watch mode
- `npm run build` - Build production bundle to `build/` folder
- `npm run eject` - Eject from Create React App (one-way operation)

## Project Architecture

This is a React TypeScript personal portfolio website built with Create React App. The site showcases music projects with interactive teaser pages and timeline navigation.

### Key Architecture Components

**Main Application Structure:**
- Single-page application using React Router with multiple routes
- Homepage displays timeline of projects with interactive elements
- Dynamic teaser pages for individual music projects (MRC, RIS, DIS, LAL, HRN)

**Data-Driven Design:**
- Teaser page content is centralized in `src/data/teaserPages.ts`
- Each project has structured data including gradients, release dates, track listings, word banks, and album art
- `getTeaserPageData()` function retrieves project data by ID

**Component Organization:**
- `src/components/` - Main UI components (Navbar, Banner, Timeline, TeaserPage, etc.)
- `src/hooks/` - Custom React hooks (useUserInteraction)
- `src/javascript/` - Legacy JavaScript modules for animations and interactions
- `src/css/` - Styling organized by component/feature

**Routing Structure:**
- `/` - Homepage with StarContainer, Timeline, and Tomorrow sections
- `/teaser-pages/{id}` - Dynamic routes for project teaser pages (mrc, ris, dis, lal, hrn)

**Asset Management:**
- `public/assets/` - Fonts, images, and static media
- `public/gameplan-assets/` - Project-specific assets organized by album ID
- Assets referenced via absolute paths in data configuration

### Development Notes

- Uses TypeScript with strict mode enabled
- CSS organization follows component-based structure
- Legacy JavaScript files provide animation and interaction functionality
- Teaser pages use gradient backgrounds and custom fonts defined in data layer

## File Structure Highlights

- `src/App.tsx` - Main router and page components
- `src/data/teaserPages.ts` - Central data configuration for all projects
- `src/components/TeaserPage.tsx` - Reusable component for project showcase pages
- `public/assets/` and `public/gameplan-assets/` - Static assets organized by project