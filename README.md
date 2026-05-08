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

Updated: 2026-05-08T01:49:23.844Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | aattaran/deepclaude | JavaScript | 1596 | [Open](https://github.com/aattaran/deepclaude) |
| 2 | yaojingang/yao-open-prompts | Python | 1133 | [Open](https://github.com/yaojingang/yao-open-prompts) |
| 3 | XBuilderLAB/cheat-on-content | Python | 1031 | [Open](https://github.com/XBuilderLAB/cheat-on-content) |
| 4 | strukto-ai/mirage | TypeScript | 1007 | [Open](https://github.com/strukto-ai/mirage) |
| 5 | crafter-station/petdex | TypeScript | 962 | [Open](https://github.com/crafter-station/petdex) |
| 6 | vibeforge1111/keep-codex-fast | Python | 874 | [Open](https://github.com/vibeforge1111/keep-codex-fast) |
| 7 | Kappaemme-git/codex-startup-pressure-test-skill | JavaScript | 707 | [Open](https://github.com/Kappaemme-git/codex-startup-pressure-test-skill) |
| 8 | raiyanyahya/how-to-train-your-gpt | Jupyter Notebook | 690 | [Open](https://github.com/raiyanyahya/how-to-train-your-gpt) |
| 9 | V4bel/dirtyfrag | C | 648 | [Open](https://github.com/V4bel/dirtyfrag) |
| 10 | lightseekorg/tokenspeed | Python | 645 | [Open](https://github.com/lightseekorg/tokenspeed) |

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
