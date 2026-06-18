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

Updated: 2026-06-18T02:28:09.512Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | DietrichGebert/ponytail | JavaScript | 32070 | [Open](https://github.com/DietrichGebert/ponytail) |
| 2 | tamnd/kage | Go | 1866 | [Open](https://github.com/tamnd/kage) |
| 3 | lenucksi/aur-malware-check | Shell | 1463 | [Open](https://github.com/lenucksi/aur-malware-check) |
| 4 | EEliberto/IPA-Download | Swift | 1019 | [Open](https://github.com/EEliberto/IPA-Download) |
| 5 | orange2ai/renwei-writing | Unknown | 770 | [Open](https://github.com/orange2ai/renwei-writing) |
| 6 | vercel/eve | TypeScript | 726 | [Open](https://github.com/vercel/eve) |
| 7 | nolangz/pixel2motion | Python | 720 | [Open](https://github.com/nolangz/pixel2motion) |
| 8 | alchaincyf/loop-engineering-orange-book | Unknown | 629 | [Open](https://github.com/alchaincyf/loop-engineering-orange-book) |
| 9 | vorssaint/vorssaint-utils | Swift | 600 | [Open](https://github.com/vorssaint/vorssaint-utils) |
| 10 | SunJaycy/GoldenEye-Recomp | C++ | 530 | [Open](https://github.com/SunJaycy/GoldenEye-Recomp) |

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
