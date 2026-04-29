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

Updated: 2026-04-29T01:47:46.763Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | op7418/guizang-ppt-skill | HTML | 3837 | [Open](https://github.com/op7418/guizang-ppt-skill) |
| 2 | freestylefly/awesome-gpt-image-2 | Unknown | 1722 | [Open](https://github.com/freestylefly/awesome-gpt-image-2) |
| 3 | victorchen96/deepseek_v4_rolepaly_instruct | Unknown | 1459 | [Open](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct) |
| 4 | nexu-io/open-design | TypeScript | 1332 | [Open](https://github.com/nexu-io/open-design) |
| 5 | openclaw/clawsweeper | JavaScript | 1277 | [Open](https://github.com/openclaw/clawsweeper) |
| 6 | 0x0funky/agent-sprite-forge | Python | 1042 | [Open](https://github.com/0x0funky/agent-sprite-forge) |
| 7 | GammaLabTechnologies/harmonist | Python | 841 | [Open](https://github.com/GammaLabTechnologies/harmonist) |
| 8 | future-agi/future-agi | Python | 707 | [Open](https://github.com/future-agi/future-agi) |
| 9 | epoko77-ai/im-not-ai | Python | 594 | [Open](https://github.com/epoko77-ai/im-not-ai) |
| 10 | alash3al/stash | Go | 515 | [Open](https://github.com/alash3al/stash) |

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
