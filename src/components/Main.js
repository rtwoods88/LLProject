import React, { useEffect } from 'react';
import Homepage from '../pages/HomePage';
import About from '../pages/AboutPage';
import Login from '../pages/Login';
import BookingPage from '../pages/BookingPage';
import Menu from '../pages/Menu';
import OrderOnline from '../pages/Order-Online';
import RootLayout from '../pages/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useReducer } from 'react';
import {fetchAPI, submitAPI} from '../api/api';
import ConfirmedBooking from '../pages/ConfirmedBooking';


function Main() {
  const today = new Date()
  const initializeTimes= fetchAPI(today)

   const updateTimes = (state,action) => {
    if(action.type === 'RESERVE'){
        const updatedSlots = fetchAPI(action.date)
        return updatedSlots
    }
    return initializeTimes
}

  const [availableTimes,setAvailableTimes]= useReducer(updateTimes,initializeTimes)

const reservationHandler = (date) => {
    setAvailableTimes({type:'RESERVE', date: date })
}

  const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout />,
      children: [
        {index:true,element: <Homepage />},
        {path:'/about',element: <About />},
        {path:'/menu',element: <Menu />},
        {path:'/order-online',element: <OrderOnline />},
        {path:'/reservations',element: <BookingPage timeSlots={availableTimes} updateTimes={reservationHandler} />},
        {path:'/login',element: <Login />},
        {path:'/reservation-confirmed',element: <ConfirmedBooking />},
      ]
  }
  ])
  return (
    <RouterProvider  router={router}/>
  );
}

export default Main;
