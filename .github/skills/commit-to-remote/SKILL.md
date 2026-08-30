---
name: commit-to-remote
description: "Commit staged or working directory changes and push to the remote git branch. Use when the user asks to commit, push to remote, sync git changes, or invoke /commit-to-remote."
user-invocable: true
---

# Commit to Remote Branch

## When to Use
- When committing local changes to git
- When pushing commits to the remote branch
- When invoked via `/commit-to-remote` or when asked to commit and push to remote

## Procedure
1. **Check Status**: Run `git status` to inspect all modified, untracked, and deleted files.
2. **Stage Changes**: Stage relevant files with `git add -A` (respecting `.gitignore`).
3. **Commit**: Create a commit with a descriptive conventional commit message summarizing the accomplishments.
4. **Push**: Push to the current branch on the remote using `git push origin <branch>`.
5. **Verify**: Verify repository status with `git status` to confirm working tree is clean and up to date with remote.
