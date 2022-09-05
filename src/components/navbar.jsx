import React, { Component } from 'react';

const Navbar = ({counters}) => {
  console.log('Navbar - Rendered');
  return (<nav className="navbar bg-light">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Navbar <span className="badge badge-pill badge-secondary">{counters.filter(c=>c.value>0).length}</span></span>
  </div>
</nav>);
}
 
export default Navbar;