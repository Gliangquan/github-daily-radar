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

Updated: 2026-10-20T02:21:53.842Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Gathin23/cleanyourtv | Java | 5680 | [Open](https://github.com/Gathin23/cleanyourtv) |
| 2 | feder-cr/git-ai | Go | 2461 | [Open](https://github.com/feder-cr/git-ai) |
| 3 | ahwootech/BRUTAL | C# | 1997 | [Open](https://github.com/ahwootech/BRUTAL) |
| 4 | ly05010419/MacNativeGames | C | 1822 | [Open](https://github.com/ly05010419/MacNativeGames) |
| 5 | chenglou/handwired | TypeScript | 1816 | [Open](https://github.com/chenglou/handwired) |
| 6 | Supermedo/uncharted_pc | C++ | 1593 | [Open](https://github.com/Supermedo/uncharted_pc) |
| 7 | Leonxlnx/earshot | Python | 1562 | [Open](https://github.com/Leonxlnx/earshot) |
| 8 | Caho1/open-claude-ui | TypeScript | 1255 | [Open](https://github.com/Caho1/open-claude-ui) |
| 9 | aicodeking/leanrea | Python | 1001 | [Open](https://github.com/aicodeking/leanrea) |
| 10 | xscreensaver-official/xscreensaver | Unknown | 1000 | [Open](https://github.com/xscreensaver-official/xscreensaver) |

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
