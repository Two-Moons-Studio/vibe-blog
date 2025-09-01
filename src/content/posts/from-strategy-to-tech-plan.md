---
title: "From Strategy to Technical Plan"
date: 2025-08-31T14:30:00Z
excerpt: "The step that separates successful vibe coders from abandoned projects."
tags: ["strategy", "planning", "technical"]
draft: false
---

If you follow successful vibe coders on Reddit, you'll notice a pattern - they all spend time on technical planning before building. It's the difference between shipping something that works and having a folder full of half-finished attempts. I was lucky enough to learn this early from watching others fail without it.

When I built my first editorial site (which I later cloned to start this blog - story for another day), the tech planning step took maybe 30 minutes but saved me literally days of wrong turns. Here's how to do it right.

## ENTER PLAN MODE

Claude has two modes: planning and building. Planning is where Claude thinks through the approach without writing code. It's basically asking Claude to be your architect before being your builder.

Quick tip: You can toggle between modes with `/mode` or explicitly tell Claude to enter plan mode.

In your project folder with Claude running:

```
Can you read my STRATEGY.md and create a technical plan? Put Claude in plan mode.

Requirements:
- Use vanilla HTML/CSS/JS unless a framework provides massive simplification
- Simplest solution that works
- Can ship within a week
- Easy to maintain (I need to update this myself in 6 months without remembering anything)
- No unnecessary frameworks or dependencies

Write this as TECH-PLAN.md
```

Claude will think through:
- What technology to use (and why)
- Project structure
- Key components needed
- Deployment approach

<span class="context-label">PRO TIP</span> <span class="context-text">If you have Context7 MCP installed (we'll cover this in a future article), Claude can pull in documentation for any framework it suggests, making the plan even more detailed.</span>

## WHAT A TECH PLAN LOOKS LIKE

Here's the actual TECH-PLAN.md for this blog (simplified):

```markdown
# Technical Plan - Vibe Blog

## Stack Decision
**Astro** - Static site generator
- Markdown content (easy to write)
- Fast performance (static HTML)
- Simple deployment
- Vanilla JS for any interactivity

## Structure
/src
  /content/posts - Blog posts in markdown
  /components - Reusable pieces (Header, Footer)
  /pages - Routes
  /styles - Design tokens

## Key Features
1. Content collections for posts
2. Dynamic routing for blog posts
3. Tag system for organization
4. RSS feed for subscribers

## Not Including
- Comments (can add later with service)
- Search (not needed under 50 posts)
- User accounts (unnecessary complexity)

## Deployment
- GitHub for code
- Vercel for hosting (auto-deploys)
- Custom domain when ready
```

## OUR PROJECT'S TECH STACK EXPLAINED

For those who've never heard these terms before, here's what Claude chose and why:

**Astro** - Think of it as WordPress but for developers. It turns your writing (in Markdown files) into a website automatically.

**Markdown** - The simplest way to write formatted text. Like a Word doc but in plain text that never breaks.

**Vanilla JavaScript** - Just regular JavaScript, no fancy frameworks. Like speaking English instead of lawyer-speak.

**GitHub** - Where your code lives online. Like Google Drive but for code. Free backup forever.

**Vercel** - Takes your GitHub code and makes it a real website. Updates automatically when you change things.

The beauty? No database to manage, no server to maintain, no complex setup. Just files that turn into a website.

## WANT TO UNDERSTAND MORE?

If you're curious about the technical choices, here are two prompts that help:

```
Can you explain this tech plan to me like I'm a PM who's never coded? 
What are the trade-offs and why these choices?
```

Or for a sanity check:

```
Review this tech plan critically. What could go wrong? 
What am I not thinking about? Be honest.
```

## THE PLAN BECOMES REALITY

Your TECH-PLAN.md isn't just documentation - it's Claude's blueprint. Every future session, Claude reads this and knows exactly what to build with.

Once your tech plan is written and saved as TECH-PLAN.md, tell Claude:

```
Tech plan looks good. Exit plan mode and let's start building.
```

Time to make this real.

[Next: The AI Todo System →](/posts/ai-todo-system)