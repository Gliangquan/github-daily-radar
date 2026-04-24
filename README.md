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

Updated: 2026-04-24T01:22:08.474Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | kyegomez/OpenMythos | Python | 9717 | [Open](https://github.com/kyegomez/OpenMythos) |
| 2 | alchaincyf/huashu-design | HTML | 5452 | [Open](https://github.com/alchaincyf/huashu-design) |
| 3 | tw93/Kami | HTML | 2894 | [Open](https://github.com/tw93/Kami) |
| 4 | EvoLinkAI/awesome-gpt-image-2-prompts | Python | 2723 | [Open](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| 5 | OpenCoworkAI/open-codesign | TypeScript | 1896 | [Open](https://github.com/OpenCoworkAI/open-codesign) |
| 6 | VoltAgent/awesome-claude-design | Unknown | 1412 | [Open](https://github.com/VoltAgent/awesome-claude-design) |
| 7 | the-hidden-fish/advisor-ledger | Python | 1025 | [Open](https://github.com/the-hidden-fish/advisor-ledger) |
| 8 | 432539/gpt2api | Go | 931 | [Open](https://github.com/432539/gpt2api) |
| 9 | golbin/hop | TypeScript | 920 | [Open](https://github.com/golbin/hop) |
| 10 | masterking32/MasterHttpRelayVPN | Python | 903 | [Open](https://github.com/masterking32/MasterHttpRelayVPN) |

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
