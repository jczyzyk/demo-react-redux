import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
  isLoggedIn() {
    let account = this.props.store.getState().account;
    if(account && account.token && account.token.length > 0 && account.expDate > (new Date().getTime())){
      return true;
    } else{
      return false;
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={this.props.store}>
          <Router>
            <div>
              <Route exact path="/" render={ () =>  (this.isLoggedIn() ? <Home /> : <Redirect to="/login" />) } />
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
