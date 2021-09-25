import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getUserIsLogedIn } from '../redux/authUser/authUser-selectors';

const PublicRoute = ({ children, restricted = false, ...routeProps }) => {
  const isLogedIn = useSelector(getUserIsLogedIn);
  const shouldRedirect = isLogedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};
export default PublicRoute;
