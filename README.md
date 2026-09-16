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

Updated: 2026-09-16T02:00:06.041Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Chuloo/mural | Kotlin | 1052 | [Open](https://github.com/Chuloo/mural) |
| 2 | sumimakito/Mac-Duo | Swift | 913 | [Open](https://github.com/sumimakito/Mac-Duo) |
| 3 | yifanzhang-pro/recurrent-looped-tranformer | HTML | 830 | [Open](https://github.com/yifanzhang-pro/recurrent-looped-tranformer) |
| 4 | kruzovic7/ai-data-extractor | Python | 822 | [Open](https://github.com/kruzovic7/ai-data-extractor) |
| 5 | ai-sucks-butt/ai-sucks-butt | Unknown | 812 | [Open](https://github.com/ai-sucks-butt/ai-sucks-butt) |
| 6 | angusdevgo/IDM_Pro_Tool | C# | 710 | [Open](https://github.com/angusdevgo/IDM_Pro_Tool) |
| 7 | eternityspring/reelbench-skills | HTML | 695 | [Open](https://github.com/eternityspring/reelbench-skills) |
| 8 | nftechie/stonkfly | Python | 691 | [Open](https://github.com/nftechie/stonkfly) |
| 9 | zjwzcx/Awesome-Astra-Embodied-AI | Unknown | 685 | [Open](https://github.com/zjwzcx/Awesome-Astra-Embodied-AI) |
| 10 | rizqinrr/viserys-agent | JavaScript | 652 | [Open](https://github.com/rizqinrr/viserys-agent) |

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
