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

Updated: 2026-07-21T01:21:07.948Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Fei-Away/Codex-Dream-Skin | JavaScript | 11074 | [Open](https://github.com/Fei-Away/Codex-Dream-Skin) |
| 2 | tandpfun/wardrobe | JavaScript | 1219 | [Open](https://github.com/tandpfun/wardrobe) |
| 3 | hoainho/img2threejs | Python | 1019 | [Open](https://github.com/hoainho/img2threejs) |
| 4 | nethical6/conversation-steganography | Go | 881 | [Open](https://github.com/nethical6/conversation-steganography) |
| 5 | pablostanley/yoinks | TypeScript | 865 | [Open](https://github.com/pablostanley/yoinks) |
| 6 | lopopolo/harness-engineering | Python | 773 | [Open](https://github.com/lopopolo/harness-engineering) |
| 7 | Blueturboguy07/cue | JavaScript | 660 | [Open](https://github.com/Blueturboguy07/cue) |
| 8 | v-modal/vmodal_sdk_flutter | Dart | 622 | [Open](https://github.com/v-modal/vmodal_sdk_flutter) |
| 9 | xiejunjie524/handdraw-story-video | Python | 497 | [Open](https://github.com/xiejunjie524/handdraw-story-video) |
| 10 | EthanXiang777/circuit-framework | Python | 486 | [Open](https://github.com/EthanXiang777/circuit-framework) |

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
