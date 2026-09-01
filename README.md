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

Updated: 2026-09-01T02:18:43.685Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | sapientinc/PRAXIST | Python | 5455 | [Open](https://github.com/sapientinc/PRAXIST) |
| 2 | HEJustinSun/my-girlfriend-jingtian-latex | TeX | 4194 | [Open](https://github.com/HEJustinSun/my-girlfriend-jingtian-latex) |
| 3 | XiaoDuoYa/codex-with-chatgpt | TypeScript | 1870 | [Open](https://github.com/XiaoDuoYa/codex-with-chatgpt) |
| 4 | Nanako0129/sepia | Unknown | 1244 | [Open](https://github.com/Nanako0129/sepia) |
| 5 | MetaMask-AI/metamask-desktop | CSS | 1228 | [Open](https://github.com/MetaMask-AI/metamask-desktop) |
| 6 | wide-trace/open-higgsfield | TypeScript | 1146 | [Open](https://github.com/wide-trace/open-higgsfield) |
| 7 | cbrock84/headcount | Markdown | 858 | [Open](https://github.com/cbrock84/headcount) |
| 8 | tradecatlabs/shulihuazixuecongshu | Python | 826 | [Open](https://github.com/tradecatlabs/shulihuazixuecongshu) |
| 9 | crmne/fastpotify | Rust | 760 | [Open](https://github.com/crmne/fastpotify) |
| 10 | jprx/darwin-vm | Python | 695 | [Open](https://github.com/jprx/darwin-vm) |

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
