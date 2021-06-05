import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isUserAuthenticated } from './pages/helper/authenticationutil';
import Home from './pages/home';
import FrameList from './pages/list/FrameList';

// handle auth and authorization
const PrivateRoute = ({ component: Component, roles, ...rest }: any) => (
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
    path: '/list',
    name: 'List',
    component: FrameList,
    route: PrivateRoute,
    exact: true,
  },
  {
    path: '/details',
    name: 'Details',
    component: Home,
    route: Route,
    exact: true,
  },
  {
    path: '/lense',
    name: 'Contact Lense',
    component: FrameList,
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
