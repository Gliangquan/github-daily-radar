# GitHub Daily Radar

A tiny automation project that discovers hot new GitHub repositories every day and refreshes this README automatically.

## What it does

- Searches GitHub for repositories created in the last 7 days
- Sorts them by stars
- Stores the latest snapshot in `data/trending.json`
- Updates this README with a fresh ranking every day via GitHub Actions

## Update schedule

- Daily at 08:00 Asia/Shanghai

## Latest radar

<!-- RADAR:START -->

Updated: 2026-03-21T00:59:22.714Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NVIDIA/NemoClaw | JavaScript | 14323 | [Open](https://github.com/NVIDIA/NemoClaw) |
| 2 | aiming-lab/AutoResearchClaw | Python | 7125 | [Open](https://github.com/aiming-lab/AutoResearchClaw) |
| 3 | MoonshotAI/Attention-Residuals | Unknown | 2242 | [Open](https://github.com/MoonshotAI/Attention-Residuals) |
| 4 | HKUDS/ClawTeam | Python | 2082 | [Open](https://github.com/HKUDS/ClawTeam) |
| 5 | VoltAgent/awesome-codex-subagents | Unknown | 1830 | [Open](https://github.com/VoltAgent/awesome-codex-subagents) |
| 6 | zerobootdev/zeroboot | Rust | 1405 | [Open](https://github.com/zerobootdev/zeroboot) |
| 7 | Lum1104/Understand-Anything | TypeScript | 1364 | [Open](https://github.com/Lum1104/Understand-Anything) |
| 8 | cnlimiter/codex-manager | Python | 1243 | [Open](https://github.com/cnlimiter/codex-manager) |
| 9 | Infatoshi/OpenSquirrel | Rust | 1184 | [Open](https://github.com/Infatoshi/OpenSquirrel) |
| 10 | lcoutodemos/clui-cc | TypeScript | 915 | [Open](https://github.com/lcoutodemos/clui-cc) |

> Data source: GitHub Search API (`created:>last-7-days`, sorted by stars).

<!-- RADAR:END -->

## Local run

```bash
node scripts/update-readme.mjs
```

## Why this repo exists

I wanted a public, code-first automation repo that can keep producing useful output every day with minimal maintenance.

## License

MIT
