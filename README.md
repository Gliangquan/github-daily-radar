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

Updated: 2026-03-17T01:04:07.455Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | garrytan/gstack | TypeScript | 17213 | [Open](https://github.com/garrytan/gstack) |
| 2 | davebcn87/pi-autoresearch | TypeScript | 1987 | [Open](https://github.com/davebcn87/pi-autoresearch) |
| 3 | TianyiDataScience/openclaw-control-center | TypeScript | 1887 | [Open](https://github.com/TianyiDataScience/openclaw-control-center) |
| 4 | pasky/chrome-cdp-skill | JavaScript | 1869 | [Open](https://github.com/pasky/chrome-cdp-skill) |
| 5 | THU-MAIC/OpenMAIC | TypeScript | 1858 | [Open](https://github.com/THU-MAIC/OpenMAIC) |
| 6 | calesthio/Crucix | JavaScript | 1844 | [Open](https://github.com/calesthio/Crucix) |
| 7 | gsd-build/gsd-2 | TypeScript | 1543 | [Open](https://github.com/gsd-build/gsd-2) |
| 8 | aiming-lab/AutoResearchClaw | Python | 1420 | [Open](https://github.com/aiming-lab/AutoResearchClaw) |
| 9 | novatic14/MANPADS-System-Launcher-and-Rocket | Unknown | 1390 | [Open](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket) |
| 10 | Narcooo/inkos | TypeScript | 1143 | [Open](https://github.com/Narcooo/inkos) |

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
