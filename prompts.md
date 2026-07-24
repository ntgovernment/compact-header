# Prompts

## Update docs
Update comprehensive documentation and copilot instructions to become helpful to other developers and coding agents.

Requirements:
- Update README and any developer docs with setup, run, and troubleshooting details.
- Add or refine copilot instructions and agent guidance relevant to this repo.
- Include conventions, expected workflows, and command reference.
- Keep docs accurate to current project files and npm scripts.

## Deploy to dev
Deploy current chat-session changes to the `dev` branch.

Steps:
1. `#runInTerminal:git add .`
2. Generate a concise summary of all changes completed during this chat session.
3. Use that summary as the basis for a clear commit message and commit to `dev`.
4. `run_in_terminal:git push origin dev`
