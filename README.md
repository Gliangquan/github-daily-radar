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

Updated: 2026-05-29T01:57:34.340Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | op7418/guizang-social-card-skill | HTML | 798 | [Open](https://github.com/op7418/guizang-social-card-skill) |
| 2 | study8677/awesome-architecture | Vue | 730 | [Open](https://github.com/study8677/awesome-architecture) |
| 3 | UditAkhourii/adhd | TypeScript | 471 | [Open](https://github.com/UditAkhourii/adhd) |
| 4 | harrietteehisqu7759383/kms-pico-latest-april-2026 | C# | 448 | [Open](https://github.com/harrietteehisqu7759383/kms-pico-latest-april-2026) |
| 5 | alfiyahkamilah1239298/WallpaperDownloader-26 | TypeScript | 398 | [Open](https://github.com/alfiyahkamilah1239298/WallpaperDownloader-26) |
| 6 | FlashML-org/flashlib | Python | 364 | [Open](https://github.com/FlashML-org/flashlib) |
| 7 | SigmaTradeLabs/aster-bot | JavaScript | 343 | [Open](https://github.com/SigmaTradeLabs/aster-bot) |
| 8 | Novaquant-labs/hyperliquid-trading-bot | Python | 343 | [Open](https://github.com/Novaquant-labs/hyperliquid-trading-bot) |
| 9 | cortneymanieri50677828029/RBX-Executor-Version-2026 | C# | 341 | [Open](https://github.com/cortneymanieri50677828029/RBX-Executor-Version-2026) |
| 10 | Outcome-Signal-Forge/trading-bot | TypeScript | 340 | [Open](https://github.com/Outcome-Signal-Forge/trading-bot) |

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
