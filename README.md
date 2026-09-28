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

Updated: 2026-09-28T02:14:16.511Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Contrastive-LM/CLM | Python | 1934 | [Open](https://github.com/Contrastive-LM/CLM) |
| 2 | tobi/disktree | Rust | 1620 | [Open](https://github.com/tobi/disktree) |
| 3 | yetone/magpie | Go | 1272 | [Open](https://github.com/yetone/magpie) |
| 4 | JohnHeibel/PDoomVideo | JavaScript | 1263 | [Open](https://github.com/JohnHeibel/PDoomVideo) |
| 5 | mexicat/pdoom-video | TypeScript | 1180 | [Open](https://github.com/mexicat/pdoom-video) |
| 6 | mikehasa/golive-skill | TypeScript | 1014 | [Open](https://github.com/mikehasa/golive-skill) |
| 7 | kryvora-network/kryvora-node | Go | 978 | [Open](https://github.com/kryvora-network/kryvora-node) |
| 8 | riba2534/claude-opus-5-5-demo | JavaScript | 828 | [Open](https://github.com/riba2534/claude-opus-5-5-demo) |
| 9 | dgreenheck/tidewater | JavaScript | 826 | [Open](https://github.com/dgreenheck/tidewater) |
| 10 | 852wa/JIZURA | HTML | 807 | [Open](https://github.com/852wa/JIZURA) |

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
