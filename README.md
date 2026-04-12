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

Updated: 2026-04-12T01:18:46.324Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | farzaa/clicky | Swift | 3779 | [Open](https://github.com/farzaa/clicky) |
| 2 | xixu-me/awesome-persona-distill-skills | JavaScript | 3175 | [Open](https://github.com/xixu-me/awesome-persona-distill-skills) |
| 3 | alchaincyf/hermes-agent-orange-book | Unknown | 1869 | [Open](https://github.com/alchaincyf/hermes-agent-orange-book) |
| 4 | KKKKhazix/khazix-skills | Unknown | 1584 | [Open](https://github.com/KKKKhazix/khazix-skills) |
| 5 | mattmireles/gemma-tuner-multimodal | Python | 1195 | [Open](https://github.com/mattmireles/gemma-tuner-multimodal) |
| 6 | yizhiyanhua-ai/fireworks-tech-graph | Shell | 977 | [Open](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) |
| 7 | phuryn/claude-usage | Python | 851 | [Open](https://github.com/phuryn/claude-usage) |
| 8 | wxtsky/CodeIsland | Swift | 835 | [Open](https://github.com/wxtsky/CodeIsland) |
| 9 | adamlyttleapps/claude-skill-app-onboarding-questionnaire | Unknown | 740 | [Open](https://github.com/adamlyttleapps/claude-skill-app-onboarding-questionnaire) |
| 10 | nashsu/llm_wiki | TypeScript | 718 | [Open](https://github.com/nashsu/llm_wiki) |

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
