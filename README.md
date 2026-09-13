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

Updated: 2026-09-13T01:42:14.522Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | sdli1995/dlssg_for_sm86 | Unknown | 2188 | [Open](https://github.com/sdli1995/dlssg_for_sm86) |
| 2 | openai/NavierStokesAndEuler | Lean | 1826 | [Open](https://github.com/openai/NavierStokesAndEuler) |
| 3 | EverettFish/holo-card-studio | Python | 1470 | [Open](https://github.com/EverettFish/holo-card-studio) |
| 4 | Edge0-AI/Edge0 | Python | 1448 | [Open](https://github.com/Edge0-AI/Edge0) |
| 5 | Vincentwei1021/anything2explainer | TypeScript | 1070 | [Open](https://github.com/Vincentwei1021/anything2explainer) |
| 6 | achimala/dream-loop | JavaScript | 921 | [Open](https://github.com/achimala/dream-loop) |
| 7 | Faizpi/bank-sampah | PHP | 921 | [Open](https://github.com/Faizpi/bank-sampah) |
| 8 | gazijarin/itsgiving | Python | 790 | [Open](https://github.com/gazijarin/itsgiving) |
| 9 | sumimakito/Mac-Duo | Swift | 692 | [Open](https://github.com/sumimakito/Mac-Duo) |
| 10 | SpaceDudem/text-humanizer | Python | 662 | [Open](https://github.com/SpaceDudem/text-humanizer) |

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
