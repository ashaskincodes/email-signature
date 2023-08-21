import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Email Signature Generator/i);
  expect(linkElement).toBeInTheDocument();
});
