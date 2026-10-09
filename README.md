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

Updated: 2026-10-09T03:21:24.082Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/math | Lean | 12259 | [Open](https://github.com/openai/math) |
| 2 | alchaincyf/huashu-art-motion | JavaScript | 2525 | [Open](https://github.com/alchaincyf/huashu-art-motion) |
| 3 | kargulstudio/sales-crm | TypeScript | 1659 | [Open](https://github.com/kargulstudio/sales-crm) |
| 4 | nullmoth/nvidia-macos-driver | Rust | 1208 | [Open](https://github.com/nullmoth/nvidia-macos-driver) |
| 5 | Jakeschincariol/replica-skill | Python | 1115 | [Open](https://github.com/Jakeschincariol/replica-skill) |
| 6 | alejandrobujan/tendedero | Swift | 1045 | [Open](https://github.com/alejandrobujan/tendedero) |
| 7 | LoreanXavier/pt-pc | C++ | 1022 | [Open](https://github.com/LoreanXavier/pt-pc) |
| 8 | mhtsec/ARTEX | Go | 948 | [Open](https://github.com/mhtsec/ARTEX) |
| 9 | storytold/wordcraft | Rust | 885 | [Open](https://github.com/storytold/wordcraft) |
| 10 | storytold/cadcraft | Rust | 829 | [Open](https://github.com/storytold/cadcraft) |

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
