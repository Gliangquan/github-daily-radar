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

Updated: 2026-04-27T01:25:16.174Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | op7418/guizang-ppt-skill | HTML | 2999 | [Open](https://github.com/op7418/guizang-ppt-skill) |
| 2 | Einsia/OpenChronicle | Python | 1422 | [Open](https://github.com/Einsia/OpenChronicle) |
| 3 | ConardLi/garden-skills | JavaScript | 1382 | [Open](https://github.com/ConardLi/garden-skills) |
| 4 | deepseek-ai/TileKernels | Python | 1218 | [Open](https://github.com/deepseek-ai/TileKernels) |
| 5 | victorchen96/deepseek_v4_rolepaly_instruct | Unknown | 1076 | [Open](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct) |
| 6 | openclaw/clawsweeper | JavaScript | 1004 | [Open](https://github.com/openclaw/clawsweeper) |
| 7 | therealaleph/MasterHttpRelayVPN-RUST | Rust | 747 | [Open](https://github.com/therealaleph/MasterHttpRelayVPN-RUST) |
| 8 | Russell-cell/PPT-Design-Prompt | Python | 711 | [Open](https://github.com/Russell-cell/PPT-Design-Prompt) |
| 9 | GammaLabTechnologies/harmonist | Python | 692 | [Open](https://github.com/GammaLabTechnologies/harmonist) |
| 10 | earthtojake/text-to-cad | JavaScript | 668 | [Open](https://github.com/earthtojake/text-to-cad) |

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
