import { createStore, applyMiddleware } from 'redux';
//for caching the data to local storage so that when we refresh the page, the data is available
import { persistStore } from 'redux-persist';
//for logging out states to the console
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//creating a persisted version of store
const persistor = persistStore(store);

export { store, persistor };