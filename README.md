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

Updated: 2026-06-20T02:04:51.233Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | tamnd/kage | Go | 2098 | [Open](https://github.com/tamnd/kage) |
| 2 | vercel/eve | TypeScript | 1650 | [Open](https://github.com/vercel/eve) |
| 3 | Waishnav/devspace | TypeScript | 1413 | [Open](https://github.com/Waishnav/devspace) |
| 4 | alchaincyf/loop-engineering-orange-book | Unknown | 702 | [Open](https://github.com/alchaincyf/loop-engineering-orange-book) |
| 5 | Plaer1/junction | TypeScript | 513 | [Open](https://github.com/Plaer1/junction) |
| 6 | fivetaku/fablize | Python | 505 | [Open](https://github.com/fivetaku/fablize) |
| 7 | royalbhati/sqltoerdiagram | HTML | 483 | [Open](https://github.com/royalbhati/sqltoerdiagram) |
| 8 | rebel0789/codexpro | TypeScript | 447 | [Open](https://github.com/rebel0789/codexpro) |
| 9 | dongshuyan/compass-skills | Python | 348 | [Open](https://github.com/dongshuyan/compass-skills) |
| 10 | majidmanzarpour/threejs-game-skills | Python | 344 | [Open](https://github.com/majidmanzarpour/threejs-game-skills) |

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
