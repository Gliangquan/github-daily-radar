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

Updated: 2026-07-10T01:28:02.856Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | x4gKing/X4G | Python | 3401 | [Open](https://github.com/x4gKing/X4G) |
| 2 | Shpigford/knockoff | JavaScript | 1568 | [Open](https://github.com/Shpigford/knockoff) |
| 3 | withmarbleapp/os-taxonomy | JavaScript | 1412 | [Open](https://github.com/withmarbleapp/os-taxonomy) |
| 4 | ammaarreshi/Generals-Mac-iOS-iPad | C++ | 1393 | [Open](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad) |
| 5 | MaximeRivest/riddle | Rust | 1283 | [Open](https://github.com/MaximeRivest/riddle) |
| 6 | 514-labs/dnsglobe | Rust | 774 | [Open](https://github.com/514-labs/dnsglobe) |
| 7 | wouterdebie/davit | Swift | 720 | [Open](https://github.com/wouterdebie/davit) |
| 8 | yynxxxxx/Codex-X | Rust | 688 | [Open](https://github.com/yynxxxxx/Codex-X) |
| 9 | simonlin1212/Vibe-Research | TypeScript | 591 | [Open](https://github.com/simonlin1212/Vibe-Research) |
| 10 | Robbyant/lingbot-vision | Python | 579 | [Open](https://github.com/Robbyant/lingbot-vision) |

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
