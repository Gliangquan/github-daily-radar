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

Updated: 2026-07-09T01:30:21.598Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | x4gKing/X4G | Python | 2471 | [Open](https://github.com/x4gKing/X4G) |
| 2 | synthetic-sciences/openscience | TypeScript | 1757 | [Open](https://github.com/synthetic-sciences/openscience) |
| 3 | Shpigford/knockoff | JavaScript | 1409 | [Open](https://github.com/Shpigford/knockoff) |
| 4 | ammaarreshi/Generals-Mac-iOS-iPad | C++ | 1362 | [Open](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad) |
| 5 | jamesob/local-llm | Shell | 1273 | [Open](https://github.com/jamesob/local-llm) |
| 6 | xuchonglang/investing-for-beginners | Unknown | 1206 | [Open](https://github.com/xuchonglang/investing-for-beginners) |
| 7 | MaximeRivest/riddle | Rust | 1203 | [Open](https://github.com/MaximeRivest/riddle) |
| 8 | 514-labs/dnsglobe | Rust | 737 | [Open](https://github.com/514-labs/dnsglobe) |
| 9 | yynxxxxx/Codex-X | Rust | 593 | [Open](https://github.com/yynxxxxx/Codex-X) |
| 10 | Kulaxyz/token-diet | Shell | 566 | [Open](https://github.com/Kulaxyz/token-diet) |

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
