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

Updated: 2026-05-18T02:01:01.411Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | Nightmare-Eclipse/YellowKey | Unknown | 3160 | [Open](https://github.com/Nightmare-Eclipse/YellowKey) |
| 2 | vercel-labs/zero | C | 1709 | [Open](https://github.com/vercel-labs/zero) |
| 3 | yetone/native-feel-skill | Unknown | 1278 | [Open](https://github.com/yetone/native-feel-skill) |
| 4 | ywnd1144/Gopay_plus_automatic | Python | 921 | [Open](https://github.com/ywnd1144/Gopay_plus_automatic) |
| 5 | DenisSergeevitch/agents-best-practices | Unknown | 721 | [Open](https://github.com/DenisSergeevitch/agents-best-practices) |
| 6 | DepthFirstDisclosures/Nginx-Rift | Python | 673 | [Open](https://github.com/DepthFirstDisclosures/Nginx-Rift) |
| 7 | facebookresearch/vggt-omega | Python | 645 | [Open](https://github.com/facebookresearch/vggt-omega) |
| 8 | Kappaemme-git/codex-complexity-optimizer | Python | 635 | [Open](https://github.com/Kappaemme-git/codex-complexity-optimizer) |
| 9 | yaassin12/DeepSeek-V4-Pro-App | C++ | 606 | [Open](https://github.com/yaassin12/DeepSeek-V4-Pro-App) |
| 10 | chrisbanes/skills | Unknown | 604 | [Open](https://github.com/chrisbanes/skills) |

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
