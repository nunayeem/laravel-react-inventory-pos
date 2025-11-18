import { Link } from "react-router-dom";
import "../../assets/css/styles.css";
import $ from 'jquery'

function Nav() {
    const handleSidebar = () => {
        $('body').toggleClass('sb-sidenav-toggled')
    }
  return (
    <>
      <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <Link class="navbar-brand ps-3" to="/">React POS</Link>
            {/* <!-- Sidebar Toggle--> */}
            <button onClick={handleSidebar} class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
           
            {/* <!-- Navbar--> */}
            <ul className="navbar-nav ms-auto me-3 me-lg-4">

                <li className="nav-item d-flex align-items-center">
                    <p 
                        className="ms-0 mb-0"
                        style={{ color: 'white', padding: 0, margin: 0 }}
                    >
                        Admin
                    </p>
                </li>

                <li className="nav-item dropdown">
                    <a 
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        <i className="fas fa-user fa-fw"></i>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>

            </ul>

        </nav>
    </>
  );
}

export default Nav;
