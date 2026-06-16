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

Updated: 2026-06-16T02:33:45.930Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | DietrichGebert/ponytail | JavaScript | 16892 | [Open](https://github.com/DietrichGebert/ponytail) |
| 2 | XiaomiMiMo/MiMo-Code | TypeScript | 9056 | [Open](https://github.com/XiaomiMiMo/MiMo-Code) |
| 3 | shadcn/improve | Unknown | 4884 | [Open](https://github.com/shadcn/improve) |
| 4 | omnigent-ai/omnigent | Python | 1962 | [Open](https://github.com/omnigent-ai/omnigent) |
| 5 | tamnd/kage | Go | 1561 | [Open](https://github.com/tamnd/kage) |
| 6 | SkyBlue997/enableMacosAI | Shell | 1289 | [Open](https://github.com/SkyBlue997/enableMacosAI) |
| 7 | lenucksi/aur-malware-check | Shell | 1186 | [Open](https://github.com/lenucksi/aur-malware-check) |
| 8 | levy-street/world-of-claudecraft | TypeScript | 796 | [Open](https://github.com/levy-street/world-of-claudecraft) |
| 9 | orange2ai/renwei-writing | Unknown | 678 | [Open](https://github.com/orange2ai/renwei-writing) |
| 10 | loc567/loc567 | C | 659 | [Open](https://github.com/loc567/loc567) |

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
