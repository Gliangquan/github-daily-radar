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

Updated: 2026-08-29T04:31:45.720Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | HEJustinSun/my-girlfriend-jingtian-latex | TeX | 3746 | [Open](https://github.com/HEJustinSun/my-girlfriend-jingtian-latex) |
| 2 | b-nnett/grok-bot-0.18-reconstructed | TypeScript | 3410 | [Open](https://github.com/b-nnett/grok-bot-0.18-reconstructed) |
| 3 | tobi/walgit | Rust | 2304 | [Open](https://github.com/tobi/walgit) |
| 4 | sapientinc/PRAXIST | Python | 1773 | [Open](https://github.com/sapientinc/PRAXIST) |
| 5 | bryllim/workout-guide | Astro | 983 | [Open](https://github.com/bryllim/workout-guide) |
| 6 | wide-trace/open-higgsfield | TypeScript | 980 | [Open](https://github.com/wide-trace/open-higgsfield) |
| 7 | Tencent/WeMM-Embedding | Python | 841 | [Open](https://github.com/Tencent/WeMM-Embedding) |
| 8 | ShadowAqueduct/watermark-remover | Python | 827 | [Open](https://github.com/ShadowAqueduct/watermark-remover) |
| 9 | themartiano/try-omarchy | Swift | 769 | [Open](https://github.com/themartiano/try-omarchy) |
| 10 | yding-git/personal-edge-proxy | Unknown | 666 | [Open](https://github.com/yding-git/personal-edge-proxy) |

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
