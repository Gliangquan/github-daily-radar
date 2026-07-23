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

Updated: 2026-07-23T01:27:14.376Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lopopolo/harness-engineering | Python | 2192 | [Open](https://github.com/lopopolo/harness-engineering) |
| 2 | nethical6/conversation-steganography | Go | 985 | [Open](https://github.com/nethical6/conversation-steganography) |
| 3 | MIgHTy-alIeN/MEV-Arbitrage-Bot | Solidity | 920 | [Open](https://github.com/MIgHTy-alIeN/MEV-Arbitrage-Bot) |
| 4 | Blaizzy/nativ | Swift | 760 | [Open](https://github.com/Blaizzy/nativ) |
| 5 | Jakubantalik/thinking-orbs | TypeScript | 621 | [Open](https://github.com/Jakubantalik/thinking-orbs) |
| 6 | xiejunjie524/handdraw-story-video | Python | 620 | [Open](https://github.com/xiejunjie524/handdraw-story-video) |
| 7 | smixs/pohuy | Unknown | 538 | [Open](https://github.com/smixs/pohuy) |
| 8 | powerycy/goutoujunshi | Python | 522 | [Open](https://github.com/powerycy/goutoujunshi) |
| 9 | Vincentwei1021/video-shotcraft | TypeScript | 521 | [Open](https://github.com/Vincentwei1021/video-shotcraft) |
| 10 | 0xhype/hyperliquid-tracker | TypeScript | 503 | [Open](https://github.com/0xhype/hyperliquid-tracker) |

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
