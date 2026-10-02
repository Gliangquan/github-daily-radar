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

Updated: 2026-10-02T02:49:33.756Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/AIHOT | TypeScript | 4692 | [Open](https://github.com/KKKKhazix/AIHOT) |
| 2 | Louis-CFM/coucou | Swift | 2504 | [Open](https://github.com/Louis-CFM/coucou) |
| 3 | feder-cr/dots | Python | 2389 | [Open](https://github.com/feder-cr/dots) |
| 4 | dzhng/jevgrep | TypeScript | 2003 | [Open](https://github.com/dzhng/jevgrep) |
| 5 | rehan-remade/universal-modder | Python | 1599 | [Open](https://github.com/rehan-remade/universal-modder) |
| 6 | kaankiziltug/logo-design-skill | HTML | 1361 | [Open](https://github.com/kaankiziltug/logo-design-skill) |
| 7 | firelex/jeff | Python | 1271 | [Open](https://github.com/firelex/jeff) |
| 8 | yihui-dev/awesome-opus5-5-videos | Unknown | 1260 | [Open](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 9 | wy51ai/floorplan-3d | HTML | 1173 | [Open](https://github.com/wy51ai/floorplan-3d) |
| 10 | feitangyuan/onetake | Python | 1147 | [Open](https://github.com/feitangyuan/onetake) |

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
