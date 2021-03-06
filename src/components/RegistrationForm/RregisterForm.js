import { useDispatch } from 'react-redux';
import { register } from '../../redux/authUser/authUser-operations';
import Button from '../Button/Button';

import s from '../ContactForm/ContactForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const formSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(register({ name, email, password }));
    reset(e);
  };

  const reset = e => {
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
  };
  return (
    <>
      <form className={s.form} onSubmit={formSubmit}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            placeholder="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
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
            className={s.input}
            type="password"
            name="password"
            minLength="7"
            autoComplete="off"
            placeholder="7 symbols minimum"
            required
          />
        </label>
        <Button type="submit">Register</Button>
      </form>
    </>
  );
};

export default RegistrationForm;
