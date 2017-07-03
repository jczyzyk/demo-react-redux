import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './stores/configurationStore';

const store = configureStore();


// Render the main component into the dom
ReactDOM.render(<Root store={store}/>, document.getElementById('app'));