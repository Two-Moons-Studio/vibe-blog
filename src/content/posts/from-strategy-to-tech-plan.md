---
title: "From Strategy to Technical Plan"
date: 2025-08-31T14:30:00Z
excerpt: "Turn your PM brain off. Let Claude be the architect."
tags: ["strategy", "planning", "technical"]
draft: false
---

You have a strategy doc. Great. Now you need to figure out how to actually build it - what framework, what tools, all that technical stuff. This used to be where I'd get stuck, but Claude is surprisingly good at making these decisions if you ask the right way.

## ENTER PLAN MODE

Claude has two modes: planning and building. Planning is where Claude thinks through the approach without writing code. It's basically asking Claude to be your architect before being your builder.

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

I've noticed Claude sometimes gets excited and suggests a whole tech stack when you just need a simple site. Here are prompts that help keep things manageable:

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

<span class="context-label">LEARNED THIS THE HARD WAY</span> <span class="context-text">Every framework you add is something else to debug later. I spent three hours once because a dependency updated and broke everything.</span>

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

This was hard for me to learn as a PM - you have to let go of the technical decisions. You wouldn't tell an architect which specific beams to use in a building. Same principle here.

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

Now you have both a strategy and a technical plan. You still haven't written any code, but you actually know what you're building and how. That's more than most side projects ever figure out.

[Next: The AI Todo System →](/posts/ai-todo-system)