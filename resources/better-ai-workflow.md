# A better way to do complex work with AI

Use this when the task needs documents, background, and several decisions: a proposal, a report, or a plan. If you are starting with a short email or rewrite, use the [one-task starter](first-useful-task.html) first.

## 1. Give AI the context

Attach the files the task needs and one example of a useful output. Tell AI who will use the result and what they need to do with it. Use material you are allowed to share with the tool.

## 2. Agree the plan before drafting

Paste the interview prompt below. Answer the questions and correct any assumptions. You decide the approach; AI helps surface the decisions.

### Copy: interview prompt

The original prompt is in English and asks AI to reply in Vietnamese, matching the audience it was written for. Change the final language line if your work is in another language.

```text
Interview me relentlessly until we reach a shared understanding. Map this as a design tree: every decision branches into the decisions that hang off it.
 
Work the tree in rounds. The frontier is every decision whose prerequisites are already settled - the questions you can ask now without guessing at answers you haven't heard yet. Ask the whole frontier in one round: number each question and give your recommended answer. Then wait for my answers before the next round.
 
Each question is formatted like so:
 
? Q1 - <question title>: <question body, may be multiple paragraphs, including multiple choices>
 
-> <your recommended answer>
 
Each round of answers reshapes the tree: settled decisions push the frontier outward and unblock questions that depended on them. Recompute the frontier and ask the next round. A question whose answer depends on another question still open in this round belongs to a later round, not this one.
 
The decisions are mine: put each to me and wait.
 
The session is done when the frontier is empty: every branch of the design tree visited, nothing left silently assumed.
 
Always respond in the language of my work documents (Vietnamese), even though these instructions are in English.
```

## 3. Make the first version

Ask AI to carry out the plan you agreed. Keep the brief, source files, and working draft together so corrections have a clear reference.

## 4. Check the facts and the recipient’s experience

First, check claims and numbers against the source files. Ask AI to name which source supports each important claim. Open those sources yourself before relying on the result.

Then open a fresh chat, give it only the draft, and paste the review prompt below. This checks whether the person receiving the work could understand and act on it without your explanation.

### Copy: review prompt

```text
You are reviewing this as the intended recipient of the deliverable below - the person it is actually made for, who has to receive it and act on it. You do not have the source files, and that is deliberate: if this only makes sense to someone holding the source material, that is a finding.
Challenge it. Check whether you could act on it, whether the logic holds, whether anything material is missing, and whether it contradicts itself.
Give every finding a severity - CRITICAL (must change before this ships), MAJOR (weakens it substantially), MINOR (worth fixing) - and for each one name the problem, say why it matters to you as the recipient, and suggest a fix.
Lead with the issue. Do not open with what is good, do not hedge, and do not repeat my context back to me. If something is genuinely strong, say so in one line and move on.
When I push back on a finding, do not concede unless I give you new evidence or show your reasoning is wrong. If I argue without evidence, or simply repeat myself, hold the finding and say so.
Output: findings grouped by severity, then one sentence - ready, almost ready, or needs rework.
 
Always respond in the language of my work documents (Vietnamese), even though these instructions are in English.
```

## 5. Fix what matters

Read the findings and decide which are valid. Revise the draft, check changed facts, and repeat until the result meets your standard. You approve the final work.

## 6. Save the method for next time

If the task repeats, keep the brief, good example, instructions, and review checklist together. Your tool may let you save them in a Project, Gem, custom GPT, or another reusable workspace. A skill is a saved set of steps an AI agent can follow. Start with the reuse option your tool supports.

Next time, bring the new input and check the new result. Update the instructions when you discover a useful correction.

## A complete first attempt

For a weekly update: attach your notes and last week’s good update, agree what this week’s reader needs, draft, check every claim, review it as the reader, then save the instructions beside the example. This is an illustrative task, not a reported client result.

Based on Tim Tran’s six-step work method. The interview prompt adapts the design-tree approach credited to Matt Pocock in Tim’s public skills collection.
