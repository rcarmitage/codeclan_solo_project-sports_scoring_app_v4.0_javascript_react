import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/teams">Teams</Link>
    </li>
    <li>
      <Link to="/fixtures">Fixtures</Link>
    </li>
    <li>
      <Link to="/league-table">League Table</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

export default NavBar;