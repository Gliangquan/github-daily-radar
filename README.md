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

Updated: 2026-06-22T02:31:47.425Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel/eve | TypeScript | 2089 | [Open](https://github.com/vercel/eve) |
| 2 | zhongerxin/Cowart | JavaScript | 1278 | [Open](https://github.com/zhongerxin/Cowart) |
| 3 | rebel0789/codexpro | JavaScript | 628 | [Open](https://github.com/rebel0789/codexpro) |
| 4 | Forsy-AI/agent-apprenticeship | Unknown | 609 | [Open](https://github.com/Forsy-AI/agent-apprenticeship) |
| 5 | Plaer1/junction | TypeScript | 518 | [Open](https://github.com/Plaer1/junction) |
| 6 | ngrok/webernetes | TypeScript | 482 | [Open](https://github.com/ngrok/webernetes) |
| 7 | boogu-project/Boogu-Image | Python | 396 | [Open](https://github.com/boogu-project/Boogu-Image) |
| 8 | MstKail/polymarket-trading-bot-services-polyedge365 | Unknown | 379 | [Open](https://github.com/MstKail/polymarket-trading-bot-services-polyedge365) |
| 9 | ReulgeApmpetty0O/Back-End-Developer-Interview-Questions | Unknown | 363 | [Open](https://github.com/ReulgeApmpetty0O/Back-End-Developer-Interview-Questions) |
| 10 | nnecrkvenuOX/formcms | C# | 361 | [Open](https://github.com/nnecrkvenuOX/formcms) |

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
