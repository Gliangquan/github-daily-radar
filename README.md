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

Updated: 2026-10-19T02:05:34.402Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Arekejoker/qwen21-nsfw-pose-skill | Python | 2876 | [Open](https://github.com/Arekejoker/qwen21-nsfw-pose-skill) |
| 2 | feder-cr/git-ai | Go | 2301 | [Open](https://github.com/feder-cr/git-ai) |
| 3 | HeyPuter/everything | JavaScript | 2222 | [Open](https://github.com/HeyPuter/everything) |
| 4 | Gathin23/tv-vibehack | Java | 2107 | [Open](https://github.com/Gathin23/tv-vibehack) |
| 5 | ahwootech/BRUTAL | C# | 1905 | [Open](https://github.com/ahwootech/BRUTAL) |
| 6 | chenglou/handwired | TypeScript | 1732 | [Open](https://github.com/chenglou/handwired) |
| 7 | Supermedo/uncharted_pc | C++ | 1457 | [Open](https://github.com/Supermedo/uncharted_pc) |
| 8 | Caho1/open-claude-ui | TypeScript | 1210 | [Open](https://github.com/Caho1/open-claude-ui) |
| 9 | outcrawlai/scout | TypeScript | 945 | [Open](https://github.com/outcrawlai/scout) |
| 10 | xscreensaver-official/xscreensaver | Unknown | 868 | [Open](https://github.com/xscreensaver-official/xscreensaver) |

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
