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

Updated: 2026-07-18T01:15:49.317Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | xai-org/grok-build | Rust | 16496 | [Open](https://github.com/xai-org/grok-build) |
| 2 | Fei-Away/Codex-Dream-Skin | JavaScript | 8694 | [Open](https://github.com/Fei-Away/Codex-Dream-Skin) |
| 3 | pixel-point/aval | TypeScript | 1164 | [Open](https://github.com/pixel-point/aval) |
| 4 | littledivy/mimic | Python | 1149 | [Open](https://github.com/littledivy/mimic) |
| 5 | CluvexStudio/Aether | Rust | 1144 | [Open](https://github.com/CluvexStudio/Aether) |
| 6 | x4gKing/Marzban-Panel | Dockerfile | 914 | [Open](https://github.com/x4gKing/Marzban-Panel) |
| 7 | tandpfun/wardrobe | JavaScript | 897 | [Open](https://github.com/tandpfun/wardrobe) |
| 8 | mereyabdenbekuly-ctrl/clodex-ide | TypeScript | 833 | [Open](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| 9 | Kappaemme-git/codex-first-customer-finder-skill | Python | 789 | [Open](https://github.com/Kappaemme-git/codex-first-customer-finder-skill) |
| 10 | x4gKing/Marzban-Node | Dockerfile | 776 | [Open](https://github.com/x4gKing/Marzban-Node) |

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
