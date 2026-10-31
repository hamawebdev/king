# Targets

Read only the section for the target you picked.

## Claude Code

It has the repo, tools, CLAUDE.md, and whatever skills the project ships. It will read files, run tests, and open PRs on its own.

- Interface means: goal, the boundary where it must stop (branch, PR, no merge, no push), what done looks like, and what must not change.
- Done criteria that it can check itself beat ones only a human can check: a test that passes, a build that succeeds, a screen that renders.
- Never name files, functions, or the approach. It finds those faster than the user can describe them, and a named path anchors it on the wrong one.
- Anything CLAUDE.md already enforces is a cut, not a repeat. Anything the paste says that CLAUDE.md forbids is a conflict question.
- If the paste names a skill it runs under, read that skill. The skill's rules are the baseline; the prompt only adds what the skill leaves open.
- "Don't break anything" becomes the verification clause: which suite, which flow, which device.

## Claude.ai chat

No tools, no repo, no memory of the user's files beyond what is pasted or attached in that conversation.

- Interface means: the question, the context the model cannot see, and the shape of the answer wanted.
- Context the user takes for granted (their level, their audience, what they already tried) is the usual unknown known. Write it in plainly.
- Attachments beat description. If a paragraph describes a document, ask for the document.
- Answer shape is worth one line: length, format, decision vs survey. Persona preambles are not.
- Verification here is usually "I'll know it's right if I can X with the answer".

## API system prompt

The prompt is the product. It runs for many users the author never sees, so it is the one place a persona is load-bearing.

- Describe the product and its users, not the model. Who is on the other side, what they are trying to do, what the deployment is for.
- Interface means: output contract, boundaries (what it must refuse or hand off), and how it should behave when it lacks information.
- Tool guidance lives in tool descriptions, not in the system prompt. Repeating it there is a cut.
- Examples constrain. Keep at most one, only for a format no description pins, and put it last so the stable prefix caches.
- Static content first, per-request content last. Note the boundary if the paste mixes them.
- Verification is an eval: which inputs, what a pass looks like. If none exists, the question is "how will you test this".
