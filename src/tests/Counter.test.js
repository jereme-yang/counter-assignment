// import necessary react testing library helpers here
import { render, screen, fireEvent} from '@testing-library/react';
// import the Counter component here
import Counter from '../components/App';

beforeEach(() => {
  render(<Counter />);
});

test('renders counter message', () => {
  const messageElement = screen.getByText(/Counter/i);
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countElement = screen.getByText('0'); 
  expect(countElement).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+'); 
  fireEvent.click(incrementButton);
  const updatedCountElement = screen.getByText('1'); 
  expect(updatedCountElement).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-'); 
  fireEvent.click(decrementButton);
  const updatedCountElement = screen.getByText('-1'); 
  expect(updatedCountElement).toBeInTheDocument();
});