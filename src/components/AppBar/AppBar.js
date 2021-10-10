import { getUserIsLoggedIn } from '../../redux/authUser/authUser-selectors';

import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import MainNavigation from '../Navigation/MainNavigation';
import UserMenu from '../UserMenu/UserMenu';
import s from '../Navigation/Navigation.module.css';

const AppBar = () => {
  const UserIsLoggedIn = useSelector(getUserIsLoggedIn);

  return (
    <>
      <ul className={s.navigation}>
        <li>
          <Navigation />
        </li>
        <li>{UserIsLoggedIn ? <UserMenu /> : <MainNavigation />}</li>
      </ul>
    </>
  );
};

export default AppBar;
