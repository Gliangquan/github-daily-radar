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

Updated: 2026-05-01T01:49:26.951Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | nexu-io/open-design | TypeScript | 8380 | [Open](https://github.com/nexu-io/open-design) |
| 2 | cursor/cookbook | TypeScript | 2635 | [Open](https://github.com/cursor/cookbook) |
| 3 | freestylefly/awesome-gpt-image-2 | Unknown | 2564 | [Open](https://github.com/freestylefly/awesome-gpt-image-2) |
| 4 | theori-io/copy-fail-CVE-2026-31431 | Python | 1702 | [Open](https://github.com/theori-io/copy-fail-CVE-2026-31431) |
| 5 | willchen96/mike | TypeScript | 787 | [Open](https://github.com/willchen96/mike) |
| 6 | DanOps-1/Gpt-Agreement-Payment | Python | 780 | [Open](https://github.com/DanOps-1/Gpt-Agreement-Payment) |
| 7 | GENEXIS-AI/chromex | TypeScript | 687 | [Open](https://github.com/GENEXIS-AI/chromex) |
| 8 | b-nnett/codex-plusplus | TypeScript | 529 | [Open](https://github.com/b-nnett/codex-plusplus) |
| 9 | Fokkyp/SoftwareCopyright-Skill | Python | 491 | [Open](https://github.com/Fokkyp/SoftwareCopyright-Skill) |
| 10 | denuitt1/mhr-cfw | Python | 478 | [Open](https://github.com/denuitt1/mhr-cfw) |

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
