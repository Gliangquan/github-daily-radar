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

Updated: 2026-05-16T01:47:36.611Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FULU-Foundation/OrcaSlicer-bambulab | C++ | 4671 | [Open](https://github.com/FULU-Foundation/OrcaSlicer-bambulab) |
| 2 | Nightmare-Eclipse/YellowKey | Unknown | 2441 | [Open](https://github.com/Nightmare-Eclipse/YellowKey) |
| 3 | huangserva/3DCellForge | JavaScript | 2059 | [Open](https://github.com/huangserva/3DCellForge) |
| 4 | nexu-io/html-anything | HTML | 1994 | [Open](https://github.com/nexu-io/html-anything) |
| 5 | yetone/native-feel-skill | Unknown | 1071 | [Open](https://github.com/yetone/native-feel-skill) |
| 6 | HermannBjorgvin/Clawdmeter | C | 1005 | [Open](https://github.com/HermannBjorgvin/Clawdmeter) |
| 7 | simonlin1212/a-stock-data | Unknown | 883 | [Open](https://github.com/simonlin1212/a-stock-data) |
| 8 | ywnd1144/Gopay_plus_automatic | Python | 876 | [Open](https://github.com/ywnd1144/Gopay_plus_automatic) |
| 9 | TencentARC/Pixal3D | Python | 732 | [Open](https://github.com/TencentARC/Pixal3D) |
| 10 | cclank/cell-architecture-studio | TypeScript | 610 | [Open](https://github.com/cclank/cell-architecture-studio) |

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
