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

Updated: 2026-07-05T01:47:27.354Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | mekos2772/ios-location-spoofer | JavaScript | 1286 | [Open](https://github.com/mekos2772/ios-location-spoofer) |
| 2 | jamesob/local-llm | Shell | 753 | [Open](https://github.com/jamesob/local-llm) |
| 3 | HUANGCHIHHUNGLeo/claude-real-video | Python | 746 | [Open](https://github.com/HUANGCHIHHUNGLeo/claude-real-video) |
| 4 | xuchonglang/investing-for-beginners | Unknown | 649 | [Open](https://github.com/xuchonglang/investing-for-beginners) |
| 5 | jmerelnyc/Talos | Python | 586 | [Open](https://github.com/jmerelnyc/Talos) |
| 6 | uzairansaruzi/hermex | Swift | 552 | [Open](https://github.com/uzairansaruzi/hermex) |
| 7 | TianhangZhuzth/Fundamental-Ava | Python | 523 | [Open](https://github.com/TianhangZhuzth/Fundamental-Ava) |
| 8 | Kulaxyz/token-diet | Shell | 458 | [Open](https://github.com/Kulaxyz/token-diet) |
| 9 | spiritov/ds.css | CSS | 426 | [Open](https://github.com/spiritov/ds.css) |
| 10 | asz798838958/FrciblyK12 | Python | 415 | [Open](https://github.com/asz798838958/FrciblyK12) |

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
