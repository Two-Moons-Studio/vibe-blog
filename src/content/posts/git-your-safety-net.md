---
title: "Git: Your Safety Net"
date: 2025-08-31T17:30:00Z
excerpt: "Why pushing to GitHub after every small win saves your sanity."
tags: ["git", "workflow", "tools"]
draft: false
---

I lost an entire night of work because I only did commits locally and rarely pushed to GitHub. Then during a "simple" syntax debug session, Claude deleted tons of work. Git stash and restore weren't options because I hadn't pushed. NEVER AGAAAIN!

## GIT VS GITHUB (FOR NON-DEVS)

**Git** = The save system on your computer. Like hitting Cmd+S in a document, but it saves the entire history of changes.

**GitHub** = The cloud backup. Like Google Drive for code. Your code is safe even if your computer explodes.

When you "commit" you're saving locally with Git. When you "push" you're uploading to GitHub. Without pushing, your saves only exist on your computer - one Claude mistake away from disappearing.

## SETTING UP GITHUB THROUGH CLAUDE

Nice thing about AI - it can set up GitHub for you. You'll need to create a GitHub account yourself at github.com first, but after that Claude handles everything:

```
Help me:
1. Create a new repository for this project
2. Connect this project to GitHub
3. Push our code
```

Claude will walk you through every step. No terminal knowledge required. Git comes pre-installed on most systems, so Claude can use it right away.

## THE SAVE POINT SYSTEM

Think of commits like save points in a video game. Each commit is a checkpoint you can return to if things go wrong. You don't need to know Git commands - Claude does it all:

```
Save our progress. Commit and push everything.
```

Claude handles the technical stuff. You just tell it when to save. I'm push-happy - I push after literally every tiny thing that works.

## BRANCHES: YOUR EXPERIMENT PLAYGROUND

Most important concept: work on a "develop" branch, not "main". Why? Once you connect to hosting (like Vercel), "main" becomes your LIVE site. Every push to main = instantly visible to the world. You don't want half-broken experiments showing up live.

```
Create a develop branch for us to work on
```

Claude creates a separate version where you can break things safely. Your live site stays intact.

## PULL REQUESTS (PRS) EXPLAINED

A PR is like asking "can I add my changes to the main version?" It's a safety check before combining your experimental work with the stable version.

```
Create a pull request from develop to main
```

When to PR? When you've built a complete feature that works and you're ready for it to go live. Not after every tiny change - that's what pushes to develop are for.

## WHEN TO PUSH (NOT JUST COMMIT)

- After any working feature (even tiny ones)
- Before trying something risky
- Before Claude attempts a big refactor
- Every 20-30 minutes regardless
- Before ending any session
- After fixing a bug
- When you're happy with how something looks

You literally cannot push too often. Commits alone don't protect you - push, push, push.

## WHAT NOT TO COMMIT (AND WHY)

Some files should NEVER go on GitHub, even private repos:

- **Passwords and API keys** - Anyone who gets access can use your accounts
- **Personal information** - Your real name, address, phone if you want privacy
- **Large files** - Videos, huge datasets (GitHub has size limits)
- **Generated files** - node_modules, build folders (thousands of files)

You can create a file called `.gitignore` that tells Git to skip these:

```
node_modules/
.env
.DS_Store
*.log
personal-notes.md
```

Just tell Claude: "Create a gitignore file for this project" and it knows what to include based on your tech stack.

## HOW TO RECOVER WHEN THINGS BREAK

For push-happy people (like me), recovery is easier:

**Want to undo recent changes:**
```
"Use git restore to undo the recent file changes"
```

**Need the last pushed version:**
```
"Get the latest version from GitHub and discard my local changes"
```

**Lost work you forgot to push:**
- Check if your editor has local history (VS Code, Cursor do)
- If you at least committed locally: `"Use git reflog to find my lost commits"`
- If truly gone, it's gone (hence why we push constantly)

**Everything's broken:**
```
"Reset everything to the last working version on GitHub"
```

The key: stop immediately when things break. **Don't let Claude keep digging the hole deeper.** We'll talk more about this in a future article.


## WHY THIS MATTERS FOR VIBE CODERS

Without Git, you're one Claude mistake away from losing everything. With Git + GitHub, the worst case is you lose 10 minutes of work.

But here's the real power - pushing constantly lets me try weird experimental stuff. I can ask Claude to completely refactor everything, try a crazy new design, or test wild ideas. If it breaks? I just revert. This freedom to move fast and try creative directions is what makes vibe coding actually fun.

<span class="context-label">FUTURE YOU THANKS YOU</span> <span class="context-text">Six months from now when you want to update something, Git shows you exactly what you did and why. Without it, you're starting from scratch.</span>

[Next: AI Has Limits: Context Windows and Memory →](/posts/dont-run-out-of-conversation)