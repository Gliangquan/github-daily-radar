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

Updated: 2026-11-03T04:17:54.452Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/dsh-superagent-prototype | TypeScript | 14022 | [Open](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 2 | heydamir/unslop | JavaScript | 6460 | [Open](https://github.com/heydamir/unslop) |
| 3 | wangzan101/Mika | Kotlin | 5521 | [Open](https://github.com/wangzan101/Mika) |
| 4 | storytold/craft-anything | Rust | 4882 | [Open](https://github.com/storytold/craft-anything) |
| 5 | valentderah/totk-pc-recomp | C | 4101 | [Open](https://github.com/valentderah/totk-pc-recomp) |
| 6 | patch-gg/pixelfx | JavaScript | 3624 | [Open](https://github.com/patch-gg/pixelfx) |
| 7 | Djihads80/Eglantine | C++ | 2598 | [Open](https://github.com/Djihads80/Eglantine) |
| 8 | paipiange/nvzhuang | Go | 2059 | [Open](https://github.com/paipiange/nvzhuang) |
| 9 | BryceYuuu/RUN | Python | 1777 | [Open](https://github.com/BryceYuuu/RUN) |
| 10 | lexifina/global-law | HTML | 1710 | [Open](https://github.com/lexifina/global-law) |

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
