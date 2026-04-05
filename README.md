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

Updated: 2026-04-05T01:14:47.388Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ultraworkers/claw-code | Rust | 167208 | [Open](https://github.com/ultraworkers/claw-code) |
| 2 | Gitlawb/openclaude | TypeScript | 14699 | [Open](https://github.com/Gitlawb/openclaude) |
| 3 | claude-code-best/claude-code | TypeScript | 13572 | [Open](https://github.com/claude-code-best/claude-code) |
| 4 | openai/codex-plugin-cc | JavaScript | 11641 | [Open](https://github.com/openai/codex-plugin-cc) |
| 5 | sanbuphy/learn-coding-agent | Unknown | 11262 | [Open](https://github.com/sanbuphy/learn-coding-agent) |
| 6 | VoltAgent/awesome-design-md | HTML | 8422 | [Open](https://github.com/VoltAgent/awesome-design-md) |
| 7 | ChinaSiro/claude-code-sourcemap | TypeScript | 8377 | [Open](https://github.com/ChinaSiro/claude-code-sourcemap) |
| 8 | Kuberwastaken/claurst | Rust | 8061 | [Open](https://github.com/Kuberwastaken/claurst) |
| 9 | titanwings/colleague-skill | Python | 7154 | [Open](https://github.com/titanwings/colleague-skill) |
| 10 | emdash-cms/emdash | TypeScript | 7039 | [Open](https://github.com/emdash-cms/emdash) |

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
