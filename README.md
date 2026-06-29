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

Updated: 2026-06-29T02:07:42.101Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | bozhouDev/codex-orange-book | HTML | 2286 | [Open](https://github.com/bozhouDev/codex-orange-book) |
| 2 | deepseek-ai/DeepSpec | Python | 2264 | [Open](https://github.com/deepseek-ai/DeepSpec) |
| 3 | bikini/exploitarium | Python | 2193 | [Open](https://github.com/bikini/exploitarium) |
| 4 | Yu9191/wloc | JavaScript | 1101 | [Open](https://github.com/Yu9191/wloc) |
| 5 | winsznx/theeleven | TypeScript | 697 | [Open](https://github.com/winsznx/theeleven) |
| 6 | benchflow-ai/awesome-evals | Unknown | 564 | [Open](https://github.com/benchflow-ai/awesome-evals) |
| 7 | AlexandrosGounis/pdfx | TypeScript | 490 | [Open](https://github.com/AlexandrosGounis/pdfx) |
| 8 | goehou/tabbit-toy | JavaScript | 379 | [Open](https://github.com/goehou/tabbit-toy) |
| 9 | Pluviobyte/video-production-skills | Python | 364 | [Open](https://github.com/Pluviobyte/video-production-skills) |
| 10 | playPlumtown/Plumtown | JavaScript | 358 | [Open](https://github.com/playPlumtown/Plumtown) |

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
