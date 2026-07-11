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

Updated: 2026-07-11T01:21:30.991Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | withmarbleapp/os-taxonomy | JavaScript | 2133 | [Open](https://github.com/withmarbleapp/os-taxonomy) |
| 2 | Shpigford/knockoff | JavaScript | 1704 | [Open](https://github.com/Shpigford/knockoff) |
| 3 | MaximeRivest/riddle | Rust | 1338 | [Open](https://github.com/MaximeRivest/riddle) |
| 4 | 514-labs/dnsglobe | Rust | 794 | [Open](https://github.com/514-labs/dnsglobe) |
| 5 | Robbyant/lingbot-world-v2 | Python | 701 | [Open](https://github.com/Robbyant/lingbot-world-v2) |
| 6 | simonlin1212/Vibe-Research | TypeScript | 671 | [Open](https://github.com/simonlin1212/Vibe-Research) |
| 7 | Robbyant/lingbot-video | Python | 643 | [Open](https://github.com/Robbyant/lingbot-video) |
| 8 | oso95/scroll-world | JavaScript | 623 | [Open](https://github.com/oso95/scroll-world) |
| 9 | Robbyant/lingbot-vision | Python | 616 | [Open](https://github.com/Robbyant/lingbot-vision) |
| 10 | x4gKing/3x-ui-Upgrade | HTML | 607 | [Open](https://github.com/x4gKing/3x-ui-Upgrade) |

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
