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

Updated: 2026-07-27T01:44:37.090Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | slvDev/esp32-ai | Python | 1351 | [Open](https://github.com/slvDev/esp32-ai) |
| 2 | Jakubantalik/thinking-orbs | TypeScript | 1100 | [Open](https://github.com/Jakubantalik/thinking-orbs) |
| 3 | mikiarlo3/ai-copywriter | Python | 855 | [Open](https://github.com/mikiarlo3/ai-copywriter) |
| 4 | mshumer/Claude-of-Duty | JavaScript | 669 | [Open](https://github.com/mshumer/Claude-of-Duty) |
| 5 | gnipbao/story-to-handdrawn-video | JavaScript | 653 | [Open](https://github.com/gnipbao/story-to-handdrawn-video) |
| 6 | 0xhype/hyperliquid-tracker | TypeScript | 511 | [Open](https://github.com/0xhype/hyperliquid-tracker) |
| 7 | makecindy/cindy | TypeScript | 471 | [Open](https://github.com/makecindy/cindy) |
| 8 | hahhforest/pi-textbook | TypeScript | 456 | [Open](https://github.com/hahhforest/pi-textbook) |
| 9 | berabuddies/redis-poc | Python | 439 | [Open](https://github.com/berabuddies/redis-poc) |
| 10 | AdelanSupport/adelan-support | Python | 409 | [Open](https://github.com/AdelanSupport/adelan-support) |

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
