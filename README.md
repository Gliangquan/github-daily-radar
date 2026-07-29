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

Updated: 2026-07-29T01:20:46.002Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MoonshotAI/Kimi-K3 | Unknown | 3421 | [Open](https://github.com/MoonshotAI/Kimi-K3) |
| 2 | slvDev/esp32-ai | Python | 2059 | [Open](https://github.com/slvDev/esp32-ai) |
| 3 | mshumer/Claude-of-Duty | JavaScript | 1741 | [Open](https://github.com/mshumer/Claude-of-Duty) |
| 4 | kvcache-ai/AgentENV | Rust | 1437 | [Open](https://github.com/kvcache-ai/AgentENV) |
| 5 | mikiarlo3/ai-copywriter | Python | 991 | [Open](https://github.com/mikiarlo3/ai-copywriter) |
| 6 | VictorTaelin/OptMem | Python | 803 | [Open](https://github.com/VictorTaelin/OptMem) |
| 7 | MoonshotAI/MoonEP | Python | 789 | [Open](https://github.com/MoonshotAI/MoonEP) |
| 8 | fuadmefleh/Shared-Claude-Chats | Python | 668 | [Open](https://github.com/fuadmefleh/Shared-Claude-Chats) |
| 9 | 0xwilliamortiz/openclaude-improved | TypeScript | 581 | [Open](https://github.com/0xwilliamortiz/openclaude-improved) |
| 10 | digimata/quill | Swift | 545 | [Open](https://github.com/digimata/quill) |

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
