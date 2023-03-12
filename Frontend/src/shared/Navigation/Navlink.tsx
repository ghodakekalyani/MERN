import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlink.less";

const Navlink = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">All Users</NavLink>
      </li>
      <li>
        <NavLink to="/places">All Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add Places</NavLink>
      </li>
      <li>
        <NavLink to="/auth">Athenticate</NavLink>
      </li>
    </ul>
  );
};

export default Navlink;
