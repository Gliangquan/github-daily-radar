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

Updated: 2026-10-13T04:11:34.180Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | storytold/wordcraft | Rust | 9453 | [Open](https://github.com/storytold/wordcraft) |
| 2 | wheresryan22/anatomy | JavaScript | 6577 | [Open](https://github.com/wheresryan22/anatomy) |
| 3 | storytold/gridcraft | Rust | 3927 | [Open](https://github.com/storytold/gridcraft) |
| 4 | mhtsec/ARTEX | Go | 3648 | [Open](https://github.com/mhtsec/ARTEX) |
| 5 | storytold/cadcraft | Rust | 3568 | [Open](https://github.com/storytold/cadcraft) |
| 6 | nullmoth/nvidia-macos-driver | Rust | 2774 | [Open](https://github.com/nullmoth/nvidia-macos-driver) |
| 7 | storytold/deckcraft | Rust | 2651 | [Open](https://github.com/storytold/deckcraft) |
| 8 | t4t5/omdrop-owl | Shell | 2463 | [Open](https://github.com/t4t5/omdrop-owl) |
| 9 | storytold/soundcraft | Rust | 2298 | [Open](https://github.com/storytold/soundcraft) |
| 10 | alejandrobujan/tendedero | Swift | 2027 | [Open](https://github.com/alejandrobujan/tendedero) |

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
