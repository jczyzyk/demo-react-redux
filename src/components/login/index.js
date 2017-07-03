import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { doLogin } from '../../actions/account';
import { Button } from '../common/buttons';
import { ValidateInput } from '../common/validation/validateInput';
import { ErrorManager } from '../common/errorManager';
import actionType from '../../constants/actions';

import TextField from 'material-ui/TextField';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import '../../styles/login.scss';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.email = '';
        this.password = '';
    }
    onSubmit(){
        this.props.doLogin({ username: 'jony', password:'123'}, this.props.history);
    }
    render() {
        return (
            <div className="login-container">
                <Card className="login" >
                    <CardHeader
                        title="Harvester Admin"
                        subtitle=""
                        actAsExpander={false}
                        showExpandableButton={false}
                    />
                    <CardText expandable={false}>
                        <TextField hintText="Username" type="text" errorText="" />
                        <br />
                        <TextField hintText="Password" type="password" />
                        <ErrorManager text={this.props.errorProcessing} />
                    </CardText>
                    <CardActions className="actions-container">
                        <Button
                            label="Login"
                            primary={true}
                            onClick={() => this.onSubmit()}
                            isProcessing={this.props.isProcessing}
                            className="login-btn">
                            Login
                         </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (user, history) => {
            dispatch(doLogin(user, history));
        },
        logout: () => {
            dispatch({ type: actionType.DO_LOGOUT });
        }
    };

};

const mapStateToProps = (state) => {
    return {
        isProcessing: state.main.isProcessing,
        errorProcessing: state.main.errorMessage || ""
    }

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


