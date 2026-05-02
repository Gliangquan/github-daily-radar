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

Updated: 2026-05-02T01:27:07.354Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | nexu-io/open-design | TypeScript | 11893 | [Open](https://github.com/nexu-io/open-design) |
| 2 | cursor/cookbook | TypeScript | 2964 | [Open](https://github.com/cursor/cookbook) |
| 3 | theori-io/copy-fail-CVE-2026-31431 | Python | 2463 | [Open](https://github.com/theori-io/copy-fail-CVE-2026-31431) |
| 4 | denuitt1/mhr-cfw | Python | 1314 | [Open](https://github.com/denuitt1/mhr-cfw) |
| 5 | willchen96/mike | TypeScript | 1080 | [Open](https://github.com/willchen96/mike) |
| 6 | DanOps-1/Gpt-Agreement-Payment | Python | 877 | [Open](https://github.com/DanOps-1/Gpt-Agreement-Payment) |
| 7 | b-nnett/codex-plusplus | TypeScript | 750 | [Open](https://github.com/b-nnett/codex-plusplus) |
| 8 | GENEXIS-AI/chromex | TypeScript | 738 | [Open](https://github.com/GENEXIS-AI/chromex) |
| 9 | darrylmorley/whatcable | Swift | 687 | [Open](https://github.com/darrylmorley/whatcable) |
| 10 | ka-pi-ba-la/AIbijia | Unknown | 595 | [Open](https://github.com/ka-pi-ba-la/AIbijia) |

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
