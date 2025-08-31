---
title: "From Strategy to Technical Plan"
date: 2025-08-31T14:30:00Z
excerpt: "Turn your PM brain off. Let Claude be the architect."
tags: ["strategy", "planning", "technical"]
draft: false
---

You have a strategy. You know what you're building. Now comes the part where most non-devs freeze - the technical decisions. Here's the secret: Claude makes better technical decisions than you do.

## ENTER PLAN MODE

Claude has two modes: planning and building. Planning is where Claude thinks through the approach without writing code. This is where the magic happens.

In your project folder with Claude running:

```
Can you read my STRATEGY.md and create a technical plan? Put Claude in plan mode.

Requirements:
- Simplest solution that works
- No unnecessary frameworks
- Can ship in one day
- Easy to maintain

Write this as TECH-PLAN.md
```

Claude will think through:
- What technology to use (and why)
- Project structure
- Key components needed
- Deployment approach

## PROMPTS THAT PREVENT OVERENGINEERING

Claude loves to impress you. Left unchecked, it'll suggest React, TypeScript, testing frameworks, and a dozen dependencies. Here are prompts that keep it simple:

**The "No Framework" Prompt:**
```
Use vanilla HTML/CSS/JS unless a framework provides massive simplification
```

**The "Ship Today" Prompt:**
```
What's the simplest version that could go live today?
```

**The "Maintenance Reality" Prompt:**
```
I need to be able to update this myself in 6 months without remembering anything
```

<span class="context-label">HARD TRUTH</span> <span class="context-text">Every framework you add is a future Google search when something breaks. Every dependency is a potential security warning. Simple survives.</span>

## WHY I USE ASTRO (AND YOU MIGHT TOO)

For this blog, Claude suggested Astro. Here's why it was right:

- **Static sites are unkillable** - No server, no database, nothing to crash
- **Markdown for content** - Write in any text editor forever
- **Component-based** - Change header once, updates everywhere
- **Ships anywhere** - Vercel, Netlify, GitHub Pages, wherever

But Claude might suggest something different for your project. Trust it. The technical plan should match your strategy, not my preferences.

## WHAT A TECH PLAN LOOKS LIKE

Here's the TECH-PLAN.md for this blog (simplified):

```markdown
# Technical Plan - Vibe Blog

## Stack Decision
**Astro** - Static site generator
- Markdown content (easy to write)
- Fast performance (static HTML)
- Simple deployment

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

## LET CLAUDE OWN THE ARCHITECTURE

This is hard for PMs but crucial: don't micromanage the technical decisions. You wouldn't tell an architect which beams to use. Give Claude the requirements and let it design.

Your job:
- Define constraints ("must work on mobile")
- Set priorities ("speed over features")
- Ask questions ("why this over that?")

Claude's job:
- Choose the technology
- Design the architecture
- Explain trade-offs

## THE PLAN BECOMES REALITY

Your TECH-PLAN.md isn't just documentation - it's Claude's blueprint. Every future session, Claude reads this and knows:
- What we're building with
- Why we made these choices
- What we're NOT doing

<span class="context-label">PM SUPERPOWER</span> <span class="context-text">Good PMs define the 'what' and 'why' clearly enough that the 'how' becomes obvious. Let Claude handle the obvious.</span>

You now have a strategy and a technical plan. You haven't written code yet, but you're already ahead of 90% of side projects. Time to break this down into tasks.

[Next: The AI Todo System →](/posts/ai-todo-system)