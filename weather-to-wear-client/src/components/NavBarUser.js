import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarUser = props => {
  return (
    <div className="navi">
      <NavLink
        style={{ marginRight: '10px' }}
        to="/forecast"
      >
        Forecast
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/settings"
      >
        Settings
      </NavLink>
      <NavLink
        style={{ marginRight: '10px' }}
        to="/logout"
      >
        Log Out
      </NavLink>
    </div>
  );
}

export default NavBarUser;
