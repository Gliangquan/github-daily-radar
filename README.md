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

Updated: 2026-03-26T01:11:34.695Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | slavingia/skills | Unknown | 2475 | [Open](https://github.com/slavingia/skills) |
| 2 | dontbesilent2025/dbskill | Unknown | 1541 | [Open](https://github.com/dontbesilent2025/dbskill) |
| 3 | zarazhangrui/codebase-to-course | Unknown | 1501 | [Open](https://github.com/zarazhangrui/codebase-to-course) |
| 4 | louislva/claude-peers-mcp | TypeScript | 1201 | [Open](https://github.com/louislva/claude-peers-mcp) |
| 5 | dou-jiang/codex-console | Python | 930 | [Open](https://github.com/dou-jiang/codex-console) |
| 6 | wong2/weixin-agent-sdk | TypeScript | 891 | [Open](https://github.com/wong2/weixin-agent-sdk) |
| 7 | HKUDS/OpenSpace | Python | 871 | [Open](https://github.com/HKUDS/OpenSpace) |
| 8 | ghostty-org/ghostling | C | 830 | [Open](https://github.com/ghostty-org/ghostling) |
| 9 | opa334/darksword-kexploit | Objective-C | 775 | [Open](https://github.com/opa334/darksword-kexploit) |
| 10 | GAIR-NLP/daVinci-MagiHuman | Python | 767 | [Open](https://github.com/GAIR-NLP/daVinci-MagiHuman) |

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
