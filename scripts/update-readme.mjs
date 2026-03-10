import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const OWNER = 'Gliangquan';
const REPO = 'github-daily-radar';
const README_PATH = new URL('../README.md', import.meta.url);
const DATA_PATH = new URL('../data/trending.json', import.meta.url);
const DAYS = 7;
const LIMIT = 10;

function isoDateDaysAgo(days) {
  const d = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

async function githubJson(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': `${OWNER}-${REPO}`,
      'Accept': 'application/vnd.github+json'
    }
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

function toMarkdown(items, updatedAt) {
  const lines = [];
  lines.push(`Updated: ${updatedAt}`);
  lines.push('');
  lines.push('| Rank | Repository | Language | Stars | Link |');
  lines.push('|---:|---|---|---:|---|');
  for (const [index, repo] of items.entries()) {
    lines.push(`| ${index + 1} | ${repo.full_name} | ${repo.language ?? 'Unknown'} | ${repo.stargazers_count} | [Open](${repo.html_url}) |`);
  }
  lines.push('');
  lines.push('> Data source: GitHub Search API (`created:>last-7-days`, sorted by stars).');
  return lines.join('\n');
}

async function main() {
  const since = isoDateDaysAgo(DAYS);
  const query = encodeURIComponent(`created:>${since}`);
  const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=${LIMIT}`;
  const payload = await githubJson(url);
  const items = payload.items ?? [];
  const updatedAt = new Date().toISOString();

  mkdirSync(new URL('../data/', import.meta.url), { recursive: true });
  writeFileSync(DATA_PATH, JSON.stringify({ updatedAt, since, items }, null, 2) + '\n');

  const readme = readFileSync(README_PATH, 'utf8');
  const block = toMarkdown(items, updatedAt);
  const next = readme.replace(/<!-- RADAR:START -->[\s\S]*<!-- RADAR:END -->/, `<!-- RADAR:START -->\n\n${block}\n\n<!-- RADAR:END -->`);
  writeFileSync(README_PATH, next);

  console.log(`Updated ${items.length} repositories since ${since}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
