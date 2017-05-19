import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './home';
import Login from './login';
import '../styles/root.scss';

require('normalize.css/normalize.css');

//this is for material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class Root extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={this.props.store}>
          <Router>
            <div>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

Root.defaultProps = {
};

export default Root;
