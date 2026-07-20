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

Updated: 2026-07-20T01:24:34.827Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | xai-org/grok-build | Rust | 20080 | [Open](https://github.com/xai-org/grok-build) |
| 2 | Fei-Away/Codex-Dream-Skin | JavaScript | 10322 | [Open](https://github.com/Fei-Away/Codex-Dream-Skin) |
| 3 | CluvexStudio/Aether | Rust | 1316 | [Open](https://github.com/CluvexStudio/Aether) |
| 4 | tandpfun/wardrobe | JavaScript | 1155 | [Open](https://github.com/tandpfun/wardrobe) |
| 5 | nethical6/conversation-steganography | Go | 826 | [Open](https://github.com/nethical6/conversation-steganography) |
| 6 | pablostanley/yoinks | TypeScript | 743 | [Open](https://github.com/pablostanley/yoinks) |
| 7 | MatinSenPai/Aether-GUI | TypeScript | 626 | [Open](https://github.com/MatinSenPai/Aether-GUI) |
| 8 | Blueturboguy07/cue | JavaScript | 614 | [Open](https://github.com/Blueturboguy07/cue) |
| 9 | v-modal/vmodal_sdk_flutter | Dart | 586 | [Open](https://github.com/v-modal/vmodal_sdk_flutter) |
| 10 | lopopolo/harness-engineering | Python | 579 | [Open](https://github.com/lopopolo/harness-engineering) |

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
