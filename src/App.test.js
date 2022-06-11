import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Platforms link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Platforms/i);
  expect(linkElement).toBeInTheDocument();
});
