---
title: "Subagents: Delegation on Steroids"
date: 2025-08-31T18:00:00Z
excerpt: "How to make Claude delegate work to other Claudes while you focus on decisions."
tags: ["ai-tools", "workflow", "automation"]
draft: false
---

I discovered subagents by accident when Claude asked if it should "use a specialized agent" for research. I said yes, and watched it spawn another Claude to do the work. Now I use them constantly - it's like having a team that never sleeps.

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

## MY THREE FAVORITE SUBAGENT USES

### 1. Brainstorming and Market Research

```
Use a subagent to:
- Research what blog topics are trending
- Find gaps in existing content
- Suggest 10 article ideas
- Include search volume hints
```

While you build, your researcher works. Come back to a list of validated ideas.

### 2. Content Strategy and Writing

This is the killer feature for PMs:

```
Use a subagent to write a blog post about [topic].
Context:
- Read our STRATEGY.md for voice
- 500-700 words
- Include practical examples
- Match our existing tone
```

I wrote 15 articles for this blog. Subagents drafted 5 of them. I edited, they drafted.

### 3. SEO and Marketing (Future Power)

```
Use a subagent to:
- Suggest SEO improvements for this post
- Generate meta descriptions
- Find relevant keywords
- Create social media posts
```

Your marketing team in a command.

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

## THE COMPOUND EFFECT

Each subagent task saves 15-30 minutes. Do 10 per day:
- 10 tasks × 20 minutes = 200 minutes saved
- 200 minutes = 3+ hours
- 3 hours = entire afternoon recovered

Over a week building this blog:
- 20 blog posts researched
- 10 drafted
- 5 published
- Competitive analysis complete
- SEO strategy defined

All while I focused on building.

## FUTURE SUPERPOWERS

What's coming:
- **Design subagents**: "Create 5 logo variations"
- **Testing subagents**: "Test all user flows"
- **Analytics subagents**: "Analyze traffic and suggest improvements"
- **Customer subagents**: "Summarize user feedback"

The PM who masters subagents doesn't just build faster - they build smarter.

<span class="context-label">PM ADVANTAGE</span> <span class="context-text">Developers focus on code. PMs think in systems. Subagents are systems. You're naturally better at this than most developers.</span>

You now have an army. Time to ship.

[Next: Ship It - Going Live →](/posts/ship-it-going-live)