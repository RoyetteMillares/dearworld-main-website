---
name: stakeholder-reporting
description: Generates high-impact, professional daily task reports and project status updates for Robert X. Fogarty and stakeholders.
---

# Stakeholder Reporting Skill

Use this skill whenever the user provides a list of daily tasks or asks for a project update for Robert X. Fogarty / Dear World.

## Input Handling
The user will likely provide a raw, messy, or shorthand list of tasks performed today. Your job is to translate these into the "Dear World Professional" voice.

## Style Guidelines

1.  **Format**: Use a single, high-impact numbered list.
2.  **Title**: Start with the project or site name (e.g., "Stories Dear World Site:").
3.  **Tone**: Technical but evocative. Use strong verbs like:
    *   *Engineered, Architected, Refined, Hardened, Synthesized, Deployed, Optimized, Orchestrated, Polished.*
4.  **Content Strategy**:
    *   **Short but Descriptive**: Keep descriptions tight (1 sentence preferred) but dense with value.
    *   **Focus on Value**: Don't just say "fixed bug." Say "Hardened logic to prevent edge-case failures."
    *   **Design & Performance**: Highlight aesthetic precision and speed.
5.  **Layout Rules**:
    *   **No emojis**.
    *   **No asterisks** (use plain text style for bolding if needed, or strictly plain text).
    *   **Numbering**: Use clear numbering (1., 2., 3.).
    *   **Output Container**: **ALWAYS** wrap the final result in a Markdown code block (` ```markdown `) so the user can copy/paste it directly into an email.

## Daily Protocol (For "Today's Tasks")

When the user asks to "list down tasks we did today," allow for a longer list than the standard project update, but keep individual items concise.

### Reference Template

```markdown
Project/Site Name: Daily Engineering Log

1. Navigation Architecture - Refined mobile breakpoint behaviors to ensure bespoke responsiveness across devices.
2. Asset Optimization - Compressed and converted cinematic imagery to Next-Gen formats, reducing load times by 40%.
3. API Integration - Hardened the data fetch logic to ensure high-fidelity delivery of user stories during high-traffic periods.
4. UI Polish - Adjusted typography hierarchy to align strictly with the Dear World design philosophy.
5. Backend Security - Patched potential vulnerability vectors to maintain a hardened site infrastructure.