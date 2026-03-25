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

Updated: 2026-03-25T01:06:11.169Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | dontbesilent2025/dbskill | Unknown | 1419 | [Open](https://github.com/dontbesilent2025/dbskill) |
| 2 | louislva/claude-peers-mcp | TypeScript | 1117 | [Open](https://github.com/louislva/claude-peers-mcp) |
| 3 | zarazhangrui/codebase-to-course | Unknown | 1086 | [Open](https://github.com/zarazhangrui/codebase-to-course) |
| 4 | math-inc/OpenGauss | Python | 1076 | [Open](https://github.com/math-inc/OpenGauss) |
| 5 | slavingia/skills | Unknown | 1063 | [Open](https://github.com/slavingia/skills) |
| 6 | truongduy2611/app-store-preflight-skills | Unknown | 923 | [Open](https://github.com/truongduy2611/app-store-preflight-skills) |
| 7 | wong2/weixin-agent-sdk | TypeScript | 851 | [Open](https://github.com/wong2/weixin-agent-sdk) |
| 8 | ghostty-org/ghostling | C | 802 | [Open](https://github.com/ghostty-org/ghostling) |
| 9 | dou-jiang/codex-console | Python | 800 | [Open](https://github.com/dou-jiang/codex-console) |
| 10 | ccbkkb/MicroWARP | Shell | 676 | [Open](https://github.com/ccbkkb/MicroWARP) |

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
