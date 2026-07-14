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

Updated: 2026-07-14T01:13:36.455Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | withmarbleapp/os-taxonomy | JavaScript | 2919 | [Open](https://github.com/withmarbleapp/os-taxonomy) |
| 2 | Robbyant/lingbot-world-v2 | Python | 1032 | [Open](https://github.com/Robbyant/lingbot-world-v2) |
| 3 | x4gKing/3x-ui-Upgrade | HTML | 955 | [Open](https://github.com/x4gKing/3x-ui-Upgrade) |
| 4 | vinhhien112/Three.js-Object-Sculptor-Codex-Plugin | Python | 853 | [Open](https://github.com/vinhhien112/Three.js-Object-Sculptor-Codex-Plugin) |
| 5 | Robbyant/lingbot-video | Python | 757 | [Open](https://github.com/Robbyant/lingbot-video) |
| 6 | mereyabdenbekuly-ctrl/clodex-ide | TypeScript | 696 | [Open](https://github.com/mereyabdenbekuly-ctrl/clodex-ide) |
| 7 | littledivy/mimic | Python | 680 | [Open](https://github.com/littledivy/mimic) |
| 8 | MDX-Tom/gpt-5.6-instruct | Python | 668 | [Open](https://github.com/MDX-Tom/gpt-5.6-instruct) |
| 9 | William-Lu-stack/LuxyAI | Python | 547 | [Open](https://github.com/William-Lu-stack/LuxyAI) |
| 10 | AlephAITech/WorkBuddyGuide | Python | 488 | [Open](https://github.com/AlephAITech/WorkBuddyGuide) |

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
