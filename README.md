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

Updated: 2026-10-24T02:13:20.755Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | simbasjungles/free-my-tv | Java | 3979 | [Open](https://github.com/simbasjungles/free-my-tv) |
| 2 | pengchujin/aerial-tv | Kotlin | 3862 | [Open](https://github.com/pengchujin/aerial-tv) |
| 3 | xiaoyang111222/cn-math-taxonomy | Python | 2843 | [Open](https://github.com/xiaoyang111222/cn-math-taxonomy) |
| 4 | JoasASantos/REA-Prompts | Unknown | 1754 | [Open](https://github.com/JoasASantos/REA-Prompts) |
| 5 | ikow/php2shell-poc | Python | 1698 | [Open](https://github.com/ikow/php2shell-poc) |
| 6 | EthanArbuckle/fairplay-decrypt | C | 1611 | [Open](https://github.com/EthanArbuckle/fairplay-decrypt) |
| 7 | alchaincyf/huashu-motion | JavaScript | 1542 | [Open](https://github.com/alchaincyf/huashu-motion) |
| 8 | humblemuzzu/dumbtv | Java | 1398 | [Open](https://github.com/humblemuzzu/dumbtv) |
| 9 | Ansub/tv-detox | Java | 1385 | [Open](https://github.com/Ansub/tv-detox) |
| 10 | 9bie/php2shell-bypass-aslr-exp | Python | 1277 | [Open](https://github.com/9bie/php2shell-bypass-aslr-exp) |

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
