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

Updated: 2026-09-22T02:06:30.409Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | browser-use/jev-ultrafast | Python | 15937 | [Open](https://github.com/browser-use/jev-ultrafast) |
| 2 | NandhaKishorM/laya | Python | 10742 | [Open](https://github.com/NandhaKishorM/laya) |
| 3 | tamaratran/fast-jev-compaction | TypeScript | 5996 | [Open](https://github.com/tamaratran/fast-jev-compaction) |
| 4 | zai-org/ZCode | TypeScript | 5709 | [Open](https://github.com/zai-org/ZCode) |
| 5 | robbietilton/Compositor | Swift | 4422 | [Open](https://github.com/robbietilton/Compositor) |
| 6 | mizorewww/laya-mlx | Python | 3963 | [Open](https://github.com/mizorewww/laya-mlx) |
| 7 | TheoLeeCJ/SemIf | Python | 3288 | [Open](https://github.com/TheoLeeCJ/SemIf) |
| 8 | jaredpalmer/kev | Python | 2525 | [Open](https://github.com/jaredpalmer/kev) |
| 9 | jarrodwatts/jev-trader | TypeScript | 1867 | [Open](https://github.com/jarrodwatts/jev-trader) |
| 10 | TianyuCodings/NanoJev | Python | 1825 | [Open](https://github.com/TianyuCodings/NanoJev) |

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
