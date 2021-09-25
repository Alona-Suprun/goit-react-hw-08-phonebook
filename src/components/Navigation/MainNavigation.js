import React from 'react';
//import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';

//import { getUserIsLogedIn } from '../../redux/authUser/authUser-selectors';

import s from './Navigation.module.css';

const MainNavigation = () => {
  //const userIsLogedIn = useSelector(getUserIsLogedIn);

  return (
    <>
      <ul className={s.navigation}>
        <li>
          <NavLink
            exact
            to="/registration"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/login"
            className={s.navLink}
            activeClassName={s.navLinkActive}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default MainNavigation;
