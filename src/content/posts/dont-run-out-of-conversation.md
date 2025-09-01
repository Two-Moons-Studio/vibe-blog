---
title: "AI Has Limits: Context Windows and Memory"
date: 2025-09-01T16:30:00Z
excerpt: "Why Claude forgets what you're building and how to work around the limits."
tags: ["workflow", "ai-tools", "optimization"]
draft: false
---

This is an AI thing. It's called "context windows" and is regularly coupled with the idea of token limits and token management. When this article was written, [Anthropic released a 1M token context window](https://www.anthropic.com/news/1m-context) and people were crying tears of joy.

## WHAT "CONTEXT" ACTUALLY MEANS

Think of Claude like the guy from Memento - brilliant but can only remember so much at once. Every message, every file Claude reads, every piece of code it writes - they all take up space in this limited memory.

When it fills up:
- Claude forgets earlier messages
- Suggestions become generic
- It starts repeating work
- Quality drops dramatically

## WHY AI HAS CONTEXT WINDOWS

Seems weird that AI would have a deliberate weakness like this, right? It's actually about computational cost. Processing a million tokens at once requires massive GPU memory and compute power. Context windows are the tradeoff between "AI that works fast" and "AI that remembers everything." Companies are constantly pushing these limits higher - hence the celebration when limits increase.

## THE CORE POINT: PLAN YOUR SESSION

You need to plan your working session within context windows. This means:
- Budgeting time for regular pushes
- Leveraging different models to optimize token usage
- Having good awareness of what Claude can do when you see "10% remaining"

Here's rough token usage by task type:

| Task | Approximate Token Usage |
|------|------------------------|
| Simple HTML page | 500-1K tokens |
| Reading a component file | 2-5K tokens |
| Building a full feature | 10-20K tokens |
| Debugging complex issue | 15-30K tokens |
| Reading large codebase | 50-100K tokens |
| Using subagents | 20-50K per agent |

## TRACKING AND MANAGING CONTEXT

Type `/context` to see what Claude remembers:
- Token count used
- What percentage is left
- Recent messages
- Files in memory

When you see yourself approaching 80-90% filled up in that `/context` visual, consider wrapping things up. You can use `/compact` to continue:
- It summarizes the conversation into key points
- Clears old messages but keeps the summary
- Gives you breathing room to continue
- **What you lose:** Specific code details, exact decisions, nuanced discussions
- **What stays:** General project understanding, recent work, key decisions

You can also compact early - if you're at 50% and about to start something big, compact first to maximize available context for the new task.

To this day, I still prompt a `read CLAUDE.md` and/or `look at TODO.md` even post-compact because I want to ensure Claude has a very strong start to the session. I never think that usage of tokens for re-reading context docs is a waste. You can also set up hooks to automatically read certain files at the start of every session.

## BUILDING IN CHUNKS

The secret to not running out: build in focused chunks, not marathon sessions.

**Bad approach:**
"Build my entire blog from scratch"
(Burns through context in one session, quality gets worse towards the end)

**Good approach:**
- Session 1: "Set up the project structure"
- Session 2: "Build the homepage"
- Session 3: "Add blog post functionality"
- Session 4: "Style everything"

Each session starts fresh with full context. When Claude's on a roll, there's huge temptation to keep pushing - "Now add tags", "Now add search", "Now add comments." Stop. This burns context and creates brittle code. The last 20% of your context produces 80% of your bugs.

## MODEL SWITCHING FOR TOKEN OPTIMIZATION

Claude Code offers different models. Switch mid-conversation with `/model`:

**Sonnet** (default):
- Fast responses, great for building
- Conservative with context
- Use for 90% of work

**Opus**:
- Deeper thinking, better at strategy
- Burns more context
- Switch for complex problems

```
/model opus
Let's rethink this architecture...

/model sonnet  
Now let's build it...
```

## PRACTICAL WORKFLOW

**Watch for warning signs:**
- Claude suggests things you already rejected
- Code quality drops
- Responses get generic
- Claude says "I don't recall..."
- You're past 80% context

When ending a session, update your TODO.md with what you completed and what's next. Push everything. Next session starts with `Read TODO.md and continue where we left off.`

## WHY THIS MATTERS

Building in chunks with fresh context each time means you ship cleaner code faster. It feels slower but it's actually much faster because you avoid the death spiral of hallucinations, repeated errors, and Claude forgetting what you already decided.

[Next: Subagents: Your Content Army →](/posts/subagents-your-content-army)