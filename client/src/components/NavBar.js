import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul id="nav">
    <li>
      <Link class="btn" to="/">Home</Link>
    </li>
    <li>
      <Link class="btn" to="/teams">Teams</Link>
    </li>
    <li>
      <Link class="btn" to="/fixtures">Fixtures</Link>
    </li>
    <li>
      <Link class="btn" to="/league-table">League Table</Link>
    </li>
    <li>
      <Link class="btn" to="/about">About</Link>
    </li>
  </ul>
)

export default NavBar;