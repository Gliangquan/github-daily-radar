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

Updated: 2026-03-11T00:59:34.995Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | karpathy/autoresearch | Python | 22783 | [Open](https://github.com/karpathy/autoresearch) |
| 2 | HKUDS/CLI-Anything | Python | 2539 | [Open](https://github.com/HKUDS/CLI-Anything) |
| 3 | twostraws/SwiftUI-Agent-Skill | Unknown | 1751 | [Open](https://github.com/twostraws/SwiftUI-Agent-Skill) |
| 4 | jackwener/twitter-cli | Python | 1431 | [Open](https://github.com/jackwener/twitter-cli) |
| 5 | BigBodyCobain/Shadowbroker | TypeScript | 1405 | [Open](https://github.com/BigBodyCobain/Shadowbroker) |
| 6 | cyxzdev/Uncodixfy | Unknown | 1353 | [Open](https://github.com/cyxzdev/Uncodixfy) |
| 7 | ParthJadhav/app-store-screenshots | Unknown | 962 | [Open](https://github.com/ParthJadhav/app-store-screenshots) |
| 8 | FreedomIntelligence/OpenClaw-Medical-Skills | Python | 919 | [Open](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) |
| 9 | op7418/Claude-to-IM-skill | TypeScript | 832 | [Open](https://github.com/op7418/Claude-to-IM-skill) |
| 10 | imbue-bit/OpenClaw-PwnKit | Python | 675 | [Open](https://github.com/imbue-bit/OpenClaw-PwnKit) |

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
