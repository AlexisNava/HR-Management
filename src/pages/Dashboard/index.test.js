import React from 'react';
import { render } from '@testing-library/react';

// Component
import Dashboard from './index';

it('should render the text `Dashboard`', () => {
  const { getByText } = render(<Dashboard />);

  expect(getByText('Dashboard')).toBeInTheDocument();
});
