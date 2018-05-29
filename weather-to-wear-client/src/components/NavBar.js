import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div style={{ paddingBottom: '10px', marginBottom: '12px' }}>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/forecast"
      >
        Home
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/login"
      >
        Log In
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/signup"
      >
        Sign Up
      </NavLink>
    </div>
  );
}

export default NavBar;
