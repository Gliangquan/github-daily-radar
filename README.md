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

Updated: 2026-09-03T01:45:44.951Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | XiaoDuoYa/codex-with-chatgpt | TypeScript | 2278 | [Open](https://github.com/XiaoDuoYa/codex-with-chatgpt) |
| 2 | Nanako0129/sepia | Python | 1591 | [Open](https://github.com/Nanako0129/sepia) |
| 3 | MetaMask-AI/metamask-desktop | CSS | 1230 | [Open](https://github.com/MetaMask-AI/metamask-desktop) |
| 4 | cbrock84/headcount | Markdown | 1117 | [Open](https://github.com/cbrock84/headcount) |
| 5 | GangTailorUpgrade/undress-service | Python | 934 | [Open](https://github.com/GangTailorUpgrade/undress-service) |
| 6 | chrisgreg/boop | Go | 687 | [Open](https://github.com/chrisgreg/boop) |
| 7 | rakanki911/DLSS5-Swapper | JavaScript | 616 | [Open](https://github.com/rakanki911/DLSS5-Swapper) |
| 8 | jlrouzies-fr/DLSS5-Feeder | C++ | 598 | [Open](https://github.com/jlrouzies-fr/DLSS5-Feeder) |
| 9 | 2akouwu/reverify | Python | 586 | [Open](https://github.com/2akouwu/reverify) |
| 10 | shadcn-ui/cn | TypeScript | 576 | [Open](https://github.com/shadcn-ui/cn) |

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
