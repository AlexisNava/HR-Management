import React from 'react';
import { render } from '@testing-library/react';

// Component
import LogIn from './index';

it('should render the text `Log In`', () => {
  const { getByText } = render(<LogIn />);

  expect(getByText('Log In')).toBeInTheDocument();
});
