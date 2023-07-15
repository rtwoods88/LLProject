import { useState, useEffect } from "react";
import Button from "./LL-Button";
function BookingForm(props) {


const availableTimes = props.availableTimes
    const [formInputs, setFormInputs] = useState(
        {
            date:'',
            time:'',
            guests:'',
            occasion:'',
        }
    )

    const [formIsCompleted, setFormIsCompleted] = useState(formInputs.date & formInputs.time)

useEffect(() => {
  setFormIsCompleted(
        formInputs.date !='' & formInputs.time !='' & formInputs.guests != '' & formInputs.occasion != '' )
},[formInputs.date, formInputs.time, formInputs.guests, formInputs.occasion])


    console.log(formIsCompleted)
    

    const timeOptions = availableTimes.map(time => <option key={time} value={time}>{time}</option>)

    const updateDate= (e) => {
        setFormInputs((prevState) => {
          return { ...prevState, date: e.target.value };
        });
        const date = new Date(e.target.value)
        


        props.showAvailableTimes(date)
      };
    
      const updateTime= (e) => {
        setFormInputs((prevState) => {
          return { ...prevState, time: e.target.value };
        });
        

      };
    
      const updateGuests = (e) => {
        setFormInputs((prevState) => {
          return { ...prevState, guests: e.target.value };
        });
        
      };
    
      const updateOccasion= (e) => {
        setFormInputs((prevState) => {
          return { ...prevState, occasion: e.target.value };
        });
        

      };

      const requestBooking =(e) => {
        e.preventDefault()
        props.onSubmit(formInputs)
      }

    return (
        <section className="reservations-section container-fluid m-auto py-5 d-flex flex-column align-items-center">
            <header className="reservations-header mb-5"><h2>Little Lemon</h2></header>
            <div className="reservations-inner-container container col-9 py-5 d-flex flex-column align-items-center justify-content-center position-relative">
                <header className="form-header mb-3"><h2>Reserve A Table</h2></header>
        <form className="booking-form grid row row-gap-3 " onSubmit={requestBooking}>
            <div className="col-6 d-flex flex-column">
            <label htmlFor="res-date">Choose Date</label>
            <input required type="date" id="res-date" onChange={updateDate} value={formInputs.date} data-selected={formInputs.date} aria-label='Choose a date'/></div>
            
            <div className="col-6 d-flex flex-column">
   <label htmlFor="res-time">Choose Time</label>
   <select required id="res-time" onChange={updateTime} value={formInputs.time} data-selected={formInputs.time}aria-label='Choose a time'>
     {timeOptions}
   </select>
   </div>
   <div className="col-6 d-flex flex-column">
   <label htmlFor="guests">Number of Guests</label>
   <input required type="number" placeholder="1" min="1" max="10" id="guests" onChange={updateGuests} value={formInputs.guests} data-selected={formInputs.guests} aria-label="Number of guests"/></div>
   <div className="col-6 d-flex flex-column">
   <label htmlFor="occasion">Occasion</label>
   <select id="occasion" onChange={updateOccasion} value={formInputs.occasion} data-selected={formInputs.occasion} aria-label="The occasion">
      <option value=''>Occasion</option>
      <option value='None'>None</option>
      <option value='Birthday'>Birthday</option>
      <option value='Engagement'>Engagement</option>
      <option value='Anniversary'>Anniversary</option>
   </select>
   </div>
   <Button className="col-6 m-auto mt-5" type="submit" value="Make Your Reservation" disabled={!formIsCompleted}> Make Your Reservation</Button>
   {!formIsCompleted && <h2 className=" disabled-message position-absolute"> All Inputs Needed To Submit Form</h2>}
</form>
</div>
</section>
    )
}

export default BookingForm