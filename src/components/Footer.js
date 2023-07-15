import Nav from './Nav';
import logo from '../images/square-logo.png';

function Footer(){
    return (
        <footer className="footer container-fluid">
            <div className="container col-9 m-auto row justify-content-between px-0 py-5">
            <div className='col-3 d-flex align-items-center justify-content-center px-0'>
            <a href="/"><img src={logo} className='w-100'/></a>
            </div>
            <div className='col-3 d-flex flex-column align-items-center'>
            <h3>Navigation</h3>
            <nav className='navbar'>
            <Nav className=" text-center"/>
            </nav>
            </div>
            <div className='col-3  d-flex flex-column align-items-center'>
            <h3>Contact</h3>
            <nav className='navbar'>
            <ul className='navbar-nav text-center'>
                <li className="nav-item">1234 Main St.,<br/> Somewhere, CA 12345</li>
                <li className="nav-item">555-555-5555</li>
                <li className="nav-item">contact@littlelemon.com</li>
            </ul>
            </nav>
            </div>
            <div className='col-3  d-flex flex-column align-items-center'>
            <h3>Follow Us</h3>
            <nav className='navbar navbar-expand'>
            <ul className='navbar-nav text-center'>
                <li className="nav-item px-2">FB</li>
                <li className="nav-item px-2">IG</li>
                <li className="nav-item px-2">LN</li>
            </ul>
            </nav>
            </div>
            </div>
        </footer>
    )
}

export default Footer