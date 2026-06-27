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

Updated: 2026-06-27T01:57:07.908Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | bozhouDev/codex-orange-book | HTML | 2143 | [Open](https://github.com/bozhouDev/codex-orange-book) |
| 2 | kanavtwtgg/birds.cafe | JavaScript | 735 | [Open](https://github.com/kanavtwtgg/birds.cafe) |
| 3 | BohemiaInteractive/CWR | C++ | 624 | [Open](https://github.com/BohemiaInteractive/CWR) |
| 4 | QwenLM/Qwen-AgentWorld | Python | 568 | [Open](https://github.com/QwenLM/Qwen-AgentWorld) |
| 5 | benchflow-ai/awesome-evals | Unknown | 465 | [Open](https://github.com/benchflow-ai/awesome-evals) |
| 6 | Yu9191/wloc | JavaScript | 462 | [Open](https://github.com/Yu9191/wloc) |
| 7 | winsznx/theeleven | TypeScript | 458 | [Open](https://github.com/winsznx/theeleven) |
| 8 | HKUDS/AgentSpace | TypeScript | 453 | [Open](https://github.com/HKUDS/AgentSpace) |
| 9 | m1ckc3s/claude-status-bar | Swift | 360 | [Open](https://github.com/m1ckc3s/claude-status-bar) |
| 10 | Th0rgal/open_oura | Rust | 342 | [Open](https://github.com/Th0rgal/open_oura) |

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
