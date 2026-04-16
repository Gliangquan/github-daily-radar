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

Updated: 2026-04-16T01:21:35.205Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | yizhiyanhua-ai/fireworks-tech-graph | Python | 2979 | [Open](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) |
| 2 | AgentSeal/codeburn | TypeScript | 1785 | [Open](https://github.com/AgentSeal/codeburn) |
| 3 | OpenMOSS/MOSS-TTS-Nano | Python | 1026 | [Open](https://github.com/OpenMOSS/MOSS-TTS-Nano) |
| 4 | vyfor/rattles | Rust | 867 | [Open](https://github.com/vyfor/rattles) |
| 5 | alchaincyf/darwin-skill | HTML | 814 | [Open](https://github.com/alchaincyf/darwin-skill) |
| 6 | Mouseww/anything-analyzer | TypeScript | 797 | [Open](https://github.com/Mouseww/anything-analyzer) |
| 7 | sterlingcrispin/nothing-ever-happens | Python | 771 | [Open](https://github.com/sterlingcrispin/nothing-ever-happens) |
| 8 | yaojingang/GEOFlow | PHP | 676 | [Open](https://github.com/yaojingang/GEOFlow) |
| 9 | alchaincyf/obsidian-ai-orange-book | Unknown | 636 | [Open](https://github.com/alchaincyf/obsidian-ai-orange-book) |
| 10 | AMAP-ML/SkillClaw | Python | 605 | [Open](https://github.com/AMAP-ML/SkillClaw) |

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
