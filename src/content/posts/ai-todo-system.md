---
title: "The AI Todo System: Cross-Session Memory"
date: 2025-08-31T15:00:00Z
excerpt: "How to keep Claude in sync across sessions with smart todo management."
tags: ["workflow", "planning", "ai-tools"]
draft: false
---

You just finished your tech plan. Claude's excited - it immediately wants to start building everything right now. "I'll set up the project! Create the components! Configure the deployment!" 

Stop. This is where most people lose control of their project.

Instead, interrupt Claude and say:

```
Before we build anything, create a todo list based on our TECH-PLAN.md. 
I want to see everything broken down so I can decide what to work on.
```

This changes everything. Now you're directing, not just following along.

## WHY AI TODOS ARE DIFFERENT

Claude starts fresh every session. Your todos are the bridge. When you come back tomorrow and say "read TODO.md", Claude instantly knows:
- What's already built
- What you're working on
- What comes next
- Why certain decisions were made

It's your project's memory card.

## THE TODOWRITE TOOL

Claude has a built-in todo system. You'll see it automatically create and update todos as you work. But you control when and how:

```
Create a todo list for building this blog based on our TECH-PLAN.md
```

Claude will break down your project:
```
1. Set up Astro project
2. Create layout components
3. Set up content collections
4. Build homepage
5. Create post template
6. Add styling
7. Deploy to Vercel
```

<span class="context-label">HEADS UP</span> <span class="context-text">The TodoWrite tool sometimes overwrites the list. I always keep a TODO.md file as backup.</span>

## TODO.MD: YOUR BACKUP BRAIN

Create a TODO.md file that mirrors Claude's todos but with more detail:

```markdown
# TODO - Vibe Blog

## Current Sprint
- [x] Set up Astro project with blog template
- [x] Create Header component with navigation
- [ ] Set up content collections for posts
- [ ] Create homepage with recent posts

## Next Up
- [ ] Design tokens for consistent styling
- [ ] Post template with frontmatter
- [ ] Tag system for organization

## Backlog
- [ ] RSS feed
- [ ] Email signup
- [ ] Custom domain setup
```

This becomes your source of truth. Claude reads it every session. You update it as you work.

## THE CROSS-SESSION WORKFLOW

**Session 1:**
```
Read my STRATEGY.md and TECH-PLAN.md. 
Let's start building. First todo: Set up Astro project.
```

**Session 2 (tomorrow):**
```
Read my TODO.md. Continue where we left off.
I see we completed Astro setup. Let's do the header component.
```

**Session 3 (weekend):**
```
Check TODO.md. What's the next priority?
Let's tackle the content collections.
```

Each session builds on the last. No repetition. No forgotten work.

## BREAKING WORK INTO RESUMABLE CHUNKS

Work in 30-minute chunks that could be handed off to someone else (or future you). Each chunk should:

1. **Start with context** - "Continue building the blog, currently working on homepage"
2. **Have a clear outcome** - "Homepage shows 5 recent posts"
3. **End with a commit** - Save progress before context runs out

Bad chunk: "Work on the blog"
Good chunk: "Create the homepage component that displays recent posts"

You now have a memory system that survives between sessions. Next, let's set up Claude to use this system perfectly.

[Next: Setting Claude Up for Success →](/posts/setting-claude-up-for-success)