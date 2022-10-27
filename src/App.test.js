import { render, screen } from '@testing-library/react';
import App from './App';

test('renders whole app', () => {
  const { getByTestId } = render(<App />);

  // App
  const app = getByTestId('app');
  expect(app).toBeInTheDocument();

  // Header
  const header = getByTestId('header');
  expect(header).toBeInTheDocument();

  // Main
  const main = getByTestId('main');
  expect(main).toBeInTheDocument();

  // Footer
  const footer = getByTestId('footer');
  expect(footer).toBeInTheDocument();
});
