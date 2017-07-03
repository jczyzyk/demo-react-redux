import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import actionType from '../../../constants/actions';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

import '../../../styles/side-menu.scss';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    goto(dest, data) {
        this.props.history.push(dest);
        this.props.toggleMenu();
    }
    render() {
        return (
            <div className={"side-menu" + (this.props.isMenuOpen ? " open" : "")}>
                <List>
                    <ListItem primaryText="Robots"
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Set tags"
                                onTouchTap={() => { this.goto('/robots/tags') }}
                            />,
                            <ListItem
                                key={2}
                                primaryText="Reload robots"
                            />,
                            <ListItem
                                key={3}
                                primaryText="Install robots"
                            />
                        ]}
                    />

                    <Divider />
                    <MenuItem primaryText="Logout" />

                </List>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isMenuOpen: state.main.isMenuOpen || false
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => {
            dispatch({ type: actionType.ToggleMenu });
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideMenu));