import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Navbar=(props)=>{
    return <>
    <nav class="navbar bg-dark" data-bs-theme="dark">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand logo" href="#">{props.title}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link active mrg" aria-current="page" to="/" >Home</Link>
        <Link class="nav-link" to="/about">About</Link>
      </div>
    </div>
  </div>
</nav>
</nav>
    </>
}
export default Navbar;
Navbar.prototype={
    title:PropTypes.string,
}
Navbar.defaultProps={
    title:"nothing sent"
}