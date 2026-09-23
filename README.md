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

Updated: 2026-09-23T02:05:37.265Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NandhaKishorM/laya | Python | 16845 | [Open](https://github.com/NandhaKishorM/laya) |
| 2 | zai-org/ZCode | TypeScript | 6324 | [Open](https://github.com/zai-org/ZCode) |
| 3 | tamaratran/fast-jev-compaction | TypeScript | 6322 | [Open](https://github.com/tamaratran/fast-jev-compaction) |
| 4 | mizorewww/laya-mlx | Python | 5493 | [Open](https://github.com/mizorewww/laya-mlx) |
| 5 | jaredpalmer/kev | Python | 4362 | [Open](https://github.com/jaredpalmer/kev) |
| 6 | jev-chat/jev-chat-jarvis | Kotlin | 3952 | [Open](https://github.com/jev-chat/jev-chat-jarvis) |
| 7 | TianyuCodings/NanoJev | Python | 2009 | [Open](https://github.com/TianyuCodings/NanoJev) |
| 8 | bespokelabsai/nimble | Python | 1632 | [Open](https://github.com/bespokelabsai/nimble) |
| 9 | yibie/awesome-jev | Python | 1321 | [Open](https://github.com/yibie/awesome-jev) |
| 10 | mizorewww/laya-coreml | Python | 1295 | [Open](https://github.com/mizorewww/laya-coreml) |

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
