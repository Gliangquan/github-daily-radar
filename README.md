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

Updated: 2026-08-21T00:33:30.971Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | s1dashu/ip-as-logo-skill | Unknown | 3089 | [Open](https://github.com/s1dashu/ip-as-logo-skill) |
| 2 | yetone/cumora | TypeScript | 2774 | [Open](https://github.com/yetone/cumora) |
| 3 | CopilotKit/OpenBot | TypeScript | 1623 | [Open](https://github.com/CopilotKit/OpenBot) |
| 4 | cinderline/northcinder | JavaScript | 1198 | [Open](https://github.com/cinderline/northcinder) |
| 5 | Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report | Unknown | 1038 | [Open](https://github.com/Tiger3807861189/DeepSeek-V4-J-Space-Capability-Realization-Report) |
| 6 | Leutenegger/watermarks-remover | Python | 924 | [Open](https://github.com/Leutenegger/watermarks-remover) |
| 7 | vvxw/deploy-vercel | JavaScript | 799 | [Open](https://github.com/vvxw/deploy-vercel) |
| 8 | wang2122/sprix-sage-router | Python | 678 | [Open](https://github.com/wang2122/sprix-sage-router) |
| 9 | DenisSergeevitch/desktop-fly | Swift | 629 | [Open](https://github.com/DenisSergeevitch/desktop-fly) |
| 10 | SigmanticAI/apex-inference-chip | Python | 628 | [Open](https://github.com/SigmanticAI/apex-inference-chip) |

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
