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

Updated: 2026-10-25T01:59:52.265Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pengchujin/aerial-tv | Kotlin | 4395 | [Open](https://github.com/pengchujin/aerial-tv) |
| 2 | simbasjungles/free-my-tv | Java | 4310 | [Open](https://github.com/simbasjungles/free-my-tv) |
| 3 | JoasASantos/REA-Prompts | Unknown | 2109 | [Open](https://github.com/JoasASantos/REA-Prompts) |
| 4 | EthanArbuckle/fairplay-decrypt | C | 1972 | [Open](https://github.com/EthanArbuckle/fairplay-decrypt) |
| 5 | ikow/php2shell-poc | Python | 1754 | [Open](https://github.com/ikow/php2shell-poc) |
| 6 | xevrion/hatchzip | Rust | 1711 | [Open](https://github.com/xevrion/hatchzip) |
| 7 | wesbos/3d-model-anything | Swift | 1675 | [Open](https://github.com/wesbos/3d-model-anything) |
| 8 | 9bie/php2shell-bypass-aslr-exp | Python | 1400 | [Open](https://github.com/9bie/php2shell-bypass-aslr-exp) |
| 9 | openai/php2shell-checker | JavaScript | 1382 | [Open](https://github.com/openai/php2shell-checker) |
| 10 | oosexgang/hackios-xnu-kernel | C | 1295 | [Open](https://github.com/oosexgang/hackios-xnu-kernel) |

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
