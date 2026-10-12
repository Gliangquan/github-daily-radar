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

Updated: 2026-10-12T02:56:11.368Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/math | Lean | 14120 | [Open](https://github.com/openai/math) |
| 2 | storytold/wordcraft | Rust | 6220 | [Open](https://github.com/storytold/wordcraft) |
| 3 | wheresryan22/anatomy | JavaScript | 3581 | [Open](https://github.com/wheresryan22/anatomy) |
| 4 | alchaincyf/huashu-art-motion | JavaScript | 3405 | [Open](https://github.com/alchaincyf/huashu-art-motion) |
| 5 | mhtsec/ARTEX | Go | 3221 | [Open](https://github.com/mhtsec/ARTEX) |
| 6 | zhongerxin/iPhone-use | Python | 3115 | [Open](https://github.com/zhongerxin/iPhone-use) |
| 7 | storytold/gridcraft | Rust | 3008 | [Open](https://github.com/storytold/gridcraft) |
| 8 | storytold/cadcraft | Rust | 2747 | [Open](https://github.com/storytold/cadcraft) |
| 9 | nullmoth/nvidia-macos-driver | Rust | 2563 | [Open](https://github.com/nullmoth/nvidia-macos-driver) |
| 10 | LosaLosSantos/aurelio-finance | Python | 2308 | [Open](https://github.com/LosaLosSantos/aurelio-finance) |

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
