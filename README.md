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

Updated: 2026-08-03T01:26:42.411Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | yc-software/qm | TypeScript | 7273 | [Open](https://github.com/yc-software/qm) |
| 2 | bashalarmistalt/decimen-optical-transfer | TypeScript | 3691 | [Open](https://github.com/bashalarmistalt/decimen-optical-transfer) |
| 3 | trycompai/crm | TypeScript | 1839 | [Open](https://github.com/trycompai/crm) |
| 4 | xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer | Unknown | 1575 | [Open](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer) |
| 5 | WilonityDev/WilonityLoader | Unknown | 1215 | [Open](https://github.com/WilonityDev/WilonityLoader) |
| 6 | sqliteai/waste | C | 1070 | [Open](https://github.com/sqliteai/waste) |
| 7 | microsoft/skill-recorder | TypeScript | 820 | [Open](https://github.com/microsoft/skill-recorder) |
| 8 | xikhar/persona | JavaScript | 793 | [Open](https://github.com/xikhar/persona) |
| 9 | DannyMac180/sol-advisor | Shell | 674 | [Open](https://github.com/DannyMac180/sol-advisor) |
| 10 | talivia-group/talivia | TypeScript | 651 | [Open](https://github.com/talivia-group/talivia) |

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
