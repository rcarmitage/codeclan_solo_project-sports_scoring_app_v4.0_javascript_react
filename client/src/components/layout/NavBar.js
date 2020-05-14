import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul id="nav">
    <li>
      <Link className="btn" to="/">Home</Link>
    </li>
    <li>
      <Link className="btn" to="/teams">Teams</Link>
    </li>
    <li>
      <Link className="btn" to="/fixtures">Fixtures</Link>
    </li>
    <li>
      <Link className="btn" to="/league-table">League Table</Link>
    </li>
    <li>
      <Link className="btn" to="/about">About</Link>
    </li>
  </ul>
)

export default NavBar;
