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

Updated: 2026-06-01T02:14:58.777Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pewdiepie-archdaemon/odysseus | JavaScript | 8276 | [Open](https://github.com/pewdiepie-archdaemon/odysseus) |
| 2 | op7418/guizang-social-card-skill | HTML | 2072 | [Open](https://github.com/op7418/guizang-social-card-skill) |
| 3 | helloianneo/ian-xiaohei-illustrations | Unknown | 1448 | [Open](https://github.com/helloianneo/ian-xiaohei-illustrations) |
| 4 | GordenSun/GordenPPTSkill | Python | 907 | [Open](https://github.com/GordenSun/GordenPPTSkill) |
| 5 | Sophomoresty/gemini-web2api | Python | 907 | [Open](https://github.com/Sophomoresty/gemini-web2api) |
| 6 | MatinSenPai/SenPaiScanner | Go | 803 | [Open](https://github.com/MatinSenPai/SenPaiScanner) |
| 7 | withkynam/vibecode-pro-max-kit | JavaScript | 668 | [Open](https://github.com/withkynam/vibecode-pro-max-kit) |
| 8 | Michaelliv/pi-dynamic-workflows | TypeScript | 634 | [Open](https://github.com/Michaelliv/pi-dynamic-workflows) |
| 9 | 2aronS/Duel-Agents | TypeScript | 574 | [Open](https://github.com/2aronS/Duel-Agents) |
| 10 | ace-trump-tech/DeltaForce-OBS-Locker | Python | 494 | [Open](https://github.com/ace-trump-tech/DeltaForce-OBS-Locker) |

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
