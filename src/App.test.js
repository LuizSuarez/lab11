import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('checks if Banana is present in the list', () => {
  render(<ItemList />);
  const banana = screen.getByText('Banana');
  expect(banana).toBeInTheDocument();
});
