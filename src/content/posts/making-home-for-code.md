---
title: "Creating Your Code Workspace"
date: 2025-08-31T10:00:00Z
excerpt: "Your code needs a home. Not Desktop. Not Downloads. A real home."
tags: ["getting-started", "foundation"]
draft: false
---

Every tutorial assumes you already have a "project directory." They say "cd into your project folder" like you know what that means. Meanwhile everything's scattered across Desktop and Downloads.

Quick context: developers keep all their code in one place. Usually `~/dev` or `~/projects`. Some people use `~/code` or `~/workspace`. I went with `~/coding` because it made sense to me, but `~/dev` is probably most common. Pick whatever feels right - the point is having one dedicated place.

Make yours:

```bash
cd ~
mkdir dev
cd dev
```

Now you have `~/dev` as your home base.

Each project will get its own folder in here. When you work with Claude on different projects, each one can have its own instructions file (CLAUDE.md) so Claude knows what you're building. You're basically creating a workspace where everything has a place.

You'll probably end up with subfolders like `projects` for real stuff, `learning` for tutorials, `playground` for experiments. But right now, just having `~/dev` means you're organized like actual developers.

Drag the folder to your Finder sidebar. You'll use it constantly.

Next time someone says "navigate to your project directory," you'll know exactly where you're going.