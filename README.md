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

Updated: 2026-09-15T02:08:08.179Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | sumimakito/Mac-Duo | Swift | 873 | [Open](https://github.com/sumimakito/Mac-Duo) |
| 2 | Chuloo/mural | Kotlin | 816 | [Open](https://github.com/Chuloo/mural) |
| 3 | kruzovic7/ai-data-extractor | Python | 812 | [Open](https://github.com/kruzovic7/ai-data-extractor) |
| 4 | yifanzhang-pro/recurrent-looped-tranformer | HTML | 750 | [Open](https://github.com/yifanzhang-pro/recurrent-looped-tranformer) |
| 5 | angusdevgo/IDM_Pro_Tool | C# | 697 | [Open](https://github.com/angusdevgo/IDM_Pro_Tool) |
| 6 | eternityspring/reelbench-skills | HTML | 674 | [Open](https://github.com/eternityspring/reelbench-skills) |
| 7 | ArasTey/lunel | Python | 664 | [Open](https://github.com/ArasTey/lunel) |
| 8 | nftechie/stonkfly | Python | 652 | [Open](https://github.com/nftechie/stonkfly) |
| 9 | rizqinrr/viserys-agent | JavaScript | 648 | [Open](https://github.com/rizqinrr/viserys-agent) |
| 10 | Faizpi/bank-sampah | PHP | 646 | [Open](https://github.com/Faizpi/bank-sampah) |

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
