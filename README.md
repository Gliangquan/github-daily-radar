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

Updated: 2026-04-08T01:14:21.345Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | santifer/career-ops | JavaScript | 18376 | [Open](https://github.com/santifer/career-ops) |
| 2 | milla-jovovich/mempalace | Python | 17070 | [Open](https://github.com/milla-jovovich/mempalace) |
| 3 | safishamsi/graphify | Python | 6969 | [Open](https://github.com/safishamsi/graphify) |
| 4 | ultraworkers/claw-code-parity | Rust | 6598 | [Open](https://github.com/ultraworkers/claw-code-parity) |
| 5 | JuliusBrussee/caveman | Python | 5940 | [Open](https://github.com/JuliusBrussee/caveman) |
| 6 | kevinrgu/autoagent | Python | 3803 | [Open](https://github.com/kevinrgu/autoagent) |
| 7 | alchaincyf/nuwa-skill | Unknown | 2547 | [Open](https://github.com/alchaincyf/nuwa-skill) |
| 8 | sooryathejas/METATRON | Python | 1731 | [Open](https://github.com/sooryathejas/METATRON) |
| 9 | leilei926524-tech/anti-distill | Unknown | 1201 | [Open](https://github.com/leilei926524-tech/anti-distill) |
| 10 | GitFrog1111/badclaude | HTML | 1170 | [Open](https://github.com/GitFrog1111/badclaude) |

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
