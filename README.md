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

Updated: 2026-10-08T03:15:38.364Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/math | Lean | 9955 | [Open](https://github.com/openai/math) |
| 2 | QingYunA/answer-me-with-html | JavaScript | 2109 | [Open](https://github.com/QingYunA/answer-me-with-html) |
| 3 | alchaincyf/huashu-art-motion | JavaScript | 1786 | [Open](https://github.com/alchaincyf/huashu-art-motion) |
| 4 | facebookincubator/muse-gadget-sdk | C | 1672 | [Open](https://github.com/facebookincubator/muse-gadget-sdk) |
| 5 | kargulstudio/sales-crm | TypeScript | 1637 | [Open](https://github.com/kargulstudio/sales-crm) |
| 6 | mizorewww/x_gift_bot | Go | 961 | [Open](https://github.com/mizorewww/x_gift_bot) |
| 7 | sganggs/Stronghold-Protocol | JavaScript | 928 | [Open](https://github.com/sganggs/Stronghold-Protocol) |
| 8 | Jakeschincariol/replica-skill | Python | 895 | [Open](https://github.com/Jakeschincariol/replica-skill) |
| 9 | rauchg/gdp-ts | TypeScript | 741 | [Open](https://github.com/rauchg/gdp-ts) |
| 10 | elstongun/leviathan | Rust | 672 | [Open](https://github.com/elstongun/leviathan) |

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
