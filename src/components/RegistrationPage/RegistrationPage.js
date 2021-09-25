import { Link } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RregisterForm';
import Section from '../Section/Section';

import s from '../LoginPage/LoginPage.module.css';

const RegistrationPage = () => {
  return (
    <>
      <h1>Registration</h1>
      <p>
        To create an account please fill out the following the registration form
      </p>
      <Section>
        <RegistrationForm />
      </Section>
      <p>If You have an account, please</p>

      <Link to="/login" className={s.link}>
        Login
      </Link>
    </>
  );
};
export default RegistrationPage;
