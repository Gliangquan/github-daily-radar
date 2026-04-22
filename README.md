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

Updated: 2026-04-22T01:17:20.612Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | kyegomez/OpenMythos | Python | 6950 | [Open](https://github.com/kyegomez/OpenMythos) |
| 2 | browser-use/browser-harness | Python | 4443 | [Open](https://github.com/browser-use/browser-harness) |
| 3 | alchaincyf/huashu-design | HTML | 3029 | [Open](https://github.com/alchaincyf/huashu-design) |
| 4 | tw93/Kami | HTML | 1577 | [Open](https://github.com/tw93/Kami) |
| 5 | cathrynlavery/diagram-design | HTML | 1354 | [Open](https://github.com/cathrynlavery/diagram-design) |
| 6 | EvoLinkAI/awesome-gpt-image-2-prompts | Python | 1152 | [Open](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |
| 7 | wbh604/UZI-Skill | Python | 1079 | [Open](https://github.com/wbh604/UZI-Skill) |
| 8 | VoltAgent/awesome-claude-design | Unknown | 1024 | [Open](https://github.com/VoltAgent/awesome-claude-design) |
| 9 | bwjoke/BTC-Trading-Since-2020 | Unknown | 809 | [Open](https://github.com/bwjoke/BTC-Trading-Since-2020) |
| 10 | SteveTheKiller/KillerPDF | C# | 639 | [Open](https://github.com/SteveTheKiller/KillerPDF) |

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
