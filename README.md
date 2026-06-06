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

Updated: 2026-06-06T01:55:44.157Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pewdiepie-archdaemon/odysseus | Python | 55813 | [Open](https://github.com/pewdiepie-archdaemon/odysseus) |
| 2 | b-nnett/goose | Rust | 2120 | [Open](https://github.com/b-nnett/goose) |
| 3 | cpaczek/skylight | TypeScript | 1689 | [Open](https://github.com/cpaczek/skylight) |
| 4 | asz798838958/aBaiAutoplus | Python | 1533 | [Open](https://github.com/asz798838958/aBaiAutoplus) |
| 5 | ClaudioDrews/memory-os | Python | 882 | [Open](https://github.com/ClaudioDrews/memory-os) |
| 6 | qiuqiubuchongle-cloud/chokepoint-atlas | Python | 583 | [Open](https://github.com/qiuqiubuchongle-cloud/chokepoint-atlas) |
| 7 | jd-opensource/JoyAI-Echo | Python | 573 | [Open](https://github.com/jd-opensource/JoyAI-Echo) |
| 8 | anomalyco/rift | Rust | 532 | [Open](https://github.com/anomalyco/rift) |
| 9 | tastyeffectco/sandboxes | Go | 439 | [Open](https://github.com/tastyeffectco/sandboxes) |
| 10 | tiantianGPU/reg-factory | Python | 435 | [Open](https://github.com/tiantianGPU/reg-factory) |

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
