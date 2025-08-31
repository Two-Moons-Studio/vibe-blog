---
title: "Setting Claude Up for Success"
date: 2025-08-31T15:30:00Z
excerpt: "The ultimate CLAUDE.md setup. Never repeat yourself again."
tags: ["workflow", "ai-tools", "configuration"]
draft: false
---

Your CLAUDE.md file is Claude's operating system. Set it up right once, and Claude becomes a completely different tool. This isn't the basic recipe file from earlier - this is the advanced setup that makes Claude actually useful.

## THE ULTIMATE CLAUDE.MD

Here's what most people don't include but should:

```markdown
# Project: My Blog

## READ THESE FIRST - ALWAYS
- STRATEGY.md - Our north star
- TECH-PLAN.md - Technical decisions  
- TODO.md - Current progress

## Critical Rules
1. NEVER make changes without showing me first
2. ALWAYS push changes after each task (things break)
3. Update TODO.md immediately when completing tasks
4. Explain what you're about to do before doing it
5. Ask for permission on anything destructive

## How to Work With Me
- I don't know code. Explain what you're doing
- Show me what will change before changing it
- One task at a time, commit often
- If something might break, warn me

## What NOT to Do
- Don't be overly agreeable - push back if I'm wrong
- Don't add features I didn't ask for
- Don't optimize prematurely
- Don't assume I remember our last session
```

This transforms Claude from an eager intern to a thoughtful senior developer.

## THE PERMISSION-BASED WORKFLOW

This one rule changes everything:

```markdown
## Before Making Changes
ALWAYS show me what you're about to do:
1. Explain the change in plain English
2. Show the code you'll write/modify
3. Wait for "go ahead" or "yes" or similar
4. Only then make the change
```

Why? Because Claude in auto-mode can destroy hours of work in seconds. One wrong file deletion, one overzealous refactor, and you're googling "git restore" at 2am.

<span class="context-label">LEARNED THE HARD WAY</span> <span class="context-text">Claude once "helpfully" refactored my entire project while fixing a typo. Three hours of work vanished. Now it asks first.</span>

## MAKE CLAUDE LESS AGREEABLE

Default Claude is a yes-man. It'll agree with your terrible ideas. Add this:

```markdown
## Your Personality
- Push back on bad ideas
- Suggest better approaches
- Say "that's unnecessarily complex" when it is
- Remind me of our STRATEGY.md when I drift
```

You want Claude to be your technical advisor, not your echo chamber.

## THE CONTEXT HIERARCHY

Claude should know what to read and in what order:

```markdown
## Session Start Routine
1. Read STRATEGY.md (understand the why)
2. Read TECH-PLAN.md (understand the how)
3. Read TODO.md (understand current state)
4. Read CLAUDE.md (understand working style)
5. Ask: "What are we working on today?"
```

This routine means you can start any session with just "Hi" and Claude knows exactly where you are.

## CRITICAL: THE PUSH RULE

This rule has saved me countless times:

```markdown
## Git Workflow
- Commit after EVERY successful change
- Push immediately after commit
- If you're about to do something risky, push first
- Commit message format: "Add [what], Update [what], Fix [what]"
- NEVER proceed to next task without pushing
```

Why? Because when Claude breaks something (not if, when), you can just clone your repo fresh and continue. No local recovery gymnastics.

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

## REAL EXAMPLE: MY CLAUDE.MD

Here's part of my actual CLAUDE.md for this blog:

```markdown
## Project Specific Rules
- Design is minimal, editorial, lots of whitespace
- No animations unless specifically requested
- Copy is direct, no marketing speak
- Git commits don't mention AI/Claude
- Everything in CSS variables (tokens.css)

## When Stuck
- Don't spiral trying multiple solutions
- Stop and ask me for direction
- Show me the error and explain in simple terms
- Suggest whether to fix or work around
```

## THE EVOLUTION

Your CLAUDE.md grows with your project. Start simple:
- Week 1: Basic rules
- Week 2: Add workflow preferences
- Week 3: Include common tasks
- Month 2: Full operating system

<span class="context-label">PRO TIP</span> <span class="context-text">Every time you have to repeat an instruction, add it to CLAUDE.md. Every time Claude does something annoying, add a rule against it.</span>

You've now programmed Claude's behavior. It knows your strategy, your plan, your progress, and your preferences. Time to watch it build.

[Next: From Plan to Product →](/posts/from-plan-to-product)