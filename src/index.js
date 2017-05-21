import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './stores/configurationStore';

const store = configureStore();

// debugger;
// let st = store.getState();

// store.subscribe(()=>{
//   localStorage.setItem('reduxState', JSON.stringify(store.getState().account))
// })

// Render the main component into the dom
ReactDOM.render(<Root store={store}/>, document.getElementById('app'));