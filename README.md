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

Updated: 2026-06-19T02:44:23.819Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | tamnd/kage | Go | 2013 | [Open](https://github.com/tamnd/kage) |
| 2 | vercel/eve | TypeScript | 1389 | [Open](https://github.com/vercel/eve) |
| 3 | EEliberto/IPA-Download | Swift | 1072 | [Open](https://github.com/EEliberto/IPA-Download) |
| 4 | Waishnav/devspace | TypeScript | 894 | [Open](https://github.com/Waishnav/devspace) |
| 5 | alchaincyf/loop-engineering-orange-book | Unknown | 674 | [Open](https://github.com/alchaincyf/loop-engineering-orange-book) |
| 6 | Plaer1/junction | TypeScript | 510 | [Open](https://github.com/Plaer1/junction) |
| 7 | mrtooher/fable-mode | Unknown | 500 | [Open](https://github.com/mrtooher/fable-mode) |
| 8 | fivetaku/fablize | Python | 478 | [Open](https://github.com/fivetaku/fablize) |
| 9 | royalbhati/sqltoerdiagram | JavaScript | 467 | [Open](https://github.com/royalbhati/sqltoerdiagram) |
| 10 | rebel0789/codexpro | TypeScript | 397 | [Open](https://github.com/rebel0789/codexpro) |

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
