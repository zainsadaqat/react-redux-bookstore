import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { userIcon } from '../../assets/userIcon.svg';

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
    <nav>
      <section className="navbar">
        <h2>BookStore CMS</h2>
        <div className="div1" />
        <ul className="navbar-menu">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
      <image src={userIcon} alt="logo" />
    </nav>
  );
};
export default Navbar;
