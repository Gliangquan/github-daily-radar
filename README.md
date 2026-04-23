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

Updated: 2026-04-23T01:22:32.687Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | kyegomez/OpenMythos | Python | 8881 | [Open](https://github.com/kyegomez/OpenMythos) |
| 2 | browser-use/browser-harness | Python | 5052 | [Open](https://github.com/browser-use/browser-harness) |
| 3 | alchaincyf/huashu-design | HTML | 4464 | [Open](https://github.com/alchaincyf/huashu-design) |
| 4 | tw93/Kami | HTML | 2554 | [Open](https://github.com/tw93/Kami) |
| 5 | EvoLinkAI/awesome-gpt-image-2-prompts | Python | 1749 | [Open](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| 6 | OpenCoworkAI/open-codesign | TypeScript | 1256 | [Open](https://github.com/OpenCoworkAI/open-codesign) |
| 7 | VoltAgent/awesome-claude-design | Unknown | 1210 | [Open](https://github.com/VoltAgent/awesome-claude-design) |
| 8 | the-hidden-fish/advisor-ledger | Python | 875 | [Open](https://github.com/the-hidden-fish/advisor-ledger) |
| 9 | bwjoke/BTC-Trading-Since-2020 | Unknown | 819 | [Open](https://github.com/bwjoke/BTC-Trading-Since-2020) |
| 10 | golbin/hop | TypeScript | 813 | [Open](https://github.com/golbin/hop) |

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
