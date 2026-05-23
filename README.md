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

Updated: 2026-05-23T01:51:28.854Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FoundZiGu/GuJumpgate | JavaScript | 1769 | [Open](https://github.com/FoundZiGu/GuJumpgate) |
| 2 | thananon/9arm-skills | Shell | 1528 | [Open](https://github.com/thananon/9arm-skills) |
| 3 | Doorman11991/smallcode | JavaScript | 1228 | [Open](https://github.com/Doorman11991/smallcode) |
| 4 | datawhalechina/Agent-Learning-Hub | HTML | 1093 | [Open](https://github.com/datawhalechina/Agent-Learning-Hub) |
| 5 | sapientinc/HRM-Text | Python | 650 | [Open](https://github.com/sapientinc/HRM-Text) |
| 6 | kageroumado/phosphene | Swift | 597 | [Open](https://github.com/kageroumado/phosphene) |
| 7 | xw7872081123/wallpaper-engine-steam | TypeScript | 454 | [Open](https://github.com/xw7872081123/wallpaper-engine-steam) |
| 8 | lynote-ai/humanize-text | Python | 454 | [Open](https://github.com/lynote-ai/humanize-text) |
| 9 | LiuMengxuan04/shushu-internship-tool | Python | 437 | [Open](https://github.com/LiuMengxuan04/shushu-internship-tool) |
| 10 | evilsocket/audit | Python | 435 | [Open](https://github.com/evilsocket/audit) |

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
