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

Updated: 2026-09-20T01:59:48.445Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | browser-use/jev-ultrafast | Python | 8650 | [Open](https://github.com/browser-use/jev-ultrafast) |
| 2 | tamaratran/fast-jev-compaction | TypeScript | 4280 | [Open](https://github.com/tamaratran/fast-jev-compaction) |
| 3 | robbietilton/Compositor | Swift | 2529 | [Open](https://github.com/robbietilton/Compositor) |
| 4 | TheoLeeCJ/SemIf | Python | 1956 | [Open](https://github.com/TheoLeeCJ/SemIf) |
| 5 | mcncarl/jianying-headless | Python | 1577 | [Open](https://github.com/mcncarl/jianying-headless) |
| 6 | NandhaKishorM/laya | Python | 1350 | [Open](https://github.com/NandhaKishorM/laya) |
| 7 | jarrodwatts/jev-trader | TypeScript | 1293 | [Open](https://github.com/jarrodwatts/jev-trader) |
| 8 | vinnylarouge/jevlike | Python | 990 | [Open](https://github.com/vinnylarouge/jevlike) |
| 9 | TianyuCodings/NanoJev | Python | 929 | [Open](https://github.com/TianyuCodings/NanoJev) |
| 10 | korcarc/text-humanizer | Python | 729 | [Open](https://github.com/korcarc/text-humanizer) |

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
