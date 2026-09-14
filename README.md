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

Updated: 2026-09-14T02:00:06.830Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | openai/NavierStokesAndEuler | Lean | 1858 | [Open](https://github.com/openai/NavierStokesAndEuler) |
| 2 | Edge0-AI/Edge0 | Python | 1609 | [Open](https://github.com/Edge0-AI/Edge0) |
| 3 | Vincentwei1021/anything2explainer | TypeScript | 1174 | [Open](https://github.com/Vincentwei1021/anything2explainer) |
| 4 | gazijarin/itsgiving | Python | 816 | [Open](https://github.com/gazijarin/itsgiving) |
| 5 | sumimakito/Mac-Duo | Swift | 794 | [Open](https://github.com/sumimakito/Mac-Duo) |
| 6 | SpaceDudem/text-humanizer | Python | 731 | [Open](https://github.com/SpaceDudem/text-humanizer) |
| 7 | Colafornia/short-video-generator-AI | Python | 720 | [Open](https://github.com/Colafornia/short-video-generator-AI) |
| 8 | angusdevgo/IDM_Pro_Tool | C# | 679 | [Open](https://github.com/angusdevgo/IDM_Pro_Tool) |
| 9 | Faizpi/bank-sampah | PHP | 646 | [Open](https://github.com/Faizpi/bank-sampah) |
| 10 | rizqinrr/viserys-agent | JavaScript | 628 | [Open](https://github.com/rizqinrr/viserys-agent) |

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
