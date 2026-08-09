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

Updated: 2026-08-09T00:44:06.435Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | firecrawl/anydoc | Rust | 12121 | [Open](https://github.com/firecrawl/anydoc) |
| 2 | KKKKhazix/human-writing | Python | 1988 | [Open](https://github.com/KKKKhazix/human-writing) |
| 3 | ZzzLc0405/photo-abstract-editorial | Unknown | 1721 | [Open](https://github.com/ZzzLc0405/photo-abstract-editorial) |
| 4 | Binaryify/open-kimi-ppt-skill | Unknown | 1588 | [Open](https://github.com/Binaryify/open-kimi-ppt-skill) |
| 5 | mikiarlo3/awesome-growth-hacking-skills | Shell | 763 | [Open](https://github.com/mikiarlo3/awesome-growth-hacking-skills) |
| 6 | 0xwilliamortiz/claude-red | JavaScript | 681 | [Open](https://github.com/0xwilliamortiz/claude-red) |
| 7 | google-gemma/gemma-translator | JavaScript | 577 | [Open](https://github.com/google-gemma/gemma-translator) |
| 8 | wumingqi60/lingxi | TypeScript | 567 | [Open](https://github.com/wumingqi60/lingxi) |
| 9 | MarcosSete/awesome-free-ai-course-notes | Unknown | 560 | [Open](https://github.com/MarcosSete/awesome-free-ai-course-notes) |
| 10 | xoreaxeaxeax/asm-hall-of-shame | C | 547 | [Open](https://github.com/xoreaxeaxeax/asm-hall-of-shame) |

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
