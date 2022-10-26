import { render, screen } from '@testing-library/react';
import SearchBox from './SearchBox';
import userEvent from "@testing-library/user-event";

it("search for input box and placeholder text ",()=>{
    render(<SearchBox />);

    const inputPlaceholder=screen.getByPlaceholderText(/Enter Beer Search Criteria/i);
  

        expect(inputPlaceholder).toBeInTheDocument();
        expect (inputPlaceholder).toBeTruthy();
      });
    

    //Assertions
  