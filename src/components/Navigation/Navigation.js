import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { getUserIsLogedIn } from '../../redux/authUser/authUser-selectors';

import s from './Navigation.module.css';

const UserNavigation = () => {
  const userIsLogedIn = useSelector(getUserIsLogedIn);

  return (
    <>
      <ul className={s.navigation}>
        <li>
          <NavLink
            exact
            to="/"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Home
          </NavLink>
        </li>
        {userIsLogedIn && (
          <li>
            <NavLink
              exact
              to="/phonebook"
              className={s.navLink}
              activeClassName={s.navLinkActive}
            >
              Phonebook
            </NavLink>
          </li>
        )}
      </ul>
    </>
  );
};

export default UserNavigation;
