---
title: "Version Control Without the Drama"
date: 2025-08-31T17:30:00Z
excerpt: "How to never lose work again, with Claude handling Git for you."
tags: ["git", "workflow", "tools"]
draft: false
---

I once lost three hours of work because I didn't commit and my laptop crashed. Never again. Git is basically a save button on steroids, and the best part is Claude handles all the commands for you.

## WHY PUSHING MATTERS SO MUCH

Your code lives in three places:
1. **Your computer** - Can die, get coffee spilled on it
2. **Git's memory** - Saved but still local
3. **GitHub** - Safe in the cloud forever

I learned this when my laptop died mid-project. Everything local was gone, but GitHub had everything I'd pushed.

<span class="context-label">MY RULE NOW</span> <span class="context-text">If it's not pushed to GitHub, it doesn't exist. Every break, every small win, every "this works!" moment - push it.</span>

## CLAUDE'S GIT WORKFLOW

You don't need to know Git commands. Claude does it all:

```
Save our progress. Commit and push everything.
```

Claude will:
```bash
git add .
git commit -m "Add homepage component with recent posts"
git push
```

That's it. Your work is safe.

## THE INSURANCE POLICY

Here's why we push constantly:

**Scenario 1: Claude breaks something**
```
"Claude just deleted all my styles!"
Solution: git pull (recovers from GitHub)
```

**Scenario 2: You break something**
```
"I tried to edit and ruined everything!"
Solution: git checkout . (restores last commit)
```

**Scenario 3: Computer crashes**
```
"My laptop died!"
Solution: Clone from GitHub on new computer
```

Every push is an insurance policy.

## COMMIT MESSAGES THAT MAKE SENSE

Claude's default commit messages are garbage:
- "Update files"
- "Fix issues"
- "Make changes"

Useless. Teach Claude better:

```markdown
## Git Commit Messages
Format: "Add [what], Update [what], Fix [what]"
Examples:
- "Add blog post template with frontmatter"
- "Update homepage to show 5 recent posts"
- "Fix mobile navigation menu spacing"
```

Now future-you knows what each save point contains.

## WHEN TO COMMIT

Not just when things work. Also:

**Before risky changes:**
```
"Push current working version, then try the refactor"
```

**After small wins:**
```
"Header looks good. Commit this."
```

**Before context runs out:**
```
"Let's commit before we run out of tokens"
```

**End of every session:**
```
"Commit and push everything before we close"
```

<span class="context-label">COMMIT OFTEN</span> <span class="context-text">You can't commit too often. You can definitely commit too rarely. When in doubt, commit.</span>

## THE RECOVERY WORKFLOW

When things break (not if, when):

**Step 1: Don't panic**
```
"Stop. Let's assess what broke."
```

**Step 2: Check what changed**
```
"Show me git status and git diff"
```

**Step 3: Recover smartly**
```
If small issue: "Fix just this specific problem"
If big mess: "Let's restore from the last commit"
```

**Step 4: Learn and continue**
```
"Add a rule to CLAUDE.md to prevent this"
```

## GITHUB SETUP THROUGH CLAUDE

Don't have GitHub yet? Claude sets it up:

```
Help me:
1. Create a GitHub account
2. Create a new repository
3. Connect this project to GitHub
4. Push our code
```

Claude walks you through every step. No terminal kung-fu required.

## REAL EXAMPLE: MY SAVE PATTERN

Building this blog:

```
9:00am - "Set up Astro project" → commit → push
9:20am - "Add header component" → commit → push
9:35am - "Create homepage layout" → commit → push
9:45am - "Trying new nav style" → breaks → git restore
10:00am - "Add blog post template" → commit → push
```

Every 15-20 minutes, a save point. Any disaster recovers in seconds.

## WHAT NOT TO COMMIT

Claude might try to commit:
- `.env` files with passwords
- `node_modules` (thousands of files)
- `.DS_Store` (Mac junk)
- Personal notes

Your `.gitignore` file prevents this:

```
node_modules/
.env
.DS_Store
*.log
personal-notes.md
```

Claude reads this and skips these files automatically.

## THE COLLABORATION BONUS

Once on GitHub, you can:
- Share your project ("Check out what I built!")
- Get help ("Can someone fix this?")
- Deploy automatically (Vercel/Netlify watch GitHub)
- Work from any computer

<span class="context-label">FUTURE YOU THANKS YOU</span> <span class="context-text">Six months from now, you'll want to update something. With Git, you can see exactly what you did and why. Without it, you're starting over.</span>

Your work is now immortal. Every change tracked, every version saved. Time to leverage Claude's superpowers.

[Next: Subagents - Your PM Superpowers →](/posts/subagents-pm-superpowers)