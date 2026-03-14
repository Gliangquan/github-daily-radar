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

Updated: 2026-03-14T01:01:27.948Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | HKUDS/CLI-Anything | Python | 11681 | [Open](https://github.com/HKUDS/CLI-Anything) |
| 2 | tanweai/pua | TypeScript | 6604 | [Open](https://github.com/tanweai/pua) |
| 3 | garrytan/gstack | TypeScript | 6118 | [Open](https://github.com/garrytan/gstack) |
| 4 | davebcn87/pi-autoresearch | TypeScript | 1156 | [Open](https://github.com/davebcn87/pi-autoresearch) |
| 5 | FreedomIntelligence/OpenClaw-Medical-Skills | Python | 1124 | [Open](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) |
| 6 | gsd-build/gsd-2 | TypeScript | 988 | [Open](https://github.com/gsd-build/gsd-2) |
| 7 | TianyiDataScience/openclaw-control-center | TypeScript | 985 | [Open](https://github.com/TianyiDataScience/openclaw-control-center) |
| 8 | aiming-lab/MetaClaw | Python | 976 | [Open](https://github.com/aiming-lab/MetaClaw) |
| 9 | jackwener/xiaohongshu-cli | Python | 919 | [Open](https://github.com/jackwener/xiaohongshu-cli) |
| 10 | NawfalMotii79/PLFM_RADAR | C | 844 | [Open](https://github.com/NawfalMotii79/PLFM_RADAR) |

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
