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

Updated: 2026-09-04T01:39:50.447Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | anthropics/commerce-agents | Python | 1572 | [Open](https://github.com/anthropics/commerce-agents) |
| 2 | rakanki911/DLSS5-Swapper | JavaScript | 1102 | [Open](https://github.com/rakanki911/DLSS5-Swapper) |
| 3 | GangTailorUpgrade/undress-service | Python | 1017 | [Open](https://github.com/GangTailorUpgrade/undress-service) |
| 4 | shadcn-ui/cn | TypeScript | 962 | [Open](https://github.com/shadcn-ui/cn) |
| 5 | 2akouwu/reverify | Python | 786 | [Open](https://github.com/2akouwu/reverify) |
| 6 | jlrouzies-fr/DLSS5-Feeder | C++ | 670 | [Open](https://github.com/jlrouzies-fr/DLSS5-Feeder) |
| 7 | lnkiai/m3e-canvas | TypeScript | 487 | [Open](https://github.com/lnkiai/m3e-canvas) |
| 8 | MSNightmare/FalconFlank | C | 419 | [Open](https://github.com/MSNightmare/FalconFlank) |
| 9 | Ryze-AI-Adgent/open-seo-mcp-skills | Shell | 416 | [Open](https://github.com/Ryze-AI-Adgent/open-seo-mcp-skills) |
| 10 | Merserk/dlss5-visual-enhancer | Python | 395 | [Open](https://github.com/Merserk/dlss5-visual-enhancer) |

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
