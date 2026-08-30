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

Updated: 2026-08-30T02:00:51.687Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | HEJustinSun/my-girlfriend-jingtian-latex | TeX | 3937 | [Open](https://github.com/HEJustinSun/my-girlfriend-jingtian-latex) |
| 2 | sapientinc/PRAXIST | Python | 3199 | [Open](https://github.com/sapientinc/PRAXIST) |
| 3 | wide-trace/open-higgsfield | TypeScript | 1070 | [Open](https://github.com/wide-trace/open-higgsfield) |
| 4 | bryllim/workout-guide | Astro | 1003 | [Open](https://github.com/bryllim/workout-guide) |
| 5 | XiaoDuoYa/codex-with-chatgpt | TypeScript | 951 | [Open](https://github.com/XiaoDuoYa/codex-with-chatgpt) |
| 6 | Tencent/WeMM-Embedding | Python | 911 | [Open](https://github.com/Tencent/WeMM-Embedding) |
| 7 | amosblomqvist/learn | TypeScript | 775 | [Open](https://github.com/amosblomqvist/learn) |
| 8 | MetaMask-AI/metamask-desktop | CSS | 737 | [Open](https://github.com/MetaMask-AI/metamask-desktop) |
| 9 | yding-git/personal-edge-proxy | Unknown | 681 | [Open](https://github.com/yding-git/personal-edge-proxy) |
| 10 | Nanako0129/sepia | Unknown | 669 | [Open](https://github.com/Nanako0129/sepia) |

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
