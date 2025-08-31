---
title: "Writing Your Recipe File"
date: 2025-08-31T13:00:00Z
excerpt: "Give Claude your preferences once. Never repeat yourself again."
tags: ["getting-started", "ai-tools", "foundation"]
draft: false
---

Every Claude session feels like starting from scratch. "Keep it simple." "No frameworks." "I told you no animations." You're having the same conversation over and over.

Claude can read a file called CLAUDE.md in your project folder. Think of it as your recipe card - your preferences, your rules, your way of building. Write it once, Claude follows it every time.

## CREATING YOUR RECIPE FILE

In your project folder:
```bash
cd ~/dev/my-vibe-project
touch CLAUDE.md
open CLAUDE.md
```

Start with something simple:

```markdown
# Project: [Your Project Name]

## What We're Building
One sentence. What is this thing?

## Tech Stack
- HTML and CSS only (no frameworks yet)
- No build tools
- No npm packages unless I specifically ask

## Design Rules
- Minimal. Dead simple.
- Black text, white background
- System fonts
- No animations unless requested
- No gradients ever

## How to Work with Me
- One solution, not three options
- Explain what you're doing
- Keep it simple over clever
- If something seems complex, stop and ask
```

Save it. Claude reads this every time you start a session in this folder.

## LEVELING UP YOUR RECIPE

As you learn what you like, add more specific instructions:

```markdown
## Common Tasks
- "Make it responsive" = mobile-first, one breakpoint at 768px
- "Add interaction" = vanilla JS only, no libraries

## What NOT to Do
- Don't add features I didn't ask for
- Don't optimize prematurely  
- Don't add "nice to haves"
```

## WHY THIS CHANGES EVERYTHING

Instead of training Claude from zero each session, you're building on what you've learned. Your CLAUDE.md becomes smarter as you do. 

<span class="context-label">REAL TALK</span> <span class="context-text">Even a five-line CLAUDE.md saves you from repeating yourself. As you build more, you'll naturally add patterns you like, libraries you trust, and approaches that work for you.</span>

Eventually this file becomes your project's DNA - every decision, preference, and lesson learned. But start simple. Even "no React" and "keep it minimal" will transform how Claude helps you.

[Next: Your First Real Build →](/posts/html-in-60-seconds)