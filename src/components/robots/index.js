import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../styles/root.scss';

class RobotManager extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="mainView">
                Hello
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispachToProps = (dispach) => {
    return {

    }
}

export default withRouter(connect(mapStateToProps, mapDispachToProps)(RobotManager));