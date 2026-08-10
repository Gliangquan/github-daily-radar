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

Updated: 2026-08-10T00:46:36.743Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | KKKKhazix/human-writing | Python | 2096 | [Open](https://github.com/KKKKhazix/human-writing) |
| 2 | ZzzLc0405/photo-abstract-editorial | Unknown | 1952 | [Open](https://github.com/ZzzLc0405/photo-abstract-editorial) |
| 3 | Binaryify/open-kimi-ppt-skill | Unknown | 1607 | [Open](https://github.com/Binaryify/open-kimi-ppt-skill) |
| 4 | ShawnPana/phone-harness | Python | 852 | [Open](https://github.com/ShawnPana/phone-harness) |
| 5 | mikiarlo3/awesome-growth-hacking-skills | Shell | 795 | [Open](https://github.com/mikiarlo3/awesome-growth-hacking-skills) |
| 6 | 0xwilliamortiz/claude-red | JavaScript | 705 | [Open](https://github.com/0xwilliamortiz/claude-red) |
| 7 | xoreaxeaxeax/asm-hall-of-shame | C | 658 | [Open](https://github.com/xoreaxeaxeax/asm-hall-of-shame) |
| 8 | jd-opensource/JoyAI-Video-Edit | Python | 605 | [Open](https://github.com/jd-opensource/JoyAI-Video-Edit) |
| 9 | MengTo/kage | HTML | 583 | [Open](https://github.com/MengTo/kage) |
| 10 | oil-oil/oil-motion | Python | 580 | [Open](https://github.com/oil-oil/oil-motion) |

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
