import React from 'react';

const TopNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <h6 className="navbar-brand">My App</h6>
        <a className="btn btn-outline-light" href="#/login">Login</a>
      </div>
    </nav>
  );
};

export default TopNavbar;
