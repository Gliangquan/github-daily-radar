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

Updated: 2026-06-05T02:04:23.608Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pewdiepie-archdaemon/odysseus | Python | 51431 | [Open](https://github.com/pewdiepie-archdaemon/odysseus) |
| 2 | zgwl/chinese-buy-us-stock-guide | Unknown | 2771 | [Open](https://github.com/zgwl/chinese-buy-us-stock-guide) |
| 3 | b-nnett/goose | Rust | 1873 | [Open](https://github.com/b-nnett/goose) |
| 4 | asz798838958/aBaiAutoplus | Python | 1485 | [Open](https://github.com/asz798838958/aBaiAutoplus) |
| 5 | cpaczek/skylight | TypeScript | 1225 | [Open](https://github.com/cpaczek/skylight) |
| 6 | ClaudioDrews/memory-os | Python | 829 | [Open](https://github.com/ClaudioDrews/memory-os) |
| 7 | qiuqiubuchongle-cloud/chokepoint-atlas | Python | 559 | [Open](https://github.com/qiuqiubuchongle-cloud/chokepoint-atlas) |
| 8 | liyue-aigc/female-portrait-director | Unknown | 510 | [Open](https://github.com/liyue-aigc/female-portrait-director) |
| 9 | anomalyco/rift | Rust | 506 | [Open](https://github.com/anomalyco/rift) |
| 10 | SenhorH/tab-labeler | TypeScript | 459 | [Open](https://github.com/SenhorH/tab-labeler) |

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
