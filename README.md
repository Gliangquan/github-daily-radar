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

Updated: 2026-06-17T02:30:25.557Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | DietrichGebert/ponytail | JavaScript | 25582 | [Open](https://github.com/DietrichGebert/ponytail) |
| 2 | omnigent-ai/omnigent | Python | 2846 | [Open](https://github.com/omnigent-ai/omnigent) |
| 3 | tamnd/kage | Go | 1766 | [Open](https://github.com/tamnd/kage) |
| 4 | lenucksi/aur-malware-check | Shell | 1350 | [Open](https://github.com/lenucksi/aur-malware-check) |
| 5 | EEliberto/IPA-Download | Swift | 843 | [Open](https://github.com/EEliberto/IPA-Download) |
| 6 | loc567/loc567 | C | 782 | [Open](https://github.com/loc567/loc567) |
| 7 | orange2ai/renwei-writing | Unknown | 723 | [Open](https://github.com/orange2ai/renwei-writing) |
| 8 | joeseesun/qiaomu-goal-meta-skill | Python | 632 | [Open](https://github.com/joeseesun/qiaomu-goal-meta-skill) |
| 9 | nolangz/pixel2motion | Python | 604 | [Open](https://github.com/nolangz/pixel2motion) |
| 10 | vorssaint/vorssaint-utils | Swift | 514 | [Open](https://github.com/vorssaint/vorssaint-utils) |

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
