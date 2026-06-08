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

Updated: 2026-06-08T02:28:10.734Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | cpaczek/skylight | TypeScript | 2269 | [Open](https://github.com/cpaczek/skylight) |
| 2 | b-nnett/goose | Rust | 2257 | [Open](https://github.com/b-nnett/goose) |
| 3 | jd-opensource/JoyAI-Echo | Python | 862 | [Open](https://github.com/jd-opensource/JoyAI-Echo) |
| 4 | tastyeffectco/sandboxd | Go | 497 | [Open](https://github.com/tastyeffectco/sandboxd) |
| 5 | Jane-xiaoer/xiaoer-videolab | JavaScript | 468 | [Open](https://github.com/Jane-xiaoer/xiaoer-videolab) |
| 6 | zenhosta/9drive | TypeScript | 405 | [Open](https://github.com/zenhosta/9drive) |
| 7 | jeff141/meatshell | Rust | 389 | [Open](https://github.com/jeff141/meatshell) |
| 8 | nevertoday/zhongguo-traditional-colors | JavaScript | 346 | [Open](https://github.com/nevertoday/zhongguo-traditional-colors) |
| 9 | amElnagdy/guard-skills | Unknown | 330 | [Open](https://github.com/amElnagdy/guard-skills) |
| 10 | SenhorH/tab-labeler | TypeScript | 328 | [Open](https://github.com/SenhorH/tab-labeler) |

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
