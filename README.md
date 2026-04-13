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

Updated: 2026-04-13T01:20:37.846Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | farzaa/clicky | Swift | 3946 | [Open](https://github.com/farzaa/clicky) |
| 2 | alchaincyf/hermes-agent-orange-book | Unknown | 2112 | [Open](https://github.com/alchaincyf/hermes-agent-orange-book) |
| 3 | yizhiyanhua-ai/fireworks-tech-graph | Python | 1569 | [Open](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) |
| 4 | mattmireles/gemma-tuner-multimodal | Python | 1231 | [Open](https://github.com/mattmireles/gemma-tuner-multimodal) |
| 5 | nashsu/llm_wiki | TypeScript | 921 | [Open](https://github.com/nashsu/llm_wiki) |
| 6 | QLHazyCoder/codex-oauth-automation-extension | JavaScript | 892 | [Open](https://github.com/QLHazyCoder/codex-oauth-automation-extension) |
| 7 | phuryn/claude-usage | Python | 878 | [Open](https://github.com/phuryn/claude-usage) |
| 8 | joeynyc/hermes-hudui | Python | 699 | [Open](https://github.com/joeynyc/hermes-hudui) |
| 9 | AgriciDaniel/claude-obsidian | Shell | 660 | [Open](https://github.com/AgriciDaniel/claude-obsidian) |
| 10 | vyfor/rattles | Rust | 619 | [Open](https://github.com/vyfor/rattles) |

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
