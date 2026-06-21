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

Updated: 2026-06-21T02:27:47.592Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel/eve | TypeScript | 1870 | [Open](https://github.com/vercel/eve) |
| 2 | alchaincyf/loop-engineering-orange-book | Unknown | 716 | [Open](https://github.com/alchaincyf/loop-engineering-orange-book) |
| 3 | rebel0789/codexpro | JavaScript | 545 | [Open](https://github.com/rebel0789/codexpro) |
| 4 | Forsy-AI/agent-apprenticeship | Unknown | 533 | [Open](https://github.com/Forsy-AI/agent-apprenticeship) |
| 5 | Plaer1/junction | TypeScript | 516 | [Open](https://github.com/Plaer1/junction) |
| 6 | dongshuyan/compass-skills | Python | 397 | [Open](https://github.com/dongshuyan/compass-skills) |
| 7 | ngrok/webernetes | TypeScript | 360 | [Open](https://github.com/ngrok/webernetes) |
| 8 | MstKail/polymarket-trading-bot-services-polyedge365 | Unknown | 354 | [Open](https://github.com/MstKail/polymarket-trading-bot-services-polyedge365) |
| 9 | boogu-project/Boogu-Image | Python | 353 | [Open](https://github.com/boogu-project/Boogu-Image) |
| 10 | ReulgeApmpetty0O/Back-End-Developer-Interview-Questions | Unknown | 336 | [Open](https://github.com/ReulgeApmpetty0O/Back-End-Developer-Interview-Questions) |

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
