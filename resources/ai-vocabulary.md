<!-- Adapted for public reading from Tim’s resource library. -->
# Understand what broke in your AI workflow

**Source:** Matt Pocock — *AI Coding Dictionary* (github.com/mattpocock/dictionary-of-ai-coding · aicodingdictionary.com).

## The 12

1. **Model** — the stateless engine (parameters). It knows nothing about *you* on its own; every run starts blank.
2. **Harness** — everything wrapped around the model: the context, tools, permissions, files, prompts, loops, and checks. Most failures people blame on "the AI" live here, not in the model.
3. **Context** — what you actually hand the model this turn. **The one lever you control.** Project-specific knowledge must *arrive* through context — the model did not "learn" it.
4. **Token** — the unit the model reads and writes, and the unit you're billed in. Explains why a long document costs more and why bills vary.
5. **Tool call** — the model asking to *do* something (search, run code, read a file) rather than just talk. What turns a chatbot into an agent.
6. **Permission** — the boundary on what a tool call is allowed to do. "Can it edit files? send email?" — set before you go hands-off.
7. **Sandbox** — a walled space where the agent can act without touching anything real. Where you let it try things safely.
8. **Automated check** — a *deterministic* test: word count, file exists, valid format. Either passes or fails, no judgment.
9. **Automated review** — the model judging output. Useful, but it's *opinion*, not a guaranteed check. (Confusing these two is a top failure.)
10. **Human review** — **you reading the actual artifact** — the draft, the diff, the spreadsheet. Reading the agent's *summary* of what it did does not count.
11. **AFK ("away from keyboard")** — letting the agent run unattended. Only safe once ambiguity, sandbox, checks, and a review surface are all handled.
12. **AX (agent experience)** — how fit your files/repo/setup are *for an agent to work in* — separate from how convenient they are for a human (DX). Improving AX is why cleanup pays off.

## Caveats
- Vocabulary ≠ discipline. Knowing "human review" is not doing it — pair each term with the behavior it names.
- Some terms will age as products converge; revisit when the underlying tools shift.
