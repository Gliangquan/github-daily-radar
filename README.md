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

Updated: 2026-04-30T01:46:08.062Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | nexu-io/open-design | TypeScript | 4472 | [Open](https://github.com/nexu-io/open-design) |
| 2 | freestylefly/awesome-gpt-image-2 | Unknown | 2153 | [Open](https://github.com/freestylefly/awesome-gpt-image-2) |
| 3 | victorchen96/deepseek_v4_rolepaly_instruct | Unknown | 1521 | [Open](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct) |
| 4 | cursor/cookbook | TypeScript | 1467 | [Open](https://github.com/cursor/cookbook) |
| 5 | epoko77-ai/im-not-ai | Python | 643 | [Open](https://github.com/epoko77-ai/im-not-ai) |
| 6 | alash3al/stash | Go | 559 | [Open](https://github.com/alash3al/stash) |
| 7 | ps5-linux/ps5-linux-loader | C | 527 | [Open](https://github.com/ps5-linux/ps5-linux-loader) |
| 8 | NyxTides/ppt-image-first | Python | 427 | [Open](https://github.com/NyxTides/ppt-image-first) |
| 9 | GENEXIS-AI/chromex | TypeScript | 420 | [Open](https://github.com/GENEXIS-AI/chromex) |
| 10 | bonused/monthly-bonus-stake | Unknown | 413 | [Open](https://github.com/bonused/monthly-bonus-stake) |

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
