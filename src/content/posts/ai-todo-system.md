---
title: "The AI Todo System: Cross-Session Memory"
date: 2025-08-31T15:00:00Z
excerpt: "How to keep Claude in sync across sessions with smart todo management."
tags: ["workflow", "planning", "ai-tools"]
draft: false
---

You just finished your tech plan. At this point, Claude usually gets excited and wants to immediately start building everything - setting up the project, creating components, configuring deployment, all at once.

I've learned to interrupt it here. Instead of letting Claude run ahead, I ask it to break everything down into todos first. That way I can actually see what needs to be done and pick what to work on.

```
Before we build anything, create a todo list based on our TECH-PLAN.md. 
I want to see everything broken down so I can decide what to work on.
```

This keeps you in control of the pace and direction.

## WHY AI TODOS ARE DIFFERENT

The main thing about todos with Claude is that they carry over between sessions. Since Claude starts fresh each time, when you come back tomorrow and say "read TODO.md", it can pick up where you left off. The todos tell it what's already built, what you're working on, and what comes next.

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

## TODO.MD: YOUR BACKUP

I also create a TODO.md file that mirrors Claude's todos but with more detail:

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

Claude reads this every session, and I update it as I work. It's more reliable than the built-in todo tool.

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

Each session builds on the last without having to re-explain everything.

## BREAKING WORK INTO RESUMABLE CHUNKS

I try to work in 30-minute chunks that I could hand off to someone else (or myself next week). Each chunk needs:

1. **Clear starting point** - "Continue building the blog, currently working on homepage"
2. **Specific outcome** - "Homepage shows 5 recent posts"
3. **Save point** - Commit before context runs out

For example, "Create the homepage component that displays recent posts" is way better than "Work on the blog" because future-you knows exactly what to do.

With this todo system, you can actually build something across multiple sessions without losing track.

[Next: Setting Claude Up for Success →](/posts/setting-claude-up-for-success)