import { combineReducers } from 'redux';


const account = (state = { errorMessage: "" }, action) => {
  switch (action.type) {
    case 'DO_LOGIN_SUCCESS':
      return {
        ...state,
        token: action.account.token,
        expDate: action.account.expDate,
        isLoggedIn: true
      }
    case 'DO_LOGOUT':
      return { errorMessage: "" }
    case 'DO_LOGIN_REQUEST':
      return {
        ...state,
        errorMessage: "",
        isProcessing: true
      }
    case 'DO_LOGIN_FAILURE':
      return {
        ...state,
        errorMessage: action.message
      }
    case 'ERROR_CLEAN':
      return {
        ...state,
        errorMessage: ""
      }
    default:
      return {
        ...state
      };
  }
}


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
    case 'TOGGLE_MENU':
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }
    default:
      return state;

  }
}


const mainReducer = combineReducers({
  account,
  main
});

export default mainReducer;

export const getIsProcessing = (state) => {
  return state.main.isProcessing || false;
}

