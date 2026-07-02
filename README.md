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

Updated: 2026-07-02T02:00:32.662Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | deepseek-ai/DeepSpec | Python | 5750 | [Open](https://github.com/deepseek-ai/DeepSpec) |
| 2 | Krishnagangwal/CS-Fundamentals | Unknown | 1331 | [Open](https://github.com/Krishnagangwal/CS-Fundamentals) |
| 3 | yynxxxxx/Codex-5.5-codex-instruct-5.5 | Python | 1014 | [Open](https://github.com/yynxxxxx/Codex-5.5-codex-instruct-5.5) |
| 4 | Kulaxyz/self-learning-skills | Unknown | 749 | [Open](https://github.com/Kulaxyz/self-learning-skills) |
| 5 | TianhangZhuzth/Fundamental-Ava | Python | 720 | [Open](https://github.com/TianhangZhuzth/Fundamental-Ava) |
| 6 | mekos2772/ios-location-spoofer | JavaScript | 681 | [Open](https://github.com/mekos2772/ios-location-spoofer) |
| 7 | aquace/CVE-2026-41940-PoC | Python | 571 | [Open](https://github.com/aquace/CVE-2026-41940-PoC) |
| 8 | Pluviobyte/video-production-skills | Python | 492 | [Open](https://github.com/Pluviobyte/video-production-skills) |
| 9 | CopilotKit/OpenTag | TypeScript | 488 | [Open](https://github.com/CopilotKit/OpenTag) |
| 10 | diinki/linux-antiquity | QML | 440 | [Open](https://github.com/diinki/linux-antiquity) |

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
