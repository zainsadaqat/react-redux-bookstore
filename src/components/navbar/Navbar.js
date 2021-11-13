import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/Books',
      text: 'Books',
    },
    {
      id: 2,
      path: '/Categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="nav">
      <section className="navbar">
        <h2 className="logo">BookStore CMS</h2>
        <ul className="navbar-menu">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <ImUser />
    </nav>
  );
};
export default Navbar;
