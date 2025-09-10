---
title: "Essential AI Terminology for Product Teams in 2025"
date: 2025-09-10T12:00:00Z
excerpt: "AI conversations are full of jargon nobody explains. Quick definitions for terms you keep hearing."
tags: ["ai", "terminology", "getting-started", "i-know-nothing", "beginner-friendly"]
draft: false
---

The [zero to ship](/zero-to-ship) path means cutting through AI buzzwords to focus on what matters for builders. These are the terms you'll hear in every product meeting, defined for people who need to make decisions and ship things. Each one includes what it actually means for the stuff you're trying to build.

## Foundation & Models

**Foundation Model** – Large, pre‑trained model (text/vision/multimodal) adapted to many tasks (e.g., GPT, Gemini, Llama). Product impact: you compose solutions on top; rarely train from scratch

**Multimodal** – Handles multiple types (text, image, audio, video). Product impact: richer UX (e.g., text + image instructions)

**Token** – The unit an LLM processes (≈ word fragment). Product impact: drives context limits, latency, and cost.

## Data & Retrieval

**Embedding** – Numeric "meaning" vectors for similarity search. Product impact: backbone of semantic search and recommendations

**Vector Database** – Stores embeddings; finds nearest neighbors fast. Product impact: enables RAG and "find similar" at scale.

**Graph Database / Knowledge Graph** – Entities + relationships as nodes/edges. Product impact: brand/asset ontologies; policy checks.

**RAG (Retrieval‑Augmented Generation)** – Retrieve first, then generate using retrieved content. Product impact: reduces hallucinations; keeps answers current

**Agentic RAG** – RAG plus an agent that plans multi‑step retrieval (reformulate, rerank, verify). Product impact: higher accuracy on complex queries.

**Multimodal RAG** – Retrieval across text + visuals. Product impact: crucial for PDFs, decks, and creative assets.

**Grounding** – Tie outputs to cited sources/data. Product impact: improves trust and reviewability.

**Extraction** – Pulling structured data from unstructured sources (PDFs, emails, images, web pages). Product impact: turns messy docs into usable fields for workflows; powers form auto-fill, invoice processing, resume parsing.

## Agents & Orchestration

**Agent** – Software that can perceive → plan → act toward a goal, sometimes autonomously. Product impact: shifts UX from "do step" to "get outcome."

**Headless Agent** – Non‑UI agent running in the background. Product impact: schedule/chain complex tasks without user intervention.

**A2A (Agent‑to‑Agent)** – Agents collaborating/handoff to finish tasks. Product impact: compose specialists (e.g., brief‑writer → layout‑fixer → QA).

**MCP (Model Context Protocol)** – Open protocol to discover/connect tools and agents safely; standardizes capability descriptions. Product impact: fewer bespoke integrations; more reliable composition

**Tool / Function Calling** – LLM invokes APIs/tools with structured inputs/outputs. Product impact: how chat "clicks buttons" to do real work.

**Planner** – Decomposes goals into steps; selects tools/agents. Product impact: determines reliability/latency/cost of multi‑step runs.

**Orchestration** – Coordinating models/tools/agents (sequential, concurrent, group‑chat, handoff). Product impact: pattern that shapes quality & UX.

**.mds (markdown files like agent.md, claude.md)** – Markdown‑based, self‑describing specs for models/agents (name, purpose, capabilities, inputs/outputs, limits, safety, and invocation/MCP hooks). Product impact: the contract that makes discovery, selection, and orchestration predictable across teams and tools.

## Prompting & Safety

**System/Developer/User Prompts** – Roles that steer behavior and tools. Product impact: structure inputs for consistent behavior.

**Prompt Template** – Reusable prompt with variables/examples. Product impact: faster shipping; consistent results.

**Guardrails** – Policies/filters to prevent unsafe/off‑task outputs. Product impact: compliance + brand safety in production.

**Hallucination** – Confidently wrong output. Product impact: mitigate via RAG, constraints, and evals.

**Prompt Injection / Jailbreak** – Malicious inputs that subvert instructions. Product impact: core threat model for chat+tools.

## Memory & Context

**Session** – The scoped interaction with working state. Product impact: cost, latency, and continuity are session‑bound.

**Context Window** – Max tokens a model can "see" at once. Product impact: governs how much history/docs fit; drives chunking/compression.

**Short‑ vs Long‑Term Memory** – Ephemeral chat history vs durable user/project memory. Product impact: continuity across surfaces; mind privacy/consent.

**Reranking / Context Compression** – Reorder top results and trim to essentials before generation. Product impact: boosts answer quality within token limits.

## Governance & Evaluation

**Responsible / Trustworthy AI** – Valid, reliable, secure, private, explainable, and fair systems. Product impact: enterprise‑grade adoption bar.

**Eval (Evaluation)** – Automated + human tests to measure correctness, safety, UX (offline tests, red‑teaming, A/Bs). Product impact: gates releases; prevents regressions.

**PII / Data Minimization** – Protect sensitive data; send only what's needed. Product impact: privacy posture; vendor contracts; routing rules.

## Infrastructure & Performance

**Model Serving** – Deploy models for real‑time/batch inference (latency, autoscaling, versioning). Product impact: SLOs and rollback paths for AI features.

**Latency Budget** – Time budget across retrieval, planning, tool calls, generation. Product impact: parallelize, cache, and prune to meet UX targets.

**Cost per Token / per Call** – Unit economics for LLM features. Product impact: prompt design + RAG + caching impact margins.

**Caching / Reuse** – Store frequent results (embeddings, tool outputs, completions). Product impact: performance/cost win with freshness trade‑offs.

**Edge AI** – Run models/pipeline parts on device. Product impact: low latency + offline scenarios.