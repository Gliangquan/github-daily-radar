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

Updated: 2026-05-25T02:05:16.896Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FoundZiGu/GuJumpgate | JavaScript | 2343 | [Open](https://github.com/FoundZiGu/GuJumpgate) |
| 2 | perplexityai/bumblebee | Go | 2174 | [Open](https://github.com/perplexityai/bumblebee) |
| 3 | thananon/9arm-skills | Shell | 1996 | [Open](https://github.com/thananon/9arm-skills) |
| 4 | kageroumado/phosphene | Swift | 654 | [Open](https://github.com/kageroumado/phosphene) |
| 5 | open-gsd/get-shit-done-redux | JavaScript | 573 | [Open](https://github.com/open-gsd/get-shit-done-redux) |
| 6 | Tong89/smartNode | Python | 512 | [Open](https://github.com/Tong89/smartNode) |
| 7 | 0xSero/codex-shim | Python | 475 | [Open](https://github.com/0xSero/codex-shim) |
| 8 | Jawaz-Keyzor/FL-Studio-2026-Producer-Edition-Unlock | Unknown | 429 | [Open](https://github.com/Jawaz-Keyzor/FL-Studio-2026-Producer-Edition-Unlock) |
| 9 | jskblue/Tomodachi-Island-Life-Remastered | Unknown | 424 | [Open](https://github.com/jskblue/Tomodachi-Island-Life-Remastered) |
| 10 | NicoleK-M/Spoof-Matrix-Hardware | Unknown | 423 | [Open](https://github.com/NicoleK-M/Spoof-Matrix-Hardware) |

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
