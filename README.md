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

Updated: 2026-08-22T00:30:32.242Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | s1dashu/ip-as-logo-skill | Unknown | 3485 | [Open](https://github.com/s1dashu/ip-as-logo-skill) |
| 2 | yetone/cumora | TypeScript | 2858 | [Open](https://github.com/yetone/cumora) |
| 3 | CopilotKit/OpenBot | TypeScript | 2120 | [Open](https://github.com/CopilotKit/OpenBot) |
| 4 | cinderline/northcinder | JavaScript | 1203 | [Open](https://github.com/cinderline/northcinder) |
| 5 | Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report | Unknown | 1036 | [Open](https://github.com/Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report) |
| 6 | wang2122/sprix-sage-router | Python | 1009 | [Open](https://github.com/wang2122/sprix-sage-router) |
| 7 | vvxw/deploy-vercel | JavaScript | 985 | [Open](https://github.com/vvxw/deploy-vercel) |
| 8 | Leutenegger/watermarks-remover | Python | 929 | [Open](https://github.com/Leutenegger/watermarks-remover) |
| 9 | Leutenegger/vanity-eth | Python | 803 | [Open](https://github.com/Leutenegger/vanity-eth) |
| 10 | browser-use/macos-harness | Python | 686 | [Open](https://github.com/browser-use/macos-harness) |

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
