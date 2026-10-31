# Cuts

The test for every line in the paste: **if this line were gone, would a Claude 5 generation model do anything differently?** No means cut. Yes means keep it and tighten it. Unsure means cut it and name it in the cut line so the user can put it back.

## Goes without asking

- Role and flattery preambles: "you are a world-class senior engineer", "act as an expert".
- Politeness and mood: "please", "carefully", "take your time", "this is important".
- Emphasis as instruction: ALL CAPS, "ALWAYS", "NEVER", "CRITICAL", repeated for reinforcement.
- Reasoning choreography: "think step by step", "first understand, then plan, then implement", "reason before answering".
- Anti-hallucination charms: "do not make things up", "only use real APIs", "be accurate".
- Restated defaults: "write clean code", "follow best practices", "use meaningful names", "be concise".
- Anything CLAUDE.md, the active skill, or the harness already enforces. Repeating it is noise at best and a future conflict at worst.
- Instructions to the model about managing its own memory or context.
- Tool usage examples when the tool's own description already carries the rule.
- Worst-case guardrails written for older models: "never write comments", "do not refactor anything", "do not touch other files". Replace with the judgment they were protecting: "match the surrounding code", "keep the diff to what the task needs".
- Implementation detail the model can find itself: which files to change, which function to call, which library to use. If the user pasted it, move it to the questions as a pointer to confirm.

## Keep, but tighten

- A constraint that binds: a deadline, a platform, a thing that must not change, a boundary such as "open the PR and stop".
- Done criteria. If there are none, write one, and prefer one the model can check itself. "Don't break anything" is a done criterion in disguise: turn it into which suite, which flow, which device.
- Context only the user knows: why this is being done, who it is for, what was already tried.
- One example, when the output format is arbitrary and no description would pin it.

## Examples of the same rule in both generations

| Then | Now |
|---|---|
| Default to no comments. Never write multi-paragraph docstrings. | Match the surrounding code's comment density and idiom. |
| Read the whole codebase before you begin. | (delete; it will) |
| If you are unsure, ask. | (delete for Claude Code; the harness handles it) |
| Output valid JSON. Do not include any other text. Do not wrap in markdown. | Reply with the JSON object only. |
