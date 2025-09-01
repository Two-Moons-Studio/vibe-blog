---
title: "Meet Chef Claude"
date: 2025-08-31T12:00:00Z
excerpt: "Claude Code is your vibe code chef. Time to introduce yourself."
tags: ["getting-started", "ai-tools", "foundation"]
draft: false
---

There's always some new AI coding tool trending. I stuck with Claude Code because after trying a bunch, Claude (especially the latest Opus 4.1 and Sonnet models) gets it right more often when shipping actual products - not just fancy demos or toy examples.

I'm still learning, but I've invested time figuring out Claude's quirks and power-user tricks. Could I switch when GPT-5 drops? Maybe. But there's value in actually mastering one tool instead of constantly starting over. Plus [r/claudeai](https://reddit.com/r/claudeai) is where people share techniques that actually work - it's been invaluable.

<span class="context-label">AI CONTEXT</span> <span class="context-text">Most people know Claude from the web interface at claude.ai. Claude Code is the same AI but lives in your terminal instead. You type commands, Claude responds with code and explanations - no browser tabs, no copy-pasting, just direct conversation in your terminal.</span>

## INSTALLING CLAUDE CODE

If you already have the [Claude desktop app](https://claude.ai/download) installed, you already have the CLI - skip to "Meeting Your Chef" below.

Otherwise, since you have Homebrew, just run:

```bash
brew install claude
```

Takes about a minute. When it's done, test it:

```bash
claude --version
```

You should see a version number. Now you have Claude in your terminal.

## MEETING YOUR CHEF

First, navigate to your coding folder (if you named it `dev`):

```bash
cd ~/dev
```

Create a project folder - either use `mkdir my-vibe-project` in terminal or just make a new folder in Finder. Then navigate into it:

```bash
cd my-vibe-project
```

Now start Claude in this folder:

```bash
claude
```

<span class="context-label">WHY THIS MATTERS</span> <span class="context-text">Claude creates files wherever you start it. Accidentally started on Desktop? It's about to become a graveyard of random HTML files and folders. Start in a project folder? Everything stays organized. Plus Claude can only see files in the folder where you started it.</span>

You'll see Claude's welcome message. Here's what just happened: Claude is now running in this specific folder on your computer. Unlike the web UI or desktop app, Claude can now actually touch your files - create folders, write code, read what's there, rearrange things. It's like having a chef actually cooking in your kitchen versus just reading you recipes.

Now let's try creating something:

```
create a simple HTML file with a haiku about learning something new
```

You'll see code flying across your screen - that's Claude writing the HTML. Depending on your settings, it might ask "Would you like me to create this file?" Just say yes or press enter.

Claude will create an HTML file → add proper structure → include your heading → tell you exactly what it did.

Ask Claude for the file path or type `open index.html` to open it in your browser (on Mac, Cmd+click any file path in the terminal to open it). 

**And there it is - you just vibe coded your first thing.**

## HOW CHEF CLAUDE WORKS

Think of Claude as a chef who:
- Knows every recipe (literally trained on every coding language and framework)
- Can adapt to your taste (your specific style)
- Explains everything as you go (you learn by building, no judgment for "dumb" questions)
- Acts as your advisor (helps plan, suggests approaches, collaborates on ideas)

The key is being specific about what you want. "Make me a website" is like asking a chef to "make food." But "create a landing page with a hero section and email signup" gives Claude a clear recipe to follow.

---

**Starting Simple:** We created a haiku page to show the basic flow. But this is where vibe coding takes off. You could drop in a massive prompt right now and spin up an entire app. 

Now if you want to build something you can iterate on over multiple sessions, ship live, and continue evolving - keep reading. The next articles cover how to vibe together complex sites and apps, plus the patterns that make you an effective viber.

[Next: Good Planning is Good Vibe Coding →](/posts/start-like-a-pm)