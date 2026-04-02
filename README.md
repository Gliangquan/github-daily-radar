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

Updated: 2026-04-02T01:09:28.913Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | instructkr/claw-code | Rust | 121017 | [Open](https://github.com/instructkr/claw-code) |
| 2 | sanbuphy/learn-coding-agent | Unknown | 10538 | [Open](https://github.com/sanbuphy/learn-coding-agent) |
| 3 | openai/codex-plugin-cc | JavaScript | 8523 | [Open](https://github.com/openai/codex-plugin-cc) |
| 4 | claude-code-best/claude-code | TypeScript | 7663 | [Open](https://github.com/claude-code-best/claude-code) |
| 5 | ChinaSiro/claude-code-sourcemap | TypeScript | 7347 | [Open](https://github.com/ChinaSiro/claude-code-sourcemap) |
| 6 | Kuberwastaken/claurst | Rust | 6573 | [Open](https://github.com/Kuberwastaken/claurst) |
| 7 | titanwings/colleague-skill | Python | 4627 | [Open](https://github.com/titanwings/colleague-skill) |
| 8 | Gitlawb/openclaude | TypeScript | 3528 | [Open](https://github.com/Gitlawb/openclaude) |
| 9 | tvytlx/ai-agent-deep-dive | Unknown | 3085 | [Open](https://github.com/tvytlx/ai-agent-deep-dive) |
| 10 | NanmiCoder/claude-code-haha | TypeScript | 2940 | [Open](https://github.com/NanmiCoder/claude-code-haha) |

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
