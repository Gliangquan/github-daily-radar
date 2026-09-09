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

Updated: 2026-09-09T01:50:02.496Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ashemag/human-atlas | TypeScript | 2466 | [Open](https://github.com/ashemag/human-atlas) |
| 2 | Albert-Weasker/niubigeo | TypeScript | 2168 | [Open](https://github.com/Albert-Weasker/niubigeo) |
| 3 | Rion-Wu-tech/wechat-intelligence-hub | Python | 1943 | [Open](https://github.com/Rion-Wu-tech/wechat-intelligence-hub) |
| 4 | EverettFish/holo-card-studio | Python | 1130 | [Open](https://github.com/EverettFish/holo-card-studio) |
| 5 | vinzdg/codenotch | Swift | 1108 | [Open](https://github.com/vinzdg/codenotch) |
| 6 | anthropics/fermats-last-theorem | Lean | 979 | [Open](https://github.com/anthropics/fermats-last-theorem) |
| 7 | danielblnc/DLSS-NR-on-AMD | Unknown | 934 | [Open](https://github.com/danielblnc/DLSS-NR-on-AMD) |
| 8 | openai/NavierStokesAndEuler | Lean | 874 | [Open](https://github.com/openai/NavierStokesAndEuler) |
| 9 | ahujasid/camera-to-blender | JavaScript | 775 | [Open](https://github.com/ahujasid/camera-to-blender) |
| 10 | kajisho5/ffmpeg-skill | Python | 739 | [Open](https://github.com/kajisho5/ffmpeg-skill) |

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
