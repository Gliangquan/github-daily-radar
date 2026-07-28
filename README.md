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

Updated: 2026-07-28T01:19:03.085Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | vercel-labs/scriptc | TypeScript | 1745 | [Open](https://github.com/vercel-labs/scriptc) |
| 2 | slvDev/esp32-ai | Python | 1745 | [Open](https://github.com/slvDev/esp32-ai) |
| 3 | MoonshotAI/Kimi-K3 | Unknown | 1333 | [Open](https://github.com/MoonshotAI/Kimi-K3) |
| 4 | mshumer/Claude-of-Duty | JavaScript | 1027 | [Open](https://github.com/mshumer/Claude-of-Duty) |
| 5 | mikiarlo3/ai-copywriter | Python | 937 | [Open](https://github.com/mikiarlo3/ai-copywriter) |
| 6 | makecindy/cindy | TypeScript | 846 | [Open](https://github.com/makecindy/cindy) |
| 7 | kvcache-ai/AgentENV | Rust | 653 | [Open](https://github.com/kvcache-ai/AgentENV) |
| 8 | VictorTaelin/OptMem | Python | 650 | [Open](https://github.com/VictorTaelin/OptMem) |
| 9 | 0xwilliamortiz/openclaude-improved | TypeScript | 472 | [Open](https://github.com/0xwilliamortiz/openclaude-improved) |
| 10 | mikehasa/agentacct | Python | 469 | [Open](https://github.com/mikehasa/agentacct) |

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
