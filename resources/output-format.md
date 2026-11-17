<!-- Adapted for public reading from Tim’s resource library. -->
# Output Format Fit

**Client-facing name:** Don't Ask AI For Text When You Need A Tool  
**Parent model:** Input -> Process -> Output  
**Use when:** A learner asks AI for an answer, but the real need is a usable artifact in the right format.  

---

## Core Thesis

AI users often default to text because chat interfaces return text.

That is a weak default.

The right question is:

> What does this output need to let the user do?

The same input and process may need different output formats depending on the job: thinking, sending, presenting, calculating, tracking, comparing, navigating, or interacting.

This framework belongs to Tim's **Input -> Process -> Output** teaching model, specifically the **Output** layer.

---

## Output Format Selector

| Output need | Best format | Why |
|---|---|---|
| Think, draft, store context, reuse with AI | Markdown | Lightweight, versionable, AI-readable, easy to edit |
| Send formal document, collect comments, preserve professional formatting | DOCX | Best for official circulation and tracked review |
| Present live to an audience | Slides / PPTX / HTML slides | Controls sequence, pacing, and visual emphasis |
| Calculate, sort, filter, track numbers | XLSX / spreadsheet | Best for tables, formulas, and structured data |
| Explore, compare, click, filter, navigate, display status | HTML | Best for interactive, visual, spatial, or dashboard-like artifacts |
| Quick message or summary | Email / plain text | Best when the job is communication, not artifact reuse |

---

## Where HTML Fits

HTML is not only for websites.

HTML is useful when the output needs:

- layout
- visual hierarchy
- interaction
- navigation
- filtering
- comparison
- status display
- clickable structure
- lightweight dashboard behavior
- presentation without PowerPoint

Markdown flattens spatial information. HTML can make spatial or interactive information usable.

Examples:

- implementation timeline
- triage board
- interactive concept explainer
- status report dashboard
- incident postmortem
- workflow map
- decision tree

---

## Format Decision Questions

Before asking AI to produce the final output, ask:

1. **Who will use this output?**
2. **What will they do with it?**
3. **Does the output need to be read, edited, presented, calculated, navigated, or acted on?**
4. **Will the output be reused by AI later?**
5. **Does the output need interaction or visual comparison?**
6. **Does the organization expect a specific format?**

The format should follow the use case, not the chat default.

---

## Worked Example: Training Attendance Report

### Same Input

Training attendance data, LMS export, calendar, feedback comments, and department list.

### Same Process

AI summarizes, checks missing sessions, calculates attendance, extracts themes, and drafts recommendations.

### Different Outputs

| User need | Better output |
|---|---|
| Tim needs to think through the issue | Markdown notes |
| HR head needs official summary | Email or DOCX |
| L&D needs to track monthly numbers | XLSX |
| BOD needs a live update | Slide summary |
| Department heads need to explore their own team's data | HTML dashboard with department filters |

### Teaching Point

The mistake is asking:

> "Can AI make me a report?"

The better question is:

> "What job must this report do after AI produces it?"

---

## TOE / GIE Link

### TOE

At Level 1-2, users usually accept the default output format.

At Level 3, users specify reusable output standards.

At Level 4, users can build simple tools and interactive outputs.

At Level 5, output formats become part of a managed workflow system.

### GIE

At organizational level, output format also affects governance:

- DOCX/email outputs create circulation and approval trails.
- XLSX outputs create numeric audit needs.
- HTML dashboards may require hosting, access control, and versioning.
- Official records need stronger controls than draft artifacts.

---

## Decision Rule

If the user only needs to read, text may be enough.

If the user needs to work with the output, choose the format that supports the work.

Do not ask AI for text when the actual need is a tool, table, dashboard, slide, or official document.

---
