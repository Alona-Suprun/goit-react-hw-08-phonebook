import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Section from '../Section/Section';

const LoginPage = () => {
  return (
    <>
      <h1>Login</h1>
      <Section>
        <LoginForm />
      </Section>
      <p>If Yuo do not have an account</p>

      <Link to="/registration">Go to registration page</Link>
    </>
  );
};
export default LoginPage;
