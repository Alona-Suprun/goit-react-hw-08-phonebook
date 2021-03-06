import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { fetchCurrentUser } from './redux/authUser/authUser-operations';
import { getFetchingCurrentUser } from './redux/authUser/authUser-selectors';
//import { getUserIsLogedIn } from './redux/authUser/authUser-selectors';
import AppBar from './components/AppBar/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() =>
  import(
    './components/HomePage/HomePage.js' /*webpackChunkName: "home-page" */
  ),
);
const PhonebookPage = lazy(() =>
  import(
    './components/PhonebookPage/PhonebookPage.js' /*webpackChunkName: "phonebook" */
  ),
);
const RegistrationPage = lazy(() =>
  import(
    './components/RegistrationPage/RegistrationPage.js' /*webpackChunkName: "registration-page" */
  ),
);
const LoginPage = lazy(() =>
  import(
    './components/LoginPage/LoginPage.js' /*webpackChunkName: "login-page" */
  ),
);

const App = () => {
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);
  // const userIsLogedIn = useSelector(getUserIsLogedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />
        <Suspense fallback={<Loader type="Circles" color="#efb3ac" />}>
          <Switch>
            <PublicRoute path="/" exact>
              <HomePage />
            </PublicRoute>

            <PublicRoute path="/registration" redirectTo="/contacts" restricted>
              <RegistrationPage />
            </PublicRoute>

            <PublicRoute path="/login" redirectTo="/contacts" restricted>
              <LoginPage />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <PhonebookPage />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    )
  );
};

export default App;
