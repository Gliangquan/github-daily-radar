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

Updated: 2026-06-11T02:15:35.064Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | NoopApp/noop | Swift | 1395 | [Open](https://github.com/NoopApp/noop) |
| 2 | MSNightmare/RoguePlanet | C++ | 919 | [Open](https://github.com/MSNightmare/RoguePlanet) |
| 3 | shadcn/improve | Unknown | 892 | [Open](https://github.com/shadcn/improve) |
| 4 | XiaomiMiMo/MiMo-Code | TypeScript | 856 | [Open](https://github.com/XiaomiMiMo/MiMo-Code) |
| 5 | GordenSun/GordenSuperPPTSkills | Python | 731 | [Open](https://github.com/GordenSun/GordenSuperPPTSkills) |
| 6 | JimLiu/baoyu-design | JavaScript | 694 | [Open](https://github.com/JimLiu/baoyu-design) |
| 7 | apple/coreai-models | Python | 619 | [Open](https://github.com/apple/coreai-models) |
| 8 | vorpus/performativeUI | TypeScript | 573 | [Open](https://github.com/vorpus/performativeUI) |
| 9 | amElnagdy/guard-skills | Unknown | 553 | [Open](https://github.com/amElnagdy/guard-skills) |
| 10 | Tencent-Hunyuan/UniRL | Python | 442 | [Open](https://github.com/Tencent-Hunyuan/UniRL) |

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
