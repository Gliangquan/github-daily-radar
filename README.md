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

Updated: 2026-07-17T01:23:22.750Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | xai-org/grok-build | Rust | 12296 | [Open](https://github.com/xai-org/grok-build) |
| 2 | Fei-Away/Codex-Dream-Skin | JavaScript | 5503 | [Open](https://github.com/Fei-Away/Codex-Dream-Skin) |
| 3 | MDX-Tom/gpt-5.6-instruct | Python | 1674 | [Open](https://github.com/MDX-Tom/gpt-5.6-instruct) |
| 4 | littledivy/mimic | Python | 1104 | [Open](https://github.com/littledivy/mimic) |
| 5 | pixel-point/aval | TypeScript | 1047 | [Open](https://github.com/pixel-point/aval) |
| 6 | CluvexStudio/Aether | Rust | 935 | [Open](https://github.com/CluvexStudio/Aether) |
| 7 | x4gKing/Marzban-Panel | Dockerfile | 845 | [Open](https://github.com/x4gKing/Marzban-Panel) |
| 8 | mereyabdenbekuly-ctrl/clodex-ide | TypeScript | 829 | [Open](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| 9 | Kappaemme-git/codex-first-customer-finder-skill | Python | 761 | [Open](https://github.com/Kappaemme-git/codex-first-customer-finder-skill) |
| 10 | x4gKing/Marzban-Node | Dockerfile | 726 | [Open](https://github.com/x4gKing/Marzban-Node) |

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
