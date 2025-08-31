---
title: "Installing Your Dev Tools"
date: 2025-08-31T11:00:00Z
excerpt: "Get the essential developer tools installed. This is your cookware for building."
tags: ["getting-started", "foundation", "tools"]
draft: false
---

You're going to build websites and apps like a developer. That means having the right tools installed - the cookware for coding. Without these tools, you can't ask Chef Claude to cook anything.

<span class="context-label">DEV INSIGHT</span> <span class="context-text">Developers use package managers to install tools. Think App Store but for command line tools. Mac uses Homebrew - it handles versions, permissions, updates.</span>

Normally you'd go to [Homebrew's website](https://brew.sh) and download it, but we can install it directly from the command line. After Homebrew, we'll get three essential tools. Takes about 10 minutes total.

## INSTALLING HOMEBREW

Copy this entire line, paste it into iTerm2, hit Enter:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

It'll ask for your password → type it (nothing will show up, not even dots) → hit Enter

Wait about 5-10 minutes while it downloads and sets everything up. You'll see: lots of text scrolling → "Press RETURN to continue" (press it) → password prompt → more scrolling text → "Installation successful"
When it finishes, you'll see instructions about "Next steps". Follow them - it's usually two commands to add Homebrew to your PATH. Copy and run each one.

## INSTALLING ESSENTIAL TOOLS

- **Git** - Version control (like Time Machine for your code)
- **Node** - JavaScript runtime (runs web projects on your computer)
- **GitHub CLI** - Push your code to GitHub (different from Git - Git tracks changes locally, GitHub CLI uploads them to the internet)

Run these commands one by one:

```bash
brew install git
brew install node
brew install gh
```

Each takes about a minute. You'll see progress bars → "🍺 Successfully installed" when done.

## VERIFY EVERYTHING WORKS

Check that everything installed correctly (run each line separately):

```bash
git --version
node --version
npm --version
```

You should see version numbers for each. The exact numbers don't matter - if you see numbers, you're good.

[Next: Meet Chef Claude →](/posts/meet-chef-claude)