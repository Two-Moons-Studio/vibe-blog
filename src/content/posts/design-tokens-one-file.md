---
title: "Design Tokens: One File to Rule Them All"
date: 2025-08-31T17:00:00Z
excerpt: "How to make your site look intentional, not random."
tags: ["design", "building", "workflow"]
draft: false
---

My first project with Claude looked like five different people built it. Blue buttons here, green ones there, random fonts everywhere. Claude was solving each component in isolation without any system.

## THE RANDOM LEGO PROBLEM

Without design guidance, Claude builds functionally but not cohesively. Each component works, but nothing matches. It's solving each request in isolation without considering the whole.

<span class="context-label">LEARNED THIS</span> <span class="context-text">Claude will use inline styles, random colors, and make up spacing values on the spot unless you give it a system to follow.</span>

## DESIGN TOKENS: YOUR LEGO SET

Design tokens are your consistent building blocks. One file that controls everything:

```css
/* tokens.css */
:root {
  /* Colors */
  --color-primary: #000000;
  --color-background: #FFFEF5;
  --color-accent: #8B956D;
  
  /* Typography */
  --font-heading: 'Inter', sans-serif;
  --font-body: 'Lora', serif;
  
  /* Spacing */
  --space-small: 8px;
  --space-medium: 16px;
  --space-large: 32px;
}
```

Now Claude uses `var(--color-primary)` instead of random hex codes. Change one value, everything updates.

## ADDING VISUAL REFERENCES

Claude Desktop shines here. You can show Claude screenshots:

```
Here's a site I like: [screenshot]
Match this visual style using our design tokens.
```

Or describe what you want:

```
Make it feel like:
- Stripe's clean minimalism
- Medium's readable typography  
- Notion's subtle interactions
```

Claude translates these references into your design system.

## THE "MAKE IT LIKE" SHORTCUT

Don't know design? Use references Claude already knows:

- **"Make it like Stripe"** - Clean, minimal, professional
- **"Make it like Medium"** - Editorial, readable, focused on content
- **"Make it like Linear"** - Modern, precise, subtle animations
- **"Make it like a newspaper"** - Traditional, serif fonts, clear hierarchy

Claude knows these design languages and can approximate them using your tokens.

## WHY CLAUDE NEEDS YOUR HELP

Claude doesn't remember that button style from three components ago. It doesn't know your brand colors. It can't see the full page while coding one component.

You need to:
1. Define the system once (tokens)
2. Remind Claude to use it
3. Catch inconsistencies early
4. Update tokens as patterns emerge

## BUILDING SYSTEMATICALLY

Wrong way:
```
"Make a button"
"Make another button"
"Make a third button"
[Three different button styles]
```

Right way:
```
"Create a button component using our design tokens.
This is our standard button for the whole site."
```

Then reuse:
```
"Use our standard button component here"
```

<span class="context-label">SYSTEMATIC THINKING</span> <span class="context-text">Every new element should either use an existing pattern or become the new pattern. No one-offs.</span>

## THE DESIGN REFERENCE WORKFLOW

My process for maintaining consistency:

**Step 1: Start with tokens**
```
Create a tokens.css with our color palette, typography, and spacing scale
```

**Step 2: Create base components**
```
Build our core components: Button, Card, Header.
Use only design tokens, no hardcoded values.
```

**Step 3: Reference constantly**
```
"Using our existing button component..."
"Match the spacing from our header..."
"Keep consistent with our card style..."
```

**Step 4: Evolve the system**
```
"We need a new color. Add it to tokens.css as --color-warning"
```

## REAL EXAMPLE: THIS BLOG'S SYSTEM

```css
/* My actual tokens.css (simplified) */
:root {
  /* Editorial color palette */
  --sage: #8B956D;
  --cream: #FFFEF5;
  --ink: #000000;
  
  /* Typography scale */
  --text-xs: 0.75rem;
  --text-base: 1rem;
  --text-lg: 1.25rem;
  --text-xl: 2rem;
  
  /* Consistent spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --space-8: 2rem;
}
```

Every component references these. Change sage to blue? Entire site updates. That's the power.

## WHEN YOU DON'T KNOW DESIGN

You don't need to be a designer. You need to:

1. **Pick a reference** - "Like Substack but simpler"
2. **Stay consistent** - Use the same patterns everywhere
3. **Start minimal** - Black, white, one accent color
4. **Let Claude systematize** - It's good at creating design systems

## WHY THIS MATTERS

The difference between a professional site and an amateur one isn't fancy animations or gradients. It's consistency. When every button looks the same, every heading uses the same font, every card has the same spacing - your site looks intentional.

Design tokens force this consistency. Claude can't randomly pick colors because the colors are defined. It can't make up spacing because the spacing scale exists. Your site looks like one person built it because one system controls it.

<span class="context-label">DESIGNER SECRET</span> <span class="context-text">Most "designed" sites are just consistent. Same spacing, same colors, same patterns. That's 90% of looking professional.</span>

[Next: Deployment Without Fear →](/posts/hello-moonlight)