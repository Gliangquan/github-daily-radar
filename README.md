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

Updated: 2026-05-04T01:29:24.632Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | nexu-io/open-design | TypeScript | 19539 | [Open](https://github.com/nexu-io/open-design) |
| 2 | theori-io/copy-fail-CVE-2026-31431 | Python | 3020 | [Open](https://github.com/theori-io/copy-fail-CVE-2026-31431) |
| 3 | willchen96/mike | TypeScript | 1687 | [Open](https://github.com/willchen96/mike) |
| 4 | darrylmorley/whatcable | Swift | 1448 | [Open](https://github.com/darrylmorley/whatcable) |
| 5 | b-nnett/codex-plusplus | TypeScript | 855 | [Open](https://github.com/b-nnett/codex-plusplus) |
| 6 | mattpocock/dictionary-of-ai-coding | TypeScript | 849 | [Open](https://github.com/mattpocock/dictionary-of-ai-coding) |
| 7 | wrongly-cuddly-obsession/NTSB_FOIA_MU5735 | Unknown | 810 | [Open](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735) |
| 8 | t8y2/dbx | Vue | 777 | [Open](https://github.com/t8y2/dbx) |
| 9 | GENEXIS-AI/chromex | TypeScript | 772 | [Open](https://github.com/GENEXIS-AI/chromex) |
| 10 | Fokkyp/SoftwareCopyright-Skill | Python | 672 | [Open](https://github.com/Fokkyp/SoftwareCopyright-Skill) |

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
