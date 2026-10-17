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

Updated: 2026-10-17T01:50:12.898Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | jhaizhou-ops/d2r-mobile | C | 3541 | [Open](https://github.com/jhaizhou-ops/d2r-mobile) |
| 2 | onehumanbeing/esp32-iphone-agent | C | 2862 | [Open](https://github.com/onehumanbeing/esp32-iphone-agent) |
| 3 | Arekejoker/qwen21-nsfw-pose-skill | Python | 2525 | [Open](https://github.com/Arekejoker/qwen21-nsfw-pose-skill) |
| 4 | liseami/CCBaga | Rust | 2403 | [Open](https://github.com/liseami/CCBaga) |
| 5 | HeyPuter/everything | JavaScript | 1748 | [Open](https://github.com/HeyPuter/everything) |
| 6 | ahwootech/BRUTAL | C# | 1575 | [Open](https://github.com/ahwootech/BRUTAL) |
| 7 | chenglou/handwired | TypeScript | 1565 | [Open](https://github.com/chenglou/handwired) |
| 8 | deeplethe/solid-glass | TypeScript | 1409 | [Open](https://github.com/deeplethe/solid-glass) |
| 9 | zhuyansen/new-term-radar | Python | 1066 | [Open](https://github.com/zhuyansen/new-term-radar) |
| 10 | feder-cr/git-ai | Go | 1062 | [Open](https://github.com/feder-cr/git-ai) |

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
