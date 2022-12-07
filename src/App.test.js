import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Dog breed view', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dogs Challenge/i);
  expect(linkElement).toBeInTheDocument();
});
