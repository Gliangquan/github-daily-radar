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

Updated: 2026-03-30T01:15:06.748Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | larksuite/cli | Go | 3003 | [Open](https://github.com/larksuite/cli) |
| 2 | HKUDS/OpenSpace | Python | 2463 | [Open](https://github.com/HKUDS/OpenSpace) |
| 3 | magnum6actual/flipoff | JavaScript | 2414 | [Open](https://github.com/magnum6actual/flipoff) |
| 4 | elder-plinius/G0DM0D3 | TypeScript | 1999 | [Open](https://github.com/elder-plinius/G0DM0D3) |
| 5 | alvinunreal/awesome-opensource-ai | Unknown | 1929 | [Open](https://github.com/alvinunreal/awesome-opensource-ai) |
| 6 | nashsu/opencli-rs | Rust | 982 | [Open](https://github.com/nashsu/opencli-rs) |
| 7 | facebookresearch/tribev2 | Jupyter Notebook | 899 | [Open](https://github.com/facebookresearch/tribev2) |
| 8 | jxnxts/mcp-brasil | Python | 875 | [Open](https://github.com/jxnxts/mcp-brasil) |
| 9 | LimHyungTae/Awesome-PhD-CV | TeX | 850 | [Open](https://github.com/LimHyungTae/Awesome-PhD-CV) |
| 10 | oaker-io/wewrite | Python | 845 | [Open](https://github.com/oaker-io/wewrite) |

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
