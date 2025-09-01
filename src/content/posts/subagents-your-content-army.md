---
title: "Subagents: Your Content Army"
date: 2025-08-31T18:00:00Z
excerpt: "How to write 10 articles while building your site."
tags: ["ai-tools", "workflow", "automation"]
draft: false
---

I discovered subagents by accident when Claude asked if it should "use a specialized agent" for research. I said yes, watched it spawn another Claude to do the work, and realized I'd just unlocked the ability to delegate.

## WHAT ARE SUBAGENTS?

Subagents are specialized Claudes that Claude creates to handle specific tasks. Think of it as delegation:

- **You** → Claude (your main assistant)
- **Claude** → Subagent (specialized worker)
- **Subagent** → Completes task and reports back

You manage Claude. Claude manages the specialists.

## THE TASK TOOL

The magic happens with the Task tool:

```
Use a subagent to research blog platforms and compare features
```

Claude spawns a research agent that:
- Searches the web
- Compares options
- Creates a summary
- Reports back to Claude
- Claude reports to you

You get the insights without the work.

<span class="context-label">THE MAGIC</span> <span class="context-text">Subagents can work in parallel. I've had 5 different research tasks running while building. It feels like cheating.</span>

## THE KILLER USE CASE: CONTENT CREATION

This is where subagents shine for vibe coders:

```
Use a subagent to write a blog post about [topic].
Context:
- Read our STRATEGY.md for voice
- 500-700 words
- Include practical examples
- Match our existing tone
```

I wrote 15 articles for this blog. Subagents drafted 5 of them. I edited, they drafted. While I was [building components](/posts/from-plan-to-product), subagents were writing content.

## OTHER POWERFUL USES

**Research and validation:**
```
Use a subagent to research what blog topics are trending
and find gaps in existing content
```

**Documentation:**
```
Use a subagent to write setup instructions based on
what we just built
```

**Marketing copy:**
```
Use a subagent to write meta descriptions and 
social media posts for our content
```

## REAL EXAMPLE: CONTENT GENERATION

Here's exactly how I used subagents for this blog:

**Me to Claude:**
```
I need 5 blog posts about common Claude mistakes. 
Use subagents to:
1. Research common user frustrations
2. Draft outlines for each post
3. Write the first post in full
```

**Claude's response:**
```
I'll deploy subagents for this task:
- Research agent: Gathering common Claude pain points
- Content strategist: Creating post outlines
- Writer: Drafting the first post

[30 seconds later]

Here's what the agents found...
```

I got:
- List of 15 common mistakes
- 5 detailed outlines
- One complete draft

Time spent by me: 2 minutes.

## WHEN TO DELEGATE VS DIRECT

**Use subagents for:**
- Research tasks
- Content creation
- Competitive analysis
- Idea generation
- Documentation writing
- Bulk operations

**Do directly with Claude for:**
- Code building
- Design decisions
- Architecture choices
- Bug fixing
- Real-time iteration

<span class="context-label">THE RULE</span> <span class="context-text">If you'd delegate it to an intern, delegate it to a subagent. If you'd do it yourself, work with Claude directly.</span>

## THE PARALLEL WORKFLOW

My actual workflow building this blog:

**Window 1: Claude Code**
```
Building the homepage component...
```

**Window 2: Claude (separate session)**
```
While I build, use subagents to:
- Write 3 blog posts
- Research hosting options
- Create marketing copy
```

I build. Subagents research and write. Everything happens simultaneously.

## SUBAGENT PROMPTING TIPS

Be specific about:
- **Context**: What background to consider
- **Output format**: Bullet points, paragraphs, markdown
- **Length**: Word count or scope
- **Examples**: "Like our existing posts"
- **Constraints**: "No technical jargon"

Bad prompt:
```
"Write about Claude"
```

Good prompt:
```
"Write a 600-word beginner-friendly post about Claude mistakes, 
matching the tone in STRATEGY.md, with 3 practical examples"
```

## WHY THIS CHANGES EVERYTHING

Without subagents, you're doing everything sequentially - build, then write content, then do SEO, then create marketing. It takes weeks.

With subagents, you parallelize. While you build the homepage, a subagent writes your about page. While you fix bugs, another researches keywords. While you style components, a third drafts blog posts.

I built this entire blog in a week because I wasn't doing everything myself. I was orchestrating.

## THE COMPOUND EFFECT

Over a week building this blog:
- 20 blog post ideas researched
- 10 articles drafted
- 5 fully edited and published
- SEO strategy defined
- Marketing copy written

All while I focused on actually building the site. That's the power - you become a conductor, not a solo performer.

<span class="context-label">PM ADVANTAGE</span> <span class="context-text">Developers think in code. PMs think in systems. Subagents are systems. You're naturally better at orchestrating multiple workstreams than most developers.</span>

[Next: Design Tokens: One File to Rule Them All →](/posts/design-tokens-one-file)