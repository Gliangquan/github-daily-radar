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

Updated: 2026-09-18T01:51:37.202Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | browser-use/jev-ultrafast | Python | 2277 | [Open](https://github.com/browser-use/jev-ultrafast) |
| 2 | Chuloo/mural | Kotlin | 1319 | [Open](https://github.com/Chuloo/mural) |
| 3 | yifanzhang-pro/recurrent-looped-tranformer | HTML | 871 | [Open](https://github.com/yifanzhang-pro/recurrent-looped-tranformer) |
| 4 | TheoLeeCJ/openjev | Python | 827 | [Open](https://github.com/TheoLeeCJ/openjev) |
| 5 | zjwzcx/Awesome-Astra-Embodied-AI | Unknown | 825 | [Open](https://github.com/zjwzcx/Awesome-Astra-Embodied-AI) |
| 6 | agentverse-os/AgentVerse-OS | Rust | 750 | [Open](https://github.com/agentverse-os/AgentVerse-OS) |
| 7 | youngyangyang04/llm-master | Unknown | 688 | [Open](https://github.com/youngyangyang04/llm-master) |
| 8 | nilbuild/page-mascot | Python | 685 | [Open](https://github.com/nilbuild/page-mascot) |
| 9 | vinnylarouge/jevlike | Python | 681 | [Open](https://github.com/vinnylarouge/jevlike) |
| 10 | rizqinrr/viserys-agent | JavaScript | 662 | [Open](https://github.com/rizqinrr/viserys-agent) |

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
