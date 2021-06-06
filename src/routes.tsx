import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isUserAuthenticated } from './pages/helper/authenticationutil';
import Home from './pages/home/Home';
import Eyeglasses from './pages/list/eyeglasses/Eyeglasses';
import Sunglasses from './pages/list/sunglasses/Sunglasses';

// handle auth and authorization
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props) => {
      const isAuthTokenValid = isUserAuthenticated();
      if (!isAuthTokenValid) {
        // not logged in so redirect to login page with the return url
        return (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        );
      }

      // authorised so return component
      return <Component {...props} />;
    }}
  />
);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    route: Route,
    exact: true,
  },
  {
    path: '/eyeglasses',
    name: 'Eye Glasses',
    component: Eyeglasses,
    route: Route,
    exact: true,
  },
  {
    path: '/sunglasses',
    name: 'Sun Glasses',
    component: Sunglasses,
    route: Route,
    exact: true,
  },
  {
    path: '/details',
    name: 'Details',
    component: PrivateRoute,
    route: Route,
    exact: true,
  },
  {
    path: '/lense',
    name: 'Contact Lense',
    component: PrivateRoute,
    route: Route,
    exact: true,
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Home,
    route: PrivateRoute,
    exact: true,
  },
  //nothing matches
  {
    path: '*',
    name: 'Home',
    component: Home,
    route: PrivateRoute,
    exact: true,
  },
];

export { routes, PrivateRoute };
