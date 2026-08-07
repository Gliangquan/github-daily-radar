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

Updated: 2026-08-07T01:58:35.625Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | firecrawl/anydoc | Rust | 8563 | [Open](https://github.com/firecrawl/anydoc) |
| 2 | FareedKhan-dev/kimi-k3-in-c | C | 2837 | [Open](https://github.com/FareedKhan-dev/kimi-k3-in-c) |
| 3 | imsai-sh/zhuzhiliao | HTML | 2301 | [Open](https://github.com/imsai-sh/zhuzhiliao) |
| 4 | thebuggeddev/anatomy | TypeScript | 1869 | [Open](https://github.com/thebuggeddev/anatomy) |
| 5 | DannyMac180/sol-advisor | Shell | 1706 | [Open](https://github.com/DannyMac180/sol-advisor) |
| 6 | KKKKhazix/human-writing | Python | 1603 | [Open](https://github.com/KKKKhazix/human-writing) |
| 7 | Binaryify/open-kimi-ppt-skill | Python | 1384 | [Open](https://github.com/Binaryify/open-kimi-ppt-skill) |
| 8 | Accio-org/RealReplicaBench | HTML | 1036 | [Open](https://github.com/Accio-org/RealReplicaBench) |
| 9 | ZzzLc0405/photo-abstract-editorial | Unknown | 1005 | [Open](https://github.com/ZzzLc0405/photo-abstract-editorial) |
| 10 | x4gKing/3x-ui-multi | JavaScript | 877 | [Open](https://github.com/x4gKing/3x-ui-multi) |

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
