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

Updated: 2026-09-19T01:56:46.190Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | browser-use/jev-ultrafast | Python | 5638 | [Open](https://github.com/browser-use/jev-ultrafast) |
| 2 | tamaratran/fast-jev-compaction | TypeScript | 3298 | [Open](https://github.com/tamaratran/fast-jev-compaction) |
| 3 | TheoLeeCJ/SemIf | Python | 1607 | [Open](https://github.com/TheoLeeCJ/SemIf) |
| 4 | mcncarl/jianying-headless | Python | 1050 | [Open](https://github.com/mcncarl/jianying-headless) |
| 5 | vinnylarouge/jevlike | Python | 897 | [Open](https://github.com/vinnylarouge/jevlike) |
| 6 | jarrodwatts/jev-trader | TypeScript | 883 | [Open](https://github.com/jarrodwatts/jev-trader) |
| 7 | zhengkid/Dream-RSI | Unknown | 762 | [Open](https://github.com/zhengkid/Dream-RSI) |
| 8 | korcarc/text-humanizer | Python | 725 | [Open](https://github.com/korcarc/text-humanizer) |
| 9 | nilbuild/page-mascot | Python | 711 | [Open](https://github.com/nilbuild/page-mascot) |
| 10 | robbietilton/Compositor | Swift | 681 | [Open](https://github.com/robbietilton/Compositor) |

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
