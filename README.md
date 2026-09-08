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

Updated: 2026-09-08T01:43:22.756Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lnkiai/m3e-canvas | TypeScript | 4688 | [Open](https://github.com/lnkiai/m3e-canvas) |
| 2 | ashemag/human-atlas | TypeScript | 2032 | [Open](https://github.com/ashemag/human-atlas) |
| 3 | Rion-Wu-tech/wechat-intelligence-hub | Python | 1815 | [Open](https://github.com/Rion-Wu-tech/wechat-intelligence-hub) |
| 4 | pierrenade/short-video-generator-AI | Python | 1176 | [Open](https://github.com/pierrenade/short-video-generator-AI) |
| 5 | anthropics/fermats-last-theorem | Lean | 939 | [Open](https://github.com/anthropics/fermats-last-theorem) |
| 6 | vinzdg/codenotch | Swift | 939 | [Open](https://github.com/vinzdg/codenotch) |
| 7 | danielblnc/DLSS-NR-on-AMD | Unknown | 859 | [Open](https://github.com/danielblnc/DLSS-NR-on-AMD) |
| 8 | EverettFish/holo-card-studio | Python | 849 | [Open](https://github.com/EverettFish/holo-card-studio) |
| 9 | Albert-Weasker/niubigeo | TypeScript | 676 | [Open](https://github.com/Albert-Weasker/niubigeo) |
| 10 | ahujasid/camera-to-blender | JavaScript | 673 | [Open](https://github.com/ahujasid/camera-to-blender) |

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
