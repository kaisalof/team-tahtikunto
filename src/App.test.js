import { render, screen } from '@testing-library/react';
import App from './App';
//const linkElement = screen.getByText(/learn react/i);
//expect(linkElement).toBeInTheDocument();
test('renders app title element', () => {
  render(< App />);
  
  
  const titleElement = screen.getByText(/React Posts Sharer/i);
  expect(titleElement).toBeInTheDocument();
});