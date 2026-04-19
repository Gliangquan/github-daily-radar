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

Updated: 2026-04-19T01:21:53.608Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | getagentseal/codeburn | TypeScript | 2717 | [Open](https://github.com/getagentseal/codeburn) |
| 2 | Robbyant/lingbot-map | Python | 1893 | [Open](https://github.com/Robbyant/lingbot-map) |
| 3 | vercel-labs/wterm | TypeScript | 1554 | [Open](https://github.com/vercel-labs/wterm) |
| 4 | Nightmare-Eclipse/RedSun | C++ | 1500 | [Open](https://github.com/Nightmare-Eclipse/RedSun) |
| 5 | alchaincyf/darwin-skill | HTML | 1191 | [Open](https://github.com/alchaincyf/darwin-skill) |
| 6 | lewislulu/html-ppt-skill | HTML | 1143 | [Open](https://github.com/lewislulu/html-ppt-skill) |
| 7 | Manavarya09/design-extract | JavaScript | 1007 | [Open](https://github.com/Manavarya09/design-extract) |
| 8 | BuilderPulse/BuilderPulse | Unknown | 929 | [Open](https://github.com/BuilderPulse/BuilderPulse) |
| 9 | sogonov/anubis | Kotlin | 913 | [Open](https://github.com/sogonov/anubis) |
| 10 | WeaveMindAI/weft | Rust | 834 | [Open](https://github.com/WeaveMindAI/weft) |

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
