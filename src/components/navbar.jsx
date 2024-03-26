import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              {props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link
                  className="nav-link active mrg"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
};
export default Navbar;
Navbar.prototype = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "nothing sent",
};
