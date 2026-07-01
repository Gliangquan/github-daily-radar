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

Updated: 2026-07-01T02:08:08.003Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/DeepSpec | Python | 5313 | [Open](https://github.com/deepseek-ai/DeepSpec) |
| 2 | baairon/torlink | TypeScript | 1704 | [Open](https://github.com/baairon/torlink) |
| 3 | Krishnagangwal/CS-Fundamentals | Unknown | 1219 | [Open](https://github.com/Krishnagangwal/CS-Fundamentals) |
| 4 | yynxxxxx/Codex-5.5-codex-instruct-5.5 | Python | 820 | [Open](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5) |
| 5 | winsznx/theeleven | TypeScript | 691 | [Open](https://github.com/winsznx/theeleven) |
| 6 | TianhangZhuzth/Fundamental-Ava | Python | 603 | [Open](https://github.com/TianhangZhuzth/Fundamental-Ava) |
| 7 | Pluviobyte/video-production-skills | Python | 483 | [Open](https://github.com/Pluviobyte/video-production-skills) |
| 8 | CopilotKit/OpenTag | TypeScript | 462 | [Open](https://github.com/CopilotKit/OpenTag) |
| 9 | tdeverx/contained-app | Swift | 434 | [Open](https://github.com/tdeverx/contained-app) |
| 10 | cclank/lanshu-animated-architecture-diagram | Python | 388 | [Open](https://github.com/cclank/lanshu-animated-architecture-diagram) |

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
