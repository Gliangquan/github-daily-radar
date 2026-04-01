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

Updated: 2026-04-01T01:19:18.442Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | instructkr/claw-code | Rust | 62102 | [Open](https://github.com/instructkr/claw-code) |
| 2 | openai/codex-plugin-cc | JavaScript | 5742 | [Open](https://github.com/openai/codex-plugin-cc) |
| 3 | ChinaSiro/claude-code-sourcemap | TypeScript | 4750 | [Open](https://github.com/ChinaSiro/claude-code-sourcemap) |
| 4 | sanbuphy/claude-code-source-code | TypeScript | 4522 | [Open](https://github.com/sanbuphy/claude-code-source-code) |
| 5 | titanwings/colleague-skill | Python | 3412 | [Open](https://github.com/titanwings/colleague-skill) |
| 6 | Kuberwastaken/claude-code | Rust | 3386 | [Open](https://github.com/Kuberwastaken/claude-code) |
| 7 | magnum6actual/flipoff | JavaScript | 2557 | [Open](https://github.com/magnum6actual/flipoff) |
| 8 | claude-code-best/claude-code | TypeScript | 1803 | [Open](https://github.com/claude-code-best/claude-code) |
| 9 | garinasset/leak-check | Python | 1644 | [Open](https://github.com/garinasset/leak-check) |
| 10 | drona23/claude-token-efficient | Unknown | 1634 | [Open](https://github.com/drona23/claude-token-efficient) |

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
