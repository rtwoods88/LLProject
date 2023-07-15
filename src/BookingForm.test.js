import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import BookingPage from "./pages/BookingPage";
import Homepage from "./pages/HomePage";
import Main from "./components/Main";
import App from "./App";
import About from "./pages/AboutPage";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { initializeTimes } from "./components/Main";
import { updateTimes } from "./components/Main";


describe('booking form',() => {
  test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} showAvailableTimes={[]}/>);
    const headingElement = screen.getByText(/Make Your Reservation/);
    expect(headingElement).toBeInTheDocument();
})

test('Returns correct times', () => {

 expect(initializeTimes()).toStrictEqual(['17:00','18:00','19:00','20:00','21:00','22:00'])

});

test('Returns updated times', () => {
 const updatedTimes = updateTimes()
 updatedTimes.call = jest.fn()

 expect(updatedTimes.call).toStrictEqual(['17:00','18:00','19:00','20:00','21:00','22:00'])
   });

})



