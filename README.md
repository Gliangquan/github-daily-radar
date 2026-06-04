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

Updated: 2026-06-04T02:29:45.119Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pewdiepie-archdaemon/odysseus | JavaScript | 44171 | [Open](https://github.com/pewdiepie-archdaemon/odysseus) |
| 2 | Gloridust/WechatOnCloud | TypeScript | 1948 | [Open](https://github.com/Gloridust/WechatOnCloud) |
| 3 | b-nnett/goose | Rust | 1474 | [Open](https://github.com/b-nnett/goose) |
| 4 | asz798838958/aBaiAutoplus | Python | 1402 | [Open](https://github.com/asz798838958/aBaiAutoplus) |
| 5 | zgwl/chinese-buy-us-stock-guide | Unknown | 1158 | [Open](https://github.com/zgwl/chinese-buy-us-stock-guide) |
| 6 | cpaczek/skylight | TypeScript | 814 | [Open](https://github.com/cpaczek/skylight) |
| 7 | ClaudioDrews/memory-os | Python | 760 | [Open](https://github.com/ClaudioDrews/memory-os) |
| 8 | SenhorH/tab-labeler | TypeScript | 561 | [Open](https://github.com/SenhorH/tab-labeler) |
| 9 | qiuqiubuchongle-cloud/chokepoint-atlas | Python | 529 | [Open](https://github.com/qiuqiubuchongle-cloud/chokepoint-atlas) |
| 10 | liyue-aigc/female-portrait-director | Unknown | 505 | [Open](https://github.com/liyue-aigc/female-portrait-director) |

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
