---
title: "The AI Todo System: Cross-Session Memory"
date: 2025-08-31T15:00:00Z
excerpt: "How to keep Claude in sync across sessions with smart todo management."
tags: ["workflow", "planning", "ai-tools"]
draft: false
---

You just finished your tech plan. At this point, Claude usually gets excited and wants to immediately start building everything - setting up the project, creating components, configuring deployment, all at once.

**I've learned to interrupt it here.** Instead of letting Claude run ahead, I ask it to break everything down into todos first. That way I can actually see what needs to be done and pick what to work on.

```
Before we build anything, create a todo list based on our TECH-PLAN.md. 
I want to see everything broken down so I can decide what to work on.
```

This keeps you in control of the pace and direction.

## THE TODOWRITE TOOL

Claude has a built-in todo system that automatically tracks what you're working on. You'll see it create and update todos as you build. When Claude breaks down your project, it might look like:

```
1. Set up Astro project
2. Create layout components
3. Set up content collections
4. Build homepage
5. Create post template
6. Add styling
7. Deploy to Vercel
```

The built-in tool is fine for a single session, but **todos disappear when you start fresh.** That's why I also keep a TODO.md file.

## KEEPING YOUR OWN TODO.MD

While not required, I create my own TODO.md file because it's more reliable across sessions. Claude can read it every time you start, and you control what's in it:

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

## WORKING ACROSS SESSIONS

The real power comes when you return to your project days later:

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

## HOW I ACTUALLY WORK

Honestly, I just pick whatever I feel like working on that day. Sometimes it's the next logical todo, sometimes it's something random from the backlog that sounds fun. The todos are there so I don't forget what needs doing, not to dictate what I work on. The key is having everything written down so when you come back a week later, you know what's done and what's left - whether you work systematically through the list or jump around based on mood doesn't really matter.

[Next: Setting Claude Up for Success →](/posts/setting-claude-up-for-success)