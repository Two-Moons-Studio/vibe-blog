---
title: "Teaching Claude About Your Project"
date: 2025-08-31T13:00:00Z
excerpt: "The CLAUDE.md file is like giving your AI assistant a job description. Here's what to put in it."
tags: ["getting-started", "ai-tools", "foundation"]
draft: false
---

## The Setup

Claude is smart but not psychic. It doesn't know you hate rounded corners or that you're building a portfolio site. You need to tell it. Once.

Enter: The CLAUDE.md file.

## The Struggle

Every conversation starts the same:
- "Make it minimal"
- "No, MORE minimal"
- "I said no animations"
- "Why did you add a database?"
- "I HATE gradients"

You're repeating yourself like a broken record. Claude keeps forgetting your preferences. Your blood pressure rises.

## The Solution

In your project folder, create `CLAUDE.md`:

```bash
cd ~/coding/projects/my-first-site
touch CLAUDE.md
```

Open it and add:

```markdown
# Project: My First Site

## What This Is
Simple portfolio site. HTML and CSS only. No framework needed.

## Design Rules
- Minimal. Like, MINIMAL minimal
- Black text, white background
- No gradients ever
- No animations unless I ask
- System fonts are fine

## Tech Rules  
- Plain HTML/CSS
- No frameworks
- No build tools yet
- No database
- Keep it simple

## Workflow
- I'm learning, explain what you're doing
- Show me one approach, not three
- Small steps
```

Save it. Now Claude reads this every time.

## The Designer Take

This is your design system doc but for AI. Like how you'd brief a junior designer. Set the constraints once, enforce them forever.

Think of it as your AI's brand guidelines. No more explaining your aesthetic every damn time.

## The PM Take

This is a PRD for your AI. Clear requirements, constraints, and success criteria. It's async communication at its finest - write once, reference always.

Pro move: Add a "What NOT to do" section. Explicitly forbid the things that annoy you.

## Reality Check

⏱️ **Time:** 5 minutes to write  
🧠 **Sanity:** Saves hours of re-explaining  
💰 **Cost:** Free  

**What to include:**
- Project goal (one sentence)
- Tech constraints (what you will/won't use)
- Design preferences (your style)
- Workflow preferences (how you like to work)

**What NOT to include:**
- Your life story
- 47 pages of requirements
- Everything you might possibly want someday

**Advanced move:**
```markdown
## When You're Lost
If something seems too complex, stop and ask me.
Don't add features I didn't request.
Simple > Clever.
```

Claude will literally read this and follow it.

Next: Actually building something you can see in a browser.