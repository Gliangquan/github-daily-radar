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

Updated: 2026-08-31T01:56:53.921Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | sapientinc/PRAXIST | Python | 4531 | [Open](https://github.com/sapientinc/PRAXIST) |
| 2 | HEJustinSun/my-girlfriend-jingtian-latex | TeX | 4146 | [Open](https://github.com/HEJustinSun/my-girlfriend-jingtian-latex) |
| 3 | XiaoDuoYa/codex-with-chatgpt | TypeScript | 1423 | [Open](https://github.com/XiaoDuoYa/codex-with-chatgpt) |
| 4 | MetaMask-AI/metamask-desktop | CSS | 1227 | [Open](https://github.com/MetaMask-AI/metamask-desktop) |
| 5 | wide-trace/open-higgsfield | TypeScript | 1084 | [Open](https://github.com/wide-trace/open-higgsfield) |
| 6 | Tencent/WeMM-Embedding | Python | 939 | [Open](https://github.com/Tencent/WeMM-Embedding) |
| 7 | Nanako0129/sepia | Unknown | 923 | [Open](https://github.com/Nanako0129/sepia) |
| 8 | tradecatlabs/shulihuazixuecongshu | Python | 797 | [Open](https://github.com/tradecatlabs/shulihuazixuecongshu) |
| 9 | jub0t/WolfCut | TypeScript | 717 | [Open](https://github.com/jub0t/WolfCut) |
| 10 | cbrock84/headcount | Markdown | 706 | [Open](https://github.com/cbrock84/headcount) |

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
