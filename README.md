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

Updated: 2026-04-04T01:06:06.093Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ultraworkers/claw-code | Rust | 162320 | [Open](https://github.com/ultraworkers/claw-code) |
| 2 | claude-code-best/claude-code | TypeScript | 13010 | [Open](https://github.com/claude-code-best/claude-code) |
| 3 | Gitlawb/openclaude | TypeScript | 11688 | [Open](https://github.com/Gitlawb/openclaude) |
| 4 | openai/codex-plugin-cc | JavaScript | 11288 | [Open](https://github.com/openai/codex-plugin-cc) |
| 5 | sanbuphy/learn-coding-agent | Unknown | 11181 | [Open](https://github.com/sanbuphy/learn-coding-agent) |
| 6 | ChinaSiro/claude-code-sourcemap | TypeScript | 8273 | [Open](https://github.com/ChinaSiro/claude-code-sourcemap) |
| 7 | Kuberwastaken/claurst | Rust | 7793 | [Open](https://github.com/Kuberwastaken/claurst) |
| 8 | titanwings/colleague-skill | Python | 6485 | [Open](https://github.com/titanwings/colleague-skill) |
| 9 | emdash-cms/emdash | TypeScript | 6124 | [Open](https://github.com/emdash-cms/emdash) |
| 10 | ultraworkers/claw-code-parity | Rust | 5128 | [Open](https://github.com/ultraworkers/claw-code-parity) |

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
