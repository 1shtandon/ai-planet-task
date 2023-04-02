import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './root-reducer';

import { logger } from 'redux-logger';

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

