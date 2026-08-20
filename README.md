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

Updated: 2026-08-20T00:30:34.705Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | yjh051108/dsh-routing-suite | PowerShell | 6299 | [Open](https://github.com/yjh051108/dsh-routing-suite) |
| 2 | xiaobright/dsh-anchored-standard | JavaScript | 3639 | [Open](https://github.com/xiaobright/dsh-anchored-standard) |
| 3 | yetone/cumora | TypeScript | 2683 | [Open](https://github.com/yetone/cumora) |
| 4 | s1dashu/ip-as-logo-skill | Unknown | 2077 | [Open](https://github.com/s1dashu/ip-as-logo-skill) |
| 5 | dsh-market/dsh-market | TypeScript | 1246 | [Open](https://github.com/dsh-market/dsh-market) |
| 6 | cinderline/northcinder | JavaScript | 1193 | [Open](https://github.com/cinderline/northcinder) |
| 7 | alchaincyf/deepseek-harness-orange-book | HTML | 1071 | [Open](https://github.com/alchaincyf/deepseek-harness-orange-book) |
| 8 | ZSvirt/zsvirt | Java | 1066 | [Open](https://github.com/ZSvirt/zsvirt) |
| 9 | Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report | Unknown | 1018 | [Open](https://github.com/Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report) |
| 10 | zouyuxuan122/Deepseek-Harness-EAC | JavaScript | 958 | [Open](https://github.com/zouyuxuan122/Deepseek-Harness-EAC) |

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
