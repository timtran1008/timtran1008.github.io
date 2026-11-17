<!-- Adapted for public reading from Tim’s resource library. -->
# Move beyond one-off prompts

## 1. Personal AI Proficiency (The Individual)
**Framework:** **TOE** (Task Complexity, Output Quality, Effort) — *academic alias: TQE (Task–Quality–Effort)*
**Goal:** Move from "User" to "Agent Designer."

**TOE definitions**
- **Task Complexity (T):** How complex, ambiguous, or cross-domain a task the person can successfully handle with AI.
- **Output Quality (O):** The quality of the final usable deliverable against the standard that actually matters for the task.
- **Effort (E):** How much human work is required to get the output to that standard, consistently.

> **Important:** O measures final output quality, not first-draft quality. E measures the human effort needed to reach that quality.

### Level 1: Ask (The Tourist — tries AI once, takes whatever comes back)
- **Behavior:** Types 1-2 sentences -> copies the first output.
- **Tools:** Free web-chat interfaces.
- **Breaks when:** Tasks need context or nuance.
- **Mindset:** "AI is a search engine that writes."

### Level 2: Instruct (The Power User — knows the tricks, still does everything manually)
- **Behavior:** Uses structured prompts (RTCF). Saves prompts into Custom GPTs/Gems.
- **Tools:** Paid Pro subscriptions, Custom GPTs.
- **Breaks when:** New task types appear; prompts don't transfer.
- **Mindset:** "I need a prompt for every specific task."

> **The Structure Gap:** If AI feels inconsistent to you, you're at L1-L2. The inconsistency isn't AI's limitation — it's the absence of structure around AI. L1-L2 is one person, one prompt, one shot. No feedback loop, no verification, no iteration. That's not how any professional works — it's not how AI should work either. The jump to L3 is adding structure: standards, reusable systems, and the ability to *verify* output — not just generate it.

### Level 3: Systematize (The Architect — builds reusable systems, not one-off prompts)
- **Behavior:** Uses **Master Prompts** (Role + Variable Task). Manages "Context Rot" by pinning standards. Uses Markdown (.md) for instruction logic.
- **Tools:** Advanced model settings (Temperature, Top-p), Project-based context files.
- **Breaks when:** Needs to build functional tools, not just text.
- **Mindset:** "I build engines, not just prompts."

### Level 4: Build (The Designer — makes AI do things, not just say things)
- **Behavior:** Designs **Value Hierarchies** (rules for when goals conflict). Prototypes functional tools.
- **Tools:** Low-code agents, simple API connections.
- **Breaks when:** Volume and recurring processes scale beyond one person.
- **Mindset:** "AI can build the solution, not just describe it."

### Level 5: Productize (The Orchestrator — manages a system that manages the work)
- **Behavior:** Operates a personal ecosystem of autonomous agents. Designs PDCA harnesses (Plan-Do-Check-Act) that coordinate multiple agents — and reuses the same coordination patterns across different domains.
- **Tools:** Personal automation stacks, custom dev environments.
- **Mindset:** "I manage a system that manages my work."

### TOE Scoring Matrix

**T — "How complex is the task this person can reliably handle with AI?"**
**O — "How good is the final deliverable against the task's real standard?"**
**E — "How much human effort per task to reach that standard?"**

| Level | Task Complexity (T) | Output Quality (O) | Effort (E) | What Loses Value |
|-------|-------------------|-------------------|------------|-----------------|
| 1 Ask | Single-step, clearly defined | Usable only for low-stakes tasks | Minimal — but only because the task is trivial | Nothing yet — everything is manual |
| 2 Instruct | Multi-step, repeatable with a template | Meets standard after significant human editing | High per task — crafting and editing every time | Basic drafting, simple research, translation |
| 3 Systematize | Complex, ambiguous, requiring judgment calls | Meets standard after minor human editing | High upfront, near-zero per repeat | Per-task prompt crafting, manual QA by gut feel |
| 4 Build | Novel problem across multiple domains | Meets standard with minimal rework, across output types (text, tools, code) | Design effort to build, then low per task | Any execution that doesn't feed evaluation |
| 5 Productize | Portfolio of interdependent workflows | Meets standard consistently without human rework | Maintenance only — system handles execution | Individual execution across the board |

**Scoring rule (Version B — updated 2026-07-02, supersedes the earlier "lowest of T/O/E" rule):**

> **Task sets which rung you're eligible for. Output Quality is the gate at that rung. Effort is a coaching note, not a grade. L4/L5 also require an individual live defense.**

- **Non-compensatory** — you cannot buy back a weak gate with strength elsewhere. Task-eligibility and Output Quality are the two *binding* dimensions.
- **Why Effort no longer gates the level:** leverage is already encoded in *which rung you reach* — an L5 "Productize" person is high-leverage by definition. Making Effort a separate gate would **double-count** leverage. Effort is recorded as a coaching signal (and it can't be reliably observed in a single assessment — the build happened over weeks).
- **Anti-gaming:** the Task handed to the person is pre-classified at a known complexity, so nobody can claim L4 by acing an L2 task; and TOE scores the AI work itself (prompts, iterations, output) — no AI interaction, no sample, no score.

*Interpretation rule: two people can have the same O with very different E. Final quality and effort are related, but they are not the same measurement — which is exactly why E informs coaching, not the level.*

**The evaluation paradox:** From L3 onward, the core skill shifts from *doing the work* to *evaluating whether the work is correct.* But the best evaluators are people who CAN do the work — their execution skill feeds their judgment. A training manager who has designed 50 workshops from scratch catches flaws in AI-designed workshops that a reviewer-only never would. Execution skills don't disappear — they change purpose from "I produce this" to "I can smell when this is wrong."

---

This is a practical framework for reflection, not a certification or a validated assessment.
