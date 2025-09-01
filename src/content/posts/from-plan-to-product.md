---
title: "From Plan to Product: Actually Building"
date: 2025-08-31T16:00:00Z
excerpt: "The moment you stop planning and start building with Claude."
tags: ["building", "execution", "workflow"]
draft: false
---

Okay, you've done all the planning. You have your strategy, tech plan, todos, and CLAUDE.md. Now comes the part where you actually have to type something to Claude and watch it build. This is weirdly nerve-wracking the first time.

## THE MOMENT OF TRUTH

In your project folder, with Claude running:

```
Let's build this blog. 

Read my STRATEGY.md, TECH-PLAN.md, and TODO.md.

Start with the first todo. Show me what you'll do, then execute.
```

That's it. Claude will:
1. Read your files
2. Understand the context
3. Show you the plan
4. Wait for approval
5. Start building

## YOUR FIRST "GO BUILD THIS" PROMPT

Here's the exact prompt I used to start this blog:

```
Based on our strategy and tech plan, let's set up the Astro blog.

Requirements:
- Use Astro's blog template as starting point
- Keep it minimal
- Set up the folder structure we planned
- Get it running locally so I can see it

Walk me through each step before doing it.
```

Claude responded with:
```
I'll set up your Astro blog. Here's what I'll do:

1. Create a new Astro project with blog template
2. Clean out example content
3. Set up our planned structure
4. Start the dev server

Shall I proceed?
```

I said "yes" and watched it build.

## AUTO-MODE VS REVIEWING EACH STEP

Claude has different execution modes:

**Review Mode** (default, safer):
- Shows you changes before making them
- Waits for approval
- Good for learning what's happening

**Auto Mode** (faster, riskier):
```
Go ahead and build the homepage component. 
Auto-approve file creates and edits.
```

<span class="context-label">WHEN TO USE WHICH</span> <span class="context-text">First time building something? Review mode. Rebuilding something that broke? Review mode. Adding content to existing structure? Auto mode is fine.</span>

## WATCHING CLAUDE WORK

When Claude builds, you'll see:
- Commands flying by (creating folders, files)
- Code being written
- Explanations of what's happening
- File paths you can click

Don't panic if you don't understand the code. Focus on:
- Is it following the plan?
- Do the file names make sense?
- Is it creating what you expected?

## WHEN TO INTERVENE

Stop Claude if:
- It's adding complexity you didn't ask for
- It's deleting files without asking
- It's installing packages not in the plan
- You see error messages repeating

Say "stop" or "wait" and Claude pauses. Then:
```
That seems complex. Can we do something simpler?
```

## THE BUILD RHYTHM

Building isn't one long session. It's a rhythm:

**Round 1** (30 min):
- Set up project
- Basic structure
- Get it running

**Break** - Look at what you built

**Round 2** (30 min):
- Add components
- Basic styling
- See it taking shape

**Break** - Test everything

**Round 3** (30 min):
- Add content
- Fix issues
- Polish

This rhythm prevents context overflow and keeps you engaged.

## REAL EXAMPLE: BUILDING THE HOMEPAGE

Here's how my homepage build actually went:

**Me:** "Let's build the homepage based on our plan"

**Claude:** Shows the component structure, waits

**Me:** "Looks good, go ahead"

**Claude:** Creates files, writes code

**Me:** "Can we make the posts show excerpts?"

**Claude:** "I'll add excerpt to the frontmatter..." (shows code)

**Me:** "Perfect, do it"

It's a conversation, not a command. You're the product manager, Claude's the developer.

## WHEN THINGS BREAK

They will. Here's the recovery process:

1. **Don't panic** - Nothing is permanently broken
2. **Push what works** - Save progress first
3. **Show Claude the error** - Copy/paste error messages
4. **Let Claude fix it** - It's seen every error before

<span class="context-label">REALITY</span> <span class="context-text">I broke this blog 4 times while building it. Each time took less than 5 minutes to fix because I pushed working code constantly.</span>

## THE PERMISSION WORKFLOW IN ACTION

Your CLAUDE.md permission rule creates this flow:

```
Claude: "I'll create a Header component with navigation. Here's what it will look like: [shows code]"

You: "Go ahead"

Claude: Creates file, writes code

Claude: "Header created. Should I add it to the layout?"

You: "Yes"

Claude: Updates layout, shows changes
```

This seems slow but prevents disasters. After a few rounds, you'll trust Claude enough to batch approvals:

```
"Go ahead and create all the components we discussed"
```

## FROM ZERO TO RUNNING

By the end of your first session, you'll have:
- A running local website
- Basic structure in place
- Something you can see in your browser
- Momentum to continue

You just went from idea to working prototype. Most people never get here.

[Next: Don't Run Out of Conversation →](/posts/dont-run-out-of-conversation)