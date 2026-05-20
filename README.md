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

Updated: 2026-05-20T01:59:55.296Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel-labs/zerolang | C | 3262 | [Open](https://github.com/vercel-labs/zerolang) |
| 2 | yetone/native-feel-skill | Unknown | 1335 | [Open](https://github.com/yetone/native-feel-skill) |
| 3 | facebookresearch/vggt-omega | Python | 1222 | [Open](https://github.com/facebookresearch/vggt-omega) |
| 4 | DenisSergeevitch/agents-best-practices | Unknown | 853 | [Open](https://github.com/DenisSergeevitch/agents-best-practices) |
| 5 | Kappaemme-git/codex-complexity-optimizer | Python | 788 | [Open](https://github.com/Kappaemme-git/codex-complexity-optimizer) |
| 6 | DuskMosquito/Lossless-Scaling-Desktop-2026 | C | 778 | [Open](https://github.com/DuskMosquito/Lossless-Scaling-Desktop-2026) |
| 7 | Doorman11991/smallcode | JavaScript | 727 | [Open](https://github.com/Doorman11991/smallcode) |
| 8 | cdanielc293/Jenny-Mod-All-Versions | C# | 670 | [Open](https://github.com/cdanielc293/Jenny-Mod-All-Versions) |
| 9 | boona13/mykonos-island-voxels | JavaScript | 663 | [Open](https://github.com/boona13/mykonos-island-voxels) |
| 10 | Juwluuu/Subnautica-2-Release | C++ | 644 | [Open](https://github.com/Juwluuu/Subnautica-2-Release) |

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
