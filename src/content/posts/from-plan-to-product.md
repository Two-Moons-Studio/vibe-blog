---
title: "From Plan to Product: Actually Building"
date: 2025-08-31T16:00:00Z
excerpt: "Tips for your first real build sessions with Claude."
tags: ["building", "execution", "workflow"]
draft: false
---

You've got your [todos from breaking down your tech plan](/posts/ai-todo-system). Claude knows [your plan](/posts/from-strategy-to-tech-plan). Time to actually build something. I'll walk through the detailed Astro build in a later post - this one's about the patterns and tips that help during any build session.

## STARTING FROM YOUR TODOS

Remember that [todo list we created](/posts/ai-todo-system)? That's your starting point. In your project folder:

```
Read my STRATEGY.md, TECH-PLAN.md, TODO.md, and CLAUDE.md.

Let's work on the first todo. Show me what you'll do before doing it.
```

Claude will read your context and start with whatever's first on the list. Maybe it's "Set up Astro project" or "Create homepage component" - doesn't matter. The point is you're not randomly asking Claude to build things, you're working through a plan.

## WHAT A REAL BUILD LOOKS LIKE

Here's an actual exchange from building this blog:

```
Me: Let's work on setting up the Astro project from our todos

Claude: I'll set up your Astro blog with the blog template. 
First I'll create the project, then clean it up...
[shows a bunch of steps]

Me: wait that seems like a lot. can we just start with the basic setup first?

Claude: You're right. Let me just:
1. Create new Astro project
2. Start dev server
3. Make sure it runs
Then we can modify from there.

Me: yes do that
```

Notice how messy that is? I interrupted, changed direction, Claude adjusted. But that's normally how it goes for me and I like it that way.

## REVIEW MODE VS AUTO-APPROVE

Claude can either show you everything before doing it, or just go ahead and build. You control this with how you phrase requests.

I typically turn on review mode when I think there's a good chance I'll want to intervene or if the task could be complex. But more and more, with my continued refined Claude workflows, I leave on auto-approve. Here's how each works:

**Review Each Step** (default):
```
"Show me what you'll change before changing it"
```
Claude shows code, waits for your "go ahead"

**Auto-Approve** (when you trust the task):
```
"Go ahead and create all the component files we discussed"
```
Claude just builds without showing each file

<span class="context-label">WHEN TO USE WHICH</span> <span class="context-text">First time building something? Review mode. Something you've built before? Auto-approve is fine. Anything involving deletion? Always review mode.</span>

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

For simple things like blogs, check your localhost frequently. If something looks wrong visually, you can right-click and use "Inspect" to help Claude debug. I'll cover browser debugging tricks in a future article.

<span class="context-label">WHY I USE CLI</span> <span class="context-text">A lot of people don't like working in CLIs because they want to control specific files, tweak this/that, or have complex DB setups they need to reference. If you're a simple vibe coder like me though, it's actually why I prefer CLI over VS Code or Cursor - I just don't care what Claude actually codes most of the time, which makes [terminal optimal for this](/posts/terminal-terror-first-time).</span>

## WHEN TO INTERVENE

Stop Claude if:
- It's adding complexity you didn't ask for
- It's deleting files without asking
- It's installing packages not in the plan
- You see error messages repeating

<span class="context-label">IMPORTANT</span> <span class="context-text">Hit ESC to interrupt Claude mid-execution. That's totally okay! Better to stop early than waste tokens on something going wrong.</span>

Say "stop" or "wait" or hit ESC and Claude pauses. Then:
```
That seems complex. Can we do something simpler?
```

## REAL BUILD EXAMPLE

Here's a pattern that happens constantly - Claude over-engineers, I simplify:

```
Me: let's create the post preview component

Claude: [Creates component with title, excerpt, author, date, 
tags, reading time, share buttons, related posts]

Me: way too much. just title and excerpt. 
is this too complex? carefully think about it

Claude: [Takes time, simplifies to just those two things]

Me: perfect, ship it
```

This back-and-forth is totally normal. Claude defaults to "kitchen sink" implementations. Your job is to keep things simple.

<span class="context-label">TIP</span> <span class="context-text">Use phrases like "carefully think", "analyze", "take your time" when you want Claude to slow down and not just rush to the quickest solution.</span>

## THINGS WILL BREAK (THAT'S PART OF THE PROCESS)

Breaking things is how you learn. Here's how to handle it:

1. **Don't panic** - Nothing is permanently broken
2. **Save your work** - If you have working code, commit and push it. Or just hit ESC and ask Claude to revert the last changes
3. **Show Claude the error** - Copy/paste the full error message
4. **Let Claude fix it** - It's seen every error before

<span class="context-label">PRO TIP</span> <span class="context-text">You can use a different Claude session (multi-clauding) or just use Claude web/desktop to objectively help you debug. Sometimes a fresh Claude without all the context can spot the issue faster.</span>

## CLAUDE'S PERMISSION REQUESTS

Claude will ask permission for various operations during your session. Here are common ones that are usually safe to auto-accept:

**Safe to Auto-Accept:**
- Reading files in your project directory
- Creating new files (you specified what to create)
- Running `ls`, `cat`, `grep` commands
- Starting dev servers (`npm run dev`, `yarn start`)
- Installing packages you asked for
- Navigating to folders in your project

**Always Review:**
- Deleting files (especially multiple at once)
- Running `rm -rf` or similar destructive commands
- Installing packages you didn't explicitly request
- Modifying files outside your project
- Running scripts you don't recognize

After a few sessions, you'll get a feel for what's routine. You can even set up allowed tools in Claude's settings to skip certain permission prompts entirely.

## TIPS AS YOU BUILD

- Push after every working change - seriously, every single time
- Keep tasks small - "Build homepage" is too big, "Show list of posts" is right-sized
- Work in bite-sized sessions (30-45 min) - prevents context overflow and lost work
- Trust your gut - if something feels too complex, it probably is
- Use your browser - stop every 20 minutes and actually click around
- Update todos as you go - mark things complete, add new discoveries
- Hit ESC when things go wrong - don't wait for Claude to finish

These patterns work whether you're building with Astro, Next.js, or whatever. The tech doesn't matter as much as the workflow.

[Next: Don't Run Out of Conversation →](/posts/dont-run-out-of-conversation)