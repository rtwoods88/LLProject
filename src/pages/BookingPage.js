import BookingForm from '../components/BookingForm';
import { useNavigate } from 'react-router-dom';
import {fetchAPI, submitAPI} from '../api/api';

function BookingPage(props){
    const navigate = useNavigate()

    function submitForm(formData) {
        if (submitAPI(formData)){
          navigate('/reservation-confirmed')
        }
        else{
            return
        } }
    return (
        <BookingForm availableTimes={props.timeSlots} showAvailableTimes={props.updateTimes} onSubmit={submitForm}/>
    )
}

export default BookingPage