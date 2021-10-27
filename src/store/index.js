import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';


const logger = createLogger();
let middleware = [];
middleware = [...middleware, thunk, logger];

const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middleware))
);

export {
    store
}