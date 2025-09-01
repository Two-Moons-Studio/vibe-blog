# Vibe Blog - Zero to Vibe Coder

Simple, elegant blog for documenting the designer-to-builder journey. Built with editorial sophistication, maintained with ease.

## 📚 Start Here - Required Reading
When starting any session, especially for content creation:
1. **Read `CONTENT-GUIDE.md`** - Voice, strategy, and writing guidelines
2. **Check `TODO.md`** - Current priorities and tasks
3. **Review `CONTENT-BACKLOG.md`** - When selecting articles to write

For technical work, this file (CLAUDE.md) has everything you need.

## Commands (Slash Commands)

### `/vibe-start`
Check status, start dev server, show current work:
1. Run `npm run dev` to start development
2. Show recent posts and current status
3. Check for any pending tasks

### `/vibe-post` 
Guided post creation workflow:
1. ASK USER: "What's the post title?"
2. ASK USER: "Brief excerpt (1-2 sentences)?"
3. ASK USER: "Any tags for this post?"
4. Generate slug from title (lowercase, dash-separated)
5. Create markdown file in `/src/content/posts/`
6. Use today's date automatically
7. Set up frontmatter with 6-part structure template
8. CONFIRM: "Post created at /posts/[slug] - ready to write!"

### `/vibe-deploy`
Build and deploy workflow:
1. Run `npm run build` to verify everything works
2. Git add, commit, and push to main
3. Confirm deployment to Vercel

## Stack
- **Astro 5.x** - Static site generator
- **Content Collections** - Markdown blog posts
- **Vercel** - Hosting and auto-deploy
- **Buttondown** - Newsletter (when ready)

## Architecture
```
src/
├── content/posts/     # Markdown blog posts
├── components/        # Header, Footer, PostPreview
├── layouts/           # Layout.astro (main wrapper)
├── pages/             # Routes (index, archive, about, subscribe, posts/[slug])
└── styles/           # tokens.css + global.css
```

## Post Structure (6-Part Format)
Every post follows this template:
1. **The Setup** - What you were trying to do
2. **The Struggle** - What went wrong/was confusing
3. **The Solution** - What actually worked
4. **The Designer Take** - Design perspective
5. **The PM Take** - Product/business perspective  
6. **Reality Check** - Time, cost, sanity scores

## Design System
- **Colors**: Black text, cream background, sage accent
- **Typography**: Lora (serif) + Inter (sans) 
- **Layout**: Single column, max 680px width
- **Spacing**: Generous editorial whitespace
- **Components**: 4 total (Header, Footer, PostPreview, Layout)

## Content Guidelines
- **Follow CONTENT-GUIDE.md** for comprehensive voice, strategy, and formatting
- **Bite-sized posts** (300-800 words initially)
- **Honest documentation** - struggles and wins equally
- **No BS tone** - direct, helpful, real
- **Chef Claude metaphor** - Claude as chef, user making dinner not becoming chef

### CRITICAL: Avoid "Claude Voice" in Content
See CONTENT-GUIDE.md Section 3 for detailed voice guidelines and examples.
Key points:
- No punchy marketing language
- Avoid repetitive structures
- Write naturally, like explaining to a friend
- Slightly messy is better than marketing polish

## IMPORTANT: Todo Management
- ALWAYS update TODO.md when completing tasks or finding new ones
- TODO.md is the source of truth (not just in-memory todos)
- Update the "Next Steps" section in TODO.md immediately when tasks change

## Workflow Principles
- Explain planned changes before making them
- Wait for "go ahead" or similar confirmation before proceeding
- Show options when multiple approaches exist
- NEVER commit without explicit user request
- Ask for feedback/approval on significant changes

## Git Workflow
1. Ensure you're on `develop` branch: `git checkout develop`
2. Make changes and test locally
3. Commit and push to `develop`
4. Create PR to merge into `main` when ready for production
5. NEVER commit directly to `main` unless emergency hotfix

## Workflows

### Adding New Posts
1. Create markdown file in `/src/content/posts/[slug].md`
2. Add frontmatter (title, date, excerpt, tags, draft: false)
3. Follow voice guidelines in CONTENT-GUIDE.md
4. Commit and push to deploy

### Zero to Ship Page
- Main page: `/src/pages/zero-to-ship.astro`
- 4 modules with expandable content
- Path selector for PM/Designer/Everyone (PM active, others coming soon)
- Progress tracking in localStorage
- Editorial design with generous whitespace

### Future Features (Phase 2+)
- Tag-based guide collections
- "Buy me coffee" donation button  
- Premium content for supporters
- Search functionality (if needed)

## Rules
✅ Check existing first - always look before creating
✅ Use tokens only - no hardcoded values ever
✅ Update TODO.md - the source of truth for tasks
✅ Ask for approval - explain planned changes, wait for "go ahead"
✅ Show options when multiple approaches exist
✅ Editorial design - extreme whitespace
✅ One column layout - no complex grids
✅ **Update design system page** - When making any visual design changes, ALWAYS update /design-system page to reflect the changes
❌ No dark mode (not needed)
❌ NEVER revert entire files - fix specific errors only
❌ NEVER use git checkout on files with uncommitted work
❌ NEVER include Claude attribution in commits (no "Generated with Claude Code" or Co-Authored-By)
❌ No complex features initially - resist feature creep
❌ No React/Vue (Astro only)
❌ No database (markdown files only)

## Branch Strategy
- **main** - Production (auto-deploys to live site)
- **develop** - Development branch for testing changes
- ALWAYS work on `develop` branch unless fixing critical production issues
- Create PR from develop → main when ready to deploy

## Key Documentation Files
- **`CLAUDE.md`** - This file (AI assistant instructions)
- **`CONTENT-GUIDE.md`** - Content strategy, voice, Zero to Ship path
- **`CONTENT-BACKLOG.md`** - Article pipeline and ideas
- **`TODO.md`** - Active tasks and project status
- **`PROJECT-OVERVIEW.md`** - Quick project summary

## Key Technical Files
- `astro.config.mjs` - Site config, sitemap, domain
- `src/content/config.ts` - Post schema definition
- `src/styles/tokens.css` - All design values
- `src/pages/zero-to-ship.astro` - Learning path page

## Quick Reference
```bash
# Start development
npm run dev

# Build for production  
npm run build

# Preview build
npm run preview
```

## Domain Setup (When Ready)
1. Update `site` URL in `astro.config.mjs`
2. Configure domain in Vercel dashboard
3. Update robots.txt if needed
4. Submit to Google Search Console

---

*Built for sustainable, long-term content creation. Simple enough to maintain forever, sophisticated enough to grow with your audience.*