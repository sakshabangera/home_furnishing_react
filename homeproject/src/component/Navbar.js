import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-white py-3 shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-4" href="#">RentFurlax</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <Link to={"/"}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        </Link>
        {/* <Link to="/product">
        <li className="nav-item">
          <a className="nav-link">Products</a>
        </li>
        </Link> */}
      </ul>
      <div className="buttons">
      <Link to="/login">
        <a href="" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-2" aria-hidden="true"></i>Login
        </a>
        </Link>
        <Link to="/register" >
        <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-2" aria-hidden="true" ></i>Register
        </a>
        </Link>
        <Link to="/cart">
        <a href="" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-2" aria-hidden="true"></i>Cart (0)
        </a>
        </Link>
      </div>
    </div>
  </div>
</nav>
        
    </div>
    );

}
export default Navbar;