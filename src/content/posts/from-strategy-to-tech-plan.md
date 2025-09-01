---
title: "From Strategy to Technical Plan"
date: 2025-08-31T14:30:00Z
excerpt: "The step that separates successful vibe coders from abandoned projects."
tags: ["strategy", "planning", "technical"]
draft: false
---

If you follow successful vibe coders on Reddit, you'll notice a pattern - they all spend time on technical planning before building. I was lucky enough to learn this from a talented engineering vibe coder who walked me through it.

When I built my first editorial site (which I later cloned to start this blog - story for another day), having a proper tech plan made everything else just work. Here's how to do it right.

## ENTER PLAN MODE

Claude has two modes: planning and building. Planning is where Claude thinks through the approach without writing code. It's basically asking Claude to be your architect before being your builder.

Quick tip: You can toggle between modes with `/mode` or `Shift+Tab`, or explicitly tell Claude to enter plan mode.

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

Claude will think through what technology to use, how to structure the project, what components you need, and how to deploy it.

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

Here's what Claude and I chose, in plain English:

- **Astro** - Think of it as WordPress but for developers. It turns your writing (in Markdown files) into a website automatically. Excels at fast load times since it ships zero JavaScript by default.
- **Markdown** - The simplest way to write formatted text. Like a Word doc but in plain text that never breaks. Extra helpful since Claude Desktop and Claude Code naturally generate content in this format.
- **Vanilla JavaScript** - Just regular JavaScript, no fancy frameworks. Like speaking English instead of lawyer-speak.
- **GitHub** - Where your code lives online. Like Google Drive but for code. Free backup forever.
- **Vercel** - A hosting platform that takes your GitHub code and makes it a real website anyone can visit. Updates automatically when you change things. Think of it as your website's home on the internet.

With simple projects like this, you don't need a CMS or complex databases to set up. Claude becomes your personalized CMS - you just ask it to create or update content and it handles everything.

## WANT TO UNDERSTAND MORE?

If you're curious about the technical choices, here are two prompts that help:

```
Can you explain this tech plan to me like I'm a PM who's never coded? 
What are the trade-offs and why these choices?
```

If you don't have a tech background and want Claude to double-check its own work:

```
Review this tech plan critically. What could go wrong? 
What am I not thinking about? Be honest.
```

[Next: The AI Todo System →](/posts/ai-todo-system)