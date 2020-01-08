import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbarMain">
        <ul>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
