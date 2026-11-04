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

Updated: 2026-11-04T03:36:56.788Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/dsh-superagent-prototype | TypeScript | 17189 | [Open](https://github.com/deepseek-ai/dsh-superagent-prototype) |
| 2 | storytold/craft-anything | Rust | 8812 | [Open](https://github.com/storytold/craft-anything) |
| 3 | heydamir/unslop | JavaScript | 7650 | [Open](https://github.com/heydamir/unslop) |
| 4 | wangzan101/Mika | Kotlin | 6152 | [Open](https://github.com/wangzan101/Mika) |
| 5 | valentderah/totk-pc-recomp | C | 4555 | [Open](https://github.com/valentderah/totk-pc-recomp) |
| 6 | patch-gg/pixelfx | JavaScript | 4204 | [Open](https://github.com/patch-gg/pixelfx) |
| 7 | BryceYuuu/RUN | Python | 3180 | [Open](https://github.com/BryceYuuu/RUN) |
| 8 | Djihads80/Eglantine | C++ | 3111 | [Open](https://github.com/Djihads80/Eglantine) |
| 9 | paipiange/nvzhuang | Go | 2136 | [Open](https://github.com/paipiange/nvzhuang) |
| 10 | Verlintas/NOIR | Kotlin | 1804 | [Open](https://github.com/Verlintas/NOIR) |

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
