import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders HelloWorld with correct text content', () => {
  render(<HelloWorld />);
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent('Hello world');
});
