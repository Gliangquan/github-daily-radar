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

Updated: 2026-08-12T00:53:41.466Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ShawnPana/phone-harness | Python | 1499 | [Open](https://github.com/ShawnPana/phone-harness) |
| 2 | oil-oil/oil-motion | Python | 1483 | [Open](https://github.com/oil-oil/oil-motion) |
| 3 | SMNETSTUDIO/WeChat-AI | TypeScript | 1421 | [Open](https://github.com/SMNETSTUDIO/WeChat-AI) |
| 4 | antirez/h3.c | C | 1237 | [Open](https://github.com/antirez/h3.c) |
| 5 | eternityspring/shuohao-skills | JavaScript | 892 | [Open](https://github.com/eternityspring/shuohao-skills) |
| 6 | sohaibdevv/youtube-music | TypeScript | 835 | [Open](https://github.com/sohaibdevv/youtube-music) |
| 7 | MengTo/kage | HTML | 820 | [Open](https://github.com/MengTo/kage) |
| 8 | xoreaxeaxeax/asm-hall-of-shame | C | 769 | [Open](https://github.com/xoreaxeaxeax/asm-hall-of-shame) |
| 9 | Flaminis/Dalaran | Rust | 666 | [Open](https://github.com/Flaminis/Dalaran) |
| 10 | sv-number/mcp-server | JavaScript | 615 | [Open](https://github.com/sv-number/mcp-server) |

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
