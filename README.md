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

Updated: 2026-07-22T01:19:41.127Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | lopopolo/harness-engineering | Python | 1605 | [Open](https://github.com/lopopolo/harness-engineering) |
| 2 | tandpfun/wardrobe | JavaScript | 1285 | [Open](https://github.com/tandpfun/wardrobe) |
| 3 | pablostanley/yoinks | TypeScript | 962 | [Open](https://github.com/pablostanley/yoinks) |
| 4 | nethical6/conversation-steganography | Go | 911 | [Open](https://github.com/nethical6/conversation-steganography) |
| 5 | v-modal/vmodal_sdk_flutter | Dart | 777 | [Open](https://github.com/v-modal/vmodal_sdk_flutter) |
| 6 | MIgHTy-alIeN/MEV-Arbitrage-Bot | Solidity | 739 | [Open](https://github.com/MIgHTy-alIeN/MEV-Arbitrage-Bot) |
| 7 | Blaizzy/nativ | Swift | 620 | [Open](https://github.com/Blaizzy/nativ) |
| 8 | xiejunjie524/handdraw-story-video | Python | 584 | [Open](https://github.com/xiejunjie524/handdraw-story-video) |
| 9 | EthanXiang777/circuit-framework | Python | 487 | [Open](https://github.com/EthanXiang777/circuit-framework) |
| 10 | smixs/pohuy | Unknown | 468 | [Open](https://github.com/smixs/pohuy) |

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
