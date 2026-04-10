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

Updated: 2026-04-10T01:15:08.013Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | milla-jovovich/mempalace | Python | 35744 | [Open](https://github.com/milla-jovovich/mempalace) |
| 2 | santifer/career-ops | JavaScript | 27716 | [Open](https://github.com/santifer/career-ops) |
| 3 | JuliusBrussee/caveman | Python | 8837 | [Open](https://github.com/JuliusBrussee/caveman) |
| 4 | alchaincyf/nuwa-skill | Python | 5497 | [Open](https://github.com/alchaincyf/nuwa-skill) |
| 5 | farzaa/clicky | Swift | 3148 | [Open](https://github.com/farzaa/clicky) |
| 6 | alchaincyf/zhangxuefeng-skill | Unknown | 1978 | [Open](https://github.com/alchaincyf/zhangxuefeng-skill) |
| 7 | xixu-me/awesome-persona-distill-skills | JavaScript | 1767 | [Open](https://github.com/xixu-me/awesome-persona-distill-skills) |
| 8 | GitFrog1111/badclaude | HTML | 1763 | [Open](https://github.com/GitFrog1111/badclaude) |
| 9 | LaurieWired/tailslayer | C++ | 1667 | [Open](https://github.com/LaurieWired/tailslayer) |
| 10 | hotcoffeeshake/tong-jincheng-skill | Unknown | 1415 | [Open](https://github.com/hotcoffeeshake/tong-jincheng-skill) |

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
