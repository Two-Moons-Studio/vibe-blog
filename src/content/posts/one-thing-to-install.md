---
title: "The One Thing to Install First"
date: 2025-08-31T11:00:00Z
excerpt: "Just Homebrew, nothing else. It's the app store for developer tools, and you need it."
tags: ["getting-started", "foundation", "tools"]
draft: false
---

## The Setup

Your Mac needs developer tools. But instead of downloading 47 different things from sketchy websites, you need one thing: Homebrew. It's basically the App Store, but for terminal stuff.

## The Struggle

Every tutorial: "First, install Node. And Python. And Git. And..."

How? From where? What version? Why are there 16 ways to install Node? Why does nothing work?

You end up with permission errors, version conflicts, and tears.

## The Solution

Copy this. Paste into terminal. Hit enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It'll ask for your password. That's normal. Type it (nothing will show up as you type - also normal). Hit enter.

Wait 3-5 minutes. Done.

## The Designer Take

Homebrew is Figma plugins but for your terminal. Instead of hunting for tools, you just say "brew install whatever" and it handles everything. 

Like how you don't manually download and install Figma plugins from random websites. You use the plugin browser. Same energy.

## The PM Take

This is infrastructure. You're setting up the foundation once so everything else just works. It's like setting up Slack before a project - you don't want to do it mid-sprint.

Every other tool you'll need can be installed through Homebrew. One command, no hunting for download links.

## Reality Check

⏱️ **Time:** 5-10 minutes  
🧠 **Sanity:** High (just copy-paste)  
💰 **Cost:** Free  

**What might happen:**
- "Password:" appears. Type your Mac password. Nothing shows up. That's fine.
- It takes forever. That's normal. Get coffee.
- "Permission denied" - You forgot sudo. Try: `sudo [command]`
- Asks about Xcode. Say yes to everything.

**How to know it worked:**
```bash
brew --version
```

If you see "Homebrew 4.x.x" or similar, you're golden.

Next: Getting Claude Code, your AI copilot.