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

Updated: 2026-04-21T01:18:55.426Z

| Rank | Repository | Language | Stars | Link |
|---:|---|---|---:|---|
| 1 | kyegomez/OpenMythos | Python | 4244 | [Open](https://github.com/kyegomez/OpenMythos) |
| 2 | browser-use/browser-harness | Python | 3583 | [Open](https://github.com/browser-use/browser-harness) |
| 3 | Robbyant/lingbot-map | Python | 3267 | [Open](https://github.com/Robbyant/lingbot-map) |
| 4 | lewislulu/html-ppt-skill | HTML | 1653 | [Open](https://github.com/lewislulu/html-ppt-skill) |
| 5 | Nightmare-Eclipse/RedSun | C++ | 1642 | [Open](https://github.com/Nightmare-Eclipse/RedSun) |
| 6 | Manavarya09/design-extract | JavaScript | 1155 | [Open](https://github.com/Manavarya09/design-extract) |
| 7 | wbh604/UZI-Skill | Python | 968 | [Open](https://github.com/wbh604/UZI-Skill) |
| 8 | cathrynlavery/diagram-design | HTML | 961 | [Open](https://github.com/cathrynlavery/diagram-design) |
| 9 | WeaveMindAI/weft | Rust | 911 | [Open](https://github.com/WeaveMindAI/weft) |
| 10 | EvoLinkAI/awesome-gpt-image-2-prompts | Unknown | 839 | [Open](https://github.com/EvoLinkAI/awesome-gpt-image-2-prompts) |

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
