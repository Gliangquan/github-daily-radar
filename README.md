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

Updated: 2026-04-07T01:13:08.813Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Gitlawb/openclaude | TypeScript | 18038 | [Open](https://github.com/Gitlawb/openclaude) |
| 2 | santifer/career-ops | Go | 11242 | [Open](https://github.com/santifer/career-ops) |
| 3 | emdash-cms/emdash | TypeScript | 7821 | [Open](https://github.com/emdash-cms/emdash) |
| 4 | ultraworkers/claw-code-parity | Rust | 6545 | [Open](https://github.com/ultraworkers/claw-code-parity) |
| 5 | HKUDS/OpenHarness | Python | 6247 | [Open](https://github.com/HKUDS/OpenHarness) |
| 6 | JuliusBrussee/caveman | Python | 4158 | [Open](https://github.com/JuliusBrussee/caveman) |
| 7 | kevinrgu/autoagent | Python | 3586 | [Open](https://github.com/kevinrgu/autoagent) |
| 8 | 0xGF/boneyard | TypeScript | 3115 | [Open](https://github.com/0xGF/boneyard) |
| 9 | safishamsi/graphify | Python | 1960 | [Open](https://github.com/safishamsi/graphify) |
| 10 | alchaincyf/nuwa-skill | Unknown | 1473 | [Open](https://github.com/alchaincyf/nuwa-skill) |

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
