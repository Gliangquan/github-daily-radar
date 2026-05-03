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

Updated: 2026-05-03T01:30:47.841Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | nexu-io/open-design | TypeScript | 16126 | [Open](https://github.com/nexu-io/open-design) |
| 2 | cursor/cookbook | TypeScript | 3137 | [Open](https://github.com/cursor/cookbook) |
| 3 | theori-io/copy-fail-CVE-2026-31431 | Python | 2901 | [Open](https://github.com/theori-io/copy-fail-CVE-2026-31431) |
| 4 | denuitt1/mhr-cfw | Python | 1701 | [Open](https://github.com/denuitt1/mhr-cfw) |
| 5 | willchen96/mike | TypeScript | 1417 | [Open](https://github.com/willchen96/mike) |
| 6 | darrylmorley/whatcable | Swift | 1261 | [Open](https://github.com/darrylmorley/whatcable) |
| 7 | DanOps-1/Gpt-Agreement-Payment | Python | 917 | [Open](https://github.com/DanOps-1/Gpt-Agreement-Payment) |
| 8 | b-nnett/codex-plusplus | TypeScript | 836 | [Open](https://github.com/b-nnett/codex-plusplus) |
| 9 | GENEXIS-AI/chromex | TypeScript | 755 | [Open](https://github.com/GENEXIS-AI/chromex) |
| 10 | t8y2/dbx | Vue | 713 | [Open](https://github.com/t8y2/dbx) |

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
