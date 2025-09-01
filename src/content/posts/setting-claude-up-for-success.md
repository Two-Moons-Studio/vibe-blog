---
title: "CLAUDE.md: Your AI's Brain"
date: 2025-08-31T15:30:00Z
excerpt: "The file that makes or breaks your vibe coding experience."
tags: ["workflow", "ai-tools", "configuration"]
draft: false
---

CLAUDE.md is literally the most important file in vibe coding. It's Claude's instruction manual for your project. One night, Claude deleted massive amounts of my vibe progress (and I hadn't built the habit of pushing to git yet). Couldn't recover any of it. That's when I learned - a good CLAUDE.md isn't optional.

## WHAT MAKES A GOOD CLAUDE.MD

I've studied my own projects, talked to other vibe coders, and honestly - most CLAUDE.md files are too simple. Here's what actually works, pulled from my editorial vibe project that has 150+ successful sessions:

```markdown
# Project Name & One-Line Description

## Commands (Slash Commands)
/start - Load context, start dev server, show current work
/deploy - Build, commit, push to main branch
/article - Guided workflow for creating content

## Critical Rules - READ FIRST
✅ Check existing files before creating new ones
✅ Use design tokens only (no hardcoded values)
✅ Update TODO.md immediately when tasks change
✅ COMMIT AND PUSH after major changes (things break)
❌ NEVER revert entire files - fix specific errors only
❌ NEVER use git checkout on uncommitted work
❌ NEVER add Claude attribution in commits

## Stack & Structure
- Framework: Astro 5.x (or your stack)
- Key directories and what they're for
- Important files (tokens.css, config files)

## Workflow
1. Explain planned changes before making them
2. Wait for "go ahead" or similar confirmation
3. Show options when multiple approaches exist
4. One task at a time, commit often
```

I learned these rules the hard way. By the way - every single one comes from something Claude broke in a past session. So please learn from my mistakes.

The sections below are additional patterns I've found useful. Pick what makes sense for your workflow - everyone's CLAUDE.md ends up looking different based on how they like to work.

## PERMISSION-BASED WORKFLOW

Add this section and watch your stress levels drop:

```markdown
## Before Making Changes
ALWAYS show me what you're about to do:
1. Explain the change in plain English
2. Show the code you'll write/modify
3. Wait for "go ahead" or "yes" or similar
4. Only then make the change
```

Why? Because Claude in auto-mode can destroy hours of work in seconds. One wrong file deletion, one overzealous refactor, and everything's broken.

<span class="context-label">LEARNED THE HARD WAY</span> <span class="context-text">Claude once "helpfully" refactored my entire project while fixing a random syntax error. I was so ridiculously mad I wanted to throw my laptop against a wall.</span>

## MAKE CLAUDE LESS AGREEABLE

Default Claude is a yes-man. It'll agree with your terrible ideas. If you want it to be less sycophantic, try some of these:

```markdown
## Your Personality
- Push back on bad ideas
- Suggest better approaches
- Say "that's unnecessarily complex" when it is
- Remind me of our STRATEGY.md when I drift
```

You want Claude to be your technical advisor, not your echo chamber.

## THE GIT SAFETY NET

Literally the most important thing I do for ALL my Claudes:

```markdown
## Git Workflow - CRITICAL
- Commit after EVERY successful change
- Push immediately after commit
- If you're about to do something risky, push first
- Commit message format: "Add [what], Update [what], Fix [what]"
- NEVER proceed to next task without pushing
```

Why? Because when Claude breaks something (not if, when), you can just clone your repo fresh and continue. No local recovery gymnastics.

## CONTEXT HIERARCHY

If you want your Claude to always get context first instead of you prompting it, you can do this:

```markdown
## Session Start Routine
1. Read STRATEGY.md (understand the why)
2. Read TECH-PLAN.md (understand the how)
3. Read TODO.md (understand current state)
4. Read CLAUDE.md (understand working style)
5. Ask: "What are we working on today?"
```

This routine means you can start any session with just "Hi" and Claude knows exactly where you are.

## LANGUAGE AND EXPLANATION

```markdown
## Communication Style
- Assume I don't know terminal commands
- Explain what each command does before running
- Use analogies when explaining technical concepts
- Show me file paths I can click
- Celebrate small wins
```

This keeps you engaged and learning instead of just watching text fly by.

## REAL EXAMPLE FROM THIS BLOG

Here's actual working sections from this blog's CLAUDE.md:

```markdown
### /vibe-post 
Guided post creation workflow:
1. ASK USER: "What's the post title?"
2. ASK USER: "Brief excerpt (1-2 sentences)?"
3. Generate slug from title (lowercase, dash-separated)
4. Create markdown file in /src/content/posts/
5. Use today's date automatically
6. CONFIRM: "Post created at /posts/[slug] - ready to write!"

## Design System
- Colors: Black text, cream background, sage accent
- Typography: Lora (serif) + Inter (sans)
- Spacing: Generous editorial whitespace
- Components: 4 total (Header, Footer, PostPreview, Layout)

## CRITICAL: Avoid "Claude Voice" in Content
When writing articles, avoid these patterns:
- Punchy marketing language ("This is different. PERIOD.")
- Repetitive structure ("No X. No Y. No Z.")
- Too many short sentences in a row
Write naturally, like explaining to a friend.
```

## CUSTOM COMMANDS

I'll share more custom Claude commands in a later post, but for now - here are the ones I use:

```markdown
## Commands (What to do when typed)
/start - Check status, start dev server, show current work
/vibe-post - Guided workflow for creating content
```

Type `/start` and Claude runs your whole startup routine.

[Next: From Plan to Product →](/posts/from-plan-to-product)