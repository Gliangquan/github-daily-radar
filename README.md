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

Updated: 2026-05-21T01:59:16.846Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel-labs/zerolang | C | 3984 | [Open](https://github.com/vercel-labs/zerolang) |
| 2 | FoundZiGu/GuJumpgate | JavaScript | 966 | [Open](https://github.com/FoundZiGu/GuJumpgate) |
| 3 | DenisSergeevitch/agents-best-practices | Unknown | 902 | [Open](https://github.com/DenisSergeevitch/agents-best-practices) |
| 4 | thananon/9arm-skills | Shell | 901 | [Open](https://github.com/thananon/9arm-skills) |
| 5 | Doorman11991/smallcode | JavaScript | 842 | [Open](https://github.com/Doorman11991/smallcode) |
| 6 | Kappaemme-git/codex-complexity-optimizer | Python | 805 | [Open](https://github.com/Kappaemme-git/codex-complexity-optimizer) |
| 7 | xw7872081123/wallpaper-engine-steam | TypeScript | 614 | [Open](https://github.com/xw7872081123/wallpaper-engine-steam) |
| 8 | openclaw/clawpatch | TypeScript | 606 | [Open](https://github.com/openclaw/clawpatch) |
| 9 | Flizorules05/ROM-MGBA-Pokemon-Emulator-PC | Unknown | 601 | [Open](https://github.com/Flizorules05/ROM-MGBA-Pokemon-Emulator-PC) |
| 10 | arnabchoudhury404/hydra-launcher | TypeScript | 601 | [Open](https://github.com/arnabchoudhury404/hydra-launcher) |

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
