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

Updated: 2026-05-10T01:45:46.542Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | antirez/ds4 | C | 4516 | [Open](https://github.com/antirez/ds4) |
| 2 | V4bel/dirtyfrag | C | 3647 | [Open](https://github.com/V4bel/dirtyfrag) |
| 3 | vercel-labs/zero-native | Zig | 1656 | [Open](https://github.com/vercel-labs/zero-native) |
| 4 | strukto-ai/mirage | TypeScript | 1632 | [Open](https://github.com/strukto-ai/mirage) |
| 5 | yaojingang/yao-open-prompts | Python | 1490 | [Open](https://github.com/yaojingang/yao-open-prompts) |
| 6 | XBuilderLAB/cheat-on-content | Shell | 1426 | [Open](https://github.com/XBuilderLAB/cheat-on-content) |
| 7 | lightseekorg/tokenspeed | Python | 858 | [Open](https://github.com/lightseekorg/tokenspeed) |
| 8 | zarazhangrui/beautiful-html-templates | HTML | 604 | [Open](https://github.com/zarazhangrui/beautiful-html-templates) |
| 9 | WenyuChiou/awesome-agentic-ai-zh | Python | 537 | [Open](https://github.com/WenyuChiou/awesome-agentic-ai-zh) |
| 10 | zzzhhh1/Sing-Flare-Auto | Dockerfile | 488 | [Open](https://github.com/zzzhhh1/Sing-Flare-Auto) |

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
