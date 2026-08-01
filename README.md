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

Updated: 2026-08-01T01:28:09.521Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | MoonshotAI/Kimi-K3 | Unknown | 7724 | [Open](https://github.com/MoonshotAI/Kimi-K3) |
| 2 | bashalarmistalt/decimen-optical-transfer | TypeScript | 2029 | [Open](https://github.com/bashalarmistalt/decimen-optical-transfer) |
| 3 | yc-software/qm | TypeScript | 1927 | [Open](https://github.com/yc-software/qm) |
| 4 | xikhar/persona | JavaScript | 716 | [Open](https://github.com/xikhar/persona) |
| 5 | QwenAudio/qwen-audio-agent | JavaScript | 609 | [Open](https://github.com/QwenAudio/qwen-audio-agent) |
| 6 | 0xwilliamortiz/ponytail-improved | JavaScript | 570 | [Open](https://github.com/0xwilliamortiz/ponytail-improved) |
| 7 | xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer | Unknown | 563 | [Open](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer) |
| 8 | 0xwilliamortiz/openclaude-improved | TypeScript | 563 | [Open](https://github.com/0xwilliamortiz/openclaude-improved) |
| 9 | gavamedia/deltafin | Python | 561 | [Open](https://github.com/gavamedia/deltafin) |
| 10 | DramaticShape/DramaticShapeVoxelMod | Lua | 535 | [Open](https://github.com/DramaticShape/DramaticShapeVoxelMod) |

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
