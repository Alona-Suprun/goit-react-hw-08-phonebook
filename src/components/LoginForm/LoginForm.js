import { useDispatch } from 'react-redux';
import LogIn from '../../redux/user/user-operations';
import Button from '../Button/Button';

import s from '../ContactForm/ContactForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const formSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(LogIn({ email, password }));
    reset(e);
  };

  const reset = e => {
    e.target.email.value = '';
    e.target.password.value = '';
  };

  return (
    <form className={s.form} onSubmit={formSubmit}>
      <label className={s.label}>
        Email
        <input
          className={s.input}
          placeholder="email"
          type="email"
          name="email"
          required
        />
      </label>
      <label className={s.label}>
        Password
        <input
          autoComplete="off"
          placeholder="8 symbols minimum"
          className={s.input}
          type="password"
          name="password"
          required
        />
      </label>
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
