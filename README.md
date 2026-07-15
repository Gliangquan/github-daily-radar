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

Updated: 2026-07-15T01:10:42.735Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MDX-Tom/gpt-5.6-instruct | Python | 1009 | [Open](https://github.com/MDX-Tom/gpt-5.6-instruct) |
| 2 | vinhhien112/Three.js-Object-Sculptor-Codex-Plugin | Python | 965 | [Open](https://github.com/vinhhien112/Three.js-Object-Sculptor-Codex-Plugin) |
| 3 | littledivy/mimic | Python | 909 | [Open](https://github.com/littledivy/mimic) |
| 4 | mereyabdenbekuly-ctrl/clodex-ide | TypeScript | 801 | [Open](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| 5 | AlephAITech/WorkBuddyGuide | Python | 687 | [Open](https://github.com/AlephAITech/WorkBuddyGuide) |
| 6 | x4gKing/Marzban-Panel | Dockerfile | 668 | [Open](https://github.com/x4gKing/Marzban-Panel) |
| 7 | William-Lu-stack/Flawless | Python | 616 | [Open](https://github.com/William-Lu-stack/Flawless) |
| 8 | Kappaemme-git/codex-first-customer-finder-skill | Python | 599 | [Open](https://github.com/Kappaemme-git/codex-first-customer-finder-skill) |
| 9 | cosmtrek/mindwalk | Go | 577 | [Open](https://github.com/cosmtrek/mindwalk) |
| 10 | x4gKing/Marzban-Node | Dockerfile | 566 | [Open](https://github.com/x4gKing/Marzban-Node) |

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
