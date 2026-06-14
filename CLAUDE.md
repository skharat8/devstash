# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

DevStash — A developer knowledge hub for snippets, commands, prompts, notes, files, images, links, and custom types.

## Context Files

Read the following to get the full context of the project:

- @context/project-overview.md
- @context/coding-standards.md
- @context/ai-interaction.md
- @context/current-feature.md

## Commands

Package manager is **pnpm** (see `pnpm-workspace.yaml` / `pnpm-lock.yaml`).

- `pnpm dev` — start the dev server (http://localhost:3000)
- `pnpm build` — production build
- `pnpm start` — serve the production build
- `pnpm lint` — run ESLint

No test runner is configured yet.

## Dependency policy

`pnpm-workspace.yaml` enforces supply-chain guardrails that affect adding/updating deps:
- `minimumReleaseAge: 4320` — packages must be at least 3 days old before install.
- `trustPolicy: no-downgrade` — version downgrades are blocked (with a few explicit exclusions listed in the file).
- `allowBuilds` gates which packages may run install scripts (`sharp`, `unrs-resolver`).
