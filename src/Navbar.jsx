import React from "react";
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-sm bg-secondary navbar-light justify-content-end">
    <div className="container-fluid">
        <a className="navbar-brand" href="/" ><img className='img-fluid' src="ge.png" width="50" height="30"/><strong>Sai Toddler Toys</strong></a>
    <button className="navbar-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#myNavbar">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="myNavbar">
<ul className="navbar-nav ms-auto">
 <li className="nav-item">
    <Link to="/" className="nav-link active">Home</Link>
 </li>
 <li className="nav-item dropdown">
    
    <Link to="/Products" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Products</Link>
    <div className="dropdown-menu" >
    <Link to="/Edutoys"  className="dropdown-item" >Educational Toys</Link>
    <Link to="/Bctoys"  className="dropdown-item" >Building & Construction Toys</Link>
    <Link to="/Softtoys"  className="dropdown-item" >Soft Toys</Link>
    </div>

 </li>
 <li className="nav-item">
    <Link to="Contacts" className="nav-link ">Contact Us</Link>
 </li>
</ul>
</div>
    </div>
</nav>
    </div>
  )
}

export default Navbar
