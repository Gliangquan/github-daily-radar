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

Updated: 2026-10-11T02:31:37.868Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/math | Lean | 13706 | [Open](https://github.com/openai/math) |
| 2 | storytold/wordcraft | Rust | 3240 | [Open](https://github.com/storytold/wordcraft) |
| 3 | alchaincyf/huashu-art-motion | JavaScript | 3230 | [Open](https://github.com/alchaincyf/huashu-art-motion) |
| 4 | mhtsec/ARTEX | Go | 2927 | [Open](https://github.com/mhtsec/ARTEX) |
| 5 | zhongerxin/iPhone-use | Python | 2583 | [Open](https://github.com/zhongerxin/iPhone-use) |
| 6 | nullmoth/nvidia-macos-driver | Rust | 2310 | [Open](https://github.com/nullmoth/nvidia-macos-driver) |
| 7 | LosaLosSantos/aurelio-finance | Python | 2094 | [Open](https://github.com/LosaLosSantos/aurelio-finance) |
| 8 | storytold/cadcraft | Rust | 1899 | [Open](https://github.com/storytold/cadcraft) |
| 9 | storytold/gridcraft | Rust | 1877 | [Open](https://github.com/storytold/gridcraft) |
| 10 | noahdunnagan/fsearch | Rust | 1637 | [Open](https://github.com/noahdunnagan/fsearch) |

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
