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

Updated: 2026-05-22T02:01:04.331Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | FoundZiGu/GuJumpgate | JavaScript | 1454 | [Open](https://github.com/FoundZiGu/GuJumpgate) |
| 2 | thananon/9arm-skills | Shell | 1167 | [Open](https://github.com/thananon/9arm-skills) |
| 3 | Doorman11991/smallcode | JavaScript | 1083 | [Open](https://github.com/Doorman11991/smallcode) |
| 4 | sapientinc/HRM-Text | Python | 631 | [Open](https://github.com/sapientinc/HRM-Text) |
| 5 | xw7872081123/wallpaper-engine-steam | TypeScript | 618 | [Open](https://github.com/xw7872081123/wallpaper-engine-steam) |
| 6 | BasZ4ll/Stable-Diffusion-WebUI | TypeScript | 598 | [Open](https://github.com/BasZ4ll/Stable-Diffusion-WebUI) |
| 7 | arnabchoudhury404/hydra-launcher | TypeScript | 596 | [Open](https://github.com/arnabchoudhury404/hydra-launcher) |
| 8 | Flizorules05/ROM-MGBA-Pokemon-Emulator-PC | Unknown | 595 | [Open](https://github.com/Flizorules05/ROM-MGBA-Pokemon-Emulator-PC) |
| 9 | Sunislazi/rbxfpsunlocker-boost-More-240FPS | TypeScript | 592 | [Open](https://github.com/Sunislazi/rbxfpsunlocker-boost-More-240FPS) |
| 10 | ZoyaMalhotra/DualSenseX-DSX-Steam-Edition | C++ | 587 | [Open](https://github.com/ZoyaMalhotra/DualSenseX-DSX-Steam-Edition) |

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
