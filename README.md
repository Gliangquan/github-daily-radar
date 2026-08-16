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

Updated: 2026-08-16T00:32:06.670Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/deepseek-harness | TypeScript | 115303 | [Open](https://github.com/deepseek-ai/deepseek-harness) |
| 2 | guillaumemeyer/watermarks-remover | Python | 9736 | [Open](https://github.com/guillaumemeyer/watermarks-remover) |
| 3 | anywhere-labs/deepseek-harness-desktop | TypeScript | 5875 | [Open](https://github.com/anywhere-labs/deepseek-harness-desktop) |
| 4 | awesome-dsh-plugin/awesome-dsh-plugin | Python | 2994 | [Open](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) |
| 5 | zhu1090093659/dsh-web-ui | TypeScript | 2707 | [Open](https://github.com/zhu1090093659/dsh-web-ui) |
| 6 | xiaobright/dsh-anchored-standard | JavaScript | 2189 | [Open](https://github.com/xiaobright/dsh-anchored-standard) |
| 7 | SMNETSTUDIO/WeChat-AI | TypeScript | 1737 | [Open](https://github.com/SMNETSTUDIO/WeChat-AI) |
| 8 | yjh051108/dsh-routing-suite | PowerShell | 1692 | [Open](https://github.com/yjh051108/dsh-routing-suite) |
| 9 | xoreaxeaxeax/skitter-creek-bath-salts | C | 1674 | [Open](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) |
| 10 | cordiverse/paper | Unknown | 1626 | [Open](https://github.com/cordiverse/paper) |

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
