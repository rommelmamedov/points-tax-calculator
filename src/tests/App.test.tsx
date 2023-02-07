import { describe, it } from 'vitest';

import { render } from '@testing-library/react';

import { App } from '@points/components/App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
  });
});
