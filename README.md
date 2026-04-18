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

Updated: 2026-04-18T01:12:51.704Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | AgentSeal/codeburn | TypeScript | 2572 | [Open](https://github.com/AgentSeal/codeburn) |
| 2 | Nightmare-Eclipse/RedSun | C++ | 1351 | [Open](https://github.com/Nightmare-Eclipse/RedSun) |
| 3 | vercel-labs/wterm | TypeScript | 1333 | [Open](https://github.com/vercel-labs/wterm) |
| 4 | Mouseww/anything-analyzer | TypeScript | 1275 | [Open](https://github.com/Mouseww/anything-analyzer) |
| 5 | alchaincyf/darwin-skill | HTML | 1097 | [Open](https://github.com/alchaincyf/darwin-skill) |
| 6 | browser-use/video-use | Python | 947 | [Open](https://github.com/browser-use/video-use) |
| 7 | lewislulu/html-ppt-skill | HTML | 906 | [Open](https://github.com/lewislulu/html-ppt-skill) |
| 8 | Robbyant/lingbot-map | Python | 903 | [Open](https://github.com/Robbyant/lingbot-map) |
| 9 | BuilderPulse/BuilderPulse | Unknown | 882 | [Open](https://github.com/BuilderPulse/BuilderPulse) |
| 10 | Manavarya09/design-extract | JavaScript | 878 | [Open](https://github.com/Manavarya09/design-extract) |

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
