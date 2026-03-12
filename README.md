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

Updated: 2026-03-12T00:56:45.050Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | karpathy/autoresearch | Python | 26229 | [Open](https://github.com/karpathy/autoresearch) |
| 2 | HKUDS/CLI-Anything | Python | 5332 | [Open](https://github.com/HKUDS/CLI-Anything) |
| 3 | tanweai/pua | TypeScript | 2865 | [Open](https://github.com/tanweai/pua) |
| 4 | ParthJadhav/app-store-screenshots | Unknown | 1845 | [Open](https://github.com/ParthJadhav/app-store-screenshots) |
| 5 | cyxzdev/Uncodixfy | Unknown | 1415 | [Open](https://github.com/cyxzdev/Uncodixfy) |
| 6 | FreedomIntelligence/OpenClaw-Medical-Skills | Python | 1001 | [Open](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) |
| 7 | imbue-bit/OpenClaw-PwnKit | Python | 695 | [Open](https://github.com/imbue-bit/OpenClaw-PwnKit) |
| 8 | jackwener/xiaohongshu-cli | Python | 658 | [Open](https://github.com/jackwener/xiaohongshu-cli) |
| 9 | knowsuchagency/mcp2cli | Python | 621 | [Open](https://github.com/knowsuchagency/mcp2cli) |
| 10 | photon-hq/qclaw-wechat-client | TypeScript | 614 | [Open](https://github.com/photon-hq/qclaw-wechat-client) |

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
