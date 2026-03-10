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

Updated: 2026-03-10T09:43:21.464Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | karpathy/autoresearch | Python | 19079 | [Open](https://github.com/karpathy/autoresearch) |
| 2 | twostraws/SwiftUI-Agent-Skill | Unknown | 1662 | [Open](https://github.com/twostraws/SwiftUI-Agent-Skill) |
| 3 | HKUDS/CLI-Anything | Python | 1580 | [Open](https://github.com/HKUDS/CLI-Anything) |
| 4 | duoan/TorchCode | Jupyter Notebook | 1473 | [Open](https://github.com/duoan/TorchCode) |
| 5 | viperrcrypto/Siftly | TypeScript | 1324 | [Open](https://github.com/viperrcrypto/Siftly) |
| 6 | cyxzdev/Uncodixfy | Unknown | 1270 | [Open](https://github.com/cyxzdev/Uncodixfy) |
| 7 | jackwener/twitter-cli | Python | 1262 | [Open](https://github.com/jackwener/twitter-cli) |
| 8 | BigBodyCobain/Shadowbroker | TypeScript | 1195 | [Open](https://github.com/BigBodyCobain/Shadowbroker) |
| 9 | karpathy/agenthub | Go | 839 | [Open](https://github.com/karpathy/agenthub) |
| 10 | op7418/Claude-to-IM-skill | TypeScript | 797 | [Open](https://github.com/op7418/Claude-to-IM-skill) |

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
