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

Updated: 2026-08-27T05:24:03.615Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MengTo/threeui | HTML | 4221 | [Open](https://github.com/MengTo/threeui) |
| 2 | b-nnett/grok-bot-0.18-reconstructed | TypeScript | 3138 | [Open](https://github.com/b-nnett/grok-bot-0.18-reconstructed) |
| 3 | tobi/walgit | Rust | 2090 | [Open](https://github.com/tobi/walgit) |
| 4 | duty1g/x64dbg-mcp-server | Zig | 1478 | [Open](https://github.com/duty1g/x64dbg-mcp-server) |
| 5 | nateherkai/scroll-craft | JavaScript | 1028 | [Open](https://github.com/nateherkai/scroll-craft) |
| 6 | ApodexAI/FrontierAgent | Python | 1021 | [Open](https://github.com/ApodexAI/FrontierAgent) |
| 7 | bryllim/workout-guide | Astro | 865 | [Open](https://github.com/bryllim/workout-guide) |
| 8 | ShadowAqueduct/watermark-remover | Python | 808 | [Open](https://github.com/ShadowAqueduct/watermark-remover) |
| 9 | wide-trace/open-higgsfield | TypeScript | 610 | [Open](https://github.com/wide-trace/open-higgsfield) |
| 10 | themartiano/try-omarchy | Shell | 572 | [Open](https://github.com/themartiano/try-omarchy) |

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
