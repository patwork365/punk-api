import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("should not check Page Title present",()=>{
  render(<App />);
  const Title=screen.queryByText(/Beer List/i);
  expect (Title).toBeInTheDocument();
  expect (Title).toBeTruthy();
})