import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    createLogger()
)(createStore);

const store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;