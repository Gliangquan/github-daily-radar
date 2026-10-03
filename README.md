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

Updated: 2026-10-03T02:36:10.347Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/AIHOT | TypeScript | 4984 | [Open](https://github.com/KKKKhazix/AIHOT) |
| 2 | Louis-CFM/coucou | Swift | 2999 | [Open](https://github.com/Louis-CFM/coucou) |
| 3 | feder-cr/dots | Python | 2505 | [Open](https://github.com/feder-cr/dots) |
| 4 | rehan-remade/universal-modder | Python | 2168 | [Open](https://github.com/rehan-remade/universal-modder) |
| 5 | CopilotKit/OpenDots | TypeScript | 1521 | [Open](https://github.com/CopilotKit/OpenDots) |
| 6 | yihui-dev/awesome-opus5-5-videos | Unknown | 1435 | [Open](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 7 | firelex/jeff | Python | 1326 | [Open](https://github.com/firelex/jeff) |
| 8 | wy51ai/floorplan-3d | HTML | 1318 | [Open](https://github.com/wy51ai/floorplan-3d) |
| 9 | nanaism/yomiyasu | Python | 1193 | [Open](https://github.com/nanaism/yomiyasu) |
| 10 | edenfunf/reelmimic | JavaScript | 964 | [Open](https://github.com/edenfunf/reelmimic) |

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
