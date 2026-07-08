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

Updated: 2026-07-08T01:22:25.721Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | elder-plinius/T3MP3ST | TypeScript | 3312 | [Open](https://github.com/elder-plinius/T3MP3ST) |
| 2 | synthetic-sciences/openscience | TypeScript | 1369 | [Open](https://github.com/synthetic-sciences/openscience) |
| 3 | ammaarreshi/Generals-Mac-iOS-iPad | C++ | 1291 | [Open](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad) |
| 4 | jamesob/local-llm | Shell | 1183 | [Open](https://github.com/jamesob/local-llm) |
| 5 | MaximeRivest/riddle | Rust | 1052 | [Open](https://github.com/MaximeRivest/riddle) |
| 6 | Shpigford/knockoff | JavaScript | 982 | [Open](https://github.com/Shpigford/knockoff) |
| 7 | x4gKing/X4G | Python | 948 | [Open](https://github.com/x4gKing/X4G) |
| 8 | xuchonglang/investing-for-beginners | Unknown | 760 | [Open](https://github.com/xuchonglang/investing-for-beginners) |
| 9 | jmerelnyc/Talos | Python | 724 | [Open](https://github.com/jmerelnyc/Talos) |
| 10 | uzairansaruzi/hermex | Swift | 677 | [Open](https://github.com/uzairansaruzi/hermex) |

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
