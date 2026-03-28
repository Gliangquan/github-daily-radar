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

Updated: 2026-03-28T01:05:12.164Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | slavingia/skills | Unknown | 4457 | [Open](https://github.com/slavingia/skills) |
| 2 | zarazhangrui/codebase-to-course | Unknown | 2062 | [Open](https://github.com/zarazhangrui/codebase-to-course) |
| 3 | HKUDS/OpenSpace | Python | 1469 | [Open](https://github.com/HKUDS/OpenSpace) |
| 4 | alvinunreal/awesome-opensource-ai | Unknown | 1458 | [Open](https://github.com/alvinunreal/awesome-opensource-ai) |
| 5 | magnum6actual/flipoff | JavaScript | 1331 | [Open](https://github.com/magnum6actual/flipoff) |
| 6 | GAIR-NLP/daVinci-MagiHuman | Python | 1013 | [Open](https://github.com/GAIR-NLP/daVinci-MagiHuman) |
| 7 | CoderLuii/HolyClaude | Dockerfile | 965 | [Open](https://github.com/CoderLuii/HolyClaude) |
| 8 | opa334/darksword-kexploit | Objective-C | 956 | [Open](https://github.com/opa334/darksword-kexploit) |
| 9 | wong2/weixin-agent-sdk | TypeScript | 932 | [Open](https://github.com/wong2/weixin-agent-sdk) |
| 10 | nashsu/opencli-rs | Rust | 896 | [Open](https://github.com/nashsu/opencli-rs) |

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
