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

Updated: 2026-05-26T01:56:15.265Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | perplexityai/bumblebee | Go | 2586 | [Open](https://github.com/perplexityai/bumblebee) |
| 2 | thananon/9arm-skills | Shell | 2173 | [Open](https://github.com/thananon/9arm-skills) |
| 3 | open-gsd/get-shit-done-redux | JavaScript | 859 | [Open](https://github.com/open-gsd/get-shit-done-redux) |
| 4 | Tong89/smartNode | Python | 707 | [Open](https://github.com/Tong89/smartNode) |
| 5 | kageroumado/phosphene | Swift | 673 | [Open](https://github.com/kageroumado/phosphene) |
| 6 | 0xSero/codex-shim | Python | 593 | [Open](https://github.com/0xSero/codex-shim) |
| 7 | run-liyi/wechatpay | JavaScript | 538 | [Open](https://github.com/run-liyi/wechatpay) |
| 8 | MoonshotAI/kimi-code | TypeScript | 511 | [Open](https://github.com/MoonshotAI/kimi-code) |
| 9 | zhaoyue4810/pianke | Python | 400 | [Open](https://github.com/zhaoyue4810/pianke) |
| 10 | Unclecheng-li/poc-lab | C | 364 | [Open](https://github.com/Unclecheng-li/poc-lab) |

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
