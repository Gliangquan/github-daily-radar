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

Updated: 2026-11-06T03:54:33.402Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/dsh-superagent-prototype | TypeScript | 19669 | [Open](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 2 | storytold/craft-anything | Rust | 15522 | [Open](https://github.com/storytold/craft-anything) |
| 3 | KKKKhazix/agent-autoloop | TypeScript | 3336 | [Open](https://github.com/KKKKhazix/agent-autoloop) |
| 4 | Verlintas/NOIR | Kotlin | 2545 | [Open](https://github.com/Verlintas/NOIR) |
| 5 | zortos293/Lichii | C++ | 2510 | [Open](https://github.com/zortos293/Lichii) |
| 6 | worldonlyu/Google_AI_Pro_2Year_ZeroCost_Auto | Python | 2496 | [Open](https://github.com/worldonlyu/Google_AI_Pro_2Year_ZeroCost_Auto) |
| 7 | govijr/terminal-mac | Swift | 1983 | [Open](https://github.com/govijr/terminal-mac) |
| 8 | caru-ini/stack-diagram | TypeScript | 1878 | [Open](https://github.com/caru-ini/stack-diagram) |
| 9 | mromidev/claude-animated-shorts | TypeScript | 1802 | [Open](https://github.com/mromidev/claude-animated-shorts) |
| 10 | wquguru/cicada | Swift | 1506 | [Open](https://github.com/wquguru/cicada) |

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
