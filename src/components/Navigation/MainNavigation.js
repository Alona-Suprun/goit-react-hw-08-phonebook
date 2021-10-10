import React from 'react';
//import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

//import { getUserIsLogedIn } from '../../redux/authUser/authUser-selectors';

import s from './Navigation.module.css';

const MainNavigation = () => {
  //const userIsLogedIn = useSelector(getUserIsLogedIn);
  //className={s.navigation}
  return (
    <>
      <NavLink
        exact
        to="/registration"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Registration
      </NavLink>

      <NavLink
        exact
        to="/login"
        className={s.navLink}
        activeClassName={s.navLinkActive}
      >
        Login
      </NavLink>
    </>
  );
};

export default MainNavigation;
