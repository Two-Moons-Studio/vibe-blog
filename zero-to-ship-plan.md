# Zero to Ship - Implementation Plan

## Vision
Teaching the CORE mechanics of AI-assisted building through raw tools (iTerm/Claude Code), not polished interfaces. Starting with PMs who can leverage vibe coding for ideation, vision alignment, and user testing.

## Design Philosophy
Editorial elegance meets function - inspired by Kinfolk/Cereal magazines with typography-first design, generous whitespace, and subtle flourishes that work across all devices.

## Page Architecture

### Three Learning Paths (Phased Release)
1. **PM Path** (Immediate) - Vibe coding for product development
2. **Designer Path** (Future) - Design to implementation
3. **Everyone Path** (Future) - AI literacy for non-shippers

### Visual Structure
```
[Fixed Logo Ribbon]

[Hero Section]
- Large serif title
- Elegant subtitle with green accent label
- Brief philosophical intro

[Path Selector]
- PRODUCT | DESIGN | EVERYONE
- Letter-spaced, uppercase tabs

[Module Cards]
- Numbered chapters
- Editorial typography
- Expandable content
- Progress tracking
```

## Technical Implementation

### File Structure
```
/src/pages/zero-to-ship.astro
/src/components/ModuleCard.astro
/src/styles/zero-to-ship.css
/public/js/zero-to-ship.js (vanilla JS)
```

### Module Design Pattern
- Large ghosted number in background
- Serif headline with generous spacing
- Delicate dividers
- Smooth expand/collapse interactions
- Progress persistence in localStorage

### Mobile Considerations
- Single column layout
- Touch-friendly interactions (48px targets)
- Typography scales thoughtfully
- Maintains editorial aesthetic

## Content Strategy

### PM Path Modules (Placeholder Structure)
1. **Foundation & Mental Models** - Terminal courage, Git basics
2. **AI Collaboration Patterns** - Claude strategies, context engineering
3. **Product Thinking in Code** - PRD to production
4. **Ship & Iterate** - Deployment, user feedback

### Content Sources
- Pull from existing blog posts as case studies
- Real examples from Jess's journey
- Honest time/cost reality checks
- PM-specific advantages and perspectives

## Editorial Details

### Typography
- Mix serif headlines with sans-serif metadata
- Variable font weight animations
- Large, confident type sizes
- Beautiful letter-spacing on labels

### Visual Elements
- Thin horizontal rules
- Module numbers as design elements
- Seasonal accent color highlights
- Generous whitespace throughout

### Interactions
- Smooth content reveals
- Subtle hover effects (desktop)
- Progress indication
- No jarring animations

## Next Steps

1. Build basic page structure with placeholder content
2. Implement editorial styling
3. Add vanilla JS for interactions
4. Content creation session for actual curriculum
5. Pull relevant content from existing posts
6. Write module descriptions and outcomes

## Success Criteria
- Loads fast (minimal JS)
- Works beautifully on mobile
- Maintains editorial aesthetic
- Clear learning progression
- Scalable to additional paths