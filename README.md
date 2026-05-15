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

Updated: 2026-05-15T01:54:05.725Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FULU-Foundation/OrcaSlicer-bambulab | C++ | 4073 | [Open](https://github.com/FULU-Foundation/OrcaSlicer-bambulab) |
| 2 | huangserva/3DCellForge | JavaScript | 2012 | [Open](https://github.com/huangserva/3DCellForge) |
| 3 | Nightmare-Eclipse/YellowKey | Unknown | 1759 | [Open](https://github.com/Nightmare-Eclipse/YellowKey) |
| 4 | nexu-io/html-anything | HTML | 966 | [Open](https://github.com/nexu-io/html-anything) |
| 5 | HermannBjorgvin/Clawdmeter | C | 869 | [Open](https://github.com/HermannBjorgvin/Clawdmeter) |
| 6 | ywnd1144/Gopay_plus_automatic | Python | 793 | [Open](https://github.com/ywnd1144/Gopay_plus_automatic) |
| 7 | simonlin1212/a-stock-data | Unknown | 708 | [Open](https://github.com/simonlin1212/a-stock-data) |
| 8 | TencentARC/Pixal3D | Python | 640 | [Open](https://github.com/TencentARC/Pixal3D) |
| 9 | cclank/cell-architecture-studio | TypeScript | 569 | [Open](https://github.com/cclank/cell-architecture-studio) |
| 10 | thakur-works/DarkGPT | Unknown | 535 | [Open](https://github.com/thakur-works/DarkGPT) |

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
