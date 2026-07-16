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

Updated: 2026-07-16T01:19:48.059Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | xai-org/grok-build | Rust | 3009 | [Open](https://github.com/xai-org/grok-build) |
| 2 | MDX-Tom/gpt-5.6-instruct | Python | 1341 | [Open](https://github.com/MDX-Tom/gpt-5.6-instruct) |
| 3 | littledivy/mimic | Python | 1021 | [Open](https://github.com/littledivy/mimic) |
| 4 | mereyabdenbekuly-ctrl/clodex-ide | TypeScript | 810 | [Open](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| 5 | AlephAITech/WorkBuddyGuide | Python | 802 | [Open](https://github.com/AlephAITech/WorkBuddyGuide) |
| 6 | x4gKing/Marzban-Panel | Dockerfile | 775 | [Open](https://github.com/x4gKing/Marzban-Panel) |
| 7 | Kappaemme-git/codex-first-customer-finder-skill | Python | 707 | [Open](https://github.com/Kappaemme-git/codex-first-customer-finder-skill) |
| 8 | pengchujin/jzsub | Python | 675 | [Open](https://github.com/pengchujin/jzsub) |
| 9 | x4gKing/Marzban-Node | Dockerfile | 666 | [Open](https://github.com/x4gKing/Marzban-Node) |
| 10 | William-Lu-stack/Flawless | Python | 636 | [Open](https://github.com/William-Lu-stack/Flawless) |

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
