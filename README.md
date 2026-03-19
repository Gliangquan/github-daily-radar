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

Updated: 2026-03-19T01:07:23.956Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NVIDIA/NemoClaw | JavaScript | 8349 | [Open](https://github.com/NVIDIA/NemoClaw) |
| 2 | aiming-lab/AutoResearchClaw | Python | 6216 | [Open](https://github.com/aiming-lab/AutoResearchClaw) |
| 3 | calesthio/Crucix | JavaScript | 4470 | [Open](https://github.com/calesthio/Crucix) |
| 4 | pasky/chrome-cdp-skill | JavaScript | 2203 | [Open](https://github.com/pasky/chrome-cdp-skill) |
| 5 | jackwener/opencli | TypeScript | 1840 | [Open](https://github.com/jackwener/opencli) |
| 6 | MoonshotAI/Attention-Residuals | Unknown | 1806 | [Open](https://github.com/MoonshotAI/Attention-Residuals) |
| 7 | uditgoenka/autoresearch | Shell | 1383 | [Open](https://github.com/uditgoenka/autoresearch) |
| 8 | skernelx/tavily-key-generator | Python | 1307 | [Open](https://github.com/skernelx/tavily-key-generator) |
| 9 | Infatoshi/OpenSquirrel | Rust | 1089 | [Open](https://github.com/Infatoshi/OpenSquirrel) |
| 10 | HKUDS/ClawTeam | Python | 1026 | [Open](https://github.com/HKUDS/ClawTeam) |

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
