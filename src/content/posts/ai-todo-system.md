---
title: "The AI Todo System: Cross-Session Memory"
date: 2025-08-31T15:00:00Z
excerpt: "How to keep Claude in sync across sessions with smart todo management."
tags: ["workflow", "planning", "ai-tools"]
draft: false
---

The biggest challenge with AI coding is that Claude starts fresh every session. You close your laptop, come back tomorrow, and Claude has no idea what you were building. Todos fix that.

## WHY AI TODOS ARE DIFFERENT

AI todos aren't just a task list - they're how you maintain context between sessions. When you start a new Claude session and say "read TODO.md", Claude instantly knows:
- What's already built
- What you're working on
- What comes next
- Why certain decisions were made

It's basically your project's memory card.

## THE TODOWRITE TOOL

Claude has a built-in todo system. You'll see it automatically create and update todos as you work. But you can also invoke it directly:

```
Create a todo list for building this blog based on our TECH-PLAN.md
```

Claude will break down your project into phases:
```
1. Set up Astro project
2. Create layout components
3. Set up content collections
4. Build homepage
5. Create post template
6. Add styling
7. Deploy to Vercel
```

<span class="context-label">HEADS UP</span> <span class="context-text">The TodoWrite tool sometimes has issues where it overwrites the list. I always keep a TODO.md file as backup. Better safe than starting over.</span>

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

## BREAKING WORK INTO RESUMABLE CHUNKS

The secret to AI-assisted building: work in 30-minute chunks that could be handed off to someone else (or future you). Each chunk should:

1. **Start with context** - "Continue building the blog, currently working on homepage"
2. **Have a clear outcome** - "Homepage shows 5 recent posts"
3. **End with a commit** - Save progress before context runs out

Bad chunk: "Work on the blog"
Good chunk: "Create the homepage component that displays recent posts"

## THE CROSS-SESSION WORKFLOW

Here's how todos enable you to build across multiple sessions:

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

## TIME INVESTMENT PAYS OFF

<span class="context-label">CRITICAL INSIGHT</span> <span class="context-text">Spending 10 minutes on todos saves 2 hours of redundant work. Every. Single. Time.</span>

Most people want to dive into building immediately. Resist this. The time you spend on todos is like compound interest - it pays off exponentially as your project grows.

My workflow:
1. **5 minutes** - Review and update TODO.md
2. **20 minutes** - Focused building on one todo
3. **5 minutes** - Update todos, commit changes

This rhythm keeps momentum without overwhelming Claude's context or your attention.

## TODOS AS PROJECT PHASES

Think of your todos like Jira epics or project phases:

**Phase 1: Foundation** (todos 1-3)
- Project setup
- Core structure
- Basic components

**Phase 2: Features** (todos 4-7)
- Actual functionality
- Content management
- User experience

**Phase 3: Polish** (todos 8-10)
- Styling refinements
- Performance
- Deployment

This mental model helps you see progress even when individual todos feel small.

You now have a memory system that survives between sessions. Next, let's set up Claude to use this system perfectly.

[Next: Setting Claude Up for Success →](/posts/setting-claude-up-for-success)