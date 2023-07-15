import Button from "./LL-Button";
import platter from "../images/platter.jpg"

function Hero(){
  return (
  <section className="container-fluid hero-container mb-5 ">
        <div className="container col-9 m-auto py-5 position-relative">
        <div className="col-12 position-absolute w-100 h-100 top-0 start-0">
                <div className="img-container col-md-6 col-xxl-4">

                </div>

            </div>
            <div className="hero-text col-4 col-xl-3 me-auto">
            <h2 className="hero-header fw-medium m-0 text-nowrap ">Little Lemon</h2>
            <small className="text-white m-0 ">Chicago</small>
            <p className="text-white mt-3">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button>Reserve a Table</Button>
            </div>
        </div>
    </section>
    )
}

export default Hero