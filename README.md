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

Updated: 2026-06-30T02:02:22.314Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/DeepSpec | Python | 3906 | [Open](https://github.com/deepseek-ai/DeepSpec) |
| 2 | Yu9191/wloc | JavaScript | 1516 | [Open](https://github.com/Yu9191/wloc) |
| 3 | Krishnagangwal/CS-Fundamentals | Unknown | 960 | [Open](https://github.com/Krishnagangwal/CS-Fundamentals) |
| 4 | winsznx/theeleven | TypeScript | 715 | [Open](https://github.com/winsznx/theeleven) |
| 5 | baairon/torlink | TypeScript | 673 | [Open](https://github.com/baairon/torlink) |
| 6 | benchflow-ai/awesome-evals | Unknown | 589 | [Open](https://github.com/benchflow-ai/awesome-evals) |
| 7 | AlexandrosGounis/pdfx | TypeScript | 564 | [Open](https://github.com/AlexandrosGounis/pdfx) |
| 8 | yynxxxxx/Codex-5.5-codex-instruct-5.5 | Python | 517 | [Open](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5) |
| 9 | Pluviobyte/video-production-skills | Python | 445 | [Open](https://github.com/Pluviobyte/video-production-skills) |
| 10 | CopilotKit/OpenTag | TypeScript | 408 | [Open](https://github.com/CopilotKit/OpenTag) |

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
