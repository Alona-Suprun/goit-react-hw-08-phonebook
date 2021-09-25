import { Redirect, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { getUserIsLogedIn } from '../redux/authUser/authUser-selectors';

const PrivateRoute = ({ children, ...routeProps }) => {
  const isLogedIn = useSelector(getUserIsLogedIn);
  return (
    <Route {...routeProps}>
      {isLogedIn ? children : <Redirect to="/login" />}
    </Route>
  );
};
export default PrivateRoute;
