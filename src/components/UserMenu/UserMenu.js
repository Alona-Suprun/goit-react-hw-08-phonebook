import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authUser/authUser-selectors';
import { logOut } from '../../redux/authUser/authUser-operations';

import Button from '../Button/Button';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <>
      <p>{userEmail}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log out
      </Button>
    </>
  );
};
export default UserMenu;
