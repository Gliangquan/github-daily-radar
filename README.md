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

Updated: 2026-06-28T02:07:33.640Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | bozhouDev/codex-orange-book | HTML | 2216 | [Open](https://github.com/bozhouDev/codex-orange-book) |
| 2 | deepseek-ai/DeepSpec | Python | 1358 | [Open](https://github.com/deepseek-ai/DeepSpec) |
| 3 | bikini/exploitarium | Python | 1227 | [Open](https://github.com/bikini/exploitarium) |
| 4 | BohemiaInteractive/CWR | C++ | 662 | [Open](https://github.com/BohemiaInteractive/CWR) |
| 5 | Yu9191/wloc | JavaScript | 647 | [Open](https://github.com/Yu9191/wloc) |
| 6 | winsznx/theeleven | TypeScript | 643 | [Open](https://github.com/winsznx/theeleven) |
| 7 | QwenLM/Qwen-AgentWorld | Python | 597 | [Open](https://github.com/QwenLM/Qwen-AgentWorld) |
| 8 | benchflow-ai/awesome-evals | Unknown | 533 | [Open](https://github.com/benchflow-ai/awesome-evals) |
| 9 | HKUDS/AgentSpace | TypeScript | 479 | [Open](https://github.com/HKUDS/AgentSpace) |
| 10 | goehou/tabbit-toy | JavaScript | 365 | [Open](https://github.com/goehou/tabbit-toy) |

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
