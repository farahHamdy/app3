import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
      <div className='nav'>
          <h2>logo</h2>
          <ul>
              <NavLink to="/">Home</NavLink>
              <NavLink to="About">About</NavLink>
              <NavLink to="Service">Service</NavLink>
              <NavLink to="Contact Us">Contact Us</NavLink>
          </ul>
          <button>Login</button>
      </div>
  );
}
