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

Updated: 2026-08-04T01:16:48.842Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | yc-software/qm | TypeScript | 9708 | [Open](https://github.com/yc-software/qm) |
| 2 | bashalarmistalt/decimen-optical-transfer | TypeScript | 4256 | [Open](https://github.com/bashalarmistalt/decimen-optical-transfer) |
| 3 | trycompai/crm | TypeScript | 3273 | [Open](https://github.com/trycompai/crm) |
| 4 | xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer | Unknown | 2073 | [Open](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer) |
| 5 | microsoft/skill-recorder | TypeScript | 1411 | [Open](https://github.com/microsoft/skill-recorder) |
| 6 | FareedKhan-dev/kimi-k3-in-c | C | 1250 | [Open](https://github.com/FareedKhan-dev/kimi-k3-in-c) |
| 7 | DannyMac180/sol-advisor | Shell | 992 | [Open](https://github.com/DannyMac180/sol-advisor) |
| 8 | WilonityDev/WilonityLoader | Unknown | 898 | [Open](https://github.com/WilonityDev/WilonityLoader) |
| 9 | imsai-sh/zhuzhiliao | HTML | 795 | [Open](https://github.com/imsai-sh/zhuzhiliao) |
| 10 | thebuggeddev/anatomy | TypeScript | 758 | [Open](https://github.com/thebuggeddev/anatomy) |

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
