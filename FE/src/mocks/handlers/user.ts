import { rest } from 'msw';

export const GET_USER_INFO = rest.get('', (req, res, ctx) =>
  res(ctx.status(200), ctx.delay(1000), ctx.json({ response: 'success' })),
);
