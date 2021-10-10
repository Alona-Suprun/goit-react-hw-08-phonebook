import React from 'react';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

import { getUserIsLoggedIn } from '../../redux/authUser/authUser-selectors';

import s from './Navigation.module.css';

const UserNavigation = () => {
  const userIsLoggedIn = useSelector(getUserIsLoggedIn);
  //className={s.navigation}
  return (
    <>
      <NavLink
        exact
        to="/"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Home
      </NavLink>

      {userIsLoggedIn && (
        <NavLink
          exact
          to="/contacts"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Phonebook
        </NavLink>
      )}
    </>
  );
};

export default UserNavigation;
