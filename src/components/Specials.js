import Button from "./LL-Button";
import { Link } from "react-router-dom";
import Card from "./Card";
import greekSalad from '../images/greekSalad.jpg';
import lemonDessert from '../images/lemonDessert.jpg';
import bruchetta from '../images/bruchetta.svg';

function Specials() {
    return(
        <section className="specials-section mb-5">
            <header className="py-5">
                <div className="col-9 m-auto d-flex container ">
                    <h2 className="col-9 ">This Weeks Specials!</h2>
                    <div className=" col-3 ms-auto d-flex align-items-center">
                    <Link className= 'ms-auto w-100 position-relative'>
                        <Button className='ms-auto text-nowrap d-block w-100 w-md-75 fs-md-5 py-2 fs-4' >Online Menu</Button>
                    </Link>
                    </div>

                </div>
            </header>
            <div className="col-9 container d-flex flex-column flex-md-row column-gap-3 gap-4 flex-wrap justify-content-md-between">
                <Card background={greekSalad} title='Greek Salad' price='$12.99' className='col-md'>
                    The famous greek salad of crispy lettuce, peppers. olives and our CHicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </Card>
                <Card background={bruchetta} title='Bruchetta' price='$5.99' className='col-md'>
                    Our Brushetta is made from grilled bread taht has been smeared with garlic and seasoned with salt and olive oil.
                </Card>
                <Card background={lemonDessert} title='Lemon Dessert' price='$5.00' className='col-md'> this comes straight from grandma's recipe book.Every last ingredient has been sourced and is as authentic as can be imagined.</Card>
            </div>

        </section>
    )
}

export default Specials