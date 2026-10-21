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

Updated: 2026-10-21T02:15:06.151Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/DeepInfer | Python | 13199 | [Open](https://github.com/deepseek-ai/DeepInfer) |
| 2 | Gathin23/cleanyourtv | Java | 12331 | [Open](https://github.com/Gathin23/cleanyourtv) |
| 3 | ly05010419/MacNativeGames | C | 2890 | [Open](https://github.com/ly05010419/MacNativeGames) |
| 4 | Leonxlnx/earshot | Python | 1964 | [Open](https://github.com/Leonxlnx/earshot) |
| 5 | simbasjungles/free-my-tv | Java | 1864 | [Open](https://github.com/simbasjungles/free-my-tv) |
| 6 | chenglou/handwired | TypeScript | 1853 | [Open](https://github.com/chenglou/handwired) |
| 7 | Supermedo/uncharted_pc | C++ | 1727 | [Open](https://github.com/Supermedo/uncharted_pc) |
| 8 | xiaoyang111222/cn-math-taxonomy | Python | 1615 | [Open](https://github.com/xiaoyang111222/cn-math-taxonomy) |
| 9 | feder-cr/git-ai | Go | 1276 | [Open](https://github.com/feder-cr/git-ai) |
| 10 | aicodeking/leanrea | Python | 1181 | [Open](https://github.com/aicodeking/leanrea) |

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
