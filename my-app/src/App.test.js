import { render, screen } from '@testing-library/react';
import DynamicApp from './App';
// import TicTacToe from './Akoo';


test('renders learn react link', () => {
  render(<DynamicApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
