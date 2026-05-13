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

Updated: 2026-05-13T01:53:20.407Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | V4bel/dirtyfrag | C | 4331 | [Open](https://github.com/V4bel/dirtyfrag) |
| 2 | vercel-labs/zero-native | Zig | 2958 | [Open](https://github.com/vercel-labs/zero-native) |
| 3 | huangserva/3DCellForge | JavaScript | 1711 | [Open](https://github.com/huangserva/3DCellForge) |
| 4 | FULU-Foundation/OrcaSlicer-bambulab | C++ | 1186 | [Open](https://github.com/FULU-Foundation/OrcaSlicer-bambulab) |
| 5 | haydenbleasel/files-sdk | TypeScript | 569 | [Open](https://github.com/haydenbleasel/files-sdk) |
| 6 | thakur-works/DarkGPT | Unknown | 532 | [Open](https://github.com/thakur-works/DarkGPT) |
| 7 | ywnd1144/Gopay_plus_automatic | Python | 529 | [Open](https://github.com/ywnd1144/Gopay_plus_automatic) |
| 8 | thakur-works/Velocity-Executor | Unknown | 528 | [Open](https://github.com/thakur-works/Velocity-Executor) |
| 9 | RadianceToadAmend/Fortnite-Cheats-2026 | Unknown | 521 | [Open](https://github.com/RadianceToadAmend/Fortnite-Cheats-2026) |
| 10 | RadianceToadAmend/ARC-Raiders-External-Tool | C++ | 521 | [Open](https://github.com/RadianceToadAmend/ARC-Raiders-External-Tool) |

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
