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

Updated: 2026-07-26T01:26:51.401Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | andrewyng/openworker | Python | 5008 | [Open](https://github.com/andrewyng/openworker) |
| 2 | Jakubantalik/thinking-orbs | TypeScript | 1007 | [Open](https://github.com/Jakubantalik/thinking-orbs) |
| 3 | Blaizzy/nativ | Swift | 884 | [Open](https://github.com/Blaizzy/nativ) |
| 4 | powerycy/goutoujunshi | Python | 876 | [Open](https://github.com/powerycy/goutoujunshi) |
| 5 | slvDev/esp32-ai | Python | 810 | [Open](https://github.com/slvDev/esp32-ai) |
| 6 | pireel/pireel | TypeScript | 753 | [Open](https://github.com/pireel/pireel) |
| 7 | gnipbao/story-to-handdrawn-video | JavaScript | 624 | [Open](https://github.com/gnipbao/story-to-handdrawn-video) |
| 8 | mikiarlo3/ai-copywriter | Python | 586 | [Open](https://github.com/mikiarlo3/ai-copywriter) |
| 9 | CatsJuice/sticker-forge | JavaScript | 573 | [Open](https://github.com/CatsJuice/sticker-forge) |
| 10 | zeus-panel/ZEUS-PANEL | JavaScript | 537 | [Open](https://github.com/zeus-panel/ZEUS-PANEL) |

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
