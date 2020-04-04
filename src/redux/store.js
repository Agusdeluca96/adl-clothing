import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

import reducer from './reducer';

const middlewares = [logger];

export const store = createStore(reducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
