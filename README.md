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

Updated: 2026-11-05T03:56:24.214Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/dsh-superagent-prototype | TypeScript | 18760 | [Open](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 2 | storytold/craft-anything | Rust | 12452 | [Open](https://github.com/storytold/craft-anything) |
| 3 | patch-gg/pixelfx | JavaScript | 4812 | [Open](https://github.com/patch-gg/pixelfx) |
| 4 | KKKKhazix/agent-autoloop | TypeScript | 2711 | [Open](https://github.com/KKKKhazix/agent-autoloop) |
| 5 | Verlintas/NOIR | Kotlin | 2118 | [Open](https://github.com/Verlintas/NOIR) |
| 6 | elvarofficial/teardown | JavaScript | 1945 | [Open](https://github.com/elvarofficial/teardown) |
| 7 | caru-ini/stack-diagram | TypeScript | 1769 | [Open](https://github.com/caru-ini/stack-diagram) |
| 8 | govijr/terminal-mac | Swift | 1618 | [Open](https://github.com/govijr/terminal-mac) |
| 9 | mromidev/claude-animated-shorts | TypeScript | 1546 | [Open](https://github.com/mromidev/claude-animated-shorts) |
| 10 | Arjun-Ingole/hop | PowerShell | 1513 | [Open](https://github.com/Arjun-Ingole/hop) |

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
