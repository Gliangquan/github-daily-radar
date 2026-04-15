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

Updated: 2026-04-15T01:16:25.830Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | yizhiyanhua-ai/fireworks-tech-graph | Python | 2446 | [Open](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) |
| 2 | QLHazyCoder/codex-oauth-automation-extension | JavaScript | 1370 | [Open](https://github.com/QLHazyCoder/codex-oauth-automation-extension) |
| 3 | AgentSeal/codeburn | TypeScript | 882 | [Open](https://github.com/AgentSeal/codeburn) |
| 4 | joeynyc/hermes-hudui | TypeScript | 882 | [Open](https://github.com/joeynyc/hermes-hudui) |
| 5 | vyfor/rattles | Rust | 852 | [Open](https://github.com/vyfor/rattles) |
| 6 | OpenMOSS/MOSS-TTS-Nano | Python | 741 | [Open](https://github.com/OpenMOSS/MOSS-TTS-Nano) |
| 7 | sterlingcrispin/nothing-ever-happens | Python | 710 | [Open](https://github.com/sterlingcrispin/nothing-ever-happens) |
| 8 | whwangovo/pyre-code | Python | 685 | [Open](https://github.com/whwangovo/pyre-code) |
| 9 | Mouseww/anything-analyzer | TypeScript | 640 | [Open](https://github.com/Mouseww/anything-analyzer) |
| 10 | hamen/material-3-skill | Unknown | 605 | [Open](https://github.com/hamen/material-3-skill) |

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
