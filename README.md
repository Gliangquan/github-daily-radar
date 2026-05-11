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

Updated: 2026-05-11T01:53:11.186Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | antirez/ds4 | C | 6257 | [Open](https://github.com/antirez/ds4) |
| 2 | V4bel/dirtyfrag | C | 4026 | [Open](https://github.com/V4bel/dirtyfrag) |
| 3 | vercel-labs/zero-native | Zig | 2314 | [Open](https://github.com/vercel-labs/zero-native) |
| 4 | strukto-ai/mirage | TypeScript | 1796 | [Open](https://github.com/strukto-ai/mirage) |
| 5 | XBuilderLAB/cheat-on-content | Shell | 1559 | [Open](https://github.com/XBuilderLAB/cheat-on-content) |
| 6 | yaojingang/yao-open-prompts | Python | 1558 | [Open](https://github.com/yaojingang/yao-open-prompts) |
| 7 | lightseekorg/tokenspeed | Python | 907 | [Open](https://github.com/lightseekorg/tokenspeed) |
| 8 | huangserva/3DCellForge | JavaScript | 774 | [Open](https://github.com/huangserva/3DCellForge) |
| 9 | zarazhangrui/beautiful-html-templates | HTML | 735 | [Open](https://github.com/zarazhangrui/beautiful-html-templates) |
| 10 | BigPizzaV3/CodexPlusPlus | Python | 708 | [Open](https://github.com/BigPizzaV3/CodexPlusPlus) |

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
