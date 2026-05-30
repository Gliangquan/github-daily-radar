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

Updated: 2026-05-30T01:52:39.720Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | op7418/guizang-social-card-skill | HTML | 1170 | [Open](https://github.com/op7418/guizang-social-card-skill) |
| 2 | helloianneo/ian-xiaohei-illustrations | Unknown | 828 | [Open](https://github.com/helloianneo/ian-xiaohei-illustrations) |
| 3 | UditAkhourii/adhd | TypeScript | 516 | [Open](https://github.com/UditAkhourii/adhd) |
| 4 | withkynam/vibecode-pro-max-kit | JavaScript | 507 | [Open](https://github.com/withkynam/vibecode-pro-max-kit) |
| 5 | harrietteehisqu7759383/kms-pico-latest-april-2026 | C# | 449 | [Open](https://github.com/harrietteehisqu7759383/kms-pico-latest-april-2026) |
| 6 | Michaelliv/pi-dynamic-workflows | TypeScript | 437 | [Open](https://github.com/Michaelliv/pi-dynamic-workflows) |
| 7 | baoweise-bot/aimili-vpngate | Python | 406 | [Open](https://github.com/baoweise-bot/aimili-vpngate) |
| 8 | alfiyahkamilah1239298/WallpaperDownloader-26 | TypeScript | 400 | [Open](https://github.com/alfiyahkamilah1239298/WallpaperDownloader-26) |
| 9 | Sophomoresty/gemini-web2api | Python | 393 | [Open](https://github.com/Sophomoresty/gemini-web2api) |
| 10 | FlashML-org/flashlib | Python | 392 | [Open](https://github.com/FlashML-org/flashlib) |

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
