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

Updated: 2026-06-23T01:58:20.687Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | zhongerxin/Cowart | JavaScript | 2005 | [Open](https://github.com/zhongerxin/Cowart) |
| 2 | Forsy-AI/agent-apprenticeship | Unknown | 682 | [Open](https://github.com/Forsy-AI/agent-apprenticeship) |
| 3 | lyra81604/zhengxi-views | Python | 676 | [Open](https://github.com/lyra81604/zhengxi-views) |
| 4 | aidenybai/cnfast | TypeScript | 665 | [Open](https://github.com/aidenybai/cnfast) |
| 5 | kanavtwtgg/birds.cafe | JavaScript | 550 | [Open](https://github.com/kanavtwtgg/birds.cafe) |
| 6 | Plaer1/junction | TypeScript | 526 | [Open](https://github.com/Plaer1/junction) |
| 7 | baidu/Unlimited-OCR | Python | 494 | [Open](https://github.com/baidu/Unlimited-OCR) |
| 8 | MstKail/polymarket-trading-bot-services-polyedge365 | Unknown | 396 | [Open](https://github.com/MstKail/polymarket-trading-bot-services-polyedge365) |
| 9 | nnecrkvenuOX/formcms | C# | 380 | [Open](https://github.com/nnecrkvenuOX/formcms) |
| 10 | ReulgeApmpetty0O/Back-End-Developer-Interview-Questions | Unknown | 380 | [Open](https://github.com/ReulgeApmpetty0O/Back-End-Developer-Interview-Questions) |

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
