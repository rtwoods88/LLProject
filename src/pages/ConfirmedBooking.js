import Button from "../components/LL-Button";
import { useNavigate } from "react-router-dom";



function ConfirmedBooking(props) {
    const navigate= useNavigate()
    function returnHome(){
        navigate('/')
    }
    return (
        <section className="reservations-section container-fluid m-auto py-5 d-flex flex-column align-items-center">
            <header className="reservations-header mb-5"><h2>Little Lemon</h2></header>
            <div className="reservations-inner-container container col-9 py-5 d-flex flex-column align-items-center justify-content-center">
                <header className="form-header mb-3 text-center"><h2>Reservation Confirmed!</h2></header>
                <Button className="col-6 m-auto mt-5" type="button" value="Return to Home" onClick={returnHome}>Back to Home</Button>
</div>
</section>
    )
}

export default ConfirmedBooking