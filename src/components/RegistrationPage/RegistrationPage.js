import { Link } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RregisterForm';
import Section from '../Section/Section';

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
      <p>If Yuohave an account, please</p>

      <Link to="/login">Login</Link>
    </>
  );
};
export default RegistrationPage;
