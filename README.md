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

Updated: 2026-07-25T01:23:38.880Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | andrewyng/openworker | Python | 3417 | [Open](https://github.com/andrewyng/openworker) |
| 2 | Vincentwei1021/video-shotcraft | TypeScript | 1438 | [Open](https://github.com/Vincentwei1021/video-shotcraft) |
| 3 | Jakubantalik/thinking-orbs | TypeScript | 932 | [Open](https://github.com/Jakubantalik/thinking-orbs) |
| 4 | Blaizzy/nativ | Swift | 860 | [Open](https://github.com/Blaizzy/nativ) |
| 5 | powerycy/goutoujunshi | Python | 801 | [Open](https://github.com/powerycy/goutoujunshi) |
| 6 | pireel/pireel | TypeScript | 710 | [Open](https://github.com/pireel/pireel) |
| 7 | gnipbao/story-to-handdrawn-video | JavaScript | 608 | [Open](https://github.com/gnipbao/story-to-handdrawn-video) |
| 8 | CatsJuice/sticker-forge | JavaScript | 522 | [Open](https://github.com/CatsJuice/sticker-forge) |
| 9 | 0xhype/hyperliquid-tracker | TypeScript | 509 | [Open](https://github.com/0xhype/hyperliquid-tracker) |
| 10 | Charles-0509/Grok-Register | Go | 429 | [Open](https://github.com/Charles-0509/Grok-Register) |

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
