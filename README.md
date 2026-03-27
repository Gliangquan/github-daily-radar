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

Updated: 2026-03-27T01:11:09.864Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | slavingia/skills | Unknown | 3623 | [Open](https://github.com/slavingia/skills) |
| 2 | zarazhangrui/codebase-to-course | Unknown | 1744 | [Open](https://github.com/zarazhangrui/codebase-to-course) |
| 3 | HKUDS/OpenSpace | Python | 1277 | [Open](https://github.com/HKUDS/OpenSpace) |
| 4 | louislva/claude-peers-mcp | TypeScript | 1259 | [Open](https://github.com/louislva/claude-peers-mcp) |
| 5 | dou-jiang/codex-console | Python | 1043 | [Open](https://github.com/dou-jiang/codex-console) |
| 6 | alvinunreal/awesome-opensource-ai | Unknown | 1017 | [Open](https://github.com/alvinunreal/awesome-opensource-ai) |
| 7 | GAIR-NLP/daVinci-MagiHuman | Python | 932 | [Open](https://github.com/GAIR-NLP/daVinci-MagiHuman) |
| 8 | wong2/weixin-agent-sdk | TypeScript | 918 | [Open](https://github.com/wong2/weixin-agent-sdk) |
| 9 | opa334/darksword-kexploit | Objective-C | 890 | [Open](https://github.com/opa334/darksword-kexploit) |
| 10 | mnfst/awesome-free-llm-apis | Unknown | 836 | [Open](https://github.com/mnfst/awesome-free-llm-apis) |

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
