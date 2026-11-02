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

Updated: 2026-11-02T02:59:31.871Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/dsh-superagent-prototype | TypeScript | 8520 | [Open](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 2 | anhao/ai-pose-gallery-zh | TypeScript | 5183 | [Open](https://github.com/anhao/ai-pose-gallery-zh) |
| 3 | heydamir/unslop | JavaScript | 4969 | [Open](https://github.com/heydamir/unslop) |
| 4 | wangzan101/Mika | Kotlin | 4060 | [Open](https://github.com/wangzan101/Mika) |
| 5 | valentderah/totk-pc-recomp | C | 3257 | [Open](https://github.com/valentderah/totk-pc-recomp) |
| 6 | patch-gg/pixelfx | JavaScript | 2744 | [Open](https://github.com/patch-gg/pixelfx) |
| 7 | Djihads80/Eglantine | C++ | 2043 | [Open](https://github.com/Djihads80/Eglantine) |
| 8 | paipiange/nvzhuang | Go | 1899 | [Open](https://github.com/paipiange/nvzhuang) |
| 9 | haydenschmitty/floorplan | JavaScript | 1840 | [Open](https://github.com/haydenschmitty/floorplan) |
| 10 | aschmelyun/print-my-profile-pic | Unknown | 1702 | [Open](https://github.com/aschmelyun/print-my-profile-pic) |

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
