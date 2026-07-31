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

Updated: 2026-07-31T01:27:19.439Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MoonshotAI/Kimi-K3 | Unknown | 7537 | [Open](https://github.com/MoonshotAI/Kimi-K3) |
| 2 | mshumer/Claude-of-Duty | JavaScript | 2405 | [Open](https://github.com/mshumer/Claude-of-Duty) |
| 3 | VictorTaelin/OptMem | Python | 933 | [Open](https://github.com/VictorTaelin/OptMem) |
| 4 | xikhar/persona | JavaScript | 673 | [Open](https://github.com/xikhar/persona) |
| 5 | 0xwilliamortiz/ponytail-improved | JavaScript | 564 | [Open](https://github.com/0xwilliamortiz/ponytail-improved) |
| 6 | 0xwilliamortiz/openclaude-improved | TypeScript | 562 | [Open](https://github.com/0xwilliamortiz/openclaude-improved) |
| 7 | talivia-group/talivia | TypeScript | 489 | [Open](https://github.com/talivia-group/talivia) |
| 8 | gavamedia/deltafin | Python | 478 | [Open](https://github.com/gavamedia/deltafin) |
| 9 | NikolayS/PGSimCity | TypeScript | 440 | [Open](https://github.com/NikolayS/PGSimCity) |
| 10 | wassgha/rescript | TypeScript | 404 | [Open](https://github.com/wassgha/rescript) |

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
