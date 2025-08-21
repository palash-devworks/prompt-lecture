# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This repository contains course materials for a 1-hour LLM fundamentals and prompt engineering session designed for fresh graduate engineers. The materials focus on building practical intuition and judgment for using AI tools effectively in daily engineering work.

## File Structure and Content

### Core Course Materials
- **llm-keywords.md**: Definitions of 10 essential LLM terms (tokens, context window, prompts, completions, training, inference, embeddings, RAG, agents, guardrails) with engineering-focused explanations
- **prompting-techniques.md**: 7 practical prompting techniques with engineering use cases, templates, and real-world scenarios
- **exercise-problems.md**: 10 progressive engineering problems designed to demonstrate the effectiveness of proper prompting techniques

### Content Architecture

The materials follow a specific pedagogical structure:
1. **Keywords**: Simple definitions focusing on practical implications for engineers
2. **Techniques**: Actionable methods with templates and boundary conditions  
3. **Exercises**: Realistic engineering scenarios with code snippets, designed to show clear improvement when techniques are applied

## Content Guidelines

### Target Audience
All content is written for fresh graduate engineers with full-stack experience, focusing on:
- Node.js/React applications
- Database optimization and design
- API development and security
- System architecture decisions
- Code review and debugging scenarios

### Writing Style
- Concise, practical explanations without academic jargon
- Engineering analogies (comparing AI concepts to familiar programming concepts)
- Specific, actionable guidance over theoretical explanations
- Focus on "why engineers care" rather than technical details

### Exercise Design Principles
Problems are specifically crafted to:
- Demonstrate dramatic quality differences between basic and structured prompts
- Include realistic code snippets and engineering contexts
- Cover the full spectrum of engineering work: debugging, architecture, documentation, research
- Be completable in ~1.5 minutes each while showing clear technique benefits

## Content Editing Guidelines

When modifying course materials:
- Maintain the practical, no-nonsense tone throughout
- Ensure all code examples are production-quality and realistic
- Keep explanations focused on immediate applicability
- Test that exercise problems actually demonstrate technique effectiveness
- Preserve the progressive difficulty structure (easy → medium → hard)

## Session Structure Support

The materials support a specific 60-minute session timeline:
- 0-10 min: Keyword overview
- 10-25 min: Exercise round 1 (baseline prompting)
- 25-30 min: Technique instruction  
- 30-45 min: Exercise round 2 (enhanced prompting)
- 45-60 min: Q&A and assessment

Any content changes should preserve this timing structure and learning progression.

## Development Environment

### React Application Structure
The repository includes a React application (`react-mui-app/`) built with Create React App that serves as an interactive interface for the course materials.

**Key Technologies:**
- React 19.1.1 with functional components and hooks
- Material-UI (MUI) 7.x for component library and theming
- React Router 7.x for client-side routing
- React Syntax Highlighter for code display
- Standard Create React App toolchain

**Application Architecture:**
- `src/App.js` - Main app with router setup and navigation tabs
- `src/pages/` - Page components following consistent patterns:
  - `HomePage.js` - Simple centered "42" display
  - `KeywordsPage.js` - Displays LLM terminology from `llm-keywords.md`
  - `TechniquesPage.js` - Interactive techniques from `prompting-techniques.md`
  - `ProblemsPage.js` - Complex accordion interface with download functionality for exercises
- Navigation uses MUI Tabs component with React Router Link integration
- Consistent MUI theming and responsive Container layout throughout

### Common Development Commands

**React Application (run from `react-mui-app/` directory):**
```bash
npm start          # Start development server (localhost:3000)
npm test           # Run test suite in interactive mode
npm run build      # Create production build
```

**File Management:**
- Core course content is in markdown files at repository root
- React app dynamically imports and displays this content
- `ProblemsPage.js` includes sophisticated HTML download functionality for individual and bulk problem exports

### Key Development Notes

- Problems data is hardcoded in `ProblemsPage.js` with structured objects containing code examples, techniques, and prompts
- Download functionality generates styled HTML files for offline use
- Navigation state management uses React Router's `useLocation` hook
- All pages follow consistent MUI Container + Typography patterns
- Code syntax highlighting uses Prism with "tomorrow" theme