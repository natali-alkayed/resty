import React from 'react';
import { render } from '@testing-library/react';
import Results from './index';

test('displays loading message', () => {
  const { getByText } = render(<Results loading={true} />);
  const loadingMessage = getByText(/Loading.../i);

  expect(loadingMessage).toBeInTheDocument();
});

test('displays response data', () => {
  const response = { data: 'Sample data' };
  const { getByText } = render(<Results response={response} />);
  const responseData = getByText(/Sample data/i);

  expect(responseData).toBeInTheDocument();
});
