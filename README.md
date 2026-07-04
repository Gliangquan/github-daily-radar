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

Updated: 2026-07-04T01:43:43.715Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Krishnagangwal/CS-Fundamentals | Unknown | 1509 | [Open](https://github.com/Krishnagangwal/CS-Fundamentals) |
| 2 | yynxxxxx/Codex-5.5-codex-instruct-5.5 | Python | 1294 | [Open](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5) |
| 3 | mekos2772/ios-location-spoofer | JavaScript | 1251 | [Open](https://github.com/mekos2772/ios-location-spoofer) |
| 4 | Kulaxyz/self-learning-skills | Unknown | 799 | [Open](https://github.com/Kulaxyz/self-learning-skills) |
| 5 | TianhangZhuzth/Fundamental-Ava | Python | 520 | [Open](https://github.com/TianhangZhuzth/Fundamental-Ava) |
| 6 | HUANGCHIHHUNGLeo/claude-real-video | Python | 518 | [Open](https://github.com/HUANGCHIHHUNGLeo/claude-real-video) |
| 7 | xuchonglang/investing-for-beginners | Unknown | 480 | [Open](https://github.com/xuchonglang/investing-for-beginners) |
| 8 | uzairansaruzi/hermex | Swift | 446 | [Open](https://github.com/uzairansaruzi/hermex) |
| 9 | Jia-Ethan/codex-keysmith | Python | 411 | [Open](https://github.com/Jia-Ethan/codex-keysmith) |
| 10 | asz798838958/FrciblyK12 | Python | 377 | [Open](https://github.com/asz798838958/FrciblyK12) |

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
