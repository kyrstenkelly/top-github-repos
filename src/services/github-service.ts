import { Octokit } from '@octokit/rest';
import { CommitProps, RepoProps } from '../components';

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

export const fetchTopStarredRepos = async (): Promise<RepoProps[]> => {
  try {
    const { data } = await octokit.rest.search.repos({
      q: 'stars:>1000',
      per_page: 100,
      page: 0,
      sort: 'stars'
    });

    return data.items.map(i => ({
      name: i.name,
      owner: i.owner.login,
      url: i.html_url,
      stars: i.stargazers_count
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}

export const fetchRecentCommits = async (owner: string, repo: string): Promise<CommitProps[]> => {
  try {
    // TODO: fetch data until we reach 24 hours ago
    const { data } = await octokit.rest.repos.listCommits({
      owner,
      repo,
      per_page: 100,
    });

    return data.map(c => ({
      author: c.commit?.author?.name,
      date: c.commit?.author?.date,
      message: c.commit?.message,
      sha: c.sha,
      url: c.html_url
    }));
  } catch (e) {
    console.error(e);
    return [];
  }
}
