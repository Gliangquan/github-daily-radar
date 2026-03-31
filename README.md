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

Updated: 2026-03-31T01:12:22.031Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | larksuite/cli | Go | 4657 | [Open](https://github.com/larksuite/cli) |
| 2 | magnum6actual/flipoff | JavaScript | 2516 | [Open](https://github.com/magnum6actual/flipoff) |
| 3 | elder-plinius/G0DM0D3 | TypeScript | 2253 | [Open](https://github.com/elder-plinius/G0DM0D3) |
| 4 | TheTom/turboquant_plus | Python | 1847 | [Open](https://github.com/TheTom/turboquant_plus) |
| 5 | qiuzhi2046/Qclaw | TypeScript | 1283 | [Open](https://github.com/qiuzhi2046/Qclaw) |
| 6 | openai/codex-plugin-cc | JavaScript | 1250 | [Open](https://github.com/openai/codex-plugin-cc) |
| 7 | yetone/voice-input-src | Unknown | 1040 | [Open](https://github.com/yetone/voice-input-src) |
| 8 | WecomTeam/wecom-cli | Rust | 955 | [Open](https://github.com/WecomTeam/wecom-cli) |
| 9 | jxnxts/mcp-brasil | Python | 940 | [Open](https://github.com/jxnxts/mcp-brasil) |
| 10 | oaker-io/wewrite | Python | 934 | [Open](https://github.com/oaker-io/wewrite) |

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
