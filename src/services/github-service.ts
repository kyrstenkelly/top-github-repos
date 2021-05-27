import { Octokit } from '@octokit/rest';
import { RepoCardProps } from '../components';

// TODO: Type this better. Struggling to find good Typescript examples for octokit.

const octokit = new Octokit({
  baseUrl: 'https://api.github.com',
  log: {
    debug: () => {},
    info: () => {},
    warn: console.warn,
    error: console.error
  },
});

export const fetchTopStarredRepos = async (): Promise<RepoCardProps[]> => {
  const { data } = await octokit.rest.search.repos({
    q: 'stars:>1000',
    per_page: 100,
    page: 0,
    sort: 'stars'
  });

  const simplifiedData = data.items.map(i => ({
    name: i.full_name,
    url: i.html_url,
    stars: i.stargazers_count
  }))

  return simplifiedData;
}
