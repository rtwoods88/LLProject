// import { NavLink } from "react-router-dom";
import logo from "../images/Logo.svg"

function Nav(){
    return (
            <ul className="navbar-nav">
                <li
                to="/"
                className='nav-item'>
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li
                to="/about"
               className='nav-item'>
                    <a className="nav-link" href="/">About</a>
                </li>
                <li
                to="/menu"
               className='nav-item'>
                    <a className="nav-link" href="/">Menu</a>
                </li>
                <li
                to="/reservation"
               className='nav-item'>
                    <a className="nav-link" href="/">Reservation</a>
                </li>
                <li
                to="/order-online"
               className='nav-item'>
                    <a className="nav-link" href="/">Order Online</a>
                </li>
                <li
                to="/login"
               className='nav-item'>
                    <a className="nav-link" href="/">Login</a>
                </li>
            </ul>
    )
}

export default Nav