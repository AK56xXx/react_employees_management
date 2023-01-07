import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Employees Management Application</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Employees List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Employee
        </NavLink>
        <NavLink to="/about" className="link" activeClassName="active">
          About
        </NavLink>
      </div>
    </header>
  );
};

export default Header;