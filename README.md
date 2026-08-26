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

Updated: 2026-08-26T00:32:47.013Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MengTo/threeui | HTML | 3909 | [Open](https://github.com/MengTo/threeui) |
| 2 | b-nnett/grok-bot-0.18-reconstructed | TypeScript | 2543 | [Open](https://github.com/b-nnett/grok-bot-0.18-reconstructed) |
| 3 | tobi/walgit | Rust | 1543 | [Open](https://github.com/tobi/walgit) |
| 4 | duty1g/x64dbg-mcp-server | Zig | 1380 | [Open](https://github.com/duty1g/x64dbg-mcp-server) |
| 5 | cclank/lanshu-create-ai-presenter-video | Python | 913 | [Open](https://github.com/cclank/lanshu-create-ai-presenter-video) |
| 6 | nateherkai/scroll-craft | JavaScript | 907 | [Open](https://github.com/nateherkai/scroll-craft) |
| 7 | ShadowAqueduct/watermark-remover | Python | 791 | [Open](https://github.com/ShadowAqueduct/watermark-remover) |
| 8 | ApodexAI/FrontierAgent | Python | 566 | [Open](https://github.com/ApodexAI/FrontierAgent) |
| 9 | bryllim/workout-guide | Astro | 517 | [Open](https://github.com/bryllim/workout-guide) |
| 10 | Forsy-AI/biosecurity-agent | TypeScript | 514 | [Open](https://github.com/Forsy-AI/biosecurity-agent) |

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
