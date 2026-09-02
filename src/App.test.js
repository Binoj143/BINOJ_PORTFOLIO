import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio brand identity', () => {
  render(<App />);
  const brandElement = screen.getByText(/Binoj/i);
  expect(brandElement).toBeInTheDocument();
});