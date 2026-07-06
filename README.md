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

Updated: 2026-07-06T01:54:13.947Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | elder-plinius/T3MP3ST | TypeScript | 1712 | [Open](https://github.com/elder-plinius/T3MP3ST) |
| 2 | mekos2772/ios-location-spoofer | JavaScript | 1329 | [Open](https://github.com/mekos2772/ios-location-spoofer) |
| 3 | HUANGCHIHHUNGLeo/claude-real-video | Python | 979 | [Open](https://github.com/HUANGCHIHHUNGLeo/claude-real-video) |
| 4 | jamesob/local-llm | Shell | 922 | [Open](https://github.com/jamesob/local-llm) |
| 5 | ammaarreshi/Generals-Mac-iOS-iPad | C++ | 804 | [Open](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad) |
| 6 | xuchonglang/investing-for-beginners | Unknown | 710 | [Open](https://github.com/xuchonglang/investing-for-beginners) |
| 7 | jmerelnyc/Talos | Python | 678 | [Open](https://github.com/jmerelnyc/Talos) |
| 8 | uzairansaruzi/hermex | Swift | 616 | [Open](https://github.com/uzairansaruzi/hermex) |
| 9 | Kulaxyz/token-diet | Shell | 587 | [Open](https://github.com/Kulaxyz/token-diet) |
| 10 | CalmNoteDepot/MECCHA-VISION-ULTIMATE | Unknown | 533 | [Open](https://github.com/CalmNoteDepot/MECCHA-VISION-ULTIMATE) |

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
