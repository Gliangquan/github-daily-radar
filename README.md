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

Updated: 2026-08-02T01:25:50.048Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MoonshotAI/Kimi-K3 | Unknown | 7826 | [Open](https://github.com/MoonshotAI/Kimi-K3) |
| 2 | yc-software/qm | TypeScript | 5016 | [Open](https://github.com/yc-software/qm) |
| 3 | bashalarmistalt/decimen-optical-transfer | TypeScript | 3083 | [Open](https://github.com/bashalarmistalt/decimen-optical-transfer) |
| 4 | QwenAudio/qwen-audio-agent | JavaScript | 1283 | [Open](https://github.com/QwenAudio/qwen-audio-agent) |
| 5 | xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer | Unknown | 1007 | [Open](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer) |
| 6 | xikhar/persona | JavaScript | 764 | [Open](https://github.com/xikhar/persona) |
| 7 | sqliteai/waste | C | 685 | [Open](https://github.com/sqliteai/waste) |
| 8 | trycompai/crm | TypeScript | 627 | [Open](https://github.com/trycompai/crm) |
| 9 | gavamedia/deltafin | Python | 594 | [Open](https://github.com/gavamedia/deltafin) |
| 10 | talivia-group/talivia | TypeScript | 590 | [Open](https://github.com/talivia-group/talivia) |

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
