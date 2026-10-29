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

Updated: 2026-10-29T03:09:06.158Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | JustAResearcher/gpu-unlock-ada | C | 4432 | [Open](https://github.com/JustAResearcher/gpu-unlock-ada) |
| 2 | rddmwmddr/android-ad-cleaner | Python | 4368 | [Open](https://github.com/rddmwmddr/android-ad-cleaner) |
| 3 | unclebob/ub-mode | Unknown | 3881 | [Open](https://github.com/unclebob/ub-mode) |
| 4 | designfuchen/word-atlas | TypeScript | 3078 | [Open](https://github.com/designfuchen/word-atlas) |
| 5 | interplains/Zero-Breach-Toolkit | Python | 2844 | [Open](https://github.com/interplains/Zero-Breach-Toolkit) |
| 6 | t3dotgg/tstack | Python | 2280 | [Open](https://github.com/t3dotgg/tstack) |
| 7 | anhao/ai-pose-gallery-zh | HTML | 2037 | [Open](https://github.com/anhao/ai-pose-gallery-zh) |
| 8 | enesozturk/dimensional-drawing | HTML | 1419 | [Open](https://github.com/enesozturk/dimensional-drawing) |
| 9 | morganlinton/BeautifulRust | Python | 1371 | [Open](https://github.com/morganlinton/BeautifulRust) |
| 10 | andyhuo520/digital-human-koubo | TypeScript | 1325 | [Open](https://github.com/andyhuo520/digital-human-koubo) |

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
