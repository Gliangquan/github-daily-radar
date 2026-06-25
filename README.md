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

Updated: 2026-06-25T02:01:27.992Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | bozhouDev/codex-orange-book | HTML | 1471 | [Open](https://github.com/bozhouDev/codex-orange-book) |
| 2 | lyra81604/zhengxi-views | Python | 990 | [Open](https://github.com/lyra81604/zhengxi-views) |
| 3 | Forsy-AI/agent-apprenticeship | Unknown | 910 | [Open](https://github.com/Forsy-AI/agent-apprenticeship) |
| 4 | aidenybai/cnfast | TypeScript | 881 | [Open](https://github.com/aidenybai/cnfast) |
| 5 | kanavtwtgg/birds.cafe | JavaScript | 767 | [Open](https://github.com/kanavtwtgg/birds.cafe) |
| 6 | sums001/Windows-Copilot-API | Python | 664 | [Open](https://github.com/sums001/Windows-Copilot-API) |
| 7 | raiyanyahya/recall | Python | 480 | [Open](https://github.com/raiyanyahya/recall) |
| 8 | yo-WASSUP/Good-Badminton | Python | 479 | [Open](https://github.com/yo-WASSUP/Good-Badminton) |
| 9 | overflowy/make-look-scanned | Go | 403 | [Open](https://github.com/overflowy/make-look-scanned) |
| 10 | HKUDS/AgentSpace | TypeScript | 355 | [Open](https://github.com/HKUDS/AgentSpace) |

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
