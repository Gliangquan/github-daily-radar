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

Updated: 2026-10-28T02:47:44.917Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | JustAResearcher/gpu-unlock-ada | C | 4298 | [Open](https://github.com/JustAResearcher/gpu-unlock-ada) |
| 2 | rddmwmddr/android-ad-cleaner | Python | 3461 | [Open](https://github.com/rddmwmddr/android-ad-cleaner) |
| 3 | designfuchen/word-atlas | TypeScript | 2627 | [Open](https://github.com/designfuchen/word-atlas) |
| 4 | unclebob/ub-mode | Unknown | 2459 | [Open](https://github.com/unclebob/ub-mode) |
| 5 | t3dotgg/tstack | Python | 2023 | [Open](https://github.com/t3dotgg/tstack) |
| 6 | oosexgang/hackios-xnu-kernel | C | 1824 | [Open](https://github.com/oosexgang/hackios-xnu-kernel) |
| 7 | morganlinton/BeautifulRust | Python | 1319 | [Open](https://github.com/morganlinton/BeautifulRust) |
| 8 | DLSS-5-Swaper-New/.github | Unknown | 1280 | [Open](https://github.com/DLSS-5-Swaper-New/.github) |
| 9 | enesozturk/dimensional-drawing | HTML | 1265 | [Open](https://github.com/enesozturk/dimensional-drawing) |
| 10 | andyhuo520/digital-human-koubo | TypeScript | 1110 | [Open](https://github.com/andyhuo520/digital-human-koubo) |

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
