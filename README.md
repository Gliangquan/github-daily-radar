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

Updated: 2026-07-12T01:23:17.295Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | withmarbleapp/os-taxonomy | JavaScript | 2404 | [Open](https://github.com/withmarbleapp/os-taxonomy) |
| 2 | Shpigford/knockoff | JavaScript | 1772 | [Open](https://github.com/Shpigford/knockoff) |
| 3 | oso95/scroll-world | JavaScript | 889 | [Open](https://github.com/oso95/scroll-world) |
| 4 | x4gKing/3x-ui-Upgrade | HTML | 799 | [Open](https://github.com/x4gKing/3x-ui-Upgrade) |
| 5 | Robbyant/lingbot-world-v2 | Python | 795 | [Open](https://github.com/Robbyant/lingbot-world-v2) |
| 6 | Robbyant/lingbot-video | Python | 679 | [Open](https://github.com/Robbyant/lingbot-video) |
| 7 | Robbyant/lingbot-vision | Python | 634 | [Open](https://github.com/Robbyant/lingbot-vision) |
| 8 | op7418/guizang-material-illustration | Unknown | 557 | [Open](https://github.com/op7418/guizang-material-illustration) |
| 9 | V4bel/Januscape | C | 472 | [Open](https://github.com/V4bel/Januscape) |
| 10 | Robbyant/lingbot-vla-v2 | Python | 449 | [Open](https://github.com/Robbyant/lingbot-vla-v2) |

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
