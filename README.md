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

Updated: 2026-03-22T01:06:50.997Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | HKUDS/ClawTeam | Python | 2472 | [Open](https://github.com/HKUDS/ClawTeam) |
| 2 | VoltAgent/awesome-codex-subagents | Unknown | 1981 | [Open](https://github.com/VoltAgent/awesome-codex-subagents) |
| 3 | lcoutodemos/clui-cc | TypeScript | 966 | [Open](https://github.com/lcoutodemos/clui-cc) |
| 4 | mattprusak/autoresearch-genealogy | Unknown | 841 | [Open](https://github.com/mattprusak/autoresearch-genealogy) |
| 5 | lxf746/any-auto-register | Python | 796 | [Open](https://github.com/lxf746/any-auto-register) |
| 6 | math-inc/OpenGauss | Python | 776 | [Open](https://github.com/math-inc/OpenGauss) |
| 7 | frank890417/taiwan-md | Astro | 698 | [Open](https://github.com/frank890417/taiwan-md) |
| 8 | BryanLunduke/DoesItAgeVerify | Unknown | 618 | [Open](https://github.com/BryanLunduke/DoesItAgeVerify) |
| 9 | truongduy2611/app-store-preflight-skills | Unknown | 602 | [Open](https://github.com/truongduy2611/app-store-preflight-skills) |
| 10 | nv-tlabs/kimodo | Python | 583 | [Open](https://github.com/nv-tlabs/kimodo) |

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
