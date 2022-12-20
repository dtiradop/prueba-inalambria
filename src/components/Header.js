import React from "react";

function Header() {
  return (
    <nav className="navbar bg-light">
      <div className="container">
        <a className="navbar-brand" href="https://inalambria.com/">
          <img
            src="https://inalambria.com/wp-content/uploads/2020/05/logo.png"
            alt="Bootstrap"
            width="200"
            height="40"
          ></img>
        </a>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              href="https://inalambria.com/"
            >
              Inicio
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="https://inalambria.com/">
              Geolocalización
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
