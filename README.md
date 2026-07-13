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

Updated: 2026-07-13T01:24:39.275Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | withmarbleapp/os-taxonomy | JavaScript | 2702 | [Open](https://github.com/withmarbleapp/os-taxonomy) |
| 2 | Robbyant/lingbot-world-v2 | Python | 927 | [Open](https://github.com/Robbyant/lingbot-world-v2) |
| 3 | x4gKing/3x-ui-Upgrade | HTML | 890 | [Open](https://github.com/x4gKing/3x-ui-Upgrade) |
| 4 | Robbyant/lingbot-video | Python | 711 | [Open](https://github.com/Robbyant/lingbot-video) |
| 5 | mereyabdenbekuly-ctrl/clodex-ide | TypeScript | 639 | [Open](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| 6 | vinhhien112/Three.js-Object-Sculptor-Codex-Plugin | Python | 608 | [Open](https://github.com/vinhhien112/Three.js-Object-Sculptor-Codex-Plugin) |
| 7 | op7418/guizang-material-illustration | Unknown | 589 | [Open](https://github.com/op7418/guizang-material-illustration) |
| 8 | xiaotianfotos/homerail | TypeScript | 487 | [Open](https://github.com/xiaotianfotos/homerail) |
| 9 | Robbyant/lingbot-vla-v2 | Python | 472 | [Open](https://github.com/Robbyant/lingbot-vla-v2) |
| 10 | gostonx/uninstally | Swift | 418 | [Open](https://github.com/gostonx/uninstally) |

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
