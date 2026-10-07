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

Updated: 2026-10-07T02:58:36.549Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/math | Lean | 3013 | [Open](https://github.com/openai/math) |
| 2 | QingYunA/answer-me-with-html | JavaScript | 1806 | [Open](https://github.com/QingYunA/answer-me-with-html) |
| 3 | kargulstudio/sales-crm | TypeScript | 1590 | [Open](https://github.com/kargulstudio/sales-crm) |
| 4 | facebookincubator/muse-gadget-sdk | C | 1564 | [Open](https://github.com/facebookincubator/muse-gadget-sdk) |
| 5 | deadinside28/bloodborne_pc | C++ | 1286 | [Open](https://github.com/deadinside28/bloodborne_pc) |
| 6 | storytold/effectcraft | Rust | 880 | [Open](https://github.com/storytold/effectcraft) |
| 7 | sganggs/Stronghold-Protocol | JavaScript | 835 | [Open](https://github.com/sganggs/Stronghold-Protocol) |
| 8 | lucasmarkes/hairline | TypeScript | 827 | [Open](https://github.com/lucasmarkes/hairline) |
| 9 | StayLameBro/backburner | Python | 778 | [Open](https://github.com/StayLameBro/backburner) |
| 10 | alchaincyf/huashu-art-motion | JavaScript | 744 | [Open](https://github.com/alchaincyf/huashu-art-motion) |

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
