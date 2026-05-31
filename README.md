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

Updated: 2026-05-31T02:06:04.285Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | op7418/guizang-social-card-skill | HTML | 1630 | [Open](https://github.com/op7418/guizang-social-card-skill) |
| 2 | helloianneo/ian-xiaohei-illustrations | Unknown | 1140 | [Open](https://github.com/helloianneo/ian-xiaohei-illustrations) |
| 3 | UditAkhourii/adhd | TypeScript | 603 | [Open](https://github.com/UditAkhourii/adhd) |
| 4 | MatinSenPai/SenPaiScanner | Go | 595 | [Open](https://github.com/MatinSenPai/SenPaiScanner) |
| 5 | withkynam/vibecode-pro-max-kit | JavaScript | 594 | [Open](https://github.com/withkynam/vibecode-pro-max-kit) |
| 6 | Michaelliv/pi-dynamic-workflows | TypeScript | 576 | [Open](https://github.com/Michaelliv/pi-dynamic-workflows) |
| 7 | Sophomoresty/gemini-web2api | Python | 526 | [Open](https://github.com/Sophomoresty/gemini-web2api) |
| 8 | baoweise-bot/aimili-vpngate | Python | 512 | [Open](https://github.com/baoweise-bot/aimili-vpngate) |
| 9 | 2aronS/Duel-Agents | TypeScript | 461 | [Open](https://github.com/2aronS/Duel-Agents) |
| 10 | nv-tlabs/Gamma-World | Unknown | 430 | [Open](https://github.com/nv-tlabs/Gamma-World) |

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
