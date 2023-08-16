import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('displays the resulting data after form submission', async () => {
    const { getByText, getByLabelText } = render(<App />);

    // Fill the form
    const urlInput = getByLabelText('URL:');
    const submitButton = getByText('Submit');

    fireEvent.change(urlInput, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } });
    fireEvent.click(submitButton);

    // Wait for data to load
    await waitFor(() => getByText('bulbasaur'));

    // Assert the response data is displayed
    const responseData = getByText(/bulbasaur/i);
    expect(responseData).toBeInTheDocument();
  });
});
