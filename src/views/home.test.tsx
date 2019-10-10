import React from 'react';
import { render } from '@testing-library/react';
import Home from './home';


describe('<Home />', () => {
  it('renders user with status enabled', () => {
    const { container } = render(<Home name="Alex" status />);
    expect(container.querySelector('h1')!.textContent).toBe('Hello Alex');
    expect(container.querySelector('h2')!.textContent).toBe('Your status is enabled');
  });

  it('renders user with status disabled', () => {
    const { container } = render(<Home name="Max" />);
    expect(container.querySelector('h1')!.textContent).toBe('Hello Max');
    expect(container.querySelector('h2')!.textContent).toBe('Your status is disabled');
  });
});
