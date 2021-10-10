import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from '../../redux/authUser/authUser-selectors';
import { logOut } from '../../redux/authUser/authUser-operations';

import Button from '../Button/Button';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <>
      <div className={s.userNav}>
        <p className={s.userName}>Welcome back! {userEmail}</p>
        <Button type="button" onClick={() => dispatch(logOut())}>
          Log out
        </Button>
      </div>
    </>
  );
};
export default UserMenu;
