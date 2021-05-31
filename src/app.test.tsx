import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import repos from './mocks/data/repositories';
import App from './app';

test('Renders a loading message and then data', async () => {
  await waitFor(async () => {
    render(<App />);
    expect(await screen.findByText('Loading...')).toBeInTheDocument();
  });

  repos.forEach(async (r) => {
    expect(await screen.findByTestId(r.name)).toBeInTheDocument();
  });
});
