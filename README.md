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

Updated: 2026-05-06T01:27:58.251Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | darrylmorley/whatcable | Swift | 1946 | [Open](https://github.com/darrylmorley/whatcable) |
| 2 | aattaran/deepclaude | JavaScript | 1329 | [Open](https://github.com/aattaran/deepclaude) |
| 3 | mattpocock/dictionary-of-ai-coding | TypeScript | 1068 | [Open](https://github.com/mattpocock/dictionary-of-ai-coding) |
| 4 | vercel-labs/deepsec | TypeScript | 1067 | [Open](https://github.com/vercel-labs/deepsec) |
| 5 | wrongly-cuddly-obsession/NTSB_FOIA_MU5735 | Unknown | 940 | [Open](https://github.com/wrongly-cuddly-obsession/NTSB_FOIA_MU5735) |
| 6 | vibeforge1111/keep-codex-fast | Python | 751 | [Open](https://github.com/vibeforge1111/keep-codex-fast) |
| 7 | tddworks/baguette | Swift | 636 | [Open](https://github.com/tddworks/baguette) |
| 8 | Tommy-yw/RunbookHermes | Python | 516 | [Open](https://github.com/Tommy-yw/RunbookHermes) |
| 9 | WeritoP/BetterNitroDiscord | Unknown | 462 | [Open](https://github.com/WeritoP/BetterNitroDiscord) |
| 10 | WeritoP/FL-STUDIO-PATCHER | Unknown | 461 | [Open](https://github.com/WeritoP/FL-STUDIO-PATCHER) |

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
