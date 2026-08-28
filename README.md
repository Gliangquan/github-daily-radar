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

Updated: 2026-08-28T07:20:51.980Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | b-nnett/grok-bot-0.18-reconstructed | TypeScript | 3384 | [Open](https://github.com/b-nnett/grok-bot-0.18-reconstructed) |
| 2 | HEJustinSun/my-girlfriend-jingtian-latex | TeX | 2745 | [Open](https://github.com/HEJustinSun/my-girlfriend-jingtian-latex) |
| 3 | tobi/walgit | Rust | 2267 | [Open](https://github.com/tobi/walgit) |
| 4 | duty1g/x64dbg-mcp-server | Zig | 1586 | [Open](https://github.com/duty1g/x64dbg-mcp-server) |
| 5 | ApodexAI/FrontierAgent | Python | 1170 | [Open](https://github.com/ApodexAI/FrontierAgent) |
| 6 | nateherkai/scroll-craft | JavaScript | 1115 | [Open](https://github.com/nateherkai/scroll-craft) |
| 7 | bryllim/workout-guide | Astro | 940 | [Open](https://github.com/bryllim/workout-guide) |
| 8 | sapientinc/PRAXIST | Python | 906 | [Open](https://github.com/sapientinc/PRAXIST) |
| 9 | wide-trace/open-higgsfield | TypeScript | 879 | [Open](https://github.com/wide-trace/open-higgsfield) |
| 10 | ShadowAqueduct/watermark-remover | Python | 821 | [Open](https://github.com/ShadowAqueduct/watermark-remover) |

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
