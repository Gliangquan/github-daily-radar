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

Updated: 2026-04-28T01:44:41.836Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | op7418/guizang-ppt-skill | HTML | 3450 | [Open](https://github.com/op7418/guizang-ppt-skill) |
| 2 | victorchen96/deepseek_v4_rolepaly_instruct | Unknown | 1310 | [Open](https://github.com/victorchen96/deepseek_v4_rolepaly_instruct) |
| 3 | deepseek-ai/TileKernels | Python | 1282 | [Open](https://github.com/deepseek-ai/TileKernels) |
| 4 | freestylefly/awesome-gpt-image-2 | Unknown | 1276 | [Open](https://github.com/freestylefly/awesome-gpt-image-2) |
| 5 | openclaw/clawsweeper | JavaScript | 1199 | [Open](https://github.com/openclaw/clawsweeper) |
| 6 | earthtojake/text-to-cad | JavaScript | 954 | [Open](https://github.com/earthtojake/text-to-cad) |
| 7 | 0x0funky/agent-sprite-forge | Python | 871 | [Open](https://github.com/0x0funky/agent-sprite-forge) |
| 8 | Russell-cell/PPT-Design-Prompt | Python | 830 | [Open](https://github.com/Russell-cell/PPT-Design-Prompt) |
| 9 | wuyoscar/gpt_image_2_skill | Python | 819 | [Open](https://github.com/wuyoscar/gpt_image_2_skill) |
| 10 | GammaLabTechnologies/harmonist | Python | 748 | [Open](https://github.com/GammaLabTechnologies/harmonist) |

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
