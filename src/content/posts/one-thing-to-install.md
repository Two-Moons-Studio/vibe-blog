---
title: "The One Thing to Install First"
date: 2025-08-31T11:00:00Z
excerpt: "Homebrew: The app store for developer tools. Install this once, everything else becomes easy."
tags: ["getting-started", "foundation", "tools"]
draft: false
---

Every tutorial assumes you already have their tools installed. "First, make sure you have Node 18+" or "You'll need Python 3.9 or higher." But they never tell you HOW to install these things.

You end up on sketchy download sites, choosing between 15 different installers, dealing with version conflicts, permission errors. It's a mess.

<span class="context-label">QUICK CONTEXT:</span> Developers use package managers to install tools. Think of it like the App Store but for command line tools. On Mac, everyone uses Homebrew. It handles versions, permissions, updates, everything.

Install Homebrew once, then everything else is just `brew install whatever`.

**Installing Homebrew:**

Copy this entire line, paste it into Terminal, hit Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It'll ask for your password. Type it. Nothing will show up as you type (not even dots). That's normal. Hit Enter.

Wait. It takes 5-10 minutes. It's downloading and setting up a bunch of stuff. Get coffee.

**What you'll see:**
- Lots of text scrolling by = normal
- "Password:" = type your Mac password
- Something about Xcode = say yes
- "Installation successful!" = you're done

**Check it worked:**
```bash
brew --version
```

If you see "Homebrew 4.something.something", you're golden.

**Why this matters:**

From now on, when tutorials say "install Node" or "install Git" or "install literally anything", you just:

```bash
brew install node
brew install git
brew install whatever-they-said
```

No download pages. No version confusion. No permission errors. Homebrew handles it all.

Think of it as the foundation. You can't build a house without a foundation, and you can't install developer tools properly without Homebrew.

Next: Getting Claude Code, the AI that'll actually help you build stuff.