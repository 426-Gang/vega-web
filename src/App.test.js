import { render, screen } from '@testing-library/react';
import App from './App';
import LogoImage from "./components/UI/atoms/LogoImage";
import VenusNavBar from "./components/UI/molecules/VenusNavBar";

test('renders Platforms link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Platforms/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Logo Image', () => {
  render(<LogoImage />);
  const linkElement = screen.getByRole('img');
  expect(linkElement.src).toContain('/logo.png');
});

test('renders Home link in nav bar', () => {
  render(<VenusNavBar />);
  const linkElement = screen.getByText('Home');
  expect(linkElement.href).toContain('/');
});
