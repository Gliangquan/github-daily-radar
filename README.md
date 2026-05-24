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

Updated: 2026-05-24T01:58:10.183Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FoundZiGu/GuJumpgate | JavaScript | 2060 | [Open](https://github.com/FoundZiGu/GuJumpgate) |
| 2 | thananon/9arm-skills | Shell | 1864 | [Open](https://github.com/thananon/9arm-skills) |
| 3 | Doorman11991/smallcode | JavaScript | 1321 | [Open](https://github.com/Doorman11991/smallcode) |
| 4 | perplexityai/bumblebee | Go | 1294 | [Open](https://github.com/perplexityai/bumblebee) |
| 5 | sapientinc/HRM-Text | Python | 677 | [Open](https://github.com/sapientinc/HRM-Text) |
| 6 | kageroumado/phosphene | Swift | 627 | [Open](https://github.com/kageroumado/phosphene) |
| 7 | lynote-ai/humanize-text | Python | 558 | [Open](https://github.com/lynote-ai/humanize-text) |
| 8 | xw7872081123/wallpaper-engine-steam | TypeScript | 455 | [Open](https://github.com/xw7872081123/wallpaper-engine-steam) |
| 9 | basketikun/infinite-canvas | TypeScript | 454 | [Open](https://github.com/basketikun/infinite-canvas) |
| 10 | evilsocket/audit | Python | 446 | [Open](https://github.com/evilsocket/audit) |

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
