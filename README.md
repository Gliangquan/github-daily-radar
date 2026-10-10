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

Updated: 2026-10-10T03:01:18.028Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/math | Lean | 13151 | [Open](https://github.com/openai/math) |
| 2 | alchaincyf/huashu-art-motion | JavaScript | 2924 | [Open](https://github.com/alchaincyf/huashu-art-motion) |
| 3 | mhtsec/ARTEX | Go | 2306 | [Open](https://github.com/mhtsec/ARTEX) |
| 4 | storytold/wordcraft | Rust | 1964 | [Open](https://github.com/storytold/wordcraft) |
| 5 | nullmoth/nvidia-macos-driver | Rust | 1928 | [Open](https://github.com/nullmoth/nvidia-macos-driver) |
| 6 | zhongerxin/iPhone-use | Python | 1915 | [Open](https://github.com/zhongerxin/iPhone-use) |
| 7 | kargulstudio/sales-crm | TypeScript | 1677 | [Open](https://github.com/kargulstudio/sales-crm) |
| 8 | LosaLosSantos/aurelio-finance | Python | 1556 | [Open](https://github.com/LosaLosSantos/aurelio-finance) |
| 9 | storytold/cadcraft | Rust | 1405 | [Open](https://github.com/storytold/cadcraft) |
| 10 | storytold/gridcraft | Rust | 1238 | [Open](https://github.com/storytold/gridcraft) |

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
