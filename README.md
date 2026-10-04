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

Updated: 2026-10-04T03:07:13.440Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/AIHOT | TypeScript | 5455 | [Open](https://github.com/KKKKhazix/AIHOT) |
| 2 | rehan-remade/universal-modder | Python | 2652 | [Open](https://github.com/rehan-remade/universal-modder) |
| 3 | CopilotKit/OpenDots | TypeScript | 2584 | [Open](https://github.com/CopilotKit/OpenDots) |
| 4 | feder-cr/dots | Python | 2575 | [Open](https://github.com/feder-cr/dots) |
| 5 | wy51ai/floorplan-3d | HTML | 1363 | [Open](https://github.com/wy51ai/floorplan-3d) |
| 6 | firelex/jeff | Python | 1351 | [Open](https://github.com/firelex/jeff) |
| 7 | nanaism/yomiyasu | Python | 1326 | [Open](https://github.com/nanaism/yomiyasu) |
| 8 | edenfunf/reelmimic | JavaScript | 1119 | [Open](https://github.com/edenfunf/reelmimic) |
| 9 | CAPCOM-TD-OSS/REDox | C# | 989 | [Open](https://github.com/CAPCOM-TD-OSS/REDox) |
| 10 | facebookincubator/muse-gadget-sdk | C | 901 | [Open](https://github.com/facebookincubator/muse-gadget-sdk) |

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
