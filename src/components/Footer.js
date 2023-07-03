import Nav from './Nav';
import logo from '../images/Logo.svg';

function Footer(){
    return (
        <footer className="footer row container justify-content-between m-auto">
            <div className='col-3 d-flex align-items-center'>
            <a href="/"><img src={logo} /></a>
            </div>
            <div className='col-3'>
            <h3>Navigation</h3>
            <nav className='navbar'>
            <Nav/>
            </nav>
            </div>
            <div className='col-3'>
            <h3>Contact</h3>
            <nav className='navbar'>
            <ul className='navbar-nav'>
                <li className="nav-item">1234 Main St.,<br/> Somewhere, CA 12345</li>
                <li className="nav-item">555-555-5555</li>
                <li className="nav-item">contact@littlelemon.com</li>
            </ul>
            </nav>
            </div>
            <div className='col-3'>
            <h3>Follow Us</h3>
            <nav className='navbar navbar-expand'>
            <ul className='navbar-nav'>
                <li className="nav-item px-2">FB</li>
                <li className="nav-item px-2">IG</li>
                <li className="nav-item px-2">LN</li>
            </ul>
            </nav>
            </div>
        </footer>
    )
}

export default Footer