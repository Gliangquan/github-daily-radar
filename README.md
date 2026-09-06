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

Updated: 2026-09-06T01:34:50.194Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lnkiai/m3e-canvas | TypeScript | 3712 | [Open](https://github.com/lnkiai/m3e-canvas) |
| 2 | anthropics/commerce-agents | Python | 2053 | [Open](https://github.com/anthropics/commerce-agents) |
| 3 | shadcn-ui/cn | TypeScript | 1170 | [Open](https://github.com/shadcn-ui/cn) |
| 4 | GangTailorUpgrade/undress-service | Python | 1091 | [Open](https://github.com/GangTailorUpgrade/undress-service) |
| 5 | 2akouwu/reverify | Python | 923 | [Open](https://github.com/2akouwu/reverify) |
| 6 | yczz/oc-english | JavaScript | 822 | [Open](https://github.com/yczz/oc-english) |
| 7 | anthropics/fermats-last-theorem | Lean | 695 | [Open](https://github.com/anthropics/fermats-last-theorem) |
| 8 | danielblnc/DLSS-NR-on-AMD | Unknown | 656 | [Open](https://github.com/danielblnc/DLSS-NR-on-AMD) |
| 9 | nahrek/polyledger | Python | 620 | [Open](https://github.com/nahrek/polyledger) |
| 10 | MSNightmare/FalconFlank | C | 515 | [Open](https://github.com/MSNightmare/FalconFlank) |

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
