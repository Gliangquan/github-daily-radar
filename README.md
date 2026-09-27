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

Updated: 2026-09-27T02:09:46.341Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | jev-chat/jev-chat-jarvis | Kotlin | 6678 | [Open](https://github.com/jev-chat/jev-chat-jarvis) |
| 2 | unreallabsai/unreal-agent | Go | 1969 | [Open](https://github.com/unreallabsai/unreal-agent) |
| 3 | Contrastive-LM/CLM | Python | 1604 | [Open](https://github.com/Contrastive-LM/CLM) |
| 4 | tobi/disktree | Rust | 1306 | [Open](https://github.com/tobi/disktree) |
| 5 | JohnHeibel/PDoomVideo | JavaScript | 1055 | [Open](https://github.com/JohnHeibel/PDoomVideo) |
| 6 | yetone/magpie | Go | 1039 | [Open](https://github.com/yetone/magpie) |
| 7 | deepopen-com/deepopen | Python | 1037 | [Open](https://github.com/deepopen-com/deepopen) |
| 8 | mikehasa/golive-skill | TypeScript | 980 | [Open](https://github.com/mikehasa/golive-skill) |
| 9 | kryvora-network/kryvora-node | Go | 891 | [Open](https://github.com/kryvora-network/kryvora-node) |
| 10 | riba2534/claude-opus-5-5-demo | JavaScript | 809 | [Open](https://github.com/riba2534/claude-opus-5-5-demo) |

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
