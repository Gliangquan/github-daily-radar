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

Updated: 2026-09-25T02:10:21.053Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | zai-org/ZCode | TypeScript | 6718 | [Open](https://github.com/zai-org/ZCode) |
| 2 | mizorewww/laya-mlx | Python | 6227 | [Open](https://github.com/mizorewww/laya-mlx) |
| 3 | jev-chat/jev-chat-jarvis | Kotlin | 6119 | [Open](https://github.com/jev-chat/jev-chat-jarvis) |
| 4 | unreallabsai/unreal-agent | Go | 1881 | [Open](https://github.com/unreallabsai/unreal-agent) |
| 5 | mizorewww/laya-coreml | Python | 1440 | [Open](https://github.com/mizorewww/laya-coreml) |
| 6 | newliver666/apk-reverse | Python | 1418 | [Open](https://github.com/newliver666/apk-reverse) |
| 7 | driceroland/Search | Swift | 1258 | [Open](https://github.com/driceroland/Search) |
| 8 | deepopen-com/deepopen | Python | 1006 | [Open](https://github.com/deepopen-com/deepopen) |
| 9 | mikehasa/golive-skill | TypeScript | 881 | [Open](https://github.com/mikehasa/golive-skill) |
| 10 | Contrastive-LM/CLM | Python | 847 | [Open](https://github.com/Contrastive-LM/CLM) |

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
