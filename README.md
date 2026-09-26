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

Updated: 2026-09-26T02:16:22.102Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | zai-org/ZCode | TypeScript | 6777 | [Open](https://github.com/zai-org/ZCode) |
| 2 | jev-chat/jev-chat-jarvis | Kotlin | 6518 | [Open](https://github.com/jev-chat/jev-chat-jarvis) |
| 3 | unreallabsai/unreal-agent | Go | 1940 | [Open](https://github.com/unreallabsai/unreal-agent) |
| 4 | driceroland/Search | Swift | 1837 | [Open](https://github.com/driceroland/Search) |
| 5 | Contrastive-LM/CLM | Python | 1282 | [Open](https://github.com/Contrastive-LM/CLM) |
| 6 | deepopen-com/deepopen | Python | 1020 | [Open](https://github.com/deepopen-com/deepopen) |
| 7 | mikehasa/golive-skill | TypeScript | 951 | [Open](https://github.com/mikehasa/golive-skill) |
| 8 | tobi/disktree | Rust | 938 | [Open](https://github.com/tobi/disktree) |
| 9 | JohnHeibel/PDoomVideo | JavaScript | 893 | [Open](https://github.com/JohnHeibel/PDoomVideo) |
| 10 | kryvora-network/kryvora-node | Go | 824 | [Open](https://github.com/kryvora-network/kryvora-node) |

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
