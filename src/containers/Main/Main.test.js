import { render, screen } from '@testing-library/react';
import Main from './Main';
import userEvent from "@testing-library/user-event";


it("High ABV filer should be present",()=>{
    render(<Main />);
     //queryBy
     //only returns single node, if it finds multiple NULL returned 
     //if it finds more than one NONE is returned
    const Filter=screen.queryByText(/High ABV/i);
    expect (Filter).toBeInTheDocument();
    expect (Filter).toBeTruthy();
  })

//   it("should not submit form with invalid credentials and show warnings ",()=>{
//     render(<Form />);

//     const filterInput =screen.getByRole("textbox",{name:/Name/i});
//     userEvent.type(nameInput,"");

//     const emailInput =screen.getByRole("textbox",{name:/email/i});
//     userEvent.type(emailInput,"notvalidemail");

//     const button=screen.queryByText(/Sign In/);
//     userEvent.click(button);
    

//     //Assertions
//     const successMessge=screen.queryByText(/Thank you for submitting! We'll be in touch/);
//     expect (successMessge).not.toBeInTheDocument();
//     expect (successMessge).toBeFalsy(); 

// });