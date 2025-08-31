---
title: "Terminal Terror to Terminal Courage"
date: 2025-08-26T10:00:00Z
excerpt: "Setting up your vibe coding environment starts with choosing your tool to talk to AI."
tags: ["getting-started", "foundation"]
draft: false
---

You want to vibe code. Build things with AI. Ship actual products. First, you need a tool to do it.

<span class="context-label">INDUSTRY CATCHUP:</span> <span class="context-text">You can vibe code with anything. Popular options include all-in-one platforms like Bolt or Replit (everything handled for you), AI features built into chat apps (ChatGPT, Claude.ai), coding assistants that work alongside code editors (Cursor, GitHub Copilot), and CLI tools that work in your terminal. CLI stands for Command Line Interface - basically typing commands instead of clicking buttons.</span>

I'm using iTerm2 with Claude Code (CLI tool where you interact by typing commands rather than clicking buttons - iTerm2 just makes the terminal experience better than Mac's default with split panes, better copy-paste, color support). [You can get it here](https://iterm2.com).

## GETTING STARTED

Open iTerm2. You'll see something like:
```
yourname@YourComputer ~ %
```
**What you're looking at:**
- `yourname` = your user account
- `YourComputer` = your machine name  
- `~` = you're in your home folder
- `%` = ready for your command

## FREQUENTLY USED COMMANDS

- **pwd** - Shows where you are (print working directory)
- **ls** - Lists what's in the current folder
- **cd foldername** - Enter a folder
- **cd ..** - Go back up one level
- **cd ~** - Jump home from anywhere
- **clear** - Clean up the screen when it gets messy
- **Ctrl+C** - Stop whatever's running (your panic button)

## TIPS FOR BETTER ITERM USAGE

- Drag any file/folder from Finder into iTerm to get its path instantly
- Drag images in when working with Claude Code - it can see them
- Tab key autocompletes folder/file names
- Up arrow brings back your last command
- Cmd+K clears the screen completely (more thorough than `clear`)

Knowing where you are in the CLI matters. You'll be starting Claude sessions inside specific project folders, so understanding navigation prevents the frustration of Claude creating files in the wrong place or not finding what you need.

Next: Creating a proper workspace for all your projects.