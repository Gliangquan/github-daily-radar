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

Updated: 2026-07-30T01:13:40.710Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MoonshotAI/Kimi-K3 | Unknown | 5782 | [Open](https://github.com/MoonshotAI/Kimi-K3) |
| 2 | mshumer/Claude-of-Duty | JavaScript | 2248 | [Open](https://github.com/mshumer/Claude-of-Duty) |
| 3 | digimata/quill | Swift | 1509 | [Open](https://github.com/digimata/quill) |
| 4 | mikiarlo3/ai-copywriter | Python | 1046 | [Open](https://github.com/mikiarlo3/ai-copywriter) |
| 5 | fuadmefleh/Shared-Claude-Chats | Python | 932 | [Open](https://github.com/fuadmefleh/Shared-Claude-Chats) |
| 6 | VictorTaelin/OptMem | Python | 873 | [Open](https://github.com/VictorTaelin/OptMem) |
| 7 | MoonshotAI/MoonEP | Python | 861 | [Open](https://github.com/MoonshotAI/MoonEP) |
| 8 | 0xwilliamortiz/openclaude-improved | TypeScript | 554 | [Open](https://github.com/0xwilliamortiz/openclaude-improved) |
| 9 | 0xwilliamortiz/ponytail-improved | JavaScript | 545 | [Open](https://github.com/0xwilliamortiz/ponytail-improved) |
| 10 | mikehasa/agentacct | Python | 528 | [Open](https://github.com/mikehasa/agentacct) |

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
