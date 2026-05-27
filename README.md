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

Updated: 2026-05-27T02:04:56.409Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Tong89/smartNode | Python | 1139 | [Open](https://github.com/Tong89/smartNode) |
| 2 | open-gsd/get-shit-done-redux | JavaScript | 1106 | [Open](https://github.com/open-gsd/get-shit-done-redux) |
| 3 | run-liyi/wechatpay | JavaScript | 807 | [Open](https://github.com/run-liyi/wechatpay) |
| 4 | MoonshotAI/kimi-code | TypeScript | 729 | [Open](https://github.com/MoonshotAI/kimi-code) |
| 5 | 0xSero/codex-shim | Python | 636 | [Open](https://github.com/0xSero/codex-shim) |
| 6 | zhaoyue4810/pianke | Python | 438 | [Open](https://github.com/zhaoyue4810/pianke) |
| 7 | ShinyaTomitsuka/arbitrage-trading-bot | TypeScript | 340 | [Open](https://github.com/ShinyaTomitsuka/arbitrage-trading-bot) |
| 8 | md0070/polymarket-trading-bot | TypeScript | 316 | [Open](https://github.com/md0070/polymarket-trading-bot) |
| 9 | XingYu-Zhong/DeepSeek-GUI | TypeScript | 315 | [Open](https://github.com/XingYu-Zhong/DeepSeek-GUI) |
| 10 | VILA-Lab/FigMirror | Python | 311 | [Open](https://github.com/VILA-Lab/FigMirror) |

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
