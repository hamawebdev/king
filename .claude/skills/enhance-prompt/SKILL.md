---
name: enhance-prompt
description: Rewrites a rough pasted prompt into a tighter one aimed at Claude Code, a Claude.ai chat, or an API system prompt. Use when the user pastes prompt text and says anything like "make this a better prompt", "enhance / improve / tighten / clean up this prompt", "rewrite this before I send it", "help me phrase this for Claude", or runs /enhance-prompt. Not for writing a prompt from nothing.
---

# Enhance prompt

Input is whatever they pasted, one line or a page. Output is a better prompt, the questions whose answers would change it, and one line on what was cut. Nothing else.

## What better means

The reader is a Claude 5 generation model. It has judgment, so a prompt pays off by fixing the interface and leaving the reasoning alone.

- **Under-specify judgment, over-specify interface.** State the goal, the constraints that actually bind, and what done looks like. Do not script the model's steps and do not name files, functions, or implementation approach. Finding those is its job.
- **Deleting beats adding.** Role preambles, politeness, repeated instructions, restated defaults, and guardrails against failures this generation no longer has. When unsure whether a rule is still load-bearing, apply the test in [cuts.md](cuts.md).
- **Flag conflicts, never pick a winner.** Pasted text vs CLAUDE.md, the project's process docs, or the skill it will run under. Both sides go in the questions, named.
- **References over description, by role not path.** The prompt says "match the mockup" or "the existing suite must pass". The request to attach the actual thing goes in the questions. Paths the user pasted move there too.
- **One example at most,** only when the output format is genuinely arbitrary, and the cut line says why it stayed.
- **Surface unknowns instead of guessing past them.** Known unknowns become questions. Unknown knowns, the obvious-to-them context they would never write down, become plain sentences in the prompt. An assumption says what they want, in the nouns a user of the product would use. How the code gets there is detail, and detail stays out. A thin paste stays thin: where you would be guessing, ask.
- **A verification clause.** The prompt ends with how they will know the result is right.
- **Their voice.** Same register, same words for things. Tighten, do not translate.

## Working it

Infer the target from the text. Repo, branches, tests, or "fix this" means Claude Code. A question, an essay, or a conversation means Claude.ai chat. Persona, product, end users, or output contract means an API system prompt. Never stop to ask. Pick the likeliest and write for it. If it was a real guess, make it the first open question; if it is obvious, do not. Target-specific notes are in [targets.md](targets.md); read the section for the target you picked.

When the target is Claude Code and there is a repo in front of you, look before rewriting: the project and user CLAUDE.md, the skill the prompt names or the project ships for this kind of task, recent git log, open issues, and the area the prompt gestures at. You are looking for three things: rules the paste restates, rules the paste contradicts, and context the user clearly knows but did not write. Nothing you find goes into the prompt as technical detail. It becomes an assumption, a question, or a deletion.

Then rewrite. Cut first, then add only what the list above demands. If the result is longer than the paste, you owe a reason in the cut line.

## Output

Three parts, in this order, and nothing before or after them.

1. The prompt, in one fenced block, ready to paste as is. Assumptions are plain sentences inside it, with no framing about assumptions, targets, or striking things out. That framing is for the questions.
2. **Open questions.** Only ones whose answer would change the prompt. Target first if you guessed it. Pointers you want attached are asked for here. A conflict is one question that names both sides. Each assumption you wrote into the prompt is confirmed here in a few words, not re-asked.
3. **Cut:** one line. What went, by kind, and why. Do not enumerate. Any reason the rewrite grew, or an example survived, lives here.
