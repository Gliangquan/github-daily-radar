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

Updated: 2026-03-20T01:03:31.429Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NVIDIA/NemoClaw | JavaScript | 12580 | [Open](https://github.com/NVIDIA/NemoClaw) |
| 2 | aiming-lab/AutoResearchClaw | Python | 6778 | [Open](https://github.com/aiming-lab/AutoResearchClaw) |
| 3 | calesthio/Crucix | JavaScript | 5168 | [Open](https://github.com/calesthio/Crucix) |
| 4 | jackwener/opencli | TypeScript | 2418 | [Open](https://github.com/jackwener/opencli) |
| 5 | MoonshotAI/Attention-Residuals | Unknown | 2006 | [Open](https://github.com/MoonshotAI/Attention-Residuals) |
| 6 | HKUDS/ClawTeam | Python | 1681 | [Open](https://github.com/HKUDS/ClawTeam) |
| 7 | VoltAgent/awesome-codex-subagents | Unknown | 1498 | [Open](https://github.com/VoltAgent/awesome-codex-subagents) |
| 8 | skernelx/tavily-key-generator | Python | 1331 | [Open](https://github.com/skernelx/tavily-key-generator) |
| 9 | Infatoshi/OpenSquirrel | Rust | 1135 | [Open](https://github.com/Infatoshi/OpenSquirrel) |
| 10 | Lum1104/Understand-Anything | TypeScript | 1075 | [Open](https://github.com/Lum1104/Understand-Anything) |

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
