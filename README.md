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

Updated: 2026-10-30T03:12:59.978Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | unclebob/ub-mode | Unknown | 4792 | [Open](https://github.com/unclebob/ub-mode) |
| 2 | rddmwmddr/android-ad-cleaner | Python | 4784 | [Open](https://github.com/rddmwmddr/android-ad-cleaner) |
| 3 | interplains/Zero-Breach-Toolkit | Python | 3640 | [Open](https://github.com/interplains/Zero-Breach-Toolkit) |
| 4 | anhao/ai-pose-gallery-zh | HTML | 3281 | [Open](https://github.com/anhao/ai-pose-gallery-zh) |
| 5 | designfuchen/word-atlas | TypeScript | 3260 | [Open](https://github.com/designfuchen/word-atlas) |
| 6 | t3dotgg/tstack | Python | 2406 | [Open](https://github.com/t3dotgg/tstack) |
| 7 | andyhuo520/digital-human-koubo | TypeScript | 1487 | [Open](https://github.com/andyhuo520/digital-human-koubo) |
| 8 | DenisSergeevitch/ex-ussr-kinship-research | Python | 1270 | [Open](https://github.com/DenisSergeevitch/ex-ussr-kinship-research) |
| 9 | Motionsites-AI/claude-skill | Python | 1094 | [Open](https://github.com/Motionsites-AI/claude-skill) |
| 10 | KillaBoi/StealMyBitcoin-PoC | Python | 1007 | [Open](https://github.com/KillaBoi/StealMyBitcoin-PoC) |

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
