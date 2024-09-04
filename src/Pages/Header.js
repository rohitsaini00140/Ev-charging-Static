import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/signup">Sign Up</NavLink>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
