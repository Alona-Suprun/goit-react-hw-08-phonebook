import { lazy, Suspense } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Navigation.module.css';

const HomePage = lazy(() =>
  import('../HomePage/HomePage.js' /*webpackChunkName: "home-page" */),
);
const PhonebookPage = lazy(() =>
  import(
    '../PhonebookPage/PhonebookPage.js' /*webpackChunkName: "phonebook" */
  ),
);
const RegistrationPage = lazy(() =>
  import(
    '../RegistrationPage/RegistrationPage.js' /*webpackChunkName: "registration-page" */
  ),
);
const LoginPage = lazy(() =>
  import('../LoginPage/LoginPage.js' /*webpackChunkName: "login-page" */),
);

const Navigation = () => (
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
      <li>
        <NavLink
          to="/phonebook"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Phonebook
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/registration"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Registration
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={s.navLink}
          activeClassName={s.navLinkActive}
        >
          Login
        </NavLink>
      </li>
    </ul>
    <Suspense fallback={<Loader type="Circles" color="#efb3ac" />}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/phonebook" component={PhonebookPage} />
        <Route exact path="/registration" component={RegistrationPage} />
        <Route exact path="/login" component={LoginPage} />
      </Switch>
    </Suspense>
  </>
);

export default Navigation;
