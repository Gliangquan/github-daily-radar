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

Updated: 2026-10-14T02:24:28.608Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | wheresryan22/anatomy | JavaScript | 8342 | [Open](https://github.com/wheresryan22/anatomy) |
| 2 | mhtsec/ARTEX | Go | 3895 | [Open](https://github.com/mhtsec/ARTEX) |
| 3 | t4t5/omdrop-owl | Shell | 2594 | [Open](https://github.com/t4t5/omdrop-owl) |
| 4 | ARahim3/DigUp | Swift | 2505 | [Open](https://github.com/ARahim3/DigUp) |
| 5 | storytold/craft-launcher | Rust | 2330 | [Open](https://github.com/storytold/craft-launcher) |
| 6 | liseami/CCBaga | Rust | 2071 | [Open](https://github.com/liseami/CCBaga) |
| 7 | noahdunnagan/fsearch | Rust | 2031 | [Open](https://github.com/noahdunnagan/fsearch) |
| 8 | onehumanbeing/esp32-iphone-agent | Python | 1579 | [Open](https://github.com/onehumanbeing/esp32-iphone-agent) |
| 9 | trhhubsd/ARTEXX | Go | 1191 | [Open](https://github.com/trhhubsd/ARTEXX) |
| 10 | NVIDIA-Omniverse/usd-brep | C++ | 1184 | [Open](https://github.com/NVIDIA-Omniverse/usd-brep) |

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
