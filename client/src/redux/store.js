import { createStore, applyMiddleware } from 'redux';
//for caching the data to local storage so that when we refresh the page, the data is available
import { persistStore } from 'redux-persist';
//for logging out states to the console
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';

import rootReducer from './root-reducer';
// import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];


if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

//creating a persisted version of store
const persistor = persistStore(store);

export { store, persistor };