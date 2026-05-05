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

Updated: 2026-05-05T01:29:21.521Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | theori-io/copy-fail-CVE-2026-31431 | Python | 3171 | [Open](https://github.com/theori-io/copy-fail-CVE-2026-31431) |
| 2 | willchen96/mike | TypeScript | 2029 | [Open](https://github.com/willchen96/mike) |
| 3 | darrylmorley/whatcable | Swift | 1723 | [Open](https://github.com/darrylmorley/whatcable) |
| 4 | aattaran/deepclaude | JavaScript | 1034 | [Open](https://github.com/aattaran/deepclaude) |
| 5 | mattpocock/dictionary-of-ai-coding | TypeScript | 972 | [Open](https://github.com/mattpocock/dictionary-of-ai-coding) |
| 6 | wrongly-cuddly-obsession/NTSB_FOIA_MU5735 | Unknown | 886 | [Open](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735) |
| 7 | t8y2/dbx | Vue | 846 | [Open](https://github.com/t8y2/dbx) |
| 8 | Fokkyp/SoftwareCopyright-Skill | Python | 695 | [Open](https://github.com/Fokkyp/SoftwareCopyright-Skill) |
| 9 | vibeforge1111/keep-codex-fast | Python | 653 | [Open](https://github.com/vibeforge1111/keep-codex-fast) |
| 10 | EvanBacon/serve-sim | TypeScript | 614 | [Open](https://github.com/EvanBacon/serve-sim) |

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
