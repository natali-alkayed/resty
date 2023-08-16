import React from 'react';
import { render } from '@testing-library/react';
import App from '../app';

test('renders App component', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Header/i);
  const formElement = getByText(/URL:/i);
  const resultsElement = getByText(/Loading.../i);
  const footerElement = getByText(/Footer/i);
  
  expect(headerElement).toBeInTheDocument();
  expect(formElement).toBeInTheDocument();
  expect(resultsElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
