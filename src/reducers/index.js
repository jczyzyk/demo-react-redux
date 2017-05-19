import { combineReducers } from 'redux';
//import login, * as fromLogin from './login';

const main = (state = { isProcessing: false, errorMessage: '' }, action) => {
  switch (action.type) {
    case 'START_REQUEST':
      return {
        ...state,
        isProcessing: true
      }
    case 'END_REQUEST':
      return {
        ...state,
        isProcessing: false
      }
    default:
      return state;

  }
}

const mainReducer = combineReducers({
  main

});

export default mainReducer;

export const getIsProcessing = (state) => {
  return state.main.isProcessing || false;
}

