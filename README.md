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

Updated: 2026-09-29T02:59:38.527Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Contrastive-LM/CLM | Python | 2302 | [Open](https://github.com/Contrastive-LM/CLM) |
| 2 | tobi/disktree | Rust | 1829 | [Open](https://github.com/tobi/disktree) |
| 3 | mexicat/pdoom-video | TypeScript | 1789 | [Open](https://github.com/mexicat/pdoom-video) |
| 4 | yetone/magpie | Go | 1647 | [Open](https://github.com/yetone/magpie) |
| 5 | dzhng/jevgrep | TypeScript | 1470 | [Open](https://github.com/dzhng/jevgrep) |
| 6 | Niko1221/Strata | C++ | 1124 | [Open](https://github.com/Niko1221/Strata) |
| 7 | mikehasa/golive-skill | TypeScript | 1052 | [Open](https://github.com/mikehasa/golive-skill) |
| 8 | 852wa/JIZURA | HTML | 977 | [Open](https://github.com/852wa/JIZURA) |
| 9 | KKKKhazix/AIHOT | TypeScript | 962 | [Open](https://github.com/KKKKhazix/AIHOT) |
| 10 | dgreenheck/tidewater | JavaScript | 920 | [Open](https://github.com/dgreenheck/tidewater) |

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
