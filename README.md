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

Updated: 2026-04-20T01:21:41.388Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Robbyant/lingbot-map | Python | 2646 | [Open](https://github.com/Robbyant/lingbot-map) |
| 2 | browser-use/browser-harness | Python | 2219 | [Open](https://github.com/browser-use/browser-harness) |
| 3 | vercel-labs/wterm | TypeScript | 2078 | [Open](https://github.com/vercel-labs/wterm) |
| 4 | Nightmare-Eclipse/RedSun | C++ | 1573 | [Open](https://github.com/Nightmare-Eclipse/RedSun) |
| 5 | kyegomez/OpenMythos | Python | 1459 | [Open](https://github.com/kyegomez/OpenMythos) |
| 6 | lewislulu/html-ppt-skill | HTML | 1428 | [Open](https://github.com/lewislulu/html-ppt-skill) |
| 7 | Manavarya09/design-extract | JavaScript | 1089 | [Open](https://github.com/Manavarya09/design-extract) |
| 8 | BuilderPulse/BuilderPulse | Unknown | 965 | [Open](https://github.com/BuilderPulse/BuilderPulse) |
| 9 | WeaveMindAI/weft | Rust | 880 | [Open](https://github.com/WeaveMindAI/weft) |
| 10 | wbh604/UZI-Skill | Python | 802 | [Open](https://github.com/wbh604/UZI-Skill) |

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
