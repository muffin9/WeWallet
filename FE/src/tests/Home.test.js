import Home from '@/pages/index';

import { render, screen } from '@testing-library/react';

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {
      name: 'TweetMate',
    });
    expect(heading).toBeInTheDocument();
  });
});
