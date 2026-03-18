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

Updated: 2026-03-18T01:08:02.570Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NVIDIA/NemoClaw | TypeScript | 4223 | [Open](https://github.com/NVIDIA/NemoClaw) |
| 2 | aiming-lab/AutoResearchClaw | Python | 4120 | [Open](https://github.com/aiming-lab/AutoResearchClaw) |
| 3 | calesthio/Crucix | JavaScript | 3053 | [Open](https://github.com/calesthio/Crucix) |
| 4 | webadderall/Recordly | TypeScript | 2346 | [Open](https://github.com/webadderall/Recordly) |
| 5 | pasky/chrome-cdp-skill | JavaScript | 2056 | [Open](https://github.com/pasky/chrome-cdp-skill) |
| 6 | Narcooo/inkos | TypeScript | 1435 | [Open](https://github.com/Narcooo/inkos) |
| 7 | MoonshotAI/Attention-Residuals | Unknown | 1387 | [Open](https://github.com/MoonshotAI/Attention-Residuals) |
| 8 | jackwener/opencli | TypeScript | 1359 | [Open](https://github.com/jackwener/opencli) |
| 9 | skernelx/tavily-key-generator | Python | 1270 | [Open](https://github.com/skernelx/tavily-key-generator) |
| 10 | uditgoenka/autoresearch | Shell | 1170 | [Open](https://github.com/uditgoenka/autoresearch) |

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
