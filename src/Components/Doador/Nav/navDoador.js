import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import './navDoador.css';

function NavBarDoador() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <Container>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink
                  to="/caixa-entrada-doador"
                  className="nav-link ativo"
                  activeClassName="active-link"
                >
                  Caixa de Entrada
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/ong-doador"
                  className={`nav-link ativo ${location.pathname.includes('/ong') ? 'active-link' : ''}`}
                >
                  Ongs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/doador-perfil"
                  className="nav-link profile-icon"
                  activeClassName="active-link"
                >
                  <FaUserCircle size={50} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBarDoador;
