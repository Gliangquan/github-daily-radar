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

Updated: 2026-08-08T00:42:03.350Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | firecrawl/anydoc | Rust | 11018 | [Open](https://github.com/firecrawl/anydoc) |
| 2 | thebuggeddev/anatomy | TypeScript | 1982 | [Open](https://github.com/thebuggeddev/anatomy) |
| 3 | KKKKhazix/human-writing | Python | 1874 | [Open](https://github.com/KKKKhazix/human-writing) |
| 4 | Binaryify/open-kimi-ppt-skill | Unknown | 1588 | [Open](https://github.com/Binaryify/open-kimi-ppt-skill) |
| 5 | ZzzLc0405/photo-abstract-editorial | Unknown | 1490 | [Open](https://github.com/ZzzLc0405/photo-abstract-editorial) |
| 6 | Accio-org/RealReplicaBench | HTML | 1040 | [Open](https://github.com/Accio-org/RealReplicaBench) |
| 7 | mikiarlo3/awesome-growth-hacking-skills | Shell | 725 | [Open](https://github.com/mikiarlo3/awesome-growth-hacking-skills) |
| 8 | magicrew/doc7 | Go | 611 | [Open](https://github.com/magicrew/doc7) |
| 9 | sophiamyang/finger-frame-effect-ai | JavaScript | 604 | [Open](https://github.com/sophiamyang/finger-frame-effect-ai) |
| 10 | 0xwilliamortiz/claude-red | JavaScript | 559 | [Open](https://github.com/0xwilliamortiz/claude-red) |

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
