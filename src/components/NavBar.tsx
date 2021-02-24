import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <Link className="navbar-brand" to="/">Usuarios</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/new-user">Nuevo Usuario</Link>
              </li>
              
            </ul>

          </div>
            </div>
        </nav>
      );
}

export default NavBar;
