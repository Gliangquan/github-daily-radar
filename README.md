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

Updated: 2026-04-06T01:15:17.698Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ultraworkers/claw-code | Rust | 170904 | [Open](https://github.com/ultraworkers/claw-code) |
| 2 | Gitlawb/openclaude | TypeScript | 16457 | [Open](https://github.com/Gitlawb/openclaude) |
| 3 | VoltAgent/awesome-design-md | HTML | 15111 | [Open](https://github.com/VoltAgent/awesome-design-md) |
| 4 | claude-code-best/claude-code | TypeScript | 13892 | [Open](https://github.com/claude-code-best/claude-code) |
| 5 | sanbuphy/learn-coding-agent | Unknown | 11334 | [Open](https://github.com/sanbuphy/learn-coding-agent) |
| 6 | ChinaSiro/claude-code-sourcemap | TypeScript | 8450 | [Open](https://github.com/ChinaSiro/claude-code-sourcemap) |
| 7 | Kuberwastaken/claurst | Rust | 8290 | [Open](https://github.com/Kuberwastaken/claurst) |
| 8 | emdash-cms/emdash | TypeScript | 7435 | [Open](https://github.com/emdash-cms/emdash) |
| 9 | ultraworkers/claw-code-parity | Rust | 6503 | [Open](https://github.com/ultraworkers/claw-code-parity) |
| 10 | tvytlx/ai-agent-deep-dive | Python | 5136 | [Open](https://github.com/tvytlx/ai-agent-deep-dive) |

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
