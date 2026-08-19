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

Updated: 2026-08-19T00:30:22.364Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/deepseek-harness | TypeScript | 160370 | [Open](https://github.com/deepseek-ai/deepseek-harness) |
| 2 | anywhere-labs/deepseek-harness-desktop | TypeScript | 13580 | [Open](https://github.com/anywhere-labs/deepseek-harness-desktop) |
| 3 | awesome-dsh-plugin/awesome-dsh-plugin | Python | 8892 | [Open](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) |
| 4 | yjh051108/dsh-routing-suite | PowerShell | 6031 | [Open](https://github.com/yjh051108/dsh-routing-suite) |
| 5 | xiaobright/dsh-anchored-standard | JavaScript | 3559 | [Open](https://github.com/xiaobright/dsh-anchored-standard) |
| 6 | yetone/cumora | TypeScript | 2363 | [Open](https://github.com/yetone/cumora) |
| 7 | cordiverse/paper | Unknown | 2294 | [Open](https://github.com/cordiverse/paper) |
| 8 | ccch1mneyyy/dsh-TUI | TypeScript | 1970 | [Open](https://github.com/ccch1mneyyy/dsh-TUI) |
| 9 | xoreaxeaxeax/skitter-creek-bath-salts | C | 1824 | [Open](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) |
| 10 | Small-tailqwq/dsh-deep-whale | TypeScript | 1378 | [Open](https://github.com/Small-tailqwq/dsh-deep-whale) |

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
