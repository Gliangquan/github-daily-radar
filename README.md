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

Updated: 2026-06-03T02:33:41.424Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | pewdiepie-archdaemon/odysseus | JavaScript | 33804 | [Open](https://github.com/pewdiepie-archdaemon/odysseus) |
| 2 | Gloridust/WechatOnCloud | TypeScript | 1507 | [Open](https://github.com/Gloridust/WechatOnCloud) |
| 3 | Sophomoresty/gemini-web2api | Python | 1263 | [Open](https://github.com/Sophomoresty/gemini-web2api) |
| 4 | asz798838958/aBaiAutoplus | Python | 1071 | [Open](https://github.com/asz798838958/aBaiAutoplus) |
| 5 | MatinSenPai/SenPaiScanner | Go | 905 | [Open](https://github.com/MatinSenPai/SenPaiScanner) |
| 6 | b-nnett/goose | Rust | 767 | [Open](https://github.com/b-nnett/goose) |
| 7 | Michaelliv/pi-dynamic-workflows | TypeScript | 740 | [Open](https://github.com/Michaelliv/pi-dynamic-workflows) |
| 8 | 2aronS/Duel-Agents | TypeScript | 683 | [Open](https://github.com/2aronS/Duel-Agents) |
| 9 | ClaudioDrews/memory-os | Python | 641 | [Open](https://github.com/ClaudioDrews/memory-os) |
| 10 | liyue-aigc/female-portrait-director | Unknown | 488 | [Open](https://github.com/liyue-aigc/female-portrait-director) |

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
