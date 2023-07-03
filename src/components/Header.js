import Nav from './Nav';
import logo from '../images/Logo.svg';

function Header() {
  return (
    <header className="header container navbar navbar-expand-lg">
      <div className="m-lg-auto d-flex container-fluid justify-content-lg-center">
        <a className="navbar-brand p-0">
          <img src={logo} alt="" />
        </a>
        <button
          class="navbar-toggler ms-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav className="main-nav">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav />
        </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
