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

Updated: 2026-07-07T01:51:17.729Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | elder-plinius/T3MP3ST | TypeScript | 2674 | [Open](https://github.com/elder-plinius/T3MP3ST) |
| 2 | ammaarreshi/Generals-Mac-iOS-iPad | C++ | 1153 | [Open](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad) |
| 3 | jamesob/local-llm | Shell | 1075 | [Open](https://github.com/jamesob/local-llm) |
| 4 | synthetic-sciences/openscience | TypeScript | 794 | [Open](https://github.com/synthetic-sciences/openscience) |
| 5 | xuchonglang/investing-for-beginners | Unknown | 738 | [Open](https://github.com/xuchonglang/investing-for-beginners) |
| 6 | jmerelnyc/Talos | Python | 722 | [Open](https://github.com/jmerelnyc/Talos) |
| 7 | uzairansaruzi/hermex | Swift | 657 | [Open](https://github.com/uzairansaruzi/hermex) |
| 8 | LinXiaoTao/FuckClaude | TypeScript | 597 | [Open](https://github.com/LinXiaoTao/FuckClaude) |
| 9 | Kulaxyz/token-diet | Shell | 596 | [Open](https://github.com/Kulaxyz/token-diet) |
| 10 | 514-labs/dnsglobe | Rust | 544 | [Open](https://github.com/514-labs/dnsglobe) |

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
