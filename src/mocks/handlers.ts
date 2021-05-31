import { rest } from 'msw';
import repositories from './data/repositories';
import commits from './data/commits';

export const handlers = [
  rest.get('https://api.github.com/search/repositories', (req, res, ctx) => {

    return res(
      ctx.status(200),
      ctx.json({ items: repositories }),
    )
  }),

  rest.get('https://api.github.com/repos/:owner/:repo/commits', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(commits),
    )
  })
];
