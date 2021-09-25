import { getUserIsLogedIn } from '../../redux/authUser/authUser-selectors';

import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import MainNavigation from '../Navigation/MainNavigation';
import UserMenu from '../UserMenu/UserMenu';

const AppBar = () => {
  const UserIsLogedIn = useSelector(getUserIsLogedIn);

  return (
    <>
      <Navigation />
      {UserIsLogedIn ? <UserMenu /> : <MainNavigation />}
    </>
  );
};

export default AppBar;
