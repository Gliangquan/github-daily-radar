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

Updated: 2026-10-16T01:55:37.686Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | jhaizhou-ops/d2r-mobile | C | 3172 | [Open](https://github.com/jhaizhou-ops/d2r-mobile) |
| 2 | onehumanbeing/esp32-iphone-agent | C | 2495 | [Open](https://github.com/onehumanbeing/esp32-iphone-agent) |
| 3 | liseami/CCBaga | Rust | 2342 | [Open](https://github.com/liseami/CCBaga) |
| 4 | Arekejoker/qwen21-nsfw-pose-skill | Python | 2066 | [Open](https://github.com/Arekejoker/qwen21-nsfw-pose-skill) |
| 5 | HeyPuter/everything | JavaScript | 1328 | [Open](https://github.com/HeyPuter/everything) |
| 6 | shaongitbd/doory | TypeScript | 1313 | [Open](https://github.com/shaongitbd/doory) |
| 7 | opengeos/RustGIS | Rust | 1226 | [Open](https://github.com/opengeos/RustGIS) |
| 8 | ahwootech/BRUTAL | C# | 1185 | [Open](https://github.com/ahwootech/BRUTAL) |
| 9 | rociiu/talorys | TypeScript | 1162 | [Open](https://github.com/rociiu/talorys) |
| 10 | chenglou/handwired | TypeScript | 1088 | [Open](https://github.com/chenglou/handwired) |

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
