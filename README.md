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

Updated: 2026-08-05T01:19:59.150Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | trycompai/crm | TypeScript | 4699 | [Open](https://github.com/trycompai/crm) |
| 2 | bashalarmistalt/decimen-optical-transfer | TypeScript | 4551 | [Open](https://github.com/bashalarmistalt/decimen-optical-transfer) |
| 3 | xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer | Unknown | 2933 | [Open](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer) |
| 4 | FareedKhan-dev/kimi-k3-in-c | C | 2028 | [Open](https://github.com/FareedKhan-dev/kimi-k3-in-c) |
| 5 | imsai-sh/zhuzhiliao | HTML | 1662 | [Open](https://github.com/imsai-sh/zhuzhiliao) |
| 6 | firecrawl/anydoc | Rust | 1515 | [Open](https://github.com/firecrawl/anydoc) |
| 7 | genspark-ai/genoffice | TypeScript | 1344 | [Open](https://github.com/genspark-ai/genoffice) |
| 8 | DannyMac180/sol-advisor | Shell | 1312 | [Open](https://github.com/DannyMac180/sol-advisor) |
| 9 | thebuggeddev/anatomy | TypeScript | 1222 | [Open](https://github.com/thebuggeddev/anatomy) |
| 10 | WilonityDev/WilonityLoader | Unknown | 900 | [Open](https://github.com/WilonityDev/WilonityLoader) |

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
