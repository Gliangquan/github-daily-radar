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

Updated: 2026-08-13T00:55:02.994Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | guillaumemeyer/watermarks-remover | Python | 2351 | [Open](https://github.com/guillaumemeyer/watermarks-remover) |
| 2 | ShawnPana/phone-harness | Python | 1636 | [Open](https://github.com/ShawnPana/phone-harness) |
| 3 | oil-oil/oil-motion | Python | 1614 | [Open](https://github.com/oil-oil/oil-motion) |
| 4 | antirez/h3.c | C | 1593 | [Open](https://github.com/antirez/h3.c) |
| 5 | SMNETSTUDIO/WeChat-AI | TypeScript | 1519 | [Open](https://github.com/SMNETSTUDIO/WeChat-AI) |
| 6 | Flaminis/Dalaran | Rust | 887 | [Open](https://github.com/Flaminis/Dalaran) |
| 7 | MengTo/kage | HTML | 859 | [Open](https://github.com/MengTo/kage) |
| 8 | sohaibdevv/youtube-music | TypeScript | 850 | [Open](https://github.com/sohaibdevv/youtube-music) |
| 9 | SaladDay/pi-from-scratch | TypeScript | 759 | [Open](https://github.com/SaladDay/pi-from-scratch) |
| 10 | gvzdv/claudish-to-english | Shell | 624 | [Open](https://github.com/gvzdv/claudish-to-english) |

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
