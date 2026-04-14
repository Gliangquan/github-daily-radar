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

Updated: 2026-04-14T01:19:28.603Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | alchaincyf/hermes-agent-orange-book | Unknown | 2287 | [Open](https://github.com/alchaincyf/hermes-agent-orange-book) |
| 2 | yizhiyanhua-ai/fireworks-tech-graph | Python | 2031 | [Open](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) |
| 3 | QLHazyCoder/codex-oauth-automation-extension | JavaScript | 1191 | [Open](https://github.com/QLHazyCoder/codex-oauth-automation-extension) |
| 4 | nashsu/llm_wiki | TypeScript | 1135 | [Open](https://github.com/nashsu/llm_wiki) |
| 5 | momenbasel/PureMac | Swift | 903 | [Open](https://github.com/momenbasel/PureMac) |
| 6 | joeynyc/hermes-hudui | Python | 833 | [Open](https://github.com/joeynyc/hermes-hudui) |
| 7 | vyfor/rattles | Rust | 803 | [Open](https://github.com/vyfor/rattles) |
| 8 | hexiecs/talk-normal | Shell | 685 | [Open](https://github.com/hexiecs/talk-normal) |
| 9 | obdev/littlesnitch-linux | Rust | 650 | [Open](https://github.com/obdev/littlesnitch-linux) |
| 10 | whwangovo/pyre-code | Python | 636 | [Open](https://github.com/whwangovo/pyre-code) |

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
