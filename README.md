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

Updated: 2026-08-14T00:54:23.500Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/deepseek-harness | TypeScript | 44634 | [Open](https://github.com/deepseek-ai/deepseek-harness) |
| 2 | guillaumemeyer/watermarks-remover | Python | 5417 | [Open](https://github.com/guillaumemeyer/watermarks-remover) |
| 3 | antirez/h3.c | C | 1777 | [Open](https://github.com/antirez/h3.c) |
| 4 | SMNETSTUDIO/WeChat-AI | TypeScript | 1683 | [Open](https://github.com/SMNETSTUDIO/WeChat-AI) |
| 5 | Leutenegger/book-to-skill | Python | 1027 | [Open](https://github.com/Leutenegger/book-to-skill) |
| 6 | xoreaxeaxeax/skitter-creek-bath-salts | C | 969 | [Open](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) |
| 7 | gvzdv/claudish-to-english | Shell | 923 | [Open](https://github.com/gvzdv/claudish-to-english) |
| 8 | MengTo/kage | HTML | 891 | [Open](https://github.com/MengTo/kage) |
| 9 | SaladDay/pi-from-scratch | TypeScript | 887 | [Open](https://github.com/SaladDay/pi-from-scratch) |
| 10 | sohaibdevv/youtube-music | TypeScript | 855 | [Open](https://github.com/sohaibdevv/youtube-music) |

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
