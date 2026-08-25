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

Updated: 2026-08-25T00:31:29.164Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MengTo/threeui | HTML | 3448 | [Open](https://github.com/MengTo/threeui) |
| 2 | b-nnett/grok-bot-0.18-reconstructed | TypeScript | 1704 | [Open](https://github.com/b-nnett/grok-bot-0.18-reconstructed) |
| 3 | duty1g/x64dbg-mcp-server | Zig | 1223 | [Open](https://github.com/duty1g/x64dbg-mcp-server) |
| 4 | tobi/walgit | Rust | 1046 | [Open](https://github.com/tobi/walgit) |
| 5 | cclank/lanshu-create-ai-presenter-video | Python | 837 | [Open](https://github.com/cclank/lanshu-create-ai-presenter-video) |
| 6 | ShadowAqueduct/watermark-remover | Python | 768 | [Open](https://github.com/ShadowAqueduct/watermark-remover) |
| 7 | nateherkai/scroll-craft | JavaScript | 632 | [Open](https://github.com/nateherkai/scroll-craft) |
| 8 | missuo/herdrm | Swift | 622 | [Open](https://github.com/missuo/herdrm) |
| 9 | lanicer/cve-2026-41940-PoC | Python | 528 | [Open](https://github.com/lanicer/cve-2026-41940-PoC) |
| 10 | Forsy-AI/biosecurity-agent | TypeScript | 513 | [Open](https://github.com/Forsy-AI/biosecurity-agent) |

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
