// import React from 'react';
// import { render, fireEvent, waitFor } from '@testing-library/react';
// import App from '../app';

// describe('App component', () => {
//   it('loads and displays the starting application', () => {
//     const { getByText } = render(<App />);
//     const headerElement = getByText(/Header/i);
//     const formElement = getByText(/URL:/i);
//     const loadingElement = getByText(/Loading.../i);
//     const footerElement = getByText(/Footer/i);

//     expect(headerElement).toBeInTheDocument();
//     expect(formElement).toBeInTheDocument();
//     expect(loadingElement).toBeInTheDocument(); // Initial loading state
//     expect(footerElement).toBeInTheDocument();
//   });

//   it('can fetch the URL and method', async () => {
//     const { getByLabelText, getByText } = render(<App />);
//     const urlInput = getByLabelText(/URL:/i);
//     const methodButton = getByText(/GET/i);

//     fireEvent.change(urlInput, { target: { value: 'https://jsonplaceholder.typicode.com/posts/1' } });
//     fireEvent.click(methodButton);

//     await waitFor(() => {
//       expect(urlInput.value).toBe('https://jsonplaceholder.typicode.com/posts/1');
//       expect(methodButton).toHaveClass('active');
//     });
//   });

//   it('sends a response', async () => {
//     global.fetch = jest.fn().mockResolvedValue({
//       json: () => Promise.resolve({ message: 'Response data' }),
//     });

//     const { getByLabelText, getByText } = render(<App />);
//     const urlInput = getByLabelText(/URL:/i);
//     const methodButton = getByText(/GET/i);
//     const submitButton = getByText(/Submit/i);

//     fireEvent.change(urlInput, { target: { value: 'https://jsonplaceholder.typicode.com/posts/1' } });
//     fireEvent.click(methodButton);
//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(global.fetch).toHaveBeenCalledTimes(1);
//       expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1', expect.any(Object));
//     });
//   });
// });
