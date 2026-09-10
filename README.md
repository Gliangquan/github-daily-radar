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

Updated: 2026-09-10T01:45:57.765Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ashemag/human-atlas | TypeScript | 2848 | [Open](https://github.com/ashemag/human-atlas) |
| 2 | Rion-Wu-tech/wechat-intelligence-hub | Python | 2023 | [Open](https://github.com/Rion-Wu-tech/wechat-intelligence-hub) |
| 3 | openai/NavierStokesAndEuler | Lean | 1564 | [Open](https://github.com/openai/NavierStokesAndEuler) |
| 4 | vinzdg/codenotch | Swift | 1288 | [Open](https://github.com/vinzdg/codenotch) |
| 5 | EverettFish/holo-card-studio | Python | 1240 | [Open](https://github.com/EverettFish/holo-card-studio) |
| 6 | anthropics/fermats-last-theorem | Lean | 1000 | [Open](https://github.com/anthropics/fermats-last-theorem) |
| 7 | donvito/codex-astra-luna-orchestrator | Python | 747 | [Open](https://github.com/donvito/codex-astra-luna-orchestrator) |
| 8 | KJGX66F/usque-custom-pro | JavaScript | 722 | [Open](https://github.com/KJGX66F/usque-custom-pro) |
| 9 | sdli1995/dlssg_for_sm86 | Unknown | 716 | [Open](https://github.com/sdli1995/dlssg_for_sm86) |
| 10 | yang0/handraw-style | HTML | 650 | [Open](https://github.com/yang0/handraw-style) |

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
