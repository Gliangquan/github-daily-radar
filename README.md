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

Updated: 2026-10-01T02:45:55.547Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/AIHOT | TypeScript | 4126 | [Open](https://github.com/KKKKhazix/AIHOT) |
| 2 | feder-cr/dots | Python | 1937 | [Open](https://github.com/feder-cr/dots) |
| 3 | dzhng/jevgrep | TypeScript | 1908 | [Open](https://github.com/dzhng/jevgrep) |
| 4 | Louis-CFM/coucou | Swift | 1419 | [Open](https://github.com/Louis-CFM/coucou) |
| 5 | firelex/jeff | Python | 1197 | [Open](https://github.com/firelex/jeff) |
| 6 | kaankiziltug/logo-design-skill | HTML | 1135 | [Open](https://github.com/kaankiziltug/logo-design-skill) |
| 7 | yihui-dev/awesome-opus5-5-videos | Unknown | 1100 | [Open](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 8 | feitangyuan/onetake | Python | 1059 | [Open](https://github.com/feitangyuan/onetake) |
| 9 | wy51ai/floorplan-3d | HTML | 974 | [Open](https://github.com/wy51ai/floorplan-3d) |
| 10 | rehan-remade/universal-modder | Python | 890 | [Open](https://github.com/rehan-remade/universal-modder) |

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
