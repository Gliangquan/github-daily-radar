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

Updated: 2026-04-03T01:12:21.955Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ultraworkers/claw-code | Rust | 150575 | [Open](https://github.com/ultraworkers/claw-code) |
| 2 | sanbuphy/learn-coding-agent | Unknown | 11007 | [Open](https://github.com/sanbuphy/learn-coding-agent) |
| 3 | openai/codex-plugin-cc | JavaScript | 10636 | [Open](https://github.com/openai/codex-plugin-cc) |
| 4 | claude-code-best/claude-code | TypeScript | 10635 | [Open](https://github.com/claude-code-best/claude-code) |
| 5 | ChinaSiro/claude-code-sourcemap | TypeScript | 8009 | [Open](https://github.com/ChinaSiro/claude-code-sourcemap) |
| 6 | Gitlawb/openclaude | TypeScript | 7561 | [Open](https://github.com/Gitlawb/openclaude) |
| 7 | Kuberwastaken/claurst | Rust | 7375 | [Open](https://github.com/Kuberwastaken/claurst) |
| 8 | titanwings/colleague-skill | Python | 5429 | [Open](https://github.com/titanwings/colleague-skill) |
| 9 | tvytlx/ai-agent-deep-dive | Python | 4469 | [Open](https://github.com/tvytlx/ai-agent-deep-dive) |
| 10 | emdash-cms/emdash | TypeScript | 4321 | [Open](https://github.com/emdash-cms/emdash) |

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
