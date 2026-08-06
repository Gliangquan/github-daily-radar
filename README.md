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

Updated: 2026-08-06T01:17:20.367Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | trycompai/crm | TypeScript | 6274 | [Open](https://github.com/trycompai/crm) |
| 2 | firecrawl/anydoc | Rust | 5102 | [Open](https://github.com/firecrawl/anydoc) |
| 3 | FareedKhan-dev/kimi-k3-in-c | C | 2578 | [Open](https://github.com/FareedKhan-dev/kimi-k3-in-c) |
| 4 | imsai-sh/zhuzhiliao | HTML | 2035 | [Open](https://github.com/imsai-sh/zhuzhiliao) |
| 5 | genspark-ai/genoffice | TypeScript | 1780 | [Open](https://github.com/genspark-ai/genoffice) |
| 6 | thebuggeddev/anatomy | TypeScript | 1613 | [Open](https://github.com/thebuggeddev/anatomy) |
| 7 | DannyMac180/sol-advisor | Shell | 1463 | [Open](https://github.com/DannyMac180/sol-advisor) |
| 8 | KKKKhazix/human-writing | Python | 1071 | [Open](https://github.com/KKKKhazix/human-writing) |
| 9 | Accio-Lab/RealReplicaBench | HTML | 1018 | [Open](https://github.com/Accio-Lab/RealReplicaBench) |
| 10 | x4gKing/3x-ui-multi | JavaScript | 812 | [Open](https://github.com/x4gKing/3x-ui-multi) |

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
