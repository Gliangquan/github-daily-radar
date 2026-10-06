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

Updated: 2026-10-06T03:33:19.048Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | rehan-remade/universal-modder | Python | 3884 | [Open](https://github.com/rehan-remade/universal-modder) |
| 2 | storytold/photocraft | Rust | 2184 | [Open](https://github.com/storytold/photocraft) |
| 3 | nanaism/yomiyasu | Python | 1528 | [Open](https://github.com/nanaism/yomiyasu) |
| 4 | QingYunA/answer-me-with-html | JavaScript | 1508 | [Open](https://github.com/QingYunA/answer-me-with-html) |
| 5 | kargulstudio/sales-crm | TypeScript | 1475 | [Open](https://github.com/kargulstudio/sales-crm) |
| 6 | facebookincubator/muse-gadget-sdk | C | 1448 | [Open](https://github.com/facebookincubator/muse-gadget-sdk) |
| 7 | CAPCOM-TD-OSS/REDox | C# | 1085 | [Open](https://github.com/CAPCOM-TD-OSS/REDox) |
| 8 | chasmlol/SkyCraft | C++ | 982 | [Open](https://github.com/chasmlol/SkyCraft) |
| 9 | Edwardxlai/easyread | Python | 807 | [Open](https://github.com/Edwardxlai/easyread) |
| 10 | deadinside28/bloodborne_pc | C++ | 753 | [Open](https://github.com/deadinside28/bloodborne_pc) |

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
