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

Updated: 2026-09-12T01:50:35.336Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | sdli1995/dlssg_for_sm86 | Unknown | 1780 | [Open](https://github.com/sdli1995/dlssg_for_sm86) |
| 2 | openai/NavierStokesAndEuler | Lean | 1778 | [Open](https://github.com/openai/NavierStokesAndEuler) |
| 3 | EverettFish/holo-card-studio | Python | 1445 | [Open](https://github.com/EverettFish/holo-card-studio) |
| 4 | Edge0-AI/Edge0 | Python | 1353 | [Open](https://github.com/Edge0-AI/Edge0) |
| 5 | Vincentwei1021/anything2explainer | TypeScript | 940 | [Open](https://github.com/Vincentwei1021/anything2explainer) |
| 6 | Faizpi/bank-sampah | PHP | 919 | [Open](https://github.com/Faizpi/bank-sampah) |
| 7 | achimala/dream-loop | JavaScript | 852 | [Open](https://github.com/achimala/dream-loop) |
| 8 | jtydhr88/screenwriting-skills | Unknown | 748 | [Open](https://github.com/jtydhr88/screenwriting-skills) |
| 9 | gazijarin/itsgiving | Python | 717 | [Open](https://github.com/gazijarin/itsgiving) |
| 10 | truanayangi-com/truanayangi | TypeScript | 568 | [Open](https://github.com/truanayangi-com/truanayangi) |

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
