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

Updated: 2026-04-11T01:10:21.382Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | milla-jovovich/mempalace | Python | 40066 | [Open](https://github.com/milla-jovovich/mempalace) |
| 2 | alchaincyf/nuwa-skill | Python | 6613 | [Open](https://github.com/alchaincyf/nuwa-skill) |
| 3 | farzaa/clicky | Swift | 3566 | [Open](https://github.com/farzaa/clicky) |
| 4 | alchaincyf/zhangxuefeng-skill | Unknown | 3102 | [Open](https://github.com/alchaincyf/zhangxuefeng-skill) |
| 5 | xixu-me/awesome-persona-distill-skills | JavaScript | 2844 | [Open](https://github.com/xixu-me/awesome-persona-distill-skills) |
| 6 | garrytan/gbrain | TypeScript | 2471 | [Open](https://github.com/garrytan/gbrain) |
| 7 | LaurieWired/tailslayer | C++ | 1909 | [Open](https://github.com/LaurieWired/tailslayer) |
| 8 | hotcoffeeshake/tong-jincheng-skill | Unknown | 1518 | [Open](https://github.com/hotcoffeeshake/tong-jincheng-skill) |
| 9 | alchaincyf/hermes-agent-orange-book | Unknown | 1514 | [Open](https://github.com/alchaincyf/hermes-agent-orange-book) |
| 10 | KKKKhazix/khazix-skills | Unknown | 1426 | [Open](https://github.com/KKKKhazix/khazix-skills) |

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
