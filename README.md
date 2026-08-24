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

Updated: 2026-08-24T00:32:15.025Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | s1dashu/ip-as-logo-skill | Unknown | 3899 | [Open](https://github.com/s1dashu/ip-as-logo-skill) |
| 2 | MengTo/threeui | HTML | 2882 | [Open](https://github.com/MengTo/threeui) |
| 3 | wang2122/sprix-sage-router | Python | 1412 | [Open](https://github.com/wang2122/sprix-sage-router) |
| 4 | vvxw/deploy-vercel | JavaScript | 1213 | [Open](https://github.com/vvxw/deploy-vercel) |
| 5 | duty1g/x64dbg-mcp-server | Zig | 860 | [Open](https://github.com/duty1g/x64dbg-mcp-server) |
| 6 | ShadowAqueduct/watermark-remover | Python | 759 | [Open](https://github.com/ShadowAqueduct/watermark-remover) |
| 7 | MeteorNOX/DeepSeek-Balance-Whale-Widget | JavaScript | 716 | [Open](https://github.com/MeteorNOX/DeepSeek-Balance-Whale-Widget) |
| 8 | DenisSergeevitch/desktop-fly | Swift | 704 | [Open](https://github.com/DenisSergeevitch/desktop-fly) |
| 9 | cclank/lanshu-create-ai-presenter-video | Python | 650 | [Open](https://github.com/cclank/lanshu-create-ai-presenter-video) |
| 10 | missuo/herdrm | Swift | 611 | [Open](https://github.com/missuo/herdrm) |

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
