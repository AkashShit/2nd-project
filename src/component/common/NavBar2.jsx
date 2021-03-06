import React from 'react'
import{Link}from 'react-router-dom';
const NavBar2 = () => {
  return (
    <div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">about</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to="/contact" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link className="dropdown-item" to="#">Action</Link>
          <Link className="dropdown-item" to="#">Another action</Link>
          <div className="dropdown-divider"></div>
          <Link className="dropdown-item" to="#">Something else here</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="#">Disabled</Link>
      </li>
    </ul>
    </div>
  )
}

export default NavBar2