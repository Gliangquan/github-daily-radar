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

Updated: 2026-10-27T02:38:39.397Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | JustAResearcher/gpu-unlock-ada | C | 3886 | [Open](https://github.com/JustAResearcher/gpu-unlock-ada) |
| 2 | wesbos/3d-model-anything | Swift | 2083 | [Open](https://github.com/wesbos/3d-model-anything) |
| 3 | xevrion/hatchzip | Rust | 2061 | [Open](https://github.com/xevrion/hatchzip) |
| 4 | rddmwmddr/android-ad-cleaner | Python | 2044 | [Open](https://github.com/rddmwmddr/android-ad-cleaner) |
| 5 | ikow/php2shell-poc | Python | 1834 | [Open](https://github.com/ikow/php2shell-poc) |
| 6 | designfuchen/word-atlas | TypeScript | 1777 | [Open](https://github.com/designfuchen/word-atlas) |
| 7 | oosexgang/hackios-xnu-kernel | C | 1692 | [Open](https://github.com/oosexgang/hackios-xnu-kernel) |
| 8 | t3dotgg/tstack | Python | 1606 | [Open](https://github.com/t3dotgg/tstack) |
| 9 | 9bie/php2shell-bypass-aslr-exp | Python | 1478 | [Open](https://github.com/9bie/php2shell-bypass-aslr-exp) |
| 10 | openai/php2shell-checker | JavaScript | 1425 | [Open](https://github.com/openai/php2shell-checker) |

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
