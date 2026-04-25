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

Updated: 2026-04-25T01:15:21.230Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | alchaincyf/huashu-design | HTML | 6091 | [Open](https://github.com/alchaincyf/huashu-design) |
| 2 | tw93/Kami | HTML | 3046 | [Open](https://github.com/tw93/Kami) |
| 3 | op7418/guizang-ppt-skill | HTML | 1928 | [Open](https://github.com/op7418/guizang-ppt-skill) |
| 4 | deepseek-ai/TileKernels | Python | 1071 | [Open](https://github.com/deepseek-ai/TileKernels) |
| 5 | the-hidden-fish/advisor-ledger | Python | 1058 | [Open](https://github.com/the-hidden-fish/advisor-ledger) |
| 6 | masterking32/MasterHttpRelayVPN | Python | 1053 | [Open](https://github.com/masterking32/MasterHttpRelayVPN) |
| 7 | ConardLi/web-design-skill | CSS | 1009 | [Open](https://github.com/ConardLi/web-design-skill) |
| 8 | golbin/hop | TypeScript | 992 | [Open](https://github.com/golbin/hop) |
| 9 | leigest519/OpenGame | TypeScript | 974 | [Open](https://github.com/leigest519/OpenGame) |
| 10 | Einsia/OpenChronicle | Python | 783 | [Open](https://github.com/Einsia/OpenChronicle) |

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
