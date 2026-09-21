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

Updated: 2026-09-21T02:00:02.466Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | browser-use/jev-ultrafast | Python | 12111 | [Open](https://github.com/browser-use/jev-ultrafast) |
| 2 | tamaratran/fast-jev-compaction | TypeScript | 5238 | [Open](https://github.com/tamaratran/fast-jev-compaction) |
| 3 | NandhaKishorM/laya | Python | 4405 | [Open](https://github.com/NandhaKishorM/laya) |
| 4 | robbietilton/Compositor | Swift | 3714 | [Open](https://github.com/robbietilton/Compositor) |
| 5 | TheoLeeCJ/SemIf | Python | 2472 | [Open](https://github.com/TheoLeeCJ/SemIf) |
| 6 | mcncarl/jianying-headless | Python | 2025 | [Open](https://github.com/mcncarl/jianying-headless) |
| 7 | mizorewww/laya-mlx | Python | 1772 | [Open](https://github.com/mizorewww/laya-mlx) |
| 8 | jarrodwatts/jev-trader | TypeScript | 1546 | [Open](https://github.com/jarrodwatts/jev-trader) |
| 9 | TianyuCodings/NanoJev | Python | 1441 | [Open](https://github.com/TianyuCodings/NanoJev) |
| 10 | zai-org/ZCode | TypeScript | 1225 | [Open](https://github.com/zai-org/ZCode) |

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
