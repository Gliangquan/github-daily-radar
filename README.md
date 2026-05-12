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

Updated: 2026-05-12T01:48:43.355Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | antirez/ds4 | C | 7416 | [Open](https://github.com/antirez/ds4) |
| 2 | V4bel/dirtyfrag | C | 4202 | [Open](https://github.com/V4bel/dirtyfrag) |
| 3 | vercel-labs/zero-native | Zig | 2655 | [Open](https://github.com/vercel-labs/zero-native) |
| 4 | strukto-ai/mirage | TypeScript | 1945 | [Open](https://github.com/strukto-ai/mirage) |
| 5 | yaojingang/yao-open-prompts | Python | 1629 | [Open](https://github.com/yaojingang/yao-open-prompts) |
| 6 | huangserva/3DCellForge | JavaScript | 1410 | [Open](https://github.com/huangserva/3DCellForge) |
| 7 | BigPizzaV3/CodexPlusPlus | Python | 1045 | [Open](https://github.com/BigPizzaV3/CodexPlusPlus) |
| 8 | lightseekorg/tokenspeed | Python | 945 | [Open](https://github.com/lightseekorg/tokenspeed) |
| 9 | thakur-works/DarkGPT | Unknown | 532 | [Open](https://github.com/thakur-works/DarkGPT) |
| 10 | thakur-works/Velocity-Executor | Unknown | 528 | [Open](https://github.com/thakur-works/Velocity-Executor) |

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
