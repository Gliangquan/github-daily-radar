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

Updated: 2026-06-07T02:10:39.654Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | b-nnett/goose | Rust | 2168 | [Open](https://github.com/b-nnett/goose) |
| 2 | cpaczek/skylight | TypeScript | 2085 | [Open](https://github.com/cpaczek/skylight) |
| 3 | jd-opensource/JoyAI-Echo | Python | 716 | [Open](https://github.com/jd-opensource/JoyAI-Echo) |
| 4 | qiuqiubuchongle-cloud/chokepoint-atlas | Python | 590 | [Open](https://github.com/qiuqiubuchongle-cloud/chokepoint-atlas) |
| 5 | VAST-AI-Research/TripoSplat | Python | 494 | [Open](https://github.com/VAST-AI-Research/TripoSplat) |
| 6 | tastyeffectco/sandboxes | Go | 471 | [Open](https://github.com/tastyeffectco/sandboxes) |
| 7 | Jane-xiaoer/xiaoer-videolab | JavaScript | 452 | [Open](https://github.com/Jane-xiaoer/xiaoer-videolab) |
| 8 | tiantianGPU/reg-factory | Python | 443 | [Open](https://github.com/tiantianGPU/reg-factory) |
| 9 | Fullive-AI/Anima | Python | 392 | [Open](https://github.com/Fullive-AI/Anima) |
| 10 | S-Sigdel/vimhjkl | Python | 385 | [Open](https://github.com/S-Sigdel/vimhjkl) |

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
