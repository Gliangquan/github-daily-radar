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

Updated: 2026-09-30T02:41:12.182Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/AIHOT | TypeScript | 3315 | [Open](https://github.com/KKKKhazix/AIHOT) |
| 2 | mexicat/pdoom-video | TypeScript | 1988 | [Open](https://github.com/mexicat/pdoom-video) |
| 3 | tobi/disktree | Rust | 1915 | [Open](https://github.com/tobi/disktree) |
| 4 | Niko1221/Strata | C++ | 1830 | [Open](https://github.com/Niko1221/Strata) |
| 5 | dzhng/jevgrep | TypeScript | 1786 | [Open](https://github.com/dzhng/jevgrep) |
| 6 | firelex/jeff | Python | 1054 | [Open](https://github.com/firelex/jeff) |
| 7 | shihabal3amri/DiPlay | Kotlin | 1015 | [Open](https://github.com/shihabal3amri/DiPlay) |
| 8 | feitangyuan/onetake | Python | 985 | [Open](https://github.com/feitangyuan/onetake) |
| 9 | yihui-dev/awesome-opus5-5-videos | Unknown | 925 | [Open](https://github.com/yihui-dev/awesome-opus5-5-videos) |
| 10 | kaankiziltug/logo-design-skill | HTML | 852 | [Open](https://github.com/kaankiziltug/logo-design-skill) |

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
