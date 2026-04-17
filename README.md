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

Updated: 2026-04-17T01:19:17.067Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | AgentSeal/codeburn | TypeScript | 2280 | [Open](https://github.com/AgentSeal/codeburn) |
| 2 | Mouseww/anything-analyzer | TypeScript | 1039 | [Open](https://github.com/Mouseww/anything-analyzer) |
| 3 | vercel-labs/wterm | TypeScript | 1038 | [Open](https://github.com/vercel-labs/wterm) |
| 4 | alchaincyf/darwin-skill | HTML | 964 | [Open](https://github.com/alchaincyf/darwin-skill) |
| 5 | sterlingcrispin/nothing-ever-happens | Python | 799 | [Open](https://github.com/sterlingcrispin/nothing-ever-happens) |
| 6 | sogonov/anubis | Kotlin | 784 | [Open](https://github.com/sogonov/anubis) |
| 7 | Nightmare-Eclipse/RedSun | C++ | 778 | [Open](https://github.com/Nightmare-Eclipse/RedSun) |
| 8 | yaojingang/GEOFlow | PHP | 759 | [Open](https://github.com/yaojingang/GEOFlow) |
| 9 | BuilderPulse/BuilderPulse | Unknown | 739 | [Open](https://github.com/BuilderPulse/BuilderPulse) |
| 10 | Manavarya09/design-extract | JavaScript | 676 | [Open](https://github.com/Manavarya09/design-extract) |

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
