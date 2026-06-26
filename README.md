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

Updated: 2026-06-26T02:02:49.766Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | bozhouDev/codex-orange-book | HTML | 1966 | [Open](https://github.com/bozhouDev/codex-orange-book) |
| 2 | lyra81604/zhengxi-views | Python | 1037 | [Open](https://github.com/lyra81604/zhengxi-views) |
| 3 | kanavtwtgg/birds.cafe | JavaScript | 788 | [Open](https://github.com/kanavtwtgg/birds.cafe) |
| 4 | yo-WASSUP/Good-Badminton | Python | 521 | [Open](https://github.com/yo-WASSUP/Good-Badminton) |
| 5 | BohemiaInteractive/CWR | C++ | 494 | [Open](https://github.com/BohemiaInteractive/CWR) |
| 6 | QwenLM/Qwen-AgentWorld | Python | 489 | [Open](https://github.com/QwenLM/Qwen-AgentWorld) |
| 7 | HKUDS/AgentSpace | TypeScript | 422 | [Open](https://github.com/HKUDS/AgentSpace) |
| 8 | overflowy/make-look-scanned | Go | 415 | [Open](https://github.com/overflowy/make-look-scanned) |
| 9 | m1ckc3s/claude-status-bar | Swift | 322 | [Open](https://github.com/m1ckc3s/claude-status-bar) |
| 10 | Yu9191/wloc | JavaScript | 318 | [Open](https://github.com/Yu9191/wloc) |

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
