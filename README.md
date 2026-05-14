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

Updated: 2026-05-14T01:56:07.681Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel-labs/zero-native | Zig | 3293 | [Open](https://github.com/vercel-labs/zero-native) |
| 2 | FULU-Foundation/OrcaSlicer-bambulab | C++ | 2963 | [Open](https://github.com/FULU-Foundation/OrcaSlicer-bambulab) |
| 3 | huangserva/3DCellForge | JavaScript | 1813 | [Open](https://github.com/huangserva/3DCellForge) |
| 4 | Nightmare-Eclipse/YellowKey | Unknown | 1003 | [Open](https://github.com/Nightmare-Eclipse/YellowKey) |
| 5 | ywnd1144/Gopay_plus_automatic | Python | 715 | [Open](https://github.com/ywnd1144/Gopay_plus_automatic) |
| 6 | HermannBjorgvin/Clawdmeter | C | 685 | [Open](https://github.com/HermannBjorgvin/Clawdmeter) |
| 7 | haydenbleasel/files-sdk | TypeScript | 645 | [Open](https://github.com/haydenbleasel/files-sdk) |
| 8 | thakur-works/DarkGPT | Unknown | 534 | [Open](https://github.com/thakur-works/DarkGPT) |
| 9 | patchfighterway90/cs2-external-overlay | Python | 533 | [Open](https://github.com/patchfighterway90/cs2-external-overlay) |
| 10 | thakur-works/Velocity-Executor | Unknown | 528 | [Open](https://github.com/thakur-works/Velocity-Executor) |

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
