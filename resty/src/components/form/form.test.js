import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './index';

test('renders Form component', () => {
  const { getByLabelText, getByText } = render(<Form />);
  const urlInput = getByLabelText(/URL:/i);
  const submitButton = getByText(/Submit/i);

  expect(urlInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('displays loading message after clicking submit button', () => {
  const { getByText } = render(<Form loading={true} />);
  const loadingMessage = getByText(/Loading.../i);

  expect(loadingMessage).toBeInTheDocument();
});
