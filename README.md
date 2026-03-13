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

Updated: 2026-03-13T01:01:59.671Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | HKUDS/CLI-Anything | Python | 8838 | [Open](https://github.com/HKUDS/CLI-Anything) |
| 2 | tanweai/pua | HTML | 5180 | [Open](https://github.com/tanweai/pua) |
| 3 | garrytan/gstack | TypeScript | 2646 | [Open](https://github.com/garrytan/gstack) |
| 4 | ParthJadhav/app-store-screenshots | Unknown | 2187 | [Open](https://github.com/ParthJadhav/app-store-screenshots) |
| 5 | FreedomIntelligence/OpenClaw-Medical-Skills | Python | 1077 | [Open](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) |
| 6 | jackwener/xiaohongshu-cli | Python | 783 | [Open](https://github.com/jackwener/xiaohongshu-cli) |
| 7 | gsd-build/gsd-2 | TypeScript | 777 | [Open](https://github.com/gsd-build/gsd-2) |
| 8 | larksuite/openclaw-lark | TypeScript | 741 | [Open](https://github.com/larksuite/openclaw-lark) |
| 9 | photon-hq/qclaw-wechat-client | TypeScript | 702 | [Open](https://github.com/photon-hq/qclaw-wechat-client) |
| 10 | knowsuchagency/mcp2cli | Python | 690 | [Open](https://github.com/knowsuchagency/mcp2cli) |

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
