import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './root_reducer';
import saga from './root_saga';

export function configStore(initialState: object) {
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(saga);
  return store;
}
