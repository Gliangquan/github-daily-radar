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

Updated: 2026-06-15T02:30:08.942Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | XiaomiMiMo/MiMo-Code | TypeScript | 8489 | [Open](https://github.com/XiaomiMiMo/MiMo-Code) |
| 2 | DietrichGebert/ponytail | JavaScript | 8423 | [Open](https://github.com/DietrichGebert/ponytail) |
| 3 | shadcn/improve | Unknown | 4381 | [Open](https://github.com/shadcn/improve) |
| 4 | MSNightmare/RoguePlanet | C++ | 1275 | [Open](https://github.com/MSNightmare/RoguePlanet) |
| 5 | omnigent-ai/omnigent | Python | 1244 | [Open](https://github.com/omnigent-ai/omnigent) |
| 6 | SkyBlue997/enableMacosAI | Shell | 1196 | [Open](https://github.com/SkyBlue997/enableMacosAI) |
| 7 | lenucksi/aur-malware-check | Shell | 894 | [Open](https://github.com/lenucksi/aur-malware-check) |
| 8 | plannotator/effective-html | HTML | 836 | [Open](https://github.com/plannotator/effective-html) |
| 9 | levy-street/world-of-claudecraft | TypeScript | 702 | [Open](https://github.com/levy-street/world-of-claudecraft) |
| 10 | tamnd/kage | Go | 668 | [Open](https://github.com/tamnd/kage) |

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
