import React from 'react';
import { render } from '@testing-library/react';

// Component
import NotFound from './index';

it('should render the text `Not Found`', () => {
  const { getByText } = render(<NotFound />);

  expect(getByText('Not Found 404')).toBeInTheDocument();
});
