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

Updated: 2026-03-16T01:12:04.495Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | garrytan/gstack | TypeScript | 13988 | [Open](https://github.com/garrytan/gstack) |
| 2 | davebcn87/pi-autoresearch | TypeScript | 1851 | [Open](https://github.com/davebcn87/pi-autoresearch) |
| 3 | TianyiDataScience/openclaw-control-center | TypeScript | 1714 | [Open](https://github.com/TianyiDataScience/openclaw-control-center) |
| 4 | pasky/chrome-cdp-skill | JavaScript | 1495 | [Open](https://github.com/pasky/chrome-cdp-skill) |
| 5 | gsd-build/gsd-2 | TypeScript | 1360 | [Open](https://github.com/gsd-build/gsd-2) |
| 6 | wanshuiyin/Auto-claude-code-research-in-sleep | Python | 1288 | [Open](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep) |
| 7 | novatic14/MANPADS-System-Launcher-and-Rocket | Unknown | 956 | [Open](https://github.com/novatic14/MANPADS-System-Launcher-and-Rocket) |
| 8 | skernelx/tavily-key-generator | Python | 900 | [Open](https://github.com/skernelx/tavily-key-generator) |
| 9 | Narcooo/inkos | TypeScript | 805 | [Open](https://github.com/Narcooo/inkos) |
| 10 | chrisworsey55/atlas-gic | Unknown | 802 | [Open](https://github.com/chrisworsey55/atlas-gic) |

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
