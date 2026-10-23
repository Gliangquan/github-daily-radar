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

Updated: 2026-10-23T02:15:13.735Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Gathin23/cleanyourtv | Java | 24351 | [Open](https://github.com/Gathin23/cleanyourtv) |
| 2 | ly05010419/MacNativeGames | C | 4509 | [Open](https://github.com/ly05010419/MacNativeGames) |
| 3 | simbasjungles/free-my-tv | Java | 3474 | [Open](https://github.com/simbasjungles/free-my-tv) |
| 4 | pengchujin/aerial-tv | Kotlin | 3179 | [Open](https://github.com/pengchujin/aerial-tv) |
| 5 | xiaoyang111222/cn-math-taxonomy | Python | 2212 | [Open](https://github.com/xiaoyang111222/cn-math-taxonomy) |
| 6 | tek-sys-hub/Rubix-lang | Assembly | 1902 | [Open](https://github.com/tek-sys-hub/Rubix-lang) |
| 7 | ikow/php2shell-poc | Python | 1535 | [Open](https://github.com/ikow/php2shell-poc) |
| 8 | JoasASantos/REA-Prompts | Unknown | 1487 | [Open](https://github.com/JoasASantos/REA-Prompts) |
| 9 | alchaincyf/huashu-motion | JavaScript | 1449 | [Open](https://github.com/alchaincyf/huashu-motion) |
| 10 | aicodeking/leanrea | Python | 1371 | [Open](https://github.com/aicodeking/leanrea) |

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
