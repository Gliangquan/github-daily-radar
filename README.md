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

Updated: 2026-10-05T02:40:39.290Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | rehan-remade/universal-modder | Python | 3242 | [Open](https://github.com/rehan-remade/universal-modder) |
| 2 | CopilotKit/OpenDots | TypeScript | 3227 | [Open](https://github.com/CopilotKit/OpenDots) |
| 3 | feder-cr/dots | Python | 2604 | [Open](https://github.com/feder-cr/dots) |
| 4 | nanaism/yomiyasu | Python | 1404 | [Open](https://github.com/nanaism/yomiyasu) |
| 5 | wy51ai/floorplan-3d | HTML | 1391 | [Open](https://github.com/wy51ai/floorplan-3d) |
| 6 | facebookincubator/muse-gadget-sdk | C | 1207 | [Open](https://github.com/facebookincubator/muse-gadget-sdk) |
| 7 | QingYunA/answer-me-with-html | JavaScript | 1098 | [Open](https://github.com/QingYunA/answer-me-with-html) |
| 8 | nykooi1/vibe-wise | Python | 1078 | [Open](https://github.com/nykooi1/vibe-wise) |
| 9 | CAPCOM-TD-OSS/REDox | C# | 1034 | [Open](https://github.com/CAPCOM-TD-OSS/REDox) |
| 10 | storytold/photocraft | Rust | 898 | [Open](https://github.com/storytold/photocraft) |

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
