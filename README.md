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

Updated: 2026-06-13T02:04:19.291Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | XiaomiMiMo/MiMo-Code | TypeScript | 6914 | [Open](https://github.com/XiaomiMiMo/MiMo-Code) |
| 2 | shadcn/improve | Unknown | 2446 | [Open](https://github.com/shadcn/improve) |
| 3 | NoopApp/noop | Swift | 1544 | [Open](https://github.com/NoopApp/noop) |
| 4 | MSNightmare/RoguePlanet | C++ | 1218 | [Open](https://github.com/MSNightmare/RoguePlanet) |
| 5 | DietrichGebert/ponytail | JavaScript | 941 | [Open](https://github.com/DietrichGebert/ponytail) |
| 6 | GordenSun/GordenSuperPPTSkills | Python | 846 | [Open](https://github.com/GordenSun/GordenSuperPPTSkills) |
| 7 | apple/coreai-models | Swift | 834 | [Open](https://github.com/apple/coreai-models) |
| 8 | JimLiu/baoyu-design | JavaScript | 830 | [Open](https://github.com/JimLiu/baoyu-design) |
| 9 | vorpus/performativeUI | TypeScript | 661 | [Open](https://github.com/vorpus/performativeUI) |
| 10 | SkyBlue997/enableMacosAI | Shell | 566 | [Open](https://github.com/SkyBlue997/enableMacosAI) |

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
