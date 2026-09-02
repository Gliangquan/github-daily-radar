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

Updated: 2026-09-02T01:40:34.351Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | sapientinc/PRAXIST | Python | 6201 | [Open](https://github.com/sapientinc/PRAXIST) |
| 2 | XiaoDuoYa/codex-with-chatgpt | TypeScript | 2140 | [Open](https://github.com/XiaoDuoYa/codex-with-chatgpt) |
| 3 | crmne/fastpotify | Rust | 1546 | [Open](https://github.com/crmne/fastpotify) |
| 4 | Nanako0129/sepia | Python | 1357 | [Open](https://github.com/Nanako0129/sepia) |
| 5 | MetaMask-AI/metamask-desktop | CSS | 1229 | [Open](https://github.com/MetaMask-AI/metamask-desktop) |
| 6 | damejan80/tokentab | Python | 1138 | [Open](https://github.com/damejan80/tokentab) |
| 7 | cbrock84/headcount | Markdown | 955 | [Open](https://github.com/cbrock84/headcount) |
| 8 | jprx/darwin-vm | Python | 881 | [Open](https://github.com/jprx/darwin-vm) |
| 9 | tradecatlabs/shulihuazixuecongshu | Python | 844 | [Open](https://github.com/tradecatlabs/shulihuazixuecongshu) |
| 10 | GangTailorUpgrade/CoomeRtool | Python | 823 | [Open](https://github.com/GangTailorUpgrade/CoomeRtool) |

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
