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

Updated: 2026-10-26T02:01:07.813Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pengchujin/aerial-tv | Kotlin | 5065 | [Open](https://github.com/pengchujin/aerial-tv) |
| 2 | JustAResearcher/gpu-unlock-ada | C | 2697 | [Open](https://github.com/JustAResearcher/gpu-unlock-ada) |
| 3 | xevrion/hatchzip | Rust | 1943 | [Open](https://github.com/xevrion/hatchzip) |
| 4 | wesbos/3d-model-anything | Swift | 1934 | [Open](https://github.com/wesbos/3d-model-anything) |
| 5 | ikow/php2shell-poc | Python | 1792 | [Open](https://github.com/ikow/php2shell-poc) |
| 6 | Jakeschincariol/day-trader-skill | Python | 1646 | [Open](https://github.com/Jakeschincariol/day-trader-skill) |
| 7 | oosexgang/hackios-xnu-kernel | C | 1465 | [Open](https://github.com/oosexgang/hackios-xnu-kernel) |
| 8 | 9bie/php2shell-bypass-aslr-exp | Python | 1436 | [Open](https://github.com/9bie/php2shell-bypass-aslr-exp) |
| 9 | openai/php2shell-checker | JavaScript | 1397 | [Open](https://github.com/openai/php2shell-checker) |
| 10 | colinhacks/reylo | Rust | 1265 | [Open](https://github.com/colinhacks/reylo) |

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
