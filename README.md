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

Updated: 2026-09-17T02:03:46.217Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ai-sucks-butt/ai-sucks-butt | Python | 1855 | [Open](https://github.com/ai-sucks-butt/ai-sucks-butt) |
| 2 | Chuloo/mural | Kotlin | 1261 | [Open](https://github.com/Chuloo/mural) |
| 3 | yifanzhang-pro/recurrent-looped-tranformer | HTML | 860 | [Open](https://github.com/yifanzhang-pro/recurrent-looped-tranformer) |
| 4 | kruzovic7/ai-data-extractor | Python | 826 | [Open](https://github.com/kruzovic7/ai-data-extractor) |
| 5 | zjwzcx/Awesome-Astra-Embodied-AI | Unknown | 771 | [Open](https://github.com/zjwzcx/Awesome-Astra-Embodied-AI) |
| 6 | eternityspring/reelbench-skills | HTML | 709 | [Open](https://github.com/eternityspring/reelbench-skills) |
| 7 | agentverse-os/AgentVerse-OS | Rust | 681 | [Open](https://github.com/agentverse-os/AgentVerse-OS) |
| 8 | rizqinrr/viserys-agent | JavaScript | 659 | [Open](https://github.com/rizqinrr/viserys-agent) |
| 9 | Faizpi/bank-sampah | PHP | 646 | [Open](https://github.com/Faizpi/bank-sampah) |
| 10 | nilbuild/page-mascot | Python | 632 | [Open](https://github.com/nilbuild/page-mascot) |

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
