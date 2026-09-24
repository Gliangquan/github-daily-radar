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

Updated: 2026-09-24T01:53:33.616Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NandhaKishorM/laya | Python | 20607 | [Open](https://github.com/NandhaKishorM/laya) |
| 2 | zai-org/ZCode | TypeScript | 6545 | [Open](https://github.com/zai-org/ZCode) |
| 3 | mizorewww/laya-mlx | Python | 5973 | [Open](https://github.com/mizorewww/laya-mlx) |
| 4 | jev-chat/jev-chat-jarvis | Kotlin | 5285 | [Open](https://github.com/jev-chat/jev-chat-jarvis) |
| 5 | unreallabsai/unreal-agent | Go | 1728 | [Open](https://github.com/unreallabsai/unreal-agent) |
| 6 | bespokelabsai/nimble | Python | 1689 | [Open](https://github.com/bespokelabsai/nimble) |
| 7 | mizorewww/laya-coreml | Python | 1393 | [Open](https://github.com/mizorewww/laya-coreml) |
| 8 | newliver666/apk-reverse | Python | 1292 | [Open](https://github.com/newliver666/apk-reverse) |
| 9 | Lumid-Off/AirCard-Windows | Rust | 789 | [Open](https://github.com/Lumid-Off/AirCard-Windows) |
| 10 | heyjunpenn/awesome-jev | Astro | 772 | [Open](https://github.com/heyjunpenn/awesome-jev) |

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
