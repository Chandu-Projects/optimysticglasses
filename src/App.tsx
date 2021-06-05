import React, { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/App.scss';
import Layout from './pages/Layout';
import { routes } from './routes';
import CarouselLoader from './components/loader/CarouselLoader';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, name, exact, ...route }: any, key: any) => {
          return (
            <route.route
              exact={exact}
              path={path}
              key={key}
              component={(props: any) => {
                /*const crumbs = routes
                  .filter(({ path }) => props.match.path.indexOf(path) !== -1)
                  .map(({ path, ...rest }) => ({
                    path: Object.keys(props.match.params).length
                      ? Object.keys(props.match.params).reduce(
                          (path, param) =>
                            path.replace(
                              `:${param}`,
                              props.match.params[param]
                            ),
                          path
                        )
                      : path,
                    ...rest,
                  }));*/

                return (
                  <Suspense fallback={<CarouselLoader />}>
                    <Layout {...props}>
                      {/* <YCBreadCrumbs crumbsList={crumbs.reverse()} /> */}
                      <route.component {...props} name={name} />
                    </Layout>
                  </Suspense>
                );
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
