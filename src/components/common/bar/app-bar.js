import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import actionType from '../../../constants/actions';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

const styles = {
  title: {
    cursor: 'pointer',
  },
};

/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onTouchTap` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
class AppMainBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleTouchTap() {
    this.props.toggleMenu();
  }
  render() {
    return (
      <AppBar
        title={<span style={styles.title}>{this.props.title}</span>}
        onTitleTouchTap={ () => this.handleTouchTap() }
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        iconElementLeft={this.props.isMenuOpen ? <IconButton><NavigationClose /></IconButton> : null}
        onLeftIconButtonTouchTap = { () => { this.handleTouchTap() }}
      />

    );
  }

}
const mapDispatchToProps = (Dispatch) => {
  return {
    toggleMenu: () => {
      Dispatch({ type: actionType.ToggleMenu });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.main.isMenuOpen || false
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppMainBar);