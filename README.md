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

Updated: 2026-05-17T01:50:59.645Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FULU-Foundation/OrcaSlicer-bambulab | C++ | 5364 | [Open](https://github.com/FULU-Foundation/OrcaSlicer-bambulab) |
| 2 | Nightmare-Eclipse/YellowKey | Unknown | 2853 | [Open](https://github.com/Nightmare-Eclipse/YellowKey) |
| 3 | nexu-io/html-anything | HTML | 2462 | [Open](https://github.com/nexu-io/html-anything) |
| 4 | yetone/native-feel-skill | Unknown | 1230 | [Open](https://github.com/yetone/native-feel-skill) |
| 5 | HermannBjorgvin/Clawdmeter | C | 1086 | [Open](https://github.com/HermannBjorgvin/Clawdmeter) |
| 6 | vercel-labs/zero | C | 1041 | [Open](https://github.com/vercel-labs/zero) |
| 7 | simonlin1212/a-stock-data | Unknown | 993 | [Open](https://github.com/simonlin1212/a-stock-data) |
| 8 | ywnd1144/Gopay_plus_automatic | Python | 902 | [Open](https://github.com/ywnd1144/Gopay_plus_automatic) |
| 9 | DepthFirstDisclosures/Nginx-Rift | Python | 646 | [Open](https://github.com/DepthFirstDisclosures/Nginx-Rift) |
| 10 | DenisSergeevitch/agents-best-practices | Unknown | 579 | [Open](https://github.com/DenisSergeevitch/agents-best-practices) |

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
