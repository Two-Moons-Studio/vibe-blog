---
title: "Teaching Claude About Your Project"
date: 2025-08-31T13:00:00Z
excerpt: "Stop repeating yourself. Write project rules once, Claude follows them forever."
tags: ["getting-started", "ai-tools", "foundation"]
draft: false
---

Every conversation with Claude starts the same way. "Make it minimal." "No, simpler." "I said no animations." "Why did you add React?" "STOP MAKING IT COMPLICATED."

You're training the same AI over and over. Like Groundhog Day but with code.

<span class="context-label">THE FIX:</span> Claude reads a file called CLAUDE.md in your project folder every time it starts. Put your rules there once. Never repeat yourself again.

**Create your rules file:**

In your project folder:
```bash
cd ~/dev/my-project
touch CLAUDE.md
open CLAUDE.md
```

**What to put in it:**

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

Save it. Now Claude knows your preferences.

**Why this works:**

Claude literally reads this file at the start of every conversation. It's like giving a new teammate a one-page brief. No more explaining that you hate rounded corners or that you're not ready for React yet.

**Pro moves to add:**

```markdown
## Common Tasks
- "Make it responsive" = mobile-first, one breakpoint at 768px
- "Add interaction" = vanilla JS only, no libraries

## What NOT to Do
- Don't add features I didn't ask for
- Don't optimize prematurely  
- Don't add "nice to haves"
```

**The advanced version:**

As your project grows, your CLAUDE.md grows. Eventually it becomes your project's brain - architecture decisions, design patterns, even common bug fixes. But start simple. Even five lines of preferences will save you hours of repetition.

Think of it as documentation that actually gets read. Because it does. Every single time.

Next: Building your first actual thing that works in a browser.