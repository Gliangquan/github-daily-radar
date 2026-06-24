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

Updated: 2026-06-24T01:59:07.104Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | baidu/Unlimited-OCR | Python | 3765 | [Open](https://github.com/baidu/Unlimited-OCR) |
| 2 | zhongerxin/Cowart | JavaScript | 2381 | [Open](https://github.com/zhongerxin/Cowart) |
| 3 | lyra81604/zhengxi-views | Python | 921 | [Open](https://github.com/lyra81604/zhengxi-views) |
| 4 | Forsy-AI/agent-apprenticeship | Unknown | 860 | [Open](https://github.com/Forsy-AI/agent-apprenticeship) |
| 5 | aidenybai/cnfast | TypeScript | 792 | [Open](https://github.com/aidenybai/cnfast) |
| 6 | kanavtwtgg/birds.cafe | JavaScript | 717 | [Open](https://github.com/kanavtwtgg/birds.cafe) |
| 7 | bozhouDev/codex-orange-book | HTML | 546 | [Open](https://github.com/bozhouDev/codex-orange-book) |
| 8 | sums001/Windows-Copilot-API | Python | 535 | [Open](https://github.com/sums001/Windows-Copilot-API) |
| 9 | cloudflare/security-audit-skill | JavaScript | 495 | [Open](https://github.com/cloudflare/security-audit-skill) |
| 10 | raiyanyahya/recall | Python | 418 | [Open](https://github.com/raiyanyahya/recall) |

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
