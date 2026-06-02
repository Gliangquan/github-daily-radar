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

Updated: 2026-06-02T02:15:14.595Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pewdiepie-archdaemon/odysseus | JavaScript | 21409 | [Open](https://github.com/pewdiepie-archdaemon/odysseus) |
| 2 | op7418/guizang-social-card-skill | HTML | 2433 | [Open](https://github.com/op7418/guizang-social-card-skill) |
| 3 | helloianneo/ian-xiaohei-illustrations | Unknown | 1630 | [Open](https://github.com/helloianneo/ian-xiaohei-illustrations) |
| 4 | GordenSun/GordenPPTSkill | Python | 1432 | [Open](https://github.com/GordenSun/GordenPPTSkill) |
| 5 | Sophomoresty/gemini-web2api | Python | 1067 | [Open](https://github.com/Sophomoresty/gemini-web2api) |
| 6 | MatinSenPai/SenPaiScanner | Go | 857 | [Open](https://github.com/MatinSenPai/SenPaiScanner) |
| 7 | Michaelliv/pi-dynamic-workflows | TypeScript | 705 | [Open](https://github.com/Michaelliv/pi-dynamic-workflows) |
| 8 | withkynam/vibecode-pro-max-kit | JavaScript | 700 | [Open](https://github.com/withkynam/vibecode-pro-max-kit) |
| 9 | asz798838958/aBaiAutoplus | Python | 663 | [Open](https://github.com/asz798838958/aBaiAutoplus) |
| 10 | 2aronS/Duel-Agents | TypeScript | 640 | [Open](https://github.com/2aronS/Duel-Agents) |

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
