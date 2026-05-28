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

Updated: 2026-05-28T01:48:34.390Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | open-gsd/get-shit-done-redux | JavaScript | 1346 | [Open](https://github.com/open-gsd/get-shit-done-redux) |
| 2 | MoonshotAI/kimi-code | TypeScript | 889 | [Open](https://github.com/MoonshotAI/kimi-code) |
| 3 | 0xSero/codex-shim | Python | 660 | [Open](https://github.com/0xSero/codex-shim) |
| 4 | study8677/awesome-architecture | Vue | 571 | [Open](https://github.com/study8677/awesome-architecture) |
| 5 | zhaoyue4810/pianke | Python | 502 | [Open](https://github.com/zhaoyue4810/pianke) |
| 6 | UditAkhourii/adhd | TypeScript | 356 | [Open](https://github.com/UditAkhourii/adhd) |
| 7 | VILA-Lab/FigMirror | Python | 332 | [Open](https://github.com/VILA-Lab/FigMirror) |
| 8 | jianshuo/ccglass | JavaScript | 314 | [Open](https://github.com/jianshuo/ccglass) |
| 9 | yui540/comimi | TypeScript | 312 | [Open](https://github.com/yui540/comimi) |
| 10 | SigmaTradeLabs/aster-bot | JavaScript | 307 | [Open](https://github.com/SigmaTradeLabs/aster-bot) |

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
