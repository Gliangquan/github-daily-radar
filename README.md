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

Updated: 2026-10-15T02:05:02.651Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | storytold/craft-launcher | Rust | 2665 | [Open](https://github.com/storytold/craft-launcher) |
| 2 | liseami/CCBaga | Rust | 2260 | [Open](https://github.com/liseami/CCBaga) |
| 3 | jhaizhou-ops/d2r-mobile | C | 2197 | [Open](https://github.com/jhaizhou-ops/d2r-mobile) |
| 4 | onehumanbeing/esp32-iphone-agent | C | 2106 | [Open](https://github.com/onehumanbeing/esp32-iphone-agent) |
| 5 | Arekejoker/qwen21-nsfw-pose-skill | Python | 1271 | [Open](https://github.com/Arekejoker/qwen21-nsfw-pose-skill) |
| 6 | shaongitbd/doory | TypeScript | 1206 | [Open](https://github.com/shaongitbd/doory) |
| 7 | opengeos/RustGIS | Rust | 1065 | [Open](https://github.com/opengeos/RustGIS) |
| 8 | rociiu/talorys | TypeScript | 1002 | [Open](https://github.com/rociiu/talorys) |
| 9 | zhuyansen/new-term-radar | Python | 963 | [Open](https://github.com/zhuyansen/new-term-radar) |
| 10 | storytold/figcraft | Rust | 948 | [Open](https://github.com/storytold/figcraft) |

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
