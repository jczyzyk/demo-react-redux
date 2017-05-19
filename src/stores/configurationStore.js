import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage'
import mainReducer from '../reducers';


const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

//const enhancer = compose(applyMiddleware(...middlewares), persistState(['config']));
const enhancer = compose(applyMiddleware(...middlewares));

  return createStore(mainReducer, enhancer);
};

export default configureStore;