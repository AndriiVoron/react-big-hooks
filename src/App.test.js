import { render, screen } from '@testing-library/react';
import AppHead from './AppHead';

test('renders learn react link', () => {
  render(<AppHead />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
