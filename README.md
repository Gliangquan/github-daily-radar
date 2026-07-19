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

Updated: 2026-07-19T01:21:21.386Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | xai-org/grok-build | Rust | 18846 | [Open](https://github.com/xai-org/grok-build) |
| 2 | Fei-Away/Codex-Dream-Skin | JavaScript | 9750 | [Open](https://github.com/Fei-Away/Codex-Dream-Skin) |
| 3 | CluvexStudio/Aether | Rust | 1255 | [Open](https://github.com/CluvexStudio/Aether) |
| 4 | pixel-point/aval | TypeScript | 1210 | [Open](https://github.com/pixel-point/aval) |
| 5 | littledivy/mimic | Python | 1174 | [Open](https://github.com/littledivy/mimic) |
| 6 | tandpfun/wardrobe | JavaScript | 1050 | [Open](https://github.com/tandpfun/wardrobe) |
| 7 | oil-oil/beautify-github-readme | Python | 816 | [Open](https://github.com/oil-oil/beautify-github-readme) |
| 8 | nethical6/conversation-steganography | Go | 696 | [Open](https://github.com/nethical6/conversation-steganography) |
| 9 | KubeezMedia/kubeez-scroll-world-video | JavaScript | 653 | [Open](https://github.com/KubeezMedia/kubeez-scroll-world-video) |
| 10 | MatinSenPai/Aether-GUI | TypeScript | 597 | [Open](https://github.com/MatinSenPai/Aether-GUI) |

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
