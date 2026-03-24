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

Updated: 2026-03-24T01:00:49.948Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | danveloper/flash-moe | Objective-C | 1666 | [Open](https://github.com/danveloper/flash-moe) |
| 2 | dontbesilent2025/dbskill | Unknown | 1252 | [Open](https://github.com/dontbesilent2025/dbskill) |
| 3 | math-inc/OpenGauss | Python | 1060 | [Open](https://github.com/math-inc/OpenGauss) |
| 4 | lxf746/any-auto-register | Python | 1029 | [Open](https://github.com/lxf746/any-auto-register) |
| 5 | louislva/claude-peers-mcp | TypeScript | 945 | [Open](https://github.com/louislva/claude-peers-mcp) |
| 6 | mattprusak/autoresearch-genealogy | Unknown | 905 | [Open](https://github.com/mattprusak/autoresearch-genealogy) |
| 7 | truongduy2611/app-store-preflight-skills | Unknown | 896 | [Open](https://github.com/truongduy2611/app-store-preflight-skills) |
| 8 | BryanLunduke/DoesItAgeVerify | Unknown | 774 | [Open](https://github.com/BryanLunduke/DoesItAgeVerify) |
| 9 | ghostty-org/ghostling | C | 766 | [Open](https://github.com/ghostty-org/ghostling) |
| 10 | leo-lilinxiao/codex-autoresearch | Python | 760 | [Open](https://github.com/leo-lilinxiao/codex-autoresearch) |

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
