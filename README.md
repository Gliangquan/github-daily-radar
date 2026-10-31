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

Updated: 2026-10-31T02:57:37.984Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | unclebob/ub-mode | Unknown | 5417 | [Open](https://github.com/unclebob/ub-mode) |
| 2 | anhao/ai-pose-gallery-zh | TypeScript | 4024 | [Open](https://github.com/anhao/ai-pose-gallery-zh) |
| 3 | interplains/Zero-Breach-Toolkit | Python | 3882 | [Open](https://github.com/interplains/Zero-Breach-Toolkit) |
| 4 | designfuchen/word-atlas | TypeScript | 3392 | [Open](https://github.com/designfuchen/word-atlas) |
| 5 | ccch1mneyyy/dsh-Go | Dart | 2639 | [Open](https://github.com/ccch1mneyyy/dsh-Go) |
| 6 | valentderah/totk-pc-recomp | C | 1677 | [Open](https://github.com/valentderah/totk-pc-recomp) |
| 7 | andyhuo520/digital-human-koubo | TypeScript | 1558 | [Open](https://github.com/andyhuo520/digital-human-koubo) |
| 8 | wangzan101/Mika | Kotlin | 1504 | [Open](https://github.com/wangzan101/Mika) |
| 9 | qybaihe/bla | TypeScript | 1445 | [Open](https://github.com/qybaihe/bla) |
| 10 | heydamir/unslop | JavaScript | 1394 | [Open](https://github.com/heydamir/unslop) |

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
