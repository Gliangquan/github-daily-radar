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

Updated: 2026-08-11T00:45:56.273Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/human-writing | Python | 2273 | [Open](https://github.com/KKKKhazix/human-writing) |
| 2 | Binaryify/open-kimi-ppt-skill | Unknown | 1607 | [Open](https://github.com/Binaryify/open-kimi-ppt-skill) |
| 3 | ShawnPana/phone-harness | Python | 1313 | [Open](https://github.com/ShawnPana/phone-harness) |
| 4 | oil-oil/oil-motion | Python | 1199 | [Open](https://github.com/oil-oil/oil-motion) |
| 5 | MengTo/kage | HTML | 774 | [Open](https://github.com/MengTo/kage) |
| 6 | xoreaxeaxeax/asm-hall-of-shame | C | 729 | [Open](https://github.com/xoreaxeaxeax/asm-hall-of-shame) |
| 7 | SMNETSTUDIO/WeChat-AI | TypeScript | 720 | [Open](https://github.com/SMNETSTUDIO/WeChat-AI) |
| 8 | eternityspring/shuohao-skills | JavaScript | 648 | [Open](https://github.com/eternityspring/shuohao-skills) |
| 9 | T8mars/comfyui-minimax-h3-audio-T8 | Python | 585 | [Open](https://github.com/T8mars/comfyui-minimax-h3-audio-T8) |
| 10 | sv-number/mcp-server | JavaScript | 547 | [Open](https://github.com/sv-number/mcp-server) |

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
