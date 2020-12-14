import React from 'react';
import { Link } from 'react-router-dom';

const links = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/starred',
    text: 'Starred',
  },
];

// eslint-disable-next-line arrow-body-style
const Nav = () => {
  return (
    <div>
      <ul>
        {links.map(({ to, text }) => (
          <li>
            <Link to={to} key={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
