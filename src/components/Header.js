import Nav from './Nav';
import logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header container-fluid navbar navbar-expand-lg">
      <div className="m-lg-auto col-9 justify-content-lg-center container ">
        <div className='col-12 d-flex'>
        <div className='col-3'><a className="navbar-brand p-0">
          <img src={logo} alt="" />
        </a>
        </div>
        <div className='col-9'>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="main-nav">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav className='col-12 d-flex justify-content-between' />
        </div>
        </nav>
        </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
