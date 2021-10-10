import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Section from '../Section/Section';

import s from '../LoginPage/LoginPage.module.css';

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <Section>
        <LoginForm />
      </Section>
      <p className={s.link}>If You do not have an account</p>

      <Link to="/registration" className={s.link}>
        Go to registration page
      </Link>
    </>
  );
};
export default LoginPage;
