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

Updated: 2026-05-09T01:45:04.443Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | V4bel/dirtyfrag | C | 2894 | [Open](https://github.com/V4bel/dirtyfrag) |
| 2 | antirez/ds4 | C | 2476 | [Open](https://github.com/antirez/ds4) |
| 3 | aattaran/deepclaude | JavaScript | 1642 | [Open](https://github.com/aattaran/deepclaude) |
| 4 | strukto-ai/mirage | TypeScript | 1449 | [Open](https://github.com/strukto-ai/mirage) |
| 5 | yaojingang/yao-open-prompts | Python | 1376 | [Open](https://github.com/yaojingang/yao-open-prompts) |
| 6 | XBuilderLAB/cheat-on-content | Shell | 1216 | [Open](https://github.com/XBuilderLAB/cheat-on-content) |
| 7 | MayersScott/rkn-block-checker | Python | 799 | [Open](https://github.com/MayersScott/rkn-block-checker) |
| 8 | lightseekorg/tokenspeed | Python | 785 | [Open](https://github.com/lightseekorg/tokenspeed) |
| 9 | raiyanyahya/how-to-train-your-gpt | Jupyter Notebook | 765 | [Open](https://github.com/raiyanyahya/how-to-train-your-gpt) |
| 10 | Kappaemme-git/codex-startup-pressure-test-skill | JavaScript | 727 | [Open](https://github.com/Kappaemme-git/codex-startup-pressure-test-skill) |

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
