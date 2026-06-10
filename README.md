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

Updated: 2026-06-10T02:04:03.955Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | diffusionstudio/lottie | TypeScript | 1513 | [Open](https://github.com/diffusionstudio/lottie) |
| 2 | NoopApp/noop | Swift | 1036 | [Open](https://github.com/NoopApp/noop) |
| 3 | JimLiu/baoyu-design | JavaScript | 640 | [Open](https://github.com/JimLiu/baoyu-design) |
| 4 | GordenSun/GordenSuperPPTSkills | Python | 616 | [Open](https://github.com/GordenSun/GordenSuperPPTSkills) |
| 5 | vorpus/performativeUI | TypeScript | 522 | [Open](https://github.com/vorpus/performativeUI) |
| 6 | amElnagdy/guard-skills | Unknown | 517 | [Open](https://github.com/amElnagdy/guard-skills) |
| 7 | Jane-xiaoer/xiaoer-videolab | JavaScript | 493 | [Open](https://github.com/Jane-xiaoer/xiaoer-videolab) |
| 8 | zenhosta/9drive | TypeScript | 473 | [Open](https://github.com/zenhosta/9drive) |
| 9 | jeff141/meatshell | Rust | 472 | [Open](https://github.com/jeff141/meatshell) |
| 10 | wy51ai/edulab | HTML | 457 | [Open](https://github.com/wy51ai/edulab) |

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
