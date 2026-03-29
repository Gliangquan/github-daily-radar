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

Updated: 2026-03-29T01:14:10.617Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | slavingia/skills | Unknown | 4985 | [Open](https://github.com/slavingia/skills) |
| 2 | magnum6actual/flipoff | JavaScript | 2057 | [Open](https://github.com/magnum6actual/flipoff) |
| 3 | HKUDS/OpenSpace | Python | 1937 | [Open](https://github.com/HKUDS/OpenSpace) |
| 4 | alvinunreal/awesome-opensource-ai | Unknown | 1744 | [Open](https://github.com/alvinunreal/awesome-opensource-ai) |
| 5 | larksuite/cli | Go | 1687 | [Open](https://github.com/larksuite/cli) |
| 6 | elder-plinius/G0DM0D3 | TypeScript | 1494 | [Open](https://github.com/elder-plinius/G0DM0D3) |
| 7 | opa334/darksword-kexploit | Objective-C | 991 | [Open](https://github.com/opa334/darksword-kexploit) |
| 8 | nashsu/opencli-rs | Rust | 931 | [Open](https://github.com/nashsu/opencli-rs) |
| 9 | LimHyungTae/Awesome-PhD-CV | TeX | 830 | [Open](https://github.com/LimHyungTae/Awesome-PhD-CV) |
| 10 | jxnxts/mcp-brasil | Python | 828 | [Open](https://github.com/jxnxts/mcp-brasil) |

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
