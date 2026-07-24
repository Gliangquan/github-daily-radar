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

Updated: 2026-07-24T01:23:04.144Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lopopolo/harness-engineering | Python | 2275 | [Open](https://github.com/lopopolo/harness-engineering) |
| 2 | andrewyng/openworker | Python | 1246 | [Open](https://github.com/andrewyng/openworker) |
| 3 | Vincentwei1021/video-shotcraft | TypeScript | 937 | [Open](https://github.com/Vincentwei1021/video-shotcraft) |
| 4 | Jakubantalik/thinking-orbs | TypeScript | 827 | [Open](https://github.com/Jakubantalik/thinking-orbs) |
| 5 | Blaizzy/nativ | Swift | 816 | [Open](https://github.com/Blaizzy/nativ) |
| 6 | powerycy/goutoujunshi | Python | 657 | [Open](https://github.com/powerycy/goutoujunshi) |
| 7 | pireel/pireel | TypeScript | 657 | [Open](https://github.com/pireel/pireel) |
| 8 | xiejunjie524/handdraw-story-video | Python | 634 | [Open](https://github.com/xiejunjie524/handdraw-story-video) |
| 9 | gnipbao/story-to-handdrawn-video | JavaScript | 559 | [Open](https://github.com/gnipbao/story-to-handdrawn-video) |
| 10 | 0xhype/hyperliquid-tracker | TypeScript | 504 | [Open](https://github.com/0xhype/hyperliquid-tracker) |

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
