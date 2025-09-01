# Vibe Code Moonlighter

A blog for product managers and designers learning to build with AI assistance. Live at [vibecodemoonlighter.com](https://vibecodemoonlighter.com).

## What This Is

An editorial-style blog documenting the journey from Product Director to builder using Claude and modern AI tools. Features the "Zero to Ship" learning path - a structured curriculum for non-developers to start building real products in 4 weeks.

## Core Philosophy

**Vibe Coding**: Using AI to build when you don't know how to code. You're not trying to become a developer – you just want your idea to exist. Think of Claude as a professional chef helping you make dinner, not teaching you to become a chef.

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Content**: Markdown with content collections
- **Styling**: Editorial design system with typography-first approach
- **Hosting**: Vercel (auto-deploy from main branch)
- **AI Tools**: Claude Desktop + Claude Code workflows

## Project Structure

```
src/
├── content/posts/     # Blog posts (12 published, 40+ planned)
├── components/        # Reusable Astro components
├── layouts/           # Page layouts
├── pages/             # Routes (index, archive, about, zero-to-ship)
└── styles/           # Design tokens and global styles
```

## Key Documentation

- **`CLAUDE.md`** - AI assistant instructions, workflows, technical details
- **`CONTENT-GUIDE.md`** - Content strategy, voice guidelines, learning path
- **`CONTENT-BACKLOG.md`** - Article pipeline (47+ post ideas)
- **`TODO.md`** - Active tasks and project status

## Features

### Current
- Zero to Ship learning path with 4 modules
- 12 published articles across setup, strategy, and building topics
- Editorial design with generous whitespace
- Tag-based content organization
- Mobile-responsive design

### Planned
- Newsletter integration (Buttondown)
- Additional learning modules
- Community features
- Progress tracking system

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Content Guidelines

- **Audience**: PMs, designers, non-technical builders
- **Voice**: Conversational, honest about struggles, "it's OK to be dumb" energy
- **Length**: 300-800 words per article
- **Format**: Practical, bite-sized lessons with immediate application

## Deployment

- **Production**: Pushes to `main` auto-deploy to Vercel
- **Domain**: vibecodemoonlighter.com
- **Analytics**: Vercel Analytics (planned)

## Contributing

This is a personal blog project, but if you're interested in the approach or want to discuss vibe coding, feel free to reach out through the site.

---

*A project by a Product Director learning to build in public*