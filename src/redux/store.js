import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
