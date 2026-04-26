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

Updated: 2026-04-26T01:24:18.273Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | tw93/Kami | HTML | 3260 | [Open](https://github.com/tw93/Kami) |
| 2 | op7418/guizang-ppt-skill | HTML | 2696 | [Open](https://github.com/op7418/guizang-ppt-skill) |
| 3 | masterking32/MasterHttpRelayVPN | Python | 1246 | [Open](https://github.com/masterking32/MasterHttpRelayVPN) |
| 4 | ConardLi/garden-skills | JavaScript | 1238 | [Open](https://github.com/ConardLi/garden-skills) |
| 5 | deepseek-ai/TileKernels | Python | 1160 | [Open](https://github.com/deepseek-ai/TileKernels) |
| 6 | Einsia/OpenChronicle | Python | 1124 | [Open](https://github.com/Einsia/OpenChronicle) |
| 7 | cosmicstack-labs/mercury-agent | TypeScript | 1110 | [Open](https://github.com/cosmicstack-labs/mercury-agent) |
| 8 | leigest519/OpenGame | TypeScript | 1086 | [Open](https://github.com/leigest519/OpenGame) |
| 9 | victorchen96/deepseek_v4_rolepaly_instruct | Unknown | 828 | [Open](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct) |
| 10 | therealaleph/MasterHttpRelayVPN-RUST | Rust | 645 | [Open](https://github.com/therealaleph/MasterHttpRelayVPN-RUST) |

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
