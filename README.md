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

Updated: 2026-04-09T01:03:59.532Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | milla-jovovich/mempalace | Python | 27274 | [Open](https://github.com/milla-jovovich/mempalace) |
| 2 | santifer/career-ops | JavaScript | 24524 | [Open](https://github.com/santifer/career-ops) |
| 3 | safishamsi/graphify | Python | 12785 | [Open](https://github.com/safishamsi/graphify) |
| 4 | JuliusBrussee/caveman | Python | 7503 | [Open](https://github.com/JuliusBrussee/caveman) |
| 5 | alchaincyf/nuwa-skill | Python | 3839 | [Open](https://github.com/alchaincyf/nuwa-skill) |
| 6 | farzaa/clicky | Swift | 2228 | [Open](https://github.com/farzaa/clicky) |
| 7 | GitFrog1111/badclaude | HTML | 1493 | [Open](https://github.com/GitFrog1111/badclaude) |
| 8 | LaurieWired/tailslayer | C++ | 1371 | [Open](https://github.com/LaurieWired/tailslayer) |
| 9 | afar1/fieldtheory-cli | TypeScript | 1251 | [Open](https://github.com/afar1/fieldtheory-cli) |
| 10 | KKKKhazix/khazix-skills | Unknown | 1170 | [Open](https://github.com/KKKKhazix/khazix-skills) |

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
