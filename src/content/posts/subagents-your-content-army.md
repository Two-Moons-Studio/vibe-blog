---
title: "Subagents: Your Content Army"
date: 2025-08-31T18:00:00Z
excerpt: "How to write 10 articles while building your site."
tags: ["ai-tools", "workflow", "automation"]
draft: false
---

My vibe code mentor encouraged me to use subagents for tasks. While he used them for engineering stuff, I decided to test them with something I understood better: content strategy. In experimenting, I had a lot of fun realizing I could make mini-teams of Claude. I'm lazy about wearing all these hats myself, and it was really amazing.

## WHAT ARE SUBAGENTS?

[Subagents](https://docs.anthropic.com/en/docs/claude-code/sub-agents) are specialized AI assistants that Claude Code can delegate tasks to. Each one operates in its own context window, separate from your main conversation. Here's the flow:

- **You** → Ask Claude to do something
- **Claude** → Recognizes this needs a specialist and delegates to a subagent
- **Subagent** → Works independently in its own context
- **Subagent** → Returns results to Claude
- **Claude** → Synthesizes and presents the final output to you

Claude acts as the orchestrator - it decides when to use subagents, manages them, and consolidates their work into coherent responses.

## THE TASK TOOL

When you ask Claude to use a subagent, it invokes the Task tool:

```
Use a subagent to research blog platforms and compare features
```

Claude spawns a research agent that:
1. Searches the web
2. Compares options
3. Creates a summary
4. Reports back to Claude
5. Claude synthesizes and presents to you

## EXAMPLE: CONTENT STRATEGY FOR THIS SITE

Here's an example of how I used subagents for this blog:

```
I want to create a series of articles taking my learnings from 
the various .mds I supply you + whatever makes sense to layer in 
from best practices people have discovered around the web.

Use subagents to:
- Do web research on Claude best practices
- Look at Anthropic's documentation and guidelines
- Research what vibe coders are struggling with on Reddit
- Consolidate everything into themes

Give me a proposal of articles to write organized by theme.
```

Claude deployed multiple subagents in parallel:
```
I'll deploy subagents for this research:
- Research agent: Gathering Claude best practices from web
- Documentation agent: Analyzing Anthropic guidelines
- Community agent: Finding common pain points from Reddit

[45 seconds later]

Based on the agents' research, here's my proposal organized by theme...
```

I got a complete content strategy with 20+ article ideas organized into learning modules.

## OTHER POWERFUL CONTENT-RELATED USE CASES

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

## THE PARALLEL WORKFLOW (MULTI-CLAUDING)

My actual workflow building this blog:

**Window 1: Claude Code**
```
Building the homepage component...
```

**Window 2: Claude (separate session in [iTerm](/posts/terminal-terror-first-time) window)**
```
While I build, use subagents to:
- Write 3 blog posts
- Research hosting options
- Create marketing copy
```

I build, subagents research and write, everything happens simultaneously. This "multi-clauding" approach lets you leverage subagents while keeping your main coding session focused.

## SUBAGENT PROMPTING TIPS

Be specific about:
- **Context**: What background to consider
- **Output format**: Bullet points, paragraphs, markdown
- **Length**: Word count or scope
- **Examples**: "Like our existing posts"
- **Constraints**: "No technical jargon"

## THE PARALLEL ADVANTAGE

Without subagents, you're doing everything sequentially - build, then write content, then do SEO, then create marketing. It takes weeks and months.

With subagents, you parallelize. While you build the homepage, a subagent writes your about page. While you fix bugs, another researches keywords. While you style components, a third drafts blog posts.

In **one night** I got:
- 20+ blog posts drafted
- SEO strategy defined
- Marketing copy written

All while I focused on actually building the site. I built this entire blog in **two days** because I wasn't doing everything myself, I was orchestrating subagents.

[Anthropic's multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system) shows this approach can outperform single-agent systems by 90% on complex tasks. The key is parallel exploration - multiple agents tackling different aspects simultaneously.

[Next: Design Tokens: Make Everything Match →](/posts/design-tokens-one-file)