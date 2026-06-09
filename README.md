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

Updated: 2026-06-09T01:52:52.168Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NoopApp/noop | Swift | 534 | [Open](https://github.com/NoopApp/noop) |
| 2 | diffusionstudio/lottie | TypeScript | 527 | [Open](https://github.com/diffusionstudio/lottie) |
| 3 | JimLiu/baoyu-design | JavaScript | 525 | [Open](https://github.com/JimLiu/baoyu-design) |
| 4 | tastyeffectco/sandboxd | Go | 514 | [Open](https://github.com/tastyeffectco/sandboxd) |
| 5 | Jane-xiaoer/xiaoer-videolab | JavaScript | 482 | [Open](https://github.com/Jane-xiaoer/xiaoer-videolab) |
| 6 | amElnagdy/guard-skills | Unknown | 470 | [Open](https://github.com/amElnagdy/guard-skills) |
| 7 | nevertoday/zhongguo-traditional-colors | JavaScript | 451 | [Open](https://github.com/nevertoday/zhongguo-traditional-colors) |
| 8 | zenhosta/9drive | TypeScript | 449 | [Open](https://github.com/zenhosta/9drive) |
| 9 | jeff141/meatshell | Rust | 425 | [Open](https://github.com/jeff141/meatshell) |
| 10 | GordenSun/GordenSuperPPTSkills | Python | 419 | [Open](https://github.com/GordenSun/GordenSuperPPTSkills) |

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
