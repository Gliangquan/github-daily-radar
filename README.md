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

Updated: 2026-09-07T01:33:08.231Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lnkiai/m3e-canvas | TypeScript | 4291 | [Open](https://github.com/lnkiai/m3e-canvas) |
| 2 | anthropics/commerce-agents | Python | 2221 | [Open](https://github.com/anthropics/commerce-agents) |
| 3 | ashemag/human-atlas | TypeScript | 1363 | [Open](https://github.com/ashemag/human-atlas) |
| 4 | Rion-Wu-tech/wechat-intelligence-hub | Python | 1081 | [Open](https://github.com/Rion-Wu-tech/wechat-intelligence-hub) |
| 5 | pierrenade/short-video-generator-AI | Python | 892 | [Open](https://github.com/pierrenade/short-video-generator-AI) |
| 6 | anthropics/fermats-last-theorem | Lean | 845 | [Open](https://github.com/anthropics/fermats-last-theorem) |
| 7 | yczz/oc-english | JavaScript | 832 | [Open](https://github.com/yczz/oc-english) |
| 8 | danielblnc/DLSS-NR-on-AMD | Unknown | 772 | [Open](https://github.com/danielblnc/DLSS-NR-on-AMD) |
| 9 | vinzdg/codenotch | Swift | 704 | [Open](https://github.com/vinzdg/codenotch) |
| 10 | nahrek/polyledger | Python | 620 | [Open](https://github.com/nahrek/polyledger) |

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
