---
title: "Someone Said My Site Wasn't Secure (Spoiler: It Is)"
date: 2025-01-09
excerpt: "I posted my blog on Reddit and someone warned me about security issues. Here's what I learned about static sites vs. apps, and why most beginner concerns don't apply to simple blogs."
tags: ["security", "beginner", "static-sites", "reddit-reality-check"]
draft: true
---

## The Setup

Posted my new blog in a Reddit comment as an example of "vibe coding" in action. Someone immediately replied with this terrifying wall of text about source code being visible, credentials exposed, and databases vulnerable to attack.

My first thought: "Oh no, did I accidentally build something insecure?"

My second thought: "Wait, this is just a blog with markdown files..."

## The Struggle

The comment mentioned:
- Source code being "clearly visible and can be copied easily"
- Credentials in clear text everywhere 
- Apps pulling data directly from Supabase and other databases
- Too much freedom to extract sensitive data

As someone with zero coding background, this sounded terrifying. I started second-guessing everything. Should I have hidden my code better? Are there secret security things I should have done?

## The Solution

Asked Claude to audit my site for security issues. The answer was reassuring: **my simple blog is actually very secure by design**.

Here's what I learned about the difference between static sites and apps:

**What my site is:**
- Static blog with markdown content
- No database connections
- No API keys in the code
- No user data storage
- Just HTML, CSS, and some JavaScript for animations

**What the Reddit commenter was warning about:**
- Complex apps with databases (Supabase, Firebase, etc.)
- API keys hardcoded in frontend code
- Backend services exposing sensitive data
- User authentication systems
- Business logic that should be private

Completely different things! It's like someone warning me about airplane safety when I'm riding a bicycle.

## The Designer Take

As a designer, I appreciate that most security comes from architecture choices, not complexity. Simple static sites are secure because there's nothing to attack. No database to hack, no user data to steal, no API keys to exploit.

The visible source code? That's normal for websites. Even complex sites show their frontend code - it's how the web works. The security happens on the backend, which static sites don't have.

## The PM Take

This is a great reminder that not all advice applies to all situations. The Reddit commenter wasn't wrong - those security issues are real for certain types of applications. But context matters.

For someone starting with vibe coding, a static blog is actually the perfect choice security-wise. You can focus on building and learning without worrying about database security, API vulnerabilities, or user data protection.

Scale the security with the complexity of what you're building.

## Reality Check

- **Time to panic:** 0 minutes
- **Time to understand the difference:** 15 minutes  
- **Confidence gained:** Significant

The scariest part of building anything is not knowing what you don't know. But sometimes what you don't know isn't actually a problem for what you're building. Static sites are beginner-friendly partly because they sidestep most security concerns entirely.

Started with "Am I doing this wrong?" and ended with "Actually, I picked a really safe way to start."

---

**For Advanced Vibe Coders:** If you're building more complex applications with databases, APIs, and user authentication, check out the [Secure Vibe Coding Whitepaper](https://github.com/derick6/secure-vibe-coding-whitepaper) by Derick. It's a comprehensive guide covering the security challenges that do apply to advanced vibe coding projects - the stuff this simple blog happily avoids!