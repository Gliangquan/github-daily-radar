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

Updated: 2026-03-23T01:07:51.990Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | HKUDS/ClawTeam | Python | 2831 | [Open](https://github.com/HKUDS/ClawTeam) |
| 2 | VoltAgent/awesome-codex-subagents | Unknown | 2070 | [Open](https://github.com/VoltAgent/awesome-codex-subagents) |
| 3 | MiniMax-AI/skills | C# | 1787 | [Open](https://github.com/MiniMax-AI/skills) |
| 4 | danveloper/flash-moe | Objective-C | 1208 | [Open](https://github.com/danveloper/flash-moe) |
| 5 | math-inc/OpenGauss | Python | 1019 | [Open](https://github.com/math-inc/OpenGauss) |
| 6 | lxf746/any-auto-register | Python | 979 | [Open](https://github.com/lxf746/any-auto-register) |
| 7 | dontbesilent2025/dbskill | Unknown | 896 | [Open](https://github.com/dontbesilent2025/dbskill) |
| 8 | mattprusak/autoresearch-genealogy | Unknown | 877 | [Open](https://github.com/mattprusak/autoresearch-genealogy) |
| 9 | truongduy2611/app-store-preflight-skills | Unknown | 833 | [Open](https://github.com/truongduy2611/app-store-preflight-skills) |
| 10 | frank890417/taiwan-md | Astro | 724 | [Open](https://github.com/frank890417/taiwan-md) |

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
