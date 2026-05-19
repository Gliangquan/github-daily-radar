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

Updated: 2026-05-19T02:00:05.137Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel-labs/zero | C | 2306 | [Open](https://github.com/vercel-labs/zero) |
| 2 | yetone/native-feel-skill | Unknown | 1310 | [Open](https://github.com/yetone/native-feel-skill) |
| 3 | facebookresearch/vggt-omega | Python | 987 | [Open](https://github.com/facebookresearch/vggt-omega) |
| 4 | DenisSergeevitch/agents-best-practices | Unknown | 816 | [Open](https://github.com/DenisSergeevitch/agents-best-practices) |
| 5 | DuskMosquito/Lossless-Scaling-Desktop-2026 | C | 776 | [Open](https://github.com/DuskMosquito/Lossless-Scaling-Desktop-2026) |
| 6 | Kappaemme-git/codex-complexity-optimizer | Python | 750 | [Open](https://github.com/Kappaemme-git/codex-complexity-optimizer) |
| 7 | boona13/mykonos-island-voxels | JavaScript | 639 | [Open](https://github.com/boona13/mykonos-island-voxels) |
| 8 | Juwluuu/Subnautica-2-Release | C++ | 621 | [Open](https://github.com/Juwluuu/Subnautica-2-Release) |
| 9 | DARKHOLEUM/VoidStrap-For-Roblox | C# | 614 | [Open](https://github.com/DARKHOLEUM/VoidStrap-For-Roblox) |
| 10 | snoozinjs/Delta-exec | C++ | 599 | [Open](https://github.com/snoozinjs/Delta-exec) |

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
