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

Updated: 2026-10-22T02:09:28.990Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Gathin23/cleanyourtv | Java | 19561 | [Open](https://github.com/Gathin23/cleanyourtv) |
| 2 | deepseek-ai/DeepInfer | Python | 18080 | [Open](https://github.com/deepseek-ai/DeepInfer) |
| 3 | ly05010419/MacNativeGames | C | 3913 | [Open](https://github.com/ly05010419/MacNativeGames) |
| 4 | simbasjungles/free-my-tv | Java | 2765 | [Open](https://github.com/simbasjungles/free-my-tv) |
| 5 | pengchujin/aerial-tv | Kotlin | 2194 | [Open](https://github.com/pengchujin/aerial-tv) |
| 6 | xiaoyang111222/cn-math-taxonomy | Python | 1999 | [Open](https://github.com/xiaoyang111222/cn-math-taxonomy) |
| 7 | JoasASantos/REA-Prompts | Unknown | 1350 | [Open](https://github.com/JoasASantos/REA-Prompts) |
| 8 | OpenMOSS/MOSS-Image | Python | 1299 | [Open](https://github.com/OpenMOSS/MOSS-Image) |
| 9 | aicodeking/leanrea | Python | 1297 | [Open](https://github.com/aicodeking/leanrea) |
| 10 | alchaincyf/huashu-motion | JavaScript | 1285 | [Open](https://github.com/alchaincyf/huashu-motion) |

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
