---
title: "Good Planning is Good Vibe Coding"
date: 2025-08-31T14:00:00Z
excerpt: "The most enjoyable part of vibe coding? Taking fuzzy ideas and building real strategy with Claude."
tags: ["strategy", "planning", "claude-collaboration"]
draft: false
---

I had this fuzzy idea for a blog. Nothing concrete, just vibes. Twenty minutes with Claude later, I had a full strategy doc with actual bones. Not by typing it myself - by having a conversation where Claude pulled structure from my brain dump.

## WHY CLAUDE NEEDS YOUR STRATEGY

Claude Code is a specialized executor - brilliant at building what you describe, but it doesn't come with vision or memory. When you start a new session three days later, Claude doesn't remember your project exists. It needs context to make those magical leaps from "help me fix this" to actually understanding what "this" means in your project.

<span class="context-label">SO WHAT</span> <span class="context-text">Claude without strategy: "Let's add user authentication!" Claude after reading your strategy: "Let's focus on getting your static blog live first." That's the difference.</span>

## WRITING YOUR STRATEGY WITH CLAUDE

Navigate to your project folder and start Claude:

```bash
cd ~/dev/my-vibe-project
claude
```

Now here's two ways to get your strategy out:

**Option 1: The Clean Interview**
```
Help me write a STRATEGY.md file for my project. Interview me about:
- What I'm building and why
- Who will use this
- What success looks like
- What features are essential vs nice-to-have
- What I explicitly DON'T want to build

Turn my answers into a clear strategy doc that future Claude sessions can read to understand this project's vision and constraints.
```

**Option 2: The Brain Dump** *(my preferred approach)*
```
I want to build [dump everything here - your random thoughts, half-formed ideas, contradictions, everything]. 

Take this mess and:
1. Ask me clarifying questions to resolve contradictions
2. Help me identify what's core vs what's feature creep
3. Turn it into a STRATEGY.md that keeps me and future Claude sessions focused
```

Claude will pull structure from your chaos. That's literally what it's best at.

## THE POWER OF .MD FILES

Notice we're creating STRATEGY.md, not keeping this in our heads. These .md (markdown) files become your project's memory. They're:
- **Artifacts** - Documentation that lives with your code
- **Context** - What Claude reads every session
- **Evolution** - Update them as you learn

Your project folder will fill with these: STRATEGY.md, TECH-PLAN.md, TODO.md, CLAUDE.md. Each serves a purpose. Each keeps you from starting over.

## WHAT A REAL STRATEGY LOOKS LIKE

Here's a simplified version of the actual strategy doc I wrote for this site:

```markdown
# Zero to Ship Blog Strategy

## Core Concept
Get non-technical people from zero to shipping. Bite-sized wins, no fluff.

## Why Sites Not Apps
- Apps are soufflés, sites are pasta - hard to mess up pasta
- See results in 5 minutes vs 5 hours
- No database drama or auth nightmares
- Still ship something real

## Audience
- PMs who want to prototype without waiting
- Designers who want to build their ideas
- Anyone who's tried to learn coding and quit

## Success Looks Like
- Reader has working local site in 1 hour
- Reader deploys to real URL in 1 week
- Reader feels confident to continue
- No one quits from overwhelm

## Principles
- One article = one task = one win
- Copy-paste is fine, understanding comes later
- Permission to take shortcuts
- "It's OK to be dumb" energy

## NOT Doing (Critical for Claude)
- React/Vue/complex frameworks
- Databases or backends
- User authentication
- Dev best practices lectures
- Scalability concerns
- Testing frameworks
```

This doc isn't about me staying focused - it's about Claude staying focused across sessions.

## MAKING CLAUDE READ YOUR STRATEGY

Once you have your STRATEGY.md, you need Claude to actually read it. Later we'll optimize our [CLAUDE.md file](/posts/setting-claude-up-for-success) to include:

```markdown
## Start Every Session
Always read these files first:
1. STRATEGY.md - Project vision and constraints
2. TECH-PLAN.md - Technical decisions
3. TODO.md - Current tasks
```

Now when you start a new Claude session days later, you can just say "read CLAUDE.md" and Claude instantly understands:
- What you're building (and what you're NOT)
- Why certain decisions were made
- What success looks like
- Where you left off

[Next: From Strategy to Technical Plan →](/posts/from-strategy-to-tech-plan)