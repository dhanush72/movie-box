import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './styles';

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
  const location = useLocation();
  return (
    <div>
      <NavList>
        {links.map(({ to, text }) => (
          <li key={to}>
            <LinkStyled
              className={to === location.pathname ? 'active' : ''}
              to={to}
            >
              {text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Nav;
