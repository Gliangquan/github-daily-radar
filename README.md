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

Updated: 2026-10-18T01:48:43.840Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | jhaizhou-ops/d2r-mobile | C | 3714 | [Open](https://github.com/jhaizhou-ops/d2r-mobile) |
| 2 | Arekejoker/qwen21-nsfw-pose-skill | Python | 2646 | [Open](https://github.com/Arekejoker/qwen21-nsfw-pose-skill) |
| 3 | HeyPuter/everything | JavaScript | 2055 | [Open](https://github.com/HeyPuter/everything) |
| 4 | ahwootech/BRUTAL | C# | 1796 | [Open](https://github.com/ahwootech/BRUTAL) |
| 5 | deeplethe/solid-glass | TypeScript | 1738 | [Open](https://github.com/deeplethe/solid-glass) |
| 6 | chenglou/handwired | TypeScript | 1679 | [Open](https://github.com/chenglou/handwired) |
| 7 | Supermedo/uncharted_pc | C++ | 1267 | [Open](https://github.com/Supermedo/uncharted_pc) |
| 8 | Caho1/open-claude-ui | TypeScript | 1138 | [Open](https://github.com/Caho1/open-claude-ui) |
| 9 | feder-cr/git-ai | Go | 1137 | [Open](https://github.com/feder-cr/git-ai) |
| 10 | zhuyansen/new-term-radar | Python | 1082 | [Open](https://github.com/zhuyansen/new-term-radar) |

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
