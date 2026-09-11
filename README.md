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

Updated: 2026-09-11T01:44:56.430Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | ashemag/human-atlas | TypeScript | 3095 | [Open](https://github.com/ashemag/human-atlas) |
| 2 | openai/NavierStokesAndEuler | Lean | 1719 | [Open](https://github.com/openai/NavierStokesAndEuler) |
| 3 | sdli1995/dlssg_for_sm86 | Unknown | 1438 | [Open](https://github.com/sdli1995/dlssg_for_sm86) |
| 4 | vinzdg/codenotch | Swift | 1386 | [Open](https://github.com/vinzdg/codenotch) |
| 5 | EverettFish/holo-card-studio | Python | 1337 | [Open](https://github.com/EverettFish/holo-card-studio) |
| 6 | Edge0-AI/Edge0 | Python | 1021 | [Open](https://github.com/Edge0-AI/Edge0) |
| 7 | yang0/handraw-style | HTML | 988 | [Open](https://github.com/yang0/handraw-style) |
| 8 | donvito/codex-astra-luna-orchestrator | Python | 923 | [Open](https://github.com/donvito/codex-astra-luna-orchestrator) |
| 9 | iamzulx/crypto-rag | Python | 899 | [Open](https://github.com/iamzulx/crypto-rag) |
| 10 | achimala/dream-loop | JavaScript | 734 | [Open](https://github.com/achimala/dream-loop) |

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
