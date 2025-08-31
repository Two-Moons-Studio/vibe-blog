---
title: "Start Like a PM: Writing Your Strategy"
date: 2025-08-31T14:00:00Z
excerpt: "Every great product starts with a strategy. Yes, even your side project."
tags: ["strategy", "planning", "pm-skills"]
draft: false
---

You're not coding yet. You're not even thinking about code. You're doing what every PM does first - figuring out what the hell you're building and why anyone should care.

This isn't busy work. This is the difference between shipping something real and abandoning another half-finished project.

## WHAT'S A PRD AND WHY YOU NEED ONE

A PRD (Product Requirements Document) is your north star. It's not a 50-page novel. It's answers to basic questions:
- What problem are you solving?
- Who has this problem?
- What does success look like?
- What's the simplest solution?

<span class="context-label">REALITY CHECK</span> <span class="context-text">Most abandoned projects die because the builder lost sight of why they started. A PRD keeps you honest when you're tempted to add "just one more feature."</span>

## WRITING YOUR STRATEGY WITH CLAUDE

Navigate to your project folder and start Claude:

```bash
cd ~/dev/my-blog-project
claude
```

Now give Claude this prompt:

```
Help me write a STRATEGY.md file for my blog project. Ask me questions about:
- What I want to build
- Who my audience is
- What success looks like
- What features are must-haves vs nice-to-haves

Keep it simple, under 200 words. This is my north star, not a novel.
```

Claude will interview you. Answer honestly - this isn't a pitch deck for investors, it's your own clarity.

## THE POWER OF .MD FILES

Notice we're creating STRATEGY.md, not keeping this in our heads. These .md (markdown) files become your project's memory. They're:
- **Artifacts** - Documentation that lives with your code
- **Context** - What Claude reads every session
- **Evolution** - Update them as you learn

Your project folder will fill with these: STRATEGY.md, TECH-PLAN.md, TODO.md, CLAUDE.md. Each serves a purpose. Each keeps you from starting over.

## WHAT GOES IN YOUR STRATEGY

Here's what my STRATEGY.md looked like for this blog:

```markdown
# Vibe Blog Strategy

## Problem
Non-technical PMs and designers want to build things but get overwhelmed by dev complexity.

## Audience
- Product managers who prototype
- Designers who want to ship
- Anyone tired of waiting for devs

## Success Metrics
- 10 people build and ship something
- Clear path from zero to deployed site
- No one quits from overwhelm

## Must-Haves
- Simple blog that works
- Easy to update
- Looks professional
- Ships to real URL

## Not Doing
- Complex features
- User accounts
- Comments/social
- Analytics (yet)
```

That's it. 100 words that keep me focused.

## YOUR STRATEGY BECOMES CLAUDE'S STRATEGY

Here's the magic: every Claude session can start by reading this file. Add this to your future CLAUDE.md:

```markdown
## Context Files to Read
- STRATEGY.md - Read this first always
- TECH-PLAN.md - Technical approach
- TODO.md - Current tasks
```

Now Claude understands your vision. It won't suggest features you don't need. It won't overengineer. It stays aligned with YOUR goals.

<span class="context-label">PM WISDOM</span> <span class="context-text">Spending 30 minutes on strategy saves 3 hours of building the wrong thing. Every time.</span>

You've just done what most developers skip - you've defined success before writing a single line of code. That's thinking like a PM.

[Next: From Strategy to Technical Plan →](/posts/from-strategy-to-tech-plan)