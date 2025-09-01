---
title: "Don't Run Out of Conversation"
date: 2025-08-31T16:30:00Z
excerpt: "What 'context' means and why your Claude forgets everything."
tags: ["workflow", "ai-tools", "optimization"]
draft: false
---

You're two hours into building, everything's working, then Claude starts suggesting things you already rejected or forgets what you're building. You've hit the context limit.

## WHAT "CONTEXT" ACTUALLY MEANS

Think of context as Claude's working memory. Like your laptop's RAM, not its hard drive. Every message, every piece of code, every file Claude reads - it all sits in this temporary memory.

When it fills up:
- Claude forgets earlier messages
- Suggestions become generic
- It starts repeating work
- Quality drops dramatically

<span class="context-label">CONTEXT BUDGET</span> <span class="context-text">You get roughly 200K tokens per conversation. That's about 150,000 words, but every file Claude reads and writes eats into that. Big files burn through it fast.</span>

## THE /CONTEXT COMMAND

Want to see what Claude remembers? Type:

```
/context
```

You'll see:
- Token count used
- What percentage is left
- Recent messages
- Files in memory

When you hit 70%, start thinking about wrapping up. At 90%, you're in danger zone.

## /COMPACT: YOUR RESET BUTTON

When context gets full, use:

```
/compact
```

This:
- Summarizes the conversation
- Clears old messages
- Keeps recent context
- Gives you breathing room

But you lose detail. Claude might forget specific decisions or nuances. That's why todos and documentation matter - they survive compacting.

## BUILDING IN CHUNKS

The secret to not running out: build in focused chunks, not marathon sessions.

**Bad approach:**
"Build my entire blog from scratch"
(Burns through context in one session)

**Good approach:**
- Session 1: "Set up the project structure"
- Session 2: "Build the homepage"
- Session 3: "Add blog post functionality"
- Session 4: "Style everything"

Each session starts fresh with full context.

## RESISTING THE URGE TO KEEP GOING

When Claude's on a roll, there's huge temptation to keep pushing - "Now add tags", "Now add search", "Now add comments"...

Stop. This burns context and creates brittle code. Better to:
1. Build core functionality
2. Test it works
3. [Commit and push](/posts/git-your-safety-net)
4. Start fresh session for next feature

<span class="context-label">HARD TRUTH</span> <span class="context-text">The last 20% of your context produces 80% of your bugs. When Claude starts forgetting things, mistakes multiply.</span>

## WHEN TO SWITCH CHEFS

Claude Code offers different models:

**Sonnet** (default):
- Fast responses
- Great for building
- Conservative with context
- Use for 90% of work

**Opus**:
- Deeper thinking
- Better at strategy
- Creative solutions
- Burns more context
- Switch for complex problems

**Haiku**:
- Lightning fast
- Minimal context usage
- Good for simple tasks
- Use for bulk updates

Switch models mid-conversation:
```
/model opus
Let's rethink this architecture...

/model sonnet  
Now let's build it...
```

## THE CHUNK WORKFLOW

Here's my actual workflow for building without context issues:

**Start of session:**
```
/context
[Check I have full context]

Read TODO.md
What's the next chunk to build?
```

**Middle of session:**
```
/context
[Check usage at 50%]

Let's finish this component and commit
```

**End of session:**
```
Push all changes
Update TODO.md with progress
[Close session before 80% context]
```

## SIGNS YOU NEED A FRESH START

Start a new session when:
- Claude suggests things you already rejected
- Code quality drops
- Responses get generic
- Claude says "I don't recall..."
- You're past 80% context

Don't try to squeeze out those last few tokens. Fresh context = fresh thinking.

## THE CONTINUITY TRICK

Before ending a session, update your [TODO.md](/posts/ai-todo-system):

```
Update TODO.md with:
- What we completed
- What's in progress  
- Next priority
- Any important decisions

Then push everything.
```

Next session starts with:
```
Read TODO.md and continue where we left off.
```

Zero friction restart.

## WHY THIS MATTERS

Most people try to build everything in one marathon session. They hit context limits, Claude gets confused, quality drops, bugs multiply, and they end up starting over.

Building in chunks with fresh context each time means you ship cleaner code faster. It feels slower but it's actually much faster because you avoid the death spiral.

[Next: Subagents: Your Content Army →](/posts/subagents-your-content-army)