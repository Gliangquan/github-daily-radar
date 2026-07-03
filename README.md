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

Updated: 2026-07-03T01:43:40.289Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Krishnagangwal/CS-Fundamentals | Unknown | 1436 | [Open](https://github.com/Krishnagangwal/CS-Fundamentals) |
| 2 | mekos2772/ios-location-spoofer | JavaScript | 1113 | [Open](https://github.com/mekos2772/ios-location-spoofer) |
| 3 | yynxxxxx/Codex-5.5-codex-instruct-5.5 | Python | 1111 | [Open](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5) |
| 4 | Kulaxyz/self-learning-skills | Unknown | 897 | [Open](https://github.com/Kulaxyz/self-learning-skills) |
| 5 | TianhangZhuzth/Fundamental-Ava | Python | 754 | [Open](https://github.com/TianhangZhuzth/Fundamental-Ava) |
| 6 | aquace/CVE-2026-41940-PoC | Python | 572 | [Open](https://github.com/aquace/CVE-2026-41940-PoC) |
| 7 | diinki/linux-antiquity | QML | 502 | [Open](https://github.com/diinki/linux-antiquity) |
| 8 | wlzh/dji-4g-vohive-mac | Unknown | 400 | [Open](https://github.com/wlzh/dji-4g-vohive-mac) |
| 9 | Jia-Ethan/codex-keysmith | Python | 399 | [Open](https://github.com/Jia-Ethan/codex-keysmith) |
| 10 | downclash/clash | JavaScript | 344 | [Open](https://github.com/downclash/clash) |

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
