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

Updated: 2026-09-05T01:40:40.898Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lnkiai/m3e-canvas | TypeScript | 2004 | [Open](https://github.com/lnkiai/m3e-canvas) |
| 2 | anthropics/commerce-agents | Python | 1931 | [Open](https://github.com/anthropics/commerce-agents) |
| 3 | shadcn-ui/cn | TypeScript | 1107 | [Open](https://github.com/shadcn-ui/cn) |
| 4 | GangTailorUpgrade/undress-service | Python | 1055 | [Open](https://github.com/GangTailorUpgrade/undress-service) |
| 5 | 2akouwu/reverify | Python | 885 | [Open](https://github.com/2akouwu/reverify) |
| 6 | nahrek/polyledger | Python | 614 | [Open](https://github.com/nahrek/polyledger) |
| 7 | MSNightmare/FalconFlank | C | 502 | [Open](https://github.com/MSNightmare/FalconFlank) |
| 8 | Merserk/dlss5-visual-enhancer | Python | 488 | [Open](https://github.com/Merserk/dlss5-visual-enhancer) |
| 9 | codejunkie99/fable-orchestrator | Shell | 467 | [Open](https://github.com/codejunkie99/fable-orchestrator) |
| 10 | danielblnc/DLSS-NR-on-AMD | Unknown | 453 | [Open](https://github.com/danielblnc/DLSS-NR-on-AMD) |

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
