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

Updated: 2026-11-01T02:52:37.935Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | anhao/ai-pose-gallery-zh | TypeScript | 4732 | [Open](https://github.com/anhao/ai-pose-gallery-zh) |
| 2 | heydamir/unslop | JavaScript | 3614 | [Open](https://github.com/heydamir/unslop) |
| 3 | deepseek-ai/dsh-superagent-prototype | TypeScript | 3019 | [Open](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 4 | wangzan101/Mika | Kotlin | 2833 | [Open](https://github.com/wangzan101/Mika) |
| 5 | valentderah/totk-pc-recomp | C | 2666 | [Open](https://github.com/valentderah/totk-pc-recomp) |
| 6 | paipiange/nvzhuang | Go | 1740 | [Open](https://github.com/paipiange/nvzhuang) |
| 7 | aschmelyun/print-my-profile-pic | Unknown | 1648 | [Open](https://github.com/aschmelyun/print-my-profile-pic) |
| 8 | andyhuo520/digital-human-koubo | TypeScript | 1594 | [Open](https://github.com/andyhuo520/digital-human-koubo) |
| 9 | patch-gg/pixelfx | JavaScript | 1493 | [Open](https://github.com/patch-gg/pixelfx) |
| 10 | lexifina/global-law | HTML | 1426 | [Open](https://github.com/lexifina/global-law) |

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
