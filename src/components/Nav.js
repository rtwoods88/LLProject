import { NavLink } from "react-router-dom";
import logo from "../images/Logo.svg"

function Nav(props){
    return (
            <ul className={"navbar-nav " + props.className}>
                <li className='nav-item'><NavLink
                to="/"
                className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
                  Home
                </NavLink></li>
                <li className='nav-item'><NavLink
                to="/about"
               className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
                    About
                </NavLink></li>
                <li className='nav-item'><NavLink
                to="/menu"
               className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
                    Menu
                </NavLink></li>
                <li className='nav-item'><NavLink
                to="/reservations"
               className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
                    Reservation
                </NavLink></li>
                <li className='nav-item'><NavLink
                to="/order-online"
               className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
                    Order Online
                </NavLink></li>
                <li className='nav-item'><NavLink
                to="/login"
               className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>
                    Login
                </NavLink></li>
            </ul>
    )
}

export default Nav