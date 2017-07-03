import React from 'react';
import AppMainBar from '../common/bar/app-bar';
import SideMenu from '../common/menu/side-menu';

class Home extends React.Component {
    render() {
        return (
            <div id="main">
                <AppMainBar title="Harvester Admin" />
                <SideMenu />
            </div>


        )
    }
}

export default Home;