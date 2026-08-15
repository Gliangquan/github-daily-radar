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

Updated: 2026-08-15T00:31:38.465Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/deepseek-harness | TypeScript | 95570 | [Open](https://github.com/deepseek-ai/deepseek-harness) |
| 2 | guillaumemeyer/watermarks-remover | Python | 8151 | [Open](https://github.com/guillaumemeyer/watermarks-remover) |
| 3 | zhu1090093659/dsh-web-ui | TypeScript | 1943 | [Open](https://github.com/zhu1090093659/dsh-web-ui) |
| 4 | anywhere-labs/deepseek-harness-desktop | TypeScript | 1866 | [Open](https://github.com/anywhere-labs/deepseek-harness-desktop) |
| 5 | antirez/h3.c | C | 1851 | [Open](https://github.com/antirez/h3.c) |
| 6 | SMNETSTUDIO/WeChat-AI | TypeScript | 1709 | [Open](https://github.com/SMNETSTUDIO/WeChat-AI) |
| 7 | xoreaxeaxeax/skitter-creek-bath-salts | C | 1571 | [Open](https://github.com/xoreaxeaxeax/skitter-creek-bath-salts) |
| 8 | cordiverse/paper | Unknown | 1313 | [Open](https://github.com/cordiverse/paper) |
| 9 | awesome-dsh-plugin/awesome-dsh-plugin | Python | 1106 | [Open](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) |
| 10 | gvzdv/claudish-to-english | Shell | 1095 | [Open](https://github.com/gvzdv/claudish-to-english) |

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
