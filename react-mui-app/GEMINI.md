# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**React Development:**
```bash
npm start          # Start development server on localhost:3000
npm test           # Run tests in interactive watch mode
npm run build      # Create production build in ./build
npm test -- --testNamePattern="ComponentName"  # Run specific test
npm test -- --watchAll=false  # Run tests once without watch mode
```

**AI-Assisted Development:**
```bash
# Headless Gemini for React development tasks
gemini -p "prompt"                    # Basic headless prompt execution
gemini -p "Review this React component for best practices: $(cat src/pages/ProblemsPage.js)"
gemini -p "Generate MUI component with these requirements: interactive accordion with syntax highlighting"
gemini -p "Optimize this React code for performance: $(cat src/App.js)"

# Command line tools for React project management
find src -name "*.js" -exec eslint {} \;     # Lint all JS files
grep -r "useState" src/                      # Find state usage patterns
wc -l src/**/*.js                           # Count lines in components
```

## Application Architecture

This is a Create React App-based educational interface for LLM fundamentals course materials. The app serves as an interactive wrapper around course content stored in markdown files in the parent directory.

**Core Design Pattern:**
- Single-page application with client-side routing (React Router v7)
- Material-UI component library for consistent design system
- Static data patterns with hardcoded content arrays in each page component
- No external APIs or backend dependencies

**Key Components:**

**App.js** - Root component with routing and navigation
- Custom `NavigationTabs` component integrates MUI Tabs with React Router Link
- Four main routes: Home (/) | Keywords (/keywords) | Problems (/problems) | Techniques (/techniques)
- Consistent layout: AppBar with navigation + routed page content

**Page Components Structure:**
- All pages follow identical MUI patterns: `Container maxWidth="lg"` + `Typography` headers
- Each page contains large static data arrays defining course content
- **ProblemsPage.js**: Most complex component with accordion UI, syntax highlighting, and HTML export functionality
- **KeywordsPage.js & TechniquesPage.js**: Card-based layouts displaying educational content
- **HomePage.js**: Simple centered "42" display

**Data Architecture:**
- Course content is embedded as JavaScript objects/arrays within components (not imported from external files)
- Problems data contains: id, title, description, code examples, prompting techniques, basic vs improved prompts
- Keywords/Techniques follow similar structured data patterns with definitions and examples

**Key Features:**
- **Download Functionality**: ProblemsPage generates styled HTML files for offline use (individual problems or bulk export)
- **Syntax Highlighting**: Uses react-syntax-highlighter with "tomorrow" theme for code blocks
- **Interactive Elements**: Accordion expansions, collapsible solutions, color-coded technique chips
- **Responsive Design**: MUI Grid system and breakpoints for mobile compatibility

## Technology Stack

- **React 19.1.1** - Latest React with concurrent features
- **Material-UI 7.x** - Complete design system (@mui/material, @mui/icons-material)
- **React Router 7.x** - Client-side routing with latest Link/useLocation patterns
- **React Syntax Highlighter** - Prism-based code display with theming
- **Emotion** - CSS-in-JS styling (MUI dependency)
- **Create React App 5.0.1** - Build toolchain and development server

## Development Notes

**Component Patterns:**
- Functional components with hooks (useState for local state, useLocation for routing)
- MUI sx prop pattern for styling instead of CSS classes
- Consistent Container/Typography/Box layout structure across all pages

**Data Management:**
- No state management library needed (local component state only)
- Static course content embedded directly in components
- Parent directory contains markdown source files but React app doesn't dynamically import them

**Testing Setup:**
- Jest + React Testing Library configured via Create React App
- Test files follow .test.js naming convention
- Testing utilities: @testing-library/react, @testing-library/jest-dom, @testing-library/user-event

**Build & Deployment:**
- Standard Create React App build process creates static files for deployment
- No environment variables or runtime configuration needed
- All assets and dependencies bundled into ./build directory