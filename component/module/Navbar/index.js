import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className="container-fluid">
        <div className="col d-flex">
          <ul className={styles.links}>
            <li>Home</li>
            <li>Add Recipe</li>
            <li>Profile</li>
          </ul>
          <p>Login</p>
        </div>
        {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              Features
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
              Disabled
            </a>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
