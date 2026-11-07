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

Updated: 2026-11-07T03:28:49.923Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/agent-autoloop | TypeScript | 3726 | [Open](https://github.com/KKKKhazix/agent-autoloop) |
| 2 | worldonlyu/Google_AI_Pro_2Year_ZeroCost_Auto | Python | 2909 | [Open](https://github.com/worldonlyu/Google_AI_Pro_2Year_ZeroCost_Auto) |
| 3 | govijr/terminal-mac | Swift | 2164 | [Open](https://github.com/govijr/terminal-mac) |
| 4 | mromidev/claude-animated-shorts | TypeScript | 2044 | [Open](https://github.com/mromidev/claude-animated-shorts) |
| 5 | caru-ini/stack-diagram | TypeScript | 1977 | [Open](https://github.com/caru-ini/stack-diagram) |
| 6 | Minireel/HGhub | TypeScript | 1747 | [Open](https://github.com/Minireel/HGhub) |
| 7 | wquguru/cicada | Swift | 1563 | [Open](https://github.com/wquguru/cicada) |
| 8 | s1dashu/quiet-md | Rust | 1187 | [Open](https://github.com/s1dashu/quiet-md) |
| 9 | livliv-dev/player | TypeScript | 978 | [Open](https://github.com/livliv-dev/player) |
| 10 | JenkinWoo/sheeridVerify | JavaScript | 929 | [Open](https://github.com/JenkinWoo/sheeridVerify) |

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
