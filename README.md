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

Updated: 2026-05-07T01:46:07.364Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | darrylmorley/whatcable | Swift | 2053 | [Open](https://github.com/darrylmorley/whatcable) |
| 2 | aattaran/deepclaude | JavaScript | 1491 | [Open](https://github.com/aattaran/deepclaude) |
| 3 | mattpocock/dictionary-of-ai-coding | TypeScript | 1154 | [Open](https://github.com/mattpocock/dictionary-of-ai-coding) |
| 4 | vibeforge1111/keep-codex-fast | Python | 816 | [Open](https://github.com/vibeforge1111/keep-codex-fast) |
| 5 | XBuilderLAB/cheat-on-content | Python | 778 | [Open](https://github.com/XBuilderLAB/cheat-on-content) |
| 6 | jherrodthomas/automotive-skills-suite | Unknown | 731 | [Open](https://github.com/jherrodthomas/automotive-skills-suite) |
| 7 | crafter-station/petdex | TypeScript | 727 | [Open](https://github.com/crafter-station/petdex) |
| 8 | tddworks/baguette | Swift | 692 | [Open](https://github.com/tddworks/baguette) |
| 9 | raiyanyahya/how-to-train-your-gpt | Jupyter Notebook | 581 | [Open](https://github.com/raiyanyahya/how-to-train-your-gpt) |
| 10 | Kappaemme-git/codex-startup-pressure-test-skill | JavaScript | 561 | [Open](https://github.com/Kappaemme-git/codex-startup-pressure-test-skill) |

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
